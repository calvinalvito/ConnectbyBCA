import React, { useState, useRef, useEffect } from "react";
import Button from "../button";



const PINInput: React.FC = () => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (inputRefs.current[activeIndex]) {
      inputRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      if (value && index < 5) {
        setActiveIndex(index + 1);
      } else if (!value && index > 0) {
        setActiveIndex(index - 1);
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      setActiveIndex(index - 1);
    }
  };

  const handleConfirm = () => {
    const pinValue = pin.join("");
    alert(`PIN yang dimasukkan: ${pinValue}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-[20px] shadow-md w-[511px]">
        <div className="flex flex-col gap-[26px] items-center">
          <h2 className="text-center text-primary-dark-blue text-lg font-bold">
            Masukkan PIN Anda
          </h2>
          <div className="flex justify-center gap-8 mb-4">
            {pin.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={() => setActiveIndex(index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className={`w-[50px] h-[50px] text-center border-2 border-primary-dark-blue rounded-full ${
                  value ? "bg-primary-dark-blue text-transparent" : "bg-white"
                } ${
                  index === activeIndex
                    ? "border-primary-dark-blue"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>
          <Button
            type="button"
            onClick={handleConfirm}
            ariaLabel="Tombol Konfirmasi Input PIN"
            variant="general"
            colorScheme="primary"
            state="active"
          >
            Konfirmasi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PINInput;
