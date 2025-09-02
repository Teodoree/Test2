"use strict"

const numberOfFilms = +prompt('Сколько фильмов посмотрели','');

const personalMovieDB = {
    count: {numberOfFilms},
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count.numberOfFilms < 10) {
    console.log('Довольно мало фильмов вы видели!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count.numberOfFilms < 30 ) {
    console.log("Вы классический зритель!Поздравляю");
} else if (personalMovieDB.count.numberOfFilms >= 30) {
    console.log('Вы киноман!Долгожданная коллеция в пути!');
} else {
    console.log('Erorsing');
}
    // personalMovieDB.movies[a] = b;
    // personalMovieDB.movies[c] = d;

// for(let i = 0; i <= 1 ; i++){
//     const a = prompt('Последний просмотренный фильм?', ''),
//         b = prompt('Твоя оценка?', +'');
//             if(a != null && b != null && a != '' && b != '' && a != a.length < 50){
//                 personalMovieDB.movies[a] = b;
//                 console.log('Done')
//             }else{
//                 alert('Вы ничего не ввели,или содержит более 50 символов')
//                 console.log('Eror')
//                 i--;
//             }
// };

var x = '';
while(x < 2){
    let film = prompt('Последний просмотренный фильм?', '');
    let rating = prompt('Твоя оценка?','');
    if(film != null && rating != null && film != '' && rating != ''&& film.length < 50){
        personalMovieDB.movies[film] = rating;
    } else{
                alert('Вы ничего не ввели,или содержит более 50 символов')
                console.log('Eror')
                x--;
            }
    x++;
}

console.log(personalMovieDB);