function getTodos(){
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos'
    })
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
}

document.getElementById('get').addEventListener('click',getTodos);

function addTodo(){
    axios.post('https://jsonplaceholder.typicode.com/todos',{
        title:"New Todo",
        completed:false
    })
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
}

//Put/Patch request------------------
function updateTodo(){
    axios.put('https://jsonplaceholder.typicode.com/todos/1',{
        title:"Updated Todo",
        completed:true
    })
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
}

//Delete request--------------
function removeTodo(){
    axios.delete('https://jsonplaceholder.typicode.com/todos/1')
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
}





