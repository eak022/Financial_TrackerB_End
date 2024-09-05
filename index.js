const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const financialRouter = require("./router/financial.router");

app.use(cors({
  origin: 'https://financial-tracker-7qou45z5r-eak022s-projects.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

//use Middleware
app.use(express.json());
app.use(express.urlencoded
    ({ extended: true }));

app.get("/", (req, res) => {
    res.send("<h1>Hello FinancialTracker API</h1>");
});

app.use("/api/v1/financial", financialRouter);


app.listen(PORT, () => {
    console.log("Listenig to http://localhost:" + PORT);
});
