
var json = {
    "musicians": {
        "Guitarist" : {
            name: "Mike M.",
            mesh: true,
            venuesPlayed: [
                "Scruffy Murpheys",
                "Back Stage",
                "Fiddlers Green"
                ]
        },
        "Bassist" : {
            name: "Shawn K.",
            mesh: true,
            venuesPlayed: [
                "Kitty O'Shea's",
                "Back Stage",
                "Fiddlers Green"
                ]
        },
        "Drummer" : {
            name: "Jon W.",
            mesh: true,
            venuesPlayed: [
                "Scruffy Murpheys",
                "Back Stage",
                "Fiddlers Green"
                ]
        }
    }
};

for (var key in json.musicians) {
    var musician = json.musicians[key];
    musician.venuesPlayed
};

var json2 = {
    "venue" : [
        {
            "name" : "Scruffy Murpheys",
            "pay" : 400,
            "barTab" : 50,
            "SetTimes" : [
                "9:30pm",
                "10:45pm",
                "12:00am",
                "1:00am"
            ]
        },
        {
            "name" : "Back Stage",
            "pay" : 500,
            "barTab" : 45,
            "SetTimes" : [
                "9:30pm",
                "10:30pm",
                "11:30am"
            ]
        },
        {
            "name" : "Fiddlers Green",
            "pay" : 400,
            "barTab": 60,
            "SetTimes" : [
                "9:30pm",
                "10:45pm",
                "12:00am",
                "1:00am"
            ]
        },
        {
           "name" : "Kitty O'Shea's",
            "pay" : 450,
            "barTab" : 50,
            "SetTimes" : [
                "9:00pm",
                "10:00pm",
                "11:00am",
                "12:00am"
            ]
        }
    ]
};

var clubContact = {
     "firstName": "Donal",
     "lastName" : "O'Brien",
     "age"      : 69,
     "venue" : "Fiddlers Green",
     "address"  :
     {
         "streetAddress": "544 West fairbanks Ave",
         "city"         : "Winter Park",
         "state"        : "FL",
         "postalCode"   : "32789"
     },
     "phoneNumber":
     [
         {
           "type"  : "Mobile",
           "number": "(215) 279-0010",
           "extension" : null
         },
         {
           "type"  : "Work",
           "number": "(407) 645-2050",
           "extension" : null
         }
     ]
 };

