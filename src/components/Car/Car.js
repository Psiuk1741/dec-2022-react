import React from 'react';
import {carService} from "../../services/car.service";

const Car = ({car, setCarForUpdate, setAllCars}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async () =>{
        await carService.deleteById(id);
        setAllCars(prev=>!prev)
    }

    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>year : {year}</div>
            <div>price : {price}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={()=>deleteCar()}>Delete</button>

            <hr/>
        </div>
    );
};

export default Car;