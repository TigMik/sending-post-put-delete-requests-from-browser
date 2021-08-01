console.log(14);

fetch("/students", {
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
        name: "andrew"
    }) 
})


// fetch("/students/1", {
//     method: "PUT",
//     headers: {
//         "content-type": "application/json"
//     },
//     body: JSON.stringify({
//         name: "andrew"
//     })
// })

// fetch("/students/1", {
//     method: "DELETE",
// })
