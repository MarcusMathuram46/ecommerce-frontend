import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
import { motion } from "framer-motion"; // Import motion from Framer Motion

function CompareProduct() {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          {/* First Product Card */}
          <div className="col-3">
            <motion.div
              className="compare-product-card position-relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={watch}
                alt="cross"
                className="position-absolute cross img-fluid"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <div className="product-card-image">
                <motion.img
                  src={watch}
                  alt="watch"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="compare-product-details">
                <motion.h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </motion.h5>
                <motion.h6
                  className="price mb-3 mt-3"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  $ 100
                </motion.h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Second Product Card */}
          <div className="col-3">
            <motion.div
              className="compare-product-card position-relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }} // Added delay for smooth sequence
            >
              <motion.img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <div className="product-card-image">
                <motion.img
                  src={watch}
                  alt="watch"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="compare-product-details">
                <motion.h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </motion.h5>
                <motion.h6
                  className="price mb-3 mt-3"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  $ 100
                </motion.h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity:</h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CompareProduct;
