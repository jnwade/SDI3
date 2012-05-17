

var mike = json.musicians.Guitarist;
var shawn = json.musicians.Bassist;
var jon = json.musicians.Drummer;
var mikesOfAgeGuests = ["Joe", " Jason", " Alicia"];
var shawnsOfAgeGuests = ["Jim", " Will", " Brian"];
var jonsOfAgeGuests = ["Bill", " Sabrina", " Regina"];
var guestListAvailable = [ "yes", "no" ];

var allGuests = function() {
    return mikesOfAgeGuests + ", " + shawnsOfAgeGuests + ", " + jonsOfAgeGuests + ".";
};

var artistProfile = [
    {
        name: "Mike",
        age: 30,
        drink: true,
        smoke: false,
        goodTimes: function() {
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
        goodTimes: function() {
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
        goodTimes: function() {
            if( mike.mesh === true && shawn.mesh === true && jon.mesh === true) {
    console.log("Jon's gonna have some fun!");
        } else {
                    console.log( "This is gonna be interesting" );
                }     
            }
    },
];

    
var guestList = {
    "mikesFriends" : [
        "Crystal",
        "Justin",
        "Michelle",
        {
            addGuests: function( name, age) {
                 if ( age >= 18) {
                 mikesOfAgeGuests.push(name);
                    } else { console.log( "I'm sorry " + name + ", 18 and up only.") // If they are under 18 they are turned away.
                };    return "Guest admitted";
            },
        },
        {
            mikesList: function() {
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
                };    return "Guest admitted";
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
                        return "Jon has " +  guestList.jonsFriends[i] + " on his list."
                    } 
                }   
                    else
                {
                        return "Sorry Jon, no guest list for this show."
                } 
            }
        }
    ]
};




console.log(guestList);
console.log(artistProfile[1].goodTimes());
console.log(jon.venuesPlayed);
console.log(allGuests());
console.log(guestList.shawnsFriends[4].addGuests(" Tom", 25));
console.log(shawnsOfAgeGuests);
console.log(guestList.jonsFriends[5].addGuests(" James", 16));
console.log(allGuests());
console.log(artistProfile[0].goodTimes());
console.log(guestList.jonsFriends[6].jonsList());
console.log(guestList.shawnsFriends[5].shawnsList());
console.log(guestList.mikesFriends[4].mikesList());





