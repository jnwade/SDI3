

var mike = json.musicians.Guitarist;
var shawn = json.musicians.Bassist;
var jon = json.musicians.Drummer;
var mikesOfAgeGuests = ["Joe", " Jason", " Alicia"];
var shawnsOfAgeGuests = ["Jim", " Will", " Brian"];
var jonsOfAgeGuests = ["Bill", " Sabrina", " Regina"];
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
    console.log("Mike's gonna have some fun!");
        } else {
                    console.log( "This is gonna be interesting" );
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
    "Mikes Freinds" : [
        "Crystal",
        "Justin",
        "Michelle",
        {
            addGuests: function( Name, age) {
                 if ( age >= 18) {
                 mikesOfAgeGuests.push(guests);
                    } else { console.log( "I'm sorry " + guests + ", 18 and up only.") // If they are under 18 they are turned away.
                };   
            },
        },   
    
    ],
    "Shawns Friends" : [
        "Kyle",
        "Christian",
        "Sarah",
        "Melissa",
        {
            addGuests: function( Name, age) {
                 if ( age >= 18) {
                 shawnsOfAgeGuests.push(guests);
                    } else { console.log( "I'm sorry " + guests + ", 18 and up only.") // If they are under 18 they are turned away.
                };   
            },
        },  
     ],
    "Jons Friends" : [
        "Jen",
        "Jessica",
        "Chris",
        "Mike",
        "Betsy",
        {
            addGuests: function( Name, age) {
                 if ( age >= 18) {
                 jonsOfAgeGuests.push(guests);
                    } else { console.log( "I'm sorry " + guests + ", 18 and up only.") // If they are under 18 they are turned away.
                };   
            },
        },  
    ]
};



console.log(guestList);
console.log(artistProfile[1].goodTimes());
console.log(jon.venuesPlayed);
console.log(allGuests());

