const updateCart = document.querySelectorAll('.update-cart')

for( var i=0; i<updateCart.length; i++){
    updateCart[i].addEventListener('click', function(e){
        e.preventDefault()
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'action:', action)

        console.log('USER:', user)

        if (user === 'AnonymousUser'){
            addCookieItem(productId, action)
        }
        else{
            updateUserOrder(productId, action)
        }
    })
}

function addCookieItem(productId, action){
    console.log('User Not Authenticated!')

    if(action == 'add'){
        if(cart[productId] == null){
            cart[productId] = {'quantity': 1}
        }
        else{  
            cart[productId]['quantity'] += 1
        }
    }
    else if(action == 'remove'){
        cart[productId]['quantity'] -= 1
        if(cart[productId]['quantity'] <= 0){
            console.log('Item Removed!')
            delete cart[productId]
        }
    }
    //console.log('Cart:', cart);
    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
    location.reload()
}

function updateUserOrder(productId, action){
    console.log('User is logged in as', user)

    const url = '/update-item/'

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