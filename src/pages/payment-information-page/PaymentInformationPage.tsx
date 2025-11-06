
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "@/general/atoms/section/Section";
import { AppBarWithBack } from "@/general/navigation/appbar/AppBarWithBack";
import { Layout } from "@/general/templates/layout/Layout";



const dummyProducts = [
    {
        cartItemId: "1",
        itemName: "Doctor Consultation",
        totalPrice: 1500,
    },
    {
        cartItemId: "2",
        itemName: "HRP Report",
        totalPrice: 1500,
    },
    {
        cartItemId: "3",
        itemName: "Medilocker",
        totalPrice: 500,
    },
];

function PaymentInformationPage() {
    return (
        <Layout>
            <AppBarWithBack title="Payment Information" />
            <Section>
                <span className="font-semibold block mt-4 mb-1 text-primary">User Detail</span>
                <div className="border p-2 bg-surface-container-low rounded-xl mb-4">
                    <span className="flex items-center gap-2">
                        <img
                            className="rounded-full"
                            src="https://coss.com/origin/avatar-40-01.jpg"
                            alt="Jenny Hamilton"
                            width={40}
                            height={40}
                        />
                        <span>
                            <span className="block font-medium">
                                Jenny Hamilton
                                {" "}
                                {" "}
                                <span className="text-xs">(@jenny)</span>
                            </span>
                            <span className="mt-0.5 block text-xs text-muted-foreground">
                                jennycodes@gmail.com
                            </span>
                        </span>
                    </span>
                </div>
                <div className="overflow-hidden">
                    <Card className="gap-2 p-4 ">
                        <CardTitle className="text-xl flex font-semibold">
                            Order Summary
                        </CardTitle>
                        <Separator className="my-4" />
                        <div className="space-y-4">
                            {/* {state.context.cart?.map(item => (
                                <div key={item.cartItemId} className="flex items-start gap-4">
                                    <img
                                        src="https://placehold.co/64x64/gray/white?text=Item"
                                        alt={item.itemName}
                                        className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                                    />

                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-sm whitespace-normal break-words">
                                            {item.itemName}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-end flex-shrink-0 ml-2">
                                        <p className="font-semibold">
                                            ₹
                                            {item.totalPrice.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))} */}
                            {dummyProducts.map(item => (
                                <div key={item.cartItemId} className="flex items-start gap-4">
                                    <img
                                        src="https://placehold.co/64x64/gray/white?text=Item"
                                        alt={item.itemName}
                                        className="h-16 w-16 rounded-md object-cover flex-shrink-0"
                                    />

                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold whitespace-normal break-words">
                                            {item.itemName}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end flex-shrink-0 ml-2">
                                        <p className="font-semibold">
                                            ₹
                                            {item.totalPrice.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Separator className="my-6" />
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>
                                    ₹ 3500
                                    {/* {subtotal.toFixed(2)} */}
                                </span>
                            </div>
                            {/* {discount > 0 && ( */}
                            <div className="flex justify-between text-green-500">
                                <span>Discount</span>
                                <span>
                                    - ₹ 400
                                    {/* {discount.toFixed(2)} */}
                                </span>
                            </div>
                            {/* )} */}
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>FREE</span>
                            </div>
                            <Separator className="my-2" />
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span>
                                    ₹ 3100
                                    {/* {total.toFixed(2)} */}

                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </Section>
            <Section title="Payment Details" className={{ section: "flex flex-col mt-4 space-y-4" }}>
                <div>
                    <Label className="font-semibold mb-2 block">Payment ID</Label>
                    <Textarea placeholder="Enter the payment ID" />
                </div>
                <div>
                    <Label className="font-semibold mb-2 block">Payment Provider</Label>
                    <Textarea placeholder="Enter the payment provider" />
                </div>
                <Button className="w-1/2 ml-auto">
                        Submit
                </Button>
            </Section>
        </Layout>
    );
}

export { PaymentInformationPage }