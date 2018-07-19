REST based API with Node JS. This covers the CRUD methods using HTTP Operations (GET,POST,DELETE and PUT)
This API captures Users information in JSON Format using JSON Parser module. 
It captures Name, age, email and password of the user
The body-parse.json() method in Usercontroller.js parses the data as a JSON format. 

1st step install 
Express (npm install express --save)
mongoose (npm install mongoose --save)
body-parser(npm install body-parser --save)

2nd Run the server
node server.js
You should get an "Express server listening on port 3000" message

3rd
Test the api on postman or whichever testing tool convinient by running 
http://localhost:3000/users GET method.
You can POST , PUT and DELETE Operations as well.


