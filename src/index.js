// write your code here

/*
Core Deliverables
As a user, I can:

- See all ramen images in the div with the id of ramen-menu. 
    When the page loads, request the data from the server to get all the ramen objects. 
    Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
- Click on an image from the #ramen-menu div and see all the info about that ramen displayed 
    inside the #ramen-detail div and where it says insert comment here and insert rating here.
- Create a new ramen after submitting the new-ramen form. The new ramen should be added to 
    the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh 
    the page, it's okay that the new ramen is no longer on the page.
*/


// fetch the data from the server using async await method
let fetchAsync = async () => {
    // put code in a try catch to catch errors
    try {
        // requesting data from server
        const request = await fetch('http://localhost:3000/ramens')

        // making data into json file
        const response = await request.json()

        //console.log(response)

        // connect the fetch request image data to the img element
        // using a for each loop that iterates through the array of objects
        response.forEach((element, i) => {
            createImgElement(response[i].image)

        })
    }
    catch(error) {
        console.log(':(')
    }
}
fetchAsync()

let createImgElement = (img) => {
    // access the <div> element where ramen images are stored
    let imgContainer = document.querySelector('#ramen-menu')

    // create an img element
    let imgRamen = document.createElement('img')

    // append the image passed in to the element
    imgRamen.src = img

    // append the image of the ramen to the <div> element
    imgContainer.appendChild(imgRamen)
}

let imageContainer = document.querySelector('#ramen-menu')

// access the ramen menu <div>
let images = document.querySelectorAll('#ramen-menu img')
//console.log(images)

// iterate through the image elements
let arrImg = [...images]
//console.log(arr)

// get the value of which image was clicked on


// use that value to access the rest of the information in the object


// add an event listener to the <div> when the image is clicked
imageContainer.addEventListener('click', (event) => {
    //let objID = imag

    console.log(event.target)
})

// need to learn more about methods from communicating with the server before continuing
