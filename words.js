class Word {
    /**
     * 
     * @param {String} partOfSpeech - Noun, Verb, etc.
     * @param {String} word - the word itself
     */
    constructor(partOfSpeech, word) {
        this.partOfSpeech = partOfSpeech;
        this.word = word;
    }

    get POS() {
        return this.partOfSpeech
    }
    getPOSAbbr(lang) {
        return this.partOfSpeech
    }
}
