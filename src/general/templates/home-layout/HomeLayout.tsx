
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "../layout/Layout";
import { AppBar, AppBarHeader } from "@/general/navigation/appbar/Appbar";
import { AthCareNavbar } from "@/general/navigation/navbar/AthcareNavbar";
import { Section } from "@/general/atoms/section/Section";

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
                    {/* <Icon icon={Bell} className={{ container: "bg-transparent border-primary shadow rounded-lg" }} /> */}
                    {user.appRoles.includes("admin") && (
                        <Button asChild>
                            <a href="/admin">Admin Dashboard</a>
                        </Button>
                    )}
                </AppBarHeader>
            </AppBar>
            <Section className={{section:"w-full space-y-6 md:max-w-3xl bg-surface-bright lg:max-w-4xl mx-auto"}}>
                {children}
            </Section>
            <AthCareNavbar />
        </Layout>
    );
}

export { HomeLayout };
