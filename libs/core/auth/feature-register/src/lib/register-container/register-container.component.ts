import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {CommonModule} from '@angular/common'
import {Router} from '@angular/router'
import {RegisterFormUiComponent} from '../register-form-ui/register-form-ui.component'
import {authActions, SignAuthRegisterPayload} from '@core/auth/data-access'
import {Store} from '@ngrx/store'

@Component({
  selector: 'conduit-register-container',
  standalone: true,
  imports: [CommonModule, RegisterFormUiComponent],
  templateUrl: './register-container.component.html',
  styleUrl: './register-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContainerComponent {
  private readonly router = inject(Router)
  private readonly store = inject(Store)
  onRedirectToLogin() {
    this.router.navigate(['/login'])
  }
  onRegister(req: SignAuthRegisterPayload) {
    this.store.dispatch(authActions.register({req}))
  }
}
