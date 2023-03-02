// import React from "react";
// import { useGlobalContext } from "../../Context.";
// import Book from "../BookList/Book";
// import Loading from "../Loader/Loader";
// import coverImg from "../../images/cover_not_found.jpg";
// import "./BookList.css";

// //https://covers.openlibrary.org/b/id/240727-S.jpg

// const BookList = () => {
//   const { books, loading, resultTitle } = useGlobalContext();
//   const booksWithCovers = books.map((singleBook) => {
//     return {
//       ...singleBook,
//       // // removing /works/ to get only id
//       // id: singleBook.id.replace("/works/", ""),
//       // cover_img: singleBook.cover_id
//       //   ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
//       //   : coverImg,
//     };
//   });

//   if (loading) return <Loading />;

//   return (
//     <section className="booklist">
//       <div className="container">
//         <div className="section-title">
//           {/* <h2>{resultTitle}</h2> */}
//           <table className="table">
//             <tr className="tr">
//               <th className="th1">Title and Subtitle</th>
//               <th className="th2">Author </th>
//               <th className="th3">EDITION COUNT</th>
//               <th className="th4">First Publish year</th>
//             </tr>
//           </table>
//         </div>
//         <div className="booklist-content grid">
//           {booksWithCovers.slice(6, 16).map((item, index) => {
//             return <Book key={index} {...item} />;
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookList;

import React, { useState } from "react";
import { useGlobalContext } from "../../Context";

import Loading from "../Loader/Loader";

import "./BookList.css";

const BookList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const { books, loading, resultTitle } = useGlobalContext();
  // const booksWithCovers = books.map((singleBook) => {
  //   return {
  //     ...singleBook,
  //   };
  // });

  if (loading) return <Loading />;

  let array = books;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = array.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(array.length / postPerPage); i++)
    pageNumbers.push(i);
  console.log(books.author_name);

  return (
    <>
      <div className="container">
        {books.length !== 0 ? (
          <table className="table">
            <tr className="tr">
              <th className="th">Title and Subtitle</th>
              {/* <th className="th">AUTHOR NAME </th> */}
              <th className="th">EDITION COUNT</th>
              <th className="th">First Publish year</th>
            </tr>

            {currentPost.map((item, i) => {
              return (
                <tr className="tr">
                  <td className="td">{item.title}</td>
                  {/* <td className="td">{item.author_name.join(", ")}</td> */}
                  <td className="td">{item.edition_count}</td>
                  <td className="td">{item.first_publish_year}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <h2> {resultTitle}</h2>
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
};

export default BookList;
