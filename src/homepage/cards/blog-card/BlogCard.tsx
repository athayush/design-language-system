import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type BlogCardProps = {
    image: string;
    title: string;
    date: string;
    author: string;
    description: string;
    categories?: string[];
};

type BlogsProps = {
    blog: BlogCardProps
}

function BlogCard({ blog }: BlogsProps) {
    return (
        <Card className="gap-4 pt-0 overflow-hidden">
            <img
                src={blog.image}
                // width="500"
                height="420"
                alt={blog.title}
                className="object-cover w-full h-48"
            />
            <CardHeader className="gap-2">
                <div className="flex justify-between">
                    <small>{blog.date}</small>
                    <small>
                        By - {" "}
                        {blog.author}
                    </small>
                </div>
                <CardTitle className="text-lg">{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm">{blog.description}</p>
                {blog.categories &&
                    <div className="flex flex-wrap gap-2 mt-3">
                        {blog.categories.map(category => (
                            <span
                                key={category}
                                className="px-2.5 py-1 text-xs text-blue-600 bg-blue-100 rounded-full"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                }
            </CardContent>
        </Card>
    )
}

export { BlogCard }