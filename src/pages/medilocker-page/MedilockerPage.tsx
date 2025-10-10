/* eslint-disable react-refresh/only-export-components */
import { Section } from "@/general/atoms/section/Section";
import { Card } from "@/components/ui/card";
import { AddNewFolderDialog } from "@/athcare/molecules/add-new-folder-dialog/AddNewFolderDialog";
import { FileCardList } from "@/athcare/molecules/file-card-list/FileCardList";
import { FolderCardList } from "@/athcare/molecules/folder-card-list/FolderCardList";
import { ViewProvider } from "@/athcare/molecules/view-provider/ViewProvider";
import { ProfileLayout } from "@/general/templates/profile-layout.tsx/ProfileLayout";
import { TriangleAlertIcon } from "lucide-react";

const medilockerId = 1

export const mockPgMedlockFolders = [
  {
    id: 1,
    createdAt: "2025-09-10T10:12:34+00:00",
    updatedAt: "2025-09-20T14:32:45+00:00",
    deletedAt: null,
    ownerId: "a3b3e8a2-5c62-4c7b-bb59-86b0f1b92b32",
    name: "Root Documents",
    path: "/root/documents",
    parentId: null,
    folderCount: 3,
    fileCount: 12,
    totalSizeBytes: 15728640,
    status: "active",
    lastAccessed: "2025-09-22T09:45:30+00:00",
    version: 3,
    latestVersion: true,
    deletionTime: null,
    uploadDate: "2025-09-10T10:12:34+00:00",
    lastModified: "2025-09-20T14:32:45+00:00",
  },
  {
    id: 2,
    createdAt: "2025-09-11T09:05:12+00:00",
    updatedAt: "2025-09-18T17:10:45+00:00",
    deletedAt: null,
    ownerId: "a3b3e8a2-5c62-4c7b-bb59-86b0f1b92b32",
    name: "Medical Reports",
    path: "/root/documents/medical-reports",
    parentId: 1,
    folderCount: 2,
    fileCount: 5,
    totalSizeBytes: 5242880,
    status: "syncing",
    lastAccessed: "2025-09-20T07:22:40+00:00",
    version: 2,
    latestVersion: true,
    deletionTime: null,
    uploadDate: "2025-09-11T09:05:12+00:00",
    lastModified: "2025-09-18T17:10:45+00:00",
  },
];

export const mockPgMedlockFiles = [
  {
    id: 1,
    createdAt: "2025-09-15T08:45:10+00:00",
    updatedAt: "2025-09-25T12:30:45+00:00",
    deletedAt: null,
    ownerId: "a3b3e8a2-5c62-4c7b-bb59-86b0f1b92b32",
    folderId: 4,
    name: "Prescription_August2025.pdf",
    path: "/root/documents/medical-reports/prescriptions/Prescription_August2025.pdf",
    url: "b621f1e4-5892-4e4c-92b5-7b7dc6f0a11a",
    mimeType: "application/pdf",
    sizeBytes: 524288,
    status: "active",
    lastAccessed: "2025-09-26T11:10:22+00:00",
    version: 2,
    latestVersion: true,
    deletionTime: null,
    uploadDate: "2025-09-15T08:45:10+00:00",
    lastModified: "2025-09-25T12:30:45+00:00",
    addNote: "Uploaded after prescription renewal.",
    tags: ["prescription", "medical", "PDF"],
  },
  {
    id: 2,
    createdAt: "2025-09-15T08:45:10+00:00",
    updatedAt: "2025-09-25T12:30:45+00:00",
    deletedAt: null,
    ownerId: "a3b3e8a2-5c62-4c7b-bb59-86b0f1b92b32",
    folderId: 4,
    name: "Report_November2025.pdf",
    path: "/root/documents/medical-reports/prescriptions/Prescription_August2025.pdf",
    url: "b621f1e4-5892-4e4c-92b5-7b7dc6f0a11a",
    mimeType: "application/pdf",
    sizeBytes: 524288,
    status: "active",
    lastAccessed: "2025-09-26T11:10:22+00:00",
    version: 2,
    latestVersion: true,
    deletionTime: null,
    uploadDate: "2025-11-26T08:45:10+00:00",
    lastModified: "2025-09-25T12:30:45+00:00",
    addNote: "Uploaded after prescription renewal.",
    tags: ["prescription", "medical", "PDF"],
  },
];

function MedilockerPage(){
return (
    <ProfileLayout actions={medilockerId && <AddNewFolderDialog onValueChange={()=> {}} />}>
      {medilockerId
        ? (
            <>
              <ViewProvider title="Folders" defaultSortBy="Name" sortByOptions={["Date", "Last Access", "Last Modified", "Name"]}>
                <FolderCardList folders={mockPgMedlockFolders} />
              </ViewProvider>
              <ViewProvider title="Recent Files" defaultSortBy="Date" sortByOptions={["Date", "Last Access", "Last Modified", "Name"]} className={{ gridLayout: "grid-cols-3" }}>
                <FileCardList  files={mockPgMedlockFiles} isRoot={true} />
              </ViewProvider>
            </>
          )
        : (
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
          )}
    </ProfileLayout>
  );
}

export {MedilockerPage}