import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Stepper,
    StepperIndicator,
    StepperItem,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
} from "@/components/ui/stepper"
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/general/templates/layout/Layout";
import { AppBarWithBack } from "@/general/navigation/appbar/AppBarWithBack";
import { ShoppingCartSheet } from "../shopping-cart-sheet/ShoppingCartSheet";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { House } from "lucide-react";

type Address = {
    id: string;
    label: string;
    address: string;
    city: string;
    state: string;
    pinCode: string;
    editable: boolean;
};

const mockCartItems = [
    {
        id: 1,
        title: "Cotton T-Shirt",
        image: "https://www.urbanmonkey.com/cdn/shop/files/Blue_Vintage_80s_Sports_Track_Jacket_01.jpg?v=1761564960&width=900",
        price: 499,
        cartQuantity: 2,
    },
    {
        id: 2,
        title: "Running Shoes",
        image: "https://www.urbanmonkey.com/cdn/shop/files/bio-hazard-mnky-25tsbfr16-rd-xs-4039664.jpg?v=1756806915&width=900",
        price: 1599,
        cartQuantity: 1,
    },
];

const mockCoupons: Record<string, number> = {
    SAVE10: 0.1,
    DISCOUNT50: 0.5,
};

const steps = [
    { step: 1, title: "Add Products" },
    { step: 2, title: "Share Billing Details" },
    { step: 3, title: "Make Your Payment" },
];

function CheckoutPage() {
    const [couponInput, setCouponInput] = useState("");
    const [coupon, setCoupon] = useState<{ code: string; discount: number } | null>(
        null
    );
    const [items] = useState(mockCartItems);

    const getSubtotal = () =>
        items.reduce((total, item) => total + item.price * item.cartQuantity, 0);

    const getDiscount = () =>
        coupon ? getSubtotal() * coupon.discount : 0;

    const getTotal = () =>
        getSubtotal() - getDiscount();

    const handleApply = () => {
        const upper = couponInput.trim().toUpperCase();
        if (mockCoupons[upper]) {
            setCoupon({ code: upper, discount: mockCoupons[upper] });
            setCouponInput("");
        } else {
            alert("Invalid coupon code");
        }
    };

    const [addresses, setAddresses] = useState<Address[]>([
        {
            id: "home",
            label: "Home",
            address: "D-1201, GVS, Noida 201301",
            city: "Noida",
            state: "Uttar Pradesh",
            pinCode: "201301",
            editable: false,
        },
        {
            id: "office",
            label: "Office",
            address: "A-404, Lake View Apartments, Pune 411045",
            city: "Pune",
            state: "Maharashtra",
            pinCode: "411045",
            editable: false,
        },
        {
            id: "other",
            label: "Other",
            address: "",
            city: "",
            state: "",
            pinCode: "",
            editable: true,
        },
    ]);

    const [selectedAddress, setSelectedAddress] = useState<string>("");
    const [formData, setFormData] = useState({
        address: "",
        city: "",
        state: "",
        pinCode: "",
    });
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const handleSelect = (id: string) => {
        const selected = addresses.find((a) => a.id === id);
        if (!selected) return;

        setSelectedAddress(id);
        setIsEditable(selected.editable);
        setFormData({
            address: selected.address,
            city: selected.city,
            state: selected.state,
            pinCode: selected.pinCode,
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        if (!isEditable) return;
        const newAddressId = `custom-${addresses.length}`;
        const newAddress: Address = {
            id: newAddressId,
            label: `Custom ${addresses.length - 2}`,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            pinCode: formData.pinCode,
            editable: false,
        };
        setAddresses((prev) => [
            ...prev.filter((a) => a.id !== "other"),
            newAddress,
            {
                id: "other",
                label: "Other",
                address: "",
                city: "",
                state: "",
                pinCode: "",
                editable: true,
            },
        ]);
        setSelectedAddress(newAddress.id);
        setIsEditable(false);
    };

    const clearCoupon = () => setCoupon(null);

    const subtotal = getSubtotal();
    const discount = getDiscount();
    const total = getTotal();
    const shipping = subtotal > 0 ? 0 : 0;
    const tax = 100;

    return (
        <Layout>
            <AppBarWithBack title="Checkout"><ShoppingCartSheet trigger={<Button>Edit Order</Button>} /></AppBarWithBack>
            <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8 space-y-4">
                <h1 className="text-primary text-3xl font-semibold">Checkout</h1>
                <div className="max-w-2xl mb-6 hidden md:block mx-auto space-y-8 text-center">
                    <Stepper defaultValue={2}>
                        {steps.map(({ step, title }) => (
                            <StepperItem key={step} step={step} className="not-last:flex-1">
                                <StepperTrigger className="rounded max-md:flex-col">
                                    <StepperIndicator />
                                    <div className="text-center md:text-left">
                                        <StepperTitle>{title}</StepperTitle>
                                    </div>
                                </StepperTrigger>
                                {step < steps.length && (
                                    <StepperSeparator className="max-md:mt-3.5 md:mx-4" />
                                )}
                            </StepperItem>
                        ))}
                    </Stepper>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-2">
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div>
                            <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
                            <Label className="mb-1 text-base">Alternate Number</Label>
                            <Input type="number" placeholder="8899889988" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between w-full">
                                <h2 className="text-xl font-semibold">Shipping Address</h2>
                                <div>
                                    <Select onValueChange={handleSelect} value={selectedAddress}>
                                        <SelectTrigger className="w-48 text-left !h-12">
                                            <SelectValue placeholder="Select an address" />
                                        </SelectTrigger>
                                        <SelectContent className="-ml-4 w-full">
                                            {addresses.map((addr) => (
                                                <SelectItem key={addr.id} value={addr.id}>
                                                    <div className="flex flex-col text-sm">
                                                        <span className="font-semibold">{addr.label}</span>
                                                        {addr.address && (
                                                            <span className="text-muted-foreground text-sm line-clamp-2">
                                                                {addr.address}, {addr.city}, {addr.state} - {addr.pinCode}
                                                            </span>
                                                        )}
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="mt-4">
                                <Label className="mb-1 text-base">Address</Label>
                                <Textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    disabled={!isEditable}
                                    placeholder="D-1201, GVS, Noida 201301"
                                />
                            </div>
                            <div className="mt-4 grid grid-cols-1 gap-4">
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <Label className="mb-1 text-base">City</Label>
                                        <Input
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            disabled={!isEditable}
                                            placeholder="Noida"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <Label className="mb-1 text-base">State</Label>
                                        <Input
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            disabled={!isEditable}
                                            placeholder="Uttar Pradesh"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label className="mb-1 text-base">PIN Code</Label>
                                    <Input
                                        name="pinCode"
                                        type="number"
                                        value={formData.pinCode}
                                        onChange={handleChange}
                                        disabled={!isEditable}
                                        placeholder="201301"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            <Button type="button" className="w-full" size="lg">
                                Make Payment
                            </Button>
                            <Button
                                type="button"
                                variant="accent"
                                className="py-5"
                                size="sm"
                                disabled={!isEditable}
                                onClick={handleSave}
                            >
                                <House className="mr-2 h-4 w-4" /> Save
                            </Button>
                        </div>
                    </form>
                </div>

                <div>
                    <Card className="sticky top-8 gap-2 px-6 py-4">
                        <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
                        <div className="flex items-end justify-between gap-4">
                            <div className="w-full">
                                <Label className="mb-1 text-base">Coupon Code</Label>
                                <Input
                                    type="text"
                                    placeholder="GVS1002"
                                    value={couponInput}
                                    onChange={(e) => setCouponInput(e.target.value)}
                                    className="flex-1 w-full"
                                />
                            </div>
                            <Button onClick={handleApply}>Apply</Button>
                        </div>
                        <a href="#" className="text-xs  text-green-600 mb-4">*Your subscription code is applied successfully!</a>
                        {items.length > 0 ? (
                            <>
                                <div className="mb-6 space-y-4">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center space-x-4"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-16 w-16 rounded-lg object-cover"
                                            />
                                            <div className="flex-1">
                                                <h3 className="font-medium">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm">
                                                    Qty: {item.cartQuantity}
                                                </p>
                                            </div>
                                            <p className="font-medium">
                                                ₹{(item.price * item.cartQuantity).toFixed(2)}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Totals */}
                                <div className="space-y-2 border-t pt-4">
                                    <div className="flex justify-between">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal.toFixed(2)}</span>
                                    </div>

                                    {coupon && (
                                        <div className="flex justify-between text-green-600">
                                            <span>Discount ({coupon.code})</span>
                                            <span>- ₹{discount.toFixed(2)}</span>
                                        </div>
                                    )}

                                    <div className="flex justify-between">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Tax</span>
                                        <span>₹{tax.toFixed(2)}</span>
                                    </div>

                                    <div className="flex justify-between border-t pt-2 text-lg font-semibold">
                                        <span>Total</span>
                                        <span className={coupon ? "line-through text-gray-500" : ""}>
                                            ₹{subtotal + tax}
                                        </span>
                                    </div>

                                    {coupon && (
                                        <div className="flex justify-between text-lg font-semibold text-primary border-t py-2">
                                            <span>Total After Discount</span>
                                            <span>₹{total + tax}</span>
                                        </div>
                                    )}
                                </div>

                                {coupon && (
                                    <Button
                                        variant="ghost"
                                        className="text-sm text-red-500"
                                        onClick={clearCoupon}
                                    >
                                        Remove Coupon
                                    </Button>
                                )}
                            </>
                        ) : (
                            <p className="text-center">Your Cart Is Empty</p>
                        )}
                    </Card>
                </div>
            </div>

        </Layout>
    );
}

export { CheckoutPage }