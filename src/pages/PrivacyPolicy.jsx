import React from "react";
import { motion } from "framer-motion";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

function PrivacyPolicy() {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />

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
              <h2 className="text-center">Privacy Policy</h2>
              <p>
                This Privacy Policy outlines how we collect, use, and protect your
                information. By using our service, you agree to the collection and
                use of information in accordance with this policy.
              </p>
              {/* You can animate other sections as well */}
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="policy-content"
              >
                <h4>1. Information Collection</h4>
                <p>
                  We collect personal data when you use our service. This includes
                  information such as your name, email, and usage data.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="policy-content"
              >
                <h4>2. Use of Information</h4>
                <p>
                  The collected information is used to improve our services and
                  provide personalized experiences.
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

export default PrivacyPolicy;
