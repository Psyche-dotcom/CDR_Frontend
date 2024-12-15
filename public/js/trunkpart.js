var data = JSON.parse(localStorage.getItem("UserData")) || {};

console.log("simultaneousCalls", data.simultaneousCalls);

var _simultaneousCalls = data.simultaneousCalls ?? 32;

console.log("_simultaneousCalls", _simultaneousCalls);
