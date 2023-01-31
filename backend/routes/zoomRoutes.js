const express = require('express');
const router = express.Router();
const {
    getMsdkSignature,
    CreateAppointment,
    ListMeeting,
    ThridPartyAPICall,
  } = require("../controllers/zoomControllers.js");

router.route('/').post();

// Get MSDK Signature Route
router.route("/msig").post(getMsdkSignature);

// Create routes. Test with Postman
router.route("/create").post(CreateAppointment);

// Create routes Test with Postman
router.route("/listmeetings").get(ListMeeting);

// Get routes Test with Postman
router.route("/thridparty").get(ThridPartyAPICall);

module.exports = router; // Export the router so it can be used in server.js