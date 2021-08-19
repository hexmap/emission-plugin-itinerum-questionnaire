/* 
 * lib/questions/sharedProps.ts
 */

export interface SharedQuestionProps {
    id: number;
    title: string;
    enum: string[];
    required: boolean;
}