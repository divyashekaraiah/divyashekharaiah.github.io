import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";
import "./App.css";
import axios from "axios";

function Search1() {
  const [data, setData] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  // const apiUrl =
  //   "https://openlibrary.org/search.json?q=" + search + "&mode=everything";
  // useEffect(() => {
  //   setLoading("true");

  //   // fetch("https://openlibrary.org/search.json?author=tolkien&sort=new")
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .then(() => setLoading())
  //     .catch(setError);
  // }, []);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get("https://openlibrary.org/search.json?subject=" + search)
        .then((response) => response.json())
        .then((data) => setData(data))
        .then(() => setLoading())
        .catch(setError);
    }
  };
  console.log(data);
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  if (!data) {
    return null;
  }
  let array = data.docs;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = array.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(array.length / postPerPage); i++)
    pageNumbers.push(i);
  console.log(pageNumbers);

  const searchHandler = (search) => {
    setSearch(search);
    if (search !== "") {
      const newBookList = array.filter((book) => {
        return Object.values(book)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResults(newBookList);
    } else {
      setSearchResults(array);
    }
  };

  return (
    <>
      <div className="container">
        <div className="flex items-center">
          <Search
            term={search}
            searchKeyword={searchHandler}
            onKeyPress={searchBook}
            className="block w-full px-16 py-16 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          {/* <input
            type="text"
            placeholder="Enter Your Book Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook}
            searchKeyword={searchHandler}
          /> */}
        </div>

        {search.length < 1 ? (
          <table className="table">
            <tr className="tr">
              <th className="th">Title and Subtitle</th>
              <th className="th">Author </th>
              <th className="th">Latest Publish year</th>
              <th className="th">First Publish year</th>
            </tr>

            {currentPost.map((item, i) => {
              return (
                <tr className="tr">
                  <td className="td">{item.title}</td>
                  <td className="td">{item.author_name}</td>
                  <td className="td">{item.publish_date}</td>
                  <td className="td">{item.first_publish_year}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <table className="table">
            <tr className="tr">
              <th className="th">Title and Subtitle</th>
              <th className="th">Author </th>
              <th className="th">Latest Publish year</th>
              <th className="th">First Publish year</th>
            </tr>

            {searchResults.map((item, i) => {
              return (
                <tr className="tr">
                  <td className="td">{item.title}</td>
                  <td className="td">{item.author_name}</td>
                  <td className="td">{item.publish_date}</td>
                  <td className="td">{item.first_publish_year}</td>
                </tr>
              );
            })}
          </table>
        )}
        <div className="but">
          <button
            className="button"
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            PREVIOUS
          </button>
          <div className="w-full flex justify-around">
            {pageNumbers.map((pageNumber) => (
              <div
                key={pageNumber}
                onClick={() => {
                  setCurrentPage(pageNumber);
                }}
                className={
                  pageNumber === currentPage
                    ? "cursor-pointer flex items-center justify-center w-9 h-9 border-2  bg-blue-500 text-white"
                    : "cursor-pointer flex items-center justify-center w-9 h-9 border-2 "
                }
              >
                {pageNumber}
              </div>
            ))}
          </div>
          <button
            className="button"
            onClick={() => {
              if (currentPage < pageNumbers.length) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            NEXT
          </button>
        </div>
      </div>
    </>
  );
}

export default Search1;
