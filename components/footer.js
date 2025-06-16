import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. eltamborcito.
      </div>
      
      <div className="mt-2 flex items-center justify-between">
        <div className="mt-5">
          <a
            href="/"
            target="_blank"
            rel="noopener"
            className="relative block w-44">
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1747337756/el-tamborcito-2000px_upzxt9.png"
              alt="Powered by Vercel"
              className="w-40 dark:hidden"
            />
            <img
              src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1747340414/el-tamborcito-b-2000px_ymllbu.png"
              alt="Powered by Vercel"
              className="hidden w-40 dark:block"
            />
          </a>
        </div>
        <ThemeSwitch />
      </div>
      
    </Container>
  );
}

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com/templates/stablo-minimal-blog-website-template"
      target="_blank"
      rel="noopener"
      className="dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300 fixed bottom-5 right-5 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 font-sans text-sm font-semibold text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          width="30"
          height="29.5385"
          rx="2.76923"
          fill="#362F78"
        />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span> Purchase Pro ↗</span>
    </a>
  );
};
