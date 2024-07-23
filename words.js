// This file contains all the word classes
// Nouns

// Verbs

// Adjectives

// Adverbs

// Pronouns

class I extends PersonalPronoun {
  constructor(sentenceArgs) {
    super(
      "I",
      new ObjectiveCasePronoun("me", 1, false, sentenceArgs),
      new PossessiveAdjective("my", sentenceArgs),
      new PossessivePronoun("mine", 1, false, sentenceArgs),
      new ReflexivePronoun("myself", 1, false, sentenceArgs),
      1,
      false,
      sentenceArgs
    );
  }
}

class SingularYou extends PersonalPronoun {
  constructor(sentenceArgs) {
    super(
      "you",
      new ObjectiveCasePronoun("you", 2, false, sentenceArgs),
      new PossessiveAdjective("your", sentenceArgs),
      new PossessivePronoun("yours", 2, false, sentenceArgs),
      new ReflexivePronoun("yourself", 2, false, sentenceArgs),
      2,
      false,
      sentenceArgs
    );
  }
}

class He extends PersonalPronoun {
  constructor(sentenceArgs) {
    super(
      "he",
      new ObjectiveCasePronoun("him", 3, false, sentenceArgs),
      new PossessiveAdjective("his", sentenceArgs),
      new PossessivePronoun("his", 3, false, sentenceArgs),
      new ReflexivePronoun("himself", 3, false, sentenceArgs),
      3,
      false,
      sentenceArgs
    );
  }
}

class She extends PersonalPronoun {
  constructor(sentenceArgs) {
    super(
      "she",
      new ObjectiveCasePronoun("her", 3, false, sentenceArgs),
      new PossessiveAdjective("her", sentenceArgs),
      new PossessivePronoun("hers", 3, false, sentenceArgs),
      new ReflexivePronoun("herself", 3, false, sentenceArgs),
      3,
      false,
      sentenceArgs
    );
  }
}

class It extends PersonalPronoun {
  constructor(sentenceArgs) {
    super(
      "it",
      new ObjectiveCasePronoun("it", 3, false, sentenceArgs),
      new PossessiveAdjective("its", sentenceArgs),
      new PossessivePronoun("its", 3, false, sentenceArgs),
      new ReflexivePronoun("itself", 3, false, sentenceArgs),
      3,
      false,
      sentenceArgs
    );
  }
}

class We extends PersonalPronoun {
  constructor(sentenceArgs) {
    super(
      "we",
      new ObjectiveCasePronoun("us", 1, true, sentenceArgs),
      new PossessiveAdjective("our", sentenceArgs),
      new PossessivePronoun("ours", 1, true, sentenceArgs),
      new ReflexivePronoun("ourselves", 1, true, sentenceArgs),
      1,
      true,
      sentenceArgs
    );
  }
}

class PluralYou extends PersonalPronoun {
  constructor(sentenceArgs) {
    super(
      "you",
      new ObjectiveCasePronoun("you", 2, true, sentenceArgs),
      new PossessiveAdjective("your", sentenceArgs),
      new PossessivePronoun("yours", 2, true, sentenceArgs),
      new ReflexivePronoun("yourselves", 2, true, sentenceArgs),
      2,
      true,
      sentenceArgs
    );
  }
}

class They extends PersonalPronoun {
  constructor(sentenceArgs) {
    super(
      "they",
      new ObjectiveCasePronoun("them", 3, true, sentenceArgs),
      new PossessiveAdjective("their", sentenceArgs),
      new PossessivePronoun("theirs", 3, true, sentenceArgs),
      new ReflexivePronoun("themselves", 3, true, sentenceArgs),
      3,
      true,
      sentenceArgs
    );
  }
}

// Prepositions

// Conjunctions

// Articles

// Interjections

// Helper functions
