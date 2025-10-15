import * as React from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Layout } from "../layout/Layout"; 
import { AppBar, AppBarHeader, AppBarSubMenu } from "@/general/navigation/appbar/Appbar";
import { AthCareNavbar } from "@/general/navigation/navbar/AthcareNavbar";
import { UserCombobox } from "@/general/atoms/user-combobox/UserCombobox";
import { UserPreviewCard } from "@/general/molecules/user-preview-card/UserPreviewCard";

type Option = {
  value: string;
  label: string;
  relation: string;
  profilePictureUrl?: string;
};


type ProfileLayoutProps = {
  children?: React.ReactNode;
  actions?: React.ReactNode;
};

const user = {
  id: "1",
  value: 1,
  name: "Ankush Kumar",
  username: "ankushh19",
  email: "ankush@g.com"
}

const profileTabs = [{
  label: "Profile"
},
{
  label: "History"
},
{
  label: "Docs"
}
]

export function ProfileLayout({ children, actions }: ProfileLayoutProps) {
  const [selectedOption] = React.useState<string | null>(user.id);
  const [options] = React.useState<Option[]>([{
    value: user.id,
    label: user.name,
    relation: user.email,
    profilePictureUrl: "",
  }]);

  return (
    <Layout>
      <AppBar>
        <AppBarHeader>
          <div className="w-full flex items-center gap-4">
            <UserCombobox
              options={options}
              value={selectedOption!}
              onClick={() => { }}
              triggerClassName="w-full flex-1 bg-surface-dim/30 hover:bg-surface-container-lowest"
            >
              <Command>
                <CommandInput placeholder="Filter option..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem>
                      <UserPreviewCard variant="list" name={user?.name} username={user?.username} avatar="" info={user?.email} />
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </UserCombobox>
            {actions}
          </div>
        </AppBarHeader>
        <AppBarSubMenu className="justify-around px-16">
          {profileTabs.map(option => (
            <span
              key={option.label}
            >
              {option.label}
            </span>
          ))}
        </AppBarSubMenu>
      </AppBar>
      <div className="space-y-6 relative">
        {children}
      </div>
      <AthCareNavbar />
    </Layout>
  );
}
