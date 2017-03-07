const glob = require('glob');

const onlyJS = fileName => /\.js$/.test(fileName);
const filterIgnoredFiles = files => files.filter(
  fileName => fileName.indexOf('node_modules') === -1
);
const getAllJSFiles = () => filterIgnoredFiles(glob.sync('**').filter(onlyJS));
const getAllTestFiles = () => filterIgnoredFiles(
  glob.sync('tests/**').filter(onlyJS)
);
const registerLintedGulpTasks = gulp => {
  return (name, task) => {
    gulp.task(name, ['lint'], task);
  };
};

module.exports = {
  getAllJSFiles,
  getAllTestFiles,
  registerLintedGulpTasks
};
