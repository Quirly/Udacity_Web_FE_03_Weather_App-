/* Global Variables */
const baseURL1 = 'http://api.openweathermap.org/data/2.5/forecast?zip='
/*API Call for German locations*/
//let baseURL2 = ',DE&appid='
/*API Call for US locations*/
const baseURL2 = '&appid='
/*Please replace '<your_api_key>&units=imperial>' by your ApiKey you got after registration on www.openweatherapi.com*/
const apiKey = '<your_api_key>&units=imperial>'
const metric = '&units=metric'

//User Input
const the_date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + "." + (d.getDate()) + '.' + (d.getFullYear());

//Event-Listener
document.getElementById('generate').addEventListener('click', performAction);


//Async Promise
const getWeatherForecast = async (url, baseURL1, baseURL2, apiKey, metric) => {

    let zipcode = (document.getElementById('zip').value).toString()
    const res = await fetch(baseURL1 + zipcode + baseURL2 + apiKey + metric)

    try {
        const data = await res.json();
        console.log(data)
        return data
    }
    catch (error) {
        console.log("error", error);
    }
}

const postData = async (url, data) => {
    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    } catch (error) {
        console.log("error", error);
    }
}

const readData = async () => {

    const request = await fetch('/readData');
    try {
        // Transform into JSON
        const readData = await request.json()
        console.log(readData)
        return readData
    } catch (error) {
        console.log("error", error);
    }
}

const UpdateUI = async (data) => {
    console.log("Data received:")
    console.log(data)
    console.log("Date: " + data[Object.keys(data)[0]])
    console.log("Temp: " + data[Object.keys(data)[1]])
    console.log("Content: " + data[Object.keys(data)[2]])
    document.getElementById('temp').innerText = "Temperature is: " + data[Object.keys(data)[1]]
    document.getElementById('date').innerText = "Date is: " + data[Object.keys(data)[0]]
    document.getElementById('content').innerText = "Feeling is: " + data[Object.keys(data)[2]]
}

//Declare Fetch Function
function performAction(e) {
    //let temp_k = parseFloat(data.list[0].main.temp)
    if (document.getElementById('zip').value == "") {
        alert("Please type in a zipcode, then I will know where to look up the weather for you!");
        return
    }
    let feeling_now = (document.getElementById('feelings').value).toString()
    getWeatherForecast('/', baseURL1, baseURL2, apiKey, metric)
        .then(data => {
            /*let temp_k = parseFloat(data.list[0].main.temp)*/
            /*let temp_c = String((temp_k - 273.15).toFixed(2)) + " °C"*/
            let temp_c = parseFloat(data.list[0].main.temp) + " °C"
            let feeling_now = (document.getElementById('feelings').value).toString()
            console.log(temp_c)
            console.log(newDate)
            console.log(feeling_now)
            console.log({ date: newDate, temp: temp_c, content: feelings.value })
            return { date: newDate, temp: temp_c, content: feelings.value }
        })
        .then(data => {
            postData('/addData', data);
            return data
        })
        .then(data => {
            readData('/readData');
            return data
        })
        .then(data => UpdateUI(data))



}