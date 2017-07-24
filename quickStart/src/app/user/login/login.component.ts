import { Component, OnInit, Inject } from '@angular/core';
import { UserDb } from '../../model/user.model';

//@Component是Angular提供的装饰器函数，用来描述Compoent的元数据
//其中selector是指这个组件的在HTML模板中的标签是什么
//template是嵌入（inline）的HTML模板，如果使用单独文件可用templateUrl
//styles是嵌入（inline）的CSS样式，如果使用单独文件可用styleUrls
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    `
  ]
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  constructor( @Inject('auth') private service) {
  }

  onstructor() {
  }

  ngOnInit() {
  }

  getUserLogin_onSubmit(formValue) {
    let user = { username: this.username, userpass: this.password };
    let v = this.service.user_login(user);
    console.log(v, v['__zone_symbol__value']);
  }

}
