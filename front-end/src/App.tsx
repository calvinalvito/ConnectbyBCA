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
import PrivateRoute from "./components/PrivateRoutes";

import "./index.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/maintenance" element={<UnderMaintenance />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Beranda />
              </PrivateRoute>
            }
          />
          <Route
            path="/saldo-mutasi"
            element={
              <PrivateRoute>
                <SaldoMutasi />
              </PrivateRoute>
            }
          >
            <Route
              path="informasi-saldo-rekening"
              element={
                <PrivateRoute>
                  <InfoSaldo />
                </PrivateRoute>
              }
            />
            <Route
              path="mutasi-rekening"
              element={
                <PrivateRoute>
                  <InfoSaldo />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="/transaksi"
            element={
              <PrivateRoute>
                <Transaksi />
              </PrivateRoute>
            }
          />
          <Route
            path="/informasi-lainnya"
            element={
              <PrivateRoute>
                <InformasiLainya />
              </PrivateRoute>
            }
          />
          <Route
            path="/administrasi"
            element={
              <PrivateRoute>
                <Administrasi />
              </PrivateRoute>
            }
          />
          <Route
            path="/e-mail"
            element={
              <PrivateRoute>
                <Email />
              </PrivateRoute>
            }
          />
          <Route
            path="/profil"
            element={
              <PrivateRoute>
                <Profil />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
