import { Card, CardTitle } from "@/components/ui/card";
import { Section } from "@/general/atoms/section/Section";
import { AppBarWithBack } from "@/general/navigation/appbar/AppBarWithBack";
import { Layout } from "@/general/templates/layout/Layout";

function EmployeeDashboardPage() {
    return (
        <Layout>
            <AppBarWithBack title="Employee Dashboard" />
            <Section>
                    <a href="#" className="mt-8 mx-auto block">
                        <Card className="px-4">
                            <CardTitle>Create New Order</CardTitle>
                        </Card>
                    </a>
            </Section>
        </Layout>
    );
}

export { EmployeeDashboardPage }


