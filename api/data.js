// import axios from "axios";
const axios = require("axios");

const url = "https://uisu-admin.herokuapp.com/api/";
function getAllArticles() {
  return new Promise((resolve, reject) => {
    axios.get(url + "articles/").then((response) => {
      resolve (response.data);
    });
  });
} 

function getAllExecutives(){
  return new Promise((resolve, reject) => {
    axios.get(url + "executives/").then((response) => {
      resolve (response.data);
    });
  });
}


const database = {
  getAllArticles,
  getAllExecutives,
};

module.exports = database;
