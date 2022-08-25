import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faGithubSquare = faGithubSquare
  faLinkedIn = faLinkedin
  name: string;
  email: string;
  message: string;

  @ViewChild('SubmittedForm',{static: true}) submitForm: ElementRef;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      

      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/xoqyazdy',
        { name: email.name, replyto: email.email, message: email.message },
        { 'headers': headers }).subscribe(
          response => {
         alert("Thank you, email has been sent!");
          
          }
        );

this.router.navigate(['/']);


    }
  }
}
