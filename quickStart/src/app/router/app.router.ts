import { Component, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
  // {
  //   path: 'user',
  //   children: [
  //     {
  //       path: "",  //如果没有设置一个空路由的话, "/home" 会报错, 一定要 "/home/detail" 才行. 
  //     },
  //     {
  //       path: "login",
  //       component: LoginComponent
  //     },
  //     {
  //       path: "register",
  //       component: LoginComponent
  //     }
  //   ]
  // }
];

export const routing = RouterModule.forRoot(routes);