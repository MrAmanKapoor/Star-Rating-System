ratings = {
    Pizza: 1.5,
    Samosa: 3.8,
    Pani_Puri: 5,
    Pasta: 0
}

totalRating = 5;
table = document.querySelector('.table');
selectInput = document.getElementById('selectInput');
ratingInput = document.getElementById('ratingInput');

let phoneNames;
selectInput.addEventListener('change', function(e) {
    phoneNames = e.target.value;
    ratingInput.disabled = false;
    ratingInput.value = ratings[phoneNames];

})

ratingInput.addEventListener('change', function(e) {
    ratingsinInput = e.target.value;
    ratings[phoneNames] = ratingsinInput;
    rateIt()
})







function rateIt() {

    for (rating in ratings) {
        ratingPercentage = ratings[rating]*100 / totalRating;
        console.log("Rating$"+ ratingPercentage);
        star = table.querySelector(`.${rating} .inner-star`);
        numberRating = table.querySelector(`.${rating} .numberRating`);
        ratingRounded=  ratings[rating]*100 / totalRating + "%";
        star.style.width = ratingRounded;
        numberRating.innerText = ratings[rating];

    }
}

rateIt()






























/*ratings = {
    Pizza: 1.5,
    Samosa: 3.8,
    Pani_Puri: 5,
    Pasta: 0
}

totalRating = 5;
table = document.querySelector('.table');
selectInput = document.getElementById('selectInput');
ratingInput = document.getElementById('ratingInput');

let phoneNames;
selectInput.addEventListener('change', function(e) {
    phoneNames = e.target.value;
    ratingInput.disabled = false;
    ratingInput.value = ratings[phoneNames];

})

ratingInput.addEventListener('change', function(e) {
    ratingsinInput = e.target.value;
    ratings[phoneNames] = ratingsinInput;
    rateIt()
})







function rateIt() {

    for (rating in ratings) {
        ratingPercentage = ratings[rating]*100 / totalRating;
        console.log("Rating$"+ ratingPercentage);
        star = table.querySelector(`.${rating} .inner-star`);
        numberRating = table.querySelector(`.${rating} .numberRating`);
        ratingRounded=  ratings[rating]*100 / totalRating + "%";
        star.style.width = ratingRounded;
        numberRating.innerText = ratings[rating];

    }
}

rateIt() 



ratings = {
    Pizza: 1.5,
    Samosa: 3.8,
    Pani_Puri: 5,
    Pasta: 0
}

totalRating = 5;
table = document.querySelector('.table');
selectInput = document.getElementById('selectInput');
ratingInput = document.getElementById('ratingInput');

let phoneNames;
selectInput.addEventListener('change', function(e) {
    phoneNames = e.target.value;
    ratingInput.disabled = false;
    ratingInput.value = ratings[phoneNames];

})

ratingInput.addEventListener('change', function(e) {
    ratingsinInput = e.target.value;
    ratings[phoneNames] = ratingsinInput;
    rateIt()
})







function rateIt() {

    for (rating in ratings) {
        ratingPercentage = ratings[rating]*100 / totalRating;
        console.log("Rating$"+ ratingPercentage);
        star = table.querySelector(`.${rating} .inner-star`);
        numberRating = table.querySelector(`.${rating} .numberRating`);
        ratingRounded=  ratings[rating]*100 / totalRating + "%";
        star.style.width = ratingRounded;
        numberRating.innerText = ratings[rating];

    }
}

rateIt()*/
