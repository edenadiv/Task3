import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarDetails from "./pages/CarDetails";
import FavoritesPage from "./pages/FavoritesPage";
import ImageTest from "./pages/ImagesTest";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/test-images" element={<ImageTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
