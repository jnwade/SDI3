var handleData = function (json, json2, clubContact) {
    console.log(json, json2, clubContact);
};

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
     var staffNeeded = function (slammed, needed) {
        if ( slammed === true) {
            staff.push(needed)
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
        "name": getName, // Gets the name of the venue (method)
        "Admission" : ofAgeGuests, 
        "staffNeeded" : staffNeeded, // returns whether or not more staff is needed to accomidate guests
        "seatGuest" : seatGuest, // Checks that guests are of age and if so, adds them to the list
        "guestList" : guestList, // Shows who is currently on the guest list
        "staff" : staff // Allows us to push additional staff to the staff array
    };
};

var fiddlersGreen = venue("Fiddlers Green");
var kittyOsheas = venue("Kitty O'Shea's");
var dexters = venue("Dexters");
var backStage = venue("Back Stage");


handleData(json, json2, clubContact);
dexters.seatGuest("Stephanie", 18); 
dexters.seatGuest("Mike", 25);
backStage.seatGuest("Amanda", 20);
backStage.seatGuest("Josh", 26);
backStage.seatGuest("Tim", 17);
backStage.seatGuest("Jenny", 15);
console.log(dexters.name()); // Accessor
dexters.staffNeeded( true, 2);
console.log(dexters);
dexters.guestList();
backStage.staff.push(2);
console.log(backStage.name());
console.log(backStage);
backStage.staffNeeded( false, 0);
backStage.guestList();









