/*
* 1. znalezienie i przypisanie listy zadan do zmiennej
* 2. przypisanie zdarzenia do przycisku addTusk button
*
*
*
*
*
* */

var taskList = document.querySelector('#taskList'),
    addTaskButton = document.querySelector('#addTaskButton'),
    inputTask = document.querySelector('#taskInput'),
    removeFinished = document.querySelector('#removeFinishedTasksButton');

//ustawienie sylowania listy na żadne
// taskList.style.listStyle = 'none';
// taskList.style.padding = '0';

//po naciśnięciu przycisku dodaj do listy
addTaskButton.addEventListener('click', function () {
    //utworzenie  nowych elementów z zadaniem - tytuł zadania wraz
    //z przyciskami do usunięcia, i oznaczenia jako zrobione
    var newTaskField = document.createElement('li'),
        newTaskTitle = document.createElement('h1'),
        newTaskDeleteBtn = document.createElement('button'),
        newTaskCompleteBtn = document.createElement('button');

    // dodanie tyltułu zadania takiego jak wartość inputu
    newTaskTitle.innerText = inputTask.value;
    //nowy przycisk usuń , dodanie do niego zdarzenia, które usuwa dane zadanie
    newTaskDeleteBtn.innerText = 'Remove';
    newTaskDeleteBtn.addEventListener('click', function () {
        taskList.removeChild(newTaskField);
    });
    //przycisk "ukończone" - oznacza h1 na czerwono, a po ponownym wciśnięciu odznacza
    newTaskCompleteBtn.innerText = 'Complete';
    newTaskCompleteBtn.style.margin = '0 10px 0 0'
    newTaskCompleteBtn.addEventListener('click', function () {
        if (newTaskTitle.className !== 'completed') {
            newTaskTitle.className = 'completed';
        } else
            newTaskTitle.className = '';
    });

    //dodanie tytułu wraz z przyciskami do pola zadania(li)
    newTaskField.appendChild(newTaskTitle);
    newTaskField.appendChild(newTaskCompleteBtn);
    newTaskField.appendChild(newTaskDeleteBtn);

    //dodanie nowego pola do całej listy
    taskList.appendChild(newTaskField);
})

// przycisk "Remove all" - usuwanie wszystkich ukończonych zadań z listy
removeFinished.addEventListener('click', function () {
    //wybranie wszystkich istniejacych na chwile obecna zadań
    var currentList = taskList.querySelectorAll('li');

    //sprawdzenie które mają klasę completed i usunięcie go
    currentList.forEach(function (task) {
        //znalezienie tytułu danego zadania
        var tasktitle = task.querySelector('h1');
        //jeżeli zadanie ma klasę 'completed' - usuń z listy
        if (tasktitle.className === 'completed') {
            taskList.removeChild(task);
        }
    });
});