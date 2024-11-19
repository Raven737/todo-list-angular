import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { todoReducer } from './state/todo.reducer';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ todos: todoReducer }), // Реєструємо ред'юсер
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Зберігати 25 станів для відстеження
      logOnly: environment.production, // Увімкнути логування тільки у продакшн-режимі
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}