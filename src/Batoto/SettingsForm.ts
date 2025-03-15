import { Form, Section, SelectRow } from "@paperback/types";
import { BTLanguages } from "./BatoHelper";

// Function to get the selected languages from the application state
export function getLanguages(): string[] {
    return (
        (Application.getState("languages") as string[] | undefined) ??
        BTLanguages.getDefault()
    );
}

// Class for managing language settings in a form
export class BatoSettingsForm extends Form {
    // State management for the languages field
    private languagesState = new State<string[]>(
        this,
        "languages",
        getLanguages(),
    );

    // Override to define the sections of the form
    override getSections(): Application.FormSectionElement[] {
        return [
            this.createLanguageSettingsSection(), // Only language-related section
        ];
    }

    // Create the language settings section
    private createLanguageSettingsSection(): Application.FormSectionElement {
        return Section("languageSettings", [
            SelectRow("languages", {
                title: "Languages",
                value: this.languagesState.value,
                minItemCount: 1,
                maxItemCount: 100,
                options: BTLanguages.getMDCodeList().map((x) => ({
                    id: x,
                    title: BTLanguages.getName(x),
                })),
                onValueChange: this.languagesState.selector,
            }),
        ]);
    }
}

// Class for managing state of a form field
class State<T> {
    private _value: T;
    public get value(): T {
        return this._value;
    }

    public get selector(): SelectorID<(value: T) => Promise<void>> {
        return Application.Selector(this as State<T>, "updateValue");
    }

    constructor(
        private form: Form,
        private persistKey: string,
        value: T,
    ) {
        this._value = value;
    }

    // Update the state value and persist it
    public async updateValue(value: T): Promise<void> {
        this._value = value;
        Application.setState(value, this.persistKey);
        this.form.reloadForm();
    }
}
