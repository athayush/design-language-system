
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "../layout/Layout";
import { AppBar, AppBarHeader } from "@/general/navigation/appbar/Appbar";
import { AthCareNavbar } from "@/general/navigation/navbar/AthcareNavbar";
import { Icon } from "@/design-tokens/icon/Icon";
import { Bell } from "lucide-react";

type HomeLayoutProps = {
    children?: React.ReactNode;
    title?: string;
    subTitle?: string;
};

function HomeLayout({ children, title = "AthAyush", subTitle }: HomeLayoutProps) {
    const user = {
        name: "Ankush Kumar",
        appRoles: ["user"]
    }

    return (
        <Layout>
            <AppBar>
                <AppBarHeader title={title} subTitle={subTitle}>
                    <Icon icon={Bell} className={{container: "bg-transparent border-primary shadow rounded-lg"}} />
                    {user.appRoles.includes("admin") && (
                        <Button asChild>
                            <a href="/admin">Admin Dashboard</a>
                        </Button>
                    )}
                </AppBarHeader>
            </AppBar>
            {children}
            <AthCareNavbar />
        </Layout>
    );
}

export { HomeLayout };
