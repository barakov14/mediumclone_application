import {ChangeDetectionStrategy, Component, EventEmitter, inject, Output} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'
import {RouterLink} from '@angular/router'
import {AuthFacade, SignAuthPayload} from '@core/auth/data-access'
import {ErrorHandlerComponent} from '@core/error-handler'


@Component({
  selector: 'conduit-login-form-ui',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ErrorHandlerComponent],
  templateUrl: './login-form-ui.component.html',
  styleUrl: './login-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormUiComponent {
  @Output() redirectToRegister = new EventEmitter()
  @Output() login = new EventEmitter()

  private readonly authFacade = inject(AuthFacade)

  public readonly authStatus = this.authFacade.status$
  public readonly authErrors = this.authFacade.authErrors$

  public formGroup = new FormBuilder().group({
    email: new FormControl('adikbarakov123@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123456', [Validators.required])
  });
  onLogin() {
    const req: SignAuthPayload = {
      user: {
        email: this.formGroup.value.email as string,
        password: this.formGroup.value.password as string
      }
    }
    this.login.emit(req)
  }
  onRedirectToRegister() {
    this.redirectToRegister.emit()
  }
}
