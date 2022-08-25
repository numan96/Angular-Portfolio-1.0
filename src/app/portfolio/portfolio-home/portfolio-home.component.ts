import { Component, OnInit } from '@angular/core';
import { faAngular, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faLaptop, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { PortfolioItem } from 'src/app/portfolioitem.model';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})
export class PortfolioHomeComponent implements OnInit {
  faGithubSquare = faGithubSquare
  faLinkedIn = faLinkedin
  faAngular = faAngular
faLaptop = faLaptop
faChevronRight = faChevronRight
faLaptopCode = faLaptopCode
 
portfolioItems: PortfolioItem[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {

    this.portfolioItems = this.portfolioService.getPortfolioItems();

  




  }

}
