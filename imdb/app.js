console.log('working');
const api = "15d2ea6d0dc1d476efbca3eba2b9bbfb";

//console.log($.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb"));
const  genresHTML = document.getElementById('genre');
const nowPlayingCoverHTML =  document.getElementById("nowPlayingCover");
const nowPlayingCover =  document.getElementById("nowPlayingCover");
const popularCoverHTML = document.getElementById('popularCover');
const trendingCoverHTML = document.getElementById('trendingCover');
const top10CoverHTML = document.getElementById('top10Cover');
const trailerCoverHTML = document.getElementById('trailerCover');

var movieID = [] ;
movieID[0] = "tt4513678"
movieID[1] = "tt4566758"
movieID[2] = "tt7126948"
movieID[3] = "tt1745960"
movieID[4] = "tt4120636"
movieID[5] = "tt8332922"


var num = Math.floor(Math.random() * 6); 




function poster(){
    axios.get('https://api.themoviedb.org/3/movie/'+movieID[num]+'?api_key='+api+'&language=en-US')
    .then((response) => {
            const dataJSON = response.data;
            
            var  genresJSON = dataJSON.genres;
            var i;
            for (i = 0; i < genresJSON.length; i++) {
                genresHTML.insertAdjacentHTML('afterbegin', '<div class="circle"></div><p class="genre">'+genresJSON[i].name+'</p>');
            }
            document.getElementById("heroHeader").style.background = "linear-gradient(180deg, rgba(27, 27, 27, 0) 60%, #1B1B1B 100%), url(https://image.tmdb.org/t/p/w400"+ dataJSON.poster_path +") center no-repeat"  ;
            document.getElementById('heroHeader').style.backgroundSize = "cover";
        })
        .catch((err) =>{
            console.log(err);
        });
}

function NowPlaying(){
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key='+api+'&language=hi&page=1&region=in')
    .then((nowPlaying) =>{
        let dataJSON = nowPlaying.data.results;
        for (let i = 0; i < dataJSON.length; i++) {
            if (dataJSON[i].original_language == 'hi') {
                nowPlayingCover.insertAdjacentHTML('afterbegin', '<a href="page.html?mId='+dataJSON[i].id+'" ><img src =https://image.tmdb.org/t/p/w200'+ dataJSON[i].poster_path+' class= "nowPlayingCards"></a>')
            }else if (dataJSON[i].original_language == 'en') {
                nowPlayingCover.insertAdjacentHTML('afterbegin', '<img src =https://image.tmdb.org/t/p/w200'+ dataJSON[i].poster_path+' class= "nowPlayingCards">')
            }}
    }).catch(() =>{});
}


function popular(){
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key='+api+'&page=1&region=in').then((popular)=>{
     let dataJSON = popular.data.results;
     for (let i = 0; i < dataJSON.length; i++) {
         popularCoverHTML.insertAdjacentHTML('afterbegin','<a href="page.html?mId='+dataJSON[i].id+'"> <img class="popularCircle" src="https://image.tmdb.org/t/p/w200'+dataJSON[i].poster_path+'"></a>')
         }
        }).catch(()=>{});
}

function trending(){
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key='+api).then((trending)=>{
        let dataJSON = trending.data.results;
        for (let i = 0; i < dataJSON.length; i++) {
            trendingCoverHTML.insertAdjacentHTML('afterbegin','<a href="page.html?mId='+dataJSON[i].id+'"><img class="trendingCards" src="https://image.tmdb.org/t/p/w200'+dataJSON[i].poster_path+'"></a>');
        }
    }).catch(()=>{})
}



function trailer(){
    axios.get('https://api.themoviedb.org/3/movie/'+movieID[num]+'/videos?api_key='+api+'&language=en-US')
    .then((response)=>{
        var url = 'https://img.youtube.com/vi/'
        dataJSON = response.data.results;
        var length = dataJSON.length;
        for (let i = 0; i < length; i++) {
            trailerCoverHTML.insertAdjacentHTML('beforeend', '<div id="'+dataJSON[i].key+'" class="trailerBlock"><img class="image"  src="'+url+dataJSON[i].key+'/mqdefault.jpg"><img class="play" src="play.svg"></div>');
        }
        $('.trailerBlock').click(function(){
            var x = this.id
            myvideo(x);
        })
        
    }).catch(()=>{})
}
        

function myvideo(x){
    var vid = document.getElementById('video');
    vid.scrollIntoView(true);
    vid.innerHTML = '<iframe width="100%" height="100%" src="//www.youtube.com/embed/'+x+'?rel="0" modestbranding="1" autohide="1" showinfo="0" controls="0" autoplay="1" frameborder="0" allowfullscreen></iframe>';
}
   




function top10(){

    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key='+api+'&page=1')
    .then((response)=>{
        let dataJSON = response.data.results;
        for (let i = 0; i < dataJSON.length; i++) {
            top10CoverHTML.insertAdjacentHTML ('beforeend','<a href="page.html?mId='+dataJSON[i].id+'"><img class="top10Cards" src="https://image.tmdb.org/t/p/w200'+dataJSON[i].poster_path+'"></a>');

            
        }
        

    }).catch(()=>{});

}







trailer();
top10();
trending();
popular();
NowPlaying();
poster();
