fetch('/books.json')
    .then(responseStream => {
        if(responseStream === 200){
            return responseStream.json();
        }else{
            throw new Error('Request error')
        }
    })
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log('Error,,, ', err);
    });
