import {Component} from '@angular/core';
import {Subject} from "rxjs";

@Component({
  selector: 'delete-tracking',
  templateUrl: './delete-tracking.component.html',
  styleUrls: ['./delete-tracking.component.scss']
})
export class DeleteTrackingComponent {
  public onConfirm: Subject<boolean> = new Subject<boolean>();

  close() {
    this.onConfirm.next(false)
  }
}
