class hashMap {

    constructor(size = 50) {
        this.buckets = new Array(size);
        this.size = size
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    setItem(key, value) {
        let index = this.hash(key)
        console.log(key)

        if (!this.buckets[index]) {
            this.buckets[index] = []
        }
    }

}