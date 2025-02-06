import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsYoutube,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import { motion } from "framer-motion";
import newsletter from "../images/newsletter.png";

function Footer() {
  return (
    <>
      {/* Newsletter Subscription Section */}
      <motion.footer 
        className="py-4"
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="footer-top-data d-flex gap-3 align-items-center">
                <img src={newsletter} alt="Newsletter" className="img-fluid" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-md-7">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control py-2"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                />
                <button className="input-group-text p-2 btn btn-info">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Footer Main Section */}
      <motion.footer 
        className="py-4"
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container-xxl">
          <div className="row">
            {/* Contact Info */}
            <div className="col-md-4">
              <h4 className="text-white mb-3">Contact Us</h4>
              <address className="text-white">
                Hno: 174, 2nd Cross Street, 1st Main Road, <br />
                KK Nagar, Madurai <br />
                Pincode: 625020
              </address>
              <a href="tel:+919688597790" className="text-white d-block mb-2">
                +91 96885 97790
              </a>
              <a href="mailto:marcus.mathuram7@gmail.com" className="text-white d-block">
                marcus.mathuram7@gmail.com
              </a>
              <div className="d-flex gap-3 mt-3">
                {[BsLinkedin, BsInstagram, BsGithub, BsYoutube, BsFacebook].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="##"
                    className="text-white fs-4"
                    whileHover={{ scale: 1.2, color: "#007bff" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            {[
              { title: "Information", links: ["Privacy Policy", "Refund Policy", "Shipping Policy", "Terms & Conditions", "Blogs"] },
              { title: "Account", links: ["About Us", "FAQ", "Contact"] },
              { title: "Quick Links", links: ["Laptops", "Headphones", "Tablets", "Watch"] },
            ].map((section, index) => (
              <div className="col-md-3" key={index}>
                <h4 className="text-white mb-3">{section.title}</h4>
                <div className="d-flex flex-column">
                  {section.links.map((link, i) => (
                    <motion.span 
                      key={i}
                      className="text-white py-1 mb-1"
                      whileHover={{ x: 5, color: "#007bff" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to="#" className="text-white">{link}</Link>
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.footer>

      {/* Copyright Section */}
      <motion.footer 
        className="py-4 bg-dark"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0 text-white">&copy; {new Date().getFullYear()} Developed by Marcus</p>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

export default Footer;
