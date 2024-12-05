// import Image from "next/image";

export default function Home() {
    // This is a server component. It will be executed on the server side.
    // The log will appear in the browser console with the tag "server"
    // It will also appear on the server
    // Server Side components are executed server side and sent to the client and rendered as HTML
    console.log("Executing server side");
    return (
        <div className="flex justify-center items-center h-dvh w-dvw">
            Welcome to Next JS!
        </div>
    );
}
