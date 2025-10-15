import { FileCard, type PGMedlockFile } from "../file-card/FileCard";

type FileCardListProps = {
  files: PGMedlockFile[];
  isRoot?: boolean;
  parentFolder?: {
    id: number;
    folderCount: number;
    fileCount: number;
    totalSizeBytes: number;
  };
  sortBy?: "Date" | "Last Access" | "Last Modified" | "Name";
  sortOrder?: "Asc" | "Desc";
};

export function FileCardList({
  files,
  isRoot = false,
  sortBy = "Name",
  sortOrder = "Asc",
}: FileCardListProps) {
  const fileSortedBy: keyof PGMedlockFile = (() => {
    switch (sortBy) {
      case "Date":
        return "uploadDate";
      case "Last Access":
        return "lastAccessed";
      case "Last Modified":
        return "lastModified";
      case "Name":
      default:
        return "name";
    }
  })();

  const fileList = [...files].sort((a, b) => {
    const aValue = a[fileSortedBy] ?? "";
    const bValue = b[fileSortedBy] ?? "";
    return sortOrder === "Asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });

  if (fileList.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-muted-foreground">No files found</p>
      </div>
    );
  }

  return (
    <>
      {fileList.map((file) => (
          <FileCard key={file.id} file={file} view="Grid" isRoot={isRoot} />
      ))}
    </>
  );
}