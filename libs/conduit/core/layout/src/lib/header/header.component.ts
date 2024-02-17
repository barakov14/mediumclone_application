import {Component, inject} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterLink} from '@angular/router'
import {AuthFacade} from '@core/auth/data-access'
import {PushPipe} from '@ngrx/component'

@Component({
  selector: 'conduit-header',
  standalone: true,
  imports: [CommonModule, RouterLink, PushPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly authFacade = inject(AuthFacade)
  public readonly isAuthenticated$ = this.authFacade.isAuthenticated$

}
