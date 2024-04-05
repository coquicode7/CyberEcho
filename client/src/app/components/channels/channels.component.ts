import { Component } from '@angular/core';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { FriendsDashboardComponent } from "./friends-dashboard/friends-dashboard.component";

@Component({
    selector: 'app-channels',
    standalone: true,
    templateUrl: './channels.component.html',
    styleUrl: './channels.component.scss',
    imports: [MainDashboardComponent, FriendsDashboardComponent]
})
export class ChannelsComponent {

}
