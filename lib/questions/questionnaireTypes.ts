/* 
 * www/itinerum_questionnaire/questionStackTypes.ts
 */

export const QuestionTypes: {[key: string]: string} = {
    dropdown: 'DROPDOWN',
    checkbox: 'CHECKBOX',
    number: 'NUMBER',
    address: 'ADDRESS',
    textBox: 'TEXTBOX',
};

export type DropdownOption = string;
export type CheckboxOption = string;

export type StackQuestion = {
    id: number,
    type: keyof typeof QuestionTypes,
    title: string,
    fieldName: string,
    options?: DropdownOption[] | CheckboxOption[],
};


interface SurveyStackSchemaProperties {
    [name: string]: any
}

interface SurveyStackSchemaDependency {
    [name: string]: any
}

interface SurveyStackSchema {
    type: string;
    properties: SurveyStackSchemaProperties;
    dependencies: SurveyStackSchemaDependency;
    propertyOrder: string[];
}

export interface SurveyStackQuestions {
    options: any;
    schema: SurveyStackSchema;
}
