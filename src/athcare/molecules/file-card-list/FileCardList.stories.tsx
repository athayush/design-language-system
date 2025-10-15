import type { Meta, StoryObj } from "@storybook/react-vite";
import { FileCardList } from "./FileCardList";
import type { PGMedlockFile } from "../file-card/FileCard";

const meta: Meta<typeof FileCardList> = {
  title: "athcare/molecules/FileCardList",
  component: FileCardList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isRoot: {
      control: "boolean",
      description: "Indicates whether the list is rendered in the root directory",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileCardList>;

const mockFiles: PGMedlockFile[] = [
  {
    id: 1,
    ownerId: "550e8400-e29b-41d4-a716-446655440000",
    folderId: null,
    name: "Project Report.pdf",
    path: "/documents/project-report.pdf",
    url: "123e4567-e89b-12d3-a456-426614174000",
    mimeType: "application/pdf",
    sizeBytes: 102400,
    status: "active",
    uploadDate: "2024-10-01T10:00:00Z",
    lastModified: "2024-10-01T10:00:00Z",
    lastAccessed: "2024-10-05T12:00:00Z",
    version: 1,
    latestVersion: true,
    createdAt: "2024-10-01T09:00:00Z",
    updatedAt: "2024-10-02T09:00:00Z",
    deletedAt: null,
    deletionTime: null,
    addNote: "Reviewed and approved",
    tags: ["report", "pdf"],
  },
  {
    id: 2,
    ownerId: "550e8400-e29b-41d4-a716-446655440001",
    folderId: null,
    name: "Presentation Deck.pptx",
    path: "/presentations/deck.pptx",
    url: "123e4567-e89b-12d3-a456-426614174001",
    mimeType: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    sizeBytes: 204800,
    status: "active",
    uploadDate: "2024-09-25T10:00:00Z",
    lastModified: "2024-09-25T10:00:00Z",
    lastAccessed: "2024-10-03T12:00:00Z",
    version: 1,
    latestVersion: true,
    createdAt: "2024-09-25T09:00:00Z",
    updatedAt: "2024-09-26T09:00:00Z",
    deletedAt: null,
    deletionTime: null,
    addNote: "Final version",
    tags: ["presentation", "pptx"],
  },
];

export const Default: Story = {
  args: {
    files: mockFiles,
    isRoot: true,
  },
};

export const Empty: Story = {
  args: {
    files: [],
    isRoot: false,
  },
};