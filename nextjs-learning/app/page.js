import Link from "next/link";
import Header from "@/app/components/Header";

export default function Home() {
    // This is a server component. It will be executed on the server side.
    // The log will appear in the browser console with the tag "server"
    // It will also appear on the server
    // Server Side components are executed server side and sent to the client and rendered as HTML
    console.log("Executing server side");
    return (
        <main className="flex flex-col justify-center items-center h-dvh w-dvw">
            <Header></Header>
            <p>
                <Link
                    href={"/about"}
                    className="text-sm underline text-slate-200"
                >
                    About Us
                </Link>
            </p>
        </main>
    );
}
