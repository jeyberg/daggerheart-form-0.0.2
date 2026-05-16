import { Injectable, signal } from "@angular/core";

export interface CharacterModel {
    name?: string;
    pronouns?: string;
    level: number;
    community?: string;
    ancestry?: string;
    transformation?: string;
    experiences?: string[];
    class?: string;
    subclass?: string;
    domainCards?: string[];
    primaryWeapon?: string;
    secondaryWeapon?: string;
    armor?: string;
    inventory?: string[];
}

@Injectable({ providedIn: 'root' })
export class CharacterService {

    private readonly characterModel = signal<CharacterModel | undefined>(undefined);

    public getCharacterModel(): CharacterModel | undefined {
        return this.characterModel();
    }

    public saveCharacterModel(model: CharacterModel): void {
        this.characterModel.set(model);
    }

    public deleteCharacterModel(): void {
        this.characterModel.set(undefined);
    }
}