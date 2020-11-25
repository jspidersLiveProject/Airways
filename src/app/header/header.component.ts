import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  features = ['Prepare', 'Travel', 'Discover', 'Login']

  constructor(private router: Router) { }

  ngOnInit() {
  }
  clicked(feature) {
    const arr = '/' + feature;
    this.router.navigate([arr],{skipLocationChange:true});
  }
}
