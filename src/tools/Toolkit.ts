// randomly generates a number between the range of low and high
// arguments :
// low : number - the lowest number in the range
// high : number - the highest number in the range
function getRandom(low:number = 1, high:number = 10) {
    let randomNumber:number;
    // calculate random number
    randomNumber = Math.round(Math.random() * (high - low)) + low;
    // returning value
    return randomNumber;
}

// adds key event listener to any key and runs a function when that key is pressed
// arguments :
// functionToCall : function - the function to call when the key is pressed
// keyToDetect : string - the key to detect
function addKey(functionToCall:Function, myKeyCode:string = "Enter") {
    // this example exposes issue with scoping and event handlers and how it is solved with arrow function

    // wire up event listener
    document.addEventListener("keydown", (e:KeyboardEvent) => {
        // is the key released the provided key? Check keyCode via Event object
        if (e.code === myKeyCode) {
            // pressing the enter key will force some browsers to refresh
            // this command stops the event from going further
            e.preventDefault();
            // call provided callback to do everything else that needs to be done
            functionToCall();
            // this also helps the event from propagating in some browsers
            return false;
        }
    });
}

// retrieves JSON data from a URL and runs a function when the data is retrieved, passing along the JSON data as an argument
// arguments :
// retrieveURL : string - the URL to retrieve the JSON data from
// cacheExpiry : number|false - amount of time in seconds until the cached data becomes stale and needs to be re-fetched from data source. Set to 10 minutes by default. Set to 0 to disable caching. Set to false to disable caching and have data fetched once at build time.
// debug : boolean - whether to throw an error if one occurs (default is set to true)
async function getJSONData(retrieveScript:string, cacheExpiry:number|false = 600, debug:boolean = true) {
    try {
        const response:Response = await fetch(retrieveScript, { next: { revalidate: cacheExpiry }});
        const data:any = await response.json();
        return data;
    } catch (error:any) {
        console.log(`>>> FETCH ERROR: ${error.message}`);
        if (debug) throw error;
        return null;
    }
}

// sends JSON data to a URL and runs a function when the response has been received
// arguments :
// sendURL : string - the URL to send the JSON data to
// sendJSON : object - the JSON data to send
// debug : boolean - whether to throw an error if one occurs (default is set to true)
async function sendJSONData(sendURL: string, sendJSON: any, requestType:string, debug: boolean = true) {
    try {
        const response = await fetch(sendURL, {
            method: requestType,
            headers: { "content-type": "application/json" },
            body: JSON.stringify(sendJSON),
            cache: 'no-store'
        });
        const result:any = await response.json();
        return { success:true, data:result, status:response.status };
    } catch (error:any) {
        console.log(`>>> FETCH ERROR: ${error.message}`);
        if (debug) throw error;
        return null;
    }
}

export {getRandom, addKey, getJSONData, sendJSONData};