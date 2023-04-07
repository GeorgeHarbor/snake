import position from "./position";

export default class snakeItem {
    currPosition: position | undefined;
    isHead: boolean;
    next: snakeItem | undefined;
    prev: snakeItem | undefined;
    constructor(next?: snakeItem | undefined, prev?: snakeItem | undefined, isHead: boolean = false) {
        this.next = next;
        this.prev = prev;
        this.isHead = isHead;
    }
}
