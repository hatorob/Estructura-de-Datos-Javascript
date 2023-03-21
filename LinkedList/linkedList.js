//  1 --> 2 --> 3 --> 4 --> 5 --> null

let LinkedList = {
        head: {
           value: 1,
           next: {
            value: 2,
            next: {
                vale:3,
                next: {
                    value: 4,
                    next: null
                }
            }
           } 
        }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySingleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head; //!La cola

        this._length = 1;
    }

    append(value) {
        let nodo = new Node(value);
        this.tail.next = nodo;
        this.tail = nodo;
        this._length++;
        return this;
    }

    insert(value) {
        let nodo = new Node(value);
        let current = this.head;
        if(!this.head.next) {
           this.head.next = nodo;
           this.length++;
        } else {
          while(current.next) {
            current = current.next;
          }
          if(!current.next) {
            current.next = nodo;
            this.tail = current.next
            this._length++;
          }
        } 
    }
}

let list = new MySingleLinkedList(1);
list.insert(2);
list.insert(3);
list.insert(4);
list

