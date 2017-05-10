function BasicCard(front, back) {
    if (!(this instanceof BasicCard))
        return new BasicCard(front, back);
    
    this.front = front;
    this.back = back;

    //add printFront method to prototype
    BasicCard.prototype.printFront = function() {
	console.log(this.front);
};
//add printBack method to prototype
    BasicCard.prototype.printBack = function() {
	console.log(this.back);
};


};


module.exports = BasicCard;