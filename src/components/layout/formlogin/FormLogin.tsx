import React, { useState } from "react";
import { useAuth } from "../../../contexts/useAuth";
import Popup from "../../base/popup";
import ButtonIcon from "../../base/buttonicon";
import Button from "../../base/button";

const FormLogin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [errors, setErrors] = React.useState<{
    username?: string;
    password?: string;
  }>({});

  const showPopup = () => {
    setPopupVisible(true);
  };
  const hidePopup = () => {
    setPopupVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    const newErrors: { username?: string; password?: string } = {};
    if (!username) {
      newErrors.username = "User ID tidak boleh kosong.";
    }
    if (!password) {
      newErrors.password = "Password harus lebih dari 8 karakter.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      await login(username, password);
    } catch (error) {
      setShowErrorPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setErrors({});
  };

  const handleClosePopup = () => {
    setShowErrorPopup(false);
  };

  return (
    <div className="flex flex-col bg-primary-blue w-[874px] py-[16px] px-[32px] rounded-[20px]" role="form" aria-labelledby="login-form-title">
      <h2 id="login-form-title" className="font-semibold text-[20px] text-white mx-auto">
        Selamat Datang di Internet Banking Connect by BCA
      </h2>
      <div className="flex flex-row mt-[40px]">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-[16px]">
              <label
                className="block text-sm text-white mb-[9px] px-[14px]"
                htmlFor="userID"
              >
                UserID
              </label>
              <input
                className="border rounded-[18px] py-[4px] px-[16px] w-[300px] text-sm"
                id="userID"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="userID"
                placeholder="Masukan User ID Anda"
                autoComplete="username"
                aria-describedby="userID-description"
              />
              <span id="userID-description" className="sr-only">Kolom Masukkan USER ID</span>
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
            <div className="mb-[22px]">
              <label
                className="block text-sm text-white mb-[9px] px-[14px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded-[18px] py-[4px] px-[16px] w-[300px] text-sm"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukan Password Anda"
                autoComplete="current-password"
                aria-describedby="password-description"
              />
              <span id="password-description" className="sr-only">Kolom Masukan Password</span>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <Button
                type="submit"
                ariaLabel="Tombol masuk akun"
                variant="micro"
                colorScheme="primary"
                state="active"
                isLoading={isLoading}
              >
                {isLoading ? (
                  <span className="h-4 w-4 border-2 border-t-2 border-t-transparent border-white rounded-full animate-spin" aria-hidden="true"></span>
                ) : (
                  "Masuk"
                )}
              </Button>

              <Button
                type="button"
                onClick={handleReset}
                ariaLabel="Tombol menghapus semua isian di kolom"
                variant="micro"
                colorScheme="reset"
                state="active"
              >
                Reset
              </Button>
            </div>
          </form>
          <div className="flex gap-[21px] mt-[35px] justify-center">
            <ButtonIcon
              ariaLabel="Tombol lupa User ID"
              onClick={showPopup}
              imgSrc="/Profil.svg"
              imgAlt="Tombol lupa User ID"
              text="Lupa UserID ?"
              textClassName="underline text-white"
              containerClassName=""
            />

            <ButtonIcon
              ariaLabel="Tombol lupa password"
              onClick={showPopup}
              imgSrc="/ForgotPIN.svg"
              imgAlt="Tombol lupa password"
              text="Lupa Kata Sandi?"
              textClassName="underline text-white"
              containerClassName=""
            />
          </div>
        </div>
        <div className="flex flex-col ml-[90px]">
          <p className="text-sm text-white text-justify w-[320px]">
            Informasi :<br />
            USER ID dan PIN Internet Banking dapat diperoleh pada saat Anda melakukan Registrasi Internet melalui ATM BCA.
            <br />
            <br />
            Untuk informasi lebih lanjut hubungi Halo BCA 1500888.
          </p>
        </div>
      </div>
      {showErrorPopup && (
        <Popup
          message={error || "Terjadi kesalahan saat melakukan permintaan."}
          svgSrc="/ForgotUserID.svg"
          svgAlt="Error Icon"
          labelPopup="Pop up salah user id/kata sandi"
          labelButton="Tombol kembali dan mengisi ulang user id/kata sandi"
          buttonText="Ulangi"
          onButtonClick={handleClosePopup}
        />
      )}
      {isPopupVisible && (
        <Popup
          message="Segera perbarui User ID / Kata Sandi melalui layanan bank terdekat atau hubungi customer service kami melalui email halobca@bca.co.id"
          svgSrc="/ForgotUserID.svg"
          svgAlt="Logo Lupa User Id"
          labelButton="Tombol kembali mengisi form login"
          labelPopup="Pop Up Lupa USER ID & Kata Sandi Internet Banking"
          buttonText="Kembali"
          onButtonClick={hidePopup}
        />
      )}
    </div>
  );
};

export default FormLogin;
