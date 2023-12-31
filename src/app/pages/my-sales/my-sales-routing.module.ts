import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MySalesPage} from './my-sales.page';

const routes: Routes = [
  {
    path: '',
    component: MySalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySalesPageRoutingModule {
}
