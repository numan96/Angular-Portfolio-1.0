import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PortfolioService } from '../portfolio.service';


@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
portfolioItem: {projectId: string, projectName: string,
projectDescription: string,
projectSkills: Array<any>, projectVideos?: Array<any>, projectImages: Array<any>, projectLink: string;}


  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService ) { }

  ngOnInit(): void {

     var serverId = this.route.params['id'];


    this.portfolioItem = this.portfolioService.getPortfolioItem(serverId);

    this.route.params.subscribe(

      (params: Params) => {
      
        this.portfolioItem = this.portfolioService.getPortfolioItem(params['id']);
      
      }
      );

  }

}
