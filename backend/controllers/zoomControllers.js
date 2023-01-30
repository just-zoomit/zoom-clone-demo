const asyncHandler = require("express-async-handler");

require("dotenv").config();
const KJUR = require("jsrsasign");

const {
  listZoomMeetings,
  thridPartyAPICall,
  } = require("../api/zoomAPI.js");

  const getMsdkSignature = asyncHandler(async (req, res) => {
    const iat = Math.round(new Date().getTime() / 1000) - 30;
    const exp = iat + 60 * 60 * 2;
  
    const oHeader = { alg: "HS256", typ: "JWT" };
  
    const oPayload = {
      sdkKey: process.env.ZOOM_MSDK_KEY,
      mn: req.body.meetingNumber,
      role: req.body.role,
      iat: iat,
      exp: exp,
      tokenExp: iat + 60 * 60 * 2,
    };
  
    const sHeader = JSON.stringify(oHeader);
    const sPayload = JSON.stringify(oPayload);
    const signature = KJUR.jws.JWS.sign(
      "HS256",
      sHeader,
      sPayload,
      process.env.ZOOM_MSDK_SECRET
    );
  
    res.json({
      signature: signature,
    });
  });
  

  const ListMeeting = asyncHandler(async (req, res) => {
    const meetings = await listZoomMeetings();
    if (meetings === undefined) {
      res.status(400);
      throw new Error("No meeting found");
    } else {
      res.status(201).json({ meetings });
    }
  });

const ThridPartyAPICall = asyncHandler(async (req, res) => {

    const thridPartyAPI = thridPartyAPICall();

    if (thridPartyAPICall === undefined) {
        res.status(400);
        throw new Error("No API Call found");
      } else {
        res.status(201).json({ thridPartyAPI });
      }
  });

  module.exports = {
    getMsdkSignature,
    ListMeeting,
    ThridPartyAPICall,
  };
  