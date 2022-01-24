//2.Create your own resume data in JSON format
let resume={
    "Basics":{
        "Name":"Pavithra Sethuraman",
    "EmailID":"pavithrasethuraman92@gmail.com",
    "MobileNo":"1234567893",
    "Address":"111,raju nagar,Madurai"},
    "Education":{ 
        "UG":{
            "Institute":"Madras University",
            "course":"BSc CS",
            "YearofPassing":"2012",
            "GPA":"85"},
    "HSC":{
        "YearofPassing":"2009",
        "GPA":"77"},
    "SSLC":{
        "YearofPassing":"2007",
        "GPA":"72"}},
    "Skills":{
        "TechnicalSkills":{
            "Languages":"javascript",
            "OperatingSystem":"Windows",
            "WebTechnologies":"HTML"},    
"OtherSkills":{
    "Speakinglanguage":"English"}}
    
} 
 
    for(var i in resume)
    {
    console.log(i,resume[i]);
    }
