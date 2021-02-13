import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CampaignFilterComponent } from './campaign-filter/campaign-filter.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'campaign-list', pathMatch: 'full'},
  { path: 'campaign-list', component: CampaignListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CampaignFilterComponent,
    CampaignListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
