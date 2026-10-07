import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-4 text-zinc-400">
          The project you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 font-medium text-black"
        >
          Back to Portfolio
        </Link>
      </div>
    </main>
  );
}