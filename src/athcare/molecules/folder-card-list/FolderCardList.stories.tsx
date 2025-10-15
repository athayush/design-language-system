import type { Meta, StoryObj } from "@storybook/react-vite";
import { FolderCardList, type PGMedlockFolder } from "./FolderCardList";
import { FolderCard } from "@/athcare/molecules/folder-card/FolderCard";

const mockFolders: PGMedlockFolder[] = [
  {
    id: 1,
    ownerId: "123e4567-e89b-12d3-a456-426614174000",
    name: "Medical Reports",
    path: "/medical-reports",
    folderCount: 5, fileCount: 25, totalSizeBytes: 20971520,
    status: "active", uploadDate: "2023-05-10T10:00:00Z", lastModified: "2025-10-01T14:30:00Z",
    lastAccessed: "2025-10-02T09:00:00Z", version: 1, latestVersion: true,
  },
];

const meta = {
  title: "athcare/molecules/FolderCardList",
  component: FolderCardList,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    folders: {
      control: "object",
      description: "An array of folder data objects.",
    },
    parentFolder: {
      control: "object",
      description: "Optional data for the parent folder.",
    },
  },
  render: function Render({ folders, parentFolder }) {
    if (!folders || folders.length === 0) {
      return (
        <div className="py-4 text-center">
          <p className="text-sm text-muted-foreground">No folders found</p>
        </div>
      );
    }
    return (
      <div className="space-y-4">
        {folders.map((folder: PGMedlockFolder) => (
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
      </div>
    );
  },
} satisfies Meta<typeof FolderCardList>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    folders: mockFolders,
    parentFolder: {
      id: 0,
      folderCount: 3,
      fileCount: 185,
      totalSizeBytes: 131072000,
    },
  },
};

export const EmptyState: Story = {
  args: {
    folders: [],
  },
};