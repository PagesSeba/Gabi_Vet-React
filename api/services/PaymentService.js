const axios = require("axios");

class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_46945293@testuser.com",
      items: [
        {
          title: "Ken-L Razas Grandes",
          description: "Comida Ken-L Perros Grandes",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "nmro de orden",
          quantity: 3,
          unit_price: 500
        },
        {
          title: "Ken-L Razas Grandes",
          description: "Comida Ken-L Perros Grandes",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "nmro de orden",
          quantity: 1,
          unit_price: 500
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
