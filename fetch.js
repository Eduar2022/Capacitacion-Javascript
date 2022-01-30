const url = 'https://jsonplaceholder.typicode.com/users'

/*fetch(url, {

    method: 'POST', //GET, POST, PUT, PATCH, DELETE
    headers: {
        'Content-Type': 'application/json',
        'Autorization': 'Bearer acadebeseexistiruntokendeautorizacion'
    },
    body: JSON.stringify({
        name: 'cerdito feliz',
        website: 'google.com'
    })
})*/

const fn = async () => {

   const reponse =  await fetch(url, {
        method: 'POST', //GET, POST, PUT, PATCH, DELETE
        headers: {
            'Content-Type': 'application/json',
            'Autorization': 'Bearer acadebeseexistiruntokendeautorizacion'
        },
        body: JSON.stringify({
            name: 'cerdito feliz',
            website: 'google.com'
        })
    })
    const data = await reponse.json()
    console.log(data)
}

fn()