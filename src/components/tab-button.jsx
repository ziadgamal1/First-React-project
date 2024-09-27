export default function TabButton({ children, selected, ...x }) {
  // console.log("hey");
  return (
    <li>
      <button className={selected ? "active" : ""} {...x}>
        {children}
      </button>
    </li>
  );
}
