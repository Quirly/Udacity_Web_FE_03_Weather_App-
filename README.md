# Udacity_Web_FE_03_Weather_App-

App fetching and showing weather data


## Scope

In this app you can enter your location (by zipcode) and you can enter some words about how you
are feeling. After having filled both fields you can click on *Generate*. Then, the current temperature
at the moment you are writing your journal entry at the current location is fetched and saved. Your entries will
be saved, together with the temperature, in an array at the server side. Thus, the data is kept as long the webserver is running and can be accessed later again or stored in a database.

## Before You Use It

- The weather data (temperature) is fetched from www.openweatherapi.com. 
- To access the data please register and get your API key for free.
- Please insert the API key in the header of app.js **(let apiKey = ....)** file to make requests possible

## How to Use It

- (1) Type in the zipcode of your current location (in Germany)
- (2) Type in the field below how you are feeling at the moment
- (3) Click on generate (then the temperature will be fetched and the data will be added to the array)
- (4) In the field below ("Your recent Entry") the date, the temperature and your written down feelings will appear

## Data Sources

The weather data (temperature) is fetched from www.openweatherapi.com. 

Please note: This app is working for German zipcodes only!
However, by slight modification of *baseURL2* data of every other country can be requested.

Please note: Do not make calls more than every 10 minutes because OpenWeatherAPI is only updated
once in 10 minutes. Thus, more calls will not get you more data.

## Copyright

I acquired a license for the background image from www.adobe-stock.com. You are not allowed to
copy the images and use it on other pages. You have three ways to go: (1) Please delete the image, then 
the background will be pure gray. (2)Otherwise, please buy a license or (3) replace the image by 
your own one.