import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { AddStoreComponent } from './add-store/add-store.component';
import { UpdateStoreComponent } from './update-store/update-store.component';
 const routes: Routes = [ {path: "Store", component : StoreComponent},
 {path: "add-store", component : AddStoreComponent},
 { path: "", redirectTo: "store", pathMatch: "full" },
 {path: "updatestore/:id", component: UpdateStoreComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
