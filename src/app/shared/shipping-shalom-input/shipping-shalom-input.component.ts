import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'shipping-shalom-input',
  templateUrl: './shipping-shalom-input.component.html',
  styleUrls: ['./shipping-shalom-input.component.scss']
})
export class ShippingShalomInputComponent {
  public errorText: string | '' = '';

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: 'text' | 'number' | 'email' = 'text';
  @Input() control: FormControl = new FormControl<any>('');
  @Output() valor: EventEmitter<string> = new EventEmitter();


  write(event: any) {
    const value = event.target.value as string;
    /*
    if (!!this.control.errors) {
      const errorEmail: ValidationErrors = this.control.errors['email'];
      const errorMinlength: ValidationErrors = this.control.errors["minlength"];
      const errorMaxLength: ValidationErrors = this.control.errors["maxlength"];

      if (errorEmail) this.validacionEmail();
      if (!!errorMinlength) this.validacionCanntidadCaracteresInsuficientes(errorMinlength);
      if (!!errorMaxLength) this.validacionCanntidadCaracteresSobrePasa(errorMaxLength, value);
    } else {
      this.errorText = "";
      this.builderBorder(1, this.borderColor, false);
    }
     */
    this.valor.emit(value);
  }
}
