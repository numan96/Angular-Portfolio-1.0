import { Injectable } from '@angular/core';
import { PortfolioItem } from '../portfolioitem.model';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  portfolioItems: PortfolioItem[] = [
    new PortfolioItem(
      'ng-chatroom-application',
      'Angular Basic Chatroom Application',

      'This is a basic chatroom application created using Getstream.io API/SDK for Angular. It allows a user to create chatrooms and add other registered users to it, to have a conversation. Users can attach pictures, videos and react to messages all out of the box from the SDK.',
      [
        'Angular 13',
        'Angular Material',
        'TypeScript',
        'SCSS',
        'HTML',
        'Firebase Hosting',
        'Firebase Functions',
        'Firebase Authentication',
        'getStream.io',
      ],

      [
        '/assets/Chatrooms/chatroom1.png',
        '/assets/Chatrooms/chatroom2.png',
        '/assets/Chatrooms/chatroom3.png',
        '/assets/Chatrooms/chatroom4.png',
        '/assets/Chatrooms/chatroom5.png',
        '/assets/Chatrooms/chatroom6.png',
        '/assets/Chatrooms/chatroom7.png',
      ],
      [''],
      'https://github.com/numan96/Angular-Chatroom-Application'
    ),
    new PortfolioItem(
      'ng-fitness-tracker',
      'Angular Fitness Tracking Application',

      'This is a basic fitness tracking application where users can sign up, login and start exercises. They choose from a set of exercises fetched from a server I started, users can cancel the exercise if they want and can view past exercises (completed or cancelled early) and we can even filter/sort these exercises.',
      [
        'Angular 13',
        'Angular Material',
        'TypeScript',
        'SCSS',
        'HTML',
        'Firebase Hosting',
        'Firebase Firestore',
        'Angularfire',
      ],

      [
        '/assets/FitnessTracker/ft1.png',
        '/assets/FitnessTracker/ft2.png',
        '/assets/FitnessTracker/ft3.png',
        '/assets/FitnessTracker/ft4.png',
        '/assets/FitnessTracker/ft5.png',
        '/assets/FitnessTracker/ft6.png',
        '/assets/FitnessTracker/ft7.png',
      ],
      [''],
      'https://github.com/numan96/Angular-Fitness-Tracker'
    ),

    new PortfolioItem(
      'ng-technical-task',
      'Angular Basic E-Commerce Web Application',

      'This was for a recruitment stage where I had to complete a technical task. The task was to create a web application that displays products, similar to many ecommerce apps and websites.',
      [
        'Angular 13',
        'Angular Material',
        'TypeScript',
        'CSS',
        'HTML',
        'Angularfire Hosting',
        'Angular Flex-Layout',
        'API',
      ],

      [
        '/assets/ecommerce/ecommerce1.png',
        '/assets/ecommerce/ecommerce2.png',
        '/assets/ecommerce/ecommerce3.png',
        '/assets/ecommerce/ecommerce4.png',
        '/assets/ecommerce/ecommerce5.png',
        '/assets/ecommerce/ecommerce6.png',
        '/assets/ecommerce/ecommerce7.png',
        '/assets/ecommerce/ecommerce8.png',
        '/assets/ecommerce/ecommerce9.png',
      ],
      [''],
      'https://github.com/numan96/Angular-One-Iota-Task'
    ),
    new PortfolioItem(
      'ng-flixible',
      'Angular NgRx Film Tracking Application',

      'A film tracking application built using NgRx and TMDB API. All data including authentication by the user was created using Firebase. Users can favourite or set films as watched, also look at film details and search dynamically for any film of their choosing.',
      [
        'Angular 13',
        'Angular Material',
        'TypeScript',
        'SASS',
        'HTML',
        'Firebase',
        'NgRx',
        'API',
      ],

      [
        '/assets/Flixible/Flixible1.jpg',
        '/assets/Flixible/Flixible2.jpg',
        '/assets/Flixible/Flixible3.jpg',
        '/assets/Flixible/Flixible4.jpg',
        '/assets/Flixible/Flixible5.jpg',
        '/assets/Flixible/Flixible6.jpg',
        '/assets/Flixible/Flixible7.jpg',
        '/assets/Flixible/Flixible8.jpg',
        '/assets/Flixible/Flixible9.jpg',
        '/assets/Flixible/Flixible10.png',
        '/assets/Flixible/Flixible11.png',
        '/assets/Flixible/Flixible12.png',
        '/assets/Flixible/Flixible13.png',
        '/assets/Flixible/Flixible14.jpg',
        '/assets/Flixible/Flixible15.jpg',
        '/assets/Flixible/Flixible16.png',
        '/assets/Flixible/Flixible17.jpg',
        '/assets/Flixible/Flixible18.jpg',
        '/assets/Flixible/Flixible19.jpg',
      ],
      [''],
      'https://github.com/numan96/flixible'
    ),

    new PortfolioItem(
      'ng-course-project',
      'Angular 2 Course Project',

      'A project that allowed me to practice things I have learnt throughout this Angular Complete Guide 2022 Edition course on Udemy. Covering topics such as: Components, Directives, Services, Forms, Http Access, Authentication, Optimizing an Angular App with Modules and Offline Compilation and much more - and in the end: I learnt how to deploy an application!',
      [
        'Angular 2+',
        'TypeScript',
        'Bootstrap',
        'NgRx',
        'CSS',
        'HTML',
        'Firebase',
      ],

      [
        '/assets/CourseProject/ngproject1.png',
        '/assets/CourseProject/ngproject2.png',
        '/assets/CourseProject/ngproject3.png',
        '/assets/CourseProject/ngproject4.png',
        '/assets/CourseProject/ngproject5.png',
      ],
      [''],
      'https://github.com/numan96/ng-course-project'
    ),

    new PortfolioItem(
      'vitz-2.0-wordpress-website',
      'Vitz Ltd New Website',

      'Created a new reworked WordPress website that better matched the branding of the business, with the aim of it driving more sales from the websites store. A new product launched simultaneously with the website which we wanted to bring to life with vibrant colours that matched the packaging.',
      ['WordPress', 'CSS'],

      [
        '/assets/VitzWebsite2/chrome_iezSJm5rUI.png',
        '/assets/VitzWebsite2/chrome_j9C6p3hmKW.png',
        '/assets/VitzWebsite2/chrome_xYS5DmJzoZ.png',
      ],
      ['/assets/VitzWebsite2/BEFORE.mp4'],
      'https://vitzltd.co.uk/'
    ),

    new PortfolioItem(
      'vitz-wordpress-website',
      'Vitz Ltd Website',

      'Created and managed the WordPress website for this start-up business, everything from designing an appealing website to creating the online store, liaising with the CEO to gather the website requirements and adding new features when required and testing them before launch. Also responsible for some of the web graphics displayed using PhotoShop and Canva.',
      ['WordPress', 'CSS', 'PhotoShop'],

      [
        '/assets/VitzWebsite/chrome_5QdENmRPi2.png',
        '/assets/VitzWebsite/chrome_7mh0sMCYbQ.png',
        '/assets/VitzWebsite/chrome_gaym6HLjjP.png',
        '/assets/VitzWebsite/BAhRL69DKJ.gif',
        '/assets/VitzWebsite/VitzStore.gif',
      ],
      [''],
      'https://vitzltd.co.uk/'
    ),

    new PortfolioItem(
      'ar-android-maths-app',
      'Augmented Reality Android Maths App',

      'An android mathematics application with a target user age of 6 to 12 years old, aimed to educate the user through interaction and viewing of digital media using Augmented Reality technology. Features included a dynamic AR leaderboard based on the classroom/group the user was a part of allowing them to compete for domination and an AR quiz which required user responses through the camera to answer questions. This application has an android UI with Unity activities which send and receive data from each other to dynamically store points and other user information.',

      [
        'Android Studio',
        'C#',
        'Java',
        'Unity Engine',
        'PHPMyAdmin',
        'Google Volley',
      ],

      [
        '/assets/ARApp/fyp1.png',
        '/assets/ARApp/fyp2.png',
        '/assets/ARApp/fyp3.png',
        '/assets/ARApp/fyp4.png',
      ],
      [''],
      'https://github.com/numan96/Augmented-Reality-Android-Maths-Application'
    ),

    new PortfolioItem(
      'reddit-clone',
      'Reddit Clone - CodeIgniter Website',

      'Using CodeIgniter to implement a MVC (Model, View, Controller) website, this website allowed for users to post threads and discuss them, with a fully functioning login system, commenting system and upvoting/downvoting feature similar to reddit.',

      [
        'Rest API',
        'AJAX',
        'JSON',
        'HTML',
        'PHP (CodeIgniter)',
        'CSS (BootStrap)',
        'JavaScript',
        'jQuery',
      ],

      [
        '/assets/RedditClone/advanced1.png',
        '/assets/RedditClone/advanced2.png',
        '/assets/RedditClone/advanced3.png',
      ],
      [''],
      'https://github.com/numan96/redditclone'
    ),

    new PortfolioItem(
      'treasure-hunt-jquery-website',
      'Treasure Hunt jQuery Mobile',

      'A treasure hunt jQuery based web application that provided information and promoted a clients venues, the user would choose a start destination and a final venue destination and based on their options, a GPS route would be shown with markers throughout their trip where they played games in order to learn more about the venue and earn rewards for them whilst they travel to the location. Features included a booking system, a points system, a newsletter and a dynamic favourite venues list.',

      [
        'PHP',
        'Rest API',
        'AJAX',
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'PHPMyAdmin',
      ],

      [
        '/assets/TreasureHunt/TreasureHunt1.png',
        '/assets/TreasureHunt/TreasureHunt2.png',
        '/assets/TreasureHunt/TreasureHunt3.png',
        '/assets/TreasureHunt/TreasureHunt4.png',
      ],
      [''],
      'https://github.com/numan96/Treasure-Hunt-jQuery-Project'
    ),

    new PortfolioItem(
      'charity-football-poster',
      'Charity Football Poster',

      'Using Photoshop, I created a charity football tournament poster that was designed to promote the event locally within my community and online via social media, in collaboration with a mutual friend working at the organisation hosting the tournament.',

      ['PhotoShop'],

      ['/assets/FootballPoster/FootballPosterNM.png'],
      [''],
      'HERE'
    ),
  ];

  getPortfolioItems() {
    return this.portfolioItems;
  }

  getPortfolioItem(id: string) {
    var project = this.portfolioItems.find((s) => {
      return s.projectId === id;
    });
    return project;
  }

  constructor() {}
}
