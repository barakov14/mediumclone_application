import {ChangeDetectionStrategy, Component, EventEmitter, inject, Output} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'
import {RouterLink} from '@angular/router'
import {AuthFacade, SignAuthRegisterPayload} from '@core/auth/data-access'
import {ErrorHandlerComponent} from '@core/error-handler'

@Component({
  selector: 'conduit-register-form-ui',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, ErrorHandlerComponent],
  templateUrl: './register-form-ui.component.html',
  styleUrl: './register-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormUiComponent {
  @Output() redirectToLogin = new EventEmitter()
  @Output() register = new EventEmitter()

  private readonly authFacade = inject(AuthFacade)


  public readonly authStatus = this.authFacade.status$
  public readonly authErrors = this.authFacade.authErrors$

  public formGroup = new FormBuilder().group({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  onRegister() {
    const req: SignAuthRegisterPayload = {
      user: {
        username: this.formGroup.value.username as string,
        email: this.formGroup.value.email as string,
        password: this.formGroup.value.password as string
      }
    }
    this.register.emit(req)
  }
  onRedirectToRegister() {
    this.redirectToLogin.emit()
  }
}
