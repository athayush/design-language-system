import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/general/atoms/button/Button"
import { Section } from "@/general/atoms/section/Section"
import { AppBarWithBack } from "@/general/navigation/appbar/AppBarWithBack"
import { Layout } from "@/general/templates/layout/Layout"

function SubscriptionCodePage() {
    return (
        <Layout>
            <AppBarWithBack title="Subscription Activation" />
            <Section className={{ section: "space-y-2" }}>
                <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1761825746~exp=1761829346~hmac=ff08fa774b0e5f66daa7991760ef0140d153e2c8a6cdeab094c51c62bcba667a&w=1060" alt="image" className="rounded-2xl object-cover w-full max-h-80 mt-6" />
                <h4 className="text-2xl font-semibold">Subscription Activation Code</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat excepturi molestiae et possimus explicabo atque soluta quibusdam voluptates autem, dignissimos dolor, eaque fuga! Sint eaque cumque nesciunt sunt eveniet.</p>
                <div className="py-4 border-t w-full flex flex-col">
                    <Label id="subscription-code" className="mb-1 font-semibold text-base">Place Your Code Here</Label>
                    <Input id="subscription-code" placeholder="ATH2025SUB" />
                    <span className="text-xs  text-green-600">*Your subscription code is applied successfully!</span>
                    <Button className="ml-auto mt-3">Apply</Button>
                </div>
            </Section>
        </Layout>
    )
}

export { SubscriptionCodePage }