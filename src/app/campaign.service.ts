import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {startWith, switchMap} from 'rxjs/operators';

import data from './campaigns-data.json';
import {Campaign} from './campaign';
import {CampaignFilterComponent} from './campaign-filter/campaign-filter.component';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  filterComponent: CampaignFilterComponent;

  constructor() { }

  getCampaignList(): Observable<Campaign[]> {
    return this.filterComponent.CampaignForm.valueChanges.pipe(
      startWith(of(data.campaigns)),
      switchMap(() => of(data.campaigns))
    );
  }

  getFilteredCampaignList(): Observable<Campaign[]> {
    return this.filterComponent.observeFilter();
  }
}
