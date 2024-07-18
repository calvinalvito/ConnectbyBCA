import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

const PinForm: React.FC = () => {
  const [pin, setPin] = useState("");
  const { verifyPin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await verifyPin(pin);
    if (isValid) {
      window.location.href = "/main";
    } else {
      alert("Invalid PIN");
    }
  };

  return (
    <section className="container mx-auto mt-[60px] mb-[60px]">
      <div className="bg-white items-center text-center flex flex-col gap-[30px] justify-center rounded-[20px] p-[40px] w-[490px]">
        <form onSubmit={handleSubmit}>
          <input
            className="border rounded-[18px] py-[4px] px-[16px] w-[300px] text-sm"
            id="userID"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            type="password"
            placeholder="Enter PIN"
          />
          <button
            className="bg-primary-dark-blue text-base text-white font-bold rounded-[16px] w-[262px] h-[44px]"
            type="submit"
          >
            Masuk
          </button>
        </form>
      </div>
    </section>
  );
};

export default PinForm;
