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
    input_contains: ["shiba", "ny"],
    responses: [
      {
        content: { text: "Người yêu con is the best!" },
        prob: 1
      }
    ]
  },
  {
    input_contains: ["h1b", "visa"],
    responses: [
      {
        content: { text: "Con yên tâm, để thầy làm việc với anh Trump nhé!" },
        prob: 1
      }
    ]
  },
  {
    input_contains: ["buồn", "khổ", "đau", "chán"],
    responses: [
      {
        content: { text: "Đời là bể khổ, quay đầu lại là bờ con ạ" },
        prob: 0.25
      },
      { content: { text: "Mô phật" }, prob: 0.25 },
      { content: { text: "Thiện tai, thiện tai" }, prob: 0.25 },
      { content: { text: "Toang như con thì thầy cũng buồn" }, prob: 0.25 }
    ]
  },
  {
    input_contains: ["cúng", "lễ", "công đức", "tiền"],
    responses: [
      {
        content: {
          text: "Dành dụm đủ 300 tỷ là thầy xin Giáo hội cho hoàn tục!"
        },
        prob: 0.8
      },
      { content: { text: "Tầm này rồi, liêm sỉ gì nữa!" }, prob: 0.2 }
    ]
  },
  {
    input_contains: ["cầu", "ước", "muốn", "mong", "xin"],
    responses: [
      {
        content: {
          text: "Con cầu cái đấy thì Khá Bảnh cũng khá đuối nữa là thầy"
        },
        prob: 0.25
      },
      {
        content: {
          text: "Con cầu cái gì dễ dễ như hoà bình thế giới được không"
        },
        prob: 0.25
      },
      {
        content: { text: "Có thờ có thiêng, có tiền mới nhanh con ạ" },
        prob: 0.25
      },
      { content: { text: "Cầu gì cầu nhảm vậy con?" }, prob: 0.25 }
    ]
  }
];

/*If cannot find appropriate responses, defer to random responses*/
const stock = [
  { content: initialResponse, prob: 0.4 },
  {
    content: {
      text: "Chả hiểu con nói gì. Thôi thứ nhất là tu tại gia, con về đi"
    },
    prob: 0.3
  },
  {
    content: {
      text: "Đi thẳng vào vấn đề nào con, nhà bao việc!"
    },
    prob: 0.3
  }
];

exports.bank = bank;
exports.stock = stock;
