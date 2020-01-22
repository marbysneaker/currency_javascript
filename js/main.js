


let rates =[]
fetch("https://api.exchangeratesapi.io/latest").then(response => response.json()).then(data => {
console.log("Got the data!");
console.log(data);
rates.push(data.rates)
console.log(rates[0])

let chart = document.querySelector("#BarChart-bar-us");
let height = 1.00/ ((rates[0]["USD"])* 100);
let bar = document.createElement("div");
bar.classList.add("Bar");
bar.style.height = height + "%";
chart.appendChild(bar);
let chart = document.querySelector("#BarChart-bar-us");
let height = 1.00/ ((rates[0]["USD"])* 100);
let bar = document.createElement("div");
bar.classList.add("Bar");
bar.style.height = height + "%";
chart.appendChild(bar);

});


