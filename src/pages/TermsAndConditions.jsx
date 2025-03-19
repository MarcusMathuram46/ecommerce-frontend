import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

function TermsAndConditions() {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      
      {/* Animate BreadCrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <BreadCrumb title="Term And Conditions" />
      </motion.div>

      {/* Animate the Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="policy"
              >
                <h2>Terms and Conditions</h2>
                <p>
                  {/* Your terms and conditions content here */}
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </motion.div>
    </>
  );
}

export default TermsAndConditions;
