import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterFormComponent } from './character-creation/character-form.component';

@Component({
    selector: 'app-root',
    imports: [CharacterFormComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'daggerheart-form-0.0.2';
}
