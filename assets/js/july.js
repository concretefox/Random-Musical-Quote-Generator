

const musicQuotes = [
    ['strumming', 'hummed', 'plucked', 'shreaded', 'slid'], 
    ['a guitar', 'ten washboards', 'a BB King tune', 'a Jimi Hendrix Ballad', 'Stratocaster', 'a polyrhythm', 'six bags of ivory keys'], // nouns//
    ['with Little Richard', 'in Mississippi', 'just outside of Georgia', 'inside a phone outside Studio 54', 'in the hills of Yorkshire', 'on the back of a milktruck'], // locations // 
];


const notMusic = [
    ['programming', 'talking', 'writing', 'jiving', 'coding'], 
    ['an essay', 'a peice of cake', 'a gingerbread man', 'with a rusty spoon', 'a pint of porter'],
    ['in a bar which looks like your house', 'in the changing rooms of Primark','on the 4th floor of the Hilton','5 miles South of The Burning Bush'],
];


//First array of data = 
const randString = function (quotes) {

    quotes[Math.floor(Math.random () * quotes.length)];

    let quoteString = ""; 
    const quoteArray = [];

    for (let i = 0; i < quotes.length; i++) {
        /*First time through i=0 look through 0 array - whammy */
        const j = Math.floor(Math.random() * quotes[i].length)

        // Addition assignment operator += adds the right operand to the left and outputs the left "qs"
        quoteString += quotes[i][j];
        //adds on to the end of the array//
        quoteArray.push(quotes[i][j]);
    }

    return quoteArray.join(" ");

}

const quoteBox = function () {

    let selectObj = document.getElementById("dropdown");
    let selectedIndex = selectObj.options[selectObj.selectedIndex].value;
    // selectedIndex is the drop lists value state on current click//

    const selectType = document.getElementById('dropdown2');
    const selectedType = selectType.options[selectType.selectedIndex].value;
    // looks at type of array dropdown2 states to choose either NotMusic or MusicQuotes 0, 1 //


    // Simply create the conditonal statement here and then pass it into the Randstring function above //
    let quotes
    
    if (selectedType === "1") {
        quotes = musicQuotes
    } else { 
        quotes = notMusic;
    }


    // Second loop //
    let quoteList = "";

    for (let i = 0; i < selectedIndex; i++) {
        let quote = randString(quotes)

        quote = quote.charAt(0).toUpperCase() + quote.slice(1)
        quoteList += "<p>" + quote + "</p>"   
    }


    return document.getElementById('quote-box').innerHTML = quoteList
    
}

document.getElementById('quote-button').addEventListener("click", quoteBox);

    







