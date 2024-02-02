import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonalExpensesModule } from './personal-expenses/personal-expenses.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PersonalExpensesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
