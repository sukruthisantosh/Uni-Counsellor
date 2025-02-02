// import { useState, useEffect } from "react";
// import axios from "axios"; // Importing axios for making requests
// import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap's CSS

// const UniWishList = () => {
//   const [uni, setUni] = useState("");
//   const [wishlist, setWishlist] = useState([]);
//   const [loading, setLoading] = useState(true); // To track if data is loading
//   const [error, setError] = useState(null); // For any potential errors

//   const fallbackUniversities = ["Imperial College London", "University College London"];

//   // Fetch universities from the API
//   useEffect(() => {
//     const fetchUniversities = async () => {
//       try {
//         const response = await axios.get(`127.0.0.2:8080/`);
//         setWishlist(response.data); // Assuming the response contains an array of universities
//         setLoading(false);
//       } catch (err) {
//         setWishlist(fallbackUniversities)
//         setError("Failed to fetch universities");
//         setLoading(false);
//       }
//     };

//     fetchUniversities();
//   }, []); // Empty dependency array means it runs only once when the component mounts

//   const addUni = () => {
//     if (uni.trim() && !wishlist.includes(uni)) {
//       setWishlist([...wishlist, uni]);
//       setUni("");
//     }
//   };

//   const removeUni = (uniToRemove) => {
//     setWishlist(wishlist.filter((u) => u !== uniToRemove));
//   };

//   if (loading) {
//     return <div>Loading universities...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="container mt-4">
//       <h3>University Wish List</h3>
//       <div className="d-flex gap-2">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Enter university name"
//           value={uni}
//           onChange={(e) => setUni(e.target.value)}
//         />
//         <button className="btn btn-primary" onClick={addUni}>
//           Add
//         </button>
//       </div>
//       <ul className="list-group mt-3">
//         {wishlist.map((u, index) => (
//           <li key={index} className="list-group-item d-flex justify-content-between">
//             {u}
//             <button className="btn btn-danger btn-sm" onClick={() => removeUni(u)}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UniWishList;

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap's CSS

const UniWishList = () => {
  const [uni, setUni] = useState("");
  const [wishlist, setWishlist] = useState(["Imperial College London", "University College London"]);

  const addUni = () => {
    if (uni.trim() && !wishlist.includes(uni)) {
      setWishlist([...wishlist, uni]);
      setUni("");
    }
  };

  const removeUni = (uniToRemove) => {
    setWishlist(wishlist.filter((u) => u !== uniToRemove));
  };

  return (
    <div className="container mt-4">
      <h3>University Wish List</h3>
      <div className="d-flex gap-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter university name"
          value={uni}
          onChange={(e) => setUni(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addUni}>
          Add
        </button>
      </div>
      <ul className="list-group mt-3">
        {wishlist.map((u, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {u}
            <button className="btn btn-danger btn-sm" onClick={() => removeUni(u)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniWishList;
