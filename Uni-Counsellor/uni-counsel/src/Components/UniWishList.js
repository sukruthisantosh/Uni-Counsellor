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
