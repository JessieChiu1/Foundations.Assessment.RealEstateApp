//========================
//#Data construction
//========================

//test - creating class Listing - passed
const currentListing = new Listing();

//test - creating property - passed
// const newHouse = new Property("asfas","House","brooklyn","NY");
// console.log(newHouse);

//test - addProperty - passed
//test - render for property - passed
// currentListing.addProperty(newHouse);

//test - render for listing - passed
// const newApartment = new Property("fasdfsa","Apartment","brooklyn","NY");
// currentListing.addProperty(newApartment);
// console.log(currentListing);
// const x = currentListing.render();
// const display = document.querySelector(".display");
// display.replaceChildren(x);

// ============
// #Add Listing
// ============

const addListing = (listing) => {
    const addBtn = document.querySelector(".addBtn");
    
    addBtn.addEventListener("click", () => {
        const address = document.querySelector(".address").value;
        const type = document.querySelector(".typeSelect").value;
        const city = document.querySelector(".city").value;
        const state = document.querySelector(".state").value;

        //guard against bad entry
        if(address === "" || city === "" || state === ""){
            alert("Please enter a valid property");
        }else {
            //constuct the property class object
            const dummyProperty = new Property(address,type,city,state);
            //add the property to the listing
            listing.addProperty(dummyProperty);
            console.log(listing);
            //re-render
            renderApp(listing);
        }   
    })
}


// ============
// #render All
// ============

/**
 * render everything TO HTML
 * @return everytime this render, it will activate button feature and render bookshelf
 */  
renderApp = (listing) => {
    console.log(listing);
    //activating add property feature
    addListing(listing);
    
    //other event 

    //rendering bookshelf
    const display = document.querySelector(".display");
    display.replaceChildren(listing.render());
}

// rendering base page
renderApp(currentListing);