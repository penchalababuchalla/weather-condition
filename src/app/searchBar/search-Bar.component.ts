import {Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector:'searchBar',
	templateUrl:'./search-Bar.component.html',
	styleUrls: ['./search-Bar.component.css']
})
export class SearchBarComponent {
	weatherData: any;
	lat = '';
	lon = '';

	constructor(private http: HttpClient) { }

	checkWeather(){
		var url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.lon + '&appid=b55daa6f9d794792351a5c4a0157ae14'
		this.http.get<any>(url).subscribe(data => {
        	this.weatherData = data;
    	})  
	}
}
