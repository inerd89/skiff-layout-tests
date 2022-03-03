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
    <div className="item stack-24">
      <div className="stack-16">
        <h3>Module headline lorem ipsum</h3>
        <p>Body text blurb here lorem ipsum</p>
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

        <div className="stack-48">
          <ImageTextGridItem />
          <ImageTextGridItem />
        </div>

        <div className="stack-48">
          <ImageTextGridItem />
          <ImageTextGridItem />
        </div>

      </div>

    </section>
  )
}
