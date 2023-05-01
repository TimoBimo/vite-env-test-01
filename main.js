import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import Airtable from "airtable";
console.log(import.meta.env.VITE_MY_API_KEY);
console.log(import.meta.env.VITE_ENVIRONMENT);

console.log("neuer test");
console.log("neuer test");
console.log("neuer test");
console.log("neuer test");
const airtableApi = import.meta.env.VITE_AIRTABLE_API;
var base = new Airtable({ apiKey: airtableApi }).base("appBb5j8BS7eDF0Y1");

base("Table 1")
	.select({
		// Selecting the first 3 records in Grid view:
		view: "Grid view",
	})
	.eachPage(
		function page(records, fetchNextPage) {
			// This function (`page`) will get called for each page of records.

			records.forEach(function (record) {
				console.log("Retrieved", record.get("Name"));
			});

			// To fetch the next page of records, call `fetchNextPage`.
			// If there are more records, `page` will get called again.
			// If there are no more records, `done` will get called.
			fetchNextPage();
		},
		function done(err) {
			if (err) {
				console.error(err);
				return;
			}
		}
	);

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
