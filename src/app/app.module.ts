import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PortfolioHomeComponent } from './portfolio/portfolio-home/portfolio-home.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PortfolioService } from './portfolio/portfolio.service';
import { SkillBarComponent } from './skill-bar/skill-bar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({ schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioHomeComponent,
    PortfolioItemComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    SkillBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatDividerModule,
    MatTooltipModule,
    FontAwesomeModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    PdfViewerModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})


export class AppModule {

  constructor() {
  }


 }
