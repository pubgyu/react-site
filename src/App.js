import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Movie from "./routes/Movie";
import MovieDetail from "./routes/MovieDetail";
import Redux from "./routes/Redux";
import Detail from "./routes/Detail";

function App() { 
  return (
    <div className="App">
      <GlobalStyles />
      <div className="contents">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Header />

          <Routes>
            <Route path="/" element={<Movie />}></Route>
            <Route path="/movie/:id" element={<MovieDetail />}></Route>
            <Route path="/redux" element={<Redux />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
