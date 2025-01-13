const notesList = []
const allNotes = document.getElementById('allNotes');


const note = {
    description: "hello world",
    createdDate: "06-01-2025",
    subject: "Test"
};

notesList.push(note);

console.log(notesList);


function displayNotes(){
    allNotes.innerHTML = '';

    // Loop through the notes and pass their index to the display function
    notesList.forEach((note, index) => {
        addNotesToSummary(note, index + 1);
    });
}

displayNotes();

function addNote(){
    const noteHeader = document.getElementById('noteHeader');
    const noteArea = document.getElementById('newNoteArea');

    const newNote = {
        description: noteArea.value,
        createdDate: Date(),
        subject: noteHeader.value
    }

    addNotesToSummary(newNote, notesList.length + 1);

    notesList.push(newNote);


}

function deleteNote(i) {
    alert(`delete ${i}`);

    notesList.splice(i-1, 1);
     // Re-render the notes on the page
    allNotes.innerHTML = ''; // Clear the current notes
    displayNotes();
}

function addNotesToSummary(note, i){
    const {description, createdDate} = note // this is destructuring 
    let noteHtml = `<p>${i})</p><p> ${description}</p><p>${createdDate}</p>
                    <button class="edit" title="edit button" onClick="editNote(${i})">Edit</button>
                    <button class="delete" title="delete button" onClick="deleteNote(${i})">Delete</button>
                    `
    allNotes.insertAdjacentHTML('beforeend', noteHtml);
}

function editNote(i){
    try {
        const noteData = notesList[i-1]; // Get the note data
    

        let noteform = `<form>
                    <p>${i})</p><p> ${noteData.description}</p><p>${noteData.createdDate}</p>
                    <label for='noteHeader'>Subject:</label>
                    <input type="text" name="header" autocomplete="off" id="editSubject" placeholder="${noteData.subject}">
                    <textarea title="editNote" autocomplete="off" id="editDescription" autocapitalize="words">${noteData.description}</textarea>
                    <button class="save" title="save button" onClick="save(${i})">Save</button>
                    <button class="delete" title="delete button" onClick="deleteNote(${i})">Delete</button>
                </form>`
    
        
        allNotes.innerHTML = noteform;  
    } catch (error) {
      alert("Failed to retrieve note information.");  
    }   
}

function save(i) {
   const subject = document.getElementById('editSubject').value;
   const description = document.getElementById('editDescription').value;
   const note = notesList[i-1];

   note.description = description;
   note.subject = subject;

   displayNotes();
}


// pagination 
// caching 
// clock
// notepad styling 



// destructing 
/* Renaming Variables:
You can assign properties to variables with different names. */
/* const user = {
    username: "jackie123",
    email: "jackie@example.com"
};

const { username: userName, email: userEmail } = user;

console.log(userName);  // "jackie123"
console.log(userEmail); // "jackie@example.com" */

/* Default Values:
You can set default values for properties that may not exist.
const settings = { theme: "dark" };

const { theme, language = "English" } = settings;

console.log(theme);    // "dark"
console.log(language); // "English"
 */

/*  Function Parameter Destructuring
Destructuring can be used directly in function parameters to extract values.
function greet({ name, age }) {
    return `Hello, ${name}. You are ${age} years old.`;
}

const person = { name: "Alice", age: 25 };

console.log(greet(person)); // "Hello, Alice. You are 25 years old." */