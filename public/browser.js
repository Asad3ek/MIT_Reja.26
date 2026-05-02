console.log('Fronted ishga tushdi')

function itemTemplate(goal) {
    return  `<li class="list_item">
                    <span class="goal_name">${goal}</span>
                    <div class="inner_form">
                        <button class="editMe_btn3" 
                                data-id = "${goal._id}"
                                type="submit" class="edit_btn3">Edit</button>
                        
                        <button class="deleteMe_btn2" 
                                data-id = "${goal._id}"
                                type="submit" class="delete_btn2">Delete</button>
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
    Input1.focus; 
})


