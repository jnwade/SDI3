//var handleData = function (json) {
//    //for (var i = 0; i < json.venue.length; i++) {
//    //    var venue = json.venue[i];
//    //    console.log( "Venue: " + venue.name + ", Pay: " + venue.pay + ", Bar Tab: " + venue.barTab );
//    console.log(json, json2, clubContact);
//};
//
//
//handleData(json, json2, clubContact);


//var jsonstring = JSON.stringify(json);
//console.log(jsonstring);
//
//var receivedjson = JSON.parse(jsonstring);
//console.log(receivedjson);


// Constructor
var venue = function (name) {
    var ofAgeGuests = [];
    var staff = [];
    var seatGuest = function (guests, age) {
        if ( age >= 18) {
        ofAgeGuests.push(guests);
        } else { console.log( "I'm sorry " + guests + ", 18 and up only.")
        };
    };
     var staffNeeded = function (slammed) {
        if ( slammed === true) {
            console.log("Call in reinforcements!");
        } else {console.log( "We got this!")
        };
    };
    var guestList = function () {
        for ( var i=0; i < ofAgeGuests.length; i++ ) {
            console.log("Checked in on " + name + " guest list: " + ofAgeGuests[i] + ".");
        }
        };
    var getName = function () { return name; };
    return {
        "name": getName, // Gets the name of the venue
        "Admission" : ofAgeGuests, // Returns guest names that met the age requirements to enter the venue
        "staffNeeded" : staffNeeded, // returns whether or not more staff is needed to accomidate guests
        "seatGuest" : seatGuest,
        "guestList" : guestList,
        "staff" : staff
    };
};

var fiddlersGreen = venue("Fiddlers Green");
var kittyOsheas = venue("Kitty O'Shea's");
var dexters = venue("Dexters");
var backStage = venue("Back Stage");



dexters.seatGuest("Stephanie", 18); 
dexters.seatGuest("Mike", 25);
backStage.seatGuest("Amanda", 20);
backStage.seatGuest("Josh", 26);
backStage.seatGuest("Tim", 17);
backStage.seatGuest("Jenny", 15);
console.log(dexters.name()); // Accessor
console.log(dexters);
dexters.staffNeeded( true, 2);
dexters.guestList();
console.log(backStage.name());
console.log(backStage);
backStage.staffNeeded( false, 0);
backStage.guestList();





