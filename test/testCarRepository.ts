import { Car } from "../src/domain/car";
import { CarID } from "../src/domain/carId";
import { ICarRepository } from "../src/domain/interfaces/iCarRepository";

export class TestCarRepository implements ICarRepository{
    private readonly data : Car[];

    public constructor(data:Car[]){
        this.data = data;
    }

    public getCarByLicensePlate(licensePlate: string): Car {
        for(let item of this.data){
            if(item.licensePlate == licensePlate){
                return item;
            }
        }

        throw 'car not found';
    }

    public getCarByID(carID: CarID): Car {
        for(let item of this.data){
            if(item.id == carID){
                return item;
            }
        }

        throw 'car not found';
    }
}