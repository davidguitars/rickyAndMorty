const getApi = () => {
    fetch('https://rickandmortyapi.com/api/character') //api for the get request
        .then(response => response.json())
        .then(data => { printData(data) });

}


const printData = (data) => {

    let html = '';
    data.results.forEach(c => {
        html += '<div class="" >';
        html += '<div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >'
        html += `<img  src="${c.image}" class="h-80 w-72 object-cover rounded-t-xl" alt="Sunset in the mountains>`
        html += '<div class="px-4 py-3 w-72">'
        html += `<p class="text-gray-400 mr-3 uppercase text-xs"> ${c.status}</p> `
        html += ` <p class="text-lg font-bold text-black truncate capitalize">${c.name}</p>`
        html += ` <p class="text-lg font-semibold text-black cursor-auto my-3">${c.gender}</p>`
        html += ` <p class="text-lg font-semibold text-black cursor-auto my-3">${c.species}</p>`
        html += '</div>'
        html += '</div>'
        html += '</div>'


    })


    document.getElementById('cards').innerHTML = html

}


const maxArr = () => {

}


getApi()