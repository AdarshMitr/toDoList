const item=document.querySelector('#item')
const toDoBox=document.querySelector("#toDoBox")

item.addEventListener('keyup',function(event){
    if (event.key=='Enter'){
        addToDo(this.value)
        this.value=''
    }
})

const addToDo=(item)=>{
    const listItem=document.createElement('li');
    listItem.innerHTML=`
    ${item}
    <span id="del">&#10006</span>
    `;
    listItem.addEventListener(
        'click',
        function(){
            this.classList.toggle('done');
        }
    )
    listItem.querySelector('#del').addEventListener(
        'click',
        function(){
            listItem.remove();
        })
    toDoBox.appendChild(listItem);
}