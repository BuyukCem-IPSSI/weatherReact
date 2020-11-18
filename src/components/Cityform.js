import React, {useState} from 'react';
import {ApiErrors, apiFetch} from "../utils/api";

export function CityForm() {
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");

    const handleSubmit = async function (e) {
        e.preventDefault()
        const data = new FormData(e.target)
        setCity(data.get('city'))

        try {
            console.log(city)
            const cityInfo = await apiFetch(city, {
                method: 'GET',
            })
            console.log(cityInfo)
        } catch (e) {
            if (e instanceof ApiErrors) {
                setError(e.errors)
            }else{
                console.log(e)
            }
        }
    }

    return <>
        <form onSubmit={handleSubmit}>
            <label>
                City :
                <input type="text" name="city" />
            </label>
            <input type="submit" value="Envoyer" />
    </form>
    </>
}


function Alert({children}) {
    return <div className="alert alert-danger">{children}</div>
}