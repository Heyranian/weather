async function getCities(cityValue) {
    return fetch ('city.list.json')
.then(async response =>{
    const cities = await response.json()
    const data = cities.filter(city=>city.name.toLowerCase().includes(cityValue.toLowerCase()))
    return data
})
}
// console.log(getCities('usa'));

async function searchCities(event) {
    
}



