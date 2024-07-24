// @ts-check

class Word {
  /**
   *
   * @param {String} partOfSpeech - Noun, Verb, etc.
   * @param {String} word - the word itself
   * @param {JSON} sentenceArgs - the arguments for the sentence
   */
  constructor(partOfSpeech, word, sentenceArgs) {
    this.partOfSpeech = partOfSpeech;
    this.word = word;
    this.sentenceArgs = sentenceArgs;
  }

  get POS() {
    return this.partOfSpeech;
  }
  get render() {
    /** #(I, D)(word)
     * I for input box
     * D for div block
     * e.g. #D(happy)
     */
    return `#D(${this.word})`;
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
   * A function to check the type of a variable is in the array of classes
   * @param {Object} a The object to be checked
   * @param {Array[Object]} b The array of classes that a should be
   */
}

class NounLike extends Word {
  /**
   *
   * @param {String} partOfSpeech - Noun, Pronoun, etc.
   * @param {String} word The word itself
   * @param {JSON} sentenceArgs
   */
  constructor(partOfSpeech, word, sentenceArgs) {
    super(partOfSpeech, word, sentenceArgs);
  }
}

class Noun extends NounLike {
  /**
   * The constructor for Noun
   * @param {String} word The word itself
   * @param {Boolean} plural True for plural, False for singular
   * @param {NounModifier} modifier The determiner of the noun
   * @param {JSON} sentenceArgs The arguments for the sentence
   */
  constructor(word, plural, modifier, sentenceArgs) {
    super("Noun", word, sentenceArgs);
    this.plural = plural;
    this.modifier = modifier;
  }

  get render() {
    if (this.plural) {
      return `#D(${addS(this.word)})`;
    } else {
      return `#D(${this.word})`;
    }
  }
}

class Pronoun extends NounLike {
  /**
   * The constructor for Pronoun
   * @param {String} word The word itself
   * @param {Number} person The person of the pronoun between 1 and 3
   * @param {Boolean} plural True for plural, False for singular
   * @param {JSON} sentenceArgs The arguments for the sentence
   */
  constructor(word, person, plural, sentenceArgs) {
    super("Pronoun", word, sentenceArgs);
    this.person = person;
    this.plural = plural;
  }
}

class Verb extends Word {
  /**
   * The constructor for Verb
   * @param {String} word The word itself(infinitive form)
   * @param {String} tense Present, Past, Future, etc.
   * @param {Number} person 1, 2, 3
   * @param {Boolean} plural True for plural, False for singular
   * @param {String} voice Active, Passive, etc.
   * @param {Boolean} infinitive True for infinitive, False for not infinitive
   * @param {String} aspect Simple, Progressive, etc.
   * @param {JSON} sentenceArgs The arguments for the sentence
   */
  constructor(
    word,
    tense,
    person,
    plural,
    voice,
    infinitive,
    aspect,
    sentenceArgs
  ) {
    super("Verb", word, sentenceArgs);
    this.tense = tense;
    this.person = person;
    this.plural = plural;
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
      return `#D(${this.pastTense})`;
    } else if (this.aspect === "Continuous") {
      return `#D(${this.continuousTense})`;
    } else if (this.person === 3 && this.plural === false) {
      return `#D(${addS(this.word)})`;
    } else {
      return `#D(${this.word})`;
    }
  }
}

class NounModifier extends Word {
  constructor(partOfSpeech, word, sentenceArgs) {
    super(partOfSpeech, word, sentenceArgs);
  }
}

class Adjective extends NounModifier {
  /**
   * The constructor for Adjective
   * @param {String} word The word itself (original form)
   * @param {NounLike} nextWord The word that this adjective describes
   * @param {Number} kind 0 for original, 1 for comparative, 2 for superlative
   * @param {JSON} sentenceArgs The arguments for the sentence
   */
  constructor(word, nextWord, kind, sentenceArgs) {
    super("Adjective", word, sentenceArgs);
    this.nextWord = nextWord;
    this.kind = kind;
  }

  get comparative() {
    return this.word + "er";
  }

  get superlative() {
    return this.word + "est";
  }

  get render() {
    if (this.kind === 1) {
      return `#D(${this.comparative})`;
    } else if (this.kind === 2) {
      return `#D(${this.superlative})`;
    } else {
      return `#D(${this.word})`;
    }
  }
}

class Determiner extends NounModifier {
  constructor(word, sentenceArgs) {
    super("Determiner", word, sentenceArgs);
  }
}

class Adverb extends Word {
  /**
   * The constructor for Adverb
   * @param {String} word The word itself
   * @param {Word} nextWord The word that this adverb describes
   * @param {Array[Object]} avaliableNextPOS The part of speech that the next word can be
   * @param {JSON} sentenceArgs The arguments for the sentence
   */
  constructor(word, nextWord, avaliableNextPOS, sentenceArgs) {
    super("Adverb", word, sentenceArgs);
    this.nextWord = nextWord;
    this.avaliableNextPOS = avaliableNextPOS;
  }
}

class Preposition extends Word {
  constructor(word, nextWord, sentenceArgs) {
    super("Preposition", word, sentenceArgs);
    this.nextWord = nextWord;
  }
}

class Conjunction extends Word {
  constructor(word, previousWord, nextWord, sentenceArgs) {
    super("Conjunction", word, sentenceArgs);
    this.previousWord = previousWord;
    this.nextWord = nextWord;
  }
}

class Interjection extends Word {
  constructor(word, sentenceArgs) {
    super("Interjection", word, sentenceArgs);
  }

  get render() {
    return `#D(${this.word})!`;
  }
}

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
