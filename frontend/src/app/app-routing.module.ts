import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { MetricsPageComponent } from './metrics-page/metrics-page.component';

const routes: Routes = [
  { path: 'metrics/:repo_id', component: MetricsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }