import {
  Codepen,
  DuckDuckGo,
  Google,
  HackerNews,
  IndieHacker,
  Reddit,
  Stackoverflow,
} from "~/icons";
import { Dribbble } from "~/icons/dribbble";
import { You } from "~/icons/you";
import { Youtube } from "~/icons/youtube";

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
  | "You"
  | "Reddit"
  | "Indie Hackers"
  | "Hacker News"
  | "Youtube"
  | "Codepen"
  | "Dribbble"
  | "Stack Overflow";

export const SearchEngine: ISearch[] = [
  {
    name: "Google",
    url: "https://google.com/search?q=",
    shorthand: "/g",
    icon: ({ className = "" }: { className: string }) => {
      return (
        <Google
          width={38}
          height={38}
          className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
        />
      );
    },
  },
  {
    name: "You",
    url: "https://you.com/search?q=",
    shorthand: "/you",
    icon: ({ className = "" }: { className: string }) => {
      return (
        <You
          className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
        />
      );
    },
  },
  {
    name: "DuckDuckGo",
    shorthand: "/d",
    url: "https://duckduckgo.com/?q=",
    icon: ({ className = "" }: { className: string }) => {
      return (
        <DuckDuckGo
          width={38}
          height={38}
          className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
        />
      );
    },
  },
  {
    name: "Youtube",
    shorthand: "/yt",
    url: "https://www.youtube.com/results?search_query=",
    icon: ({ className = "" }: { className: string }) => {
      return (
        <Youtube
          width={38}
          height={38}
          className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
        />
      );
    },
  },
  {
    shorthand: "/r",
    name: "Reddit",
    url: "https://www.reddit.com/search/?q=",
    icon: ({ className = "" }: { className: string }) => (
      <Reddit
        width={38}
        height={38}
        className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
      />
    ),
  },
  {
    shorthand: "/ih",
    name: "Indie Hackers",
    url: "https://www.indiehackers.com/search?q=",
    icon: ({ className }: { className: string }) => (
      <IndieHacker
        width={38}
        height={38}
        className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
      />
    ),
  },
  {
    shorthand: "/dr",
    name: "Dribbble",
    url: "https://dribbble.com/search/",
    icon: ({ className }: { className: string }) => (
      <Dribbble
        width={38}
        height={38}
        className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
      />
    ),
  },
  {
    shorthand: "/hn",
    name: "Hacker News",
    url: "https://hn.algolia.com/?q=",
    icon: ({ className = "" }: { className: string }) => (
      <HackerNews
        width={38}
        height={38}
        className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
      />
    ),
  },
  {
    shorthand: "/so",
    name: "Stack Overflow",
    url: "https://stackoverflow.com/search?q=",
    icon: ({ className = "" }: { className: string }) => (
      <Stackoverflow
        width={38}
        height={38}
        className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
      />
    ),
  },
  {
    shorthand: "/cp",
    name: "Codepen",
    url: "https://codepen.io/search/pens?q=",
    icon: ({ className = "" }: { className: string }) => (
      <Codepen
        width={38}
        height={38}
        className={`${className} opacity-90 hover:opacity-100 transition-opacity ease-in-out`}
      />
    ),
  },
];
