class Word {
    /**
     *
     * @param {String} partOfSpeech - Noun, Verb, etc.
     * @param {String} word - the word itself
     */
    constructor(partOfSpeech, word) {
        this.partOfSpeech = partOfSpeech;
        this.word = word;
        this.typeCheck(this.word, [String]);
    }

    get POS() {
        return this.partOfSpeech;
    }
    get render() {
        return `<div>${this.word}</div>`;
    }
    /**
     * Get the abbreviation of the part of speech
     * @param {NavigatorLanguage} lang User language
     * @returns Abbreviation of the part of speech
     */
    getPOSAbbr(lang) {
        return this.partOfSpeech; //TODO: Link to translate JSON file
    }

    /**
     * 
     * @param {Object} a The object to be checked
     * @param {Array[Object]} b The array of classes that a should be
     */
    typeCheck(a, b) {
        for (let i = 0; i < b.length; i++) {
            if (a instanceof b[i]) {
                return;
            }
        }
        throw new Error("Invalid type");
    }
}

class Noun extends Word {
    /**
     * The constructor for Noun
     * @param {String} word The word itself
     * @param {Boolean} plural True for plural, False for singular
     */
    constructor(word, plural) {
        super("Noun", word);
        this.plural = plural;
    }

    get render() {
        if (this.plural) {
            return `<div>${addS(this.word)}</div>`;
        } else {
            return `<div>${this.word}</div>`;
        }
    }
}

class Verb extends Word {
    /**
     * The constructor for Verb
     * @param {String} word The word itself(infinitive form)
     * @param {String} tense Present, Past, Future, etc.
     * @param {Number} person 1, 2, 3
     * @param {Boolean} number True for singular, False for plural
     * @param {String} voice Active, Passive, etc.
     * @param {Boolean} infinitive True for infinitive, False for not infinitive
     * @param {String} aspect Simple, Progressive, etc.
     */
    constructor(word, tense, person, number, voice, infinitive, aspect) {
        super("Verb", word);
        this.tense = tense;
        this.person = person;
        this.number = number;
        this.voice = voice;
        this.infinitive = infinitive;
        this.aspect = aspect;
    }

    get pastTense() {
        if (this.word.endsWith("e")) {
            return this.word + "d";
        } else if (this.word.endsWith("y")) {
            return this.word.slice(0, -1) + "ied";
        } else {
            return this.word + "ed";
        }
    }

    get continuousTense() {
        if (this.word.endsWith("ee")) {
            return this.word + "ing";
        } else if (this.word.endsWith("e")) {
            return this.word.slice(0, -1) + "ing";
        } else if (this.word.endsWith("ie")) {
            return this.word.slice(0, -2) + "ying";
        } else if (
            this.word.endsWith("p") ||
            this.word.endsWith("b") ||
            this.word.endsWith("t") ||
            this.word.endsWith("d") ||
            this.word.endsWith("g")
        ) {
            return this.word + this.word.slice(-1) + "ing";
        } else {
            return this.word + "ing";
        }
    }

    get render() {
        if (
            (this.tense === "Past" && this.aspect === "Simple") ||
            (this.voice === "Passive" && this.aspect === "Simple") ||
            (this.aspect === "Perfect" && this.tense !== "Continuous")
        ) {
            return `<div>${this.pastTense}</div>`;
        } else if (this.aspect === "Continuous") {
            return `<div>${this.continuousTense}</div>`;
        } else if (this.person === 3 && this.number === true) {
            return `<div>${addS(this.word)}</div>`;
        } else {
            return `<div>${this.word}</div>`;
        }
    }
}

class Adjective extends Word {
    /**
     * The constructor for Adjective
     * @param {String} word The word itself (original form)
     * @param {Noun, Pronoun} adjacentWord The word that this adjective describes
     * @param {Number} kind 0 for original, 1 for comparative, 2 for superlative
     */
    constructor(word, adjacentWord, kind) {
        super("Adjective", word);
        this.adjacentWord = adjacentWord;
        this.kind = kind;
        this.typeCheck(this.adjacentWord, [Noun]);
    }

    get comparative() {
        return this.word + "er";
    }

    get superlative() {
        return this.word + "est";
    }

    get render() {
        if (this.kind === 1) {
            return `<div>${this.comparative}</div>`;
        } else if (this.kind === 2) {
            return `<div>${this.superlative}</div>`;
        } else {
            return `<div>${this.word}</div>`;
        }
    }
}

class Adverb extends Word {
    /**
     * The constructor for Adverb
     * @param {String} word The word itself
     * @param {Word} nextWord The word that this adverb describes
     * @param {Array[String]} avaliableNextPOS The part of speech that the next word can be
     */
    constructor(word, nextWord, avaliableNextPOS) {
        super("Adverb", word);
        this.nextWord = nextWord;
        this.avaliableNextPOS = avaliableNextPOS;
        if (!this.avaliableNextPOS.includes(this.nextWord.partOfSpeech)) {
            throw new Error("Invalid part of speech");
        }
    }
}

// TODO: Pronoun, Preposition, Conjunction, Article, Interjection

// Helper functions

function addS(word) {
    if (
        word.endsWith("s") ||
        word.endsWith("x") ||
        word.endsWith("z") ||
        word.endsWith("ch") ||
        word.endsWith("sh")
    ) {
        return word + "es";
    } else if (word.endsWith("y")) {
        return word.slice(0, -1) + "ies";
    } else {
        return word + "s";
    }
}
