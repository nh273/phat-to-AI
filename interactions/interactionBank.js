const initialResponse = {
  attachment: {
    type: "template",
    payload: {
      template_type: "generic",
      elements: [
        {
          title: "Con gặp thầy muốn làm gì?",
          subtitle: "Muốn gì thì nhấn nút.",
          buttons: [
            {
              type: "postback",
              title: "Muốn cầu khấn Phật ạ",
              payload: "pray"
            },
            {
              type: "postback",
              title: "Muốn công đức ạ",
              payload: "pay"
            }
          ]
        }
      ]
    }
  }
};

/*Situation-appropriate inputs & responses*/

const bank = [
  {
    input_contains: ["buồn", "khổ", "đau", "chán"],
    responses: [
      {
        content: { text: "Đời là bể khổ, quay đầu lại là bờ con ạ" },
        prob: 0.5
      },
      { content: { text: "Mô phật" }, prob: 0.5 }
    ]
  },
  {
    input_contains: ["cúng", "lễ", "công đức", "tiền"],
    responses: [
      {
        content: { text: "Đủ 300 tỷ là thầy xin giáo hội cho hoàn tục!" },
        prob: 0.8
      },
      { content: { text: "Tầm này rồi, liêm sỉ gì nữa!" }, prob: 0.2 }
    ]
  }
];

/*If cannot find appropriate responses, defer to random responses*/
const stock = [
  { content: initialResponse, prob: 0.8 },
  {
    content: "Chả hiểu con nói gì. Thôi thứ nhất là tu tại gia, con về đi",
    prob: 0.2
  }
];

exports.bank = bank;
exports.stock = stock;
