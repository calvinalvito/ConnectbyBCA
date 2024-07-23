import React from "react";

const MutasiRekening: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-bold text-lg">Mutasi Rekening</h3>
          <p className="text-sm text-white font-semibold">
            Periode 1 Jun 2024 - 30 Jun 2024
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-primary-blue flex px-4 py-2 text-white rounded-md gap-2">
            <img src="/filter.svg" alt="" />
            Filter
          </button>

          <form className="mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <img
                src="/Search.svg"
                alt=""
                className="absolute inset-y-0 left-3 w-5 h-5 my-auto"
              />
              <input
                type="search"
                id="default-search"
                className="px-4 py-2 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search Nama"
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="overflow-x-auto rounded-[10px]">
        <table className="min-w-full bg-white">
          <thead className="bg-white text-primary-dark-blue">
            <tr>
              <th className="py-2 px-4">Tanggal</th>
              <th className="py-2 px-4">Nama</th>
              <th className="py-2 px-4">No Rekening</th>
              <th className="py-2 px-4">Nominal</th>
              <th className="py-2 px-4">Keterangan</th>
              <th className="py-2 px-4">Saldo Akhir</th>
            </tr>
          </thead>
          <tbody className="bg-[#0066AE] text-white">
            <tr className="text-center">
              <td className="py-2 px-4">2024-07-01</td>
              <td className="py-2 px-4">John Doe</td>
              <td className="py-2 px-4">1234567890</td>
              <td className="py-2 px-4">500000</td>
              <td className="py-2 px-4">Payment for services</td>
              <td className="py-2 px-4">Rp 1.000.000</td>
            </tr>
            <tr className="text-center">
              <td className="py-2 px-4">2024-07-02</td>
              <td className="py-2 px-4">Jane Smith</td>
              <td className="py-2 px-4">0987654321</td>
              <td className="py-2 px-4">750000</td>
              <td className="py-2 px-4">Refund</td>
              <td className="py-2 px-4">Rp 1.000.000</td>
            </tr>
            {/* Tambahkan baris lain sesuai kebutuhan */}
          </tbody>
        </table>
      </div>
      <div className="flex gap-4">
        <div className="bg-primary-blue rounded-5 flex flex-col w-[400px] rounded-[20px] p-5 gap-[7px]">
          <div className="flex gap-2">
            <h4 className="w-[215px] text-white text-base font-semibold">
              Saldo Awal
            </h4>
            <h4 className="text-white text-base font-semibold">: 1.782.800</h4>
          </div>
          <div className="flex gap-2">
            <h4 className="w-[215px] text-white text-base font-semibold">
              Mutasi Kredit
            </h4>
            <h4 className="text-white text-base font-semibold">: 1.782.800</h4>
          </div>
          <div className="flex gap-2">
            <h4 className="w-[215px] text-white text-base font-semibold">
              Mutasi Debit
            </h4>
            <h4 className="text-white text-base font-semibold">: 1.782.800</h4>
          </div>
          <div className="flex gap-2">
            <h4 className="w-[215px] text-white text-base font-semibold">
              Saldo Akhir
            </h4>
            <h4 className="text-white text-base font-semibold">: 1.782.800</h4>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-white text-md font-semibold">Catatan</h3>
          <div className="flex gap-2 items-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <p className="text-white text-sm font-medium">
              Periode mutasi yang dapat dipilih 7 hari.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <p className="text-white text-sm font-medium">
              Mutasi rekening maksimum 31 hari yang lalu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutasiRekening;
