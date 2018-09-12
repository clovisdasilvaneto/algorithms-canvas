class BasicQueue {
	constructor() {
		this.collection = [];
	}

	print() {
		console.log(this.collection);
	}

	enqueue(element) {
		this.collection = [
			...this.collection,
			element
		];
	}

	front() {
		return this.collection[0];
	}

	dequeue() {
		return this.collection.shift();
	}

	size() {
		return this.collection.length
	}

	isEmpty() {
		return this.size() === 0;
	}
}