class Property {
    constructor(address,propertyType,city,state){
        this.address = address;
        this.propertyType = propertyType;
        this.city = city;
        this.state = state;
    }

    render(){
        const container = document.createElement("section");
        container.classList.add("propertyContainer");

        const address = document.createElement("article");
        address.textContent = this.address;
        const type = document.createElement("article");
        type.textContent = this.propertyType;
        const city = document.createElement("article");
        city.textContent = this.city;
        const state = document.createElement("article");
        state.textContent = this.state;

        const rmBtn = document.createElement("button");
        rmBtn.textContent = "Remove Listing"
        //add event listener

        container.append(type,address,city,state,rmBtn);

        return container;
    }
}