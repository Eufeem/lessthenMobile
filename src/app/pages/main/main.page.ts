import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/Theme';
import { ApiService } from 'src/app/services/API.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  list: Theme[] = [];
  universeApi: any;

  constructor(
    private themeService: ThemeService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getThemes();
    this.getApiUniverse();
  }

  getThemes() {
    this.themeService.get().subscribe(response => {
      this.list = response;
      console.log(this.list);
    });
  }

  getApiUniverse() {
    this.apiService.getPlanetary().subscribe(response => {
      this.universeApi = response;
    });
  }
}
