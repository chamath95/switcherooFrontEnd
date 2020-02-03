import React, { useState, useEffect, Component } from "react";
import {
  Row,
  Col,
  Collapse,
  Layout,
  Icon,
  message,
  Dropdown,
  Menu,
  Button
} from "antd";
import "./chat.css";
import "./bubble.css";
import ChatBox from "./chatBox";
import Rightbar from "../home/rightbar/rightbar";
import rightIcon from "../../assets/Icon ionic-md-arrow-round-forward.png";
import CutLogo from "../../assets/cut_log.png";
import moment from "moment";
import styled from "styled-components";
import Chatbubble from "./ChatBubble";
import api from "../../redux/api";
import { connect } from "react-redux";
const { Panel } = Collapse;

const { Header, Content, Footer } = Layout;
const TIME_INCREMENT = 2000;

class ExpertChat extends Component {
  constructor(props) {
    super(props);
    this.setLoading = this.setLoading.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.setChat = this.setChat.bind(this);
    this.clearResponse = this.clearResponse.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  // const [state, setState] = useState();
  // const [isLoading, setLoading] = useState(true);
  state = {
    isLoading: true,
    possibleResponse: [],
    chats: []
  };
  scrollToBottom = () => {
    this.messagesEnd && this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };
  componentDidUpdate() {}
  // const [chats, setChat] = useState([]);
  setLoading = isLoading => {
    this.setState({ isLoading });
  };
  setResponse = possibleResponse => {
    if (!possibleResponse) return;
    this.setState({ possibleResponse });
  };
  handleMenuClick = () => {};
  clearResponse = _ => {
    this.setState({ possibleResponse: [] });
  };
  setChat = chats => {
    const { state } = this;
    this.setState({ chats });
    this.scrollToBottom();
  };
  componentDidMount() {
    const { dispatch } = this.props;
    const { chats, possibleResponse } = this.state;
    const { setChat, setLoading, setResponse } = this;
    (async () => {
      const token = localStorage.getItem("tokenas");
      const root = await api.get(
        "/api/expertChat/root",
        null,
        token,
        dispatch,
        (err, res) => {
          if (!err) {
            const chat = res.chat;
            let waitTime = 0;
            this.getResponse(chat);
          }
          // console.log(res, err);
        }
      );
      setLoading(false);
    })();
  }
  render() {
    const { dispatch } = this.props;
    const { isLoading, chats } = this.state;
    const setResponse = this.setResponse;

    return (
      <>
        <Col lg={18}>
          <div className="chat-section">
            <div
              // className="chat-parent"
              style={{
                display: "flex",
                flex: 1,
                height: "auto",
                maxHeight: "80vh",
                minHeight: "80vh",
                flexDirection: "column"
              }}
            >
              <div
                className="chat_header"
                style={{
                  background: "#707070",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "10px 30px",
                  borderTopRightRadius: "20px",
                  borderTopLeftRadius: "20px"
                }}
              >
                <img className="img" src={CutLogo} />
                <span
                  style={{
                    color: "#fb9500",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginLeft: "20px"
                  }}
                >
                  Swicheroo Expert
                </span>
              </div>

              <div
                className="chat-container"
                style={{
                  display: "flex",
                  flex: 1,
                  height: "90%",
                  flexDirection: "column",
                  padding: "10px",
                  position: "relative",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  width: "100%",
                  height: "100%",
                  transform: "translateZ(0)"
                }}
              >
                {/* <Chatbubble
                id={'5e38721537d6f42b21e5f7f7'}
                 /> */}
                {chats.map(
                  (
                    { status, message, time, possibleResponse, dropdown },
                    i
                  ) => {
                    return (
                      <Chatbubble
                        key={i}
                        message={status == "message"}
                        setResponse={this.setResponse}
                        {...{ possibleResponse, time, dropdown }}
                      >
                        {message}
                      </Chatbubble>
                    );
                  }
                )}
                <div
                  ref={el => {
                    this.messagesEnd = el;
                  }}
                ></div>
                {isLoading && <strong>Expert typing...</strong>}
              </div>
              <div
                className="actions-part"
                style={{
                  justifySelf: "flex-end",
                  height: "50px",
                  borderTop: "1px solid #707070",
                  display: "flex",
                  alignItems: "center",
                  padding: "20px",
                  //
                  display: "flex"
                }}
              >
                <span>
                  To send reply choose from the selected pop ups{" "}
                  {/* <Icon type="arrow-right" /> */}
                  <img className="img" src={rightIcon} />
                </span>
                {this.state.possibleResponse.map(
                  ({ _id, response, dropdown }) => {
                    if (dropdown) {
                      const menu = (
                        <Menu
                          onClick={async ({
                            item: {
                              props: { children }
                            }
                          }) => {
                            const { setChat, setLoading, setResponse } = this;
                            let newChat = [
                              ...this.state.chats,
                              {
                                message: children,
                                time: new Date().toJSON(),
                                status: "response",
                                // ...chat,
                                possibleResponse: this.state.possibleResponse
                              }
                            ];

                            this.setChat(newChat);
                            await this.scrollToBottom();
                            this.clearResponse();
                            this.setLoading(true);
                            const token = localStorage.getItem("tokenas");
                            this.scrollToBottom();

                            await api.post(
                              "/api/expertChat/getResponse",
                              { _id },
                              token,
                              dispatch,
                              (err, res) => {
                                if (!err) {
                                  const chat = res;
                                  let waitTime = 0;
                                  this.scrollToBottom();
                                  this.getResponse(chat);
                                }
                                console.log(res, err);
                              }
                            );
                          }}
                        >
                          {Array.from(new Array(dropdown)).map((n, i) => (
                            <Menu.Item key={Math.random() * 19302930}>
                              {i + 1}
                            </Menu.Item>
                          ))}
                        </Menu>
                      );
                      return (
                        <div
                          key={`${_id}${Math.random() * 100000}`}
                          style={{
                            background: "#FB9500",
                            padding: "5px 10px",
                            borderRadius: "5px",
                            fontSize: "18px",
                            color: "white",
                            fontWeight: "bold",
                            margin: "0px 5px",
                            cursor: "pointer",
                            minWidth: "100px"
                          }}
                        >
                          <Dropdown placement={"topCenter"} overlay={menu}>
                            <Button
                              style={{ background: "#fb9500", border: "none" }}
                            >
                              Choose... <Icon type="up" />
                            </Button>
                          </Dropdown>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={`${_id}${Math.random() * 100000}`}
                        style={{
                          background: "#FB9500",
                          padding: "5px 10px",
                          borderRadius: "5px",
                          fontSize: "18px",
                          color: "white",
                          fontWeight: "bold",
                          margin: "0px 5px",
                          cursor: "pointer",
                          minWidth: "100px"
                        }}
                        onClick={async () => {
                          const { setChat, setLoading, setResponse } = this;
                          let newChat = [
                            ...this.state.chats,
                            {
                              message: response,
                              time: new Date().toJSON(),
                              status: "response",
                              // ...chat,
                              possibleResponse: this.state.possibleResponse,
                              dropdown
                            }
                          ];

                          this.setChat(newChat);
                          await this.scrollToBottom();
                          this.clearResponse();
                          this.setLoading(true);
                          const token = localStorage.getItem("tokenas");
                          this.scrollToBottom();

                          await api.post(
                            "/api/expertChat/getResponse",
                            { _id },
                            token,
                            dispatch,
                            (err, res) => {
                              if (!err) {
                                const chat = res;
                                let waitTime = 0;
                                this.scrollToBottom();
                                this.getResponse(chat);
                              }
                              console.log(res, err);
                            }
                          );
                        }}
                      >
                        {response}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" lg={6}>
          <div className="gutter-box rightbar-container">
            <Rightbar />
          </div>
        </Col>
      </>
    );
  }
  getResponse = chat => {
    let waitTime = 0;

    const { setChat, setLoading, setResponse } = this;
    this.scrollToBottom();
    if (chat) {
      const questions = chat.questions;
      let newChat = [
        ...this.state.chats,
        {
          message: questions[0],
          time: new Date().toJSON(),
          status: "message",
          dropdown: chat.dropdown
          // ...chat
        }
      ];
      setChat(newChat);
      // console.log({ dropdown: chat.dropdown });

      let possibleResponse =
        chat.response &&
        chat.response.map(response => ({
          _id: chat._id,
          response,
          dropdown: chat.dropdown
        }));
      if (questions.length <= 1) {
        setLoading(false);
        this.setResponse(possibleResponse);
      }

      questions.forEach((question, i) => {
        if (i == 0) return;
        setLoading(true);
        waitTime = waitTime + TIME_INCREMENT;
        this.scrollToBottom();

        setTimeout(() => {
          let newChat = [
            ...this.state.chats,
            {
              message: question,
              time: new Date().toJSON(),
              status: "message",
              ...chat
            }
          ];
          setChat(newChat);
          this.scrollToBottom();

          if (questions.length - 1 == i) {
            setLoading(false);
            this.setResponse(possibleResponse);
          }
        }, waitTime);
      });
    }
  };
}

const mapDispatchToProps = dispatch => ({
  dispatch: state => dispatch(state)
});

const mapStateToProps = state => ({
  UserState: state.userReducer
});

export default connect(null, mapDispatchToProps)(ExpertChat);
