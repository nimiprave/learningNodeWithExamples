//even emitter object

var events = require( 'events');
var eventemitter = new events.EventEmitter( );

// creae a even handler. 

var eventHandler = function(){
    console.log( 'Event fired' );
}

// Assign the event to the handler. 

eventemitter.on( 'scream', eventHandler );

// fire the scream event. 
eventemitter.emit( 'scream' );