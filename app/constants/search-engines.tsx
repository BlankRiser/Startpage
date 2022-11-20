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
  | "Dribbble"
  | "Stack Overflow";

export const SearchEngine: ISearch[] = [
  {
    name: "Google",
    url: "https://google.com/search?q=",
    shorthand: "/g",
    icon: () => (
      <Google
        width={38}
        height={38}
        className="opacity-90 hover:opacity-100 transition-opacity ease-in-out"
      />
    ),
  },
  {
    name: "DuckDuckGo",
    shorthand: "/d",
    url: "https://duckduckgo.com/?q=",
    icon: () => (
      <DuckDuckGo
        width={38}
        height={38}
        className="opacity-90 hover:opacity-100 transition-opacity ease-in-out"
      />
    ),
  },
  {
    shorthand: "/r",
    name: "Reddit",
    url: "https://www.reddit.com/search/?q=",
    icon: () => (
      <Reddit
        width={38}
        height={38}
        className="opacity-90 hover:opacity-100 transition-opacity ease-in-out"
      />
    ),
  },
  // {
  //   shorthand: "/ih",
  //   name: "Indie Hackers",
  //   url: "https://www.indiehackers.com/search?q=",
  //   icon: () => <IndieHacker width={38} height={38} className="opacity-90 hover:opacity-100 transition-opacity ease-in-out" />,
  // },
  // {
  //   shorthand: "/dr",
  //   name: "Dribbble",
  //   url: "https://dribbble.com/search/",
  //   icon: () => (
  //     <IndieHacker
  //       width={38}
  //       height={38}
  //       className="opacity-90 hover:opacity-100 transition-opacity ease-in-out"
  //     />
  //   ),
  // },
  {
    shorthand: "/hn",
    name: "Hacker News",
    url: "https://hn.algolia.com/?q=",
    icon: () => (
      <HackerNews
        width={38}
        height={38}
        className="opacity-90 hover:opacity-100 transition-opacity ease-in-out"
      />
    ),
  },
  {
    shorthand: "/so",
    name: "Stack Overflow",
    url: "https://stackoverflow.com/search?q=",
    icon: () => (
      <Stackoverflow
        width={38}
        height={38}
        className="opacity-90 hover:opacity-100 transition-opacity ease-in-out"
      />
    ),
  },
  {
    shorthand: "/cp",
    name: "Codepen",
    url: "https://codepen.io/search/pens?q=",
    icon: () => (
      <Codepen
        width={38}
        height={38}
        className="opacity-90 hover:opacity-100 transition-opacity ease-in-out"
      />
    ),
  },
];
