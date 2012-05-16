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
        } else { console.log( "I'm sorry, 18 and up only.")
        };
    };
    var staffNeeded = function (slammed, needed) {
        if ( slammed === true) {
            staff.push(needed);
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
        "name": getName,
        "Admission" : ofAgeGuests,
        "staffNeeded" : staffNeeded,
        "seatGuest" : seatGuest,
        "guestList" : guestList
    };
};

var fiddlersGreen = venue("Fiddlers Green");
var kittyOsheas = venue("Kitty O'Shea's");
var dexters = venue("Dexters");
var backStage = venue("Back Stage");

dexters.seatGuest("Stephanie", 18); 
console.log(dexters.name()); // Accessor
console.log(dexters);

dexters.guestList();
dexters.staffNeeded(true, 2);


