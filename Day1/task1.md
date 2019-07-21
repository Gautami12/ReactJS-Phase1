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

### ***2.   Difference between Compiled language and interpreted language with examples of each***

A program has some set of instructions. These set of instructions are executed by compilers and interpreters. Compilers and interpreters take the human readable code and convert it into computer-readable machine code.

Compiled language - The target machine directly translates the program as a whole.

Interpreted language - The target machine does not directly translate the source code. Instead a different program that is  the interpreter reads and executes the source code.

example -

There is a hummus recipe that is given in French needs to be read by a Non-French person. How would the Non-French person interpret the language??

There are 2 directions =>

1. The first is if someone has already translated it for you in English that is understood by the person. This is the compiled version

2. The second is if you have a friend that knows French and translate it into English line by line as you go. In this case your friend is the interpreter. This is the interpreted version

   ###                                    **Compiled languages**

    In case of compiled languages 

   - They directly convert the source code into machine code that the processor can execute.

   - They are faster and more efficient to execute than interpreted languages.

   - But they  manually need a build setup. Every time changes are made they need to rebuild the program every time. In recipe the language code (English) is already provided to you. If in case any ingredient change is to be made, the entire recipe needs to be changed, translated and send to you which is quite tedious.

   - Advantage - Programs compiled into native code at the compile time itself tends to be faster. Gives developer more control over CPU, memory utilization

   - Disadvantage - Time consuming to complete the entire compilation process again. Platform dependency of the generated binary code.

   - Examples - C , C++, Go

      

     ###                                 **Interpreted languages** 

     In case of interpreted languages

     - Run through program line by line and execute each command. Example if the author decided he wants to add olive oil instead of coconut oil, he can scratch out the old line and mention the addition of olive oil at the new line. Your friend will convey you the change as it happens

     - These languages were once meant to be slower but with the addition of just in time compilation, its improving.

     - Advantages - The code is platform independent since the interpreters execute the programs themselves. Java's byte code for example.

     - Disadvantage - The typical execution speed is slower since it interprets and executes the code line by line.

     - #### Examples - JavaScript, Python, PHP

       

************************************************************************************************************************************************************************************************************************************************************************



### **3.                         Different ways of defining a variable**

**What are Variables?**

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

   ### 4.            Different Types of Scopes in detail with examples

   Scope determines the visibility and accessibility of variables and other resources in the particular area of the code

   GLOBAL SCOPE :-

   This scope is the area outside all the functions considered as the Global Scope. If  we declare any variable in this global scope,  that variable will be a global variable and can be used in any other scope

   eg)

   let fruit = "mango";

   function getFruit(){

   console.log(fruit);                // O/P => mango

   

   }

   getFruit();

   *********************************************************************************************************************************************************************************************************************************************************

   

   ​                                                              **LOCAL SCOPE :-**

   Variables declared inside functions will be local to those functions and are considered in the corresponding local scope.

   eg)

   function foo(){                              => local scope

   let a = 5;

   console.log(a);   // O/P => 5

   }

   foo();

   console.log(a); //O/P => Reference Error: a is not defined

   We can also use the variables in nested functions. That means if a function is nested inside another, the nested function will have the access to the variable declared in the parent function

   eg)

   function foo(){

   let a =2;

   ​    this.fooresult = function foo1(){

   console.log(a);                   => O/P=>    2

   }

   let vr = new  foo();

   vr.fooresult(); 

   

   ​               **LOCAL SCOPE IS DIVIDED INTO 2 TYPES**

   1. FUNCTION SCOPE    2. BLOCK SCOPE

      ​                                     **FUNCTION SCOPE**

      When a variable is declared inside a function, the variable is only visible inside that function. 'var' is keyword to define variable for a functioned scope.

      function getFruit(){

      ​    var fruit = "apple"

      ​    console.log(fruit);    // O/P => apple

      }

      getFruit();

      console.log(fruit);           //O/P => Reference Error: fruit is not defined

​                                                    **BLOCK SCOPE**

Block scope contains the area within if, switch, for and while loops. It is related to the data in {} ie a block. const and let keywords can be accessed only within the block. Means they will exist only within that block

eg)

function foo(){

if(true){

​    var fruit1 = "apple";

​    const fruit2 = "mango";

​    let fruit3 = "banana";

console.log(fruit2);   // within the scope Hence O/P => mango

}

console.log(fruit1); // O/P => apple   (since it is var which is accessible within function)

console.log(fruit2);  // O/P => Reference Error: fruit2 is not defined

console.log(fruit3); //O/P => Reference Error: fruit3 is not defined

}

foo();

​                                                  **LEXICAL SCOPE**

This scope is when there are nested functions. In this case the child function will be having access to the variables declared inside the parent function.

eg) 

function foo(){

​    var fruit = "apple";

​    let fruit1 = "mango";

​    function foo2(){

​     console.log(fruit);

​    console.log(fruit1);

​    }

​    foo2();

}

foo();

************************************************************************************************************************************************************************************************************************************************************************************

#### 5.  Different types of Functions in detail. Working of this in each function type

Functions are nothing but callable objects. They can be reusable code, or function that creates objects. 

One Important Point - THIS keyword -

JavaScript is a scripting language. In this the interpreter reads the code and executes it line by line. The scope in which the line is been executed is EXECUTION CONTEXT.  JS has a stack of these execution contexts. The execution context present at the top is currently executed.

***This keyword refers to the current execution context***

There are 6 ways of defining functions :-

1. Function Declaration
2. Function Expression
3. Anonymous Functions
4. Shorthand Method definition
5. Arrow Functions
6. Function Constructors

####  1. Function Declaration

 A function declaration means a function which is declared by keyword 'function' followed by a name, list of parenthesis, and curly braces that delimits the body code

eg) function addSum(a, b){

return a+b;

}

addSum(4,5)   => O/P => 9

As above, internally the function declaration creates a variable equal to the function name. This function variable holds the function object. The created function is named which means name property of the object holds its name.

**********************



#### 2. Function Expression

A function expression is when you assign a function to a variable. A function expression is determined by a function keyword , followed by an optional function name, a list of parenthesis with pair of curly braces.

eg)

const addCount = function add(a,b)

{

​    return a+b;

}

console.log(addCount(5,6));               // With function name ie add O/P => 11

eg)

const addCount = function(a,b)

{

​    return a+b;



}

console.log(addCount(5,6));               // with anonymous function O/P => 11

**********************



#### 3. **Short Hand Method Definitions**

They can be used as method declarations on objects.

**Case 1 :- Method definiton and relevance of this**

eg) 

const collection = {

items: [],

add(items){

this.items.push(...items)

},

get(index){

return this.items[index];

}

}

collection.add('C', 'Java', 'PHP');  // O/P => ['C', 'Java', 'PHP']

collection.get(1);  //O/P => Java

**As above 'this' keyword refers to the object 'collection'****


​                          

​                      **Case 2 - In below case we have shown the 2 ways of defining methods inside an object**

​                      eg)

​                      const a ={

​                      count:1,

​                      getCount: function(){

​                      return "Count";

​                      }

​                      getTotalCount(){

​                      return "TotalCount";

​                      }

​                      }

​                      a.getCount();   => O/P => Count

​                      a.getTotalCount(); =>O/P => TotalCount

************



#### **4.  ARROW FUNCTIONS**

Arrow functions is defined using parenthesis, followed by arrow and a pair of curly braces.

eg)

const add = (a, b)=>{

return a+b;

}

console.log(add(7,20));  => O/P => 27

Ways of defining Arrow Functions :-

1. const d = ()=>{}

2. const d = function()=>{}

3. In case of One line execution 

   const d = e => e*2;

4. const add = (z,y,z)=> x+y+z;

   add(2,3,4)  => O/P => 9

   ***Note Very Very Important***

   **The this keyword in arrow function is never been used. If we use 'this' it will refer to the global object which leads to undefined** 

   
   
   **************
   
   
   
   **5. FUNCTION CONSTRUCTOR :- new Function()**

sample example :-

**function** Person(a, b){

this.a = a;

this.b =b;

this.addData = function(){

console.log(this.a + this.b);

}

}

let p = new Person(4, 5);

p.addData();                         => O/P => 9

#### As above Function is invoked as a constructor with the new keyword. This function constructor returns a new instance. The 'this' refers to the newly created instance (ie :- p)



**6. Anonymous Functions :-**

A function that is declared without any name identifier to refer to it.

**When do we use it ? When we need a descriptive name for a function**

**Note : - They are declared and saved in the memory at runtime. Means every time AF will be executed it will take another place in memory.**

**Example 1** :-

var anon = function(){

alert('anonymous function');

}

anon();

**Example  2:-**

setTimeout(function(){

alert('hello')

}, 1000);

-As above anonymous function passed to set Timeout

**Example 3:-**

(function(){

alert('foo');

})();

-Used as a closure

************************





***Use Of this keyword***

**The this keyword refers to the current execution context. That means to understand this, you need to know how, when and from where the function is called. Does not matter how and where function is declared and defined**.

**Every function while executing has a reference to its current execution context called 'this'. Execution context means how the function is called**

Case 1:-

**this refers to a new instance**

eg)

function Person(fn, ln){

this.lastName = ln;

this.firstName = fn;

this.displayName = ()=>{

console.log(this.firstName);}}

let person = new **Person('John', 'Reed');**

**person.displayName();     // O/P => John Here in case of person.displayName() 'this' refers to the newly instance 'person'**



Case 2 :-

**this refers to invoker Object**

function foo(){

'use strict'

console.log('Simple');

console.log(this === window);

}

let user ={

count: 10,

foo: foo,

foo1 : function(){

console.log(this === window);

}

}

***When an Objects method is invoked 'this' refers to the object which contains the method being invoked***

1. **user.foo** => returns false 

We have used simple function where we have use strict. In case of use strict it will give undefined if 'this' refers to the global object(ie window)

2. **fun1 = user.foo1;**

fun1();  => beacuse foo1 does not have use strict. therefore 'this' can be referred to global object ie window  => O/P => true   (it is a simple function not called by object)

1. **user.foo1()**  => this is not a simple object ie it is not global. It is specified by an object ie user

    O/P =>false (Since foo1 is invoked as a object's method and not global method)

2. **this with call, apply and bind methods** 

   example :-

   function Person(fn, ln){

   this.lastName = ln;

   this.firstName = fn;

   this.**displayName** = ()=>{

   console.log(this.firstName);

   }

   }

   

   eg) **let person = new Person('Harry', 'John');**

   **let person1 = new Person('Sejal');**

   **Case1 :-**

   ​      person.**displayName**();  => o/p  Harry

   **Case 2 :-**

   person.displayName.**call(person1)** => this refers to the object **person1** => **O/P => Sejal**

   **Case 3** :-

   person.displayName**.bind(person1)**=> this refers to the object **person1** => **O/P =>Sejal**

   

