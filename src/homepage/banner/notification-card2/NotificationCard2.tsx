import { Button } from '@/general/atoms/button/Button';

type NotificationCard2Props = {
    title: string;
    description?: string;
    path?: string; 
    points?: string[];
    buttonText?: string;
};

function NotificationCard2({
    title,
    description,
    path,
    points = [],
    buttonText = 'Learn More',
}: NotificationCard2Props) {
    return (
        <div className="w-full h-full">
            <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8 min-w-xs">
                <div
                    className="relative isolate h-full w-full overflow-hidden rounded-2xl"
                    style={{
                        background:
                            'linear-gradient(100.5deg,rgba(57,18,241,.4) 29.55%,rgba(164,129,255,.4) 93.8%),radial-gradient(38.35% 93.72% at 18.31% 6.28%,rgba(170,135,252,.8) 0,rgba(61,27,205,.8) 100%)',
                    }}
                >
                    <div className="relative w-full h-full isolate overflow-hidden p-4">
                        <h2 className="mt-3 max-w-md text-2xl font-semibold text-white md:text-3xl">
                            {title}
                        </h2>

                        {description && (
                            <p className="mt-3 max-w-2xl text-base text-gray-300 md:text-lg line-clamp-2">
                                {description}
                            </p>
                        )}

                        {path && (
                            <Button
                                className="absolute right-5 bg-transparent border rounded-2xl hover:bg-transparent"
                                asChild
                            >
                                <a href={path}>
                                    {buttonText}
                                </a>
                            </Button>
                        )}

                        {points && points.length > 0 && (
                            <ul className="mt-12 ml-4 list-disc text-sm text-gray-300 md:text-base">
                                {points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}

export { NotificationCard2 };