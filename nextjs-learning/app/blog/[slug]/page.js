import React from "react";

export default function BlogPostPage({ params }) {
    return (
        <main className="flex flex-col h-dvh justify-center items-center">
            <h1>Blog Post</h1>
            <p>{params.slug}</p>
        </main>
    );
}
