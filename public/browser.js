console.log('Fronted ishga tushdi')

function itemTemplate(goal) {
    return  `<li class="list_item">
                    <span class="goal_name">${goal.reja}</span>
                    <div class="inner_form">
                        <button class="editMe_btn3" 
                                data-id = "${goal._id}"
                                type="button">Edit</button>
                        
                        <button class="deleteMe_btn2" 
                                data-id = "${goal._id}"
                                type="button">Delete</button>
                    </div>
                </li>  `
}

let Input1 = document.querySelector('.input1');

document.querySelector('.main_form').addEventListener('submit', function(e) {
    e.preventDefault();
    const new_reja = Input1.value;
    axios.post('/create_item1', {MIT_REJA: new_reja})
    .then((responce) => {
        document.querySelector('.list').insertAdjacentHTML('beforeend', itemTemplate(responce.data))
    })
    .catch((err) => {
        console.log('Please Try Again');
    })
    Input1.value = "";
    Input1.focus(); 
})


document.addEventListener("click", function(e) {
    if (e.target.classList.contains("deleteMe_btn2")) {
        const id = e.target.getAttribute("data-id");

        axios.post(`/delete/${id}`)
            .then((response) => {
                e.target.closest("li").remove();
            })
            .catch((err) => {
                console.log("Delete error");
            });
    }
});


