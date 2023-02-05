require("dotenv").config();
const axios = require("axios");
const btoa = require("btoa");

const getZoomAPIAccessToken = async () => {
  try {
    base_64 = btoa(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET);

    const resp = await axios({
      method: "POST",
      url:
        "https://zoom.us/oauth/token?grant_type=account_credentials&account_id=" +
        `${process.env.ACCOUNT_ID}`,
      headers: {
        Authorization: "Basic " + `${base_64} `,
      },
    });

    return resp.data.access_token;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};


const listZoomMeetings = async () => {
  try {
    const resp = await axios({
      method: "get",
      url: "https://api.zoom.us/v2/users/donte.zoomie@gmail.com/meetings",
      headers: {
        Authorization: "Bearer " + `${await getZoomAPIAccessToken()} `,
        "Content-Type": "application/json",
      },
    });
    const meetings = resp.data.meetings;

    const newArray = meetings.map((obj) =>
      ["id", "topic"].reduce((newObj, key) => {
        newObj[key] = obj[key];
        return newObj;
      }, {})
    );

    return newArray;
  } catch (err) {
    if (err.status == undefined) {
      console.log("Error : ", err);
    }
  }
};

const createZoomMeeting = async (type) => {
  try {
    

    const data = JSON.stringify({
      type: type,
    });

    const resp = await axios({
      method: "post",
      url: "https://api.zoom.us/v2/users/me/meetings",
      headers: {
        Authorization: "Bearer " + `${await getZoomAPIAccessToken()} `,
        "Content-Type": "application/json",
      },
      data: data,
    });

    const { id, password } = resp.data;

    return { id, password };
  } catch (err) {
    if (err.status == undefined) {
      console.log("Error : ", err);
    }
  }
};

/**
 * Generic function for making requests to the Zoom API
 * @param {string} method - Request method
 * @param {string | URL} endpoint - Zoom API Endpoint
 * @param {string} token - Access Token
 * @param {object} [data=null] - Request data
 */

const makeZoomAPIRequest = async (method, endpoint, token, data = null) => {
  try {
    const resp = await axios({
      method: method,
      url: endpoint,
      headers: {
        Authorization: "Bearer " + `${token} `,
        "Content-Type": "application/json",
      },
      data: data,
    });

    return resp.data;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

function generateOTP() {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}


const thirdPartyAPICall = () => {
  try {
    
      // Make API Call Here 
    return "Third Party API Call";
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};


module.exports = {
  getZoomAPIAccessToken, // Not needed outside of file
  createZoomMeeting, 
  listZoomMeetings,
  thirdPartyAPICall,
};