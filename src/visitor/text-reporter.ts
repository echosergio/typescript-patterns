import { IReporter } from './reporter.interface';
import { Epic } from './epic';

export class TextReporter implements IReporter {

    public createReport(epic: Epic) {
        let date = new Date();
        console.log(`Project state - ${date.toISOString()}`)
        console.log('=============');
        console.log(`Budget: ${epic.budget}`);
        console.log('=============');
        epic.features.forEach(x => console.log(`    Feature by: ${x.team}`))
    }
}