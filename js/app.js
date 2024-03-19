let taskList = document.getElementById('taskList')

function addTask (){
    let taskInput = document.getElementById('taskInput')
    let taskText = taskInput.value

    //Si il n'y a rien d'écrit dans l'input, alors ne rien faire
    if(taskText === "") {
        return;
    }

    //Créer un nouvel élément li qui a pour valeur le texte écrit dans l'input
    let li = document.createElement('li')
    li.innerHTML=taskText;

    //Configuration d'un bouton qui exécute une fonction pour modifier la tâche
    let editButton = document.createElement('button');
    editButton.innerHTML = '<ion-icon name="pencil-outline" class="modify"></ion-icon>';
    editButton.onclick = function (){
        editTask(li)
    }

    //Configuration d'un bouton qui exécute une fonction pour supprimer la tâche
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
    deleteButton.onclick = function(){
        deleteTask(li)
    }

    //Création des boutons dans l'élément li
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    //Ajout de l'élément li
    taskList.appendChild(li);

    //Suppression de la value dans l'input suite à l'ajout d'un li
    taskInput.value = "";
}

//Fonction pour modifier l'élément li
function editTask (task){
    let taskTextElement = task.firstChild;
    let taskText = taskTextElement.textContent;

    //Affiche un prompt pour modifier la tâche
    let newTaskText = prompt('Modifier la tâche :', taskText);

    //Si l'utilisateur appuie sur Annuler ou que la value ne contient rien, on ne fait rien
    if(newTaskText === null || newTaskText === ""){
        return;
    }

    taskTextElement.textContent = newTaskText;
}

//Fonction pour supprimer l'élément li
function deleteTask (task){
    taskList.removeChild(task);
}