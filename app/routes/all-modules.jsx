import {
  Links,
  Meta
} from "remix";

import ModuleHeader from "~/components/module-header";
import Image from "~/routes/image";
import Text from "~/routes/text";
import ImageTextGrid from "~/routes/image-text-grid";
import IconTextGrid from "~/routes/icon-text-grid";

export function meta() {
  return { title: "All modules" };
}

import ImageStyles from "~/styles/image.css";
import TextStyles from "~/styles/text.css";
import ImageTextStyles from "~/styles/image-text-grid.css";
import IconTextStyles from "~/styles/icon-text-grid.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: ImageStyles
    },
    {
      rel: "stylesheet",
      href: ImageTextStyles
    },
    {
      rel: "stylesheet",
      href: IconTextStyles
    },
    {
      rel: "stylesheet",
      href: TextStyles
    }
  ];
}

export default function AllModules() {
  return (
    <div className="stack-7xl">
      <Image />
      <Text />
      <ImageTextGrid />
      <IconTextGrid />
    </div>
  )
}
