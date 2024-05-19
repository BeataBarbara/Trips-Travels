import { Routes } from '@angular/router';
import { JednodnioweComponent } from '../jednodniowe/jednodniowe.component';
import { DuzemiastobazaComponent } from '../duzemiastobaza/duzemiastobaza.component';
import { OkoloweekendoweComponent } from '../okoloweekendowe/okoloweekendowe.component';
import { WeekendoweComponent } from '../weekendowe/weekendowe.component';
import { DluzszeWyprawyComponent } from '../dluzsze-wyprawy/dluzsze-wyprawy.component';
import { OopsComponent } from '../oops/oops.component';
// import {AppComponent} from './app.component'


export const routes: Routes = [
    // { path: '', component: AppComponent},
    { path: 'jednodniowe', component: JednodnioweComponent },
    { path: 'duzemiastobaza', component: DuzemiastobazaComponent },
    { path: 'okoloweekendowe', component: OkoloweekendoweComponent },
    { path: 'weekendowe', component: WeekendoweComponent },
    { path: 'dluzsze-wyprawy', component: DluzszeWyprawyComponent },
    { path: '**', component: OopsComponent }

  ];    
