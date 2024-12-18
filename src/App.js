import "./App.css";
import Home from "./pages/Home";
import Layout from "./pages/Layout"
import { WeatherProvider } from "./Context/WeatherContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <WeatherProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} /> 
          <Route path="home" element={<Home/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
      </WeatherProvider>
    </div>
 );
}

export default App;
