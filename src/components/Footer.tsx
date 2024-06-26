import Link from "next/link";
import { FC } from "react";
import { GiMoebiusTriangle } from "react-icons/gi";

const Footer: FC = () => {
  return (
    <footer className="footer px-6 md:px-10 lg:px-40 py-4 md:py-6 lg:py-10">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <p className="text-lg md:text-xl gap-2 font-bold transition-all hover:-translate-y-[2px] md:flex md:items-center dark:border-white">
            <GiMoebiusTriangle className="w-8 h-8" />
            Ai Quiz
          </p>
        </Link>

        <div className="social-icons flex items-center space-x-4 md:space-x-10 mt-4 md:mt-0">
          <a
            href="https://twitter.com/your-twitter-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-6 md:h-8 object-cover object-center"
              src="/twitter.png"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-6 md:h-8 object-cover object-center"
              src="/linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com/your-instagram-url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-6 md:h-8 object-cover object-center"
              src="/instagram.png"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
