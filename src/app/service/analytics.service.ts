import { Injectable } from '@angular/core';
import { Metrics } from '../model/metrics.model';
import { IAnalytics } from './analytics.interface';

@Injectable()
export class AnalyticsService {
    constructor( private analyticsImpl: IAnalytics ) {
    }

    record( metrics: Metrics ): void {
        this.analyticsImpl.recordEvent( metrics );
    }
}
