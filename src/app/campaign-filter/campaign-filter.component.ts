import { Component, OnInit } from '@angular/core';
import {CampaignService} from '../campaign.service';
import {FormControl} from '@angular/forms';
import {filter, startWith, map, switchMap} from 'rxjs/operators';
import {from, Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Campaign} from '../campaign';
import {CampaignList} from '../campaign-list';
import data from '../campaigns-data.json';

@Component({
  selector: 'app-campaign-filter',
  templateUrl: './campaign-filter.component.html',
  styleUrls: ['./campaign-filter.component.css']
})
export class CampaignFilterComponent implements OnInit {
  filterForm = new FormControl('');

  constructor(private campaignService: CampaignService) {
    this.campaignService.filterComponent = this;
  }

  ngOnInit(): void {
  }

  observeFilter(): Observable<Campaign[]>{
    return this.campaignService.getCampaignList()
      .pipe(map(campaigns => campaigns.filter(camp => camp.name.toLowerCase().startsWith(this.filterForm.value.toLowerCase()))));
  }


}
