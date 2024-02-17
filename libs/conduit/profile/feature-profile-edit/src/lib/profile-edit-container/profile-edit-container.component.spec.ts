import {ComponentFixture, TestBed} from '@angular/core/testing'
import {ProfileEditContainerComponent} from './profile-edit-container.component'

describe('ProfileEditContainerComponent', () => {
  let component: ProfileEditContainerComponent
  let fixture: ComponentFixture<ProfileEditContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEditContainerComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ProfileEditContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
