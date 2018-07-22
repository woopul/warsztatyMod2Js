/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
var liList = document.querySelectorAll('li'),
    bodyTag = document.querySelector('body');

// console.log(liList, bodyTag);

liList.forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(this);
        var bigDiv = document.createElement('div');
        // var bigPic = document.createElement('img');
        var bigPic = this.querySelector('img').cloneNode(true);
        var closeBtn = document.createElement('button');

        closeBtn.innerText = 'CLOSE';
        bigDiv.className = "fullScreen";
        // bigPic.src = this.src;
        closeBtn.className = 'close';

        bodyTag.appendChild(bigDiv);
        bigDiv.appendChild(bigPic);
        bigDiv.appendChild(closeBtn);


        closeBtn.addEventListener('click',function () {
            bodyTag.removeChild(bigDiv);
        })

    });
})