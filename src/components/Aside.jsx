import RandomQuote from "./RandomQuote";
export default function Aside() {
  return (
    <aside className="glass w-2/12 h-1/2 right-0 top-12 fixed p-2 m-5 hidden md:block">
      <h2>Aside</h2>
      <RandomQuote />
    </aside>
  );
}
