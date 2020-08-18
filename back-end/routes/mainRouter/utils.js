const path = require('path');
const fs = require("fs");

module.exports = writeFile = async (fileTitle, data) => {
   fs.writeFile(path.resolve(`public/${fileTitle}`), data, function (error) {
    if (error) throw error; // если возникла ошибка
  });
}
