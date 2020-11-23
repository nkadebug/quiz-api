const axios = require("axios");
const fs = require("fs");

exports.getIndexJson = function () {
  const index_url =
    "https://script.google.com/macros/s/AKfycbw9XAGHXLNfPy-ubSa1KCC51TK78IWE1WdAXXSVuHMLcGF5Recu/exec";

  axios
    .get(index_url)
    .then(function ({ data }) {
      console.log(data);
      fs.writeFile(
        "docs/index.json",
        JSON.stringify({ data, ts: new Date().toJSON() }, null, 2),
        function (err) {
          if (err) throw err;
          console.log(err);
        }
      );
    })
    .catch(function (error) {
      console.log(error);
    });
};
