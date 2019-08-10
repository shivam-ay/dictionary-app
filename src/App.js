import React from 'react';

import './App.css';
import { classBody } from '@babel/types';

document.body.style.backgroundColor = "#379CF2";
//const http = require("https");

const app_id = "a1fb08a3"; // insert your APP Id
const app_key = "89e815aeff33475ad03496f39589f331"; // insert your APP Key
var wordId = "ace";
const fields = "pronunciations";
const strictMatch = "false";

var url = 'https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/';
var url1 = '?fields=definitions&strictMatch=false';


console.log("hef");
class App extends React.Component{

  haBoy(){

   // var box = document.getElementById("span");
    wordId = document.getElementById("searchBox").value;
    var theBoxx = document.getElementById("thisBox");
    //var del = document.getElementById("del");
    //document.getElementById("megaBox").removeChild(del);
    //var inside = document.getElementById("insideThis");
    theBoxx.style.marginTop = "2%";
    //theBoxx.style.paddingBottom = "2%";
    //document.body.style.backgroundColor = "red";
   //inside.style.backgroundColor ="#379CF2";
    //inside.appendChild(del);
    //d.style.backgroundColor = "#379CF2";
    document.body.style.backgroundColor="white";
    document.getElementById("change").style.marginTop="2%";
    //document.getElementById("b").style.width= "100%";
      document.getElementById("bb").style.backgroundColor="blue";

    url = url + wordId + url1;
  // console.log("this",wordId)
    var xhr = new XMLHttpRequest();
    xhr.open('GET',url);
    xhr.setRequestHeader("Content-type", "application/json");
 
    xhr.setRequestHeader("app_id",app_id);
    xhr.setRequestHeader("app_key",app_key);
    xhr.send();
    

    xhr.onload = function(){
      console.log("now");
      var jdata = JSON.parse(this.responseText);
     // var abc = "<p><b>"+jdata.id+":</b>"+ jdata.results.lexicalEntries.entries.senses.definations+" </p>";
     // document.getElementById("result").innerHTML = jdata.word;
      console.log(jdata);
    }


  }

render() {
  return (
              <div>

              
              <div className ="row" id ="b">

                   <div className ="col-md-12" id="bb">

                     <center>
                       <div id="thisBox">


                       <button className="primary-btn " id="srch" >Dictionary</button>
                      <input  type="text" id ="searchBox" placeholder="search word or phrase"></input>
                      <button className="primary-btn " id="srch"  onClick={this.haBoy}><i className="fa fa-search" aria-hidden="true"></i></button>

                       </div>
                     </center>
                   </div>
                   </div>
                   

                   <div className = "row" id="change">

                      <div className = "col-md-3">

                      </div>

                        
                          <div className="col-md-6" id="result">

                          </div>
                          <div className = "col-md-3">

                          </div>
                        


                      </div>

                   </div>

             
          
    
  );
}


}
export default App;
