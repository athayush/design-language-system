import  { useState } from "react";
import {
  Bookmark,
  ChevronRightCircle,
  Share2,
  ShoppingCart,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/general/atoms/badge/Badge";

const mockCartItems = [
  {
    id: 1,
    title: "Classic Cotton T-Shirt",
    image: "https://www.urbanmonkey.com/cdn/shop/files/Blue_Vintage_80s_Sports_Track_Jacket_01.jpg?v=1761564960&width=900",
    price: 499,
    mrp: 799,
    cartQuantity: 1,
  },
  {
    id: 2,
    title: "Stylish Sneakers",
    image: "https://www.urbanmonkey.com/cdn/shop/files/bio-hazard-mnky-25tsbfr16-rd-xs-4039664.jpg?v=1756806915&width=900",
    price: 1499,
    mrp: 1999,
    cartQuantity: 2,
  },
];

function ShoppingCartSheet() {
  const [items, setItems] = useState(mockCartItems);

  const updateQuantity = (id: number, quantity: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cartQuantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getItemCount = () =>
    items.reduce((count, item) => count + item.cartQuantity, 0);

  const getTotal = () =>
    items.reduce((total, item) => total + item.price * item.cartQuantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart />
          {getItemCount() > 0 && (
            <span className="absolute z-10 top-0.5 right-0.5 p-0.5 rounded-full bg-primary text-background text-[8px]">
              {getItemCount()}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader className="pb-0">
          <div className="flex items-center gap-2.5">
            <ShoppingCart size={20} />
            <SheetTitle>
              Your Cart{" "}
              <span className="text-sm text-muted-foreground">
                ({getItemCount()} items)
              </span>
            </SheetTitle>
          </div>
        </SheetHeader>
        <Separator />
        <ScrollArea className="h-[65vh]">
          {items.length === 0 ? (
            <p className="p-4 text-center text-muted-foreground">
              Your cart is empty
            </p>
          ) : (
            items.map((item) => (
              <Card
                key={item.id}
                className="gap-4 px-2 py-0 pb-4 mx-2 mb-4 border-0 border-b rounded-none shadow-none last:mb-32"
              >
                <CardContent className="px-0 space-y-5">
                  <div>
                    <div className="flex items-center justify-between gap-3 pt-4">
                     <Badge variant={"outline"} className={{badge: "mb-2 text-green-500 border-green-500"}}>Ath Assured</Badge>
                      <div className="flex gap-6">
                        <Bookmark size={18} />
                        <Share2 size={18} />
                      </div>
                    </div>

                    <div className="flex w-full gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="shadow aspect-square size-20 object-cover rounded-2xl"
                      />
                      <div className="w-full mt-2">
                        <p className="font-semibold">{item.title}</p>
                        <div className="flex items-center gap-2">
                          <p className="font-bold">Rs. {item.price}</p>
                          <p className="text-sm text-primary/50">
                            M.R.P.:{" "}
                            <span className="line-through">Rs. {item.mrp}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="justify-end gap-12">
                  <div className="flex items-center gap-10">
                    <Button
                      variant="outline"
                      onClick={() =>
                        updateQuantity(item.id, item.cartQuantity - 1)
                      }
                    >
                      -
                    </Button>
                    <p>{item.cartQuantity}</p>
                    <Button
                      variant="outline"
                      onClick={() =>
                        updateQuantity(item.id, item.cartQuantity + 1)
                      }
                    >
                      +
                    </Button>
                  </div>
                  <Trash
                    size={18}
                    className="cursor-pointer text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  />
                </CardFooter>
              </Card>
            ))
          )}
        </ScrollArea>

        <div className="sticky bottom-0 w-full px-4 pb-4 space-y-4 font-bold bg-background text-md">
          <Separator />
          <div className="flex items-center justify-between">
            <p>Subtotal: Rs. {getTotal()}</p>
            <Button asChild>
              <a href="#checkout" className="flex items-center gap-2">
                Proceed
                <ChevronRightCircle />
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export  {ShoppingCartSheet}