class Sentence {
  /**
   *
   * @param {Word} s Subject
   * @param {Word} p Predicate
   */
  constructor(s, p) {
    this.subject = s;
    this.predicate = p;
  }

  render() {
    let subj = this.subject.render;
    let pred = this.predicate.render;
    let reg = /#([DI])\(([a-z<>/]+)\)/;
    let retS = "";
    let retP = "";
    let cur;

    while (!("#" in subj)) {
      cur = subj.match(reg);
      let prev;
      if (cur["index"] === 0) {
        prev = null;
      } else {
        prev = subj[cur["index"] - 1];
      }
      if (prev !== "(") {
        /** This means the match is in the same level (like `#D(is#D(open) *#D(now)* )`)*/
        if (cur[1] === "D") {
          retS += `<div>${cur[2]}</div>`;
        } else if (cur[1] === "I") {
          retS += `<input type="text" value="${cur[1]}">`;
        }
      }
    }

    return;
  }
}

class DeclarativeSentence extends Sentence {
  /**
   *
   * @param {NounLike} s - Subject
   * @param {Verb} v - Predicate
   */
  constructor(s, v) {
    super(s, v);
  }
}
