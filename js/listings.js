class Listing {
    constructor(){
        this.listing = [];
    }

    addProperty(property) {
        this.listing.push(property);
    }

    render(){
        //create listing container
        const container = document.createElement("section");
        container.classList.add("ListingContainer");
        //render all the property in a given listing
        for(const property of this.listing){
            const propertyRendered = property.render();
            container.append(propertyRendered);
        }

        return container;
    }
}