import { Routes } from '@angular/router';
import { GroupListComponent } from './components/group-list/group-list.component';
import { PairingResultComponent } from './components/pairing-result/pairing-result.component';

export const routes: Routes = [
    { path: '', component: GroupListComponent }, // Home route showing the group list
    { path: 'pairing-result', component: PairingResultComponent } // Route for viewing pairing results
];
