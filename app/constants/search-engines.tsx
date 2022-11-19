import {
  Codepen,
  DuckDuckGo,
  Google,
  HackerNews,
  Reddit,
  Stackoverflow,
} from "~/icons";

export type ISearch = {
  name: Engines;
  url: string;
  icon: any;
  shorthand: string;
};
// UNION TYPE OF NAME

export type Engines =
  | "Google"
  | "DuckDuckGo"
  | "Google"
  | "Reddit"
  | "Indie Hackers"
  | "Hacker News"
  | "Codepen"
  | "Stack Overflow";

export const SearchEngine: ISearch[] = [
  {
    name: "DuckDuckGo",
    shorthand: "/d",
    url: "https://duckduckgo.com/?q=",
    icon: () => <DuckDuckGo width={38} height={38} className="" />,
  },
  {
    name: "Google",
    url: "https://google.com/search?q=",
    shorthand: "/g",
    icon: () => <Google width={38} height={38} className="" />,
  },
  {
    shorthand: "/r",
    name: "Reddit",
    url: "https://www.reddit.com/search/?q=",
    icon: () => <Reddit width={38} height={38} className="" />,
  },
  // {
  //   shorthand: "/ih",
  //   name: "Indie Hackers",
  //   url: "https://www.indiehackers.com/search?q=",
  //   icon: () => <IndieHacker width={38} height={38} className="" />,
  // },
  {
    shorthand: "/hn",
    name: "Hacker News",
    url: "https://hn.algolia.com/?q=",
    icon: () => <HackerNews width={38} height={38} className="" />,
  },
  {
    shorthand: "/so",
    name: "Stack Overflow",
    url: "https://stackoverflow.com/search?q=",
    icon: () => <Stackoverflow width={38} height={38} className="" />,
  },
  {
    shorthand: "/cp",
    name: "Codepen",
    url: "https://codepen.io/search/pens?q=",
    icon: () => <Codepen width={38} height={38} className="" />,
  },
];
