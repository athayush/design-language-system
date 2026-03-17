import type { Meta, StoryObj } from "@storybook/react-vite";
import { TriangleAlertIcon } from "lucide-react";

import { MedilockerPage, mockPgMedlockFiles, mockPgMedlockFolders } from "./MedilockerPage";
import { ProfileLayout } from "@/general/templates/profile-layout/ProfileLayout";
import { AddNewFolderDialog } from "@/athcare/molecules/add-new-folder-dialog/AddNewFolderDialog";
import { ViewProvider } from "@/athcare/molecules/view-provider/ViewProvider"; 
import { FolderCardList } from "@/athcare/molecules/folder-card-list/FolderCardList"; 
import { FileCardList } from "@/athcare/molecules/file-card-list/FileCardList"; 
import { Section } from "@/general/atoms/section/Section";
import { Card } from "@/components/ui/card";

const meta = {
  title: "Pages/MedilockerPage",
  component: MedilockerPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MedilockerPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMedilockerId: Story = {
  render: () => (
    <ProfileLayout actions={<AddNewFolderDialog onOpenChange={() => {}} value="Untitled Folder" onValueChange={() => {}} />}>
      <>
        <ViewProvider title="Folders" defaultSortBy="Name" sortByOptions={["Date", "Last Access", "Last Modified", "Name"]}>
          <FolderCardList folders={mockPgMedlockFolders} />
        </ViewProvider>
        <ViewProvider title="Recent Files" defaultSortBy="Date" sortByOptions={["Date", "Last Access", "Last Modified", "Name"]} className={{ gridLayout: "grid-cols-3" }}>
          <FileCardList files={mockPgMedlockFiles} isRoot={true} />
        </ViewProvider>
      </>
    </ProfileLayout>
  ),
};

export const WithoutMedilockerId: Story = {
  render: () => (
    <ProfileLayout>
      <Section className={{ section: "my-4" }}>
        <Card className="!p-4 mb-6 md:mb-8 border-2 border-indigo-100/70">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-red-500/10 flex items-center justify-center">
              <TriangleAlertIcon className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-900">Medilocker Subscription Not Activated.</h3>
              <p className="text-sm text-gray-500 mt-0.5">Contact us to get "Lifetime Access" of Medi-Locker at Rs. 499 only. Offer valid till today.</p>
            </div>
          </div>
        </Card>
      </Section>
    </ProfileLayout>
  ),
};

export const EmptyMedilocker: Story = {
  render: () => (
    <ProfileLayout actions={<AddNewFolderDialog onOpenChange={() => {}} value="Untitled Folder" onValueChange={() => {}} />}>
      <Section className={{ section: "my-4 flex flex-col items-center justify-center text-center h-[70vh]" }}>
        <div className="w-20 h-20 rounded-full bg-surface-variant flex items-center justify-center mb-4">
          <TriangleAlertIcon className="w-10 h-10 text-on-surface-variant" />
        </div>
        <h3 className="text-xl font-semibold text-on-surface">No Files Uploaded In MediLocker Yet</h3>
        <p className="text-sm text-on-surface-variant mt-1 max-w-md">
          You haven't added any folders or files yet. Start organizing your medical records by creating your first folder.
        </p>
      </Section>
    </ProfileLayout>
  ),
};