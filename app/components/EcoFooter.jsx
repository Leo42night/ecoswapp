import { footerLinks } from "../constant";
import Link from "next/link";

export default function EcoFooter() {
  return (
    <footer className="bg-green-700 text-white mt-6 p-6 rounded-t-lg text-sm">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {footerLinks.map((link) => (
          <section className="" key={link.title}>
            <h2 className="font-semibold">{link.title}</h2>
            <ul>
              {link.pages.map((page) => (
                <li key={page}>
                  <Link
                    scroll={false}
                    href="#"
                    className="underline hover:decoration-4 hover:font-semibold hover:text-neat-100"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
        <div className="flex justify-center items-center gap-4 mt-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/202a164e4dabb13b721b1acecea6c903dccdbef7e0d75c284c1955662fdc8722?apiKey=81aa3398288b425cae501e07d8c56af5&"
            className="shrink-0 aspect-[0.71] w-[50x]"
          />
          <div className="my-auto text-2xl">
            <span className="font-extrabold">Eco</span>Swap
          </div>
          <div className="my-auto text-basbe">@PT. EcoSwap Copyright 2024</div>
        </div>
    </footer>
  );
}
