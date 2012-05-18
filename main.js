var musicians = function() {
    return json
};
var venues = function() {
    return json2
};
var contactInfo = function() {
    return clubContact    
};
var whoToCall = function() {   
    for (var key in json.musicians) {
    var musician = json.musicians[key];
    console.log(musician);
    };
};
// Constructor
var venue = function (name) {
    var ofAgeGuests = ["Joe", "Jason", "Alicia"]; // Guests that were already in the venue before the show started.
    var staff = []; // Record of staff that needed to be called in.
    var seatGuest = function (guests, age) { // This function collects the guests name and adds it to the guest list if they are 18 and up.
        if ( age >= 18) {
        ofAgeGuests.push(guests);
        } else { console.log( "I'm sorry " + guests + ", 18 and up only.") // If they are under 18 they are turned away.
        };
    };
     var staffNeeded = function (slammed, needed) { // This boolean function determines whether or not more help needs to be called in. 
        if ( slammed === true) {                    // If so, it will log the amount of extra help needed in the staff array.
            staff.push(needed);
            console.log("Call in reinforcements!");
        } else {console.log( "We got this!")
        };
    };
    var guestList = function () { // This function displays those who have been added to the guest list so far.
        for ( var i=0; i < ofAgeGuests.length; i++ ) {
            console.log("Checked in on " + name + " guest list: " + ofAgeGuests[i] + ".");
        }
        };
    var getName = function () { return name; }; // This function accesses the name of the venue.
    return {
        "name": getName, // Gets the name of the venue (accessor method).
        "Admission" : ofAgeGuests, 
        "staffNeeded" : staffNeeded, // returns whether or not more staff is needed to accomidate guests
        "seatGuest" : seatGuest, // Checks that guests are of age and if so, adds them to the list
        "guestList" : guestList, // Shows who is currently on the guest list
        "staff" : staff // Allows us to push additional staff to the staff array
    };
};


var greetings = function(numGuests) { // There are 14 people alowed on the guest list...
        var remaining = 14-numGuests; //... I have greeted 10 so far, therefore I have 4 greetings left.
        while ( numGuests < 14) {
            console.log("Hi there! Thanks for coming out to the show!");
            numGuests++; 
        }
        return remaining;
};

var mike = json.musicians.Guitarist; 
var shawn = json.musicians.Bassist;
var jon = json.musicians.Drummer;
var mikesOfAgeGuests = ["Joe", " Jason", " Alicia"];
var shawnsOfAgeGuests = ["Jim", " Will", " Brian"];
var jonsOfAgeGuests = ["Bill", " Sabrina", " Regina"];
var guestListAvailable = [ "yes", "no" ];

var allGuests = function() { // This returns the the number of combined guests so far.
    return mikesOfAgeGuests + ", " + shawnsOfAgeGuests + ", " + jonsOfAgeGuests + ".";
};

var artistProfile = [ // This array objects gives a little information about each of the musicians I will call.
    {
        name: "Mike",
        age: 30,
        drink: true,
        smoke: false,
        goodTimes: function() { // This function will determine if Mike is going to have a good time based on his compatability with the other band members.
            if( mike.mesh === true && shawn.mesh === true && jon.mesh === true) {
                    return "Mike's gonna have some fun!"
        } else {
                    return "This is gonna be interesting"
                }     
            }
    },
    {
        name: "Shawn",
        age: 29,
        drink: true,
        smoke: true,
        goodTimes: function() { // This function will determine if Shawn is going to have a good time based on his compatability with the other band members.
            if( mike.mesh === true && shawn.mesh === true && jon.mesh === true) {
    console.log("Shawn's gonna have some fun!");
        } else {
                    console.log( "This is gonna be interesting" );
                }     
            }
    },
    {
        name: "Jon",
        age: 29,
        drink: false,
        smoke: false,
        goodTimes: function() { // This function will determine if Jon is going to have a good time based on his compatability with the other band members.
            if( mike.mesh === true && shawn.mesh === true && jon.mesh === true) {
    console.log("Jon's gonna have some fun!");
        } else {
                    console.log( "This is gonna be interesting" );
                }     
            }
    },
];

    
var guestList = { // These object arrays show how many friends each member is expecting.
    "mikesFriends" : [
        "Crystal",
        "Justin",
        "Michelle",
        {
            addGuests: function( name, age) { // These Functions (One for each member) will check guest names and ages at the door...
                 if ( age >= 18) {            // ... if they are 18 and up they will be admitted and their name will be added to the guest list array.
                 mikesOfAgeGuests.push(name);
                    } else { console.log( "I'm sorry " + name + ", 18 and up only.") // If they are under 18 they are turned away.
                };    return "Admission: " + false + "."; 
            },
        },
        {
            mikesList: function() { // These Functions(One for each member) will display the number of people on each members guest list so far.
                if(guestListAvailable[0] === "yes") {
                    for (var i = 0, g = guestList.mikesFriends[2].length; i < g; i++)
                    {
                        console.log( "Mike has " +  guestList.mikesFriends[i] + " on his list.")
                    } 
                }   
                    else
                {
                        console.log("Sorry Mike, no guest list for you.")
                } 
            }
        }
    
    ],
    "shawnsFriends" : [
        "Kyle",
        "Christian",
        "Sarah",
        "Melissa",
        {
            addGuests: function( name, age) {
                 if ( age >= 18) {
                 shawnsOfAgeGuests.push( name );
                    } else { console.log( "I'm sorry " + name + ", 18 and up only.") // If they are under 18 they are turned away.
                };    return "Admission: " + false + ".";
            },
        },
        {
            shawnsList: function() {
                if(guestListAvailable[0] === "yes") {
                    for (var i = 0, g = guestList.shawnsFriends[3].length; i < g; i++)
                    {
                        console.log( "Shawn has " +  guestList.shawnsFriends[i] + " on his list.")
                    } 
                }   
                    else
                {
                        console.log("Sorry Shawn, no guest list for this show.")
                } 
            }
        }
     ],
    "jonsFriends" : [
        "Jen",
        "Jessica",
        "Chris",
        "Mike",
        "Betsy",
        {
            addGuests: function( name, age) {
                 if ( age >= 18) {
                 jonsOfAgeGuests.push(name);
                    return "Guest Aditted";
                    } else { console.log( "I'm sorry " + name + ", 18 and up only.") // If they are under 18 they are turned away.
                };  return "Admission: " + false + ".";
            },
        },
        {
            jonsList: function() {
                if(guestListAvailable[0] === "yes") {
                    for (var i = 0, g = guestList.jonsFriends[4].length; i < g; i++)
                    {
                        console.log("Jon has " +  guestList.jonsFriends[i] + " on his list.")
                    } 
                }   
                    else
                {
                        console.log("Sorry Jon, no guest list for this show.")
                } 
            }
        }
    ]
};


var fiddlersGreen = venue("Fiddlers Green"); // These variables connect the details for each venue to their name.
var kittyOsheas = venue("Kitty O'Shea's");
var dexters = venue("Dexters");
var backStage = venue("Back Stage");

/*So we're playing a show at Dexters and we have a guest list. A couple of friends brought their friends and some were old enough to get in
 and some weren't.
*/

console.log("Hey there, what's you're name? Stephanie? Cool. ID? Ok, you're good. Go on in.");

dexters.seatGuest("Stephanie", 18); // Checking Stephanies ID at the door. If old enough she will be added to the list of guests.

console.log("Hey there, what's you're name? Mike? Cool. ID? Ok, you're good. Go on in.");

dexters.seatGuest("Mike", 25); // Checking Mikes ID at the door. If old enough he will be added to the list of guests.

console.log("Hey there, what's you're name? Amanda? Cool. ID? Ok, you're good. Go on in.");

backStage.seatGuest("Amanda", 20); // Checking Amandas ID at the door. If old enough she will be added to the list of guests.

console.log("Hey there, what's you're name? Josh? Cool. ID? Ok, you're good. Go on in.");

backStage.seatGuest("Josh", 26); // Checking Joshes ID at the door. If old enough he will be added to the list of guests.

console.log("Hey there, what's you're name? Tim? Cool. ID?");

backStage.seatGuest("Tim", 17); //Checking Tims ID at the door. If too young he will be turned away.

console.log("Hey there, what's you're name? Jenny? Cool. ID?");

backStage.seatGuest("Jenny", 15); //Checking Jennys ID at the door. If too yong she will be turned away.

console.log("Confused, Jenny asks what the name of the venue was again...");

console.log(dexters.name()); // Accessor for venue name

console.log("Ah, ok. I'm in the wrong place. Sorry!");

console.log("By this time the place was pretty bumpin' and they needed some additional help.");

dexters.staffNeeded( true, 2); // Checking to see if enough staff is on hand. If not, two people will be called to come it.

console.log("How many people and how many staff currently?");

console.log(dexters); // Checking in on current attendees and extra staff needed, if any, for Dexters.

console.log("How many of those are on the guest list?");

dexters.guestList(); // Just checking the guest list.

// Ok, so the Dexters show went great. The next night we played at Back Stage.

console.log("Alright, next gig. Lets do this... Crap, what's the name of THIS venue again?");

console.log(backStage.name()); // Accessor for venue name.

console.log("Oh yea, thanks.");

console.log("So I wonder if they are going to have enough staff tonight?");

console.log(backStage); // Checking in on current attendees and extra staff needed, if any, for Back Stage.

console.log("Alright, I informed the manager that they may need more help. He's calling in two more people.");

backStage.staff.push(2); // Manually called two staff members in to Back Stage.

console.log("Alright, the extra staff just arrived. Are they good now?");

backStage.staffNeeded( false, 0); // Checking to see if enough staff is on hand. If so, no one will be called to come it.

console.log("Alright, lets check out who's checked in on the guest list so far.");

backStage.guestList(); // Just checking the guest list.

console.log("Ok, and who all is playing tonight?");

console.log(musicians()); // calls musicians

console.log("Sweet. What was the deal with those other venues?");

console.log(venues()); // calls venues

console.log("Right on. That reminds me, I need to call the owner of Fiddlers Green. Let me get his contact information.");

console.log(contactInfo()); // calls club contact information.

console.log("Thanks. What did you say Scruffy Murphies pays again?");

console.log(json2.venue[0].name + " pays: " + json2.venue[0].pay); // Displays how much 

console.log("Right on. They're cheap! But we have a gig there next week so let me get you guys' info again.");

console.log(whoToCall()); // Retrieves list of musicians to call for the gig.

console.log("Alright, lets greet everyone and then get started.");

var howManyGreetings = greetings(10); 

console.log("Hhmm, I think we're missing some people. How many people left on the list for this place?");

console.log(howManyGreetings); // This will display how many greetings I have given and how many I have left to give.

console.log("Lets have a look at how many people we were expecting.");

console.log(guestList); // This will display the object representing the number of guests so far for each member.

console.log("Oh well, good thing we all get along, right?");

console.log(artistProfile[2].goodTimes());

console.log(artistProfile[1].goodTimes()); // This will display the "goodtime"results from the 2nd position within the artist profile array.

console.log(artistProfile[0].goodTimes()); // This will display the "goodtime"results from the 1st position within the artist profile array.

console.log("Jon, which venues did you say you play most?");

console.log(jon.venuesPlayed); // This will display a list of places Jon has played.

console.log(allGuests()); // This will dispay a list of all guests so far.

console.log("Right on. Oh hey, Shawn, your buddy Tom is here with a young guest.");

guestList.shawnsFriends[4].addGuests(" Tom", 25); // This will check Toms age and add him to Shawns guest list array if he is of age.

console.log("So now who all has shown up from your list shawn?");

console.log(shawnsOfAgeGuests); // This will display Shawns guest list array.

console.log("Cool deal. So what about this young guy. Hey man, what's your name? Got ID?");

console.log(guestList.jonsFriends[5].addGuests(" James", 16)); // This will check James age and turn him away if he is under 18.

console.log("ok, so who all is here in total now?");

console.log(allGuests()); // This will show all of the guests. As you can see, Tom has been added.

console.log("Ok, and Jon, which of these are on your list?");

console.log(guestList.jonsFriends[6].jonsList()); // This will show everyone on Jons list so far.

console.log("Ok, and Shawn, which of these are on your list?");

console.log(guestList.shawnsFriends[5].shawnsList()); // This will show everyone on Shawns list so far.

console.log("Ok, and Mike, which of these are on your list?");

console.log(guestList.mikesFriends[4].mikesList()); // This will show everyone on Mikes List so far.

console.log("Awesome. I think it's time to hit the stage. Let's Rock!");




















