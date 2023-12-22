import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageComponent from "pages/Component";
import AppLayout from "components/AppLayout";
import Home from "pages/Home";
import PageNotFound from "pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="component" element={<PageComponent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
