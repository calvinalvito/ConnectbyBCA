import React, { useState, useEffect } from "react";
import DropdownMonth from "../../base/dropdownmonth/DropdownMonth";
import useBankStatement from "../../../contexts/useBankStatement";

const LaporanKeuangan: React.FC = () => {
  const { monthlyBankStatement, fetchAccountMonthly } = useBankStatement();
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAccountMonthly(selectedMonth);
      } catch (error) {
        console.error("Error fetching monthly bank statement:", error);
      }
    };

    fetchData();
  }, [fetchAccountMonthly, selectedMonth]);

  const handleSelectMonth = (month: number) => {
    setSelectedMonth(month);
  };

  const monthlyIncome = Number(monthlyBankStatement?.monthlyIncome.value ?? 0);
  const monthlyOutcome = Number(
    monthlyBankStatement?.monthlyOutcome.value ?? 0
  );
  const selisih = monthlyIncome - monthlyOutcome;

  return (
    <div
      className="flex flex-col gap-[20px] w-[500px]"
      aria-label="Laporan Keuangan Rekening"
    >
      <h1 className="text-lg text-white font-bold">
        Laporan Keuangan Rekening
      </h1>
      <div
        className="flex flex-col gap-8 bg-primary-light-blue p-8 justify-center items-center rounded-[20px]"
        aria-label="Detail Laporan Keuangan"
      >
        <div className="inline-flex rounded-md shadow-sm w-full">
          <DropdownMonth onSelectMonth={handleSelectMonth} />
        </div>
        <div
          className="flex flex-col gap-1 items-center"
          aria-label="Selisih Pemasukan dan Pengeluaran"
        >
          <p className="text-neutral-9 font-medium text-sm">Selisih</p>
          <h3 className="text-neutral-9 font-bold text-lg">
            Rp {selisih.toLocaleString()}
          </h3>
        </div>
        <div
          className="flex justify-center gap-10"
          aria-label="Detail Pemasukan dan Pengeluaran"
        >
          <div
            className="flex flex-col items-center"
            aria-label="Detail Pemasukan"
          >
            <div className="flex gap-2">
              <img
                src="/ArrowPemasukan.svg"
                alt="Arrow Pemasukan"
                aria-label="Arrow Pemasukan"
              />
              <p className="text-neutral-9 font-medium text-sm">Pemasukan</p>
            </div>
            <h3 className="text-secondary-green text-lg font-bold">
              Rp {monthlyIncome.toLocaleString()}
            </h3>
          </div>
          <div
            className="flex flex-col items-center"
            aria-label="Detail Pengeluaran"
          >
            <div className="flex gap-2">
              <img
                src="/ArrowPengeluaran.svg"
                alt="Arrow Pengeluaran"
                aria-label="Arrow Pengeluaran"
              />
              <p className="text-neutral-9 font-medium text-sm">Pengeluaran</p>
            </div>
            <h3 className="text-secondary-red text-lg font-bold">
              Rp {monthlyOutcome.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporanKeuangan;
