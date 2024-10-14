import React, { useEffect, useState } from "react";
import "./searchitem.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Searchitem = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the rooms!", error);
      });
  }, []);

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={product._id} className="searchItem">
          <img src={product.image} alt={product.name} className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{product.name}</h1>
            <span className="siDistance">{product.distanceFromCenter}m from center</span>
            {product.freeTaxi && <span className="siTaxiOp">Free Airport taxi</span>}
            <span className="siSubtitle">{product.roomType}</span>
            <span className="siFeatures">{product.features}</span>
            {product.freeCancellation && <span className="siCancelOp">Free Cancellation</span>}
            <span className="siCancelOpSubtitle">
              You can cancel later, so lock in this great price today!
            </span>
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{product.ratingLabel || "Rating"}</span>
              <button>{product.rating || "N/A"}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">₹{product.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button
                className="siCheckButton"
                onClick={() => navigate(`/hotels/${product._id}`)}
              >
                See availability
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Searchitem;










// import React, { useEffect, useState } from "react";
// import "./searchitem.css";
// import {useNavigate} from "react-router-dom";
// import axios from "axios";

// const Searchitem = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/products')
//         .then(response => {
//             setProducts(response.data);
//         })
//         .catch(error => {
//             console.error('There was an error fetching the rooms!', error);
//         });
// }, []);
//   return (
//     <div className="product-list">
//       {products.map(product => (
//         <div key={product._id} className="searchItem">
//           <img src={product.image} alt={product.name} className="siImg" />
//           <div className="siDesc">
//             <h1 className="siTitle">{product.name}</h1>
//             <span className="siDistance">{product.distanceFromCenter}m from center</span>
//             {product.freeTaxi && <span className="siTaxiOp">Free Airport taxi</span>}
//             <span className="siSubtitle">{product.roomType}</span>
//             <span className="siFeatures">{product.features}</span>
//             {product.freeCancellation && <span className="siCancelOp">Free Cancellation</span>}
//             <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
//           </div>
//           <div className="siDetails">
//             <div className="siRating">
//               <span>{product.ratingLabel || "Rating"}</span>
//               <button>{product.rating || "N/A"}</button>
//             </div>
//             <div className="siDetailTexts">
//               <span className="siPrice">₹{product.price}</span>
//               <span className="siTaxOp">Includes taxes and fees</span>
              // <button
              //   className="siCheckButton"
              //   onClick={() => navigate(`/hotels/${product._id}`)}
              // >
              //   See availability
              // </button>
//               {index === 0 && (
//                 <button
//                   className="siCheckButton"
//                   onClick={() => navigate(`/hotels/${product._id}`)}
//                 >
//                   See availability 
//                 </button>
//               )}
//               {index === 1 && (
//                 <button
//                   className="siCheckButton"
//                   onClick={() => navigate(`/hotels1/${product._id}`)}
//                 >
//                   See availability
//                 </button>
//               )}
//               {index === 2 && (
//                 <button
//                   className="siCheckButton"
//                   onClick={() => navigate(`/hotels2/${product._id}`)}
//                 >
//                   See availability
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>











  //   <div>
  //   <div className="searchItem">
  //     <img src="https://cf.bstatic.com/xdata/images/hotel/square240/31761723.webp?k=589f4d1db337ba347d4f8a858bd62251e3b2684e8dafc600ffdda12961c80bb4&o=" alt="" className="siImg" />
  //     <div className="siDesc">
  //       <h1 className="siTitle">Plaza Hotel</h1>
  //       <span className="siDistance">300m from centert</span>
  //       <span className="siTaxiOp">Free Airport taxi</span>
  //       <span className="siSubtitle">
  //       Studio Apartment with Air conditioning
  //       </span>
  //       <span className="siFeatures">
  //       3 beds - 2 singles, 1 extra-large double
  //       </span>
  //       <span className="siCancelOp">Free Cancellation</span>
  //       <span className="siCancelOpSubtitle">
  //       You can cancel later, so lock in this great price today!
  //       </span>
  //     </div>
  //     <div className="siDetails">
  //       <div className="siRating">
  //         <span>Excellent</span>
  //         <button>8.9</button>
  //       </div>
  //       <div className="siDetailTexts">
  //         <span className="siPrice">₹3,074</span>
  //         <span className="siTaxOp">Includes taxes and fees</span>
  //         <button className="siCheckButton" onClick={()=>navigate("/hotels/:id")}>See availability</button>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="searchItem">
  //     <img src="https://cf.bstatic.com/xdata/images/hotel/square240/162139567.webp?k=c2e069cc73c468bea17dabf9244f1248c6f96ba6e2889d59d0763c49f5c74bf1&o=" alt="" className="siImg" />
  //     <div className="siDesc">
  //       <h1 className="siTitle">KVM Hotels</h1>
  //       <span className="siDistance">600m from centert</span>
  //       <span className="siTaxiOp">Free Airport taxi</span>
  //       <span className="siSubtitle">
  //        Delux Room
  //       </span>
  //       <span className="siFeatures">
  //          1 large double bed
  //       </span>
  //       <span className="siCancelOp">Free Cancellation</span>
  //       <span className="siCancelOpSubtitle">
  //       You can cancel later, so lock in this great price today!
  //       </span>
  //     </div>
  //     <div className="siDetails">
  //       <div className="siRating">
  //         <span>Good</span>
  //         <button>7.9</button>
  //       </div>
  //       <div className="siDetailTexts">
  //         <span className="siPrice">₹2,099</span>
  //         <span className="siTaxOp">Includes taxes and fees</span>
  //         <button className="siCheckButton">See availability</button>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="searchItem">
  //     <img src="https://cf.bstatic.com/xdata/images/hotel/square240/405031215.webp?k=03015376c8222ee33efd539df1782b2dc2ecfcc51322d0df237478029f583464&o=" alt="" className="siImg" />
  //     <div className="siDesc">
  //       <h1 className="siTitle">Safa Residency</h1>
  //       <span className="siDistance">250m from centert</span>
  //       <span className="siTaxiOp">Free Airport taxi</span>
  //       <span className="siSubtitle">
  //       Delux Double Room
  //       </span>
  //       <span className="siFeatures">
  //        1 double bed
  //       </span>
  //       <span className="siCancelOp">Free Cancellation</span>
  //       <span className="siCancelOpSubtitle">
  //       You can cancel later, so lock in this great price today!
  //       </span>
  //     </div>
  //     <div className="siDetails">
  //       <div className="siRating">
  //         <span>Good</span>
  //         <button>7.6</button>
  //       </div>
  //       <div className="siDetailTexts">
  //         <span className="siPrice">₹1,608</span>
  //         <span className="siTaxOp">Includes taxes and fees</span>
  //         <button className="siCheckButton">See availability</button>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="searchItem">
  //     <img src="https://cf.bstatic.com/xdata/images/hotel/square240/442685859.webp?k=bc0ac4513ede3736f32d4e44bddf8ccf8b720c16809f125c11487894b34bf687&o=" alt="" className="siImg" />
  //     <div className="siDesc">
  //       <h1 className="siTitle">Courtyard by Marriott</h1>
  //       <span className="siDistance">160m from centert</span>
  //       <span className="siTaxiOp">Getaway Deal</span>
  //       <span className="siSubtitle">
  //        King Room
  //       </span>
  //       <span className="siFeatures">
  //       1 extra-large double bed
  //       </span>
  //       <span className="siCancelOp">Free Cancellation</span>
  //       <span className="siCancelOpSubtitle">
  //       You can cancel later, so lock in this great price today!
  //       </span>
  //     </div>
  //     <div className="siDetails">
  //       <div className="siRating">
  //         <span>Fabulous</span>
  //         <button>9.2</button>
  //       </div>
  //       <div className="siDetailTexts">
  //         <span className="siPrice">₹9,399</span>
  //         <span className="siTaxOp">Includes taxes and fees</span>
  //         <button className="siCheckButton">See availability</button>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="searchItem">
  //     <img src="https://cf.bstatic.com/xdata/images/hotel/square240/477651239.webp?k=dec0ab3ba83548e548e8ad01628d73cef28b38a1f69a52a6db1b506ad8078ade&o=" alt="" className="siImg" />
  //     <div className="siDesc">
  //       <h1 className="siTitle">TPC Camphor</h1>
  //       <span className="siDistance">320m from centert</span>
  //       <span className="siTaxiOp">Getaway Deal</span>
  //       <span className="siSubtitle">
  //        Delux Double Room
  //       </span>
  //       <span className="siFeatures">
  //       2 beds (1 double, 1 futon)
  //       </span>
  //       <span className="siCancelOp">Free Cancellation</span>
  //       <span className="siCancelOpSubtitle">
  //        No Prepayment needed, so lock in this great price today!
  //       </span>
  //     </div>
  //     <div className="siDetails">
  //       <div className="siRating">
  //         <span>Excellent</span>
  //         <button>7.9</button>
  //       </div>
  //       <div className="siDetailTexts">
  //         <span className="siPrice">₹2,801</span>
  //         <span className="siTaxOp">Includes taxes and fees</span>
  //         <button className="siCheckButton">See availability</button>
  //       </div>
  //     </div>
  //   </div>
  //   <div className="searchItem">
  //     <img src="https://cf.bstatic.com/xdata/images/hotel/square240/375317242.webp?k=133fc2a9925d1bf78bdafdd9dbd81de56cee4d8b57a3f8b69ad337d29841c2b9&o=" alt="" className="siImg" />
  //     <div className="siDesc">
  //       <h1 className="siTitle">Srirengavilasam Elite</h1>
  //       <span className="siDistance">490m from centert</span>
  //       <span className="siSubtitle">
  //        Family Suite
  //       </span>
  //       <span className="siFeatures">
  //         2 beds (1 extra-large double, 1 large double)
  //       </span>
  //       <span className="siCancelOp">Free Cancellation</span>
  //       <span className="siCancelOpSubtitle">
  //       You can cancel later, so lock in this great price today!
  //       </span>
  //     </div>
  //     <div className="siDetails">
  //       <div className="siRating">
  //         <span>Excellent</span>
  //         <button>7.8</button>
  //       </div>
  //       <div className="siDetailTexts">
  //         <span className="siPrice">₹3,499</span>
  //         <span className="siTaxOp">Includes taxes and fees</span>
  //         <button className="siCheckButton">See availability</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>
//   );
// };

// export default Searchitem;
