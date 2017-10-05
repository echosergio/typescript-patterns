import { Feature } from './feature';
import { IReporter } from './reporter.interface';

export class Epic {
    budget: number;
    features: Array<Feature>;

    public getInfo(reporter: IReporter) {
        reporter.createReport(this)
    }
}