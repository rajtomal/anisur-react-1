import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [getData, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    // time set
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if(!res.ok){
            {/* error hendling */}
            throw Error("Fecthing is not successful");
          }else{
            return res.json();
          }
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          {/* error hendling */}
          setError(null)
        })
        /* error hendling */
        .catch((error) => {
          setError(error.message);
          setIsLoading(false)
        })
    }, 2000);
  }, []);

  const getDataElement =
    getData &&
    getData.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  const IsactiveLoding = <p>Data is loading</p>;

  return (
    <div>
      <h1>DataFetch</h1>
      {/* /* error hendling */ }
      {error && <p> {error} </p>}
      {isLoading && IsactiveLoding}
      {getDataElement}
    </div>
  );
};

export default DataFetch;
