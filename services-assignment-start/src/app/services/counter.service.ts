export class CounterService {
    activeCounter: number = 0;
    inactiveCounter:number = 0;

    increaseActiveUserCount() {
        this.activeCounter++;
        console.log("Count of Inactive to Active user:" + this.activeCounter);
    }

    increaseInactiveUserCount() {
        this.inactiveCounter++;
        console.log("Count of Active to Inactive user:" + this.inactiveCounter)
    }
}