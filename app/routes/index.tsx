import { useEffect, useRef, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Form, useSearchParams } from "@remix-run/react";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import * as TogglePrimitive from "@radix-ui/react-toggle";

import { Popover } from "~/components";
import { type Engines, SearchEngine } from "~/constants/search-engines";
import { useLocalStorage } from "~/hooks/useLocalStorage";

export const meta: MetaFunction = () => {
  return {
    title: "DevHaven | Startpage",
    description: "Search multiple websites.",
  };
};

type Search = string;

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search: Search = searchParams.get("search") || "";

  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  const [tabBehavior, setTabBehavior] = useLocalStorage("tabBehavior", false);
  const [openNewTab, setOpenNewTab] = useState(tabBehavior);
  const [storedEngine, setStoredEngine] = useLocalStorage<Engines>(
    "selectedEngine",
    "Google"
  );

  const [searchEngine, setSearchEngine] = useState<Engines>(storedEngine);

  useEffect(() => {
    const selectedEngine =
      SearchEngine.find((engine) => engine.name === searchEngine) ||
      SearchEngine[0];

    if (search) {
      window.open(
        selectedEngine?.url + search,
        openNewTab ? "_blank" : "_self",
        "noopener,noreferrer"
      );
      setSearchParams({ search: "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, openNewTab, searchEngine]);

  useEffect(() => {
    setTabBehavior(openNewTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openNewTab]);

  return (
    <>
      <main className="w-full flex justify-center items-center h-[calc(100vh-4rem)]">
        <section className="" onClick={focusInput}>
          <Form
            // reloadDocument
            method="get"
            className=""
            // action=""
          >
            <div className="flex justify-between items-center py-2 px-2  border border-gray-600  rounded-md w-[90vw] xl:w-[calc(45vw)] bg-brand-gray focus-within:outline-none focus-within:bg-neutral-800 focus-within:ring-2 hover:ring-primary-dark focus-within:ring-primary-light group-focus:border-transparent text-brand-white transition ">
              <Popover>
                <section className="flex flex-col items-center gap-4 divide-neutral-600">
                  <div className="grid grid-cols-3 justify-center items-center gap-4 w-max bg-transparent">
                    {SearchEngine?.map((engine, index) => {
                      const Icon = engine.icon;
                      return (
                        <button
                          key={index}
                          className={` ${
                            searchEngine === engine.name
                              ? "after:content-[''] after:absolute relative after:right-0 after:bottom-0 after:w-3 after:h-3 after:rounded-full after:animate-pulse after:bg-primary-light"
                              : ""
                          } bg-transparent focus-visible:ring focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-primary-light/50 `}
                          title={engine.name}
                          onClick={() => {
                            setSearchEngine(engine.name);
                            setStoredEngine(engine.name);
                          }}
                        >
                          <Icon className="fill-white" />
                        </button>
                      );
                    })}
                  </div>
                  <div>
                    <TogglePrimitive.Root
                      defaultPressed={openNewTab}
                      onPressedChange={setOpenNewTab}
                      asChild
                    >
                      <button className="w-full rounded-sm flex gap-2 justify-start items-center bg-neutral-900 hover:bg-neutral-900/50 active:bg-neutral-900/25 p-2">
                        <span className="ml-2 leading-2 text-neutral-300 text-sm">
                          {openNewTab
                            ? "Open in new tab"
                            : "Open in current tab"}
                        </span>
                        {openNewTab ? (
                          <ArrowUpRightIcon className="h-3 w-3 text-primary-light" />
                        ) : (
                          <ArrowDownRightIcon className="h-3 w-3 text-primary-light" />
                        )}
                      </button>
                    </TogglePrimitive.Root>
                  </div>
                </section>
              </Popover>

              <input
                ref={inputRef}
                autoFocus
                name="search"
                placeholder="Search any website... "
                type="text"
                className="pl-4 w-full bg-transparent focus:outline-none"
              />
              <button className="bg-neutral-800/50 text-white transition-colors ease-in-out duration-150 hover:text-black rounded-md py-2 px-2 hover:bg-primary-light  focus:bg-primary-dark ">
                <MagnifyingGlassIcon className=" " width={26} height={26} />
              </button>
            </div>
          </Form>
        </section>
      </main>
    </>
  );
}
