1. ***Rendering of websites in the browser using a complete block diagram***

***

The main purpose is to know how do we render our websites.

Lets go to the basic concepts first

Browser 

A browser is nothing but a software component that loads your file (html ) from a server or any local disk and loads it to the user for allowing user interactions.

Browser Engine-

It is again a software component that tells us what is to be displayed on the screen to the user based on the files that it receives. It is the core component of every browser.

Every browser has different browser engine.

-When we write HTML along with CSS and JAVASCRIPT, we open the html file in a browser. How does the browser understands this html code?

The browser reads data in the form of 0's and 1's. It reads the raw bytes of html data from your local disk. Once it receives the raw bytes of data, its not done yet.

Now the raw bytes of data needs to be converted into DOM . How is it done?

Step1 )

Raw bytes of data get converted into characters first through character encoding of the html file.

Step2)

Next the characters are converted into tokens 

Tokens - They define the properties of each tag in the html.  They are nothing but the representation based on each tag.

for eg)  <a></a>  (start-tag token and end-tag token)

Step 3)

After tokenization done, these tokens are converted into Nodes .

Nodes - Separate entity containing each html element within the DOM tree.

Step 4)

After nodes creation, each node is linked to each other in a tree data structure known as DOM.

![](C:\Users\Gautami\Downloads\Untitled Diagram (1).png)

***HTML Page - > Raw bytes of HTML Data -> Characters -> Tokens -> Node -> DOM***

WHAT ABOUT CSS?

We do not open CSS and JS data because the browser can transform the raw bytes of html into DOM before anything

In case of CSS where the  browser receives raw bytes of data it will also fetch the .css stylesheet. Once the browser begins to parse the HTML, it will also find a link tag to CSS and make a request to that CSS file.

What happens in case of CSS ?

***stylesheet-> CSS Raw bytes -> Characters-> Tokens - > Nodes -> CSSOM*** 

CSSOM is nothing but CSS Object Model that is a tree structure for parsing CSS data

***DOM + CSSOM => RENDER TREE**

Step 5 )

Now we have the HTML and CSS (data and style information) of all content. But we have not yet rendered anything on the screen.

LAYOUT - Browser will calculate the exact size and position of each object on the page. (reflow). 

Step 6 )

With the information on the content(DOM) and style(CSSOM) and the exact Layout, the browser now will use paint() to render the individual nodes on the screen.

***Finally Elements are now rendered on the screen***

Imp Note- DOM and CSSOM must be constructed before  a successful paint

***What about JAVASCRIPT ?***

It is to modify the content and styling of page based on the actions and conditions.

When script tag is declared the DOM construction is paused. If script tag is at the bottom it will execute post DOM Construction. If specified at the beginning the DOM will not be done.

***IMP:- Location of script matters*** 

***BLOCK DIAGRAM OF BROWSER RENDERING***

![](C:\Users\Gautami\Downloads\Untitled Diagram (7).png)





********************************************************************************************************************************************************************************************************************************************************************



3. **Different ways of defining a variable**

   ​                           **What are Variables?**

   Variables in JavaScript are like containers that contain reusable data.

   There are 3 kinds of variables :-

   **var, let and const**

   Before ES2015(known as **EcmaScript**), JavaScript variables were solely declared using the var keyword.

   eg) var x;  (variable x), var y(variable y)

   The above is the declaration of variables.

   ES2015 is the updated version of JavaScript. They introduced the other two ways of declaring variables They are **let** and **const**.

   3.a) 'Var' variable

   1. Declaration of var

   ​         eg) var name; 

   2. Initialization of var :-  

   ​       eg) var name = "Gautami"

   3. var is of a **function scope**. If var is declared outside a function it becomes global

   4. 3 ways of declaring variables :-

      var name;

      var name, age, num;

      name = "Pa";

   5. Variables  in JavaScript can also be chained

      eg)  var x, y, z;

      Assigning these variables with values 

      eg) var x=5, y=9, z =20;

   6. var can be declared as many times as possibe

      eg) var x= 5;   var x =6;   var isLogged = true | false;  var location = null;

      ​      var x= "Gautami";

       As above var can take data of any type (String,Number, Boolean, Null, Undefined, Arrays, Objects )

      ************************************************************************************************************************************************************************************************************************************************************

   3.b) 'let' keyword

   ​         let is a lot more similar variable to var but the difference is in their scope constraints.

      1. Declaration of let

         eg) let x;

       2. Initializing of let

           eg) let x;

          ​       x = 5;

       3. let is of a block scope. It can be accessed only within the block in which it is declared. The block can be if, switch, for,while loops. Whenever you see {} (curly brackets) it is a block scope.

          eg)  {

          ​      let a = 10;

          ​     console.log(a) => //O/P:- 10

          ​    }  //BLOCK  1 example

          ​       {

          ​     a++;

          ​     console.log(a)    => O/P:- error

          ​      }      //BLOCK  2 example

       4. As above example in BLOCK1 , let is used inside the block scope hence it gave an output. But in case BLOCK 2,  let is used outside the block scope hence it will give error.

       5. let cannot be declared multiple times. It can be initialized many times but declared only ONCE.

          eg) let x = 5;

          ​      let x = 10;

          ​     console.log(x);   // O/P -> SyntaxError: Identifier 'x' has already been declared

          ************************************************************************************************************************************************************************************************************************************************

3.c)   'const' keyword

const is also a variable type assigned by ES62015 that is assigned to a data whose value will not  cant be changed through the script. 

***const should be compulsory initialized***

1. Initialization 

   eg) const a = 5;

2. const is of a blocked scope. It can be accessed only within the block in which it is declared.The block can be if, switch, for,while loops. Whenever you see {} (curly brackets) it is a block scope.

3. const cannot be reinitiaized 

   eg) const a = 5;     const a = 10;     console.log(a) => O/P-> SyntaxError: Identifier 'a' has already been declared

4. ***const does not mean that its values are fixed and immutable. values can be changed and can be mutable***

   const is mutable in the case where an object is assigned to const

   eg)  const k ={

   name: 'hello'

   ​                  }

   const a = [1, 2, 3]

   k.name = "rutu";

   console.log(k); // O/P => rutu

   a.push(5,6,7);

   console.log(a); // O/P => [1,2,3,5,6,7]

5. const has to be initialized

   eg) const x;    //O/P => Syntax Error: missing initializer

   

   **Why 'var' is not recommended?**

   **Reason No 1**

    var is function scoped. Therefore if var is declared outside the function it will become global. This global variable can be accessed from anywhere. Also it is possible to modify the global variable. In case of let, it provides block-scoping that is absent in the function-scoped var. 

   **Reason No 2**

   Hoisting is another reason. Hoisting in case of var means as follows:-

   for eg) var x =2; Hoisting declares var for you at the top of the program.

   But it  is different in case of let

   eg) var x;  let y;  

   console.log(x) => o/p undefined

   console.log(y) => o/p undefined

   Undefined means we do have x and y variable present. But these variables are not given any values.

   eg) console.log(x); => O/P => undefined

   console.log(y); => O/P => Reference Error: Cannot access 'y' before initialization

   var x = 4;

   let y = 5;

   As above, we are trying to access x before it is been declared. Because of hoisting of var it is okay and gives undefined (which is not a clear indication of what has gone wrong). When compiling code the declaration of x is hoisted at the top of the program.

   But what happens in case of 'let y'. The hoisting did not really work and it gave you a valid error. This ways the debugging got simple in case of let.

   ******************************************************************************************************************************************************************************************************************************************************************

   4. **Different Types of Scopes in detail with examples**

   