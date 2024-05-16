
// import {getDatabase} from "https://app-c7177-default-rtdb.europe-west1.firebasedatabase.app/"

function saveList() {
  const listInput = document.getElementById('listInput');
  const savedLists = document.getElementById('savedLists');
  
  if (listInput.value.trim() !== '') {
      const newList = document.createElement('li');
      newList.textContent = listInput.value;
      newList.addEventListener('click', function() {
          this.remove();
      });
      savedLists.appendChild(newList);
      listInput.value = '';
  } else {
      alert('Please enter a valid list item.');
  }
}