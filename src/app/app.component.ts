import { Component, OnInit } from '@angular/core';
import { DemoService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEndChallenge';

  elephants = [];
  male_elephants = [];
  female_elephants = [];
  elephant_count = 0;
  missing_flag = "";
  show_image_flag = true;
  show_all_flag = false;
  show_male_flag = true;
  show_female_flag = true;

  constructor(private demoService: DemoService) { }

  // Load all the elephants when the page is loaded
  ngOnInit() {
    
    this.demoService.sendGetRequest().subscribe((data: any[])=>{
      console.log("Finished Load........ ");
      console.log(data);

      this.elephants = data;
      this.elephant_count = data.length;

      this.elephants.forEach(element => {
         if(element.sex == "Male") {
            this.male_elephants.push(element);
          }
          else if(element.sex == "Female")  {
            this.female_elephants.push(element);
          }
          else {
            // Do nothing
          }
      });

      console.log(this.male_elephants.length);
      console.log(this.female_elephants.length);

    });
  
  }

  showPic(str) {
    let missingText = "https://elephant-api.herokuapp.com/pictures/missing.jpg";
    this.show_image_flag = false;
    
    if(str == missingText) {
        return missingText;
    }
    else {
      return str;
    }
  }

  displayAll() {
    this.show_all_flag = false;
    this.show_male_flag = true;
    this.show_female_flag = true;
    
    this.show_image_flag = false;
  }

  displayMales() {
    this.show_all_flag = true;
    this.show_male_flag = false;
    this.show_female_flag = true;

    this.show_image_flag = false;
  }

  displayFemales() {
    this.show_all_flag = true;
    this.show_female_flag = false;
    this.show_male_flag = true;

    this.show_image_flag = false;
  }

}
