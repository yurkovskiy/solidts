import { Vehicle } from "./Vehicle";

export class SportCar implements Vehicle {
    drive():void {
        console.log("just driving");
    }

    drift():void {
        console.log("just drifting");
    }

    connectToTrailer():void {
        return null;
    }
}