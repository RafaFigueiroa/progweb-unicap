// elementos html
const lista = document.getElementById("lista");
const inputDescricao = document.getElementById("inputDescricao");
const btAdd = document.getElementById("btAdd");

//conexão com o back4app
const taskUrl = "https://parseapi.back4app.com/classes/Task";
const headers = {
  "X-Parse-Application-Id": "hm7x009C0XKzmVM25gXcf7bH8S6PY4aOiwed7rDp",
  "X-Parse-REST-API-Key": "fMHwudLG3LFjQDfcoOs6G6N5cYVip070BrElEoR6",
};

//reescreve a lista sempre q atualizada
const renderizaLista = (lista, tarefas) => {
  lista.innerHTML = "";
  tarefas.forEach((tarefa) => {
    //checkbox
    const checkboxTask = document.createElement("input");
    checkboxTask.type = "checkbox";
    checkboxTask.classList.add("checkbox");
    checkboxTask.onclick = () => updateTask(tarefa);

    //nome da task
    const itemText = document.createTextNode(tarefa.description);
    
    //bt excluir
    const buttonDelete = document.createElement("button");
    buttonDelete.classList.add("btExcluir");
    buttonDelete.innerHTML = "x";
    buttonDelete.onclick = () => deleteTask(tarefa.objectId);

    const listItem = document.createElement("li");

    if(tarefa.done) {
      checkboxTask.checked = true;
      listItem.classList.add("done");
    }
    else{
      listItem.classList.add("to-do");
    }

    listItem.appendChild(checkboxTask);
    listItem.appendChild(itemText);
    listItem.appendChild(buttonDelete);
    
    lista.appendChild(listItem);
  });
};

// acessa as informações do back4app
const getTasks = () => {
  fetch(taskUrl, { headers: headers })
    .then((res) => res.json())
    .then((data) => {
      renderizaLista(lista, data.results);
    });
};

//adiciona task
const handleBtAddClick = () => {
  const description = inputDescricao.value;
  if (!description) {
    alert("É necessário digitar uma descrição!");
    return;
  }
  btAdd.disabled = true;
  fetch(taskUrl, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description: description }),
  })
    .then((res) => res.json())
    .then((data) => {
      getTasks();
      btAdd.disabled = false;
      inputDescricao.value = "";
      inputDescricao.focus();
      console.log("data", data);
    })
    .catch((err) => {
      btAdd.disabled = false;
      console.log(err);
    });
};

//apaga task
const deleteTask = (id) => {
  fetch(`${taskUrl}/${id}`, {
    method: "DELETE",
    headers: headers,
  })
    .then((res) => res.json())
    .then((data) => {
      getTasks();
      console.log("data", data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//atualiza task
const updateTask = (task) => {
  fetch(`${taskUrl}/${task.objectId}`, {
    method: "PUT",
    headers: headers,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ done: !task.done }),
  })
    .then((res) => res.json())
    .then((data) => {
      getTasks();
      console.log("data", data);
    })
    .catch((err) => {
      console.log(err);
    });
};

getTasks();

btAdd.onclick = handleBtAddClick;
