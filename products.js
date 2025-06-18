$(document).ready(() => {
    appendProducts()
})

function appendProducts() {
    let upper = "<div class='flex flex-row'>"
    upper += product('name', 'info', 'price', './images/gomme.jpg')
    upper += product('name 2', 'info', 'price', './images/gomme.jpg')
    upper += product('name 3', 'info', 'price', './images/gomme.jpg')
    upper += product('name 4', 'info', 'price', './images/gomme.jpg')
    upper += "</div>"
    $("#upper").append(upper)

    let lower = "<div class='flex flex-row'>"
    lower += product('name', 'info', 'price', './images/gomme.jpg')
    lower += product('name 2', 'info', 'price', './images/gomme.jpg')
    lower += product('name 3', 'info', 'price', './images/gomme.jpg')
    lower += product('name 4', 'info', 'price', './images/gomme.jpg')
    lower += "</div>"
    $("#lower").append(lower)
}

function product(name, info, price, image) {
    return `
    <div class='m-4 w-[18rem] h-[18rem] rounded-2xl bg-gray-700 text-[3rem] text-white flex justify-center'>
        <div class='bg-gray-600 w-[17rem] h-[17rem] rounded-2xl mt-2'>
            <div>
                <div class='-mt-[1rem] m-2'>${name}</div>
            </div>
            <div>
                <img src="${image}" alt="${name}">
            </div>
        </div>
    </div>
    `
}