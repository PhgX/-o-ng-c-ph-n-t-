import { Istack } from "./Istack";

export class StackNum<T>  implements Istack<T> {
    stackNum: T[] = [];  
    
    popArr(): void {        
        this.stackNum.pop();        
    }

    pushArr(value: T | undefined): void{    
        if(value !== undefined){
            this.stackNum.push(value)
        }
    }

    peek(): T | undefined {
       return this.stackNum[this.size() - 1];
    }

    size(): number {
        return this.stackNum.length;
    }
}