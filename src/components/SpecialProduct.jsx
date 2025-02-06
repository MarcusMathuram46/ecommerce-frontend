import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function SpecialProduct(props) {
  const { title, brand, totalrating, price, sold, quantity, id } = props;

  return (
    <>
      <motion.div
        className="col-6 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="special-product-card">
          <div className="d-flex justify-content-between">
            <div>
              <motion.img
                src="images/watch.jpg"
                className="img-fluid"
                alt="watch"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{brand}</h5>
              <h6 className="title">{title}</h6>
              <ReactStars
                count={5}
                size={24}
                value={totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">{price}</span> &nbsp;{" "}
                <strike>$200</strike>
              </p>
              <div className="prod-count my-3">
                <p>Products: {quantity}</p>
                <div className="progress">
                  <motion.div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: (quantity / (quantity + sold)) * 100 + "%",
                    }}
                    aria-valuenow={(quantity / (quantity + sold)) * 100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    initial={{ width: 0 }}
                    animate={{ width: (quantity / (quantity + sold)) * 100 + "%" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
              <Link className="button" to={"/product/" + id}>
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SpecialProduct;
