function ClozeCard(text, cloze) {
    if (!(this instanceof ClozeCard))
        return new ClozeCard(text, cloze);
    
    this.fullText = text;
    this.cloze = cloze;
    // this.partial = text.replace(cloze, '...');
}

//USING STRING METHOD REPLACE TO REMOVE PART OF SENTENCE
ClozeCard.prototype.partText = function () {
    return this.fullText.replace(this.cloze, '..........');
};
// DISPLAY ONLY THE SOLUTION
ClozeCard.prototype.clozeText = function () {
    return this.cloze;
};





module.exports = ClozeCard;