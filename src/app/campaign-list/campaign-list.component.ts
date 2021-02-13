import { Component, OnInit } from '@angular/core';
import {CampaignList} from '../campaign-list';
import {CampaignService} from '../campaign.service';
import {Campaign} from '../campaign';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent implements OnInit {

  campaignList: Campaign[];
  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getFilteredCampaignList().subscribe(r => this.campaignList = r);
  }

}
