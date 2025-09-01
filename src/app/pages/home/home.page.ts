import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/services/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  news: any[] = [];

  constructor(private newsService: News) {}

  ngOnInit() {
    this.newsService.getNews().subscribe((data: any) => {
      this.news = data.articles; // Ajusta según la estructura de la respuesta
    });
  }
}