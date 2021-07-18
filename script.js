// let date=new Date().toDateString() + " " + new Date().toLocaleTimeString();
// console.log(date);

var notes=[];
notes=JSON.parse(localStorage.getItem('notes'));
console.log(notes);
showNotes(notes);
function showNotes(notes) 
{
    const notesElement=document.getElementById('notes');
    for(let i=0;i<notes.length;i++)
    {
        const note=document.createElement('div');
        note.classList.add('note');
        note.addEventListener('click', function(){
            window.location=`editNote.html?id=${notes[i].id}`;
        });
        notesElement.appendChild(note);

        const body=document.createElement('div');
        body.innerHTML=notes[i].body;
        note.appendChild(body);

    }
}

console.log(notes);

function add()
{
    window.location='index.html';
    const newNote=document.getElementById('note').value;
    const d=new Date().toDateString() + " " + new Date().toLocaleTimeString();
    console.log(newNote);
    if(!notes)
        notes=[];
    notes.push({id:Date.now(), body:newNote, createdAt:d, updatedAt:d});
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));
}

function sort(value)
{
    console.log(value);
    document.getElementById('notes').innerHTML="";
    let x=notes;
    switch (Number(value))
    {
        case 1:
            x.sort((note1,note2)=>(new Date(note2.createdAt))-(new Date(note1.createdAt)));
            showNotes(x);
            break;
        
        case 2:
            x.sort((note1,note2)=>(new Date(note2.updatedAt))-(new Date(note1.updatedAt)));
            showNotes(x);
            break;

        default:
            break;
    }
}


function search(value) 
{
    document.getElementById('notes').innerHTML="";
    const filteredNotes=notes.filter(note=>note.body.includes(value));
    showNotes(filteredNotes);

}
