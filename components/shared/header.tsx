"use client";

import React, { useState } from "react";
import { useGlobalContext } from "@/context";
import Link from "next/link";

export const Header = ({ logoUrl }: { logoUrl?: string }) => {
  const { lang, setLang, t } = useGlobalContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["home", "about_us", "articles", "destinations"];

  return (
    <>
      <div className="flex justify-between px-4 sm:px-42 items-center h-[85px] sm:h-[90px] bg-white z-20">
        <img
          src={logoUrl}
          alt="logo"
          style={{ height: "80px", width: "auto" }}
          className="object-contain"
        />

        <div className="hidden sm:flex items-center gap-2 md:gap-4">
          {links.map((key) => {
            const href =
              key === "home"
                ? "https://realdreamsuz.com/"
                : key === "about_us"
                ? "https://realdreamsuz.com/about"
                : key === "articles"
                ? "https://realdreamsuz.com/blogs"
                : "";
            return (
              <Link
                key={key}
                href={href}
                className="text-[18px] hover:underline font-medium"
              >
                {t(key)}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setLang("uz")}
              className={`flex gap-1 sm:gap-2 items-center ${
                lang === "uz" ? "font-semibold" : "text-gray-700"
              }`}
            >
              <img
                src={"https://flagsapi.com/UZ/flat/64.png"}
                style={{ height: "20px", width: "auto" }}
                alt="Uz"
              />
              <span className="font-medium text-sm sm:text-xl">UZ</span>
            </button>

            <button
              onClick={() => setLang("ru")}
              className={`flex gap-1 sm:gap-2 items-center ${
                lang === "ru" ? "font-semibold" : "text-gray-700"
              }`}
            >
              <img
                src="https://flagsapi.com/RU/shiny/64.png"
                style={{ height: "20px", width: "auto" }}
                alt="Ru"
              />
              <span className="font-medium text-sm sm:text-xl">РУ</span>
            </button>

            <button
              onClick={() => setLang("en")}
              className={`flex gap-1 sm:gap-2 items-center ${
                lang === "en" ? "font-semibold" : "text-gray-700"
              }`}
            >
              <img
                src="https://flagsapi.com/GB/shiny/64.png"
                style={{ height: "20px", width: "auto" }}
                alt="En"
              />
              <span className="font-medium text-sm sm:text-xl">EN</span>
            </button>
          </div>

          {/* hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="sm:hidden p-2"
          >
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="26" height="2" fill="#111827" />
              <rect y="8" width="26" height="2" fill="#111827" />
              <rect y="16" width="26" height="2" fill="#111827" />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 overflow-auto">
          <div className="flex items-center justify-between">
            {/* logo */}
            <img
              src={logoUrl}
              alt="logo"
              style={{ height: "60px", width: "auto" }}
              className="object-contain"
            />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-3xl"
            >
              ×
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-6">
            {links.map((key) => {
              const href =
                key === "home"
                  ? "/"
                  : key === "about_us"
                  ? "/about"
                  : key === "articles"
                  ? "/articles"
                  : "/browse";
              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-left"
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setLang("uz")}
              className={`flex gap-2 items-center ${
                lang === "uz" ? "font-semibold" : "text-gray-700"
              }`}
            >
              <img
                src={"https://flagsapi.com/UZ/flat/64.png"}
                style={{ height: 20 }}
                alt="UZ"
              />
              <span>UZ</span>
            </button>

            <button
              onClick={() => setLang("ru")}
              className={`flex gap-2 items-center ${
                lang === "ru" ? "font-semibold" : "text-gray-700"
              }`}
            >
              <img
                src={"https://flagsapi.com/RU/shiny/64.png"}
                style={{ height: 20 }}
                alt="RU"
              />
              <span>RU</span>
            </button>

            <button
              onClick={() => setLang("en")}
              className={`flex gap-2 items-center ${
                lang === "en" ? "font-semibold" : "text-gray-700"
              }`}
            >
              <img
                src="https://flagsapi.com/GB/shiny/64.png"
                style={{ height: 20, width: "auto" }}
                alt="En"
              />
              <span>EN</span>
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-700 flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 16.5v3a1.5 1.5 0 0 1-1.5 1.5A19.5 19.5 0 0 1 3 4.5 1.5 1.5 0 0 1 4.5 3h3A1.5 1.5 0 0 1 9 4.5c0 .3-.04.6-.12.89a1.5 1.5 0 0 1-.45.68l-1.2.9a14.2 14.2 0 0 0 6.3 6.3l.9-1.2c.23-.32.54-.56.9-.74.28-.13.58-.19.89-.19A1.5 1.5 0 0 1 19.5 15V16.5z"
                fill="#0ea5a4"
              />
            </svg>
            <span>(78) 113-99-88</span>
          </div>
        </div>
      )}
    </>
  );
};
