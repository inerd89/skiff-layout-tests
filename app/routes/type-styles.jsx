import {
  Meta
} from "remix";

export function meta() {
  return { title: "Type Styles" };
}

export default function TypeStyles() {
  return (
    <section className="stack-xl">
      <div>
        <h2 className="heading-s-2" style={{color: "#888"}}>Headings</h2>
        <p className="heading-s-2">-2 Hello world</p>
        <p className="heading-s-1">-1 Hello world</p>
        <p className="heading-s0">0 Hello world</p>
        <p className="heading-s1">1 Hello world</p>
        <p className="heading-s2">2 Hello world</p>
        <p className="heading-s3">3 Hello world</p>
        <p className="heading-s4">4 Hello world</p>
        <p className="heading-s5">5 Hello world</p>
        <p className="heading-s6">6 Hello world</p>
      </div>
      <div>
        <hr />
        <h2 className="heading-s-2" style={{color: "#888"}}>Body</h2>
        <p className="body-s-2">-2 Hello world</p>
        <p className="body-s-1">-1 Hello world</p>
        <p className="body-s0">0 Hello world</p>
        <p className="body-s1">1 Hello world</p>
      </div>
      <div>
        <hr />
        <h2 className="heading-s-2" style={{color: "#888"}}>Prose</h2>
        <p className="prose-s-1">-1 Hello world</p>
        <p className="prose-s0">0 Hello world</p>
        <p className="prose-s1">1 Hello world</p>
      </div>
    </section>
  )
}
