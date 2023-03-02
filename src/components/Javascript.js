import React from "react";
import { useState, useEffect } from "react";

export default function Javascript() {
  const [data, setData] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading("true");
    fetch("https://openlibrary.org/subjects/javascript.json")
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
  let array = data.works;

  return (
    <>
      <div className="container">
        <table className="table">
          <tr className="tr">
            <th className="th">Title and Subtitle</th>
            <th className="th">IA COLLECTION </th>
            <th className="th">EDITION COUNT</th>
            <th className="th">First Publish year</th>
          </tr>

          {array.map((item, i) => {
            return (
              <tr className="tr">
                <td className="td">{item.title}</td>
                <td className="td">{item.ia_collection.join(", ")}</td>
                <td className="td">{item.edition_count}</td>
                <td className="td">{item.first_publish_year}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
