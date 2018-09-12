class PriorityQueue {
	constructor() {
		this.collection = [];
	}

	print() {
		console.log(this.collection);
	}

	enqueue(element) {
		if(this.isEmpty()){
			this._add(element);
		}else {
			let added = false;

			for(let i = 0; i < this.collection.length; i++) {
				if(element[1] < this.collection[i][1]) {
					this.collection.splice(i, 0, element)
					added = true;
					break;
				}
			}

			if(!added) {
				this._add(element);
			}
		}
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

	/**
	 * @private
	 */
	_add(element) {
		this.collection = [
			...this.collection,
			element
		];
	}
}