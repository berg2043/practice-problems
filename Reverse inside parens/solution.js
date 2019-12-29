

// Tests
console.log(reverseInParens("h(el)lo"), "h(le)lo");
console.log(reverseInParens("a ((d e) c b)"), "a (b c (d e))");
console.log(reverseInParens("one (two (three) four)"), "one (ruof (three) owt)");
console.log(reverseInParens("one (ruof ((rht)ee) owt)"), "one (two ((thr)ee) four)");