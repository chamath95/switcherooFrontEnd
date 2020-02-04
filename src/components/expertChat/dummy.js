export default [
  {
    message:
      "Hello 👋🏻, we now need to talk about potential life events and how these affect the mortgage recommendation we will give you.",
    time: "2020-02-04T20:09:11.772Z",
    status: "message",
    dropdown: null
  },
  {
    message:
      "It is important that we both consider the impact of your mortage choice on any future finanical plans you may be considering (or need to consider!).",
    time: "2020-02-04T20:09:11.901Z",
    status: "message",
    questions: [
      "Hello 👋🏻, we now need to talk about potential life events and how these affect the mortgage recommendation we will give you.",
      "It is important that we both consider the impact of your mortage choice on any future finanical plans you may be considering (or need to consider!).",
      "There are some choices we need to make around the type of mortgage most suited to you. Some mortgage are fixed in price over a period of years, this offers the customer certainty on the cost of their mortgage payment.",
      "Variable rate mortgages can increase or decrease in price but provide more flexibility on repayment should you wish to move mortgage or pay early.",
      "Ready to start?"
    ],
    parent: null,
    response: ["Yes, lets go!"],
    child: ["5e386d4b0537e92af14c06ca"],
    dropdown: null,
    _id: "5e386cf180ab6e2ad3b803d1",
    createdAt: "2020-02-03T18:56:49.360Z",
    updatedAt: "2020-02-03T18:58:19.759Z",
    __v: 0
  },
  {
    message:
      "There are some choices we need to make around the type of mortgage most suited to you. Some mortgage are fixed in price over a period of years, this offers the customer certainty on the cost of their mortgage payment.",
    time: "2020-02-04T20:09:12.006Z",
    status: "message",
    parent: null,
    dropdown: null,
    _id: "5e386cf180ab6e2ad3b803d1",
    createdAt: "2020-02-03T18:56:49.360Z",
    updatedAt: "2020-02-03T18:58:19.759Z",
    __v: 0
  },
  {
    message:
      "Variable rate mortgages can increase or decrease in price but provide more flexibility on repayment should you wish to move mortgage or pay early.",
    time: "2020-02-04T20:09:12.107Z",
    status: "message",
    parent: null,
    dropdown: null,
    _id: "5e386cf180ab6e2ad3b803d1",
    createdAt: "2020-02-03T18:56:49.360Z",
    updatedAt: "2020-02-03T18:58:19.759Z",
    __v: 0
  },
  {
    message: "Ready to start?",
    time: "2020-02-04T20:09:12.212Z",
    status: "message",
    parent: null,
    dropdown: null,
    _id: "5e386cf180ab6e2ad3b803d1",
    createdAt: "2020-02-03T18:56:49.360Z",
    updatedAt: "2020-02-03T18:58:19.759Z",
    __v: 0
  },
  {
    message: "Yes, lets go!",
    time: "2020-02-04T20:09:13.136Z",
    status: "response",
    possibleResponse: [
      {
        _id: "5e386cf180ab6e2ad3b803d1",
        response: "Yes, lets go!",
        dropdown: null
      }
    ],
    dropdown: null
  },
  {
    message:
      "Which is more important to you with respect to your mortgage payment: certainty on cost over time or best rate possible for the next 12-36 months?",
    time: "2020-02-04T20:09:13.596Z",
    status: "message",
    dropdown: null
  },
  {
    message: "Certainty",
    time: "2020-02-04T20:09:14.454Z",
    status: "response",
    possibleResponse: [
      {
        _id: "5e386d4b0537e92af14c06ca",
        response: "Certainty",
        dropdown: null
      },
      { _id: "5e386d4b0537e92af14c06ca", response: "Best rate", dropdown: null }
    ],
    dropdown: null
  },
  {
    message:
      "Are you planning on moving house over the next few years (remember if you fix your rate there will be a breakage fee to move house if its during the fixed period) ?",
    time: "2020-02-04T20:09:14.855Z",
    status: "message",
    dropdown: null
  },
  {
    message: "Yes",
    time: "2020-02-04T20:09:15.512Z",
    status: "response",
    possibleResponse: [
      { _id: "5e386daa37d6f42b21e5f7f0", response: "Yes", dropdown: null },
      { _id: "5e386daa37d6f42b21e5f7f0", response: "No", dropdown: null }
    ],
    dropdown: null
  },
  {
    message:
      "Are you planning on having a child or more children if you already have them (kids are great but are expensive so you need to consider their costs)?",
    time: "2020-02-04T20:09:16.046Z",
    status: "message",
    dropdown: null
  },
  {
    message:
      "As a guide the banks typically budget around €3,500 for each child per year?",
    time: "2020-02-04T20:09:16.154Z",
    status: "message",
    questions: [
      "Are you planning on having a child or more children if you already have them (kids are great but are expensive so you need to consider their costs)?",
      "As a guide the banks typically budget around €3,500 for each child per year?"
    ],
    parent: "5e386daa37d6f42b21e5f7f0",
    response: ["Yes - we are broody 👶🏼", "No, all done here thanks!"],
    child: ["5e38705637d6f42b21e5f7f4"],
    dropdown: null,
    _id: "5e38701e37d6f42b21e5f7f3",
    createdAt: "2020-02-03T19:10:22.678Z",
    updatedAt: "2020-02-03T19:11:18.284Z",
    __v: 0
  },
  {
    message: "Yes - we are broody 👶🏼",
    time: "2020-02-04T20:09:16.571Z",
    status: "response",
    possibleResponse: [
      {
        _id: "5e38701e37d6f42b21e5f7f3",
        response: "Yes - we are broody 👶🏼",
        dropdown: null
      },
      {
        _id: "5e38701e37d6f42b21e5f7f3",
        response: "No, all done here thanks!",
        dropdown: null
      }
    ],
    dropdown: null
  },
  {
    message:
      "Do you expect anyone other than your spouse or children to become financially dependent on you in the next few years?",
    time: "2020-02-04T20:09:17.089Z",
    status: "message",
    dropdown: null
  },
  {
    message: "Yes",
    time: "2020-02-04T20:09:18.236Z",
    status: "response",
    possibleResponse: [
      { _id: "5e38705637d6f42b21e5f7f4", response: "Yes", dropdown: null },
      { _id: "5e38705637d6f42b21e5f7f4", response: "No 🤞🏼", dropdown: null }
    ],
    dropdown: null
  },
  {
    message:
      "Are you planning any significant expenditure over the next few years i.e wedding, extension, new car?",
    time: "2020-02-04T20:09:18.709Z",
    status: "message",
    dropdown: null
  },
  {
    message: "No 😱",
    time: "2020-02-04T20:09:19.957Z",
    status: "response",
    possibleResponse: [
      { _id: "5e38708737d6f42b21e5f7f5", response: "Yes", dropdown: null },
      { _id: "5e38708737d6f42b21e5f7f5", response: "No 😱", dropdown: null }
    ],
    dropdown: null
  },
  {
    message:
      "Do you want flexibity in prepaying back your mortgage? i.e. would you want to pay back over 10% of your mortgage on an annual basis?",
    time: "2020-02-04T20:09:20.559Z",
    status: "message",
    dropdown: null
  },
  {
    message: "I wish...but unlikely!",
    time: "2020-02-04T20:09:21.532Z",
    status: "response",
    possibleResponse: [
      {
        _id: "5e3870c137d6f42b21e5f7f6",
        response: "Yes I would",
        dropdown: null
      },
      {
        _id: "5e3870c137d6f42b21e5f7f6",
        response: "I wish...but unlikely!",
        dropdown: null
      }
    ],
    dropdown: null
  },
  {
    message:
      "Are you intereted in Cash Back offers which provide you a cash sum on completion?",
    time: "2020-02-04T20:09:21.982Z",
    status: "message",
    dropdown: null
  },
  {
    message:
      "This could be used for furnishings, a new kitchen or what ever you choose. Remember though that this cash back offer will be embedded in the pricing (its not really free money!)",
    time: "2020-02-04T20:09:22.124Z",
    status: "message",
    questions: [
      "Are you intereted in Cash Back offers which provide you a cash sum on completion?",
      "This could be used for furnishings, a new kitchen or what ever you choose. Remember though that this cash back offer will be embedded in the pricing (its not really free money!)"
    ],
    parent: "5e3870c137d6f42b21e5f7f6",
    response: ["Show me the money 💰", "Not for me"],
    child: ["5e3873d737d6f42b21e5f7f8", "5e38744437d6f42b21e5f7f9"],
    dropdown: null,
    _id: "5e38721537d6f42b21e5f7f7",
    createdAt: "2020-02-03T19:18:45.808Z",
    updatedAt: "2020-02-03T19:28:04.271Z",
    __v: 0
  },
  {
    message: "Show me the money 💰",
    time: "2020-02-04T20:09:22.988Z",
    status: "response",
    possibleResponse: [
      {
        _id: "5e38721537d6f42b21e5f7f7",
        response: "Show me the money 💰",
        dropdown: null
      },
      {
        _id: "5e38721537d6f42b21e5f7f7",
        response: "Not for me",
        dropdown: null
      }
    ],
    dropdown: null
  },
  {
    message:
      "Having considered these questions how would you rate your appettite for cetrainty versus flexibility (1= max certainty please, 5 equals = max flexibility please)",
    time: "2020-02-04T20:09:23.433Z",
    status: "message",
    dropdown: 10
  },
  {
    message: "Show me the money 💰",
    time: "2020-02-04T20:11:49.272Z",
    status: "response",
    dropdown: null
  },
  {
    message:
      "Having considered these questions how would you rate your appettite for cetrainty versus flexibility (1= max certainty please, 5 equals = max flexibility please)",
    time: "2020-02-04T20:11:49.625Z",
    status: "message",
    dropdown: 10
  },
  {
    message: 9,
    time: "2020-02-04T20:11:51.341Z",
    status: "response",
    possibleResponse: [
      { _id: "5e3873d737d6f42b21e5f7f8", response: "", dropdown: 10 }
    ]
  },
  {
    message:
      "Perfect, thank you for this. Let's arrange a call/meeting at a time that suits you so that we can run through your requirements. You can do this by using our booking system on the right of this page. 👍🏼",
    time: "2020-02-04T20:11:51.936Z",
    status: "message",
    dropdown: null
  }
];
