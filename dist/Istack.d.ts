export interface Istack<T> {
    pushArr(value: T): void;
    popArr(): void;
    peek(): T | undefined;
    size(): number;
}
