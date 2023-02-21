import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search";
import "./App.css";
function SearchApp() {
  const [data, setData] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  useEffect(() => {
    setLoading("true");
    fetch("https://openlibrary.org/search.json?author=tolkien&sort=new")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading())
      .catch(setError);
  }, []);
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
        {/* <Search term={search} searchKeyword={searchHandler} /> */}
        <i className="fa-solid fa-magnifying-glass">
          <Search term={search} searchKeyword={searchHandler} />
        </i>
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
          <div className="flex">
            {pageNumbers.map((pageNumber) => (
              <div
                key={pageNumber}
                onClick={() => {
                  setCurrentPage(pageNumber);
                }}
                className={
                  pageNumber === currentPage
                    ? "padding-2 px-3 text-black background-green-700 focus:ring hover:background-red-800 cursor-pointer"
                    : "padding-2 px-3 text-black background-pink-700 focus:ring hover:background-red-800 cursor-pointer"
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

export default SearchApp;
