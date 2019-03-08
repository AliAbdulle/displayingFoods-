const bulidToDam = document.querySelector(".container")

const blockToDom = (listsContainer) => {
    return `
    <div class="listDom"> 
    <h2>${listsContainer.name} </h2>
    <h4> ${listsContainer.category}</h4>
        <h4> ${listsContainer.name}</h4>  
    </div>
    `
}

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(list => {
            bulidToDam.innerHTML += blockToDom(list)

        });
    })