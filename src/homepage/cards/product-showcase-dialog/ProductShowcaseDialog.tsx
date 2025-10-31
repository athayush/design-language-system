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
import {  ShoppingCart } from 'lucide-react';

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
                className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
            >
                <MorphingDialogImage
                    src='https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg'
                    alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                    className='max-h-48 w-full object-cover'
                />
                <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                    <div>
                        <MorphingDialogTitle className='text-zinc-950 text-left dark:text-zinc-50'>
                            Table Lamp
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className='text-zinc-700 text-sm text-left line-clamp-1 dark:text-zinc-400'>
                            Best Lamp To Buy
                        </MorphingDialogSubtitle>
                    </div>
                    <Button
                        type='button'
                        className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
                        aria-label='Open dialog'
                    >
                        <ShoppingCart size={12} />
                    </Button>
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
                        src='https://motion-primitives.com/eb-27-lamp-edouard-wilfrid-buquet.jpg'
                        alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                        className='h-full w-full'
                    />
                    <div className='p-6'>
                        <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                            EB27
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                            Edouard Wilfrid Buquet
                        </MorphingDialogSubtitle>
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
                                Research conducted in the 1970s revealed that he’d designed the
                                “EB 27” double-arm desk lamp in 1925, handcrafting it from
                                nickel-plated brass, aluminium and varnished wood.
                            </p>
                            <a
                                className='mt-2 inline-flex text-zinc-500 underline'
                                href='https://www.are.na/block/12759029'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Are.na block
                            </a>
                        </MorphingDialogDescription>
                    </div>
                    <MorphingDialogClose className='text-zinc-50' />
                </MorphingDialogContent>
            </MorphingDialogContainer>
        </MorphingDialog>
    );
}

export { ProductShowcaseDialog }