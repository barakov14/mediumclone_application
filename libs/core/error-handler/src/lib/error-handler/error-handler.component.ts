import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SignAuthErrors} from '@core/auth/data-access'

@Component({
  selector: 'core-error-handler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorHandlerComponent implements OnInit {
  @Input('errors') errors!: SignAuthErrors

  errorMessages?: string[]
  ngOnInit() {
    this.updateErrorMessages();
  }

  private updateErrorMessages() {
    if (this.errors) {
      this.errorMessages = Object.entries(this.errors).map(([name, messages]) => {
        const joinedMessages = messages.join(', ');
        return `${name}: ${joinedMessages}`;
      });
    } else {
      this.errorMessages = [];
    }
  }
}
