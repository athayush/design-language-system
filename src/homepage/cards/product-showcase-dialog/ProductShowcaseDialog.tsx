import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogTitle,
    MorphingDialogImage,
    MorphingDialogSubtitle,
    MorphingDialogClose,
    MorphingDialogDescription,
    MorphingDialogContainer,
} from "@/components/ui/morphin-dialog"
import { Button } from "@/general/atoms/button/Button";

function ProductShowcaseDialog() {
    return (
        <MorphingDialog
            transition={{
                type: 'spring',
                bounce: 0.05,
                duration: 0.25,
            }}
        >
            <MorphingDialogTrigger
                style={{
                    borderRadius: '12px',
                }}
                className='flex w-full md:w-sm flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
            >
                <MorphingDialogImage
                    src='/hibiscus4.png'
                    alt='hibiscus flower'
                    className='h-48 w-full object-cover'
                />
                <div className="p-4 flex flex-col gap-2">
                    <MorphingDialogTitle className='text-primary truncate text-left text-lg font-semibold leading-5 mb-2 '>
                        Hibiscus Tea - 50gm - Hibiscus Flower
                    </MorphingDialogTitle>
                    <MorphingDialogSubtitle className='text-zinc-700 text-sm text-left line-clamp-1 dark:text-zinc-400'>
                        Step into balance and vitality with Butterfly Pea Flower Tea. A powerhouse of natural antioxidants, this soothing blue brew helps protect your cells, supports a healthy metabolism, aids weight management, and is believed to sharpen focus and memory. A calming ritual for body and mind.
                    </MorphingDialogSubtitle>
                    <div className="flex items-center justify-center gap-6 mt-4">
                        <p className="text-2xl md:text-3xl font-bold text-left text-primary">
                            ₹
                            600
                            {" "}
                            <span className="line-through font-normal text-lg md:text-xl">
                                ₹
                                360
                            </span>
                        </p>
                    <Button>Buy Now</Button>
                    </div>
                </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent
                    style={{
                        borderRadius: '24px',
                    }}
                    className='pointer-events-auto mx-4 relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                >
                    <MorphingDialogImage
                        src='/hibiscus4.png'
                        alt='Hibiscus Flower'
                        className='h-full w-full'
                    />
                    <div className='p-6'>
                        <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                            Blue Tea - 50gm - Butterfly Pea (Aparajita FLower)
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                            1 Unit - 50g
                        </MorphingDialogSubtitle>
                        <p className="text-2xl font-semibold text-left  text-primary">₹360 <span className="line-through">₹600</span></p>

                        <MorphingDialogDescription
                            disableLayoutAnimation
                            variants={{
                                initial: { opacity: 0, scale: 0.8, y: 100 },
                                animate: { opacity: 1, scale: 1, y: 0 },
                                exit: { opacity: 0, scale: 0.8, y: 100 },
                            }}
                        >
                            <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                                Little is known about the life of Édouard-Wilfrid Buquet. He was
                                born in France in 1866, but the time and place of his death is
                                unfortunately a mystery.
                            </p>
                            <p className='text-zinc-500'>
                                Research conducted in the 1970s revealed that he'd designed the
                                “EB 27” double-arm desk lamp in 1925, handcrafting it from
                                nickel-plated brass, aluminium and varnished wood.
                            </p>
                            <div className="flex gap-4 items-center mt-4">
                                <Button variant={"outline"} className="w-1/2">More Details</Button>
                                <Button className="w-1/2">Buy Now</Button>
                            </div>
                        </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className='text-zinc-50' />
                </MorphingDialogContent>
            </MorphingDialogContainer>
        </MorphingDialog>
    );
}

export { ProductShowcaseDialog }