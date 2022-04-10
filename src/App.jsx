import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import SingleDog from "./Components/SingleDog";

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
