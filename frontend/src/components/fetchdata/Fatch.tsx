import React, { useEffect, useState } from "react";

interface Product {
    _id: string,
    name: string,
    imageUrl: string
}

function Fatch() {
  const [posts, setPosts] = useState<Product[]>([]);
  const fetchPost = async () => {
    const response = await fetch("http://localhost:5000/api/v1/products");
    const data = await response.json();
    setPosts(data)

    if(!response.ok){
        const msg = `An error occured : ${response.status}`;
        throw new Error(msg)
    }

  };

//   useEffect(() => {
//     fetchPost()
//   }, [])


  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <h1>Fetch data with typescript</h1>
        <button onClick={fetchPost} className="btn btn-primary">
          Show data
        </button>
      </div>
      {posts.map(pro => {
          return (
              <div key={pro._id} className="col-md-3 text-center p-5">
                  <img className="w-100" src={pro.imageUrl} alt="" />
                  <p>{pro.name}</p>
              </div>
          )
      })}
    </div>
  );
}

export default Fatch;
