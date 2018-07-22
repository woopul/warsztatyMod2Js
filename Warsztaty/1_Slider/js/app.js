var prevBtn = document.querySelector('#prevPicture'),
    nextBtn = document.querySelector('#nextPicture'),
    pictureList = document.querySelectorAll('.slider li'),
    currentIndex = 0;

console.log(prevBtn);
console.log(nextBtn);
console.log(pictureList);

pictureList[currentIndex].className = "visible";

prevBtn.addEventListener('click', function () {
    if(currentIndex > 0){
        pictureList[currentIndex].className = "";
        currentIndex--;
        pictureList[currentIndex].className = "visible";
    }

    if(currentIndex === 0){
        pictureList[currentIndex].className = "";
        currentIndex = pictureList.length-1;
        pictureList[currentIndex].className = "visible";
    }
    console.log(currentIndex);
});

nextBtn.addEventListener('click', function () {
    if(currentIndex < pictureList.length-1){
        pictureList[currentIndex].className = "";
        currentIndex++;
        pictureList[currentIndex].className = "visible";
    }
    if(currentIndex === pictureList.length-1){
        pictureList[currentIndex].className = "";
        currentIndex = 0;
        pictureList[currentIndex].className = "visible";

    }
    console.log(currentIndex);
});

