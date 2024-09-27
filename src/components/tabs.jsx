export default function Tabs({ children, items, Choice }) {
  return (
    <>
      <Choice>{items}</Choice>
      {children}
    </>
  );
}
