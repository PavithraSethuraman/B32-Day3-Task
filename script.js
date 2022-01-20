//1.For the given JSON iterate over all for loops (for, for in, for of, forEach)
var json=[{
    "name":"pavi",
    "age":"29"
},
{
    "name":"sethu",
    "age":"32"
}]
//For Loop
for(let i=0;i<json.length;i++)
{
    console.log(json[i].name)
}
//For in Loop
var Example1=[{
    "class":"5th",
    "section":"A"
},
{
    "class":"9th",
    "section":"C"
}]
for(var x in Example1)
    {
    console.log(x)
    }
    console.log(Example1[0].class,Example1[1].section)
//For of Loop    
var Example2=[{
    "course":"javascript",
    "fee":"10000"
},
{
    "course":"python",
    "fee":"25000"
}]
for ( const element of Example2)
    {
        console.log(element)
    }
   
//ForEach Loop    
let z= json.forEach((c,b) => {
        console.log(c,b)
    })
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
            "Technical Skills":{
                "Languages":"javascript",
                "Operating System":"Windows",
                "Web Technologies":"HTML"},    
    "OtherSkills":{
        "Speaking language":"English"
        
    } } }
     
        for(var i in resume)
        {
        console.log(i,resume[i]);
        }
    