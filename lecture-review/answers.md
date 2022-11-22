"# ReactiveWebProgramming" 

# Question 1
A stream is a collection of data that is incrementally created, processed and consumed. When used in rich web development, a stream is an abstraction of a collection of data applied in some sequence, which is then distributed in time as a result of an asynchronous event occuring in the system. It involves the breaking down of a resource that you wish to send, receive or transform into smaller chunks. It is a beneficial technique when processing data, especially when you don't know the time it will arrive in your application or it's potential size. They may be a possible solution to the synchronisation problem by modelling application states as streams. This then offers a unified abstraction of everything in the application. 

The relationship between streams and observer pattern is that streams implement the design pattern called observable pattern. This is done using the subscribe operation. Working with asynchronous functionalities is made easier by this observer pattern. The part of the stream that is listening is also known as subscribing. The subject maintains a list of dependents known as observers. It also notifies them if there is any change in state or stream of events within the application. This means the stream is the observable being observed. This process is known as the observer pattern and is perfect for data that arrives randomly like user inputs or HTTP requests.

Streams are useful for modelling asynchronous data that you don't know the definite potential size of or when you're not sure of when it will arrive into your application. They can be used for manny beneficial purposes such as user inputs, caches, HTTP requests and data structures. In rich web development, streams are used to solve the synchronisation problem and increase the performance of applications, even when the memory might be limited. They are also a big part of controlling the data buffering, as the start and end of streams can be detected, streams can be chained together, errors can be handled and streams can be cancelled. This would improve the architecture of applications as it would reduce processing problems such as keyboard input, mouse clicks and timers.

# Question 2

# Question 3
