"# ReactiveWebProgramming" 

# Question 1
A stream is a collection of data that is incrementally created, processed and consumed. When used in rich web development, a stream is an abstraction of a collection of data applied in some sequence, which is then distributed in time as a result of an asynchronous event occuring in the system. It involves the breaking down of a resource that you wish to send, receive or transform into smaller chunks. It is a beneficial technique when processing data, especially when you don't know the time it will arrive in your application or it's potential size. They may be a possible solution to the synchronisation problem by modelling application states as streams. This then offers a unified abstraction of everything in the application. 

The relationship between streams and observer pattern is that streams implement the design pattern called observable pattern. This is done using the subscribe operation. Working with asynchronous functionalities is made easier by this observer pattern. The part of the stream that is listening is also known as subscribing. The subject maintains a list of dependents known as observers. It also notifies them if there is any change in state or stream of events within the application. This means the stream is the observable being observed. This process is known as the observer pattern and is perfect for data that arrives randomly like user inputs or HTTP requests.

Streams are useful for modelling asynchronous data that you don't know the definite potential size of or when you're not sure of when it will arrive into your application. They can be used for manny beneficial purposes such as user inputs, caches, HTTP requests and data structures. In rich web development, streams are used to solve the synchronisation problem and increase the performance of applications, even when the memory might be limited. They are also a big part of controlling the data buffering, as the start and end of streams can be detected, streams can be chained together, errors can be handled and streams can be cancelled. This would improve the architecture of applications as it would reduce processing problems such as keyboard input, mouse clicks and timers.


# Question 2
The RxJS library allows you to perform calls to retrieve data asynchronously, manipulate it when it arrives and make subsequent called depending on the data emitted. You can handle asynchronous network responses to API requests by following these components in the RxJS library:
- Consumers - also know as observer, they process and accept events from the consumers.
- Producers - these are the sources of the data, such as bytes from a file.
- Time - as there is always a concept of time, this can be important to manipulate streams.
- Data pipeline - this is the processing of output from the producer to the consumer.

The following RxJS operators can also be used to handle asynchronous network reponses to the API requests:
- map - this manipulates responses from the API.
- flatMap - based on the emitted data by a observable, this is used to create new observable.
- tap - to run side actions when the observable creates new data.
- combineLatest - combines multiple observables into one observable.

Handling asynchronous network responses to API requests in the RxJS library, is possible by creating an observable stream. It allows an implementation of the Observable type. This will fire up a HTTP request which collect new values and allow multiple events to work. The operators are known as the function that is created and builds new observables. Many different operators are found in the RxJS library such as map(), tap(), merge() and filter(). All these operations allow a function that takes a source observable to be returned. After it is returned to the function, the operators job is to observe the data observables and even transform them. The operator is also able to then create new onservables of these transformed values.

In my opinion, there are many benefits to using streams library for networking over promises. A major benefit is that the streams library not only works like promises and provides features of promises, but can also accomplish way more. Promises are not able to work on multiple of events in an application and don't help with the larger data synchronosation issue we see in UI design and implementation. On the other hand, observables can handle 0, 1 or multiple events or multiple values. The same API can also be utilisied in each event. I think the stream libraries are beneficial to accept multiple values, stay clean after being used and allow to be cancelled any time.

I think some downsides to using streams library are they can be harder to debug and error handling. Without structure, it is easy to get entangled in a multiple of streams and be confused on what to do next. Whereas, sometimes simple functions can be more straightforward to debug, especially if they are sequentially composed. Another issue that you could run into while debugging streams is that a large amount of abstarctions can allow no space for plugging into a stream and debugging it, the same way as debugging a function. Another downside to streams library for networking over is that RxJS Observables doesn't 'trap' any errors. When there is an error at the end of the observer chain, it will just be re-thrown. This makes it harder to spot errors.


# Question 3
Applications that include asynchronous tasks, such as user inputs and HTTP requests, all need access to the data straight away without holidng the other events up. It is important for functions to not rely on things in the global state and to not affect any things outside of itself.

The consequences of three asynchronous tasks sharing global state would be that it would result in a challenging maintenance problem and be harder to debug. It would also make readability more difficult for a developer working with previous created projects using global state in asynchronous tasks. When functions share global state, this can result in objects modifying the value of the shared global state. This can then make it impossible to determine what the initial state is when calling a method in another object. All of this can then affect the output prediction and lead to difficulty in testing. 

A good practice to alleviate any problems associated with this would be to limit the global state to a single object. Instead of functions sharing global state, if a certain state is required by an object, it should be requested directly by being paased as a parameter to that specific object.