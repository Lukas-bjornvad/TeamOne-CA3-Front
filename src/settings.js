// for development:
// const URL = "http://localhost:8080/teamone-ca3";
// actual deployed backend:
const URL = "https://www.lukasbjornvad.dk/TeamOne-CA3";

const configuration = (function() {
  return {
    URL: URL
  };
})();

export default configuration;

/*
  Add configuration constants
  Return them as objects
  import configuration from "./settings";
  Const URL = configuration.URL;
*/
