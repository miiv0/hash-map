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
            hashCode = hashCode % buckets.length
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
        }
    }

    get(key) {
        let index = this.checkIndex(key)

        if (!this.buckets[index]) {
            throw new Error("This key does not exist")
        }
    }

    set(key) {

    }

}