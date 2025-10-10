/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";


import { useView } from "@/hooks/use-view";
import { FolderCard } from "@/athcare/molecules/folder-card/FolderCard";

export type PGMedlockFolder = z.infer<typeof pgMedlockFoldersSchema>

const pgMedlockFoldersSchema = z.object({
  id: z.number().int("Must be an integer").positive().optional(),
  createdAt: z.iso.datetime({ offset: true }).optional(),
  updatedAt: z.iso.datetime({ offset: true }).optional(),
  deletedAt: z.iso.datetime({ offset: true }).optional().nullable(),
  ownerId: z.uuid("Invalid UUID format"),
  name: z.string(),
  path: z.string(),
  parentId: z.number().int("Must be an integer").positive().optional().nullable(),
  folderCount: z.number().int("Must be an integer"),
  fileCount: z.number().int("Must be an integer"),
  totalSizeBytes: z.number().int("Must be an integer"),
  status: z.string().describe("Current status of the folder (e.g., 'active', 'archived', 'pending_deletion', 'syncing', 'error')"),
  lastAccessed: z.iso.datetime({ offset: true }).optional().nullable(),
  version: z.number().int("Must be an integer").default(1),
  latestVersion: z.boolean().default(true),
  deletionTime: z.iso.datetime({ offset: true }).optional().nullable(),
  uploadDate: z.iso.datetime({ offset: true }),
  lastModified: z.iso.datetime({ offset: true }),
});

type FolderCardListProps = {
  folders: PGMedlockFolder[];
  parentFolder?: {
    id: number;
    folderCount: number;
    fileCount: number;
    totalSizeBytes: number;
  };
};

export function FolderCardList({ folders, parentFolder }: FolderCardListProps) {
  const { sortOrder, sortBy } = useView();

  const folderSortedBy: keyof PGMedlockFolder = (() => {
    switch (sortBy) {
      case "Date": return "uploadDate";
      case "Last Access": return "lastAccessed";
      case "Last Modified": return "lastModified";
      case "Name": return "name";
      default: return "name";
    }
  })();

  const folderList = [...folders].sort((a, b) =>
    sortOrder === "Asc" ? (a[folderSortedBy] ?? "").localeCompare(b[folderSortedBy] ?? "") : (b[folderSortedBy] ?? "").localeCompare(a[folderSortedBy] ?? ""),
  );

  if (folderList.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground">No folders found</p>
      </div>
    );
  }

  return (
    <>
      {folderList.map(folder => (
        <FolderCard
          key={folder.id}
          id={folder.id!}
          name={folder.name}
          path={folder.path}
          folderCount={folder.folderCount}
          fileCount={folder.fileCount}
          totalSizeBytes={folder.totalSizeBytes}
          parentFolder={parentFolder}
        />
      ))}
    </>
  );
}
