**Explanation of Node.js. Event Loop Mechanism**

Node.js is a JavaScript runtime environment. It is not a language nor a framework. Instead of JavaScript running on browser environment as per the standards, in case of Node.js this JavaScript actually runs on the machine or runtime. It does this by using an important engine (the v8 engine) that is written in C++.

What does this V8 JavaScript Runtime engine do ?

This engines helps in taking your JavaScript code and converts it into faster machine code which can be understood by the computer to run your program.

**Why Node.js???** 

1. Node.js is a JavaScript runtime built on Chrome's v8 JavaScript Engine
2. Node.js uses an event driven, non-blocking I/O model that makes it efficient
3. Its package ecosystem ie npm is the largest ecosystem for opensource libraries.

4. It works on a single thread using non-blocking I/O calls supporting thousands of concurrent requests

**What does non-blocking I/O means ?**

Suppose there are 2 requests (user1, user 2) that the node receives. In such cases the node will spawn a single thread that will process the request for user 2 without waiting for the response of request from user 1. In short it does not block the processing of request from user . It initiates user1 request and then also processes user2 request meanwhile. The node does not wait for user1 to be completed and then initiate user2 request. Instead it runs both the requests in parallel. This is a non-blocking mechanism.

***********************************************

**EVENT LOOP MECHANISM WITH EXAMPLE**

- Node.js is a single threaded application that supports concurrency via concepts of events and callbacks.
- During a particular request Node has its own thread. It uses an observer pattern
- This Node thread keeps an event loop. Whenever a function is executed it fires the corresponding event. The event that is fired signals the event listener function to execute.

**How actually Event Loop works ?**

For example there is a source code. As soon as node starts processing (node starts its server) it simply initiates its variables, declare functions and waits for  the event to occur.

In an event driven approach there is a main loop that listens for events and triggers a callback function when one of those events is detected.

When a functions callback is over, the event is fired. On the basis of the fired event, the event listener starts executing.

![1563210849317](C:\Users\Gautami\AppData\Roaming\Typora\typora-user-images\1563210849317.png)

1. Push main() into the call stack.
2. Push console.log() into the call stack. It gets run right away and popped(removed) from the call stack.
3. Push setTimeout(2000) onto the call stack. setTimeout(2000) is a Node API. When we call it with event-callback pair(eventName, callback function). 
4. After registering the callback function with the event  in APIs, setTimeout(2000) gets popped from the call stack.
5. Now the second timeout gets registered in same way setTimeout(0). We have 2 apis waiting to execute.
6. After waiting for 0 seconds, setTimeout(0) gets moved to the callback queue and same happens with setTimeout(2000)
7. The last console.log() runs and gets popped from the call stack
8. The event loop sees that the call stack is empty and the callback queue is not empty. Hence it moves the callbacks to the call stacks to execute.



*********************

#### **PROMISES**

**WHY PROMISES**

Initially we came across Callbacks. For example Node has a function to read a File. As soon as it starts reading the file, it returns the control immidiately to the execution environment so that next instruction can be executed. Callbacks are nothing but informing the particular function that it has been completed. Once file reading is done, it will call the callback function and passes the content of file. This way it prevents non-blocking. 

BUT If we had to use nested callbacks, it would be of a great hell. If we need to maintain huge code which contains large nested callbacks The CODE WILL BE UNREADABLE AND UNMANAGEABLE. This situation is nothing but CALLBACK HELL

Hence there are different ways of addressing CALLBACK HELL L:-

One of the solution is **PROMISES**

**WHAT IS PROMISE**

Promise in layman language is Assurance that one will do something or that particular thing will happen. Whether they do it themselves or get done by others doesn't matter. They give you assurance on basis of which you can plan further.

A promise can be kept (giving the final outcome) or can be broken(know the reason and plan accordingly)

**CREATION OF PROMISE**

new Promise(function(resolve, reject){

})

The constructor Promise accepts a function which accepts 2 parameters 

1. resolve    2. reject

Promises are used for handling asynchronous operations or blocking code for eg) file operations, API call, DB calls

**resolve** - If the async functions are successful then the expected result is returned by calling resolve function by the creator of promise

**reject** - If any unexpected error occurs, then the reason is passed on by calling reject function 

***resolve***

Lets take an example:-

eg 1)

var keepHisWord;

keepThisWord = true;

promise1 = new Promise(function(resolve, reject){

if(keepThisWord){

resolve("The man likes to keep his words")

}

else{

reject('The man did not keep his words')

}

});

console.log(promise);

OUTPUT :-  Promise ***resolved***

​                                                 Promise status: ***resolved***   Promise value:  ***The man likes to keep his words***

The promise will get resolved right away in no time. We will not be able to find the initial state of the promise that will take some time to resolve.

eg 2)

promise2 = new Promise(function(resolve, reject){

setTimeout(function(){

resolve({message: "Man likes to keep his word",

code: "keepsWord"

)

}, 4000);

});

console.log(Promise2);

The above code will create a promise that will resolve after 4 seconds. Hence we can see the initial state of the promise.

OUTPUT :-  Promise ***pending***

​                     Promise status : **pending**       Promise value: **undefined**

Once the 4 seconds are over the promise is resolved. Both Promise Status and Promise Value are updated accordingly. The resolve function got updated so we can pass JSON Object instead of a simple string

In short we can pass any type of value to the resolve function

OUTPUT after 4 seconds : Promise ***resolved***

​                                                 Promise status: ***resolved***   Promise value: **Object** ; **code: "keepsWord"**; **message: "Man likes to keep his word"**



***reject***

keepHisWords = false;

promise3 = new Promise(function(resolve, reject){

if(keepHisWords){

resolve('The man keeps his word');

}

else{

reject('The man never keeps his words');

}

});

console.log(promise3);



**OUTPUT : -**

**Promise { rejected 'The man never keeps his words' }**

**(node:1576) UnhandledPromiseRejectionWarning: The man never keeps his words**

Therefore PromiseStatus can have 3 different values. **pending, resolve, reject**. 

1. When Promise is created, PromiseStatus will be in the pending status and will have PromiseValue as undefined until the promise is either rejected or resolved.
2. When a Promise is in resolved or rejected state, it is said to be settled. Therefore a promise generally transitions from pending to settled state

***PROMISES OBJECT AND HANDLING OF OBJECTS***

Promises Object has 2 methods :- 

1. static methods 

2. prototype methods - These are methods that can be applied on an instance of a Promise object and all these methods return a Promise

   Promise.prototype.catch(onRejected)

   Promise.prototype.then(onFullfilled, onRejected)

   Promise.prototype.finally(onFinally)

   .then and .catch methods will be executed whenever a promise is settled irrespective of whether it is fulfilled or rejected.

   **Example**

   You have a saving  of 10,000 and you want to buy a phone of 20, 000. How promise gets executed?

   var promise4 = new Promise(function(resolve, reject){

   savings = 10000;

   phonePrice = 20000;

   if(savings>phonePrice){

   resolve({

   brand: 'samsung',

   color: "grey"

   })

   } 

   else{

   reject("I dont have that much savings. Let us save more money");

   }

   });

   

   promise4.then(function(value){

   console.log("I got a phone hurray", JSON.stringify(value));

   });

   promise4.catch(function(reason){

   console.log('I could not afford to buy the phone', reason);

   });

   promise4.finally(function(){

   console.log('No matter i get the phone or no i can still continue using my current phone')

   });

   

   ​                               **OUTPUT :**-

   **$ node File23.js**
   **I could not afford to buy the phone I dont have that much savings. Let us save more money**
   **No matter i get the phone or no i can still continue using my current phone**
   **(node:5132) UnhandledPromiseRejectionWarning: I dont have that much savings. Let us save more money**

   If we change savings = 40000 ;

   ​                          **OUTPUT**:- 

   **$ node File23.js**
   **I got a phone hurray {"brand":"samsung","color":"grey"}**
   **No matter i get the phone or no i can still continue using my current phone**

   

   There are 2 static methods in Promise Object:-

   #### **Promise.reject(reason)    **

   ```
   var promise3 = Promise.reject("Not interested");
   promise3.then(function(value){ 
   console.log("This will not run as it is a resolved promise. The resolved value is ", value);
   });
   promise3.catch(function(reason){  console.log("This run as it is a rejected promise. The reason is ", reason);});
   ```

   

   **OUTPUT :-** 

   **$ node File23.js**
   **This run as it is a rejected promise. The reason is  Not interested**

   

   #### **Promise.resolve(value)** 

```
var promise3 = Promise.resolve("interested");
promise3.then(function(value){
  console.log("This is a resolved promise. The resolved value is ", value);
});
promise3.catch(function(reason){
  console.log("This run as it is a rejected promise. The reason is ", reason);
});
```

**OUTPUT : -**

#### **$ node File23.js**

This is a re**solved promise. The resolved value is  interested**



####                   **Promise.All**

The Promise.all method returns a single Promise that resolves once all the promises in the argument have resolved or when the  argument contains no promises. It will reject with the reason of the promise that will reject.

console.time("Promise.All");

var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function(

​    n

  ) {

​    return new Promise(function(resolve, reject) {

​      setTimeout(function() {

​        resolve({

​          resolvedAfterNSeconds: n

​        });

​      }, n * 1000);

​    });

  });

  var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function(

​    n

  ) {

​    return new Promise(function(resolve, reject) {

​      setTimeout(function() {

​        reject({

​          rejectedAfterNSeconds: n

​        });

​      }, n * 1000);

​    });

  });

var promisesArray = [];

promisesArray.push(promiseTRSANSG(1));

promisesArray.push(promiseTRSANSG(6));

promisesArray.push(promiseTRSANSG(9));

var handleAllPromises = Promise.all(promisesArray);

handleAllPromises.then(function(values) {

  console.timeEnd("Promise.All");

  console.log("All the promises are resolved", values);

});

handleAllPromises.catch(function(reason) {

  console.log("One of the promises failed with the following reason", reason);

});

**OUTPUT**: -

**$ node File23.js**
**Promise.All: 9003.860ms**
**All the promises are resolved [**
  **{ resolvedAfterNSeconds: 1 },**
  **{ resolvedAfterNSeconds: 6 },**
  **{ resolvedAfterNSeconds: 9 }**
**]**

