import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  loadFeaturedProducts(): void {
    this.http.get<any[]>('https://api.example.com/featured-products')
      .subscribe(data => {
        this.featuredProducts = data;
      });
  }
}
