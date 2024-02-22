import { Link } from "react-router-dom";
export const fb = "/sm/fb.png";
export const yt = "/sm/yt.png";
export const ig = "/sm/ig.png";

export default function Footer() {
  return (
    <footer className="h-30 w-full bottom-0 fixed bg-white dark:bg-dark-blue p-2">
      <div className="text-sm md:text-md footer-data flex justify-center px-60 py-3 gap-2">
        <Link to="#">About</Link>
        <Link to="#">Blog</Link>
        <Link to="#">Contact</Link>
        <Link to="#">Terms</Link>
        <Link to="#">Privacy</Link>
      </div>

      <ul className="footer-sm flex justify-center px-60 py-3 gap-2">
        <Link className="w-12" to="#">
          <img src={fb} />
        </Link>
        <Link className="w-12" to="#">
          <img src={yt} />
        </Link>
        <Link className="w-12" to="#">
          <img src={ig} />
        </Link>
      </ul>
    </footer>
  );
}
