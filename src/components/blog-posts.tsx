import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
    title: string;
    description: string;
    url: string;
}

interface BlogPostsProps {
    blogPosts: BlogPost[];
}

export function BlogPosts({ blogPosts }: BlogPostsProps) {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Blog Yazıları</h2>
            <div className="grid gap-4">
                {blogPosts.map((post) => (
                    <motion.div
                        key={post.title}
                        whileHover={{ scale: 1.01, y: -2 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            duration: 0.2
                        }}
                    >
                        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                            <CardContent className="p-6">
                                <h3 className="text-lg font-semibold mb-2">
                                    <a
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-500 transition-colors duration-300"
                                    >
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                    {post.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
} 