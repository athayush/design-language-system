import { Share2, Star } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "../layout/Layout";
import { AppBarWithBack } from "@/general/navigation/appbar/AppBarWithBack";
import { Section } from "@/general/atoms/section/Section";


type ServiceLayoutProps = {
    AppBar: {
        title: string;
        subTitle?: string;
        image?: {
            name?: string;
            profileUrl?: string;
            altText?: string;
        };
    };
} & React.ComponentProps<"section">;

function ServiceLayout({ AppBar, children }: ServiceLayoutProps) {
    return (
        <Layout>
            <AppBarWithBack
                title={AppBar.title}
                subTitle={AppBar.subTitle}
                image={
                    AppBar.image && AppBar.image.name && AppBar.image.profileUrl
                        ? {
                            name: AppBar.image.name,
                            profileUrl: AppBar.image.profileUrl,
                            altText: AppBar.image.altText,
                        }
                        : undefined
                }
            >
                <Button variant="ghost">
                    <Star size={20} />
                </Button>
                <Button variant="ghost">
                    <Share2 size={20} />
                </Button>
            </AppBarWithBack>
            <Section className={{ section: "space-y-6 mx-0" }}>
                {children}
            </Section>
        </Layout>
    );
}

export { ServiceLayout };
