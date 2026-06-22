import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CharacterFormComponent } from './character-creation/character-form.component';
import { LocalStorageService } from './local-storage.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'daggerheart-form-0.0.2';

  storage = inject(LocalStorageService);
  router = inject(Router);

  characterData = this.storage.getCharacterData();

  public ngOnInit(): void {
    if (!this.characterData()) {
      this.router.navigate(['/character-creation']);
    }
  }
}
