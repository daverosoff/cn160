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
  "id": "sec-section-name-5",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-5",
  "type": "Activity",
  "number": "1.1.2",
  "title": "",
  "body": "  How many is a single dot in the th box from the right worth?         "
},
{
  "id": "sec-section-name-6",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-6",
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
  "id": "sec-section-name-14",
  "level": "2",
  "url": "sec-section-name.html#sec-section-name-14",
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
  "id": "sec-binary-boolean-operators-2",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boolean values "
},
{
  "id": "sec-binary-boolean-operators-3",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "boolean function boolean operator "
},
{
  "id": "sec-binary-boolean-operators-4",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary boolean operator "
},
{
  "id": "sec-binary-boolean-operators-5",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "commutative "
},
{
  "id": "sec-binary-boolean-operators-6",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "truth tables "
},
{
  "id": "sec-binary-boolean-operators-7",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-7",
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
  "id": "sec-binary-boolean-operators-8-1-2",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-8-1-2",
  "type": "Table",
  "number": "1.2.3",
  "title": "And <span class=\"process-math\">\\(\\left(\\wedge\\right)\\)<\/span>",
  "body": " And                             "
},
{
  "id": "sec-binary-boolean-operators-8-2-1",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-8-2-1",
  "type": "Table",
  "number": "1.2.4",
  "title": "Nor",
  "body": " Nor                             "
},
{
  "id": "sec-binary-boolean-operators-8-2-2",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-8-2-2",
  "type": "Table",
  "number": "1.2.5",
  "title": "Nand",
  "body": " Nand                             "
},
{
  "id": "sec-binary-boolean-operators-8-3-1",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-8-3-1",
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
  "id": "sec-binary-boolean-operators-10",
  "level": "2",
  "url": "sec-binary-boolean-operators.html#sec-binary-boolean-operators-10",
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
  "id": "sec-bitwise-operators-2-1",
  "level": "2",
  "url": "sec-bitwise-operators.html#sec-bitwise-operators-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bit pattern word "
},
{
  "id": "sec-bitwise-operators-2-2",
  "level": "2",
  "url": "sec-bitwise-operators.html#sec-bitwise-operators-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "binary operators Bitwise AND Bitwise OR Bitwise XOR "
},
{
  "id": "sec-bitwise-operators-2-3",
  "level": "2",
  "url": "sec-bitwise-operators.html#sec-bitwise-operators-2-3",
  "type": "Remark",
  "number": "1.3.1",
  "title": "",
  "body": " In class, I previously used the symbols and for bitwise OR and AND, respectively. In this section, we use different symbols, to match Python's remark: & for bitwise AND, | for bitwise OR, and ^ for bitwise XOR. Bitwise versions of NAND, NOR, and XNOR do not appear in these notes.  The bitwise NOT operator is written . It is a unary operator, meaning that it takes a single operand. The operand must be a bit pattern, and the result is a bit pattern of the same length.  "
},
{
  "id": "sec-bitwise-operators-2-4",
  "level": "2",
  "url": "sec-bitwise-operators.html#sec-bitwise-operators-2-4",
  "type": "Remark",
  "number": "1.3.2",
  "title": "",
  "body": " If you have previous experience in C, Java, or closely related languages, you may have wondered why the logical operators AND and OR are written && and || in those languages. It is because the single-character variants & and | are reserved for bitwise operations.  "
},
{
  "id": "sec-bitwise-operators-2-5",
  "level": "2",
  "url": "sec-bitwise-operators.html#sec-bitwise-operators-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logical shift operators "
},
{
  "id": "sec-bitwise-operators-2-6",
  "level": "2",
  "url": "sec-bitwise-operators.html#sec-bitwise-operators-2-6",
  "type": "Example",
  "number": "1.3.3",
  "title": "",
  "body": " The expression 0b1010 << 1 evaluates to 0b10100 , and the expression 0b1010 >> 1 evaluates to 0b101 .  "
},
{
  "id": "subsection-bitmasking-2",
  "level": "2",
  "url": "sec-bitwise-operators.html#subsection-bitmasking-2",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "     What operation from our previous discussion of binary-encoded integers is also represented by << 1? That is, if the bit pattern is interpreted as an integer, what integer is represented by << 1?    What operation from our previous discussion of binary-encoded integers is also represented by >> 1? That is, if the bit pattern is interpreted as an integer, what integer is represented by >> 1?      "
},
{
  "id": "subsection-bitmasking-4",
  "level": "2",
  "url": "sec-bitwise-operators.html#subsection-bitmasking-4",
  "type": "Example",
  "number": "1.3.4",
  "title": "",
  "body": "  The fixed-width nature of bitwise operators                                     "
},
{
  "id": "subsection-bitmasking-5",
  "level": "2",
  "url": "sec-bitwise-operators.html#subsection-bitmasking-5",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "  What is the effect of applying bitwise AND to a bit pattern and the word of the same length?   "
},
{
  "id": "subsection-bitmasking-6",
  "level": "2",
  "url": "sec-bitwise-operators.html#subsection-bitmasking-6",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "  What is the effect of applying bitwise OR to a bit pattern and the word of the same length?   "
},
{
  "id": "subsection-bitmasking-7",
  "level": "2",
  "url": "sec-bitwise-operators.html#subsection-bitmasking-7",
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
  "body": " Logic gates and circuits   In this section we will begin to represent logic diagrammatically with gates. This will allow us to build circuits that perform complex logical operations.    The Basic Gates  There are seven basic gates available in Logisim Evolution. They are the AND, NAND, OR, NOR, XOR, XNOR, and NOT gates, pictured in .     The AND gate.   The AND gate is shaped like a capital letter D. The inputs are on the left side of the gate and the output is on the right curved side.     The NAND gate.   The NAND gate resembles the AND gate, but has a small circle on the output side. This circle indicates that the output is inverted.       The OR gate.   The OR gate is shaped like a boomerang, oriented with its tips at the top and bottom, and concave side on the left. The inputs are on the concave side of the gate and the output is on the convex side.     The NOR gate.   The NOR gate resembles the OR gate, but has a small circle on the output side. This circle indicates that the output is inverted.       The XOR gate.   The XOR gate is shaped like the OR gate, but with an extra line parallel and adjacent to the concave side. The inputs are on the concave side of the gate and the output is on the convex side.     The XNOR gate.   The XNOR gate resembles the XOR gate, but has a small circle on the output side. This circle indicates that the output is inverted.       The NOT gate.   The NOT gate is shaped like a triangle with a small circle on the output side. This circle indicates that the output is inverted.    There is only one rule of using these gates. All gate inputs must be connected. The possible values to which they can be connected are the logic values 0 and 1. The output of a gate is determined by its operator applied to its inputs.  In a physical circuit, the logic value is usually represented by a low voltage like volts and the logic value is usually represented by a higher voltage like volts. In Logisim Evolution, the logic value is represented by dark green and the logic value is represented by light green.    Install Logisim Evolution on your computer. You can download it from . Windows users should choose the x86.msi file. Mac users should choose the dmg file.      Open Logisim Evolution. You should see a window with a blank canvas.   The quick panel above the canvas contains the basic gates. Click the AND gate, let go, and mouse onto the canvas. You should see a gate with two inputs and one output. You can put it anywhere on the canvas. You can also move it around later, although that may goof up any wiring you have added.  Add an XOR gate to the canvas. You should see a gate with two inputs and one output. Put it below and to the right of your AND gate.  If you click the output of the AND gate, you will see a wire attached to your mouse. If you move your mouse to the input of the XOR gate, you will see the wire attached to the input. You can only add one right-angle turn per click. If you click, the wire will stay where it is. Click the free end of the wire to continue the wiring path to an input of the XOR gate.  Use the arrow (selection tool) and the delete key to delete the wire you just added.  In the left panel, open the Wiring folder and add two Pins. Connect each Pin to one of the inputs of the AND gate. Branch off these connections so that each Pin is also connected to the XOR gate.  In the Input\/Output folder, add two LEDS. Connect one to the output of the AND gate, and the other to the output of the XOR gate. As connections are completed, the red error wires should turn dark green. The inputs are set to 0 at first, and this value is represented by dark green. The outputs should be dark green as well.   When you are done, the circuit should look like this.   The completed circuit.   The completed circuit. The outputs each connect to both gates, one at each input. The outputs are to the right, each connected to the output of one gate.        Now you will add some labels. Labels are used to name inputs and outputs, as well as gates.    Double-click an input and label it x . Label the other input y .    Double-click the AND gate and label it AND1 . Label the XOR gate XOR1 .    Double-click the output of the AND gate and label it s . Label the output of the XOR gate c .    When you are done, the circuit should look like this.   The completed circuit with labels.   The completed circuit with labels.   The completed circuit with labels. The labels are shown in blue. The labels are x and y for the inputs, AND1 and XOR1 for the gates, and s and c for the outputs.         Adder circuits: The beginning of digital arithmetic  Adder circuits    Use the Poke tool in the quick panel (the hand icon) to poke the inputs. Click the x input. It should turn light green. Click the y input. It should turn light green. As you play with the inputs, observe that the wires change color to reflect the logic value they carry.  Make a truth table with four columns for , , , and . The first two columns should have the values and in alternating order, as we have seen in class. Use the Poke tool to determine the values of and for each combination of and . Record your results in the table.   Truth table for the circuit.    x  y  s  c    0  0      0  1      1  0      1  1       This circuit is called a half adder . The output (for sum ) is the sum of the inputs (remember, the sum of 1-bit values is also a 1-bit value). Because in 1-bit arithmetic, the output is the XOR of the inputs. The output (for carry ) is called the carry bit. It is if the addition overflows, which is only the case when both inputs are . Thus, the output is the AND of the inputs.      Select your entire circuit using the selection tool (arrow icon). Copy and paste it. You should see a copy of your circuit appear on the canvas. Move it below and a little to the right of the original circuit. Change the labels of the new gates to AND2 and XOR2 .  Use the tools in the quick panel to construct this circuit.   The completed circuit.   The full adder circuit is composed of two linked half adders plus an OR gate.        Make a truth table for the circuit. The first three columns should be , , and . The last two columns should be and . Use the Poke tool to determine the values of and for each combination of , , and . Record your results in the table.      Thinking about the truth table, explain why this circuit is called a full adder .    The full adder (made of two half adders plus an OR gate) actually adds 3 bits. The input is the carry bit from the previous addition. The output is the carry bit for the next addition. The output is the (1-bit) sum of the three bits.      Use the Project...Add Circuit menu item to add a subcircuit to your project. Name it Adder1Bit . Select your entire full adder circuit and cut it from the Main circuit. Double-click the name Adder1Bit in the left pane to open the subcircuit. Paste the full adder circuit into the newly opened blank canvas. At this point it is probably a good idea to save your project. Call it adder.circ .  For your subcircuit to work properly, we need to remove the LED indicators and replace them with real outputs. You can use Pins for this purpose. You will need to alter their attributes in the left pane, so that they are output pins instead of input pins. Alternatively, you can use the quick panel to add outputs. Both input and output pins are represented on the quick panel. When you are done, the subcircuit should look like below.   The full adder as a subcircuit.   The full adder subcircuit has had its LEDs replaced with output pins from the quick panel.        If you return to the Main circuit, you should see that the canvas is blank again (if you followed the directions above). Click the Adder1Bit subcircuit in the left pane. You should be able to add a block diagram for the full adder to the canvas. That is, it has inputs on the left and outputs on the right, but the gates are not visible.  Use the Poke tool to test the subcircuit. You should see that it works just like the full adder circuit you built earlier, as indicated in .   The full adder as a subcircuit.   The full adder subcircuit is represented as a black box in the main circuit. Its inputs and outputs are connected to pins from the quick panel.        Use more subcircuits to build a 4-bit adder. You will need four Adder1Bit subcircuits. You will also need to add a Pin for each input and output. Label the inputs , , , and . Label the outputs , , , and . Wire the carry-in input of the 0th adder to a constant 0, and wire the carry-out output of the last adder to an LED.  To finish the 4-bit adder, connect the carry-out output of each adder to the carry-in input of the next adder. This is called a ripple carry adder. When you are done, the circuit should look like . This circuit is called a 4-bit ripple carry adder . This version is different from what I showed earlier in class, in that it features 8 separate input bits instead of two 4-bit inputs. You will have a chance to build the other variation in homework.   The 4-bit adder.   Each c_out is connected to the next c_in. The last c_out goes to a C output, for unsigned integer overflow. The last two c_outs go to an XOR gate, whose output is the V output.        Experiment with the 4-bit adder. Can you figure out what the V output signifies?    The V output is only relevant when considering the two 4-bit inputs as signed integers.     "
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
  "id": "subsec-the-basic-gates-3-1-2",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-the-basic-gates-3-1-2",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " The NAND gate.   The NAND gate resembles the AND gate, but has a small circle on the output side. This circle indicates that the output is inverted.   "
},
{
  "id": "subsec-the-basic-gates-3-2-1",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-the-basic-gates-3-2-1",
  "type": "Figure",
  "number": "1.4.3",
  "title": "",
  "body": " The OR gate.   The OR gate is shaped like a boomerang, oriented with its tips at the top and bottom, and concave side on the left. The inputs are on the concave side of the gate and the output is on the convex side.   "
},
{
  "id": "subsec-the-basic-gates-3-2-2",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-the-basic-gates-3-2-2",
  "type": "Figure",
  "number": "1.4.4",
  "title": "",
  "body": " The NOR gate.   The NOR gate resembles the OR gate, but has a small circle on the output side. This circle indicates that the output is inverted.   "
},
{
  "id": "subsec-the-basic-gates-3-3-1",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-the-basic-gates-3-3-1",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": " The XOR gate.   The XOR gate is shaped like the OR gate, but with an extra line parallel and adjacent to the concave side. The inputs are on the concave side of the gate and the output is on the convex side.   "
},
{
  "id": "subsec-the-basic-gates-3-3-2",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-the-basic-gates-3-3-2",
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
  "id": "subsec-the-basic-gates-7",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-the-basic-gates-7",
  "type": "Activity",
  "number": "1.4.1",
  "title": "",
  "body": "  Install Logisim Evolution on your computer. You can download it from . Windows users should choose the x86.msi file. Mac users should choose the dmg file.   "
},
{
  "id": "subsec-the-basic-gates-8",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-the-basic-gates-8",
  "type": "Activity",
  "number": "1.4.2",
  "title": "",
  "body": "  Open Logisim Evolution. You should see a window with a blank canvas.   The quick panel above the canvas contains the basic gates. Click the AND gate, let go, and mouse onto the canvas. You should see a gate with two inputs and one output. You can put it anywhere on the canvas. You can also move it around later, although that may goof up any wiring you have added.  Add an XOR gate to the canvas. You should see a gate with two inputs and one output. Put it below and to the right of your AND gate.  If you click the output of the AND gate, you will see a wire attached to your mouse. If you move your mouse to the input of the XOR gate, you will see the wire attached to the input. You can only add one right-angle turn per click. If you click, the wire will stay where it is. Click the free end of the wire to continue the wiring path to an input of the XOR gate.  Use the arrow (selection tool) and the delete key to delete the wire you just added.  In the left panel, open the Wiring folder and add two Pins. Connect each Pin to one of the inputs of the AND gate. Branch off these connections so that each Pin is also connected to the XOR gate.  In the Input\/Output folder, add two LEDS. Connect one to the output of the AND gate, and the other to the output of the XOR gate. As connections are completed, the red error wires should turn dark green. The inputs are set to 0 at first, and this value is represented by dark green. The outputs should be dark green as well.   When you are done, the circuit should look like this.   The completed circuit.   The completed circuit. The outputs each connect to both gates, one at each input. The outputs are to the right, each connected to the output of one gate.     "
},
{
  "id": "subsec-the-basic-gates-9",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-the-basic-gates-9",
  "type": "Activity",
  "number": "1.4.3",
  "title": "",
  "body": "  Now you will add some labels. Labels are used to name inputs and outputs, as well as gates.    Double-click an input and label it x . Label the other input y .    Double-click the AND gate and label it AND1 . Label the XOR gate XOR1 .    Double-click the output of the AND gate and label it s . Label the output of the XOR gate c .    When you are done, the circuit should look like this.   The completed circuit with labels.   The completed circuit with labels.   The completed circuit with labels. The labels are shown in blue. The labels are x and y for the inputs, AND1 and XOR1 for the gates, and s and c for the outputs.      "
},
{
  "id": "subsec-adder-circuits-3",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-adder-circuits-3",
  "type": "Activity",
  "number": "1.4.4",
  "title": "",
  "body": "  Use the Poke tool in the quick panel (the hand icon) to poke the inputs. Click the x input. It should turn light green. Click the y input. It should turn light green. As you play with the inputs, observe that the wires change color to reflect the logic value they carry.  Make a truth table with four columns for , , , and . The first two columns should have the values and in alternating order, as we have seen in class. Use the Poke tool to determine the values of and for each combination of and . Record your results in the table.   Truth table for the circuit.    x  y  s  c    0  0      0  1      1  0      1  1       This circuit is called a half adder . The output (for sum ) is the sum of the inputs (remember, the sum of 1-bit values is also a 1-bit value). Because in 1-bit arithmetic, the output is the XOR of the inputs. The output (for carry ) is called the carry bit. It is if the addition overflows, which is only the case when both inputs are . Thus, the output is the AND of the inputs.   "
},
{
  "id": "subsec-adder-circuits-4",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-adder-circuits-4",
  "type": "Activity",
  "number": "1.4.5",
  "title": "",
  "body": "  Select your entire circuit using the selection tool (arrow icon). Copy and paste it. You should see a copy of your circuit appear on the canvas. Move it below and a little to the right of the original circuit. Change the labels of the new gates to AND2 and XOR2 .  Use the tools in the quick panel to construct this circuit.   The completed circuit.   The full adder circuit is composed of two linked half adders plus an OR gate.     "
},
{
  "id": "subsec-adder-circuits-5",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-adder-circuits-5",
  "type": "Activity",
  "number": "1.4.6",
  "title": "",
  "body": "  Make a truth table for the circuit. The first three columns should be , , and . The last two columns should be and . Use the Poke tool to determine the values of and for each combination of , , and . Record your results in the table.   "
},
{
  "id": "subsec-adder-circuits-6",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-adder-circuits-6",
  "type": "Activity",
  "number": "1.4.7",
  "title": "",
  "body": "  Thinking about the truth table, explain why this circuit is called a full adder .    The full adder (made of two half adders plus an OR gate) actually adds 3 bits. The input is the carry bit from the previous addition. The output is the carry bit for the next addition. The output is the (1-bit) sum of the three bits.   "
},
{
  "id": "subsec-adder-circuits-7",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-adder-circuits-7",
  "type": "Activity",
  "number": "1.4.8",
  "title": "",
  "body": "  Use the Project...Add Circuit menu item to add a subcircuit to your project. Name it Adder1Bit . Select your entire full adder circuit and cut it from the Main circuit. Double-click the name Adder1Bit in the left pane to open the subcircuit. Paste the full adder circuit into the newly opened blank canvas. At this point it is probably a good idea to save your project. Call it adder.circ .  For your subcircuit to work properly, we need to remove the LED indicators and replace them with real outputs. You can use Pins for this purpose. You will need to alter their attributes in the left pane, so that they are output pins instead of input pins. Alternatively, you can use the quick panel to add outputs. Both input and output pins are represented on the quick panel. When you are done, the subcircuit should look like below.   The full adder as a subcircuit.   The full adder subcircuit has had its LEDs replaced with output pins from the quick panel.     "
},
{
  "id": "subsec-adder-circuits-8",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-adder-circuits-8",
  "type": "Activity",
  "number": "1.4.9",
  "title": "",
  "body": "  If you return to the Main circuit, you should see that the canvas is blank again (if you followed the directions above). Click the Adder1Bit subcircuit in the left pane. You should be able to add a block diagram for the full adder to the canvas. That is, it has inputs on the left and outputs on the right, but the gates are not visible.  Use the Poke tool to test the subcircuit. You should see that it works just like the full adder circuit you built earlier, as indicated in .   The full adder as a subcircuit.   The full adder subcircuit is represented as a black box in the main circuit. Its inputs and outputs are connected to pins from the quick panel.     "
},
{
  "id": "subsec-adder-circuits-9",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-adder-circuits-9",
  "type": "Activity",
  "number": "1.4.10",
  "title": "",
  "body": "  Use more subcircuits to build a 4-bit adder. You will need four Adder1Bit subcircuits. You will also need to add a Pin for each input and output. Label the inputs , , , and . Label the outputs , , , and . Wire the carry-in input of the 0th adder to a constant 0, and wire the carry-out output of the last adder to an LED.  To finish the 4-bit adder, connect the carry-out output of each adder to the carry-in input of the next adder. This is called a ripple carry adder. When you are done, the circuit should look like . This circuit is called a 4-bit ripple carry adder . This version is different from what I showed earlier in class, in that it features 8 separate input bits instead of two 4-bit inputs. You will have a chance to build the other variation in homework.   The 4-bit adder.   Each c_out is connected to the next c_in. The last c_out goes to a C output, for unsigned integer overflow. The last two c_outs go to an XOR gate, whose output is the V output.     "
},
{
  "id": "subsec-adder-circuits-10",
  "level": "2",
  "url": "sec-logic-gates-and-circuits.html#subsec-adder-circuits-10",
  "type": "Activity",
  "number": "1.4.11",
  "title": "",
  "body": "  Experiment with the 4-bit adder. Can you figure out what the V output signifies?    The V output is only relevant when considering the two 4-bit inputs as signed integers.   "
},
{
  "id": "sec-standard-forms",
  "level": "1",
  "url": "sec-standard-forms.html",
  "type": "Section",
  "number": "1.5",
  "title": "Standard forms: minterms and maxterms",
  "body": " Standard forms: minterms and maxterms  Standard forms   In this section we will introduce two standard forms for Boolean functions: the minterm and the maxterm . Every boolean function can be represented as a sum of minterms or as a product of maxterms. Each of these representations leads directly to a circuit.  Consider the expression . If we list out the barred and unbarred versions of all the variables that appear in the expression, we get the following: . These occur in complementary pairs: for any choice of logical values of , , , exactly one of the members of each pair is 1 and the other is 0. summarizes the situation.   Values of the literals    minterm        0  0  0     0  0  1     0  1  0     0  1  1     1  0  0     1  0  1     1  1  0     1  1  1     Each of the rows in the table is called a minterm . The name comes from the fact that each row is a product of literals (variables or their negations), and the product of literals is called a term . The term is called a minterm because it is 1 for the combination of inputs that is listed in the row, and 0 for all other combinations. The minterm is called canonical because it is the simplest possible expression for the function.    Minterm canonical form  Look again at . Notice that each minterm is labeled by the integer representation of the combination of inputs that makes it 1. For example, is 1 when , , and , and this combination of inputs, that is, the binary number , is the integer 5. The minterm is 1 when , , and , and this combination of inputs, that is, the binary number , is the integer 7.  Given any truth table for a 3-variable function, we can write down the minterm canonical form for the function by adding the minterms that are 1 in the truth table. For example, corresponds to the minterm canonical form , because minterms , , and are the only ones that are 1 in the truth table.   Sample truth table          0  0  0  0    0  0  1  1    0  1  0  0    0  1  1  1    1  0  0  0    1  0  1  1    1  1  0  0    1  1  1  0     To represent the minterm form as a circuit, we remember that multiplication is AND and addition is OR. So the circuit for is as pictured in .   Circuit for   The inputs each pass through an inverter. Appropriate combinations of the inputs and their inversions are ANDed together, and the results are ORed together.      Use Logisim to build the circuit in , and verify that it has the truth table in .      Write down the minterm canonical form for the function whose truth table is given in .   Truth table with 3 variables          0  0  0  1    0  0  1  0    0  1  0  1    0  1  1  1    1  0  0  0    1  0  1  1    1  1  0  0    1  1  1  1         Use Logisim to build the circuit for the function whose minterm canonical form you wrote down in the previous activity, and verify that it has the truth table in .    When there are more variables, just put them in an order and write down all the minterms. There will be minterms for a function of variables. For example, for a function of 4 variables, there will be 16 minterms.    Write down the table of all 16 minterms for variables , , , and (in that order).      Write down the minterm canonical form for the function whose truth table is given in .   Truth table with 4 variables           0  0  0  0  1    0  0  0  1  0    0  0  1  0  1    0  0  1  1  1    0  1  0  0  0    0  1  0  1  1    0  1  1  0  0    0  1  1  1  1    1  0  0  0  0    1  0  0  1  1    1  0  1  0  0    1  0  1  1  1    1  1  0  0  0    1  1  0  1  1    1  1  1  0  0    1  1  1  1  1         Use Logisim to build the circuit for the function whose minterm canonical form you wrote down in the previous activity, and verify that it has the truth table in .    Expressions that are sums of minterms are called sums of products , or SOP expressions. The circuit corresponding to an SOP expression is called a sum of products circuit .  In the next subsection, we will introduce the dual of the minterm canonical form, called the maxterm canonical form . It is useful to know both forms, because sometimes one is easier to work with than the other. One may be easier to build as a circuit than the other, involving fewer gates.    The maxterm canonical form  The maxterm canonical form is the dual of the minterm canonical form. The dual of a function is obtained by interchanging AND and OR, and 0 and 1. So the dual of the minterm is the maxterm , which is . The dual of the minterm canonical form is the maxterm canonical form .  The maxterm is 0 when , , and , and this combination of inputs, that is, the binary number , is the integer 1. The maxterm is 0 when , , and , and this combination of inputs, that is, the binary number , is the integer 3. The maxterm is 1 when , , and , and this combination of inputs, that is, the binary number , is the integer 5. summarizes the situation.   Notice that the maxterms are labeled by the integers that make them 0, not 1. This is the opposite of the situation with minterms.    Values of the literals    maxterm        0  0  0     0  0  1     0  1  0     0  1  1     1  0  0     1  0  1     1  1  0     1  1  1     Let us reconsider the function in . The maxterm canonical form for this function is , because maxterms , , , , and are the only ones that are 0 in the truth table.    Write down the maxterm canonical form for the function whose truth table is given in .      Use Logisim to build the circuit for the function whose maxterm canonical form you wrote down in the previous activity, and verify that it has the truth table in .    When there are more variables, just put them in an order and write down all the maxterms. There will be maxterms for a function of variables. For example, for a function of 4 variables, there will be 16 maxterms.    Write down the table of all 16 maxterms for variables , , , and (in that order).      Write down the maxterm canonical form for the function whose truth table is given in .      Use Logisim to build the circuit for the function whose maxterm canonical form you wrote down in the previous activity, and verify that it has the truth table in .    Expressions that are products of maxterms are called products of sums , or POS expressions. The circuit corresponding to a POS expression is called a product of sums circuit .  The minterm canonical form and the maxterm canonical form are called canonical because they are the simplest possible expressions for the function. The minterm canonical form is the simplest sum of products expression, and the maxterm canonical form is the simplest product of sums expression.    When is the minterm canonical form simpler than the maxterm canonical form, and vice versa?     "
},
{
  "id": "sec-standard-forms-3-1",
  "level": "2",
  "url": "sec-standard-forms.html#sec-standard-forms-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minterm maxterm "
},
{
  "id": "table-minterms-three-vars",
  "level": "2",
  "url": "sec-standard-forms.html#table-minterms-three-vars",
  "type": "Table",
  "number": "1.5.1",
  "title": "Values of the literals",
  "body": " Values of the literals    minterm        0  0  0     0  0  1     0  1  0     0  1  1     1  0  0     1  0  1     1  1  0     1  1  1    "
},
{
  "id": "sec-standard-forms-3-4",
  "level": "2",
  "url": "sec-standard-forms.html#sec-standard-forms-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "minterm term canonical "
},
{
  "id": "table-truth-tab-3-vars",
  "level": "2",
  "url": "sec-standard-forms.html#table-truth-tab-3-vars",
  "type": "Table",
  "number": "1.5.2",
  "title": "Sample truth table",
  "body": " Sample truth table          0  0  0  0    0  0  1  1    0  1  0  0    0  1  1  1    1  0  0  0    1  0  1  1    1  1  0  0    1  1  1  0    "
},
{
  "id": "figure-minterm-135",
  "level": "2",
  "url": "sec-standard-forms.html#figure-minterm-135",
  "type": "Figure",
  "number": "1.5.3",
  "title": "",
  "body": " Circuit for   The inputs each pass through an inverter. Appropriate combinations of the inputs and their inversions are ANDed together, and the results are ORed together.   "
},
{
  "id": "subsec-minterm-canonical-form-7",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-minterm-canonical-form-7",
  "type": "Activity",
  "number": "1.5.1",
  "title": "",
  "body": "  Use Logisim to build the circuit in , and verify that it has the truth table in .   "
},
{
  "id": "subsec-minterm-canonical-form-8",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-minterm-canonical-form-8",
  "type": "Activity",
  "number": "1.5.2",
  "title": "",
  "body": "  Write down the minterm canonical form for the function whose truth table is given in .   Truth table with 3 variables          0  0  0  1    0  0  1  0    0  1  0  1    0  1  1  1    1  0  0  0    1  0  1  1    1  1  0  0    1  1  1  1      "
},
{
  "id": "subsec-minterm-canonical-form-9",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-minterm-canonical-form-9",
  "type": "Activity",
  "number": "1.5.3",
  "title": "",
  "body": "  Use Logisim to build the circuit for the function whose minterm canonical form you wrote down in the previous activity, and verify that it has the truth table in .   "
},
{
  "id": "subsec-minterm-canonical-form-11",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-minterm-canonical-form-11",
  "type": "Activity",
  "number": "1.5.4",
  "title": "",
  "body": "  Write down the table of all 16 minterms for variables , , , and (in that order).   "
},
{
  "id": "subsec-minterm-canonical-form-12",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-minterm-canonical-form-12",
  "type": "Activity",
  "number": "1.5.5",
  "title": "",
  "body": "  Write down the minterm canonical form for the function whose truth table is given in .   Truth table with 4 variables           0  0  0  0  1    0  0  0  1  0    0  0  1  0  1    0  0  1  1  1    0  1  0  0  0    0  1  0  1  1    0  1  1  0  0    0  1  1  1  1    1  0  0  0  0    1  0  0  1  1    1  0  1  0  0    1  0  1  1  1    1  1  0  0  0    1  1  0  1  1    1  1  1  0  0    1  1  1  1  1      "
},
{
  "id": "subsec-minterm-canonical-form-13",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-minterm-canonical-form-13",
  "type": "Activity",
  "number": "1.5.6",
  "title": "",
  "body": "  Use Logisim to build the circuit for the function whose minterm canonical form you wrote down in the previous activity, and verify that it has the truth table in .   "
},
{
  "id": "subsec-minterm-canonical-form-14",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-minterm-canonical-form-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sums of products SOP sum of products circuit "
},
{
  "id": "subsec-minterm-canonical-form-15",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-minterm-canonical-form-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "maxterm canonical form "
},
{
  "id": "subsec-maxterms-2",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "maxterm canonical form "
},
{
  "id": "subsec-maxterms-4",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-4",
  "type": "Warning",
  "number": "1.5.6",
  "title": "",
  "body": " Notice that the maxterms are labeled by the integers that make them 0, not 1. This is the opposite of the situation with minterms.  "
},
{
  "id": "table-maxterms-three-vars",
  "level": "2",
  "url": "sec-standard-forms.html#table-maxterms-three-vars",
  "type": "Table",
  "number": "1.5.7",
  "title": "Values of the literals",
  "body": " Values of the literals    maxterm        0  0  0     0  0  1     0  1  0     0  1  1     1  0  0     1  0  1     1  1  0     1  1  1    "
},
{
  "id": "subsec-maxterms-7",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-7",
  "type": "Activity",
  "number": "1.5.7",
  "title": "",
  "body": "  Write down the maxterm canonical form for the function whose truth table is given in .   "
},
{
  "id": "subsec-maxterms-8",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-8",
  "type": "Activity",
  "number": "1.5.8",
  "title": "",
  "body": "  Use Logisim to build the circuit for the function whose maxterm canonical form you wrote down in the previous activity, and verify that it has the truth table in .   "
},
{
  "id": "subsec-maxterms-10",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-10",
  "type": "Activity",
  "number": "1.5.9",
  "title": "",
  "body": "  Write down the table of all 16 maxterms for variables , , , and (in that order).   "
},
{
  "id": "subsec-maxterms-11",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-11",
  "type": "Activity",
  "number": "1.5.10",
  "title": "",
  "body": "  Write down the maxterm canonical form for the function whose truth table is given in .   "
},
{
  "id": "subsec-maxterms-12",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-12",
  "type": "Activity",
  "number": "1.5.11",
  "title": "",
  "body": "  Use Logisim to build the circuit for the function whose maxterm canonical form you wrote down in the previous activity, and verify that it has the truth table in .   "
},
{
  "id": "subsec-maxterms-13",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "products of sums POS product of sums circuit "
},
{
  "id": "subsec-maxterms-14",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "canonical "
},
{
  "id": "subsec-maxterms-15",
  "level": "2",
  "url": "sec-standard-forms.html#subsec-maxterms-15",
  "type": "Activity",
  "number": "1.5.12",
  "title": "",
  "body": "  When is the minterm canonical form simpler than the maxterm canonical form, and vice versa?   "
},
{
  "id": "sec-using-the-sdk-on-codespaces",
  "level": "1",
  "url": "sec-using-the-sdk-on-codespaces.html",
  "type": "Section",
  "number": "2.1",
  "title": "Using the SDK on Codespaces",
  "body": " Using the SDK on Codespaces  Visit the Pico C Sandbox and fork the repository. Then, create a new Codespace from your fork. This will take a few minutes, and then you will see a VS Code window in your browser. Find the Terminal tab and open it. You should see a prompt that looks like this:  @your-github-name \/workspaces\/pico-c-sandbox (main) $  The prompt indicates the console is waiting for a command. To save room we compress the prompt to just the $ character. You will type everything after the $ character on the same line. The text you type appears in a boldface font. The text the console prints in response appears in a normal font. The console prints a blank line after each command.  Run the following commands, pressing Enter after you type each one:  git clone https:\/\/github.com\/raspberrypi\/pico-sdk.git pico\/pico-sdk  Cloning into 'pico\/pico-sdk'...  git clone https:\/\/github.com\/raspberrypi\/pico-examples.git pico\/pico-examples  Cloning into 'pico\/pico-examples'...  cd pico\/pico-sdk   git submodule update --init  (a lot of output)  cd ..\/..   sudo apt update  (a lot of output)  sudo apt install cmake gcc-arm-none-eabi libnewlib-arm-none-eabi build-essential  (a lot of output)    These commands install the compiler itself, the SDK, and some example code. Most of them produce a lot of output, which we have omitted here. The cd command changes the current directory to the one specified. The sudo command runs the following command as the superuser, which is required to install software. The apt command is the package manager for Debian Linux, which we are running in this Codespace.  Now, use F1 key to bring up the Command Palette. This is the best way to run commands in VS Code. Type CMake and select CMake: Configure from the list of commands that appears. If you are asked to select a kit, choose gcc-arm-none-eabi . This will take a few minutes, and you will see a lot of output in the console. When it is done, you will see a message like this:  Configuring done  Generating done  Build files have been written to: \/workspaces\/pico-c-sandbox\/build  You will also see some activity in the status bar at the bottom of the window indicating that CMake is doing its configuring.  When the configuring is done, you are ready to compile and run some code!  "
},
{
  "id": "sec-using-the-sdk-on-codespaces-2",
  "level": "2",
  "url": "sec-using-the-sdk-on-codespaces.html#sec-using-the-sdk-on-codespaces-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "prompt "
},
{
  "id": "assignments-day00",
  "level": "1",
  "url": "assignments-day00.html",
  "type": "Section",
  "number": "3.1",
  "title": "Problems for Monday, Jan 8",
  "body": " Problems for Monday, Jan 8  Make sure you can solve all of these problems. Similar ones will appear on the midterm. As always in courses at this level, solve means to give complete supporting reasoning or justification, not just the answer. In this case you should include the details of your calculation, however you do it.    For each problem below, interpret the summands as binary-encoded integers and find the sum without converting the summands to decimal. Express all your answers in binary, and for each problem, show a complete record of your reasoning. This could be a collection of machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the following binary numbers:   11000.   Perform the binary addition:   100111.   Add the binary numbers:   11111.   Compute the sum:   Perform binary addition:   Add the binary values:   Compute the sum of:   Add the binary numbers:   Perform binary addition:   Add the binary values:    For each problem below, interpret the summands as hexadecimal-encoded integers and find the sum without converting the summands to decimal. (You are allowed to convert them to binary, but I don't necessarily recommend it.) Express all your answers in hex, and for each problem, show a complete record of your reasoning. This could be a collection of or machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the hexadecimal values:       Perform the sum:       Compute the sum:       Perform the sum:   Add the hexadecimal numbers:       Compute the sum:   Add the hexadecimal values:       Add the hexadecimal numbers:   Compute the sum:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:    "
},
{
  "id": "exercises-day00-1",
  "level": "2",
  "url": "assignments-day00.html#exercises-day00-1",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": " For each problem below, interpret the summands as binary-encoded integers and find the sum without converting the summands to decimal. Express all your answers in binary, and for each problem, show a complete record of your reasoning. This could be a collection of machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the following binary numbers:   11000.   Perform the binary addition:   100111.   Add the binary numbers:   11111.   Compute the sum:   Perform binary addition:   Add the binary values:   Compute the sum of:   Add the binary numbers:   Perform binary addition:   Add the binary values:  "
},
{
  "id": "exercises-day00-2",
  "level": "2",
  "url": "assignments-day00.html#exercises-day00-2",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": " For each problem below, interpret the summands as hexadecimal-encoded integers and find the sum without converting the summands to decimal. (You are allowed to convert them to binary, but I don't necessarily recommend it.) Express all your answers in hex, and for each problem, show a complete record of your reasoning. This could be a collection of or machines as in the videos we saw in class, a pencil-and-paper addition with carries, or anything else that shows me how you came up with your answer.   Add the hexadecimal values:       Perform the sum:       Compute the sum:       Perform the sum:   Add the hexadecimal numbers:       Compute the sum:   Add the hexadecimal values:       Add the hexadecimal numbers:   Compute the sum:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:   Add the hexadecimal numbers:  "
},
{
  "id": "sec-assignment-day04",
  "level": "1",
  "url": "sec-assignment-day04.html",
  "type": "Section",
  "number": "3.2",
  "title": "Problems for Thursday, January 11",
  "body": " Problems for Thursday, January 11  Work on these problems in groups of 2 3 while the instructor catches up on grading projects 00 and 01. For Python coding problems, you can save more files on your Pico (make sure not to overwrite code.py ). Use the Serial console in Mu editor to see the output of your programs.    Write a function is_even(x) that takes a single integer argument x and returns True if the argument is even and False otherwise. You may assume that the argument is a nonnegative integer (do not validate within your function). You may not use the % operator. Only use bitwise operators and equality comparison.    Write a function bit_is_set(x, n) that takes two integer arguments x and n and returns True if the n th bit of x is set and False otherwise. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.    Write a function set_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit set. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.    Write a function clear_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit cleared. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.    Write a function toggle_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit toggled. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.    "
},
{
  "id": "exercises-day04-1",
  "level": "2",
  "url": "sec-assignment-day04.html#exercises-day04-1",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": " Write a function is_even(x) that takes a single integer argument x and returns True if the argument is even and False otherwise. You may assume that the argument is a nonnegative integer (do not validate within your function). You may not use the % operator. Only use bitwise operators and equality comparison.  "
},
{
  "id": "exercises-day04-2",
  "level": "2",
  "url": "sec-assignment-day04.html#exercises-day04-2",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": " Write a function bit_is_set(x, n) that takes two integer arguments x and n and returns True if the n th bit of x is set and False otherwise. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.  "
},
{
  "id": "exercises-day04-3",
  "level": "2",
  "url": "sec-assignment-day04.html#exercises-day04-3",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": " Write a function set_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit set. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.  "
},
{
  "id": "exercises-day04-4",
  "level": "2",
  "url": "sec-assignment-day04.html#exercises-day04-4",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": " Write a function clear_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit cleared. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.  "
},
{
  "id": "exercises-day04-5",
  "level": "2",
  "url": "sec-assignment-day04.html#exercises-day04-5",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "",
  "body": " Write a function toggle_bit(x, n) that takes two integer arguments x and n and returns the value of x with the n th bit toggled. You may assume that the arguments are nonnegative integers (do not validate within your function). You may not use the % operator or any loops or conditionals. Only use bitwise operators and equality comparison.  "
},
{
  "id": "sec-projects",
  "level": "1",
  "url": "sec-projects.html",
  "type": "Section",
  "number": "3.3",
  "title": "Projects",
  "body": " Projects   Project 02: Bitmasking   Part A: utils.py  Now that we are beginning to have more than one file, it's time to start organizing our code. We'll do this by creating a utils.py file and moving our binary_write() function into it. The code.py file will be the main file, and it will import the binary_write() function from the utils.py directory.  Use the Mu editor to open a new file on your Pico. Save and name it utils.py (put it in the top-level folder alongside code.py ). Then, move (don't copy) the binary_write() function's definition into utils.py . You will also want to include any necessary import statements in utils.py . Now, in the code.py file, add the following line at the top:  from utils import binary_write  The meaning of this line is that we are importing the binary_write() function from the utils.py file. The from ... import ... syntax ensures that the short name of the function is available rather than its fully qualified name utils.binary_write() . If we do import utils instead, then we would need to call the function as utils.binary_write() .  Just as we learn to separate the work of our programs into functions, instead of piling everything into one big main function, we should also separate our functions into files. This makes it easier to organize our code and to find things when we need to change them.    Part B: Bitmasking  Put all the function definitions from into your utils.py file. You will need to add the from ... import ... statements to code.py to make them available.    Part C: Animations  You can create marquee-style animations by using a loop to turn on and off LEDs in a sequence. For example, if you have four LEDs connected to pins 0, 1, 2, and 3, you can create a kitt animation by turning on the first LED, then the second, then the third, then the fourth, then the third, then the second, then the first, and then repeating the process. You can use the time.sleep() function to pause between turning on and off the LEDs.  Use the binary_write() function to create three different such animations. They shouldn't look too much alike. Each one should be enclosed in a function, as below. Notice there is no while True loop. We want to be able to run it only a few times, which would be impossible if we had an infinite loop. Do not duplicate the example as one of your submissions.  You receive credit for Part C if you can show me three working animation cycles (just once through for each is fine) and the code for each uses binary_write() to turn on and off the LEDs. The binary_write() function must be imported from utils.py . Full credit solutions should make use of some of the functions from Part B.   Example: kitt animation    def animate_kitt():  frames = [1, 1 << 1, 1 << 2, 1 << 3, 1 << 2, 1 << 1, 1]  for f in frames:  binary_write(f)  time.sleep(0.1)        Project 03: Buttons and Input   In this project, you'll incorporate input into your circuitry. Make sure Project 02 is completed before you start this one.  You will need to remove one LED from your circuit to make room for the button. I have used its GPIO pin for the button, but you can use any pin you like. My concern was a readable diagram.  Take care to observe that the button is not wired to the breadboard in the same was as the LEDs. The LEDs receive the high signal from GPIO through the resistor, and then current flows through the LED to ground. The button is wired so that the Pico's power rail (make sure this is connected to 3.3V on pin 36, not 5V on pin 40 or pin 39) is connected to one leg of the button, and the other leg is connected to GPIO.  When the button is open (not pressed), no current flows through the button (it will be connected to ground through the Pico's internal pull-down resistor ). When the button is closed (pressed), current flows from the power rail through the button to GPIO, pulling the GPIO input high. Your code will allow the Pico to detect this high voltage and trigger an action.    Part A  Wire your button to the breadboard as shown in the diagram below. Make sure the power rails (red) are connected to 3.3V only! The 5V main power lines will destroy your Pico!    Pico with button for input.   The button is wired to the bottom three rows.    Then you will need to make some changes in how the pins are initialized. Your button pin (GPIO 16 in my diagram) will need to be configured as an input. Because we didn't connect the button to ground, we need to tell the Pico to use the internal pull-down resistor. This will ensure that the input is low when the button is not pressed. The code below shows how to do this.  import board  import digitalio  import time  from utils import binary_write   LED_PINS_SETUP = [board.GP16, board.GP17, board.GP18, board.GP19,  board.GP20, board.GP21, board.GP22, board.GP26]  PINS = [None] * 8  for i, led_pin in enumerate(LED_PINS_SETUP):  PINS[i] = digitalio.DigitalInOut(led_pin)  PINS[i].direction = digitalio.Direction.OUTPUT  if i == 0:  PINS[i].switch_to_input(pull=digitalio.Pull.DOWN)  PINS[i].value = False   button = PINS[0]  leds = PINS[1:]  Without the internal pull-down resistor, the input would be floating when the button is not pressed. This means that it would be neither high nor low, and it would be impossible to tell whether the button was pressed or not. The internal pull-down resistor ensures that the input is low when the button is not pressed. Without this software solution, we would need to add a physical resistor to the circuit connecting the button to ground. The internal pull-down resistor is a convenient alternative and they are ubiquitous in microcontrollers.    Part B  The buttons are built so that they connect across the vertical groove running down the middle of the breadboard. When the button is connected, it electrically connects the two sides of the groove. When the button is pressed, both pins on the left side of the groove are connected to both pins on the right side of the groove.  Make sure all your Project 02 code is safe somewhere (in another file, not code.py , on your Pico or your laptop) and then add this code to your code.py file:  while True:  if button.value:  print(\"Hello sailor!\")  time.sleep(0.5)  In the Serial pane, you should see the output when you press the button. When you have succeeded, play with the delay time in the call to time.sleep() . What happens if you make it too short? What happens if you make it too long? Discuss with the people in your group.  I will visit each group and check the group off together. Don't move on to part C until you are checked off. Instead, work on HW 1.    Part C  The difficulty with using buttons for input is that the Pico has to be listening for the button press. If the Pico is busy doing something else, it won't be able to respond to the button press. This is why we used the time.sleep() function in the example above.  Try to adapt your animation code so that your Pico does the following on reset:   Display a short ready sequence, like flashing all the LEDs on and off three times.    Wait for the button to be pressed.    Display the next animation three times.    Go to step 2.   If you press the button while the animation is running, what happens? Is that what you expected, or what a typical user would expect? Discuss with the people in your group.    "
},
{
  "id": "example-animate-kitt",
  "level": "2",
  "url": "sec-projects.html#example-animate-kitt",
  "type": "Example",
  "number": "3.3.1",
  "title": "Example: <code class=\"code-inline tex2jax_ignore\">kitt<\/code> animation.",
  "body": " Example: kitt animation    def animate_kitt():  frames = [1, 1 << 1, 1 << 2, 1 << 3, 1 << 2, 1 << 1, 1]  for f in frames:  binary_write(f)  time.sleep(0.1)    "
},
{
  "id": "figure-pico-with-button-bb",
  "level": "2",
  "url": "sec-projects.html#figure-pico-with-button-bb",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " Pico with button for input.   The button is wired to the bottom three rows.   "
},
{
  "id": "sec-homework",
  "level": "1",
  "url": "sec-homework.html",
  "type": "Section",
  "number": "3.4",
  "title": "Homework",
  "body": " Homework   Homework 1  You are free to talk with others about the problems, but all the work you submit must be completely your own.    Let and be unsigned 2-bit integers, and write and . For example, if and , then . Similarly, if , then . In this problem, think of , , , and as inputs to a digital circuit.   Write a boolean expression (using AND, OR, NOT operations on the input variables , , , and ) for the condition . (So, for example, if and , then the formula should evaluate to FALSE.)   Write a truth table for your formula.   Using the theory of minterms and maxterms, implement your formula as a digital circuit and save it in Logisim with filename prob01.circ .    In this exercise, you will design a logic circuit in Logisim to drive two 7-segment displays from a 4-bit input. We will use 2's complement arithmetic to handle negative numbers and create a circuit that can display any integer in the range to . In a later exercise you combine these with adders to create a circuit that can add two 4-bit signed integers and display the result.  Recall that in 2's complement arithmetic on 4-bit integers, bit patterns 0000 through 0111 represent the integers through , and bit patterns 1000 through 1111 represent the integers through . The bit pattern 1000 represents , 1001 represents , and so on up to 1111 representing .  As we saw in class, there are two advantages of this system over the more obvious sign-magnitude system (where the leading bit simply acts like a minus sign). First, there is only one representation of zero, and second, the circuit for addition is exactly the same as for unsigned integers. You will verify this during the course of this exercise.   shows a 7-segment display circuit in Logisim, with a 3-bit input connected to a 7-segment decoder that drives the display. The decoder is a subcircuit you will design and implement using truth tables and minterms and maxterms. The decoder has 7 outputs, through , that individually drive the segments of the display. The display has 8 pins, numbered 0 through 7, that are connected to the decoder outputs.    Pin labels.   (for accessibility)     Segment labels.   (for accessibility)      The completed decoder.   (for accessibility)    The outputs of your decoder should correspond to the labeled segments in . The decoder should be designed so that it decodes the binary word and shows the value on the display.  That is, when , the input is , and the display shows ; when and , the input is , and the display shows ; and so on. The completed circuit should look like .  Save your work in a file named prob02.circ .    In a new Logisim file, build another decoder, this time with a 4-bit input and 8 single-bit outputs. This decoder should also go in a subcircuit, named TWOSCOMP . In the main circuit, connect a 4-bit input pin to your decoder and connect the outputs to two 7-segment displays. Your task is to design the decoder so that it displays the 2's complement representation of the input integer.  For example, if the input is , then the decoder should display . If the input is , then the decoder should display . If the input is , then the decoder should display . The decoder should display all the integers in the range to , as illustrated in and .    Positive integers.   (for accessibility)     Negative integers.   (for accessibility)     Save your work in a file named prob03.circ .    Construct a circuit using three of your TWOSCOMP controllers from the previous problem and six 7-segment display to show a 2's complement addition. You will need the 4-bit adder subcircuit from Project 04 (on Canvas). The adder subcircuit here is the small box with the sign. You can use the built-in Adder component from the Arithmetic menu, but only single-bit adders: implement your own 4-bit ripple carry adder.  The completed circuit should resemble .   2's complement adder.   (for accessibility)    Save your work in a file named prob04.circ .    If you Poke in (hand tool) various values in your circuit from the previous problem, you will notice the result is not always correct. Chapter 3 in Plantz discusses fixed-width addition errors in detail. In this problem, your task is to add an error-detecting circuit to your 4-bit signed adder from the previous problem.  The error-detecting circuit should have three inputs and a single output that is if the result of the addition is incorrect and otherwise. The error-detecting circuit should be implemented as a subcircuit named ERROR . The completed circuit should resemble .   2's complement adder with error detection.   (for accessibility)    Save your work in a file named prob05.circ .      Homework 2  You are free to talk with others about the problems, but all the work you submit must be completely your own.    In this problem, you will design a 2-bit (clocked) register with JK flip-flops. The register should have two bits of input, and , and two bits of output, and . When the clock input is , the register should hold its current value. When the clock input changes from to , the register should load the values of and (meaning those should be the values of and after the clock changes from to ).  The state diagram is easier to describe than it is to draw. There are four states, 0, 1, 2, and 3. When the input is , the next state is , regardless of the current state. Here is a table summarizing the situation:     current state  next state    0  0  0    0  1  0    0  2  0    0  3  0    1  0  1    1  1  1    1  2  1    1  3  1    2  0  2    2  1  2    2  2  2    2  3  2    3  0  3    3  1  3    3  2  3    3  3  3    As in class, you should organize your calculation and design in the following steps.    Encode the states and inputs as binary numbers.    Rewrite the state transition table using your binary encoding.    The current state is the value of the output. Each output bit will be connected to a flip-flop. Add appropriate columns to the state transition table for the flip-flops.    Fill in the new columns based on the transition diagrams for the flip-flops you selected. We used JK flip-flops in class and it is fine to stick with those. Using anything else will require a bit more creativity and engineering problem-solving from you. Not every flip-flop is appropriate for every circuit.    Create K-maps for each of the flip-flop columns you added.    Write the boolean expressions for the next state of each flip-flop.    Implement the circuit in Logisim and save it in a file named prob01.circ .         Design a clocked circuit with one (non-clock) input bit. There will be one bit of output. Draw the state diagram according to the following:   When three or more consecutive inputs have been 0, the output should be 1.    When three or more consecutive inputs have been 1, the output should be 1.    Otherwise, the output should be 0.   As in problem 1, you can use any flip-flops you like. Use the same procedure outlined in the previous problem.   You can do this with five states. The circuit will start in state A and never return to it. Assume the output is 0 when we are in state A (because we haven't yet had a chance to see three consecutive inputs). Note that you may find a more efficient (fewer states) solution; I only worked out one possibility.     "
},
{
  "id": "subsec-hw1-3-1",
  "level": "2",
  "url": "sec-homework.html#subsec-hw1-3-1",
  "type": "Exercise",
  "number": "3.4.1.1",
  "title": "",
  "body": " Let and be unsigned 2-bit integers, and write and . For example, if and , then . Similarly, if , then . In this problem, think of , , , and as inputs to a digital circuit.   Write a boolean expression (using AND, OR, NOT operations on the input variables , , , and ) for the condition . (So, for example, if and , then the formula should evaluate to FALSE.)   Write a truth table for your formula.   Using the theory of minterms and maxterms, implement your formula as a digital circuit and save it in Logisim with filename prob01.circ .  "
},
{
  "id": "subsec-hw1-3-2",
  "level": "2",
  "url": "sec-homework.html#subsec-hw1-3-2",
  "type": "Exercise",
  "number": "3.4.1.2",
  "title": "",
  "body": " In this exercise, you will design a logic circuit in Logisim to drive two 7-segment displays from a 4-bit input. We will use 2's complement arithmetic to handle negative numbers and create a circuit that can display any integer in the range to . In a later exercise you combine these with adders to create a circuit that can add two 4-bit signed integers and display the result.  Recall that in 2's complement arithmetic on 4-bit integers, bit patterns 0000 through 0111 represent the integers through , and bit patterns 1000 through 1111 represent the integers through . The bit pattern 1000 represents , 1001 represents , and so on up to 1111 representing .  As we saw in class, there are two advantages of this system over the more obvious sign-magnitude system (where the leading bit simply acts like a minus sign). First, there is only one representation of zero, and second, the circuit for addition is exactly the same as for unsigned integers. You will verify this during the course of this exercise.   shows a 7-segment display circuit in Logisim, with a 3-bit input connected to a 7-segment decoder that drives the display. The decoder is a subcircuit you will design and implement using truth tables and minterms and maxterms. The decoder has 7 outputs, through , that individually drive the segments of the display. The display has 8 pins, numbered 0 through 7, that are connected to the decoder outputs.    Pin labels.   (for accessibility)     Segment labels.   (for accessibility)      The completed decoder.   (for accessibility)    The outputs of your decoder should correspond to the labeled segments in . The decoder should be designed so that it decodes the binary word and shows the value on the display.  That is, when , the input is , and the display shows ; when and , the input is , and the display shows ; and so on. The completed circuit should look like .  Save your work in a file named prob02.circ .  "
},
{
  "id": "subsec-hw1-3-3",
  "level": "2",
  "url": "sec-homework.html#subsec-hw1-3-3",
  "type": "Exercise",
  "number": "3.4.1.3",
  "title": "",
  "body": " In a new Logisim file, build another decoder, this time with a 4-bit input and 8 single-bit outputs. This decoder should also go in a subcircuit, named TWOSCOMP . In the main circuit, connect a 4-bit input pin to your decoder and connect the outputs to two 7-segment displays. Your task is to design the decoder so that it displays the 2's complement representation of the input integer.  For example, if the input is , then the decoder should display . If the input is , then the decoder should display . If the input is , then the decoder should display . The decoder should display all the integers in the range to , as illustrated in and .    Positive integers.   (for accessibility)     Negative integers.   (for accessibility)     Save your work in a file named prob03.circ .  "
},
{
  "id": "subsec-hw1-3-4",
  "level": "2",
  "url": "sec-homework.html#subsec-hw1-3-4",
  "type": "Exercise",
  "number": "3.4.1.4",
  "title": "",
  "body": " Construct a circuit using three of your TWOSCOMP controllers from the previous problem and six 7-segment display to show a 2's complement addition. You will need the 4-bit adder subcircuit from Project 04 (on Canvas). The adder subcircuit here is the small box with the sign. You can use the built-in Adder component from the Arithmetic menu, but only single-bit adders: implement your own 4-bit ripple carry adder.  The completed circuit should resemble .   2's complement adder.   (for accessibility)    Save your work in a file named prob04.circ .  "
},
{
  "id": "subsec-hw1-3-5",
  "level": "2",
  "url": "sec-homework.html#subsec-hw1-3-5",
  "type": "Exercise",
  "number": "3.4.1.5",
  "title": "",
  "body": " If you Poke in (hand tool) various values in your circuit from the previous problem, you will notice the result is not always correct. Chapter 3 in Plantz discusses fixed-width addition errors in detail. In this problem, your task is to add an error-detecting circuit to your 4-bit signed adder from the previous problem.  The error-detecting circuit should have three inputs and a single output that is if the result of the addition is incorrect and otherwise. The error-detecting circuit should be implemented as a subcircuit named ERROR . The completed circuit should resemble .   2's complement adder with error detection.   (for accessibility)    Save your work in a file named prob05.circ .  "
},
{
  "id": "exercises-hw2-1",
  "level": "2",
  "url": "sec-homework.html#exercises-hw2-1",
  "type": "Exercise",
  "number": "3.4.2.1",
  "title": "",
  "body": " In this problem, you will design a 2-bit (clocked) register with JK flip-flops. The register should have two bits of input, and , and two bits of output, and . When the clock input is , the register should hold its current value. When the clock input changes from to , the register should load the values of and (meaning those should be the values of and after the clock changes from to ).  The state diagram is easier to describe than it is to draw. There are four states, 0, 1, 2, and 3. When the input is , the next state is , regardless of the current state. Here is a table summarizing the situation:     current state  next state    0  0  0    0  1  0    0  2  0    0  3  0    1  0  1    1  1  1    1  2  1    1  3  1    2  0  2    2  1  2    2  2  2    2  3  2    3  0  3    3  1  3    3  2  3    3  3  3    As in class, you should organize your calculation and design in the following steps.    Encode the states and inputs as binary numbers.    Rewrite the state transition table using your binary encoding.    The current state is the value of the output. Each output bit will be connected to a flip-flop. Add appropriate columns to the state transition table for the flip-flops.    Fill in the new columns based on the transition diagrams for the flip-flops you selected. We used JK flip-flops in class and it is fine to stick with those. Using anything else will require a bit more creativity and engineering problem-solving from you. Not every flip-flop is appropriate for every circuit.    Create K-maps for each of the flip-flop columns you added.    Write the boolean expressions for the next state of each flip-flop.    Implement the circuit in Logisim and save it in a file named prob01.circ .       "
},
{
  "id": "exercises-hw2-2",
  "level": "2",
  "url": "sec-homework.html#exercises-hw2-2",
  "type": "Exercise",
  "number": "3.4.2.2",
  "title": "",
  "body": " Design a clocked circuit with one (non-clock) input bit. There will be one bit of output. Draw the state diagram according to the following:   When three or more consecutive inputs have been 0, the output should be 1.    When three or more consecutive inputs have been 1, the output should be 1.    Otherwise, the output should be 0.   As in problem 1, you can use any flip-flops you like. Use the same procedure outlined in the previous problem.   You can do this with five states. The circuit will start in state A and never return to it. Assume the output is 0 when we are in state A (because we haven't yet had a chance to see three consecutive inputs). Note that you may find a more efficient (fewer states) solution; I only worked out one possibility.  "
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
