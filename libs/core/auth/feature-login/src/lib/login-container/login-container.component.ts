import {ChangeDetectionStrategy, Component, inject} from '@angular/core'
import {CommonModule} from '@angular/common'
import {LoginFormUiComponent} from '@auth/feature-login'
import {ReactiveFormsModule} from '@angular/forms'
import {Router} from '@angular/router'
import {Store} from '@ngrx/store'
import {authActions, SignAuthPayload} from '@core/auth/data-access'

@Component({
  selector: 'conduit-login-container',
  standalone: true,
  imports: [CommonModule, LoginFormUiComponent, ReactiveFormsModule],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
  private readonly router = inject(Router)
  private readonly store = inject(Store)
  onRedirectToRegister() {
    this.router.navigate(['/register'])
  }
  onLogin(req: SignAuthPayload){
    console.log(req)
    this.store.dispatch(authActions.login({req}))
  }
}
