/* eslint-disable @typescript-eslint/no-unused-vars */
import z from "zod"
import { EllipsisVerticalIcon } from "lucide-react";
import React, { useState } from "react";

import { FileIcon } from "@/general/icon/file-icon/FileIcon";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { MediLockerCombobox } from "@/athcare/atoms/medilocker-combobox/MedilockerCombobox";
export type PGMedlockFile = z.infer<typeof pgMedlockFilesSchema>

const pgMedlockFilesSchema = z.object({
    id: z.number().int("Must be an integer").positive().optional(),
    createdAt: z.iso.datetime({ offset: true }).optional(),
    updatedAt: z.iso.datetime({ offset: true }).optional(),
    deletedAt: z.iso.datetime({ offset: true }).optional().nullable(),
    ownerId: z.uuid("Invalid UUID format"),
    folderId: z.number().int("Must be an integer").positive().optional().nullable(),
    name: z.string(),
    path: z.string(),
    url:  z.uuid("Invalid UUID format").optional(),
    mimeType: z.string(),
    sizeBytes: z.number().int("Must be an integer").optional(),
    status: z.string(),
    lastAccessed: z.iso.datetime({ offset: true }).optional(),
    version: z.number().int("Must be an integer").default(1),
    latestVersion: z.boolean().default(true),
    deletionTime: z.iso.datetime({ offset: true }).optional().nullable(),
    uploadDate: z.iso.datetime({ offset: true }),
    lastModified: z.iso.datetime({ offset: true }),
    addNote: z.string().optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
});

export type FileCardProps = {
    file: PGMedlockFile;
    view?: 'Grid' | 'List';
    onRename?: () => void;
    onDelete?: () => void;
    isRoot?: boolean;
} & Omit<React.ComponentProps<typeof Card>, 'children'>;

export function FileCard({
    file,
    view = "Grid",
    onRename,
    onDelete,
    isRoot = false,
    ...props
}: FileCardProps) {
    const [isComboboxOpen, setIsComboboxOpen] = useState(false);

    const handleFileRenameCommand = () => {
        setIsComboboxOpen(false);
        if (onRename) onRename();
    };

    const handleFileDeleteCommand = () => {
        setIsComboboxOpen(false);
        if(onDelete) onDelete();
    };

    if (view === "Grid") {
        return (
            <Card
                className="w-full max-w-[350px] py-0 overflow-hidden gap-2"
                {...props}
            >
                <div className="w-full aspect-[5/3]">
                    <FilePreview name={file.name} url={file.url!} mimeType={file.mimeType} />
                </div>
                <div className="flex">
                    <CardHeader className="px-2 pb-2 pt-0 text-center gap-0 w-full truncate">
                        <CardTitle className="text-xs line-clamp-1">{file.name}</CardTitle>
                        <p className="text-[11px] text-muted-foreground">
                            {new Date(file.uploadDate).toLocaleDateString()}
                        </p>
                    </CardHeader>
                    <CardFooter className="p-0">
                        {!isRoot && (
                            <MediLockerCombobox icon={EllipsisVerticalIcon} isOpen={isComboboxOpen} setIsOpen={setIsComboboxOpen}>
                                <FileMenu
                                    handleRenameFile={handleFileRenameCommand}
                                    handleDeleteFile={handleFileDeleteCommand}
                                />
                            </MediLockerCombobox>
                        )}
                    </CardFooter>
                </div>
            </Card>
        );
    }

    // List View
    return (
        <Card
            className="flex flex-row items-center justify-between overflow-hidden gap-4 p-0 shadow-xs border-none"
            {...props}
        >
            <div className="size-20 rounded-full bg-primary-accent-container/30 aspect-square">
                <FilePreview name={file.name} url={file.url!} mimeType={file.mimeType} className="rounded-r-xl" />
            </div>
            <CardHeader className="w-full px-0 mr-3 truncate">
                <CardTitle className="line-clamp-1">{file.name}</CardTitle>
                <div className="flex gap-3 text-xs text-muted-foreground">
                    <p>{`● ${new Date(file.uploadDate).toLocaleDateString()}`}</p>
                </div>
            </CardHeader>
            <CardFooter className="p-0">
                {!isRoot && (
                    <MediLockerCombobox icon={EllipsisVerticalIcon} isOpen={isComboboxOpen} setIsOpen={setIsComboboxOpen}>
                        <FileMenu
                            handleRenameFile={handleFileRenameCommand}
                            handleDeleteFile={handleFileDeleteCommand}
                        />
                    </MediLockerCombobox>
                )}
            </CardFooter>
        </Card>
    );
}

type FilePreviewProps = {
    name: string;
    url: string;
    mimeType: string;
    className?: string;
};

export function FilePreview({ name, url, mimeType, className }: FilePreviewProps) {
    const styles = "w-full h-full object-cover";

    if (!url || url === "") {
        return (
            <img
                src="/images/placeholder-lg.svg"
                alt="No preview available"
                className={cn(styles, className)}
            />
        );
    }

    if (mimeType === "application/pdf" || mimeType === "pdf") {
        return (
            <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <div className={cn("p-2.5 bg-primary-container/30 w-full h-full", className)}>
                    <FileIcon className="size-full" color="var(--chart-4)" />
                </div>
            </a>
        );
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={url} alt={name} className={cn(styles, className)} />
        </a>
    );
}

type FileMenuProps = {
    handleRenameFile: () => void;
    handleDeleteFile: () => void;
};

function FileMenu({ handleRenameFile, handleDeleteFile }: FileMenuProps) {
    return (
        <Command>
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                    <CommandItem onSelect={handleRenameFile}>
                        Rename File
                    </CommandItem>
                    <CommandItem onSelect={handleDeleteFile}>
                        Delete File
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
