import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-filter',
  templateUrl: './campaign-filter.component.html',
  styleUrls: ['./campaign-filter.component.css', './../campaign-list/campaign-list.component.css']
})
export class CampaignFilterComponent implements OnInit {
  CampaignForm: FormGroup = new FormGroup({
    nameFilter: new FormControl(''),
    startDateFilter: new FormControl(''),
    endDateFilter: new FormControl('')
  });

  constructor(private campaignService: CampaignService) {
    this.campaignService.filterComponent = this;
  }

  ngOnInit(): void {
  }

  observeFilter(): Observable<Campaign[]>{
    return this.campaignService.getCampaignList()
      .pipe(
        map(campaigns => this.filterCampaigns(campaigns)));
  }

  filterCampaigns(campaigns: Campaign[]): Campaign[]{
    campaigns = this.filterCampaignNames(campaigns);
    return this.filterCampaignDates(campaigns);
  }

  filterCampaignDates(campaigns: Campaign[]): Campaign[]{
    if (this._areDatesValuesPresent()){
      return campaigns.filter(campaign => this._compareDatesRange(campaign));
    }
    return campaigns;
  }

  filterCampaignNames(campaigns: Campaign[]): Campaign[]{
    const nameFormValue = this.CampaignForm.get('nameFilter').value;

    return campaigns.filter(camp => camp.name.toLowerCase().includes(nameFormValue.toLowerCase()));
  }

  private _areDatesValuesPresent(): boolean{
    const startDateFormValue = this.CampaignForm.get('startDateFilter').value;
    const endDateFormValue = this.CampaignForm.get('endDateFilter').value;

    return startDateFormValue !== '' && endDateFormValue !== '';
  }

  private _compareDatesRange(campaign: Campaign): boolean{
    const startDate = new Date(this.CampaignForm.get('startDateFilter').value);
    const endDate = new Date(this.CampaignForm.get('endDateFilter').value);

    return new Date(campaign.start) >= new Date(startDate) && new Date(campaign.end) <= new Date(endDate);
  }

}
