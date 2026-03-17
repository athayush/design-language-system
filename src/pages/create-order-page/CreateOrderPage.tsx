import { ServiceDrawer } from "@/commerce/components/ServiceDrawer";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/general/atoms/button/Button";
import { Section } from "@/general/atoms/section/Section";
import { AppBarWithBack } from "@/general/navigation/appbar/AppBarWithBack";
import { Layout } from "@/general/templates/layout/Layout";
import { X } from "lucide-react";
import { useState } from "react";
// import { useState } from "storybook/internal/preview-api";

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

function CreateOrderPage() {
    const [isOrderCreating, setIsOrderCreating] = useState(false);

    const handleOrderCreating = () => {
        setIsOrderCreating(prev => !prev);
    };

    return (
        <Layout>
            <AppBarWithBack title="Create Order By Employee"><Button onClick={handleOrderCreating}>Create Order</Button></AppBarWithBack>
            <Section title="Basic Details" className={{ section: "mt-4 space-y-4" }}>
                <Label className="font-semibold mb-2 block">Email</Label>
                <div className="flex gap-4 items-center">
                    <Input placeholder="Enter your email" />
                    {!isOrderCreating && (
                        <Button>
                            Fetch
                            Details
                        </Button>
                    )}
                </div>
                <span className="font-semibold text-sm mb-2">Fetched User</span>
                <div className="border p-2 bg-surface-container-low rounded-xl">
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
                    <Card className="gap-2 p-4 mb-14">
                        <CardTitle className="text-xl flex font-semibold">
                            Order Summary
                            {!isOrderCreating && <ServiceDrawer />}
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
                        <form className="flex items-center gap-4">
                            <Input placeholder="Enter Promo Code" />
                            {!isOrderCreating
                                && (
                                    <Button type="submit" >
                                        Apply
                                    </Button>
                                )}
                        </form>
                        <div className="mt-2 text-sm font-medium text-green-600 flex justify-between items-center">
                            <span>Promo applied!</span>
                            <Button variant="ghost" size="sm" className="h-auto p-0" >
                                <X size={14} />
                            </Button>
                        </div>

                        <Separator className="my-6" />
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>
                                    ₹ 3500

                                </span>
                            </div>

                            <div className="flex justify-between text-green-500">
                                <span>Discount</span>
                                <span>
                                    - ₹ 400

                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>FREE</span>
                            </div>
                            <Separator className="my-2" />
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total</span>
                                <span>
                                    ₹
                                    3100
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </Section>
            {isOrderCreating
                && (
                    <div className="fixed bottom-0 z-50 inset-x-0 m-0 p-0 h-fit flex flex-row">
                        <Button
                            type="button"
                            variant="secondary"
                            className="w-1/2 rounded-none h-14"
                        >
                            Cancel Order
                        </Button>
                        <Button
                            className="w-1/2 py-3 h-14 rounded-none"
                            asChild
                        >
                            <a href="#">
                                Confirm Payment
                            </a>
                        </Button>
                    </div>
                )}
        </Layout>
    );
}

export { CreateOrderPage }