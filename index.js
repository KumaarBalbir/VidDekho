
    //  Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
      apiKey: "AIzaSyBebaVuhaBZ_6ZNadXz4YUwnpoSa2n7MHA",
      authDomain: "viddekho-e92a6.firebaseapp.com",
      projectId: "viddekho-e92a6",
      storageBucket: "viddekho-e92a6.appspot.com",
      messagingSenderId: "543481899635",
      appId: "1:543481899635:web:8c0600130e2b7fe7635806",
      measurementId: "G-ZEK5G6FQTE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   
    // making reference for firestore
    
    const db= firebase.firestore();
    
//firestore database code
const linkList=document.querySelector('#link-list');
const form=document.querySelector('#add-vid-links');




//create element and render link
function renderlink(doc) {
  let li=document.createElement('li');
  let genre=document.createElement('span');
  let link=document.createElement('span');
  let cross=document.createElement('button');

  li.setAttribute('data-id',doc.id);
  genre.textContent=doc.data().genre;
  link.textContent=doc.data().link;
  cross.textContent='delete';

  li.appendChild(genre);
  li.appendChild(link);
  li.appendChild(cross);

  linkList.appendChild(li);

       //deleting data
       cross.addEventListener('click',(e)=>{
        e.stopPropagation();
        let id=e.target.parentElement.getAttribute('data-id');
        db.collection('categorised').doc(id).delete();
        })
  
}

//getting data from database
// db.collection('categorised video').orderBy('genre').get().then((snapshot) =>{
//   snapshot.docs.forEach(doc => {
//     renderlink(doc);   
//   });
// });

//saving data manually
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  db.collection('categorised').add({
    genre: form.genre.value,
    link: form.link.value
  });
  form.genre.value='';
  form.link.value='';
});

//real time listener

db.collection('categorised').orderBy('genre').onSnapshot(snapshot=>{
  let changes=snapshot.docChanges();
  changes.forEach(change=>{
    if(change.type=='added')
    {renderlink(change.doc);}
    else if(change.type=='removed')
    {
      let li=linkList.querySelector("[data-id=' + change.doc.id + ']"); 
        
        linkList.removeChild(li);   
        
              }
  })
})