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
      <div className="container">
        <AppProvider>
          <BrowserRouter>
            <div>
              <SearchForm />
              <BookList />
            </div>
            <TopBar />

            <Routes>
              <Route exact path="/" element={<Javascript />} />
              <Route path="/kannada" element={<Kannada />} />
              <Route path="/art" element={<Arts />} />
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </div>
    </>
  );
}

export default App;
