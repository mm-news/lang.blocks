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

  get render() {
    let reg = /#([DI])\(([a-zA-Z]+)\)/;
    return `<div class="S">${this.renderSentence(
      this.subject.render,
      reg
    )}</div><div class="P">${this.renderSentence(
      this.predicate.render,
      reg
    )}</div>`;
  }

  /**
   * @param {String} inp - The input string e.g. `#D(is#D(open) #D(now) )`
   * @param {RegExp} reg - The regex to match the input string
   */
  renderSentence(inp, reg) {
    if (!inp.includes("#")) {
      return inp;
    }
    let ret = "";
    let cur;
    while (inp.includes("#")) {
      cur = inp.match(reg);
      console.log(cur);
      let prev;
      prev = inp[cur["index"] - 1] || null;
      if (prev !== null) {
        /** This means the match is in the same level (like `#D(is#D(open) *#D(now)* )`)*/
        if (cur[1] === "D") {
          ret = `${ret}<div>${cur[2]}</div>`;
        } else if (cur[1] === "I") {
          ret = `${ret}<input type="text" value="${cur[2]}">`;
        }
      } else {
        /** This means the match is in a nested level (like `#D( *is#D(open)* #D(now) )`)*/
        if (cur[1] === "D") {
          ret = `<div>${cur[2]}${ret}</div>`;
        } else if (cur[1] === "I") {
          ret = `<div><input type="text" value="${cur[2]}">${ret}</div>`;
        }
      }
      inp = `${inp.slice(0, cur["index"])}${inp.slice(
        cur["index"] + cur[0].length
      )}`;
    }
    return ret;
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
