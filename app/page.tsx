import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen text-white h-screen bg-black flex justify-center items-center">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">Journal app</h1>
        <p className="mb-4 text-2xl text-white/60">
          This is an app for tracking your mood through your life
        </p>
        <div>
          <Link href={"/journal"}>
            <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
