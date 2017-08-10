import { IAlcoholObserver } from './alcohol-observer.interface';

export class PoliceOfficerObserver implements IAlcoholObserver {

    public update(alcoholLevel: number) {
        if (alcoholLevel > 2) {
            console.log(`Drunk detected (Alcochol level: ${alcoholLevel})`);
        }
    }
}