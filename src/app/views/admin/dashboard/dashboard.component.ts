import {ChangeDetectionStrategy, Component} from '@angular/core';
import {uitAnimations} from "../../../shared/animations/uit-animations";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: uitAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  //implement

}
