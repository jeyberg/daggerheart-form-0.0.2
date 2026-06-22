import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [FormField, JsonPipe],
  selector: 'app-character-form',
  template: `
    <form class="flex flex-col">
      <label for="name">Name</label>
      <input type="text" id="name" [formField]="characterForm.name">

      <label for="pronouns">Pronouns</label>
      <input type="text" id="pronouns" [formField]="characterForm.pronouns">

      <label for="level">Level</label>
      <input type="number" id="level" [formField]="characterForm.level">

      <label for="community">Community</label>
      <select id="community" [formField]="characterForm.community">
        <option value="Highborne">Highborne</option>
        <option value="Loreborne">Loreborne</option>
        <option value="Tidekin">Tidekin</option>
      </select>

      <label for="ancestry">Ancestry</label>
      <select id="ancestry" [formField]="characterForm.ancestry">
        <option value="Ribbit">Ribbit</option>
        <option value="Simiah">Simiah</option>
        <option value="Orc">Orc</option>
      </select>

      <label for="transformation">Transformation</label>
      <select id="transformation" [formField]="characterForm.transformation">
        <option value="Vampire">Vampire</option>
        <option value="Reanimated">Reanimated</option>
        <option value="Werewolf">Werewolf</option>
      </select>

      <label for="class">Class</label>
      <select id="class" [formField]="characterForm.class">
        <option value="Warrior">Warrior</option>
        <option value="Druid">Druid</option>
        <option value="Seraph">Seraph</option>
      </select>

      <label for="subclass1">Call of the Brave</label>
      <input type="radio" id="sublcass1" value="call_of_the_brave" [formField]="characterForm.subclass"/>

      <label for="subclass2">Call of the Slayer</label>
      <input type="radio" id="sublcass2" value="call_of_the_slayer" [formField]="characterForm.subclass"/>

<!-- Need custom component for selecting cards. One or multiple-->
      <label for="domainCards">Domain Cards</label>
      <select id="domainCards">
        <option value="Warrior">Warrior</option>
        <option value="Druid">Druid</option>
        <option value="Seraph">Seraph</option>
      </select>

      <label for="experience1">First Experience</label>
      <input type="text" id="experience1" [formField]="characterForm.experiences[0]">

      <label for="experience2">Second Experience</label>
      <input type="text" id="experience2" [formField]="characterForm.experiences[1]">
    </form>
    <p>
      {{ characterCreationModel() | json }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  styles: `
    input, select {
      border: 1px solid;
      border-radius: 2px;
    }
  `,
})
export class CharacterFormComponent {
  characterCreationModel = signal({
    name: '',
    pronouns: '',
    level: 1,
    community: '',
    ancestry: '',
    transformation: '',
    class: '',
    subclass: '',
    domainCards: [] as string[], // show all domain cards for class and tier
    experiences: ['', ''],
    inventory: [] as string[] // show all items for class and tier
  });

  characterForm = form(this.characterCreationModel);
}
