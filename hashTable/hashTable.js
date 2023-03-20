
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    //! Metodo hash para crear un id para mi key
    hashMethod(key) {
        let hash = 0;
        for(let i=0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    //!Metodo para agregar elementos a nuestro hashTable -> set

    set(key,value) {
        const address = this.hashMethod(key);
        if(!this.data[address]) {    //! le estamos indicando que si no existe valor, me cree un arreglo vacio
            this.data[address] = [];
        }
        this.data[address].push([key,value]); //! Aquí le estamos diciendo que en caso que ya exista un dato, no me sobresciba, si no que agregué el nuevo dato en esa posición.
        return this.data;
    }

    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i=0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        } else {
            return undefined;
        }
    }

    delete(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                let arrDeletedItems = currentBucket.splice(i,1);
                return currentBucket;
                }
            }
        } else {
        return undefined;
        }
    }

}

//! le estamos indicando que mi hashTable tenga 50 espacios libres (buckets)
let hashTable = new HashTable(50);
console.log(hashTable);
hashTable.set("Diego", "28");
hashTable.set("Mariana", "15");
hashTable.set("Alejandra", "20");   
console.log(hashTable);