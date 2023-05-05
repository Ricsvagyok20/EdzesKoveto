import { Movement } from "./Movement";

export interface Workout {
    name: string;
    movements: Array<Movement>;
    length: number;
    calories_burned: number;
}