import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 text-center text-white bg-black">
      <div className="flex flex-col items-center justify-center gap-3 mx-auto max-w-7xl sm:flex-row">
        <Link
          href="/"
          className="text-3xl font-bold tracking-wide text-yellow-400"
        >
          MovieBox 🎬
        </Link>
        <h1 className="font-semibold text-red-600 transition-colors hover:text-yellow-500">
          &copy; {new Date().getFullYear()} ShyNaDev
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
