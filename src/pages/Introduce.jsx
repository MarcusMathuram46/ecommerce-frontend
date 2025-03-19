import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "./../components/Container";
import { motion } from 'framer-motion'; // Import motion for animations

function Introduce() {
  return (
    <>
      <Meta title="Introduction" />
      <BreadCrumb title="Introduction" />
      <Container class1="contact-wrapper home-wrapper-2 pt-3 pb-4">
        <div className="row">
          <div className="col-12">
            <motion.header
              className="p-2 bg-primary text-white text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-0">Welcome to our e-commerce website.</h3>
            </motion.header>

            <motion.section
              className="container my-4 contact-item"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Introduction
              </motion.h2>
              <motion.p
                className="mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Welcome to our cutting-edge e-commerce app, where convenience meets quality. Discover a seamless shopping experience right at your fingertips. Browse through a diverse range of products from renowned brands, carefully curated to cater to your every need. With user-friendly navigation and secure payment options, shopping has never been easier. Whether you're searching for the latest fashion trends, must-have gadgets, or everyday essentials, our app has you covered. Explore personalized recommendations tailored just for you, ensuring every purchase is a perfect fit. Elevate your shopping journey with our app and indulge in the ultimate convenience of online shopping, anytime, anywhere.
              </motion.p>
            </motion.section>

            <motion.section
              className="container my-4 contact-item"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                "Gadget Galaxy: Explore, Shop, Enjoy!"
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Our website offers a range of products, including:
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Mobile: Stay connected on the go with powerful communication and access to essential apps.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Tablet: Versatile device for entertainment, productivity, and portable computing tasks.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Laptop: Portable powerhouse for work, creativity, and multimedia consumption.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  TV: Central hub for entertainment, gaming, and streaming content on a big screen.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Watch: Convenient wearable device for notifications, fitness tracking, and quick access to information.
                </motion.li>
              </motion.ul>
            </motion.section>

            <motion.section
              className="container my-4 contact-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Quality and Reliability
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                We are committed to providing high-quality products from reputable brands. Our reliability ensures that you always receive the best products for your home. We inspect and evaluate each product to ensure they meet the highest quality standards.
              </motion.p>
            </motion.section>

            <motion.section
              className="container my-4 contact-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Why Choose Us?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                We understand that you have many choices when shopping online. Why choose us?
              </motion.p>
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Diversity: We offer a variety of different products so you can find what you need.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Quality: Our products meet high-quality standards.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Excellent customer service: Our customer support team is always ready to assist you.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Great value: We are committed to providing products with the best value for you.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Satisfy all needs: We bring you everything to make your home smart and convenient.
                </motion.li>
              </motion.ul>
            </motion.section>

            <motion.section
              className="container my-4 contact-item"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Start Shopping Now
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Don't miss the chance to enhance your daily life with smart products for your home. Visit our website and start shopping now!
              </motion.p>
            </motion.section>

            <motion.footer
              className="p-2 bg-primary text-white text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>Thank you for visiting our e-commerce website.</p>
              <p className="mb-0">
                Wishing you a wonderful shopping experience!
              </p>
            </motion.footer>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Introduce;
