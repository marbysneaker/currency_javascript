

function data(){
    let rates =[]
    fetch("https://api.exchangeratesapi.io/latest").then(response => response.json()).then(data => {
    console.log("Got the data!");
    console.log(data);
    rates.push(data.rates);
    console.log(rates[0]);

    let bars = document.querySelectorAll(".graph-bar");
    console.log(bars)

    
    
    for (let bar of bars){
        console.log(rates[0][bar.textContent]);
        let country = bar.textContent;
        let style =  document.createElement("style");
        let height = ((1.00/rates[0][country]) * 100)
        bar.style.height = height+"%";
        


    }
    bars[0].style.height = "100%"



    // let chart = document.querySelector("#BarChart-bar-us");
    // let height = ((1.00/ rates[0]["USD"])* 100);
    // let bar = document.createElement("style");
    // chart.style.height = height + "%";
    // chart.appendChild(bar);
    // chart = document.querySelector("#BarChart-bar-us");
    // height = 1.00/ ((rates[0]["USD"])* 100);
    // bar = document.createElement("div");
    // bar.classList.add("Bar");
    // bar.style.height = height + "%";
    // chart.appendChild(bar);

    });
}
data()

