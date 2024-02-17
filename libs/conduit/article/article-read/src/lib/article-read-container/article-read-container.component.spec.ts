import {ComponentFixture, TestBed} from '@angular/core/testing'
import {ArticleReadContainerComponent} from './article-read-container.component'

describe('ArticleReadContainerComponent', () => {
  let component: ArticleReadContainerComponent
  let fixture: ComponentFixture<ArticleReadContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleReadContainerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ArticleReadContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
