import {Component, Input} from '@angular/core';

@Component({
  selector: 'shipping-shalom-button',
  templateUrl: './shipping-shalom-button.component.html',
  styleUrls: ['./shipping-shalom-button.component.scss']
})
export class ShippingShalomButtonComponent {
  @Input() name: string = '';
  @Input() colorName: string = 'white';
  @Input() colorContent: string = '#ee2a2f';
}
