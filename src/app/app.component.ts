import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  public  results = Array();
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    for(var  i =1 ; i < 5 ; i++ ){
      this.http.get('https://swapi.co/api/people/'+i+'/').subscribe( data => {
        var temp;
        console.log(data);
        //temp = JSON.parse(String(data));
        //console.log(temp);
        this.results.push(data);
      });
    }
    //console.log(this.results);
  }
}
