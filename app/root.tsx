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
  title: "DevHaven Start",
  viewport: "width=device-width,initial-scale=1",
  "twitter:card": "summary_large_image",
  "twitter:creator": `@rschoudhary1999`,
  "twitter:site": `@rschoudhary1999`,
  "twitter:title": `Devhaven Startpage`,
  "twitter:description": `Startpage to easily search for dev resources`,
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
