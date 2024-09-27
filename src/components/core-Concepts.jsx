import { CORE_CONCEPTS } from "../data.js";
import CoreConcepts from "./coreConcepts.jsx";
export default function Core() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcepts key={item.title} {...item} />
        ))}

        {/* <CoreConcepts
            image={CORE_CONCEPTS[0].image}
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
          />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
