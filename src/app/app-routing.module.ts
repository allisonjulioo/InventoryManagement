import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { ReceivementComponent } from './pages/receivement/receivement.component';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryComponent,
    pathMatch: 'full',
    data: { title: 'Inventario' },
  },
  {
    path: 'received/:id',
    component: ReceivementComponent,
    pathMatch: 'full',
    data: { title: 'Recebimento' },
  },
  { path: '**', redirectTo: 'inventory' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
