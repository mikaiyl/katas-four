    /*
     *      Includes
     */

const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

    /*
     *      Setup
     */

function createAppendText(obj, entryPoint = "container") {
	const element = document.createElement("div");
    if (typeof obj.id != "undefined"){
        element.id = obj.id;
    }
	if (typeof obj.className != "undefined"){
        element.className = obj.className;
    }
    if (typeof obj.title != "undefined"){
        var header = document.createElement("h3");
        header.textContent = obj.title;
	    element.appendChild(header);
    }
	if (typeof obj.content != "undefined"){
    	var text = document.createElement("p");
	    text.textContent = obj.content;
	    element.appendChild(text);
    }
	document.getElementById(entryPoint).appendChild(element);
}

    /*
     *  Katas
     */

function kata() {
    let div = {
        title: "",
        content: ""
    }; return div;
}

function kataOne() {
    let div = {
        title: "Display an array from the cities in gotCitiesCSV",
        content: JSON.stringify( gotCitiesCSV.split(",") )
    }; return div;
}

function kataTwo() {
    let div = {
        title: "Display an array of words from the sentence in bestThing",
        content: JSON.stringify( bestThing.split(" ") )
    }; return div;
}

function kataThree() {
    let div = {
        title: "Display a string separated by semi-colons instead of commas from gotCitiesCSV",
        content: JSON.stringify( gotCitiesCSV.replace(/\,/g,";") )
    }; return div;
}

function kataFour() {
    let div = {
        title: "Display a CSV (comma-separated) string from the lotrCitiesArray",
        content: lotrCitiesArray.join(",")
    }; return div;
}

function kataFive() {
    let div = {
        title: "Display the first 5 cities in lotrCitiesArray",
        content: lotrCitiesArray.slice(0, 5)
    }; return div;
}

function kataSix() {
    let div = {
        title: "Display the last 5 cities in lotrCitiesArray",
        content: lotrCitiesArray.slice(3, 8)
    }; return div;
}

function kataSeven() {
    let div = {
        title: "Display the 3rd to 5th city in lotrCitiesArray",
        content: lotrCitiesArray.slice(2, 5)
    }; return div;
}

function kataEight() {
    let div = {
        title: "Using splice, remove \"Rohan\" from lotrCitiesArray",
        content: ( ( ) => {
            let i = lotrCitiesArray.splice(2, 1);
            return lotrCitiesArray;
        })()
    }; return div;
}

function kataNine() {
    let div = {
        title: "Using splice, remove all cities after \"Dead Marshes\" in lotrCitiesArray",
        content: ( ( ) => {
            let i = lotrCitiesArray.splice(5, 2);
            return lotrCitiesArray;
        })()
    }; return div;
}

function kataTen() {
    let div = {
        title: "Using splice, add \"Rohan\" back to lotrCitiesArray right after \"Gondor\"",
        content: ( ( ) => {
            lotrCitiesArray.splice(1, 0, "Rohan");
            return lotrCitiesArray;
        })()
    }; return div;
}

function kataEleven() {
    let div = {
        title: "Using splice, rename \"Dead Marshes\" to \"Deadest Marshes\" in lotrCitiesArray",
        content: ( ( ) => {
            lotrCitiesArray.splice(5, 1, "Deadest Marshes");
            return lotrCitiesArray;
        })()
    }; return div;
}

function kataTwelve() {
    let div = {
        title: "Using slice, display the first 14 characters from bestThing",
        content: bestThing.slice(0, 14)
    }; return div;
}

function kataThirteen() {
    let div = {
        title: "Using slice, display the last 12 characters from bestThing",
        content: bestThing.slice(-13)
    }; return div;
}

function kataFourteen() {
    let div = {
        title: "Using slice, display characters between the 23rd and 38th position of bestThing (i.e., \"boolean is even\"",
        content: bestThing.slice(22, 38)
    }; return div;
}

function kataFifteen() {
    let div = {
        title: "Repeat #13 using substring instead of slice.",
        content: bestThing.substring(69)
    }; return div;
}

function kataSixteen() {
    let div = {
        title: "Repeat #14 using substr instead of slice.",
        content: bestThing.substr(22, 16)
    }; return div;
}

function kataSeventeen() {
    let div = {
        title: "Find and display the index of \"only\" in bestThing",
        content: bestThing.indexOf("only")
    }; return div;
}

function kataEighteen() {
    let div = {
        title: "Find and display the index of the last word in bestThing",
        content: bestThing.indexOf(bestThing.split(" ")[bestThing.split(" ").length-1])
    }; return div;
}

function kataNineteen() {
	let div = {
        title: "Find and display all cities from gotCitiesCSV  that use double vowels (\"aa\",\"ee\", etc.)",
		content: ( () => {
			let words = [];
			gotCitiesCSV.split(",").forEach(( word ) => {
				if (word.includes("aa") || word.includes("ii") || word.includes("ee") || word.includes("oo") || word.includes("uu")) {
					words.push(word);
				}
			}); return words;
		})()
	}; return div;
}

function kataTwenty() {
    let div = {
        title: "",
        content: ""
    }; return div;
}




    /*
     *      Main
     */

const functions = [ kataOne, kataTwo, kataThree, kataFour, kataFive, kataSix, kataSeven, kataEight, kataNine, kataTen,
    kataEleven, kataTwelve, kataThirteen, kataFourteen, kataFifteen, kataSixteen, kataSeventeen, kataEighteen, kataNineteen ];

(function(){
	for (let func of functions) {
	    createAppendText(func());
	}
})();
