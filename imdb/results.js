var pop = document.location.href.split('=').pop()
var value = decodeURI(pop)

searchBox.value = value;


function result(){

            axios.get('https://api.themoviedb.org/3/search/multi?api_key='+api+'&language=en-US&query='+pop+'&page=1&include_adult=true')
            .then((response)=>{
                dataJSON = response.data
                console.log(dataJSON)
                
                if (dataJSON.total_results == "0") {
                    document.getElementById('noResult').style.display = 'block';
                }else if(dataJSON.total_results !== "0"){
                 
                    const result = document.getElementById('result');
                    const movieCover = document.getElementById('movieCover');
                    const tvCover = document.getElementById('TvCover');
                    const peopleCover = document.getElementById('peopleCover');
                    
                    for (let i = 0; i < dataJSON.results.length; i++) {
                        if (dataJSON.results[i].media_type == "movie") {
                        
                        document.getElementById('movieResult').style.display= 'block';
                        
                            movieCover.insertAdjacentHTML('afterbegin','<a href="page.html?mId='+dataJSON.results[i].id+'>"<div style="background: url(https://image.tmdb.org/t/p/w200'+dataJSON.results[i].backdrop_path+'); background-size: cover" class="videosCards"></div></a>')

                        
                    }else if (dataJSON.results[i].media_type == "tv"){
                        document.getElementById('tvResult').style.display= 'block';
                            
                            tvCover.insertAdjacentHTML('afterbegin', '<div style="background: url(https://image.tmdb.org/t/p/w200'+dataJSON.results[i].backdrop_path+'); background-size: cover" class="videosCards"></div>')
                           
                        }else if (dataJSON.results[i].media_type == "person"){
                            
                            document.getElementById('peopleResult').style.display= 'block';
                               
                            peopleCover.insertAdjacentHTML('beforeend','<div id="people" class="left"><div style="background: url(https://image.tmdb.org/t/p/w200'+dataJSON.results[i].profile_path+');background-size: cover"class="photo"></div><h6 class="name">'+dataJSON.results[i].name+'</h6><p class="department">Department &nbsp:&nbsp '+dataJSON.results[i].known_for_department+'</p></div>')
                            
                            
         


                        }
                        
                    }
                    



                
                }
            })



}


result();