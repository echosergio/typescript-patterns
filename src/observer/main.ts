import { AlcoholCheck } from './alcohol-check';
import { PoliceOfficerObserver } from './police-officer-observer';
import { ReporterObserver } from './reporter-observer';

var alcoholCheck = new AlcoholCheck(2);

alcoholCheck.attach(new PoliceOfficerObserver());
alcoholCheck.attach(new ReporterObserver());

var alcoholLevels: number[] = [1.2, 2.4, 0.4, 9.2, 3.2, 1.4]

alcoholLevels.forEach(x => { alcoholCheck.alcoholLevel = x });