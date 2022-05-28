const loadData = async () => {
    try{
        const url = `https://jsonplaceholder.typicode.com/todos/1`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    }catch(err){
        console.log(errr)
    }
}

loadData()