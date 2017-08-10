import { IAlcoholObserver } from './alcohol-observer.interface';

export class AlcoholCheck {

    private _maxAlcoholLevel: number;
    private _alcoholObservers: Array<IAlcoholObserver>;
    private _alcoholLevel: number;

    constructor(maxAlcoholLevel: number) {
        this._alcoholObservers = new Array();
        this._maxAlcoholLevel = maxAlcoholLevel;
    }

    public attach(alcoholObserver: IAlcoholObserver) {
        this._alcoholObservers.push(alcoholObserver);
    }

    public detach(alcoholObserver: IAlcoholObserver) {
        let alcoholObserverIndex = this._alcoholObservers.indexOf(alcoholObserver);
        this._alcoholObservers.splice(alcoholObserverIndex, 1);
    }

    public notify(alcoholLevel: number) {
        this._alcoholObservers.forEach(x => { x.update(alcoholLevel) });
    }

    set alcoholLevel(alcoholLevel: number) {
        this._alcoholLevel = alcoholLevel;
        this.notify(this._alcoholLevel);
    }
}