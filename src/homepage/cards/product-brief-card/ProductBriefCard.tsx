import { Card } from "@/components/ui/card";
import { Button } from "@/general/atoms/button/Button";

type ProductBriefCardProps = {
    id: string;
    image: string;
    title: string;
    quantity?: string;
    mrp: number;
    price: number;
    paymentButtonId?: string;
};

function ProductBriefCard({
    image,
    title,
    quantity,
    mrp,
    price,
}: ProductBriefCardProps) {

    return (
        <Card className="h-full w-fit py-0 bg-background">
            <div className="flex flex-col items-center text-center space-y-2 p-3">
                <a href="#">
                    <img
                        src={image}
                        alt={title}
                        className="h-28 w-28 object-contain rounded-lg"
                    />
                </a>
                <div className="text-sm max-w-10/12 font-medium line-clamp-2">
                    <a href="#">
                        {title}
                    </a>
                </div>
                <div className="text-xs text-muted-foreground">{quantity}</div>
                <div className="flex items-center gap-2">
                    <span className="text-base font-semibold">
                        ₹
                        {price}
                    </span>
                    <span className="line-through text-xs text-muted-foreground">
                        ₹
                        {mrp}
                    </span>
                </div>
                <Button className="mx-auto">Buy Now</Button>
            </div>
        </Card>
    );
}

export { ProductBriefCard };
