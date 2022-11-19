import { useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Form, useSearchParams } from "@remix-run/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const meta: MetaFunction = () => {
  return {
    title: "DevHaven | Startpage",
    description: "Search multiple websites.",
  };
};

type Search = string;
type Tabs = "_blank" | "_self";

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search: Search = searchParams.get("search") || "";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tabControl, setTabControl] = useState<Tabs>("_self");
  useEffect(() => {
    if (search) {
      console.log(search);
      window.open("https://google.com/search?q=" + search, tabControl);
      setSearchParams({ search: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, tabControl]);

  return (
    <main className="w-full flex justify-center items-center h-[calc(100vh-4rem)]">
      <section className="">
        <Form
          // reloadDocument
          method="get"
          className=""
          // action=""
        >
          <div className="flex justify-between items-center py-2 px-2 pl-4 border border-gray-600  rounded-md w-[90vw] xl:w-[calc(45vw)] bg-brand-gray focus-within:outline-none focus-within:ring-2 focus-within:ring-brand-teal/20 group-focus:border-transparent text-brand-white">
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
            </button>
          </div>
        </Form>
        <section></section>
      </section>
    </main>
  );
}
