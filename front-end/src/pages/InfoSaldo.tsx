import React from "react";
import { useState } from "react";
import Header from "../components/layout/header";
import InfoUser from "../components/layout/infouser";
import MenuFitur from "../components/layout/menufitur";

const InfoSaldo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <body className="bg-primary-dark-blue font-sans">
      <Header />
      <InfoUser />
      <MenuFitur />
      <section className="container mx-auto mt-[50px] h-[1000px]">
        <div className="flex flex-row gap-[80px]">
          <div className="">
            <div className="relative inline-block text-left w-[262px]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex gap-2 items-center w-full px-3 py-[14px] bg-blue-600 text-white font-semibold text-base rounded-t-[10px]"
              >
                <svg
                  width="31"
                  height="28"
                  viewBox="0 0 31 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2968 15.464V13.864H18.6968V15.464H12.2968Z"
                    fill="white"
                  />
                  <rect
                    x="1"
                    y="1.5"
                    width="29"
                    height="25"
                    stroke="white"
                    stroke-width="2"
                    stroke-dasharray="2 2"
                  />
                </svg>
                Informasi Saldo & Mutasi
              </button>

              {isOpen && (
                <div className="absolute left-0 bg-white rounded-b-[10px] shadow-lg z-10 w-[262px]">
                  <a
                    href="#"
                    className="block px-3 py-[14px] text-primary-blue hover:text-white hover:bg-primary-blue hover:bg-fill4 font-semibold text-base"
                  >
                    Informasi Saldo Rekening
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-[14px] text-primary-blue hover:text-white hover:bg-primary-blue hover:bg-fill4 font-semibold text-base"
                  >
                    Informasi Saldo Investasi
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-[14px] text-primary-blue hover:text-white hover:bg-primary-blue hover:bg-fill4 font-semibold text-base"
                  >
                    Mutasi Rekening
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-[14px] text-primary-blue hover:text-white hover:bg-primary-blue hover:bg-fill4 font-semibold text-base"
                  >
                    Mutasi Pinjaman
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-[14px] text-primary-blue hover:text-white hover:bg-primary-blue hover:bg-fill4 font-semibold text-base"
                  >
                    Mutasi Dana Pensiun
                  </a>
                  <div className="bg-primary-blue w-full h-5 rounded-b-[10px]"></div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[26px]">
            <h3 className="text-lg text-white font-bold">Informasi Saldo</h3>
            <div className="bg-[#1C1C1E] bg-[url('/CardMap.png')] rounded-5 flex flex-col w-[328px] rounded-[20px] p-5 gap-[10px] rounded-5 border-4 border-primary-blue">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <h2 className="text-md text-white font-semibold">145 267 389 5162</h2>
                  <img src="/IconCopy.svg" alt="" />
                </div>
              </div>
              <h2 className="text-sm text-white font-semibold">Tahapan Xpresi</h2>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-white font-medium">EXP</p>
                  <p className="text-sm text-white font-medium">03/27</p>
                </div>
                <img src="/LogoBCA.png" alt=""  className="w-[50px] h-[35px]"/>
              </div>
            </div>
          </div>
          <div className="bg-blue-600">3</div>
        </div>
      </section>
      <p></p>
    </body>
  );
};

export default InfoSaldo;
