let ads = document.getElementById('ads');
var newArrivals = document.getElementById('newArrivals');
let discount = document.getElementsByClassName('discount')

function back(){
        window.history.back();
    }
 
axios.get('https://api.npoint.io/67679cae16611245a7b8').then((response)=>{
  var data = response.data;
     cards(data);
     
});


function cards(data){
    
    for (let i = 0; i < data.length; i++) {
    newArrivals.insertAdjacentHTML("beforeend", '<div class="newArrivalCards"><div style="position: relative ;"><div class="heart cardsHeart"><img src="heart.svg"></div></div><img class="cardImg" src="image.png" alt=""><h4>'+data[i].productName+'</h4><h3>Rs. '+data[i].productPrice+'</h3><div class="cardBtn"><img src="bag_In.svg"></div></div>')
}
}


axios.get('https://api.npoint.io/fad747017a79984d1950').then((response)=>{
    var data = response.data;
    
    banner(data);
});










//functions starts here







function banner(data){
    ads.insertAdjacentHTML("beforeend", '<div class="adsContent"><h2>'+data[0].productName+'</h2><p>'+data[0].discription+'</p><h1 id="bannerPrice">Rs. '+data[0].productPrice+'</h1><div class="adsBtn"><div class="button"><object data="bag_In.svg"></object></div><button style="margin-left: 10px;" class="heart"><svg id="fill" width="18" height="17" viewBox="0 0 18 17" fill="#FF9C9C" xmlns="http://www.w3.org/2000/svg"><path d="M15.7663 2.25735C15.3753 1.85873 14.9111 1.54252 14.4002 1.32678C13.8893 1.11104 13.3417 1 12.7887 1C12.2357 1 11.6881 1.11104 11.1772 1.32678C10.6663 1.54252 10.2021 1.85873 9.81116 2.25735L8.9998 3.08423L8.18843 2.25735C7.39874 1.45255 6.32768 1.00042 5.21089 1.00042C4.09409 1.00042 3.02303 1.45255 2.23334 2.25735C1.44365 3.06215 1 4.15369 1 5.29185C1 6.43 1.44365 7.52155 2.23334 8.32634L3.0447 9.15323L8.9998 15.2222L14.9549 9.15323L15.7663 8.32634C16.1574 7.92792 16.4677 7.45485 16.6794 6.93418C16.891 6.41352 17 5.85544 17 5.29185C17 4.72825 16.891 4.17018 16.6794 3.64951C16.4677 3.12884 16.1574 2.65578 15.7663 2.25735V2.25735Z" stroke="#FF9C9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></button></div><div class="adsImages"><img id="bannerImage" src="'+data[0].productImage+'"/></div></div>')


}

