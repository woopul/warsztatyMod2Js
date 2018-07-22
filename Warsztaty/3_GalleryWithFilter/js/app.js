

document.addEventListener('DOMContentLoaded', function () {

    var allImg = document.querySelectorAll("#gallery img"),
        hideBtn = document.querySelector('#hideButton'),
        showBtn = document.querySelector('#showButton'),
        showAllBtn = document.querySelector('#showAll')
        input = document.querySelector('#tagInput');


    hideBtn.addEventListener('click', function () {
        var inputValue = input.value;
        input.value = "";
        console.log(inputValue);
        allImg.forEach(function (element) {
            if(element.dataset.tag.indexOf(inputValue)>=0){
                console.log(element.dataset.tag);
                // element.className = "invisible";
                element.classList.add('invisible');
            } else {
                element.className = "";
            }
        });
    });

    showBtn.addEventListener('click', function () {
        var inputValue = input.value;
        input.value = "";
        console.log(inputValue);
        //tworzę tablice na wartości tagów dla obrazka
        var imageTags = [];
        allImg.forEach(function (element) {
            //
            if(element.dataset.tag.indexOf(inputValue)>=0){
                console.log(element.dataset.tag);
                element.className = "";
            } else {
                element.className = "invisible";
            }


        });
    });

    showAllBtn.addEventListener('click', function () {
        allImg.forEach(function (image) {
            image.className = "";
        })
    })


})



