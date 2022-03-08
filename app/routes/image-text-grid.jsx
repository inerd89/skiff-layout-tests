import {
  Links,
  Meta
} from "remix";

import ModuleHeader from "~/components/module-header";

export function meta() {
  return { title: "Image-Text Grid" };
}

import styles from "~/styles/image-text-grid.css";


export function links() {
  return [{
    rel: "stylesheet",
    href: styles
  }];
}

function ImageTextGridItem() {
  return (
    <div className="item stack-m">
      <div className="stack-xs">
        <h3 className="heading-s2">Module headline lorem ipsum</h3>
        <p className="heading-s0">Body text blurb here lorem ipsum</p>
      </div>
      <div class="image"></div>
    </div>
  )
}

export default function ImageTextGrid() {
  return (
    <section className="module col3 image-text-grid">

      <ModuleHeader />

      <div className="module-content">

        <div className="stack-l">
          <ImageTextGridItem />
          <ImageTextGridItem />
        </div>

        <div className="stack-l">
          <ImageTextGridItem />
          <ImageTextGridItem />
        </div>

      </div>

    </section>
  )
}
