import {ComponentFixture, TestBed} from '@angular/core/testing'
import {ArticleCreateContainerComponent} from './article-create-container.component'

describe('ArticleCreateContainerComponent', () => {
  let component: ArticleCreateContainerComponent
  let fixture: ComponentFixture<ArticleCreateContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleCreateContainerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ArticleCreateContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
