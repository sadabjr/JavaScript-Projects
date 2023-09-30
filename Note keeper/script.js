const addBtn = document.getElementById("add");

const updateLocalStorageData = () => {
    const textareaData = document.querySelectorAll('textarea')
    const notes = [];
    console.log(textareaData)

    textareaData.forEach((note)=>{
        return notes.push(note.value)
    })
    console.log(notes)

    localStorage.setItem('notes', JSON.stringify(notes))
}

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("container");

  const htmlData = `
  <div class="card w-100 h-auto mb-3">
  <div class="card-header bg-danger">
    <div class="float-end">
      <button class="btn btn-light edit"><i class="far fa-edit"></i></button>
      <button class="btn btn-light  delete"><i class="fas fa-trash-alt"></i></button>
    </div>
  </div>
  <div class="card-body">
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="form-control mt-3 ${
      text ? "hidden" : ""
    } " cols="30" rows="5"></textarea>
  </div>
</div>`;

  note.insertAdjacentHTML("afterbegin", htmlData);

  // getting the references
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  // Deleting the card
  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorageData()
    console.log("removed sucessfully");
  });

  // toggle using edit button

  textArea.value = text;
  mainDiv.innerHTML = text;

  editBtn.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
    console.log("working");
  });

  textArea.addEventListener('change', (event) =>{
    const userValue = event.target.value
    console.log(userValue)
    mainDiv.innerHTML = userValue

    updateLocalStorageData()
  } )

  document.body.appendChild(note);
};

// getting data from localStorage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note) => addNewNote(note))}

addBtn.addEventListener("click", () => addNewNote());
