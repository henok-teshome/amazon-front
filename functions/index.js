/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51OPPwVFIMHZ2ryul7S6PmN4IFvzb4IMhlSlUVuG5DAgVfdmsqUY6CMAjEdivp9toqIskHk7vGmWWDGSUvBIst5QA001ollhNqN"
);

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Received for this amount >>>>>>>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "USD",
    });

    // Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

//  base url http://127.0.0.1:5001/dec-22edb/us-central1/api
