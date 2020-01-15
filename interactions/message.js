send = require("./send");
interactionBank = require("./interactionBank");

function weightedRand(spec) {
  //stolen from:
  //https://stackoverflow.com/questions/8435183/generate-a-weighted-random-number
  var i,
    sum = 0,
    r = Math.random();
  for (i in spec) {
    sum += spec[i].prob;
    if (r <= sum) {
      var res = spec[i].content;
      return res;
    }
  }
}

function chooseResponse(input) {
  for (entry of interactionBank.bank) {
    if (entry.input_contains.some(kwd => input.includes(kwd))) {
      return weightedRand(entry.responses);
    }
  }
  return weightedRand(interactionBank.stock);
}

function handleMessage(sender_psid, received_message) {
  let response;
  // Checks if the message contains text
  if (received_message.text) {
    // Create the payload for a basic text message, which
    // will be added to the body of our request to the Send API
    response = chooseResponse(received_message.text.toLowerCase());
    console.log("chosen response: " + response.text);
  }

  // Send the response message
  send.callSendAPI(sender_psid, response);
}

exports.handleMessage = handleMessage;
