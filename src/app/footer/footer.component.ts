import { Component, OnInit } from '@angular/core';
import { faGithubSquare, faLinkedin, faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faGithubSquare = faGithubSquare
faLinkedIn = faLinkedin
faAngular = faAngular

  constructor() { }

  ngOnInit(): void {
  }

}
