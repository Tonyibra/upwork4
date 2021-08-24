import axios from "axios";
const api = "https://onlyrealescorts.com/api/v1/";
const searchEndpoint = `${api}/search`;
const indexEndpoint = `${api}/index`;
const onlyReal = {};

onlyReal.indexData = async (id) => {
  try {
    const response = await axios.get(`${indexEndpoint}`);
    if (response) {
      return [null, response];
    } else {
      return [{ message: "Data not Found" }, null];
    }
  } catch (e) {
    return [
      {
        message: "Sorry, issue deleting favourite",
        statusCode: e.response.status,
      },
      null,
    ];
  }
};
onlyReal.countryData = async (country, city) => {
  try {
    const response = await axios.post(`${searchEndpoint}`, { country, city });
    if (response) {
      return [null, response];
    } else {
      return [{ message: "Data not Found" }, null];
    }
  } catch (e) {
    return [
      {
        message: "Sorry, issue deleting favourite",
        statusCode: e.response.status,
      },
      null,
    ];
  }
};

export default onlyReal;
