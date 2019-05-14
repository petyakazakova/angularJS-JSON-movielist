Description:
This application uses AngularJS v1.7.8. The aim is to create a static site that showcases a
list of movies. The controller.js is the main controller. The controller calls the factory.js 
that will return a response in json format.


Assignment:

Load the list of movies into the scope, using the factory.js (already set up) in the controller.js.
Each movie have a duration. This duration is displayed as a string. All the string contains the characters "PT(N)M"
ex: "PT71M" where the number in the string is duration in minutes.
You should convert the number into the format "h:m". ex: 150 = "2:30"

Next you will show the list of movies on the website. You can use plain CSS or implement any CSS
library or framework to help you style.
You should minimum display the following for each movie:
1: title
2: poster
3: duration
4: imdb rating

The solution should be implemented using AngularJS
