"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackNum = void 0;
class StackNum {
    constructor() {
        this.stackNum = [];
    }
    popArr() {
        this.stackNum.pop();
    }
    pushArr(value) {
        if (value !== undefined) {
            this.stackNum.push(value);
        }
    }
    peek() {
        return this.stackNum[this.size() - 1];
    }
    size() {
        return this.stackNum.length;
    }
}
exports.StackNum = StackNum;
//# sourceMappingURL=stack.js.map