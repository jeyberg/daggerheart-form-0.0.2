import { Service, Signal, signal } from "@angular/core";

export interface CharacterData {
    name?: string;
    pronouns?: string;
    level?: number;

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

    currentHp?: number;
    maxHp?: number;
    currentStress?: number;
    maxStress?: number;
    currentHope?: number;
    maxHope?: number;
}

@Service()
export class LocalStorageService {
    private storageKey = 'dhc-char-data';
    private characterSignal = signal<CharacterData | undefined>(undefined);

    public getCharacterData(): Signal<CharacterData | undefined> {
        const data = localStorage.getItem(this.storageKey);
        
        if (data) {
            this.characterSignal.set(JSON.parse(data) as CharacterData);
            return this.characterSignal;
        }

        this.characterSignal.set(undefined);
        return this.characterSignal;
    }

    public saveCharacterData(data: Partial<CharacterData>): void {
        const character = this.characterSignal();

        const newData: CharacterData = { ...character, ...data };

        localStorage.setItem(this.storageKey, JSON.stringify(newData));
        this.characterSignal.set(newData);
    }
}