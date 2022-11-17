const functions = require("firebase-functions");
const express = require("express");
const app = express();
// const cors = require("cors"){
//     origin: [

//     ]
// }

const mercadopago = require("mercadopago");
mercadopago.configure({
  access_token: "APP_USR-8448919236745527-111218-8799b297ec663f5ad948e3f11800b34e-1236891359"
});

//routes 
app.post('/checkout', (req, res) => {
    
    let preference = {
        items: [
          {
            title:req.body.title,
            unit_price: parseInt(req.body.price),
            quantity: 1,
          }
        ],
        back_urls: {
          success: "http://localhost:3000/",
          failure: "http://localhost:3000/",
          pending: "http://localhost:3000/",
          },
      };

      mercadopago.preferences.create(preference)
      .then(function(response){
      
        res.redirect(response.body.init_point);
       
      }).catch(function(error){
        console.log(error);
      });

});


exports.app = functions.https.onRequest(app)


// const {procesoDePago} = require("./controladores/pago")


// app.post("/process_payment", procesoDePago)

// exports.web= functions.https.onRequest(app)










// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
