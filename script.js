document.querySelector("#add").onclick = function () {
  if (document.querySelector("#to-do").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector(".todolist").innerHTML += `
<li class="todoshtuka">
<input type="checkbox" name="check" id="check" />
<p class="todoname">${document.querySelector("#to-do").value}</p>
<button class="delete">
<ion-icon name="trash"></ion-icon>Delete
</button>
</li>
        `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
