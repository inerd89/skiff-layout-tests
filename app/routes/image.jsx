import {
  Links,
  Meta
} from "remix";

import ModuleHeader from "~/components/module-header";

export function meta() {
  return { title: "Image-Text Grid" };
}

import styles from "~/styles/image.css";


export function links() {
  return [{
    rel: "stylesheet",
    href: styles
  }];
}

export default function Image() {
  return (
    <section className="module col3 image">

      <ModuleHeader />

      <div className="module-content">
        <img />
      </div>

    </section>
  )
}
