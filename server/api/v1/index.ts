import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
	res.send("api v1: UP");
});

module.exports = router;
