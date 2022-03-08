import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

export function meta() {
  return { title: "Skiff layout tests" };
}

import styles from "~/styles/global.css";
import typography from "~/styles/typography.css";
import space from "~/styles/space.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "stylesheet",
      href: typography
    },
    {
      rel: "stylesheet",
      href: space
    }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main>
          <Outlet />
          {
          // <div className="ref">
          //   <div></div>
          //   <div></div>
          //   <div></div>
          // </div>
          }
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
