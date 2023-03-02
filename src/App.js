// import SearchApp from "./SearchApp";

import { AppProvider } from "./Context.";
import "./App.css";
import TopBar from "./components/TopBar";
import Javascript from "./components/Javascript";
import Kannada from "./components/Kannada";
import Arts from "./components/Arts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import SearchForm from "./components/SearchForm/SearchForm";
function App() {
  return (
    <>
      <AppProvider>
        <div className="container">
          <h3 style={{ color: "red" }}>Challenge 1</h3>
          <BrowserRouter>
            <SearchForm />
            <BookList />
            <h3 style={{ color: "red" }}>Challenge 2</h3>

            <TopBar />

            <Routes>
              {/* <Route path="book" element={<BookList />} /> */}
              {/* <Route exact path="/" element={<Search1 />} /> */}
              <Route exact path="/" element={<Javascript />} />
              <Route path="/kannada" element={<Kannada />} />
              <Route path="/art" element={<Arts />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
