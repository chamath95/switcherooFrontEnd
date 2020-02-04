import React, { useState } from "react";
import "antd/dist/antd.css";
import './style.css';
import { Link } from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { resetpassword } from "../../redux/Thunk/authThunk/index";
import { useFormik } from "formik";
const validate = values => {
  const errors = {}
  if (!values.newPassword)
    errors.newPassword = "Password Required";
  else if (values.newPassword.length < 6)
    errors.newPassword = "Password must be atleast 6 characters";

  if (values.confirmPassword != values.newPassword)
    errors.confirmPassword = "Password does not matched";
  return errors;
}
function ResetPassword(props) {

  const handleSubmit = values => {
    // e.preventDefault();

    props.newPassword(values,props)
    console.log(values)
  };
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: ""
    },
    validate,
    onSubmit: handleSubmit

  });
  const { newPassword, confirmPassword } = formik.values;
  // const handleChange = e => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };


  return (
    <div className="page-container forgerPassword page">
      <Row type="flex" justify="center" className="inner-Container">
        <Row className="innnerContainer">
          <Col span={24} className="logoStyle">
            <img className="img" src={logo} />
          </Col>

          <Col span={24}>
            <p>Please Enter Your new Password</p>
          </Col>
          <br />
          <Col span={24}>
            <Row type="flex" justify="center">
              <Form onSubmit={formik.handleSubmit}>
                <Col span={24}>
                  <Input
                    type="password"
                    placeholder="new password"
                    // className="inputStyle"
                    name="newPassword"
                    value={newPassword}
                    onChange={formik.handleChange}
                    prefix={<Icon type="mail" style={{ color: 'white', fontWeight: 'bold', textIndent: '10px', fontSize: '15px' }} />}
                  />
                {formik.errors.newPassword ? <div>{formik.errors.newPassword}</div> : null}
                </Col>
                <br /><br />
                <Col span={24}>
                  <Input
                    type="password"
                    placeholder="Conform password"
                    // className="inputStyle"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={formik.handleChange}
                    prefix={<Icon type="mail" style={{ color: 'white', fontWeight: 'bold', textIndent: '10px', fontSize: '15px' }} />}
                  />
                {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
                </Col>
                <Col span={22}>
                  <Button onClick={formik.handleSubmit} className="handelButtonRegisterStyle">
                    Reset password
                  </Button>
                </Col>
              </Form>
            </Row>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
const mapDispatchToProps = (Dispatch) => ({
  newPassword: (state, props) => Dispatch(resetpassword(state, props))
});
const mapStateToProps = state => ({
  UserState: state.userReducer
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResetPassword));
