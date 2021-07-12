import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { InfoCharacterComponent } from './info-character/info-character.component';
const routes: Routes = [
  {
    path: '',
    component: CardComponent,
  },
  {
    path: 'info',
    component: InfoCharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardRoutingModule {}
