import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // loginForm: string = "";
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
  }

  userData(logindata: {username: string, password: string}) {
    console.log(logindata);
    // this.http.post<any>("https://localhost/angproj/insert.php",logindata).subscribe(
    //   (res) => {
    //     console.log(res)
    //   }
    // );
  }

}
