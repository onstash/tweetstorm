const glob = require('glob');

const onlyJS = fileName => /\.js$/.test(fileName);
const filterIgnoredFiles = files => files.filter(
  fileName => fileName.indexOf('node_modules') === -1
);
const getAllJSFiles = () => filterIgnoredFiles(glob.sync('**').filter(onlyJS));

module.exports = {
  getAllJSFiles
};
