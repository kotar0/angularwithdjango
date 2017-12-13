import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserlistComponent } from './userlist/userlist.component';


const appRoutes: Routes = [
    {
        path :'',
        component: UserlistComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);