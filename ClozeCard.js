module.exports = function Cloze(fulltext,cloze){
	if(this instanceof Cloze){
		if(fulltext.indexOf(cloze) == -1){
			console.log(cloze+" does not appear in "+fulltext)
		} else {
			this.cloze = cloze;
			this.fulltext  = fulltext;
			this.partial = fulltext.replace(cloze, " ... ")
		}
	} else{
		return new Cloze(fulltext,cloze);
	}

}