import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {
  campaignList: Campaign[];

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getFilteredCampaignList().subscribe(result => this.campaignList = result);
  }

}
