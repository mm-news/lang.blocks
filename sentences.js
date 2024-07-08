class Sentence {
    constructor(s, p) {
        this.subject = s;
        this.predicate = p;
    }
}

class DeclarativeSentence extends Sentence {
    /**
     * 
     * @param {Noun} s - Subject
     * @param {Verb} v - Predicate
     */
    constructor(s, v) {
        super(s, v)
    }
}