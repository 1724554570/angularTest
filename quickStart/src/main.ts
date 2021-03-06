import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 连同Angular编译器一起发布到浏览器
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// Angular编译器在浏览器中编译并引导该应用
platformBrowserDynamic().bootstrapModule(AppModule);
