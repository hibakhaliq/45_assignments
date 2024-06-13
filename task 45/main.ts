
import { features } from "process"
function storeCarInfo (manufacturer: string, modelName: string, ...extraOption: { [key: string]: any } []): 
object  {
    //Initializes a car object with  manufacturer and model
    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;
}

let answer = storeCarInfo('Honda', 'Civic', {color: 'black'}, {features: ['Navigation', 'Power window']})

console.log(answer);




