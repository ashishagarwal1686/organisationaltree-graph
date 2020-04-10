import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxGraphOrgTreeComponent } from './ngx-graph-org-tree/ngx-graph-org-tree/ngx-graph-org-tree.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/demograph'
  },
  {
    path: 'demograph',
    component: NgxGraphOrgTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
