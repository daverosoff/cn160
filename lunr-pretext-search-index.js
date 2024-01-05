var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "assignments-day00",
  "level": "1",
  "url": "assignments-day00.html",
  "type": "Section",
  "number": "2.1",
  "title": "Problems for Monday, Jan 8",
  "body": " Problems for Monday, Jan 8  Make sure you can solve all of these problems. Similar ones will appear on the midterm. As always in courses at this level, solve means to give complete supporting reasoning or justification, not just the answer. In this case you should include the details of your calculation, however you do it.    For each problem below, interpret the summands as binary-encoded integers and find the sum without converting the summands to decimal. Express all your answers in binary, and for each problem, show a complete record of your reasoning. This could be a collection of machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the following binary numbers:   11000.   Perform the binary addition:   100111.   Add the binary numbers:   11111.   Compute the sum:   Perform binary addition:   Add the binary values:   Compute the sum of:   Add the binary numbers:   Perform binary addition:   Add the binary values:    For each problem below, interpret the summands as hexadecimal-encoded integers and find the sum without converting the summands to decimal. (You are allowed to convert them to binary, but I don't necessarily recommend it.) Express all your answers in hex, and for each problem, show a complete record of your reasoning. This could be a collection of or machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the hexadecimal values:       Perform the sum:       Compute the sum:       Perform the sum:   Add the hexadecimal numbers:       Compute the sum:   Add the hexadecimal values:       Add the hexadecimal numbers:   Compute the sum:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:    "
},
{
  "id": "exercises-day00-1",
  "level": "2",
  "url": "assignments-day00.html#exercises-day00-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " For each problem below, interpret the summands as binary-encoded integers and find the sum without converting the summands to decimal. Express all your answers in binary, and for each problem, show a complete record of your reasoning. This could be a collection of machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the following binary numbers:   11000.   Perform the binary addition:   100111.   Add the binary numbers:   11111.   Compute the sum:   Perform binary addition:   Add the binary values:   Compute the sum of:   Add the binary numbers:   Perform binary addition:   Add the binary values:  "
},
{
  "id": "exercises-day00-2",
  "level": "2",
  "url": "assignments-day00.html#exercises-day00-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " For each problem below, interpret the summands as hexadecimal-encoded integers and find the sum without converting the summands to decimal. (You are allowed to convert them to binary, but I don't necessarily recommend it.) Express all your answers in hex, and for each problem, show a complete record of your reasoning. This could be a collection of or machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the hexadecimal values:       Perform the sum:       Compute the sum:       Perform the sum:   Add the hexadecimal numbers:       Compute the sum:   Add the hexadecimal values:       Add the hexadecimal numbers:   Compute the sum:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
