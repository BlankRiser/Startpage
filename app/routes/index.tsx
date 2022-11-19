import { useEffect, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Form, useSearchParams } from "@remix-run/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Popover } from "~/components";
import { SearchEngine } from "~/constants/search-engines";

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
    <>
      <main className="w-full flex justify-center items-center h-[calc(100vh-4rem)]">
        <section className="">
          <Form
            // reloadDocument
            method="get"
            className=""
            // action=""
          >
            <div className="flex justify-between items-center py-2 px-2  border border-gray-600  rounded-md w-[90vw] xl:w-[calc(45vw)] bg-brand-gray focus-within:outline-none focus-within:ring-2 hover:ring-primary-dark focus-within:ring-primary-light group-focus:border-transparent text-brand-white transition">
              <Popover>
                <section className="flex flex-col gap-4">
                  <div className="flex justify-center items-start gap-4 w-max bg-transparent">
                    {SearchEngine?.slice(0, 3)?.map((engine, index) => {
                      const Icon = engine.icon;
                      return (
                        <button key={index} className="bg-transparent">
                          <Icon />
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-center items-start gap-4 w-max bg-transparent">
                    {SearchEngine?.slice(3, SearchEngine.length)?.map(
                      (engine, index) => {
                        const Icon = engine.icon;
                        return (
                          <button key={index} className="bg-transparent">
                            <Icon />
                          </button>
                        );
                      }
                    )}
                  </div>
                </section>
              </Popover>

              <input
                autoFocus
                name="search"
                placeholder="Search any website... "
                type="text"
                className="pl-4 w-full bg-transparent focus:outline-none"
              />
              <button className="bg-gray-600 rounded-md py-2 px-2 hover:bg-primary-light  focus:bg-primary-dark ">
                <MagnifyingGlassIcon
                  className="fill-white "
                  width={26}
                  height={26}
                />
              </button>
            </div>
          </Form>
        </section>
      </main>
    </>
  );
}
