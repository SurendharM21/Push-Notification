const express = require("express");
const path = require("path");
const app = express()
const webpush = require("web-push")
const bodyParser = require("body-parser");
const vapidKeys = webpush.generateVAPIDKeys();

app.use(express.static(path.join(__dirname,"client")))
app.use(bodyParser.json())

const publicKey ='BG9xUnx2-uEpG_Fz9SuBKkzXciEoysyPHrS-NFb_fPOjbjQMqKY3yg0piqF_e0Z6jiZa0IqPR_aFWXqVKrZtTVs'
const privateKey = 'KEGPe3Dk298_l5Oy31OdxrJAhVQ5Fuc3N35L3DzHLMI'
webpush.setVapidDetails(
    'mailto:msdsuren07@gmail.com',
    publicKey,
    privateKey
  );

  app.post("/subscribe",(req,res)=>{
    const subscription = req.body
    res.status(201).json({});
    const payload = JSON.stringify({title:"Push - Test by MSD"})
  
    webpush.sendNotification(subscription,payload).catch(err=> console.error(err))
  })
app.listen(8000,()=>{
    console.log(" server started")
})