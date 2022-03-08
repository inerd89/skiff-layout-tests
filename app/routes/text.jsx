import {
  Links,
  Meta
} from "remix";

import ModuleHeader from "~/components/module-header";

export function meta() {
  return { title: "Text Grid" };
}

// import styles from "~/styles/text.css";
//
// export function links() {
//   return [{
//     rel: "stylesheet",
//     href: styles
//   }];
// }

export default function Text() {
  return (
    <section className="module col3 text">

      <ModuleHeader />

      <div className="module-content stack-m">
        <h3 className="heading-s5-3">Skiff is building a collaborative workspace that builds in privacy and decentralization from the ground up.</h3>
        <p className="body-s1">Lorem ipsum dolor sit amet curabitur habitasse quam consequat. Sodales posuere magna morbi blandit bibendum fermentum et lacinia. Aliquet blandit consequat semper est diam orci lobortis sollicitudin mattis aliqua iaculis interdum ac. Etiam praesent do mollis proin facilisi lobortis nibh molestie leo imperdiet et dapibus convallis. Nullam pellentesque sapien nunc sollicitudin ultrices tempus consectetur maecenas.</p>
        <p className="body-s1">Lorem ipsum dolor sit amet curabitur habitasse quam consequat. Sodales posuere magna morbi blandit bibendum fermentum et lacinia. Aliquet blandit consequat semper est diam orci lobortis sollicitudin mattis aliqua iaculis interdum ac. Etiam praesent do mollis proin facilisi lobortis nibh molestie leo imperdiet et dapibus convallis. Nullam pellentesque sapien nunc sollicitudin ultrices tempus consectetur maecenas.</p>
      </div>

    </section>
  )
}
