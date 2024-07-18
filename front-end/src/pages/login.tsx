import React, { useEffect, useState } from 'react';
import Header from "../components/header";
import FormLogin from "../components/formlogin";
import Carousel from "../components/carousel";
import Information from "../components/information";
import PinForm from "../components/pinform";
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { userID } = useAuth();
  const [firstLogin, setFirstLogin] = useState<boolean>(true);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  };

  useEffect(() => {
    const firstLoginCookie = getCookie("firstLogin");
    if (firstLoginCookie) {
      setFirstLogin(false);
    }
  }, []);

  return (
    <body className="bg-primary-dark-blue font-sans">
      <Header />
      <section className="container mx-auto mt-[60px] flex flex-col gap-[27px]">
        <div className="flex flex-row gap-[52px]">
          {firstLogin || !userID ? <FormLogin /> : <PinForm />}
          <Carousel />
        </div>
        <Information />
      </section>
    </body>
  );
};

export default Login;
