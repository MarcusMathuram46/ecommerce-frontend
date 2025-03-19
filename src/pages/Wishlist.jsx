import React, { useEffect } from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { addToWishlist } from "../features/products/productSlice";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  const dispatch = useDispatch();

  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  const addedWishlistState = useSelector(
    (state) => state?.product?.addToWishlist
  );

  useEffect(() => {
    getWishlistFromDb();
  }, [addedWishlistState]);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist(config2));
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {/* Add animation to the entire wishlist section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="col-12"
          >
            {/* Check if wishlist is empty and display appropriate message */}
            {wishlistState && wishlistState.length === 0 ? (
              <div className="text-center fs-3">
                There are no favorite products
              </div>
            ) : (
              <div className="row">
                {/* Animate each product card as it appears */}
                {wishlistState.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1, // Stagger animations for each product card
                      duration: 0.5,
                      type: "spring",
                    }}
                    className="col-md-4 col-6"
                  >
                    <ProductCard data={product} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </Container>
    </>
  );
}

export default Wishlist;
