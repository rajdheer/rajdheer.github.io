const api = "15d2ea6d0dc1d476efbca3eba2b9bbfb"







function suggestions(){
axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key='+api)
.then((response)=>{
    let dataJSON = response.data.results
    const suggestionsWords =document.getElementById('suggestionsWords')
    for (let i = 0; i < 5; i++) {
        suggestionsWords.insertAdjacentHTML('beforeend','<a href="page.html?mId='+dataJSON[i].id+'"<div class="suggestionsName">'+dataJSON[i].original_title+'</div>')
    }

})
}



function cast(){
    axios.get('https://api.themoviedb.org/3/person/popular?api_key='+api+'&language=en-US&page=1')
    .then((response)=>{
        let dataJSON = response.data.results
        var castCover = document.getElementById('castCover');
        {var color = [] ;
        color[0] = "#822E0A"
        color[1] = "#1E7A59"
        color[2] = "#1E3D7A"
        color[3] = "#461E7A"
        color[4] = "#7A3F7A"
        color[5] = "#7A3F1E"
        color[6] = "#7A1E1E"
        color[7] = "#787A1E"
        color[8] = "#7A1E44"
        color[9] = "#1F7A1E"
        color[10] = "#1d1d1d1"
        }
        for (let i = 0; i < dataJSON.length; i++) {
            var num = Math.floor(Math.random() * 10); 
            castCover.insertAdjacentHTML('beforeend','<div style="background: url(https://image.tmdb.org/t/p/w200/'+dataJSON[i].profile_path+'); background-size: cover;" class="castCards"><div style="background-color:'+color[num]+'" class="block"><p class="blockName">'+dataJSON[i].name+'</p><p class="blockCast">'+dataJSON[i].known_for_department+'</p></div></div>')
            
        }
    })
}



var cross = document.getElementById('cross')
cross.addEventListener('click', ()=>{window.history.back()})


function recommendetion(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+api+'&page=2&region=in')
    .then((popular)=>{
     let dataJSON = popular.data.results;
     const recommendetionHTML = document.getElementById('recommendedCover')
     for (let i = 0; i < dataJSON.length; i++) {
        recommendetionHTML.insertAdjacentHTML('afterbegin','<a href="page.html?mId='+dataJSON[i].id+'"><div class="recommendedCards" style="background: url(https://image.tmdb.org/t/p/w200'+dataJSON[i].poster_path+'); background-size: cover"></div></a>')
         }
        }).catch(()=>{});
}



//searchBox function
const searchBox = document.getElementById('searchBox')
const searchBtn =document.getElementById('searchBtn')
function playsearch(){
searchBox.addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
        search();
        
    }
})
searchBtn.addEventListener('click',()=>{
    search();
    
})

function search(){
        var query = searchBox.value
        if (query !== ""){
        document.location = '/results.html?q='+query;
        }else(alert('There is nothing in the textbox'))
}
}



playsearch();
recommendetion();
cast();
suggestions();










