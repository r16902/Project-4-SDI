// alert("JavaScript works!");

// Isaias Rosario
// SDI Term 1308
// Project 4
// Solving Problems

// My Library of Functions 
var myLib = function() {

	// Check if String is a Phone Number
	var chkPhnNum = function(phnNum) {
		if(phnNum.length === 12 && phnNum.substring(3, 4) && phnNum.substring(7, 8) === "-") {
			return true;
		} else {
			return false;
		};
	};	// end of chkPhnNum function
	
	// Check if String is an Email
	var chkEmail = function(email) {
		var i = email.lastIndexOf(".")
		var l = email.length
		if(l - i === 4){
			return true;
		} else {
			return false;
		};
	
	}; // end of chkEmail function
	
	// Check if String is has http:// or https://
	var chkHttp = function(http) {
		if(http.substring(0,7) === "http://" || http.substring(0,8) === "https://" ){
			return true;
		} else {
			return false;
		};
		
	}; // end of chkHttp function
	
	// Check if String is Title Case
	var chgNumStr = function(numStr,numStr1) {
			
		console.log("This should add up to a number. " + (Number(numStr) + numStr1));
			
	
	}; // end of chkTiCase function
	
	// Set Decimal Place for a Given Number
	var setDecPlc = function(num,dec) {
		d = num.toFixed(dec);
		console.log("Set this number to " + dec + " decimal places. " + d);
	
	}; // end of setDecPlc function
	
	// Check for Smallest Number in Array greater then Given Number 
	var chkArrNum = function(arr,num) {
		for(var i = 0; i < arr.length; i++){
			if(arr[i] < num){
				
			} else {
				console.log("The closest greater number is. " + arr[i]);
			};
		};
	}; // end of chkArrNum  function
	
	return {
		"chkPhnNum": chkPhnNum,
		"chkEmail" : chkEmail,
        "chkHttp"  : chkHttp,
		"chgNumStr" : chgNumStr,
		"setDecPlc": setDecPlc,
 		"chkArrNum": chkArrNum

	} // end of key:value return object
	
}; // end of myLib

// Start //

// Global Variables
var lib = myLib();

console.log("Is this a phone number? " + lib.chkPhnNum("413-555-5555"));
console.log("Is this an Email? " + lib.chkEmail("irosario@fullsail.edu"));
console.log("Does it start with http:// or https://? " + lib.chkHttp("http://google.com"));
lib.chgNumStr("30",20);
lib.setDecPlc(3.14159,3);
lib.chkArrNum([2,4,6,8,10],9);

// Finished //