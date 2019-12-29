## Problem

Given a string of text and valid parentheses, such as "h(el)lo", return the 
string with only the text inside parentheses reversed, so "h(el)lo" becomes 
"h(le)lo". If said parenthesized text contains parenthesized text itself, 
then that too must reversed back, so it faces the original direction 
(parentheses included). Text like "h((el))l)o" becomes "'h(l(el))o'". This 
pattern should repeat for however many layers of parentheses.

## Examples

"h(el)lo") == "h(le)lo"

"a ((d e) c b)") == "a (b c (d e))"

"one (two (three) four)") == "one (ruof (three) owt)"

"one (ruof ((rht)ee) owt)") == "one (two ((thr)ee) four)"