const express = require('express');
const router = express.Router();
const {
    generateSDKSignature,
    CreateAppointment,
    ListAppointments,
    ThirdPartyAPICall,
  } = require("../controllers/zoomControllers.js");

router.route('/').post();

// Get MSDK Signature Route
router.route("/msig").post(generateSDKSignature);

// Create routes. Test with Postman
router.route("/create").post(CreateAppointment);

// Create routes Test with Postman
router.route("/listmeetings").get(ListAppointments);

// Get routes Test with Postman
router.route("/thridparty").get(ThirdPartyAPICall);

module.exports = router; // Export the router so it can be used in server.js