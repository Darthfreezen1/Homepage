window.addEventListener('load', ()=>{

    var image = document.createElement('img');
    image.src = getDateImage();
    document.getElementById('image').appendChild(image);


});

function getDateImage(){
    var current = new Date();
    var dd = current.getDate();
    var mm = current.getMonth()+1;
    var yyyy = current.getFullYear();

    if(dd < 10){
        dd = '0'+dd;
    }

    if(mm<10){
        mm = '0'+mm;
    }

    current = "weather_images/"+yyyy+'-'+mm+'-'+dd+'.png';
    return current;
}