send = require("./send");
interactionBank = require("./interactionBank");

console.log(interactionBank.bank);

function weightedRand(spec) {
  //stolen from:
  //https://stackoverflow.com/questions/8435183/generate-a-weighted-random-number
  var i,
    sum = 0,
    r = Math.random();
  for (i in spec) {
    sum += spec[i].prob;
    if (r <= sum) return i;
  }
}

function chooseResponse(input) {
  for (entry in interactionBank.bank) {
    console.log("entry");
    if (entry.input_contains.some(s => s.includes(input))) {
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
    response = chooseResponse(received_message.text);
  }

  // Send the response message
  send.callSendAPI(sender_psid, response);
}

exports.handleMessage = handleMessage;
