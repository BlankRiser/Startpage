import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Google } from "~/icons";

export const meta: MetaFunction = () => {
  return {
    title: "DevHaven | Startpage",
    description: "Search multiple websites.",
  };
};

// Server-side data fetching
export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  console.log(url.searchParams.get("search"));
  return { message: "wowowowo" };
};

export default function Index() {
  // const data = useLoaderData();
  return (
    <main className="w-full flex justify-center items-center h-[calc(100vh-4rem)]">
      <section className="">
        <Form
          className=""
          // action=""
        >
          <div className="flex justify-between items-center py-2 px-2 pl-4 border border-gray-600  rounded-md w-full md:w-[calc(45vw)] bg-brand-gray focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-teal/20 group-focus:border-transparent text-brand-white">
            <input
              autoFocus
              name="search"
              placeholder="Search any website... "
              type="text"
              className="w-full bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-600 rounded-md py-2 px-2 hover:bg-gray-700 focus:bg-gray-800 "
            >
              <MagnifyingGlassIcon
                className="fill-white "
                width={26}
                height={26}
              />
              <Google />
            </button>
          </div>
        </Form>
      </section>
    </main>
  );
}
