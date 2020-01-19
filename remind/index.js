import { pierwsza, olek, osoba as mikolaj } from "./remind.js";
import druga from "./remind.js";
import test from "./osoba.js";
import http from "http";

import osoba1 from "./osoba1.js";

let destrukturyzacja = { id: "", name: "" };

console.log(pierwsza());
console.log(druga());
console.log(olek);
console.log(mikolaj);
console.log(destrukturyzacja);

let madzia = new osoba1("Magda", "Wasik", 500);



http.createServer(function(req, res) {});

http.listen(8080);


