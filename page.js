var mId = document.location.href.split('=').pop();
const api = "15d2ea6d0dc1d476efbca3eba2b9bbfb";

function movieDetails(){
    
    axios.get('https://api.themoviedb.org/3/movie/'+mId+'?api_key='+api+'&language=en-US')
    .then((response) => {
        let dataJSON = response
        let posterimg = dataJSON.data.poster_path;
        let genrestext = dataJSON.data.genres;
        let releaseDate = dataJSON.data.release_date;
        let mOverview = dataJSON.data.overview;
        overview(mOverview);
        poster(posterimg);
        genres(genrestext);
        Rdate(releaseDate);
    })
}

{
function poster(posterimg){
    const heroHeaderHTML = document.getElementById('heroHeader')
    heroHeader.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 85.42%, #000000 100%), url(https://image.tmdb.org/t/p/w400'+ posterimg +') center no-repeat';
    heroHeader.style.backgroundSize = 'cover';
}
function genres(genrestext){
    const genresHTML = document.getElementById('genre');
    for (let i = 0; i < genres.length; i++) {
        genresHTML.insertAdjacentHTML('afterbegin', ('<div class="circle"></div><p class="genre">'+genrestext[i].name+'</p>'))
        
    }
}
function Rdate(releaseDate){
    const Rdate =document.getElementById('date');
    Rdate.insertAdjacentText('afterbegin',releaseDate);
}
function overview(mOverview){
    const detailHTML = document.getElementById('detail');
    detailHTML.insertAdjacentHTML('afterbegin', '<p>'+mOverview+'</p>')
}
}

function cast(){
    axios.get('https://api.themoviedb.org/3/movie/'+mId+'/credits?api_key='+api)
    .then((response)=>{
        let dataJSON = response.data.cast
        
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
            castCover.insertAdjacentHTML('beforeend','<div style="background: url(https://image.tmdb.org/t/p/w200/'+dataJSON[i].profile_path+'); background-size: cover;" class="castCards"><div style="background-color:'+color[num]+'" class="block"><p class="blockName">'+dataJSON[i].name+'</p><p class="blockCast">'+dataJSON[i].character+'</p></div></div>')
            
        }
    })
}


function videos(){
    axios.get('https://api.themoviedb.org/3/movie/'+mId+'/videos?api_key='+api+'&language=en-US')
    .then((response)=>{
        let dataJSON = response.data.results
        var url = 'https://img.youtube.com/vi/'
        const videosCover = document.getElementById('videosCover');
        for (let i = 0; i < dataJSON.length; i++) {
            
            if (dataJSON[i].type == "Trailer") {
                videosCover.insertAdjacentHTML('beforeend', '<div style="background:url('+url+dataJSON[i].key+'/mqdefault.jpg) ;background-size: cover;" class="videosCards"><p class="mark">Trailer</p><img src="play.svg"></div>');
            }else{videosCover.insertAdjacentHTML('beforeend', '<div class="videosCards"><p class="mark true">Trailer</p><img src="play.svg"></div>');}
            
            
        }
    })
}



function recommendations(){
    axios.get('https://api.themoviedb.org/3/movie/'+mId+'/recommendations?api_key='+api+'&language=en-US&page=1')
    .then((response)=>{
        dataJSON = response.data.results
        const recommendedCover = document.getElementById('recommendedCover');
        for (let i = 0; i < 10; i++) {
            recommendedCover.insertAdjacentHTML('beforeend', '<a href="page.html?mId='+dataJSON[i].id+'"<div style="Background: url(https://image.tmdb.org/t/p/w200/'+dataJSON[i].poster_path+'); Background-size: cover"class="recommendedCards"></div></a>')
            
        }
    })
}



function reviews(){
    axios.get('https://api.themoviedb.org/3/movie/'+mId+'/reviews?api_key='+api+'&language=en-US&page=1')
    .then((response)=>{
        let dataJSON = response.data.results
        console.log(dataJSON)
        const reviewsCover = document.getElementById('reviewsCover')
        for (let i = 0; i < dataJSON.length; i++) {
            if (dataJSON.length !== 0) {
                reviewsCover.insertAdjacentHTML('beforeend', '<div class="reviewsCards"><h1 class="reviewsName">'+dataJSON[i].author+'</h1><p class="reviewsPara wrapword">'+dataJSON[i].content+'</p></div>')
            }   
        }
        
    })
}
reviews();

recommendations();
videos();
cast();
movieDetails();