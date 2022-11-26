const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#minutes');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

//Observables to manage the click events
const start$ = Rx.Observable.fromEvent(startBtn, 'click');
const stop$ = Rx.Observable.fromEvent(stopBtn, 'click');

//Changing time into hours, minutes and seconds
const toTime = (time) => ({
    hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor(time / 6000),
    seconds: Math.floor((time / 100) % 60)
});

//DOM elements
const render = (time) => {
    hours.innerHTML = time.hours
    minutes.innerHTML = time.minutes
    seconds.innerHTML = time.seconds
};

//Making time change every 10 seconds
const interval$ = Rx.Observable.interval(10);

//Decrementing inputted time
const initialise = 'toTime';
const increment = acc => acc - 1;
const reset = acc => initialise;

const increment$ = Rx.Observable.merge(
    pausible$.mapTo(increment)
);

const stopTimer$ = Rx.Observable.merge(
    stop$
);

const pausible$ = interval$.takeUntil(stopTimer$);

//Stops at 0
if(increment$ = 0){
    stop$
};

//Runs the program
application$ = start$.switchMapTo(increment$)
                     .startWith(initialise)
                     .scan((acc, currFunc) => currFunc (acc))
                     .map(toTime)
                     .subscribe(val => render(val));