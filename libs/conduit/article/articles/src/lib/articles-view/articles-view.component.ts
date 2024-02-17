import {ChangeDetectionStrategy, Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagsListComponent} from '../tags-list/tags-list.component'
import {BannerComponent} from '@conduit/layout'

@Component({
  selector: 'conduit-articles-view',
  standalone: true,
  imports: [CommonModule, TagsListComponent, BannerComponent],
  templateUrl: './articles-view.component.html',
  styleUrl: './articles-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesViewComponent {}
