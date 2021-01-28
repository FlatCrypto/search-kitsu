const SearchKitsu = require("./src/index");
const API = new SearchKitsu();

API.searchAnime("Attack on Titan", {
  seasonYear: 2013
}).then(console.log);
