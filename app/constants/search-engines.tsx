import {
  DuckDuckGo,
  Google,
  HackerNews,
  IndieHacker,
  Reddit,
  Stackoverflow,
} from "~/icons";

export const SearchEngine = [
  {
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/?q=",
    icon: () => <DuckDuckGo width={24} height={24} className="!fill-white " />,
  },
  {
    name: "Google",
    url: "https://google.com/search?q=",
    icon: () => <Google width={24} height={24} className="fill-slate-200" />,
  },
  {
    name: "Reddit",
    url: "https://www.reddit.com/search/?q=",
    icon: () => <Reddit width={24} height={24} className="!fill-white " />,
  },
  {
    name: "Indie Hackers",
    url: "https://www.indiehackers.com/search?q=",
    icon: () => <IndieHacker width={24} height={24} className="!fill-white " />,
  },
  {
    name: "Hacker News",
    url: "https://hn.algolia.com/?q=",
    icon: () => <HackerNews width={24} height={24} className="!fill-white " />,
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/search?q=",
    icon: () => (
      <Stackoverflow width={24} height={24} className="!fill-white " />
    ),
  },
];
