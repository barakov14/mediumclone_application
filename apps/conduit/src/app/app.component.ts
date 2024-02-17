import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FooterComponent, BannerComponent, HeaderComponent} from '@conduit/layout'

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, BannerComponent],
  selector: 'conduit-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'conduit';
}
