import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { FormExpensesComponent } from './components/form-expenses/form-expenses.component';

@NgModule({
  declarations: [
    MainPageComponent,
    ListExpensesComponent,
    FormExpensesComponent,
  ],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class PersonalExpensesModule {}
