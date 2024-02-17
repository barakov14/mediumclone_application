import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProfileComponent} from '../profile/profile.component'

@Component({
  selector: 'conduit-profile-container',
  standalone: true,
  imports: [CommonModule, ProfileComponent],
  templateUrl: './profile-container.component.html',
  styleUrl: './profile-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileContainerComponent {}
