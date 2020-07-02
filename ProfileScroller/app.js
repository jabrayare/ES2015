const data = [
  {
    name: "John Doe",
    age : 23,
    gender: 'male',
    lookingfor: 'female',
    location: 'Columbus OH',
    img: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: "Jane Smith",
    age : 33,
    gender: 'female',
    lookingfor: 'male',
    location: 'Clinton OH',
    img: 'https://randomuser.me/api/portraits/women/42.jpg'
  },
  {
    name: "Jamila",
    age : 21,
    gender: 'female',
    lookingfor: 'male',
    location: 'Minneapolis MN',
    img: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
  {
    name: "Farah Ali",
    age : 19,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    img: 'https://randomuser.me/api/portraits/men/12.jpg'
  }
];
const profiles = profileIterator(data);
nextProfile();
// next Event.
document.getElementById('next').addEventListener('click',nextProfile);
function nextProfile(){
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined){
  document.getElementById('imageDisplay').innerHTML = `
  <img src = "${currentProfile.img}">
  `;
  document.getElementById('profileDisplay').innerHTML = `
   <ul class = "list-group">
   </ul>
   <li class = "list-group-item"> Name: ${currentProfile.name}</li>
   <li class = "list-group-item"> Age: ${currentProfile.age}</li>
   <li class = "list-group-item"> Gender: ${currentProfile.gender}</li>
   <li class = "list-group-item"> Interested in: ${currentProfile.lookingfor}</li>
   <li class = "list-group-item"> Lives: ${currentProfile.location}</li>
  `
  }
  else{
    // Reload the Window.
    window.location.reload();
  }
}

function profileIterator(profiles){
  let nextIndex = 0;
  return {
    next: function(){
      return nextIndex < profiles.length ?
      {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  } 
}


