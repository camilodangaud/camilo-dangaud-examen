import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/NewsService'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  news: any[] = [];
  principalNews: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getNews().subscribe((data: any) => {
      this.news = data.articles || [];
      this.principalNews = this.news.slice(0, 4);
    });
  }
}
