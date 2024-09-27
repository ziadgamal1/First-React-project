import { useState } from "react";
import TabButton from "./tab-button.jsx";
import { EXAMPLES } from "../data.js";
import Tabs from "./tabs.jsx";
export default function Examples() {
  const [count, setCount] = useState();
  console.log("welcome");
  function handleClick(x) {
    console.log(x);
    setCount(x.toLowerCase());
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu></menu>
      <Tabs
        items={
          <>
            <TabButton
              selected={count === "components"}
              onClick={() => handleClick("Components")}
            >
              Components
            </TabButton>
            <TabButton
              selected={count === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              selected={count === "props"}
              onClick={() => handleClick("Props")}
            >
              Props
            </TabButton>
            <TabButton
              selected={count === "state"}
              onClick={() => handleClick("State")}
            >
              State
            </TabButton>
          </>
        }
        Choice="menu"
      >
        {!count ? (
          <p>Please select a button</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[count].title}</h3>
            <p>{EXAMPLES[count].description}</p>
            <pre>
              <code>{EXAMPLES[count].code}</code>
            </pre>
          </div>
        )}
      </Tabs>
    </section>
  );
}
