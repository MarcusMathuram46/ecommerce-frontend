import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

function RefundPolicy() {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />

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
              <h2 className="text-center">Refund Policy</h2>
              <p>
                This Refund Policy outlines the terms under which refunds are
                processed. We want to ensure that your experience with us is
                satisfactory.
              </p>
              {/* Adding an animated section for more details */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="policy-content"
              >
                <h4>1. Refund Eligibility</h4>
                <p>
                  To be eligible for a refund, the request must be made within
                  30 days of purchase and meet the specific conditions outlined
                  in our refund policy.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="policy-content"
              >
                <h4>2. Refund Process</h4>
                <p>
                  Refunds are processed within 7 business days after the request
                  is approved. The refund will be credited to the original
                  payment method.
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

export default RefundPolicy;
