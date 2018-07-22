
//NIE DZIAŁA NIE MA SELECTORA PARENT
// var allLiWithUlChild = document.querySelectorAll('li<ul');
var mainLi = document.querySelectorAll('.nav>ul>li');

console.log(mainLi);

mainLi.forEach(function (menuElement) {
    var scroledMenu = menuElement.querySelectorAll('li');

    menuElement.addEventListener('mouseover', function () {
        // debugger;
        if (scroledMenu.length > 0) {
            this.querySelector('ul').style.display = 'inline-block';
        }
    })

    menuElement.addEventListener('mouseout', function () {
        if (scroledMenu.length > 0) {
            this.querySelector('ul').style.display = 'none';
        }
        console.log('MOUSE OUT');
    })
})


// NIE MA SELECTORA PARENT :((((

// allLiWithUlChild.forEach(function (listElement) {
//     listElement.addEventListener('mouseover', function () {
//         this.querySelector('ul').style.display = 'inline-block'
//     });
//     listElement.addEventListener('mouseover', function () {
//         this.querySelector('ul').style.display = 'none'
//     })
// })