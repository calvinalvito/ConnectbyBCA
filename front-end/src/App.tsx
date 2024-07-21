import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import UnderMaintenance from "./pages/UnderMaintenance";
import { AuthProvider } from "./contexts/AuthContext";
import Beranda from "./pages/Beranda";
import Administrasi from "./pages/Administrasi";
import Email from "./pages/Email";
import InformasiSaldo from "./pages/InformasiLainya";
import Profil from "./pages/Profil";
import Transaksi from "./pages/Transaksi";
import InformasiLainya from "./pages/InformasiLainya";

import "./index.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/maintenance" element={<UnderMaintenance />} />
          <Route path="/" element={<Beranda />} />
          <Route path="/administrasi" element={<Administrasi />} />
          <Route path="/informasi-lainnya" element={<InformasiLainya />} />
          <Route path="/e-mail" element={<Email />} />
          <Route path="/saldo-mutasi" element={<InformasiSaldo />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/transaksi" element={<Transaksi />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
