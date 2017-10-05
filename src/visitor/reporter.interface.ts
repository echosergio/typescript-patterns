import { Epic } from './epic';

export interface IReporter {
  createReport(epic: Epic)
}