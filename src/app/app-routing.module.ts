import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioHomeComponent } from './portfolio/portfolio-home/portfolio-home.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'portfolio', component: PortfolioHomeComponent},
{path: 'portfolio/:id', component: PortfolioItemComponent},
{path: 'resume', component: ResumeComponent},
{path: 'contact', component: ContactComponent},
{path: 'not-found', component: NotFoundComponent},
{path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
