function getTodos(){
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/todos'
    })
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
}

document.getElementById('get').addEventListener('click',getTodos);






