import { IReporter } from './reporter.interface';
import { Epic } from './epic';

export class JsonReporter implements IReporter {

    public createReport(epic: Epic) {
        console.log(`${JSON.stringify(epic)}`);
    }
}