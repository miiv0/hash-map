class hashMap {

    constructor(size = 16) {
        this.buckets = new Array(size);
        this.size = size
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.buckets.length
        }

        return hashCode;
    }

    checkIndex(key) {
        let index = this.hash(key)
        if (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        return index
    }

    set(key, value) {
        let index = this.checkIndex(key)

        if (!this.buckets[index]) {
            this.buckets[index] = []
            this.buckets[index].push([key, value]);
        } else if (this.buckets[index]) {
            let found = false
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (key === this.buckets[index][i][0]) {
                    this.buckets[index][i][1] = value
                    found = true
                }
            } if (!found) {
                this.buckets[index].push([key, value]);
            }
        }
    }

    get(key) {
        let index = this.checkIndex(key)

        if (!this.buckets[index]) {
            return null
        } else if (this.buckets[index]) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (key === this.buckets[index][i][0]) {
                    const value = this.buckets[index][i][1]
                    return value
                }
            }
            return null
        }

    }
    
    has(key) {
        let index = this.checkIndex(key)

        if (!this.buckets[index]) {
            return false
        } else if (this.buckets[index]) {
            for (let i = 0; i < this.buckets[index].length; i++) {
                if (key === this.buckets[index][i][0]) {
                    return true
                }
            }
            return false
        }

    }

}

const test = new hashMap(4)
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('apple', 'green')