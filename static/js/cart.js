var updateBtn = document.getElementsByClassName('update-cart')

for( var i=0; i<updateBtn.length; i++){
    updateBtn[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'action:', action)

        console.log('USER:', user)

        if (user === 'AnonymousUser'){
            console.log('Not Logged In!')
        }
        else{
            updateUserOrder(productId, action)
        }
    })
}

function updateUserOrder(productId, action){
    console.log('User is logged in as', user)

    var url = '/update-item/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body:JSON.stringify({'productId': productId, 'action': action })
    })

    .then((response) => {
        return response.json()
    })

    .then((dataset) => {
        console.log('data:', dataset)
        location.reload()
    })
}