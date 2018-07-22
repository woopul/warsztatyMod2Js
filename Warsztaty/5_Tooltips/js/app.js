/*
 <span class="tooltipText">Text tooltipa</span>
 */

var itemsToToolTip = document.querySelectorAll('.tooltip');
console.log(itemsToToolTip);

itemsToToolTip.forEach(function (item) {
    //tworzę nowy element w ktorym bedzie się wyswietlal tootip
    var newSpanTooltip = document.createElement('span');
    //dodaje do utworzonego tooltipa klasę tooltipText
    //gdzie jest ostylowany w pozycje/border/ czcionke
    newSpanTooltip.className = 'tooltipText';

    //dodaje do tooltipa text zamkniety w datasecie obiektu do tooltiplowania
    newSpanTooltip.innerHTML = item.dataset.text;

    item.addEventListener('mouseover', function () {
        this.appendChild(newSpanTooltip);
    });

    item.addEventListener('mouseout', function () {
        this.removeChild(newSpanTooltip);
    });
});