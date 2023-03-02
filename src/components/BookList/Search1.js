// import React, { useState, useEffect } from "react";
// import { useCallback } from "react";
// import { useGlobalContext } from "../../Context.";
// const URL = "http://../../Searchary.org/search.json?title=";

// const AppProvider = () => {
//   const { books, loading, resultTitle, setLoading, setBooks } =
//     useGlobalContext();
//   const [searchTerm, setSearchTerm] = useState("the lost world");
//   // const [books, setBooks] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   // const [resultTitle, setResultTitle] = useState("");

//   const fetchBooks = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${URL}${searchTerm}`);
//       const data = await response.json();
//       const { docs } = data;

//       if (docs) {
//         const newBooks = docs.slice(0, 20).map((bookSingle) => {
//           const {
//             key,
//             author_name,
//             cover_i,
//             edition_count,
//             first_publish_year,
//             title,
//           } = bookSingle;

//           return {
//             id: key,
//             author: author_name,
//             cover_id: cover_i,
//             edition_count: edition_count,
//             first_publish_year: first_publish_year,
//             title: title,
//           };
//         });

//         setBooks(newBooks);

//         if (newBooks.length > 1) {
//           setResultTitle("Your Search Result");
//         } else {
//           setResultTitle("No Search Result Found!");
//         }
//       } else {
//         setBooks([]);
//         setResultTitle("No Search Result Found!");
//       }
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   }, [searchTerm]);

//   useEffect(() => {
//     fetchBooks();
//   }, [searchTerm, fetchBooks]);

//   return <></>;
// };

// export { AppProvider };
