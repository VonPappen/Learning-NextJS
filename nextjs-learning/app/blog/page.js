import React from "react";
import Link from "next/link";

export default function BlogPage() {
    return (
        <main className="flex justify-center items-center flex-col h-dvh gap-4">
            <h1 className="text-3xl">Blog Post</h1>
            <div className="flex flex-col">
                <Link href={"/blog/post-1"}>Post 1</Link>
                <Link href={"/blog/post-2"}>Post 2</Link>
            </div>
        </main>
    );
}
