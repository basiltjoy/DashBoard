import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  imageUrl: SafeResourceUrl;
  JSONHeader: any = [];
  CarData: any;

  filmData: any;

  //Chart data
  data: any;
  chartData1: any;
  customChartInstance: any;

  constructor(private sanitizer: DomSanitizer) {
    this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Graph.png');


  }


  ngOnInit() {
    this.data = {
      labels: ['June', 'July', 'August', 'September', 'October','November','December'],
      datasets: [
        {
          label: '',
          data: [10, 20, 25, 35, 28,20,30],
          backgroundColor: 'lightblue',
          borderColor: 'lightblue',
          fill: true,
          lineTension: 0,
          radius: 5,
        },
      ],
    };
    // this.http.get(this.url).subscribe(res => {
    //   this.Data.push(res)
    //   this.CarData = this.Data[0].cars
    //   console.log(this.CarData);

    //   this.JSONHeader = Object.keys(this.CarData[0]);
    //   // console.log(this.JSONHeader);
    // });

    // this.http.get(this.url2).subscribe(res => {
    //   this.filmData = res
    //   console.log(this.filmData);
    // });


    var myChart = new Chart("myChart", {
      type: 'line',
      data: this.data
    });

    this.customChartInstance = myChart


  }

  incrementClick() {
    this.data.datasets[0].data[0] = this.data.datasets[0].data[0] + 1
    this.chartData1 = this.data.datasets[0].data[0]

    this.data.datasets[0].data[1] = this.data.datasets[0].data[1] + 1
    this.chartData1 = this.data.datasets[0].data[1]

    this.data.datasets[0].data[3] = this.data.datasets[0].data[3] + 1
    this.chartData1 = this.data.datasets[0].data[3]

    this.data.datasets[0].data[4] = this.data.datasets[0].data[4] + 1
    this.chartData1 = this.data.datasets[0].data[4]

    this.data.datasets[0].data[5] = this.data.datasets[0].data[5] + 1
    this.chartData1 = this.data.datasets[0].data[5]

    this.data.datasets[0].data[6] = this.data.datasets[0].data[6] + 1
    this.chartData1 = this.data.datasets[0].data[6]

    this.data.datasets[0].data[7] = this.data.datasets[0].data[7] + 1
    this.chartData1 = this.data.datasets[0].data[7]
    
    console.log(this.chartData1)
    this.customChartInstance.update(this.chartData1);
  }

  decrementClick(){
    this.data.datasets[0].data[0] = this.data.datasets[0].data[0] - 2
    this.chartData1 = this.data.datasets[0].data[0]

    this.data.datasets[0].data[1] = this.data.datasets[0].data[1] - 2
    this.chartData1 = this.data.datasets[0].data[1]

    this.data.datasets[0].data[3] = this.data.datasets[0].data[3] - 2
    this.chartData1 = this.data.datasets[0].data[3]

    this.data.datasets[0].data[4] = this.data.datasets[0].data[4] - 2
    this.chartData1 = this.data.datasets[0].data[4]

    this.data.datasets[0].data[5] = this.data.datasets[0].data[5] - 2
    this.chartData1 = this.data.datasets[0].data[5]

    this.data.datasets[0].data[6] = this.data.datasets[0].data[6] - 2
    this.chartData1 = this.data.datasets[0].data[6]

    this.data.datasets[0].data[7] = this.data.datasets[0].data[7] - 2
    this.chartData1 = this.data.datasets[0].data[7]
    
    console.log(this.chartData1)
    this.customChartInstance.update(this.chartData1);
  }













}
