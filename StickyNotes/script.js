const createBtn = document.querySelector('#btn')
const appNote = document.querySelector('#note')
const mainBody = document.querySelector('body')
const tOne = document.querySelector('.one')
const tTwo = document.querySelector('.two')
const tThree = document.querySelector('.three')
const tFour = document.querySelector('.four')
const tFive = document.querySelector('.five')
const tSix = document.querySelector('.six')

tOne.addEventListener('click', () => {
    mainBody.classList.add("one");
    mainBody.classList.remove("two");
    mainBody.classList.remove("three");
    mainBody.classList.remove("four");
    mainBody.classList.remove("five");
    mainBody.classList.remove("six");
   
})


tTwo.addEventListener('click', () => {
    mainBody.classList.add("two");
    mainBody.classList.remove("one");
    mainBody.classList.remove("three");
    mainBody.classList.remove("four");
    mainBody.classList.remove("five");
    mainBody.classList.remove("six");
})

tThree.addEventListener('click', () => {
    mainBody.classList.add("three");
    mainBody.classList.remove("two");
    mainBody.classList.remove("one");
    mainBody.classList.remove("four");
    mainBody.classList.remove("five");
    mainBody.classList.remove("six");
    createBtn.style.color = "#000"

})

tFour.addEventListener('click', () => {
    mainBody.classList.add("four");
    mainBody.classList.remove("two");
    mainBody.classList.remove("three");
    mainBody.classList.remove("one");
    mainBody.classList.remove("five");
    mainBody.classList.remove("six");
})
tFive.addEventListener('click', () => {
    mainBody.classList.add("five");
    mainBody.classList.remove("two");
    mainBody.classList.remove("three");
    mainBody.classList.remove("four");
    mainBody.classList.remove("one");
    mainBody.classList.remove("six");
})
tSix.addEventListener('click', () => {
    mainBody.classList.add("six");
    mainBody.classList.remove("two");
    mainBody.classList.remove("three");
    mainBody.classList.remove("four");
    mainBody.classList.remove("five");
    mainBody.classList.remove("one");
})



getNote().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content)
  appNote.insertBefore(noteEl, createBtn)
})

function createNoteEl(id, content) {
  // console.log(id,content);
  const element = document.createElement('textarea')
  element.classList.add('StikcyNotes')
  element.placeholder = 'Add text'
  element.value = content

  // double click to delete
  element.addEventListener('dblclick', () => {
    const warning = confirm('Click OK To Delete Note')
    if (warning) {
      deleteNote(id, element)
    } else {
      str = null
    }
  })
  element.addEventListener('input', () => {
    updateNote(id, element.value)
  })
  return element
}

function deleteNote(id, element) {
  const notes = getNote().filter((note) => note.id != id)
  saveNote(notes)
  appNote.removeChild(element)
}

function updateNote(id, content) {
  const notes = getNote()
  const target = notes.filter((note) => note.id == id)[0]
  target.content = content
  saveNote(notes)
}

function addNote() {
  const notes = getNote()
  // console.log("clicked");
  const noteObj = {
    id: Math.floor(Math.random() * 10000000),
    content: '',
  }
  // create random id and empty string
  // console.log(noteObj);

  const noteEl = createNoteEl(noteObj.id, noteObj.content)
  appNote.insertBefore(noteEl, createBtn)

  notes.push(noteObj)
  saveNote(notes)
}

function saveNote(notes) {
  localStorage.setItem('myAppData', JSON.stringify(notes))
}

function getNote() {
  return JSON.parse(localStorage.getItem('myAppData') || '[]')
}
createBtn.addEventListener('click', addNote)
