
const express = require("express");
const app1 = express();
const chats = require("./data/data");
const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT || 5000;

app1.get("/", (req, res) => {
  res.send("API is running");
});

app1.get("/api/chat", (req, res) => {
    console.log(chats)
  res.send(chats);
});

// app1.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id === req.params.id);
//    console.log(singleChat);
//    console.log(req.params.id);   
// });

app1.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  console.log(singleChat); // Make sure this is being logged
  if (singleChat) {
    res.send(singleChat);
  } else {
    res.status(404).send("Chat not found");
  }
});

app1.listen(PORT, () => {
  console.log(`The port number is ${PORT}`);
});