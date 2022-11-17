const express = require("express");
const app = express();
const bodyParser= require("body-parser")

//SDK Mercadopago
const mercadopago = require("mercadopago");

//middleware

app.use(bodyParser.urlencoded({ extended: false }))

//credenciales Vendedor (Vendedor Test)

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
        ]
      };

      mercadopago.preferences.create(preference)
      .then(function(response){
      
        res.redirect(response.body.init_point);
       
      }).catch(function(error){
        console.log(error);
      });

});

//server
app.listen(3001, () => {
    console.log("Server on port 3001")

})