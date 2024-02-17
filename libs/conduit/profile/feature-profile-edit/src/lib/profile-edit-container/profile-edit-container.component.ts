import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ProfileEditComponent} from '../profile-edit/profile-edit.component'

@Component({
  selector: 'conduit-profile-edit-container',
  standalone: true,
  imports: [CommonModule, ProfileEditComponent],
  templateUrl: './profile-edit-container.component.html',
  styleUrl: './profile-edit-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditContainerComponent {}
