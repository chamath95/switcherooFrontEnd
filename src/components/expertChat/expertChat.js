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
import Chatbubble, { purge } from "./ChatBubble";
import api from "../../redux/api";
import { connect } from "react-redux";
import dummy from "./dummy";
const { Panel } = Collapse;

const { Header, Content, Footer } = Layout;
const TIME_INCREMENT = 3000;
const EXPERT_WAIT_TIME = 10;
const PAUSE_WAITING = 2000;
const TYPING_WAITING = 1000;
const TIME_INCREMENT2 = 4000;
const Bubble = styled.div`
  background: rgb(251, 149, 0);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin: 0px 5px;
  cursor: pointer;
  min-width: 45%;
  align-items: center;
  display: flex;
  img {
    width: 35px;
    margin-left: 0.5rem;
  }
`;

class ExpertChat extends Component {
  constructor(props) {
    super(props);
    this.setLoading = this.setLoading.bind(this);
    this.setResponse = this.setResponse.bind(this);
    this.setChat = this.setChat.bind(this);
    this.clearResponse = this.clearResponse.bind(this);
    this.getResponse = this.getResponse.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.setHistory = this.setHistory.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  // const [state, setState] = useState();
  // const [isLoading, setLoading] = useState(true);
  state = {
    isLoading: false,
    possibleResponse: [],
    // chats: dummy,
    chats: []
  };
  scrollToBottom = () => {
    this.messagesEnd && this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };
  componentDidMount() {
    alert("Hey")
    const height = document.getElementById("search-bar").clientHeight;
    this.setState({ height, me: 'som' });
  }
  // const [chats, setChat] = useState([]);
  setLoading = async isLoading => {
    // if (isLoading) {
    //   setTimeout(() => {
    //     this.setState({ isLoading: true });
    //   }, TYPING_WAITING);
    //   setTimeout(() => {
    //     this.setState({ isLoading: false });
    //   }, TYPING_WAITING + 1500);
    // } else {
    //   this.setState({ isLoading });
    // }
    this.setState({ isLoading });

    await this.scrollToBottom();
  };
  setResponse = async possibleResponse => {
    if (!possibleResponse) return;
    this.setState({ possibleResponse });
    await this.scrollToBottom();
  };
  handleMenuClick = () => {};
  clearResponse = _ => {
    this.setState({ possibleResponse: [] });
  };
  setChat = async chats => {
    const { state } = this;
    this.setState({ chats });
    await this.scrollToBottom();
  };
  setHistory = async (newChat, possibleResponse) => {
    const dispatch = this.props.dispatch;
    const token = localStorage.getItem("tokenas");

    await api.post(
      "/api/expertChat/setHistory",
      { newChat, possibleResponse },
      token,
      dispatch,
      (err, res) => {
        if (!err) {
          // const chat = res;
          // let waitTime = 0;
          // this.scrollToBottom();
          // this.getResponse(chat);
        }
        // console.log(res, err);
      }
    );
    await this.scrollToBottom();
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
        async (err, res) => {
          if (!err) {
            const chat = res.chat;
            // this.getResponse(chat);

            if (res.history) {
              const { possibleResponse, history } = res;
              console.log({ possibleResponse });
              setChat(JSON.parse(history));
              setTimeout(() => {
                this.setLoading(false);
              }, TYPING_WAITING);
              await setResponse(JSON.parse(possibleResponse));
              return;
            } else {
              let waitTime = 0;
              this.getResponse(chat, true);
            }
          }
          // console.log(res, err);
        }
      );
      // setLoading(false);
    })();
  }
  render() {
    const { dispatch } = this.props;
    const { isLoading, chats } = this.state;
    const setResponse = this.setResponse;
    return (
      <>
        <Col style={{ height: "calc(100vh - 100px)" }} lg={18}>
          <div className="chat-section" style={{ height: "100%" }}>
            <div
              // className="chat-parent"
              style={{
                display: "flex",
                flex: 1,
                height: "100%",
                // maxHeight: "90vh",
                minHeight: "90vh",
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
                {isLoading && <strong>expert typing...</strong>}
              </div>
              <div
                className="actions-part"
                style={{
                  justifySelf: "flex-end",
                  height: "auto",
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
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    minWidth: "50%"
                  }}
                >
                  {this.state.possibleResponse.map(
                    ({ _id, response, dropdown }) => {
                      if (dropdown) {
                        const menu = (
                          <Menu
                            style={{
                              background: "#fb9500",
                              // border: "none",
                              color: "white",
                              fontSize: "20px"
                            }}
                            onClick={async ({
                              item: {
                                props: { children }
                              }
                            }) => {
                              const { setChat, setLoading, setResponse } = this;
                              const possibleResponse = this.state
                                .possibleResponse;
                              let newChat = [
                                ...this.state.chats,
                                {
                                  message: children,
                                  time: new Date().toJSON(),
                                  status: "response",
                                  // ...chat,
                                  possibleResponse
                                }
                              ];

                              this.setChat(newChat);
                              // setTimeout(async () => {
                              // this.setLoading(true);
                              // }, TYPING_WAITING);

                              await this.scrollToBottom();
                              this.clearResponse();
                              const token = localStorage.getItem("tokenas");
                              this.scrollToBottom();
                              setTimeout(async () => {
                                api.post(
                                  "/api/expertChat/getResponse",
                                  { _id, newChat, possibleResponse },
                                  token,
                                  dispatch,
                                  async (err, res) => {
                                    if (!err) {
                                      const chat = res;
                                      let waitTime = 0;
                                      this.scrollToBottom();
                                      await this.getResponse(chat);
                                    }
                                    // console.log(res, err);
                                  }
                                );
                              }, EXPERT_WAIT_TIME);
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
                                style={{
                                  background: "#fb9500",
                                  border: "none",
                                  color: "white",
                                  fontSize: "20px"
                                }}
                              >
                                Choose... <Icon type="up" />
                              </Button>
                            </Dropdown>
                          </div>
                        );
                      }
                      return (
                        <Bubble
                          key={`${_id}${Math.random() * 100000}`}
                          // style={{
                          //   background: "#FB9500",
                          //   padding: "5px 10px",
                          //   borderRadius: "5px",
                          //   fontSize: "18px",
                          //   color: "white",
                          //   fontWeight: "bold",
                          //   margin: "0px 5px",
                          //   cursor: "pointer",
                          //   minWidth: "45%",
                          //   alignItems: "center",
                          //   display: "flex"
                          //   // maxHeight: "40px"
                          // }}
                          onClick={async () => {
                            const { setChat, setLoading, setResponse } = this;
                            const possibleResponse = this.state
                              .possibleResponse;
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
                            // this.setLoading(true);
                            const token = localStorage.getItem("tokenas");
                            this.scrollToBottom();
                            setTimeout(async () => {
                              await api.post(
                                "/api/expertChat/getResponse",
                                { _id, newChat, possibleResponse },
                                token,
                                dispatch,
                                async (err, res) => {
                                  if (!err) {
                                    const chat = res;
                                    let waitTime = 0;
                                    this.scrollToBottom();
                                    await this.getResponse(chat);
                                  }
                                  // console.log(res, err);
                                }
                              );
                            }, EXPERT_WAIT_TIME);
                          }}
                        >
                          <span
                            dangerouslySetInnerHTML={{
                              __html: purge(response)
                            }}
                          ></span>
                        </Bubble>
                      );
                    }
                  )}
                </div>
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
  getResponse = (chat, root) => {
    let waitTime = 4000;
    let expertPause = root ? 4000 : 3000;
    let expertWait = root ? 5000 : 4000;

    const { setChat, setLoading, setResponse } = this;
    if (root) {
      let waitTime2 = 4000;

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
        // setChat(newChat);
        // console.log({ dropdown: chat.dropdown });

        let possibleResponse =
          chat.response &&
          chat.response.map(response => ({
            _id: chat._id,
            response,
            dropdown: chat.dropdown
          }));
        const fistReply = ignore => {
          setTimeout(() => {
            this.setLoading(true);
          }, 1000);
          setTimeout(() => {
            this.setLoading(false);
            this.setChat(newChat);
            if (!ignore) {
              this.setResponse(possibleResponse);
              this.setHistory(newChat, possibleResponse);
            }
          }, 4000);
        };
        if (questions.length <= 1) {
          fistReply();
        }

        questions.forEach((question, i) => {
          if (i == 0) {
            fistReply(true);
            return;
          }
          setLoading(true);
          waitTime2 = 4000 * (i + 1);
          expertPause = 4000 * (i + 1) - 3000;
          expertWait = 4000 * (i + 1) - 1000;
          console.log({ expertPause, expertWait, waitTime2 });
          this.scrollToBottom();
          setTimeout(() => {
            // this.setLoading(true);
            this.setLoading(true);
          }, expertPause);
          setTimeout(() => {
            // this.setLoading(true);
            this.setLoading(false);
          }, expertWait);

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
          }, waitTime2);
        });
        return;
      }
      return;
    }
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

      let possibleResponse =
        chat.response &&
        chat.response.map(response => ({
          _id: chat._id,
          response,
          dropdown: chat.dropdown
        }));
      const fistReply = ignore => {
        setTimeout(() => {
          this.setLoading(true);
        }, TYPING_WAITING);
        setTimeout(() => {
          this.setLoading(false);
          this.setChat(newChat);
          if (!ignore) {
            this.setResponse(possibleResponse);
            this.setHistory(newChat, possibleResponse);
          }
        }, TYPING_WAITING + PAUSE_WAITING);
      };
      if (questions.length <= 1) {
        // this.setLoading(false);
        fistReply();
      }
      questions.forEach((question, i) => {
        if (i == 0) {
          fistReply(true);
          return;
        }
        // setLoading(true);
        waitTime = waitTime + TIME_INCREMENT;
        expertPause = expertPause + 1000;
        expertWait = expertWait + 2000;
        // alert(expertPause);
        this.scrollToBottom();
        setTimeout(() => {
          // this.setLoading(true);
          this.setLoading(true);
        }, expertPause);
        setTimeout(() => {
          // this.setLoading(true);
          this.setLoading(false);
        }, expertWait);
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
          this.setLoading(false);
          this.scrollToBottom();

          if (questions.length - 1 == i) {
            // setLoading(false);
            this.setResponse(possibleResponse);
            this.setHistory(newChat, possibleResponse);
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
