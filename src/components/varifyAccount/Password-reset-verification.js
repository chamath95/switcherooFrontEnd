import React, { useState } from "react";
import "antd/dist/antd.css";
import "./style.css";
import { Link ,useLocation,useHistory} from "react-router-dom";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
import logo from "../../assets/Icon-Prototype-Screens (3)/icons/logo.png";
import {connect} from "react-redux";
import {recover} from "../../redux/Thunk/authThunk/index"


const PasswordResetVerificaition=(props)=> {
  const [formData, setFormData] = useState({
    disabled:false,
    disabledText:"Try Again In ",
    retryTime:60
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.recoverPassword(props.UserState.resetPasswordEmail,null)
    setFormData({...formData,disabled:true})
    const counter=setInterval(()=>{
      if(formData.retryTime==0)
      {
        setFormData({...formData,disabled:false,retryTime:60});
        clearInterval(counter)
      }
      else
      setFormData({...formData,retryTime:formData.retryTime--,disabled:true})
    },1000)
  };
const {UserState}=props;
let history = useHistory();
let location = useLocation();
let { from } = location.state || { from: { pathname: "/" } };
console.log("pag",formData.retryTime,formData.disabled)
  return ( <>
      <div className="page-container login page">
        <div className="Login-Container">
          <Row type="flex" justify="center">
            <Col>
              <Row className="innnerContainer">
                <Col span={24} className="logoStyle">
                  <img className="img" src={logo} />
                </Col>

                <Col span={24}>
                  <h2 id="account-success">
                    Password Reset Email Sended
                    <br />
                    Successfully{" "}
                  </h2>
                </Col>
                <br />
                <Col span={24}>
                  <div className="">
                    <Row type="flex" justify="center">
                      <Form >
                        <Col span={24}>
                          <p>
                            Please check your email
                            <br />
                            {UserState.resetPasswordEmail}
                            <br />
                            to reset the password
                          </p>
                          <br />
                          <a id="link-not-send">Not received any email?</a>
                        </Col>
                        <br />
                        <br />
                        <Col span={24}>
                          <Button
                            onClick={handleSubmit}
                            id="handelButtonStyle"
                            disabled={
                              formData.disabled
                            }
                         style={formData.disabled&&{height:"50px"}||{}}
                          >
                            Resend
                            <br/>
                            {
                              formData.disabled&&
                              `(${formData.disabledText}${formData.retryTime})`
                            }
                          </Button>
                        </Col>{" "}
                     
                      </Form>
                    </Row>

                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    
    </>
  );
}

const resetPasswordVerification = Form.create({ name: "register" })(
  PasswordResetVerificaition
);
const mapDispatchToProps = (Dispatch,props) => ({
  recoverPassword: state => Dispatch(recover(state))
});
const mapStateToProps = state => ({
  UserState: state.userReducer
});
export default connect(mapStateToProps,mapDispatchToProps)(resetPasswordVerification);