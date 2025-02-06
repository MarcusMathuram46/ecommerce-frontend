import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, resetState } from "../features/user/userSlice";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";

let Schema = Yup.object().shape({
  oldPassword: Yup.string().required("Old password is required"),
  newPassword: Yup.string()
    .required("New password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must have at least 8 characters, including uppercase, lowercase, digits, and special characters"
    ),
});

function ChangePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isShowPasswordOld, setIsShowPasswordOld] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(resetState());
  }, []);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      dispatch(changePassword(values));
    },
  });

  useEffect(() => {
    if (authState.updatedPassword !== undefined && authState.isError === false) {
      navigate("/my-profile");
    }
  }, [authState]);

  return (
    <>
      <Meta title="Change Password" />
      <BreadCrumb title="Change password" />
      <Container class1="login-wrapper py-5" style={{ backgroundColor: "#7985c9" }}>
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <motion.h3
                className="text-center mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Change password
              </motion.h3>

              <motion.form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="custom-input-password"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <CustomInput
                    type={isShowPasswordOld ? "text" : "password"}
                    name="oldPassword"
                    placeholder="Old password"
                    value={formik.values.oldPassword}
                    onChange={formik.handleChange("oldPassword")}
                    onBlur={formik.handleBlur("oldPassword")}
                  />
                  <div className="error">
                    {formik.touched.oldPassword && formik.errors.oldPassword}
                  </div>
                  <motion.span
                    onClick={() => setIsShowPasswordOld(!isShowPasswordOld)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {isShowPasswordOld ? <FaRegEye /> : <FaRegEyeSlash />}
                  </motion.span>
                </motion.div>

                <motion.div
                  className="custom-input-password"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <CustomInput
                    type={isShowPassword ? "text" : "password"}
                    name="newPassword"
                    placeholder="New password"
                    value={formik.values.newPassword}
                    onChange={formik.handleChange("newPassword")}
                    onBlur={formik.handleBlur("newPassword")}
                  />
                  <div className="error">
                    {formik.touched.newPassword && formik.errors.newPassword}
                  </div>
                  <motion.span
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {isShowPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </motion.span>
                </motion.div>

                <div>
                  <Link to="/forgot-password">Forgot password?</Link>
                  <motion.div
                    className="mt-3 d-flex justify-content-center align-items-center gap-15"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.button
                      className="button border-0 signIn btn-submit"
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      Change password
                    </motion.button>
                  </motion.div>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ChangePassword;
