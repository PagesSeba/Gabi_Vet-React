const express = require("express");
const app = express();
const bodyParser= require("body-parser")

//SDK Mercadopago
const mercadopago = require("mercadopago");

//middleware

app.use(bodyParser.urlencoded({ extended: false }))

//credenciales Vendedor (Vendedor Test)

mercadopago.configure({
    access_token: "TEST-3040702491948902-092016-75a5f08da2f0466ad19ecce2612acb79-540123803"
});


//routes 
app.post('/checkoutmp', (req, res) => {
    
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