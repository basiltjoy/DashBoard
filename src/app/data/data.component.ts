import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  imageUrl: SafeResourceUrl;
  url: string = '/assets/Cars.json';
  url2: string = '/assets/Films.json';
  Data: any = [];
  CarData: any;
  JSONHeader: any = [];

  filmData: any;
  filmHeader: any = [];
  pageClick: number;

  constructor(private sanitizer: DomSanitizer,
    private http: HttpClient) {
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Graph.png');
    this.pageClick=70.210
  }


  ngOnInit() {

    this.http.get(this.url).subscribe(res => {
      this.Data.push(res)
      this.CarData = this.Data[0].cars
      // console.log(this.CarData);

      this.JSONHeader = Object.keys(this.CarData[0]);
      // console.log(this.JSONHeader);
    });

    this.http.get(this.url2).subscribe(res => {
      this.filmData = res
      console.log(this.filmData);
    });

  
  }
}
