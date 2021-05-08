import express from "express";
const port: string = process.env.PORT || "8000";

const app: express.Application = express();

// Cors handle
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
	console.log("Home");
	res.send("Server running fine");
});

app.use("/api", require("./api"));

app.listen(port, () => {
	console.log(`Server running at: ${port}`);
});
