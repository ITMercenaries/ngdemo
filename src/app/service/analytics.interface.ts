import { Metrics } from '../model/metrics.model';

export interface IAnalytics {
    recordEvent( metrics: Metrics ): void;
}

