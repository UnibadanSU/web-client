import axios from "axios";

const url = "https://uisu-admin.herokuapp.com/api/";
function getAllArticles() {
  return new Promise((resolve, reject) => {
    axios.get(url + "articles/").then((response) => {
      resolve (response.data);
    });
  });
}

export const database = {
  getAllArticles,
};

module.exports = database;
