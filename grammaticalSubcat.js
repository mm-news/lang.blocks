// This file contains the functions that are used to generate the grammatical subcategories for the grammar rules.

// Nouns subcategories

class NotCountableNoun extends Noun {
  constructor(word, sentenceArgs) {
    super(word, false, sentenceArgs);
  }
}

class CollectiveNoun extends NotCountableNoun {
  constructor(word, sentenceArgs) {
    super(word, sentenceArgs);
  }
}

class MeterialNoun extends NotCountableNoun {
  constructor(word, sentenceArgs) {
    super(word, sentenceArgs);
  }
}

class AbstractNoun extends NotCountableNoun {
  constructor(word, sentenceArgs) {
    super(word, sentenceArgs);
  }
}

class ProperNoun extends Noun {
  constructor(word, plural, sentenceArgs) {
    super(word, plural, sentenceArgs);
  }
}

// Verbs subcategories

// Adjectives subcategories

// Adverbs subcategories

// Pronouns subcategories

class PersonalPronoun extends Pronoun {
  /**
   * Personal pronouns are pronouns that are associated primarily with a particular person, in the grammatical sense.
   * @param {String} subjective The subjective case of the pronoun
   * @param {String} objective The objective case of the pronoun
   * @param {Adjective} possessiveA The adjective possessive case of the pronoun
   * @param {Noun} possessiveN The noun possessive case of the pronoun
   * @param {String} reflexive The reflexive case of the pronoun
   * @param {Number} person A number between 1 and 3 representing the person of the pronoun
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

// Articles subcategories

// Interjections subcategories

// Helper functions
