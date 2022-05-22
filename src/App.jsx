import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout";
import { Home, About, Error, SingleDog } from "./Pages/index";

const App = () => {
  return (
    <div className="all">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dogs/:dogId" element={<SingleDog />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
