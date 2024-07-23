import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import UnderMaintenance from "./pages/UnderMaintenance";
import { AuthProvider } from "./contexts/AuthContext";
import Beranda from "./pages/Beranda";
import Administrasi from "./pages/Administrasi";
import Email from "./pages/Email";
import Profil from "./pages/Profil";
import Transaksi from "./pages/Transaksi";
import InformasiLainya from "./pages/InformasiLainya";
import SaldoMutasi from "./pages/saldomutasi";
import InfoSaldo from "./pages/InfoSaldo";

import "./index.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/maintenance" element={<UnderMaintenance />} />
          <Route path="/" element={<Beranda />} />
          <Route path="/saldo-mutasi" element={<SaldoMutasi />}>
            <Route path="informasi-saldo-rekening" element={<InfoSaldo />} />
            <Route path="mutasi-rekening" element={<InfoSaldo />} />
          </Route>
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/informasi-lainnya" element={<InformasiLainya />} />
          <Route path="/administrasi" element={<Administrasi />} />
          <Route path="/e-mail" element={<Email />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
