send = require("./send");

function handlePostback(sender_psid, received_postback) {
  console.log("ok");
  let response;
  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === "pray") {
    response = { text: "Thế cầu gì cầu đi! Nhanh lên, nhà bao việc" };
  } else if (payload === "pay") {
    response = { text: "Chờ tí nhé để thầy lấy ví" };
  }
  // Send the message to acknowledge the postback
  send.callSendAPI(sender_psid, response);
}

exports.handlePostback = handlePostback;
