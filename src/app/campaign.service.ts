import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import data from './campaigns-data.json';
import {Campaign} from './campaign';
import {CampaignFilterComponent} from './campaign-filter/campaign-filter.component';
import {startWith, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  filterComponent: CampaignFilterComponent;
  campaignListObservable: Observable<Campaign[]>;

  constructor() { }

  getCampaignList(): Observable<Campaign[]>{
    this.campaignListObservable = this.filterComponent.CampaignForm.valueChanges.pipe(
      startWith(of(data.campaigns)),
      switchMap(() => of(data.campaigns))
    );
    return this.campaignListObservable;
  }

  getFilteredCampaignList(): Observable<Campaign[]>{
    return this.filterComponent.observeFilter();
  }
}
