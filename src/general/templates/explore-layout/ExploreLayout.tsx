import {
  Dumbbell,
  FlaskConical,
  Headset,
  Stethoscope,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { AppBar, AppBarHeader, AppBarSubMenu } from "@/general/navigation/appbar/Appbar";
import { Layout } from "../layout/Layout";
import { AutoCompleteSearchBar } from "@/homepage/searchbar/AutoCompleteSearchBar";
import { Main } from "@/general/atoms/main/Main";
import { AthCareNavbar } from "@/general/navigation/navbar/AthcareNavbar";
import { GeneralEnquiryDialog } from "@/athcare/molecules/general-enquiry-dialog/GeneralEnquiryDialog";

const exploreLinks = [
  {
    to: "#",
    icon: Stethoscope,
    label: "Doctors",
  },
  {
    to: "#",
    icon: Dumbbell,
    label: "Healthcare Experts",
  },
  {
    to: "#",
    icon: FlaskConical,
    label: "Diagnostics",
  },
];

type ExploreLayoutProps = React.ComponentProps<"div">;

function ExploreLayout({ children }: ExploreLayoutProps) {
  const [searchValue, setSearchValue] = React.useState();

  return (
    <Layout className="space-y-0">
      <AppBar>
        <AppBarHeader>
          <AutoCompleteSearchBar value={searchValue} onChange={() => setSearchValue} />
          <GeneralEnquiryDialog trigger={<Button size="icon" className="w-12" variant="outline"><Headset /></Button>} />
        </AppBarHeader>
        <AppBarSubMenu className="relative grid grid-cols-3 gap-1 rounded-full bg-primary/10 p-1 mb-1 overflow-hidden md:max-w-3xl lg:max-w-4xl mx-auto">
          {exploreLinks.map(link => (
            <a
              {...link}
              key={link.to}
              href={link.to}
              className="relative text-center py-2 rounded-full text-xs font-medium text-background bg-primary"
            >
              <span>
                {link.label}
              </span>
            </a>
          ),
          )}
        </AppBarSubMenu>
      </AppBar>
      <Main>
        {children}
      </Main>
      <AthCareNavbar />
    </Layout>
  );
}

export default ExploreLayout;
