window.addEventListener('load', ()=> {
    let long = your-long-here;
    let lat = your-lat-here

    let tempDesc = document.querySelector('.temperature-description');
    let tempDeg = document.querySelector('.temperature-degree');

    let temps = new Array();
    let descs = new Array();
    let week = document.querySelector('.weekdesc');

    for(let i = 0; i < 7; i++){
        temps[i] = document.querySelector('.temperature-degree'+i);
        descs[i] = document.querySelector('.temperature-description'+i);
    }

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const api = `${proxy}your-api-here`;

    fetch(api).then(data => {
        return data.json();
    }).then(data => {
        console.log(data);
        const {temperature, summary} = data.currently;

        //set dom elements from the darksky api
        let dow;
        for(let i = 0; i < 7; i++){
            switch(i){
                case 0: dow = "monday";break;
                case 1: dow = "tuesday";break;
                case 2: dow = "wednesday";break;
                case 3: dow = "thursday";break;
                case 4: dow = "friday";break;
                case 5: dow = "saturday";break;
                case 6: dow = "sunday";break;
            }
            temps[i].textContent = dow +" "+ convert(data.daily.data[i].apparentTemperatureMax)+" "+emoji(data.daily.data[i].summary);
            descs[i].textContent = (data.daily.data[i].summary).toLowerCase();
        }

    });

});


function convert(f){
    let c = (f - 32)/(9/5);
    return Math.round(c)+"℃";
}

//Will need to add more once weather allows
function emoji(summary){
    if(summary.includes("Mostly cloudy")){
        return "☁";
    }

    if(summary.includes("Overcast")){
        return "☁";
    }

    if(summary.includes("Partly cloudy")){
        return "⛅";
    }

    if(summary.includes("Clear")){
        return "☀";
    }

    if(summary.includes("Rain")){
        return "🌧";
    }

    if(summary.includes("Precipitation")){
        return "🌧";
    }

    if(summary.includes("Thunder")){
        return "⛈";
    }

}