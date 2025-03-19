import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

function ShippingPolicy() {
  return (
    <>
      <Meta title={"Shipping Policy"} />
      <BreadCrumb title="Shipping Policy" />

      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            {/* Wrapping the entire content in motion.div for a fade-in animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="policy"
            >
              <h2 className="text-center">Shipping Policy</h2>
              <p>
                This Shipping Policy outlines how we handle shipping and delivery
                of products to our customers. We are committed to ensuring timely
                and reliable delivery.
              </p>

              {/* Add an animated section for more details */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="policy-content"
              >
                <h4>1. Shipping Method</h4>
                <p>
                  We offer various shipping methods, including standard and expedited
                  shipping options. The available options depend on your location.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="policy-content"
              >
                <h4>2. Shipping Charges</h4>
                <p>
                  Shipping charges are calculated based on the weight of the items and
                  the destination. The exact amount will be displayed at checkout.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="policy-content"
              >
                <h4>3. Delivery Time</h4>
                <p>
                  Delivery time varies based on the shipping method and your location.
                  You will receive an estimated delivery date during checkout.
                </p>
              </motion.div>

              {/* Add more sections with animations as needed */}
            </motion.div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ShippingPolicy;
