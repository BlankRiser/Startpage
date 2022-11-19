import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = (O) => {
  return {
    title: "DevHaven | Startpage",
    description: "Search multiple websites.",
  };
};

export default function About() {
  // const data = useLoaderData();
  return (
    <main className="w-full flex flex-col justify-center items-center h-[calc(100vh-4rem)]">
      <span className="text-stone-400">Developed by</span>
      <a
        href="https://www.github.com/BlankRiser"
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-4xl hover:text-brand-teal transition-colors ease-in-out">
          Ram Shankar Choudhary
        </h1>
      </a>
    </main>
  );
}
