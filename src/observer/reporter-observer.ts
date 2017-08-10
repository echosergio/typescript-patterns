import { IAlcoholObserver } from './alcohol-observer.interface';

export class ReporterObserver implements IAlcoholObserver {

    public update(alcoholLevel: number) {
        if (alcoholLevel > 7) {
            console.log(`Extra! Extra! Super drunk detected! (Alcochol level: ${alcoholLevel})`);
        }
    }
}