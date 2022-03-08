import {
  Links,
  Meta,
  Link
} from "remix";

export function meta() {
  return { title: "Module index" };
}

export default function Index() {
  return (
    <ul className="index stack-xs">
      <li><p><Link to="/type-styles">Type styles</Link></p></li>
      <li><p><Link to="/all-modules">All modules</Link></p></li>
      <li><p><Link to="/image">Image module</Link></p></li>
      <li><p><Link to="/text">Text module</Link></p></li>
      <li><p><Link to="/image-text-grid">Image Text Grid module</Link></p></li>
      <li><p><Link to="/icon-text-grid">Icon Text Grid module</Link></p></li>
    </ul>
  )
}
