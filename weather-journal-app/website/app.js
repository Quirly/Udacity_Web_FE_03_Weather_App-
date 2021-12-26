/* Global Variables */
let baseURL1 = 'http://api.openweathermap.org/data/2.5/forecast?zip='
let baseURL2 = ',DE&appid='
let apiKey = '5e1bee3b55832ada9e8f7cb36510b302'

//User Input
const the_date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate() + "." + (d.getMonth() + 1) + '.' + d.getFullYear();

//Event-Listener
document.getElementById('generate').addEventListener('click', performAction);


//Async Promise
const getWeatherForecast = async (baseURL1, baseURL2, apiKey) => {

    let zipcode = (document.getElementById('zip').value).toString()
    const res = await fetch(baseURL1 + zipcode + baseURL2 + apiKey)

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

const UpdateUI = async (temp, date, content) => {
    document.getElementById('temp').innerText = temp
    document.getElementById('date').innerText = date
    document.getElementById('content').innerText = content
}

//Declare Fetch Function
function performAction(e) {
    getWeatherForecast(baseURL1, baseURL2, apiKey)
        .then(data => {
            let temp_k = parseFloat(data.list[0].main.temp)
            let temp_c = String((temp_k - 273.15).toFixed(2)) + " °C"
            let feeling_now = (document.getElementById('feelings').value).toString()
            console.log(temp_c)
            console.log(newDate)
            console.log(feeling_now)
            return { date: newDate, temp: temp_c, content: feelings.value }
        })
        .then(data => {
            postData('/addData/addData.html', data);
            //return data
        })
        .then(({ temp, date, content }) => UpdateUI(temp, date, content))
}
