import type { MetaFunction } from "@remix-run/node";
import styles from "./styles/app.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Navbar } from "./components";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  robots: "follow, index",
  title: "DevHaven Startpage ･ﾟ✧",
  description: `Startpage to easily search for dev resources`,
  viewport: "width=device-width,initial-scale=1",
  color: "#1d1d1d",
  "theme-color": "#1d1d1d",
  "twitter:card": "summary_large_image",
  "twitter:creator": `@rschoudhary1999`,
  "twitter:site": `https://twitter.com/rschoudhary1999`,
  "twitter:title": `DevHaven Startpage ･ﾟ✧`,
  "twitter:description": `Startpage to easily search for dev resources`,
  "og:url": `https://startpage.ram.codes`,
  "og:title": `DevHaven Startpage ･ﾟ✧`,
  "og:site_name": `DevHaven Startpage ･ﾟ✧`,
  "og:type": `website`,
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-brand-gray text-brand-white">
        <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
