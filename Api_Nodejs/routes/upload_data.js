const express = require("express");
const crypto = require('crypto');
const router = express.Router();
const authenticateToken = require('../middleware/access-token');

router.post('/upload-check-line', async (req, res) => {
    console.log('in');
    const checkLines = req.body; // รับค่าจาก Vue.js

    if (!checkLines || !Array.isArray(checkLines)) {
        return res.status(400).json({ message: "Invalid data format" });
    }

    try {
        for (const record of checkLines) {
            await req.db('check_line').insert({
                week: record.week_id,

            });
        }

        res.status(200).json({ status: "success", message: "Data uploaded successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error uploading data", error: error.message });
    }
});

module.exports = router;
