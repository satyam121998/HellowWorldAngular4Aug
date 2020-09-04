import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginData;
  Username: any;
  Password: any;
  url = "https://sample-api-v.herokuapp.com/";

  constructor(private http: HttpClient) {}

  login() {



    console.log("url Data", this.LoginData);
    for (let i = 0; i < this.LoginData.length; i++) {

      if (this.Username == this.LoginData[i].Username && this.Password == this.LoginData[i].Password) {
        console.log("Authenticated Username", this.LoginData[i].Username);
        console.log("Authenticated Password", this.LoginData[i].Password);
        window.location.href = `http://localhost:4200/view`;
        break;
      } 
    }
  }




  ngOnInit() {
    return this.http.get(this.url).subscribe((result) => {
      this.LoginData = result;
      //console.log("Url Data", this.LoginData);
      return this.LoginData
    });
  }

}
