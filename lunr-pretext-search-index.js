var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
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
  "title": "Binary and Exploding Dots",
  "body": " Binary and Exploding Dots  Watch the video below before doing .     What is the machine's code for 23?  11101  10111  11011  11111        How many is a single dot in the th box from the right worth?            What number does the code represent?  142  144  150  158        What is the biggest number a machine with four slots can represent? Eight slots?    Watch the video below before doing .     Do for the machine instead of the machine.    Watch the video below before doing .     Do for the machine instead of the machine.      To perform addition using a machine, simply put the codes into a machine together, then perform the explosions.    Show how you add in a machine.    Show how you add in a machine.    Now let's switch to the machine. Use one to add . Then perform the addition the traditional way. What do you notice? Designate a reporter to give your idea to the big group.    "
},
{
  "id": "activity-1-2-first",
  "level": "2",
  "url": "sec-section-name.html#activity-1-2-first",
  "type": "Activity",
  "number": "1.1.1",
  "title": "",
  "body": "  What is the machine's code for 23?  11101  10111  11011  11111     "
},
{
  "id": "activity-2",
  "level": "2",
  "url": "sec-section-name.html#activity-2",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "  How many is a single dot in the th box from the right worth?         "
},
{
  "id": "activity-3",
  "level": "2",
  "url": "sec-section-name.html#activity-3",
  "type": "Activity",
  "number": "1.1.3",
  "title": "",
  "body": "  What number does the code represent?  142  144  150  158     "
},
{
  "id": "activity-1-2-last",
  "level": "2",
  "url": "sec-section-name.html#activity-1-2-last",
  "type": "Activity",
  "number": "1.1.4",
  "title": "",
  "body": "  What is the biggest number a machine with four slots can represent? Eight slots?   "
},
{
  "id": "activity-1-3",
  "level": "2",
  "url": "sec-section-name.html#activity-1-3",
  "type": "Activity",
  "number": "1.1.5",
  "title": "",
  "body": "  Do for the machine instead of the machine.   "
},
{
  "id": "activity-1-10",
  "level": "2",
  "url": "sec-section-name.html#activity-1-10",
  "type": "Activity",
  "number": "1.1.6",
  "title": "",
  "body": "  Do for the machine instead of the machine.   "
},
{
  "id": "activity-7",
  "level": "2",
  "url": "sec-section-name.html#activity-7",
  "type": "Activity",
  "number": "1.1.7",
  "title": "",
  "body": "  To perform addition using a machine, simply put the codes into a machine together, then perform the explosions.    Show how you add in a machine.    Show how you add in a machine.    Now let's switch to the machine. Use one to add . Then perform the addition the traditional way. What do you notice? Designate a reporter to give your idea to the big group.   "
},
{
  "id": "sec-binary-boolean-operators",
  "level": "1",
  "url": "sec-binary-boolean-operators.html",
  "type": "Section",
  "number": "1.2",
  "title": "Binary boolean operators",
  "body": " Binary boolean operators  The set of boolean values is the set . Usually we think of as the value false and as the value true . In this section, the word function is used in its mathematical sense. Such a function can be thought of as a black box that converts its inputs into an output. The inputs are also called arguments and the output is called the value of the function. The set of all possible inputs of a function is called the domain of . The set of all possible outputs of is called the codomain of .  A boolean function is a function that returns a boolean value. A boolean operator is a function that takes only boolean values as inputs and returns a boolean value.  A binary boolean operator is a boolean operator that takes two boolean values as inputs. We usually use infix notation instead of functional notation to represent them. This means a symbol like is placed between the two inputs and like this: to represent the operator instead of using the functional notation . For such operators, we often use symbols that look more like arithmetic operators, e.g., , than function names.  A binary boolean operator is commutative if the order of the inputs does not affect the output. In symbols, and representing the operator, , we have as the defining property of commutativity.  There are six nonconstant binary boolean operators that are commutative. They are given in the tables below. Tables like these are called truth tables , because they help us determine when a boolean expression (a combination of boolean values and boolean operators) is true and when it is false.   We saw truth tables displayed in a slightly different format in class. This new format is helpful when computing truth tables of complex expressions. One can add columns for bigger and bigger subexpressions, working one's way up to the full expression.      Or                               And                                 Nor                               Nand                                 Xor                               Xnor                                Instead of introducing symbols for NOR, NAND, and XNOR, we can make use of symbols for a unary NOT operator as described in class. We will write for , and we will also use the overbar to negate a boolean expression. So, for example, , and and all three expressions are synonymous.   Truth tables and De Morgan's Laws   Make a truth table for each of the following expressions. Each expression is a binary boolean expression, so it has two boolean values as inputs and returns a boolean value. It need not be commutative, so your truth table might or might not be one of the eight special ones above. For each expression, decide whether it in fact represents one of our six named operators (by looking at the truth table you made).        Make the truth table. Is it one of the six special ones?                                                 Universal gates   Use a single NOR operator to express .   The NOR operator has two inputs, and you only have . What can you do?    .    Use the results of and to express using only the NOR operator. (You can use as many NORs as you need, but not any other operators.)    .    Similarly, use the result of to express using only the NOR operator. (You can use as many NORs as you need, but not any other operators.)    Use NOR operators to express .   Use the results of and .     In doing , you showed that the NOR operator is a universal gate . This means that any boolean function can be expressed using only NORs. To spell it out, we used NORs to express , , , and . The remaining operators, NAND and XNOR, can be expressed in terms of these four. This shows that all six binary boolean operators (that is, those represented in ) are expressible in terms of NOR alone.    is interesting from a hardware point of view. We will soon begin to explore the manner in which digital computers are constructed from logic gates. A logic gate is the basic building block of a digital electronic circuit, much like a statement is the building block of a Python program. Logic gates operate on logical signals, which are voltages representing boolean values. Their inputs are combined or modified inside the gate to produce an output signal representing the value of the operation as applied to the input signals.  Because NOR is a universal gate, it is possible to build a computer using only NOR gates. They are cheaper to manufacture than AND and OR gates, and even NOT gates are expressible in terms of NOR. They also are faster: every gate through which a signal passes adds a small delay to the circuit. These are only measured in nanoseconds, but when you have millions of gates, it adds up. NOR gates require less internal wiring than AND and OR gates, so they are faster.  In Homework 1 you will show that NAND is similarly universal. The idea is similar to the one above, but you will have to work out the details yourself.  "
},
{
  "id": "p-15",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#p-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boolean values "
},
{
  "id": "p-16",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#p-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boolean function boolean operator "
},
{
  "id": "p-17",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#p-17",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary boolean operator "
},
{
  "id": "p-18",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#p-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative "
},
{
  "id": "p-19",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#p-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truth tables "
},
{
  "id": "note-1",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#note-1",
  "type": "Note",
  "number": "1.2.1",
  "title": "",
  "body": " We saw truth tables displayed in a slightly different format in class. This new format is helpful when computing truth tables of complex expressions. One can add columns for bigger and bigger subexpressions, working one's way up to the full expression.  "
},
{
  "id": "table-or",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#table-or",
  "type": "Table",
  "number": "1.2.2",
  "title": "Or <span class=\"process-math\">\\(\\left(\\vee\\right)\\)<\/span>",
  "body": " Or                             "
},
{
  "id": "table-2",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#table-2",
  "type": "Table",
  "number": "1.2.3",
  "title": "And <span class=\"process-math\">\\(\\left(\\wedge\\right)\\)<\/span>",
  "body": " And                             "
},
{
  "id": "table-3",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#table-3",
  "type": "Table",
  "number": "1.2.4",
  "title": "Nor",
  "body": " Nor                             "
},
{
  "id": "table-4",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#table-4",
  "type": "Table",
  "number": "1.2.5",
  "title": "Nand",
  "body": " Nand                             "
},
{
  "id": "table-5",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#table-5",
  "type": "Table",
  "number": "1.2.6",
  "title": "Xor <span class=\"process-math\">\\(\\left(\\veebar\\right)\\)<\/span>",
  "body": " Xor                             "
},
{
  "id": "table-xnor",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#table-xnor",
  "type": "Table",
  "number": "1.2.7",
  "title": "Xnor",
  "body": " Xnor                             "
},
{
  "id": "activity-8",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#activity-8",
  "type": "Activity",
  "number": "1.2.1",
  "title": "Truth tables and De Morgan’s Laws.",
  "body": " Truth tables and De Morgan's Laws   Make a truth table for each of the following expressions. Each expression is a binary boolean expression, so it has two boolean values as inputs and returns a boolean value. It need not be commutative, so your truth table might or might not be one of the eight special ones above. For each expression, decide whether it in fact represents one of our six named operators (by looking at the truth table you made).        Make the truth table. Is it one of the six special ones?                                              "
},
{
  "id": "activity-nor-is-universal",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#activity-nor-is-universal",
  "type": "Activity",
  "number": "1.2.2",
  "title": "Universal gates.",
  "body": " Universal gates   Use a single NOR operator to express .   The NOR operator has two inputs, and you only have . What can you do?    .    Use the results of and to express using only the NOR operator. (You can use as many NORs as you need, but not any other operators.)    .    Similarly, use the result of to express using only the NOR operator. (You can use as many NORs as you need, but not any other operators.)    Use NOR operators to express .   Use the results of and .   "
},
{
  "id": "remark-nor-is-universal",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#remark-nor-is-universal",
  "type": "Remark",
  "number": "1.2.8",
  "title": "",
  "body": " In doing , you showed that the NOR operator is a universal gate . This means that any boolean function can be expressed using only NORs. To spell it out, we used NORs to express , , , and . The remaining operators, NAND and XNOR, can be expressed in terms of these four. This shows that all six binary boolean operators (that is, those represented in ) are expressible in terms of NOR alone.  "
},
{
  "id": "sec-bitwise-operators",
  "level": "1",
  "url": "sec-bitwise-operators.html",
  "type": "Section",
  "number": "1.3",
  "title": "Bitwise operators",
  "body": " Bitwise operators   Let us adopt the terminology bit pattern or word for a sequence of bits of a fixed length. This way we do not need to be specific about the length of the bit pattern or think about what integer it might (or might not) represent. All data handled by digital computers is ultimately represented as bit patterns.  The bitwise operators are applied to bit patterns. They are binary operators , meaning that they take two operands. The operands must be of the same length, and the result is a bit pattern of the same length. The bitwise operators are:    Bitwise AND & is a binary operator that takes two bit patterns of the same length and returns a bit pattern of the same length. The resulting bit pattern has a 1 bit in each position where both operands have a 1 bit, and a 0 bit in all other positions.     Bitwise OR | is a binary operator that takes two bit patterns of the same length and returns a bit pattern of the same length. The resulting bit pattern has a 1 bit in each position where at least one of the operands has a 1 bit, and a 0 bit in all other positions.     Bitwise XOR ^ is a binary operator that takes two bit patterns of the same length and returns a bit pattern of the same length. The resulting bit pattern has a 1 bit in each position where exactly one of the operands has a 1 bit, and a 0 bit in all other positions.      In class, I previously used the symbols and for bitwise OR and AND, respectively. In this section, we use different symbols, to match Python's remark: & for bitwise AND, | for bitwise OR, and ^ for bitwise XOR. Bitwise versions of NAND, NOR, and XNOR do not appear in these notes.  The bitwise NOT operator is written . It is a unary operator, meaning that it takes a single operand. The operand must be a bit pattern, and the result is a bit pattern of the same length.    If you have previous experience in C, Java, or closely related languages, you may have wondered why the logical operators AND and OR are written && and || in those languages. It is because the single-character variants & and | are reserved for bitwise operations.   Some other operators on bit patterns are the logical shift operators << and >>. These are also binary operators, taking a bit pattern and an integer as operands. The result is a bit pattern of the same length as the first operand. The second operand must be non-negative.   The expression 0b1010 << 1 evaluates to 0b10100 , and the expression 0b1010 >> 1 evaluates to 0b101 .     Bitmasking       What operation from our previous discussion of binary-encoded integers is also represented by << 1? That is, if the bit pattern is interpreted as an integer, what integer is represented by << 1?    What operation from our previous discussion of binary-encoded integers is also represented by >> 1? That is, if the bit pattern is interpreted as an integer, what integer is represented by >> 1?       Recall that bitwise operators return values of the same length as their operands. Therefore, the bitwise operators behave in the following way for a few 4-bit patterns:    The fixed-width nature of bitwise operators                                        What is the effect of applying bitwise AND to a bit pattern and the word of the same length?      What is the effect of applying bitwise OR to a bit pattern and the word of the same length?      How would you use a similar idea to toggle the last bit of ? That is, how would you use a bitwise operation to change the last bit of from 0 to 1 or from 1 to 0? You cannot use a conditional statement.     "
},
{
  "id": "p-38",
  "level": "2",
  "url": "sec-bitwise-operators.html#p-38",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bit pattern word "
},
{
  "id": "p-39",
  "level": "2",
  "url": "sec-bitwise-operators.html#p-39",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary operators Bitwise AND Bitwise OR Bitwise XOR "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-bitwise-operators.html#remark-2",
  "type": "Remark",
  "number": "1.3.1",
  "title": "",
  "body": " In class, I previously used the symbols and for bitwise OR and AND, respectively. In this section, we use different symbols, to match Python's remark: & for bitwise AND, | for bitwise OR, and ^ for bitwise XOR. Bitwise versions of NAND, NOR, and XNOR do not appear in these notes.  The bitwise NOT operator is written . It is a unary operator, meaning that it takes a single operand. The operand must be a bit pattern, and the result is a bit pattern of the same length.  "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-bitwise-operators.html#remark-3",
  "type": "Remark",
  "number": "1.3.2",
  "title": "",
  "body": " If you have previous experience in C, Java, or closely related languages, you may have wondered why the logical operators AND and OR are written && and || in those languages. It is because the single-character variants & and | are reserved for bitwise operations.  "
},
{
  "id": "p-46",
  "level": "2",
  "url": "sec-bitwise-operators.html#p-46",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logical shift operators "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-bitwise-operators.html#example-1",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": " The expression 0b1010 << 1 evaluates to 0b10100 , and the expression 0b1010 >> 1 evaluates to 0b101 .  "
},
{
  "id": "activity-10",
  "level": "2",
  "url": "sec-bitwise-operators.html#activity-10",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "     What operation from our previous discussion of binary-encoded integers is also represented by << 1? That is, if the bit pattern is interpreted as an integer, what integer is represented by << 1?    What operation from our previous discussion of binary-encoded integers is also represented by >> 1? That is, if the bit pattern is interpreted as an integer, what integer is represented by >> 1?      "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-bitwise-operators.html#example-2",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  The fixed-width nature of bitwise operators                                     "
},
{
  "id": "activity-11",
  "level": "2",
  "url": "sec-bitwise-operators.html#activity-11",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "  What is the effect of applying bitwise AND to a bit pattern and the word of the same length?   "
},
{
  "id": "activity-12",
  "level": "2",
  "url": "sec-bitwise-operators.html#activity-12",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "  What is the effect of applying bitwise OR to a bit pattern and the word of the same length?   "
},
{
  "id": "activity-13",
  "level": "2",
  "url": "sec-bitwise-operators.html#activity-13",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": "  How would you use a similar idea to toggle the last bit of ? That is, how would you use a bitwise operation to change the last bit of from 0 to 1 or from 1 to 0? You cannot use a conditional statement.   "
},
{
  "id": "sec-logic-gates-and-circuits",
  "level": "1",
  "url": "sec-logic-gates-and-circuits.html",
  "type": "Section",
  "number": "1.4",
  "title": "Logic gates and circuits",
  "body": " Logic gates and circuits   In this section we will begin to represent logic diagrammatically with gates. This will allow us to build circuits that perform complex logical operations.    The Basic Gates  There are seven basic gates available in Logisim Evolution. They are the AND, NAND, OR, NOR, XOR, XNOR, and NOT gates, pictured in .     The AND gate.   The AND gate is shaped like a capital letter D. The inputs are on the left side of the gate and the output is on the right curved side.     The NAND gate.   The NAND gate resembles the AND gate, but has a small circle on the output side. This circle indicates that the output is inverted.       The OR gate.   The OR gate is shaped like a boomerang, oriented with its tips at the top and bottom, and concave side on the left. The inputs are on the concave side of the gate and the output is on the convex side.     The NOR gate.   The NOR gate resembles the OR gate, but has a small circle on the output side. This circle indicates that the output is inverted.       The XOR gate.   The XOR gate is shaped like the OR gate, but with an extra line parallel and adjacent to the concave side. The inputs are on the concave side of the gate and the output is on the convex side.     The XNOR gate.   The XNOR gate resembles the XOR gate, but has a small circle on the output side. This circle indicates that the output is inverted.       The NOT gate.   The NOT gate is shaped like a triangle with a small circle on the output side. This circle indicates that the output is inverted.    There is only one rule of using these gates. All gate inputs must be connected. The possible values to which they can be connected are the logic values 0 and 1. The output of a gate is determined by its operator applied to its inputs.  In a physical circuit, the logic value is usually represented by a low voltage like volts and the logic value is usually represented by a higher voltage like volts. In Logisim Evolution, the logic value is represented by dark green and the logic value is represented by light green.    Install Logisim Evolution on your computer. You can download it from . Windows users should choose the x86_64.msi file. Mac users should choose the dmg file. You will need to install Java if you do not already have it installed.      Open Logisim Evolution. You should see a window with a blank canvas.   The quick panel above the canvas contains the basic gates. Click the AND gate, let go, and mouse onto the canvas. You should see a gate with two inputs and one output. You can put it anywhere on the canvas. You can also move it around later, although that may goof up any wiring you have added.  Add an XOR gate to the canvas. You should see a gate with two inputs and one output. Put it below and to the right of your AND gate.  If you click the output of the AND gate, you will see a wire attached to your mouse. If you move your mouse to the input of the XOR gate, you will see the wire attached to the input. You can only add one right-angle turn per click. If you click, the wire will stay where it is. Click the free end of the wire to continue the wiring path to an input of the XOR gate.  Use the arrow (selection tool) and the delete key to delete the wire you just added.  In the left panel, open the Wiring folder and add two inputs. Connect each input to one of the inputs of the AND gate. Branch off these connections so that each input is also connected to the XOR gate.  In the Input\/Output folder, add two LEDS. Connect one to the output of the AND gate, and the other to the output of the XOR gate. As connections are completed, the red error wires should turn dark green. The inputs are set to 0 at first, and this value is represented by dark green. The outputs should be dark green as well.   When you are done, the circuit should look like this.   The completed circuit.   The completed circuit. The outputs each connect to both gates, one at each input. The outputs are to the right, each connected to the output of one gate.        Now you will add some labels. Labels are used to name inputs and outputs, as well as gates.    Double-click an input and label it x . Label the other input y .    Double-click the AND gate and label it AND1 . Label the XOR gate XOR1 .    Double-click the output of the AND gate and label it s . Label the output of the XOR gate c .    When you are done, the circuit should look like this.   The completed circuit with labels.   The completed circuit with labels. The labels are shown in blue. The labels are x and y for the inputs, AND1 and XOR1 for the gates, and s and c for the outputs.        Use the Poke tool in the quick panel (the hand icon) to poke the inputs. Click the x input. It should turn light green. Click the y input. It should turn light green. As you play with the inputs, observe that the wires change color to reflect the logic value the carry.  Make a truth table with four columns for , , , and . The first two columns should have the values and in alternating order, as we have seen in class. Use the Poke tool to determine the values of and for each combination of and . Record your results in the table.   Truth table for the circuit.    x  y  s  c    0  0      0  1      1  0      1  1       This circuit is called a half adder . The output (for sum ) is the sum of the inputs (remember, the sum of 1-bit values is also a 1-bit value). Because in 1-bit arithmetic, the output is the XOR of the inputs. The output (for carry ) is called the carry bit. It is if the addition overflows, which is only the case when both inputs are . Thus, the output is the AND of the inputs.      Select your entire circuit using the selection tool (arrow icon). Copy and paste it. You should see a copy of your circuit appear on the canvas. Move it below and a little to the right of the original circuit. Change the labels of the new gates to AND2 and XOR2 .  Use the tools in the quick panel to construct this circuit.   The completed circuit.   The full adder circuit is composed of two linked half adders plus an OR gate.        Make a truth table for the circuit. The first three columns should be , , and . The last two columns should be and . Use the Poke tool to determine the values of and for each combination of , , and . Record your results in the table.      Thinking about the truth table, explain why this circuit is called a full adder .     "
},
{
  "id": "figure-and-gate",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#figure-and-gate",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " The AND gate.   The AND gate is shaped like a capital letter D. The inputs are on the left side of the gate and the output is on the right curved side.   "
},
{
  "id": "figure-2",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#figure-2",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " The NAND gate.   The NAND gate resembles the AND gate, but has a small circle on the output side. This circle indicates that the output is inverted.   "
},
{
  "id": "figure-3",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#figure-3",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": " The OR gate.   The OR gate is shaped like a boomerang, oriented with its tips at the top and bottom, and concave side on the left. The inputs are on the concave side of the gate and the output is on the convex side.   "
},
{
  "id": "figure-4",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#figure-4",
  "type": "Figure",
  "number": "1.4.4",
  "title": "",
  "body": " The NOR gate.   The NOR gate resembles the OR gate, but has a small circle on the output side. This circle indicates that the output is inverted.   "
},
{
  "id": "figure-5",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#figure-5",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": " The XOR gate.   The XOR gate is shaped like the OR gate, but with an extra line parallel and adjacent to the concave side. The inputs are on the concave side of the gate and the output is on the convex side.   "
},
{
  "id": "figure-6",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#figure-6",
  "type": "Figure",
  "number": "1.4.6",
  "title": "",
  "body": " The XNOR gate.   The XNOR gate resembles the XOR gate, but has a small circle on the output side. This circle indicates that the output is inverted.   "
},
{
  "id": "figure-not-gate",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#figure-not-gate",
  "type": "Figure",
  "number": "1.4.7",
  "title": "",
  "body": " The NOT gate.   The NOT gate is shaped like a triangle with a small circle on the output side. This circle indicates that the output is inverted.   "
},
{
  "id": "activity-14",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#activity-14",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": "  Install Logisim Evolution on your computer. You can download it from . Windows users should choose the x86_64.msi file. Mac users should choose the dmg file. You will need to install Java if you do not already have it installed.   "
},
{
  "id": "activity-15",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#activity-15",
  "type": "Activity",
  "number": "1.4.2",
  "title": "",
  "body": "  Open Logisim Evolution. You should see a window with a blank canvas.   The quick panel above the canvas contains the basic gates. Click the AND gate, let go, and mouse onto the canvas. You should see a gate with two inputs and one output. You can put it anywhere on the canvas. You can also move it around later, although that may goof up any wiring you have added.  Add an XOR gate to the canvas. You should see a gate with two inputs and one output. Put it below and to the right of your AND gate.  If you click the output of the AND gate, you will see a wire attached to your mouse. If you move your mouse to the input of the XOR gate, you will see the wire attached to the input. You can only add one right-angle turn per click. If you click, the wire will stay where it is. Click the free end of the wire to continue the wiring path to an input of the XOR gate.  Use the arrow (selection tool) and the delete key to delete the wire you just added.  In the left panel, open the Wiring folder and add two inputs. Connect each input to one of the inputs of the AND gate. Branch off these connections so that each input is also connected to the XOR gate.  In the Input\/Output folder, add two LEDS. Connect one to the output of the AND gate, and the other to the output of the XOR gate. As connections are completed, the red error wires should turn dark green. The inputs are set to 0 at first, and this value is represented by dark green. The outputs should be dark green as well.   When you are done, the circuit should look like this.   The completed circuit.   The completed circuit. The outputs each connect to both gates, one at each input. The outputs are to the right, each connected to the output of one gate.     "
},
{
  "id": "activity-16",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#activity-16",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "  Now you will add some labels. Labels are used to name inputs and outputs, as well as gates.    Double-click an input and label it x . Label the other input y .    Double-click the AND gate and label it AND1 . Label the XOR gate XOR1 .    Double-click the output of the AND gate and label it s . Label the output of the XOR gate c .    When you are done, the circuit should look like this.   The completed circuit with labels.   The completed circuit with labels. The labels are shown in blue. The labels are x and y for the inputs, AND1 and XOR1 for the gates, and s and c for the outputs.     "
},
{
  "id": "activity-17",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#activity-17",
  "type": "Activity",
  "number": "1.4.4",
  "title": "",
  "body": "  Use the Poke tool in the quick panel (the hand icon) to poke the inputs. Click the x input. It should turn light green. Click the y input. It should turn light green. As you play with the inputs, observe that the wires change color to reflect the logic value the carry.  Make a truth table with four columns for , , , and . The first two columns should have the values and in alternating order, as we have seen in class. Use the Poke tool to determine the values of and for each combination of and . Record your results in the table.   Truth table for the circuit.    x  y  s  c    0  0      0  1      1  0      1  1       This circuit is called a half adder . The output (for sum ) is the sum of the inputs (remember, the sum of 1-bit values is also a 1-bit value). Because in 1-bit arithmetic, the output is the XOR of the inputs. The output (for carry ) is called the carry bit. It is if the addition overflows, which is only the case when both inputs are . Thus, the output is the AND of the inputs.   "
},
{
  "id": "activity-18",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#activity-18",
  "type": "Activity",
  "number": "1.4.5",
  "title": "",
  "body": "  Select your entire circuit using the selection tool (arrow icon). Copy and paste it. You should see a copy of your circuit appear on the canvas. Move it below and a little to the right of the original circuit. Change the labels of the new gates to AND2 and XOR2 .  Use the tools in the quick panel to construct this circuit.   The completed circuit.   The full adder circuit is composed of two linked half adders plus an OR gate.     "
},
{
  "id": "activity-19",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#activity-19",
  "type": "Activity",
  "number": "1.4.6",
  "title": "",
  "body": "  Make a truth table for the circuit. The first three columns should be , , and . The last two columns should be and . Use the Poke tool to determine the values of and for each combination of , , and . Record your results in the table.   "
},
{
  "id": "activity-20",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#activity-20",
  "type": "Activity",
  "number": "1.4.7",
  "title": "",
  "body": "  Thinking about the truth table, explain why this circuit is called a full adder .   "
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
  "id": "exercise-1",
  "level": "2",
  "url": "assignments-day00.html#exercise-1",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": " For each problem below, interpret the summands as binary-encoded integers and find the sum without converting the summands to decimal. Express all your answers in binary, and for each problem, show a complete record of your reasoning. This could be a collection of machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the following binary numbers:   11000.   Perform the binary addition:   100111.   Add the binary numbers:   11111.   Compute the sum:   Perform binary addition:   Add the binary values:   Compute the sum of:   Add the binary numbers:   Perform binary addition:   Add the binary values:  "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "assignments-day00.html#exercise-2",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "",
  "body": " For each problem below, interpret the summands as hexadecimal-encoded integers and find the sum without converting the summands to decimal. (You are allowed to convert them to binary, but I don't necessarily recommend it.) Express all your answers in hex, and for each problem, show a complete record of your reasoning. This could be a collection of or machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the hexadecimal values:       Perform the sum:       Compute the sum:       Perform the sum:   Add the hexadecimal numbers:       Compute the sum:   Add the hexadecimal values:       Add the hexadecimal numbers:   Compute the sum:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:  "
},
{
  "id": "sec-assignment-day04",
  "level": "1",
  "url": "sec-assignment-day04.html",
  "type": "Section",
  "number": "2.2",
  "title": "Problems for Thursday, January 11",
  "body": " Problems for Thursday, January 11  Work on these problems in groups of 2 3 while the instructor catches up on grading projects 00 and 01. For Python coding problems, you can save more files on your Pico (make sure not to overwrite code.py ). Use the Serial console in Mu editor to see the output of your programs.    Write a function is_even(x) that takes a single integer argument x and returns True if the argument is even and False otherwise. You may assume that the argument is a nonnegative integer (do not validate within your function). You may not use the % operator. Only use bitwise operators and equality comparison.    Write a function bit_is_set(x, n) that takes two integer arguments x and n and returns True if the n th bit of x is set and False otherwise. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.    Write a function set_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit set. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.    Write a function clear_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit cleared. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.    Write a function toggle_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit toggled. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.    "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-assignment-day04.html#exercise-3",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Write a function is_even(x) that takes a single integer argument x and returns True if the argument is even and False otherwise. You may assume that the argument is a nonnegative integer (do not validate within your function). You may not use the % operator. Only use bitwise operators and equality comparison.  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-assignment-day04.html#exercise-4",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": " Write a function bit_is_set(x, n) that takes two integer arguments x and n and returns True if the n th bit of x is set and False otherwise. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-assignment-day04.html#exercise-5",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": " Write a function set_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit set. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-assignment-day04.html#exercise-6",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " Write a function clear_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit cleared. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-assignment-day04.html#exercise-7",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Write a function toggle_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit toggled. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.  "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
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

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
