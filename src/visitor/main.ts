import { Epic } from './epic';
import { Feature } from './feature';
import { TextReporter } from './text-reporter';
import { JsonReporter } from './json-reporter';

let feature1: Feature = {
    team: "Warriors",
};

let feature2: Feature = {
    team: "Vikings",
};

let epic = new Epic();  

epic.budget = 25000;
epic.features = [feature1, feature2];

epic.getInfo(new TextReporter());
epic.getInfo(new JsonReporter());

