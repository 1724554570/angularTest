import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  // template: `
  //   <p>
  //     register Works!
  //   </p>
  // `,
  templateUrl: './register.component.html',
  styles: [
    ''
  ]
})
export class RegisterComponent implements OnInit {


  username = "";
  password = "";
  reppassword = "";

  constructor() { }

  ngOnInit() {
  }

}
