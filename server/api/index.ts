import express from "express";

const router = express.Router();

router.use("/v1", require("./v1"));
router.get("/", (req, res) => {
	res.send("API is running fine");
});

module.exports = router;
