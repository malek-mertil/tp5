import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { FormsModule } from '@angular/forms';
import { UpdateStoreComponent } from './update-store/update-store.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AddStoreComponent,
    UpdateStoreComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
