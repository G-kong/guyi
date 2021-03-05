// pages/film/payment/payment.js
const store = getApp().globalData;
const film = store.ApiServe().film;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schedule: {
      cinemaId: 426,
      discountPrice: 44.1,
      duration: 130,
      filmId: 2896,
      filmName: "刺杀小说家",
      hallName: "9号MX4D厅-儿童观影需购票（请出示闽政通健康码并戴口罩）",
      language: "中文",
      netBigPrice: 49,
      netPrice: 4900,
      planType: "3D",
      showEndTime: "00:45",
      showId: "NDI2I0BpbWFubUAjMjg5NiNAaW1hbm1AIzE2MTQ3ODIxMDAjQGltYW5tQCMxNCNAaW1hbm1AIzU=",
      showTime: "22:35",
      showVersionType: "中文 3D",
      stopSellTime: "2021-03-03 21:35:00"
    },
    filmSeat: {
      "maxCol": 19,
      "maxRow": 12,
      "seatList": [
        [
          {
            "columnNo": "6",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjFAX0A1M0BfQDBAX0Ax5o6SMeW6pw==",
            "seatNo": "1排1座",
            "status": "N"
          },
          {
            "columnNo": "7",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjJAX0A1M0BfQDBAX0Ax5o6SMuW6pw==",
            "seatNo": "1排2座",
            "status": "N"
          },
          {
            "columnNo": "8",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjNAX0A1M0BfQDBAX0Ax5o6SM+W6pw==",
            "seatNo": "1排3座",
            "status": "N"
          },
          {
            "columnNo": "9",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjRAX0A1M0BfQDBAX0Ax5o6SNOW6pw==",
            "seatNo": "1排4座",
            "status": "N"
          },
          {
            "columnNo": "11",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjVAX0A1M0BfQDBAX0Ax5o6SNeW6pw==",
            "seatNo": "1排5座",
            "status": "N"
          },
          {
            "columnNo": "12",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjZAX0A1M0BfQDBAX0Ax5o6SNuW6pw==",
            "seatNo": "1排6座",
            "status": "N"
          },
          {
            "columnNo": "13",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjdAX0A1M0BfQDBAX0Ax5o6SN+W6pw==",
            "seatNo": "1排7座",
            "status": "N"
          },
          {
            "columnNo": "14",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjhAX0A1M0BfQDBAX0Ax5o6SOOW6pw==",
            "seatNo": "1排8座",
            "status": "N"
          },
          {
            "columnNo": "16",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjlAX0A1M0BfQDBAX0Ax5o6SOeW6pw==",
            "seatNo": "1排9座",
            "status": "N"
          },
          {
            "columnNo": "17",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjEwQF9ANTNAX0AwQF9AMeaOkjEw5bqn",
            "seatNo": "1排10座",
            "status": "N"
          },
          {
            "columnNo": "18",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjExQF9ANTNAX0AwQF9AMeaOkjEx5bqn",
            "seatNo": "1排11座",
            "status": "N"
          },
          {
            "columnNo": "19",
            "lovestatus": 0,
            "rowNo": "5",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AxOjEyQF9ANTNAX0AwQF9AMeaOkjEy5bqn",
            "seatNo": "1排12座",
            "status": "N"
          }
      ],
      [
        {
            "columnNo": "6",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjFAX0A1M0BfQDBAX0Ay5o6SMeW6pw==",
            "seatNo": "2排1座",
            "status": "N"
        },
        {
            "columnNo": "7",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjJAX0A1M0BfQDBAX0Ay5o6SMuW6pw==",
            "seatNo": "2排2座",
            "status": "N"
        },
        {
            "columnNo": "8",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjNAX0A1M0BfQDBAX0Ay5o6SM+W6pw==",
            "seatNo": "2排3座",
            "status": "N"
        },
        {
            "columnNo": "9",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjRAX0A1M0BfQDBAX0Ay5o6SNOW6pw==",
            "seatNo": "2排4座",
            "status": "N"
        },
        {
            "columnNo": "11",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjVAX0A1M0BfQDBAX0Ay5o6SNeW6pw==",
            "seatNo": "2排5座",
            "status": "N"
        },
        {
            "columnNo": "12",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjZAX0A1M0BfQDBAX0Ay5o6SNuW6pw==",
            "seatNo": "2排6座",
            "status": "N"
        },
        {
            "columnNo": "13",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjdAX0A1M0BfQDBAX0Ay5o6SN+W6pw==",
            "seatNo": "2排7座",
            "status": "N"
        },
        {
            "columnNo": "14",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjhAX0A1M0BfQDBAX0Ay5o6SOOW6pw==",
            "seatNo": "2排8座",
            "status": "N"
        },
        {
            "columnNo": "16",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjlAX0A1M0BfQDBAX0Ay5o6SOeW6pw==",
            "seatNo": "2排9座",
            "status": "N"
        },
        {
            "columnNo": "17",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjEwQF9ANTNAX0AwQF9AMuaOkjEw5bqn",
            "seatNo": "2排10座",
            "status": "N"
        },
        {
            "columnNo": "18",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjExQF9ANTNAX0AwQF9AMuaOkjEx5bqn",
            "seatNo": "2排11座",
            "status": "N"
        },
        {
            "columnNo": "19",
            "lovestatus": 0,
            "rowNo": "6",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AyOjEyQF9ANTNAX0AwQF9AMuaOkjEy5bqn",
            "seatNo": "2排12座",
            "status": "N"
        }
      ],
      [
        {
            "columnNo": "6",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjFAX0A1M0BfQDBAX0Az5o6SMeW6pw==",
            "seatNo": "3排1座",
            "status": "N"
        },
        {
            "columnNo": "7",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjJAX0A1M0BfQDBAX0Az5o6SMuW6pw==",
            "seatNo": "3排2座",
            "status": "N"
        },
        {
            "columnNo": "8",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjNAX0A1M0BfQDBAX0Az5o6SM+W6pw==",
            "seatNo": "3排3座",
            "status": "N"
        },
        {
            "columnNo": "9",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjRAX0A1M0BfQDBAX0Az5o6SNOW6pw==",
            "seatNo": "3排4座",
            "status": "N"
        },
        {
            "columnNo": "11",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjVAX0A1M0BfQDBAX0Az5o6SNeW6pw==",
            "seatNo": "3排5座",
            "status": "N"
        },
        {
            "columnNo": "12",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjZAX0A1M0BfQDBAX0Az5o6SNuW6pw==",
            "seatNo": "3排6座",
            "status": "N"
        },
        {
            "columnNo": "13",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjdAX0A1M0BfQDBAX0Az5o6SN+W6pw==",
            "seatNo": "3排7座",
            "status": "N"
        },
        {
            "columnNo": "14",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjhAX0A1M0BfQDBAX0Az5o6SOOW6pw==",
            "seatNo": "3排8座",
            "status": "N"
        },
        {
            "columnNo": "16",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjlAX0A1M0BfQDBAX0Az5o6SOeW6pw==",
            "seatNo": "3排9座",
            "status": "N"
        },
        {
            "columnNo": "17",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjEwQF9ANTNAX0AwQF9AM+aOkjEw5bqn",
            "seatNo": "3排10座",
            "status": "N"
        },
        {
            "columnNo": "18",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjExQF9ANTNAX0AwQF9AM+aOkjEx5bqn",
            "seatNo": "3排11座",
            "status": "N"
        },
        {
            "columnNo": "19",
            "lovestatus": 0,
            "rowNo": "7",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0AzOjEyQF9ANTNAX0AwQF9AM+aOkjEy5bqn",
            "seatNo": "3排12座",
            "status": "N"
        }
      ],
      [
        {
            "columnNo": "6",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjFAX0A1M0BfQDBAX0A05o6SMeW6pw==",
            "seatNo": "4排1座",
            "status": "N"
        },
        {
            "columnNo": "7",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjJAX0A1M0BfQDBAX0A05o6SMuW6pw==",
            "seatNo": "4排2座",
            "status": "N"
        },
        {
            "columnNo": "8",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjNAX0A1M0BfQDBAX0A05o6SM+W6pw==",
            "seatNo": "4排3座",
            "status": "N"
        },
        {
            "columnNo": "9",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjRAX0A1M0BfQDBAX0A05o6SNOW6pw==",
            "seatNo": "4排4座",
            "status": "N"
        },
        {
            "columnNo": "11",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjVAX0A1M0BfQDBAX0A05o6SNeW6pw==",
            "seatNo": "4排5座",
            "status": "LK"
        },
        {
            "columnNo": "12",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjZAX0A1M0BfQDBAX0A05o6SNuW6pw==",
            "seatNo": "4排6座",
            "status": "LK"
        },
        {
            "columnNo": "13",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjdAX0A1M0BfQDBAX0A05o6SN+W6pw==",
            "seatNo": "4排7座",
            "status": "LK"
        },
        {
            "columnNo": "14",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjhAX0A1M0BfQDBAX0A05o6SOOW6pw==",
            "seatNo": "4排8座",
            "status": "LK"
        },
        {
            "columnNo": "16",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjlAX0A1M0BfQDBAX0A05o6SOeW6pw==",
            "seatNo": "4排9座",
            "status": "N"
        },
        {
            "columnNo": "17",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjEwQF9ANTNAX0AwQF9ANOaOkjEw5bqn",
            "seatNo": "4排10座",
            "status": "N"
        },
        {
            "columnNo": "18",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjExQF9ANTNAX0AwQF9ANOaOkjEx5bqn",
            "seatNo": "4排11座",
            "status": "N"
        },
        {
            "columnNo": "19",
            "lovestatus": 0,
            "rowNo": "8",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A0OjEyQF9ANTNAX0AwQF9ANOaOkjEy5bqn",
            "seatNo": "4排12座",
            "status": "N"
        }
      ],
      [
        {
            "columnNo": "6",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjFAX0A1M0BfQDBAX0A15o6SMeW6pw==",
            "seatNo": "5排1座",
            "status": "N"
        },
        {
            "columnNo": "7",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjJAX0A1M0BfQDBAX0A15o6SMuW6pw==",
            "seatNo": "5排2座",
            "status": "N"
        },
        {
            "columnNo": "8",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjNAX0A1M0BfQDBAX0A15o6SM+W6pw==",
            "seatNo": "5排3座",
            "status": "N"
        },
        {
            "columnNo": "9",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjRAX0A1M0BfQDBAX0A15o6SNOW6pw==",
            "seatNo": "5排4座",
            "status": "N"
        },
        {
            "columnNo": "11",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjVAX0A1M0BfQDBAX0A15o6SNeW6pw==",
            "seatNo": "5排5座",
            "status": "LK"
        },
        {
            "columnNo": "12",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjZAX0A1M0BfQDBAX0A15o6SNuW6pw==",
            "seatNo": "5排6座",
            "status": "LK"
        },
        {
            "columnNo": "13",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjdAX0A1M0BfQDBAX0A15o6SN+W6pw==",
            "seatNo": "5排7座",
            "status": "LK"
        },
        {
            "columnNo": "14",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjhAX0A1M0BfQDBAX0A15o6SOOW6pw==",
            "seatNo": "5排8座",
            "status": "LK"
        },
        {
            "columnNo": "16",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjlAX0A1M0BfQDBAX0A15o6SOeW6pw==",
            "seatNo": "5排9座",
            "status": "N"
        },
        {
            "columnNo": "17",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjEwQF9ANTNAX0AwQF9ANeaOkjEw5bqn",
            "seatNo": "5排10座",
            "status": "N"
        },
        {
            "columnNo": "18",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjExQF9ANTNAX0AwQF9ANeaOkjEx5bqn",
            "seatNo": "5排11座",
            "status": "N"
        },
        {
            "columnNo": "19",
            "lovestatus": 0,
            "rowNo": "9",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A1OjEyQF9ANTNAX0AwQF9ANeaOkjEy5bqn",
            "seatNo": "5排12座",
            "status": "N"
        }
      ],
      [
        {
            "columnNo": "6",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjFAX0A1M0BfQDBAX0A25o6SMeW6pw==",
            "seatNo": "6排1座",
            "status": "N"
        },
        {
            "columnNo": "7",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjJAX0A1M0BfQDBAX0A25o6SMuW6pw==",
            "seatNo": "6排2座",
            "status": "N"
        },
        {
            "columnNo": "8",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjNAX0A1M0BfQDBAX0A25o6SM+W6pw==",
            "seatNo": "6排3座",
            "status": "N"
        },
        {
            "columnNo": "9",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjRAX0A1M0BfQDBAX0A25o6SNOW6pw==",
            "seatNo": "6排4座",
            "status": "N"
        },
        {
            "columnNo": "11",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjVAX0A1M0BfQDBAX0A25o6SNeW6pw==",
            "seatNo": "6排5座",
            "status": "LK"
        },
        {
            "columnNo": "12",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjZAX0A1M0BfQDBAX0A25o6SNuW6pw==",
            "seatNo": "6排6座",
            "status": "LK"
        },
        {
            "columnNo": "13",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjdAX0A1M0BfQDBAX0A25o6SN+W6pw==",
            "seatNo": "6排7座",
            "status": "LK"
        },
        {
            "columnNo": "14",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjhAX0A1M0BfQDBAX0A25o6SOOW6pw==",
            "seatNo": "6排8座",
            "status": "LK"
        },
        {
            "columnNo": "16",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjlAX0A1M0BfQDBAX0A25o6SOeW6pw==",
            "seatNo": "6排9座",
            "status": "N"
        },
        {
            "columnNo": "17",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjEwQF9ANTNAX0AwQF9ANuaOkjEw5bqn",
            "seatNo": "6排10座",
            "status": "N"
        },
        {
            "columnNo": "18",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjExQF9ANTNAX0AwQF9ANuaOkjEx5bqn",
            "seatNo": "6排11座",
            "status": "N"
        },
        {
            "columnNo": "19",
            "lovestatus": 0,
            "rowNo": "10",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A2OjEyQF9ANTNAX0AwQF9ANuaOkjEy5bqn",
            "seatNo": "6排12座",
            "status": "N"
        }
      ],
      [
        {
            "columnNo": "11",
            "lovestatus": 0,
            "rowNo": "11",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A3OjVAX0A1M0BfQDBAX0A35o6SNeW6pw==",
            "seatNo": "7排5座",
            "status": "LK"
        },
        {
            "columnNo": "12",
            "lovestatus": 0,
            "rowNo": "11",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A3OjZAX0A1M0BfQDBAX0A35o6SNuW6pw==",
            "seatNo": "7排6座",
            "status": "LK"
        },
        {
            "columnNo": "13",
            "lovestatus": 0,
            "rowNo": "11",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A3OjdAX0A1M0BfQDBAX0A35o6SN+W6pw==",
            "seatNo": "7排7座",
            "status": "LK"
        },
        {
            "columnNo": "14",
            "lovestatus": 0,
            "rowNo": "11",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A3OjhAX0A1M0BfQDBAX0A35o6SOOW6pw==",
            "seatNo": "7排8座",
            "status": "LK"
        },
        {
            "columnNo": "16",
            "lovestatus": 0,
            "rowNo": "11",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A3OjlAX0A1M0BfQDBAX0A35o6SOeW6pw==",
            "seatNo": "7排9座",
            "status": "N"
        },
        {
            "columnNo": "17",
            "lovestatus": 0,
            "rowNo": "11",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A3OjEwQF9ANTNAX0AwQF9AN+aOkjEw5bqn",
            "seatNo": "7排10座",
            "status": "N"
        },
        {
            "columnNo": "18",
            "lovestatus": 0,
            "rowNo": "11",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A3OjExQF9ANTNAX0AwQF9AN+aOkjEx5bqn",
            "seatNo": "7排11座",
            "status": "N"
        },
        {
            "columnNo": "19",
            "lovestatus": 0,
            "rowNo": "11",
            "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A3OjEyQF9ANTNAX0AwQF9AN+aOkjEy5bqn",
            "seatNo": "7排12座",
            "status": "N"
        }
      ],
      [
          {
              "columnNo": "6",
              "lovestatus": 0,
              "rowNo": "12",
              "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A4OjFAX0A1M0BfQDBAX0A45o6SMeW6pw==",
              "seatNo": "8排1座",
              "status": "N"
          },
          {
              "columnNo": "7",
              "lovestatus": 0,
              "rowNo": "12",
              "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A4OjJAX0A1M0BfQDBAX0A45o6SMuW6pw==",
              "seatNo": "8排2座",
              "status": "N"
          },
          {
              "columnNo": "8",
              "lovestatus": 0,
              "rowNo": "12",
              "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A4OjNAX0A1M0BfQDBAX0A45o6SM+W6pw==",
              "seatNo": "8排3座",
              "status": "N"
          },
          {
              "columnNo": "9",
              "lovestatus": 0,
              "rowNo": "12",
              "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A4OjRAX0A1M0BfQDBAX0A45o6SNOW6pw==",
              "seatNo": "8排4座",
              "status": "N"
          },
          {
              "columnNo": "16",
              "lovestatus": 0,
              "rowNo": "12",
              "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A4OjlAX0A1M0BfQDBAX0A45o6SOeW6pw==",
              "seatNo": "8排9座",
              "status": "N"
          },
          {
              "columnNo": "17",
              "lovestatus": 0,
              "rowNo": "12",
              "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A4OjEwQF9ANTNAX0AwQF9AOOaOkjEw5bqn",
              "seatNo": "8排10座",
              "status": "N"
          },
          {
              "columnNo": "18",
              "lovestatus": 0,
              "rowNo": "12",
              "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A4OjExQF9ANTNAX0AwQF9AOOaOkjEx5bqn",
              "seatNo": "8排11座",
              "status": "N"
          },
          {
              "columnNo": "19",
              "lovestatus": 0,
              "rowNo": "12",
              "seatId": "NDI2QF9AMjg5NkBfQDE2MTQ3NjQ3MDBAX0AxNEBfQDVAX0A4OjEyQF9ANTNAX0AwQF9AOOaOkjEy5bqn",
              "seatNo": "8排12座",
              "status": "N"
          }
        ]
      ]
    }
  },

  pay: function() {
    const that = this;
    film.createMiniOrder({
      body: that.data.schedule,
      attach: that.data.filmSeat
    }).then((resp) => {
      
    },(err) => {
      store.Tools().Toast(err.msg)
      // console.log('err', err)
    })
  },

  SetShadow(e) {
    this.setData({
      shadow: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})