import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "../../base/buttonicon";

const Information: React.FC = () => {
  const navigate = useNavigate();

  const goToPage = (page: string) => {
    navigate(page);
  };

  return (
    <div className="flex flex-row gap-[27px] mb-10">
      <div className="flex flex-col bg-[#00487B] w-[874px] py-[16px] px-[32px] rounded-[20px] items-center">
        <h2 className="text-white text-md font-semibold">
          Cari Tahu Lebih Lanjut
        </h2>
        <div className="flex flex-row gap-[37px] mt-[18px]">
          <ButtonIcon
            ariaLabel="Tombol Lanjut ke Page FAQ"
            onClick={() => goToPage("/faq")}
            imgSrc="/FAQ.svg"
            imgAlt="FAQ"
            text="FAQ"
            textClassName="text-white"
            containerClassName=""
          />

          <ButtonIcon
            ariaLabel="Tombol Lanjut ke Page Tutorial Video Demo"
            onClick={() => goToPage("/video-demo")}
            imgSrc="/VideoDemo.svg"
            imgAlt="Video Demo"
            text="Video Demo"
            textClassName="text-white"
            containerClassName=""
          />

          <ButtonIcon
            ariaLabel="Tombol Lanjut ke Page Syarat & ketentuan"
            onClick={() => goToPage("/terms")}
            imgSrc="/S&K.svg"
            imgAlt="Syarat & Ketentuan"
            text="Syarat & Ketentuan"
            textClassName="text-white"
            containerClassName=""
          />
        </div>
      </div>
      <div className="flex flex-col bg-[#00487B] w-[437px] py-[16px] px-[32px] rounded-[20px] items-center">
        <h2 className="text-white text-md font-semibold">Butuh Bantuan ?</h2>
        <div className="flex flex-row gap-[14px] mt-[18px]">
          <ButtonIcon
            ariaLabel="Tombol Meminta Bantuan Lewat Call Halo BCA"
            onClick={() => goToPage("/call")}
            imgSrc="/Call.svg"
            imgAlt="Call Halo BCA"
            text="Call Halo BCA"
            textClassName="text-white"
            containerClassName=""
          />

          <ButtonIcon
            ariaLabel="Tombol Meminta Bantuan Lewat Email Halo BCA"
            onClick={() => goToPage("/email")}
            imgSrc="/Email.svg"
            imgAlt="Email Halo BCA"
            text="Email Halo BCA"
            textClassName="text-white"
            containerClassName=""
          />

          <ButtonIcon
            ariaLabel="Tombol Meminta Bantuan Lewat Whatsapp Call BCA"
            onClick={() => goToPage("/whatsapp")}
            imgSrc="/Whatsapp.svg"
            imgAlt="Whatsapp Call BCA"
            text="Whatsapp Call BCA"
            textClassName="text-white"
            containerClassName=""
          />
        </div>
      </div>
    </div>
  );
};

export default Information;
