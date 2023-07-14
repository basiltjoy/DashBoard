import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  imageUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Graph.png');
  }


  ngOnInit(){
    
  }
}
