import { Istack } from "./Istack";
export declare class StackNum<T> implements Istack<T> {
    stackNum: T[];
    popArr(): void;
    pushArr(value: T | undefined): void;
    peek(): T | undefined;
    size(): number;
}
