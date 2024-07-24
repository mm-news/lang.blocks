// @ts-check This file contains the functions that are used to generate the grammatical subcategories for the grammar rules.

// Nouns subcategories

class NotCountableNoun extends Noun {
  /**
   * Not countable noun class
   * @param {String} word The word itself
   * @param {Determiner} modifier The determiner of the noun
   * @param {JSON} sentenceArgs
   */
  constructor(word, modifier, sentenceArgs) {
    super(word, false, modifier, sentenceArgs);
  }
}

class AnimateNoun extends Noun {
  /**
   * Animate noun class
   * @param {String} word The word itself
   * @param {Boolean} plural True for plural, False for singular
   * @param {Determiner} modifier The determiner of the noun
   * @param {JSON} sentenceArgs
   */
  constructor(word, plural, modifier, sentenceArgs) {
    super(word, plural, modifier, sentenceArgs);
    this.possessive = this.toPossessive(word);
  }

  toPossessive(word) {
    if (word.endsWith("s")) {
      return word + "'";
    } else {
      return word + "'s";
    }
  }

  get PossessiveAdj() {
    return new PossessiveAdjective(
      this.toPossessive(this.word),
      this.sentenceArgs
    );
  }

  get PossessivePro() {
    return new PossessivePronoun(
      this.toPossessive(this.word),
      3,
      this.plural,
      this.sentenceArgs
    );
  }
}

class CollectiveNoun extends NotCountableNoun {
  /**
   * Collective noun class
   * @param {String} word The word itself
   * @param {Determiner} modifier The determiner of the noun
   * @param {JSON} sentenceArgs
   */
  constructor(word, modifier, sentenceArgs) {
    super(word, modifier, sentenceArgs);
  }
}

class MeterialNoun extends NotCountableNoun {
  /**
   *
   * @param {String} word The word itself
   * @param {Determiner} modifier ZeroArticle, DefiniteArticle, Quantifier, etc.
   * @param {JSON} sentenceArgs
   */
  constructor(word, modifier, sentenceArgs) {
    super(word, modifier, sentenceArgs);
  }
}

class AbstractNoun extends NotCountableNoun {
  /**
   *
   * @param {String} word The word itself
   * @param {Determiner} modifier
   * @param {JSON} sentenceArgs
   */
  constructor(word, modifier, sentenceArgs) {
    super(word, modifier, sentenceArgs);
  }
}

class ProperNoun extends Noun {
  /**
   *
   * @param {String} word The word itself
   * @param {Boolean} plural True for plural, False for singular
   * @param {JSON} sentenceArgs
   */
  constructor(word, plural, sentenceArgs) {
    super(word, plural, new ZeroArticle(sentenceArgs), sentenceArgs);
  }
}

// Verbs subcategories

// Adjectives subcategories

class PossessiveAdjective extends Adjective {
  constructor(word, nextWord, sentenceArgs) {
    super(word, nextWord, 0, sentenceArgs);
  }
}

// Adverbs subcategories

// Pronouns subcategories

class ObjectiveCasePronoun extends Pronoun {
  constructor(word, person, plural, sentenceArgs) {
    super(word, person, plural, sentenceArgs);
  }
}

class PossessivePronoun extends Pronoun {
  constructor(word, person, plural, sentenceArgs) {
    super(word, person, plural, sentenceArgs);
  }
}

class ReflexivePronoun extends Pronoun {
  constructor(word, person, plural, sentenceArgs) {
    super(word, person, plural, sentenceArgs);
  }
}

class PersonalPronoun extends Pronoun {
  /**
   * Personal pronoun class
   * @param {String} subjective The subjective case of the pronoun
   * @param {ObjectiveCasePronoun} objective The objective case of the pronoun
   * @param {PossessiveAdjective} possessiveA The possessive adjective of the pronoun
   * @param {PossessivePronoun} possessiveN The possessive pronoun of the pronoun
   * @param {ReflexivePronoun} reflexive The reflexive pronoun of the pronoun
   * @param {Number} person The person of the pronoun between 1 and 3
   * @param {Boolean} plural True for plural, False for singular
   * @param {JSON} sentenceArgs The arguments for the sentence
   */
  constructor(
    subjective,
    objective,
    possessiveA,
    possessiveN,
    reflexive,
    person,
    plural,
    sentenceArgs
  ) {
    super(subjective, person, plural, sentenceArgs);
    this.subjective = subjective;
    this.objective = objective;
    this.possessiveA = possessiveA;
    this.possessiveN = possessiveN;
    this.reflexive = reflexive;
  }
}
// Prepositions subcategories

// Conjunctions subcategories

// Determiner subcategories

//TODO: Render function
class DefiniteArticle extends Determiner {
  constructor(sentenceArgs) {
    super("the", sentenceArgs);
  }
}

class IndefiniteArticle extends Determiner {
  constructor(word, sentenceArgs) {
    super(word, sentenceArgs);
  }
}

class ZeroArticle extends Determiner {
  constructor(sentenceArgs) {
    super("", sentenceArgs);
  }
}
// Interjections subcategories

// Helper functions
