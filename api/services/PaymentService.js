const axios = require("axios");


class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "asdasd@gmail.com",
      items: [
        {
            title: "Producto",
            picture_url: "http://www.myapp.com/myimage.jpg",
            quantity: 1,
            unit_price: 200
          }
      ],
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success"
      }
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data.init_point;
  }
}
 

module.exports = PaymentService;
