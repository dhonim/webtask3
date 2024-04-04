

const inputEl = document.getElementById('list_input')
const addBtn = document.getElementById('add')
const todoListEls = document.getElementById('todoList')

let list = JSON.parse(localStorage.getItem('todolist'))
const arr = [];
addBtn.addEventListener('click',()=>{
    // console.log(inputEl.value);
    if(list == null){
       
        arr.push(inputEl.value);
        localStorage.setItem('todolist',JSON.stringify(arr));
        addItemsToList(arr)
    }else{
        list.push(inputEl.value);
        localStorage.setItem('todolist',JSON.stringify(list));
        addItemsToList(list)
    }
    inputEl.value = ''
})


const addItemsToList = (list) =>{
   const fragment = document.createDocumentFragment();

   list.map(item=>{
    const div = document.createElement('div');
    div.className = "px-5 py-3 bg-blue-200 rounded text-xl flex mb-3";
    const label = document.createElement('label')
    label.className = "flex flex-1 items-center space-x-3";
    label.htmlFor = item;
    const input =document.createElement('input')
    input.type = 'checkbox'
    input.className = "accent-blue-500 w-5 h-4";
    input.name = item;
    input.id = item;
    const p =document.createElement('p')
    p.className = 'capitalize'
    p.textContent = item;
    label.append(input,p)
    const deleteBtn = document.createElement('button')
    deleteBtn.className = "px-4 py-2 bg-red-400 rounded text-white"
    deleteBtn.textContent = "delete"
    div.append(label,deleteBtn);
    fragment.append(div)
   })
   todoListEls.innerHTML = ''
   todoListEls.append(fragment)

}

addItemsToList(list||arr)


todoListEls.addEventListener('click',(e)=>{
    const deleteItem = e.target.parentNode.children[0].textContent
    // console.log(e.target.parentNode.children[0].textContent);
    if(e.target.tagName === 'BUTTON'){
        console.log('hello');
       list = list.filter(item => item.toLowerCase() !== deleteItem);
       localStorage.setItem('todolist',JSON.stringify(list));
    }
    addItemsToList(list)
})