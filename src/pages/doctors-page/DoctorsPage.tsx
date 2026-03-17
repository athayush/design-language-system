import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/general/atoms/tabs/Tabs"
import ExploreLayout from "@/general/templates/explore-layout/ExploreLayout"

export const DoctorsPage = () => (
    <ExploreLayout>
        <div className="px-4 pt-4 mb-6">
            <Tabs defaultValue="online-consultation" className="items-start ">
                <TabsList className="w-full h-12 bg-surface-container text-on-surface shadow-sm dark:border">
                    <TabsTrigger value="online-consultation" className="data-[state=active]:bg-surface-container-lowest data-[state=active]:text-primary data-[state=active]:border w-1/2 h-full ">
                        Online Consultation
                    </TabsTrigger>
                    <TabsTrigger value="clinic-appointment" className="data-[state=active]:bg-surface-container-lowest data-[state=active]:text-primary data-[state=active]:border  w-1/2 h-full ">
                        Clinic Appointment
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="online-consultation" className="w-full">
                    <p className="text-muted-foreground p-2 text-center text-xs">
                        Showing the list for online consultation.
                    </p>
                </TabsContent>
                <TabsContent value="clinic-appointment" className="w-full">
                    <p className="text-muted-foreground p-2 text-center text-xs">
                        Showing the list for in-clinic appointment.
                    </p>
                    <img title="no-profile" src="/no-profile.webp" className="object-contain md:w-1/2 h-full w-full md:h-1/2 mx-auto" />
                    <p className="text-center text-2xl font-semibold pb-6 text-primary underline">No Profile Found</p>
                </TabsContent>
            </Tabs>
        </div>
    </ExploreLayout>
)
