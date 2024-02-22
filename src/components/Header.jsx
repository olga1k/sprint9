import Navbar from "./Navbar";
export default function Header() {
  //bg-[url('/bg/header-bg.png')]
  return (
    <header id="header" className="fixed z-10 top-0 left-0 w-full ">
      <Navbar/>
    </header>
  );
}
