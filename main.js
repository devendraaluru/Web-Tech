// function getfile(file,callback){
//
// var xhr=new XMLHttpRequest();
// xhr.overrideMimeType("application/json");
// xhr.onreadystatechange = function (){
//  if (xhr.readyState === 4 && xhr.status =="200"){
//    callback(xhr.responseText);
//  }
// };
// xhr.send(null);
// }
// getfile("index.json",function(text){
//  var data=JSON.parse(text);
// console.log(data);
// })
function loadJSON(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));
      }
    })
  })
}
var newFile=loadJSON("first.json")
newFile.then(data=>{
  console.log(data);
 career(data.career)
 education(data.education)
 skill(data.skill);
 achivements(data.achivements);
})
var childTwo=document.querySelector(".child2");

function career(careerObj){
var careerHeading=document.createElement("h2");
careerHeading.textContent="career objective";
// console.log(careerHeading);
childTwo.appendChild(careerHeading);
var hr=document.createElement("hr");
careerHeading.appendChild(hr);
var careerP=document.createElement("p");
careerP.textContent=careerObj.info;
childTwo.appendChild(careerP);
}
function education(edu){
 var educationHeading=document.createElement("h3");
 educationHeading.textContent="education"
 childTwo.appendChild(educationHeading);
 var hr=document.createElement("hr");
 educationHeading.appendChild(hr);
 for(var i=0;i<edu.length;i++)
{
  eduh3=document.createElement("h3");
  eduh3.textContent=edu[i].degree;
  childTwo.appendChild(eduh3);
  var eduUl=document.createElement("ul");
  var eduLi=document.createElement("li");
  eduLi.textContent=edu[i].institute;
  eduUl.appendChild(eduLi);
  childTwo.appendChild(eduUl);
  var eduUl2=document.createElement("ul");
  var eduLi2=document.createElement("li");
  eduLi2.textContent=edu[i].data;
  eduUl2.appendChild(eduLi2);
  childTwo.appendChild(eduUl2);
}
}
function skill(ski) {
  var skillHeading=document.createElement("h3");
  skillHeading.textContent="skills";
  childTwo.appendChild(skillHeading);
  var hr=document.createElement("hr");
  skillHeading.appendChild(hr);
  var skilltable=document.createElement("table")
skilltable.border="1";
  childTwo.appendChild(skilltable);

  var tabledata="";
  for (var i = 0; i < ski.length; i++) {
    tabledata +="<tr><td>"+ski[i].title+"</td><td>"+ski[i].info+"</td></tr>";
  }
  skilltable.innerHTML=tabledata;
}
function achivements(ach) {
  var achivementsHeading=document.createElement("h3");
  achivementsHeading.textContent="achivements";
  childTwo.appendChild(achivementsHeading);
  var hr=document.createElement("hr");
  achivementsHeading.appendChild(hr);
  var achivementstable=document.createElement("table");
achivementstable.border="1";
  childTwo.appendChild(achivementstable);

  var tabledata="";
  for (var i = 0; i < ach.length; i++) {
    tabledata +="<tr><td>"+ach[i].achive+"</td><td>"+ach[i].data+"</td></tr>";
  }
  achivementstable.innerHTML=tabledata;
}
