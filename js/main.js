
let fetchDefault = "https://api.exchangeratesapi.io/latest"
let newFetch =document.querySelector(".drop-submit")
let output = 'EUR'


function displayData(){
    let barsContainer = document.querySelector(".graph-box");
    barsContainer.querySelectorAll(".graph-bar").forEach(n => n.remove())
    let nav= document.querySelector(".nav");        nav.querySelectorAll('.nav-country').forEach(n => n.remove())
    
    rates =[];
    dataOne = [];
    let countries= ["USD","GBP","SGD","CAD","AUD"];
    
      
    fetch(fetchDefault).then(response => response.json()).then(data => {
    console.log("Got the data!");
    console.log(data);
    rates.push(data.rates);
    console.log(rates[0]);
    dataOne.push(data);
    
    let display = document.querySelector(".display-box")
    display.textContent = "Equivalent per " + output;

    function getOption() { 
        selectElement = document.querySelector('.drop-down');             
        output = selectElement.value; 
    
        fetchDefault = "https://api.exchangeratesapi.io/latest?base="+output;
        console.log(fetchDefault);
        
        

        displayData()
        
    } 
    newFetch.addEventListener('click',function(event) {
        
        getOption()    
    })
      

    for (let country of countries)
        {
            let barsContainer = document.querySelector(".graph-box");
            console.log(country);
            let bars = document.createElement('div');
            bars.textContent = country;
            barsContainer.appendChild(bars);
            let style = document.createElement("style");
            let height = ((1.00/rates[0][country]) * 100)
            bars.style.height =height+"%";
            bars.classList.add("graph-bar");
            bars.addEventListener('click', function(event) {
                displayBox(rates[0][country],country);            
              })
        }

    function displayBox(price,country){
        let displayContainer = document.querySelector(".display-box");
        displayContainer.textContent =`1 ${output} = ${price} ${country}`;
    }
        
    function addClick(country){
        if(countries.includes(country)){
            let n = countries.indexOf(country);
            countries.splice(n,1);
            let barDeletes = document.querySelectorAll(".graph-bar");
            for (let barDelete of barDeletes){
                if (barDelete.textContent === country){
                    barDelete.parentNode.removeChild(barDelete)
                }
            }
        
        }
        else{
            countries.push(country)
            let barsContainer = document.querySelector(".graph-box");
            console.log(country);
            let bars = document.createElement('div');
            bars.textContent = country;
            barsContainer.appendChild(bars);
            let style = document.createElement("style");
            let height = ((1.00/rates[0][country]) * 100)
            bars.style.height =height+"%";
            bars.classList.add("graph-bar");
        }                
    }    
    let dropDown = document.querySelector(".drop-down")
    let nav = document.querySelector(".nav");
    for (let country of Object.keys(rates[0])){       
        let navCountry = document.createElement("div");
        navCountry.textContent = country;
        nav.appendChild(navCountry);
        navCountry.classList.add("nav-country")
        let option = document.createElement("option")
        option.textContent = country
        dropDown.appendChild(option)
        option.value = country    
    }
    let allNav = document.querySelectorAll(".nav-country")
    for (let nav of allNav){
        nav.addEventListener('click', function(event) {
            console.log(nav.textContent);
            addClick(nav.textContent);
          })
    }
    
    
    });
    
}

displayData()
