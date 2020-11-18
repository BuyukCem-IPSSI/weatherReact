/***
 * Represent error send by API
 * */
export class ApiErrors{
    constructor(errors) {
        this.errors = errors;
    }
}
/**
 * @param {string} city
 * @param {object} options
 * **/
export async function apiFetch(city, options = {}) {
    console.log(city)
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + "15df4092e08bb0cc531fd4c44c50db2f";

   let url2 ="api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=15df4092e08bb0cc531fd4c44c50db2f";

    console.log(url2)
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        },
        ...options
    })
    if (response.status === 204) {
        return null;
    }

    const responseData = await response.json()

    if (response.ok) {
        return responseData;
    } else {
        if (responseData.message) {
            throw new ApiErrors(responseData.message)
        }
    }
}