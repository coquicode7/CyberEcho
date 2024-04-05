import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChannelsComponent } from './components/channels/channels.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'channels', component: ChannelsComponent },
    { path: '**', component: LoginComponent } // Este siempre va al final
];
