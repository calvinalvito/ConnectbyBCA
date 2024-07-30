import React from "react";
import InfoCVV from "../infocvv";
import InfoAkun from "../infoakun/InfoAkun";
import useBankStatement from "../../../contexts/useBankStatement";

export interface InfoRekeningProps {
  showInfoCVV?: boolean;
  showInfoAkun?: boolean;
}

const InfoRekening: React.FC<InfoRekeningProps> = ({
  showInfoCVV = false,
  showInfoAkun = false,
}) => {
  const { bankStatement } = useBankStatement();
  const [isBalanceVisible, setIsBalanceVisible] = React.useState(false);

  

  const balanceValue =
    bankStatement?.accountInfo?.accountBalance?.availableBalance?.value || 0;
  const balance = balanceValue.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const accountNo = bankStatement?.accountInfo?.accountNo || "";
  const textToCopy = accountNo;

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Nomor berhasil disalin!");
      })
      .catch((err) => {
        console.error("Gagal menyalin:", err);
      });
  };

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-lg text-white font-bold">Informasi Rekening</h1>
      <div className="bg-primary-blue rounded-[20px] flex flex-col w-96 p-5 gap-2.5">
        <div className="flex flex-col gap-1">
          <p className="text-white text-sm">Rekening</p>
          <div className="flex justify-between">
            <h2 className="text-md text-white font-semibold">{textToCopy}</h2>
            <button type="button" onClick={handleCopy}>
              <img src="/IconCopy.svg" alt="Copy" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-white text-sm">Saldo</p>
          <div className="flex justify-between items-center">
            <h2 className="text-md text-white font-semibold">
              {isBalanceVisible ? balance : "IDR ********"}
            </h2>
            <button type="button" onClick={toggleBalanceVisibility}>
              <img
                src={
                  isBalanceVisible ? "/VisibilityOff.svg" : "/VisibilityOn.svg"
                }
                alt={isBalanceVisible ? "Hide Balance" : "Show Balance"}
              />
            </button>
          </div>
        </div>
      </div>

      {showInfoCVV && <InfoCVV />}
      {showInfoAkun && <InfoAkun />}
    </div>
  );
};

export default InfoRekening;
