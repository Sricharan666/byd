import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private apiService: ApiService) {}
  myFunc(){
    this.apiService.box = !this.apiService.box;
    console.log("application", this.apiService.box);
  }
}
