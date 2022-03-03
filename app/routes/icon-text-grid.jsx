import {
  Links,
  Meta
} from "remix";

import ModuleHeader from "~/components/module-header";

export function meta() {
  return { title: "Icon+Text Grid" };
}

import styles from "~/styles/icon-text-grid.css";

export function links() {
  return [{
    rel: "stylesheet",
    href: styles
  }];
}

function IconTextGridItem() {
  return (
    <div className="icon-text-grid-item stack-16">
      <div class="icon"></div>
      <h3>Module headline lorem ipsum</h3>
      <p>Body text blurb here lorem ipsum</p>
    </div>
  )
}

export default function IconTextGrid() {
  return (
    <section className="module col3 icon-text-grid">

      <ModuleHeader />

      <div className="module-content">
        <IconTextGridItem />
        <IconTextGridItem />
        <IconTextGridItem />
        <IconTextGridItem />
        <IconTextGridItem />
        <IconTextGridItem />
      </div>

    </section>
  )
}
