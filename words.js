// @ts-check This file contains all the word classes
// Nouns
class Name extends AnimateNoun {
  constructor(word, sentenceArgs) {
    super(word, false, new ZeroArticle(sentenceArgs), sentenceArgs);
  }

  // Update render
}
// Verbs

class Be extends LinkingVerb {
  constructor(
    word,
    complement,
    tense,
    person,
    plural,
    voice,
    infinitive,
    aspect,
    sentenceArgs
  ) {
    super(
      word,
      complement,
      tense,
      person,
      plural,
      voice,
      infinitive,
      aspect,
      sentenceArgs
    );
  }

  get pastTense() {
    if (this.plural || this.person === 2) {
      return "were";
    }
    return "was";
  }

  get render() {
    let ret = "";

    if (this.infinitive) {
      ret = "be";
    } else if (this.aspect === "Continuous") {
      ret = "being";
    } else if (this.aspect === "Perfect") {
      ret = "been";
    } else {
      switch (this.tense) {
        case "Past":
          ret = this.pastTense;
          break;
        case "Present":
          if (this.plural || this.person === 2) {
            ret = "are";
            break;
          } else if (this.person === 1) {
            ret = "am";
            break;
          } else {
            ret = "is";
            break;
          }
      }
    }
    return `<div>${ret}</div>`;
  }
}

// Adjectives

// Adverbs

// Pronouns

class I extends PersonalPronoun {
  constructor(sentenceArgs) {
    super(
      "I",
      new ObjectiveCasePronoun("me", 1, false, sentenceArgs),
      new PossessiveDeterminer("my", sentenceArgs),
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
      new PossessiveDeterminer("your", sentenceArgs),
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
      new PossessiveDeterminer("his", sentenceArgs),
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
      new PossessiveDeterminer("her", sentenceArgs),
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
      new PossessiveDeterminer("its", sentenceArgs),
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
      new PossessiveDeterminer("our", sentenceArgs),
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
      new PossessiveDeterminer("your", sentenceArgs),
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
      new PossessiveDeterminer("their", sentenceArgs),
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
