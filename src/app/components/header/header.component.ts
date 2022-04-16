import { Component, Input } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() nameTitle: string = 'dsds';

}
