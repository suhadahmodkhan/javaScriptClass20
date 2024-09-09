const showAll = () => {
  const inputField = document.getElementById("search-field")
  const searchText = inputField.value ;
  console.log(searchText)
  fetchData(searchText,true)

}

const searchText = () => {
    const inputField = document.getElementById("search-field")
    const searchText = inputField.value ;
    console.log(searchText)
    fetchData(searchText)
}

const fetchData = (searchText , showAll = false) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
.then(response => response.json())
.then(data => loadData(data.data, showAll))
} 

const loadData = (data ,show) => {
    console.log(show)
    let phones = data ;
    const showAll = document.getElementById("showall")
    const container = document.getElementById("container")
    container.innerHTML = '' ;
  if( phones.length > 6 ){
    if(show  !==  true ){
      phones = phones.slice(0,6)
      showAll.classList.remove("hidden")
    }
    else {
      phones = phones
      showAll.classList.add("hidden")
    }

  }
    phones.forEach(phone => {
        console.log(phone)
        
        const div = document.createElement("div")
        div.innerHTML =` 
         <div class="card bg-base-100 w-60 shadow-xl"  >
                    <figure>
                      <img
                        src="${phone.image}"
                        alt="phones image" />
                    </figure>
                    <div class="card-body text-center">
                      <h2 class="card-title text-center flex justify-center">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <p>$999</p>
                      <div class="card-actions justify-center">
                        <button class="btn btn-primary"  onclick="my_model_2.showModal()" >Show Details</button>
                          <dialog id="my_model_2" class="modal">
          <div class="modal-box">
            <h3 class="text-lg font-bold">Hello! ${phone.slug}</h3>
            <p class="py-4">Press ESC key or click outside to close</p>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
                      </div>
                    </div>
                  </div>`
                    container.appendChild(div)
    }) };

