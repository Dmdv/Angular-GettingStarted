import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { Comment } from '@angular/compiler';

@NgModule({
  // directive components and pipes which we defined
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  // Everything that we use from other sources such as Angular or vendors or external modules
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
