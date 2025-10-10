import type { Meta, StoryObj } from "@storybook/react-vite";
import { TriangleAlertIcon } from "lucide-react";

import { MedilockerPage, mockPgMedlockFiles, mockPgMedlockFolders } from "./MedilockerPage";
import { ProfileLayout } from "@/general/templates/profile-layout.tsx/ProfileLayout";
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
    <ProfileLayout actions={<AddNewFolderDialog onValueChange={() => {}} />}>
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