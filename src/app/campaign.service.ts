import { Injectable } from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import { of } from 'rxjs';
import {CampaignList} from './campaign-list';

import data from './campaigns-data.json';
import {Campaign} from './campaign';
import {CampaignFilterComponent} from './campaign-filter/campaign-filter.component';
import {startWith, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  filterComponent: CampaignFilterComponent;
  campaignList: Observable<Campaign[]>;

  constructor() { }

  getCampaignList(): Observable<Campaign[]>{
    this.campaignList = this.filterComponent.filterForm.valueChanges.pipe(
      startWith(of(data.campaigns)),
      switchMap(() => of(data.campaigns))
    );
    return this.campaignList;
  }

  getFilteredCampaignList(): Observable<Campaign[]>{
    return this.filterComponent.observeFilter();
  }
}
