"use strict"

let numberOfFilms ;



function start () {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов посмотрели','');
   } 
}

start()

const personalMovieDB = {
    count: {numberOfFilms},
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function shoWDb (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

shoWDb (personalMovieDB.privat);


function writeYourGenres () {
    for ( let i = 1 ; i < 4 ; i ++) {
        const answerGenres = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres[i] = answerGenres;
    }
}
writeYourGenres();

function detectedMovieUserTime () {
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
}
detectedMovieUserTime();



// console.log(personalMovieDB);

// function showFirstMess(Number,text){
//     console.log(Number,text);
//     return;
// }
// showFirstMess(1998,"roCker");

// function Rating(){
//     let a = 150
//     return a ;
// }
// const ShowRating = Rating();
// console.log(ShowRating);

// const Funcktino = function(text,length){
//     console.log(text,length)
// };
// Funcktino('Стульев',12);

// const calc = (a,b) => {
//     return a + b;
// }
//     console.log(calc);

// const Usdcurr = 25;
// const amount = 67;

// function convert (curr,amount) {
//     return curr * amount;
// }
// function promotion (result) {
//     console.log(result)
// }

// const res = convert(500,amount);
// promotion (res);

// function test () {
//     for (let i = 0; i < 10; i++){
//         console.log(i);
//         if (i === 5) return;
//     }
// }
// test()
// var s1 = "2 + 2"; // создаёт строковый примитив
// var s2 = new String("2 + 2"); // создаёт объект String
// console.log(eval(s1)); // выведет число 4
// console.log(eval(s2));
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