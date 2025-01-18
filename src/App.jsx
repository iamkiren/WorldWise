import { Route, Routes } from "react-router-dom";
import PageNav from "./components/PageNav";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <PageNav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
