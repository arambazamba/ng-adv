import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food/food.model';

@Component({
  selector: 'app-integration-test',
  templateUrl: './integration-test.component.html',
  styleUrls: ['./integration-test.component.scss'],
})
export class IntegrationTestComponent {
  f: FoodItem = { id: 99, name: 'Cordon Bleu', rating: 4 };
}
