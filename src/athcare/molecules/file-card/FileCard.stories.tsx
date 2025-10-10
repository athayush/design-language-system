import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";

import { FileCard, type PGMedlockFile } from "./FileCard";


const meta = {
  title: "athcare/molecules/FileCard",
  component: FileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    file: {
      control: false, 
      description: "The file data object to display.",
    },
    view: {
      control: { type: "radio" },
      options: ["Grid", "List"],
      description: "Controls the layout style of the card.",
    },
    isRoot: {
      control: "boolean",
      description: "If true, the action menu is hidden.",
    },
    onRename: { action: "onRename" },
    onDelete: { action: "onDelete" },
  },
} satisfies Meta<typeof FileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseMockFile: PGMedlockFile = {
  id: 1,
  ownerId: "123e4567-e89b-12d3-a456-426614174000",
  name: "Annual_Medical_Checkup.png",
  path: "/files/Annual_Medical_Checkup.png",
  url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
  mimeType: "image/png",
  sizeBytes: 2097152, 
  status: "active",
  uploadDate: new Date("2024-09-15T10:30:00Z").toISOString(),
  lastModified: new Date("2024-10-01T14:00:00Z").toISOString(),
  version: 1,
  latestVersion: true,
};


export const GridView: Story = {
  args: {
    file: baseMockFile,
    view: "Grid",
    isRoot: false,
    onRename: action("onRename"),
    onDelete: action("onDelete"),
  },
};

export const ListView: Story = {
  args: {
    ...GridView.args, 
    view: "List",
  },
};

export const PDFFile: Story = {
  args: {
    ...GridView.args,
    file: {
      ...baseMockFile,
      id: 2,
      name: "Blood_Test_Results.pdf",
      mimeType: "application/pdf",
      url: "#", 
    },
    view: "Grid",
  },
};

export const LongFileName: Story = {
  args: {
    ...GridView.args,
    file: {
      ...baseMockFile,
      id: 3,
      name: "Patient_Consultation_and_Diagnosis_Report_from_Last_Year_Final_Version.jpg",
    },
    view: "Grid",
  },
};


export const InRootFolder: Story = {
  args: {
    ...GridView.args,
    isRoot: true,
  },
};