// Select all elements with the class name "add-to-wishlist"
const addtoWishlist = document.querySelectorAll('.update-wishlist');

addtoWishlist.forEach((button) => {
	button.addEventListener("click", (e) => {
		e.preventDefault();

		// Get the product id from the button attribute
		const productId = button.dataset.product;

		// If user is authenticated
		if (user !== "AnonymousUser") {

            const csrfToken = getCookie("csrftoken");

            fetch('/update-wishlist/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrfToken  
                },
                body: JSON.stringify({productId}) 
            })

            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                if (data.success) {
                    // Product was successfully added to wishlist
                    alert('Product added to wishlist.');
                } 
                else {
                    // Something went wrong while adding the product to wishlist
                    alert(data.error);
                }
            });
		}
        else {
			// window.location.href = "/login";
            alert('You must be logged in to add products to your wishlist.');
		}
        // Update the action attribute of the button to "add_to_cart"
        button.setAttribute("action", "/update-wishlist/");
        button.setAttribute("data-action", "add-to-cart");
	});
});


// // AJAX request function
// function updateUserWishlist(productId) {
// 	// AJAX settings
// 	const url = "/update-wishlist/";
// 	const data = {
// 		productId: productId,
// 	};

// 	const csrfToken = getCookie("csrftoken");

// 	// AJAX call
// 	fetch(url, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 			"X-CSRFToken": csrfToken,
// 		},
// 		body: JSON.stringify(data),
// 	})
// 		.then((response) => response.json())
// 		.then((data) => {
// 			location.reload();
// 		})
// 		.catch((error) => {
// 			console.error("Error:", error);
// 		});
// }

// // Helper function to get cookie by name
// function getCookie(name) {
// 	// Split cookie string and get value
// 	return document.cookie
// 		.split("; ")
// 		.find((row) => row.startsWith(name))
// 		.split("=")[1];
// }
