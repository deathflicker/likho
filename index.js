let state = "down";
let allNotes = document.getElementById('allNotes');
let expandBtn = document.getElementById('expandBtn');
let noteWrite = document.getElementById('noteWrite');
let newNoteCont = document.getElementById('newNoteCont');
let whatColor = '#2c3e50';
let divId = 0;


//Below function controls the upward and downward motion of expand note div
function expandNote(){
    if(state=='down'){
        allNotes.style.borderTopLeftRadius='0px';
        allNotes.style.borderTopRightRadius='0px';
        allNotes.style.height='100%';
        state = 'up';
        expandBtn.innerHTML = 'arrow_drop_down';
    }
    else{
        allNotes.style.borderTopLeftRadius='28px';
        allNotes.style.borderTopRightRadius='28px';
        allNotes.style.height='40%';
        state = 'down';
        expandBtn.innerHTML = 'arrow_drop_up';
    }
}

//when user scrolls way too much, the below div will expand automatically
function expandNoteScroll(){
    if(allNotes.scrollTop>=70){
        if(state=='down'){
            allNotes.style.borderTopLeftRadius='0px';
            allNotes.style.borderTopRightRadius='0px';
            allNotes.style.height='100%';
            state = 'up';
            expandBtn.innerHTML = 'arrow_drop_down';
        }
    }
}


//Below function controls the text color of div
function changeClr(color){
    if(color=='black')
    {
        whatColor = '#2c3e50';
    }
    else if(color=='red'){
        whatColor = '#ff7675';
    }
    else if(color=='green'){
        whatColor = '#00b894';
    }
    else if(color=='yellow'){
        whatColor = '#f1c40f';
    }
    else if(color=='blue'){
        whatColor = '#74b9ff';
    }
    else if(color=='pink'){
        whatColor = '#fab1a0';
    }
    else{
        whatColor = '#d35400';
    }
}


// When user presses add button , a new note is added.
function newNote(){
    if(noteWrite.value!="" && noteWrite.value!=" "){
        divId+=1;
        newNoteCont.innerHTML = newNoteCont.innerHTML+'<div style="border-color: '+ whatColor + '" ' + 'id="div' + divId + '"><label style="color: '+ whatColor + '">' + noteWrite.value + '</label><br><br><button onclick="deleteCurrent('+"'div"+divId+"')"+ '">' + 'Delete</button><br>' +'</div>';
        noteWrite.value='';
    }
    else{
        noteWrite.focus();
    }
}



//Below function removes selected div

function deleteCurrent(whichDiv){
    document.getElementById(whichDiv).remove();
}


//Show my name
function showAbout(){
    window.location.href="https://www.linkedin.com/in/arpan-bhattacharya-153359120/";
}