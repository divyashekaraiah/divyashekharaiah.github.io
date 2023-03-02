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
        <BrowserRouter>
          <SearchForm />
          <BookList />

          <TopBar />

          <Routes>
            <Route exact path="/" element={<Javascript />} />
            <Route path="/kannada" element={<Kannada />} />
            <Route path="/art" element={<Arts />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
