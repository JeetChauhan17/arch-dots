// What is nodeJS used for:

// - Create CLIs
// - Create Games
// - Create Video players
// - Create "HTTP SERVER" => main usage


// **What is a HTTP protocol / What is HTTP **

// HTTP => Hyper Text Transfer Protocol

// WHat is a protocol? :
// - A protocol is something that defines how things should be done. (eg: when you meet he person, both of you know one will extend their hand and other will shake their hand) 

// HTTP protocol is defined for communications between machines
// It's made specifically for websites. 
// It's the most common way a frontend talks to a backend

// What is frontend: The GUI part and elements are called frontend. Also knows as clients. (can be written in: HTML, CSS, JS, React, JAVA)

// What is backend: The logic part, where all the processing and all happens is called the backend. Backend is the place where the request goes and some response comes back (can be written in: nodejs, bunjs, JAVA, RUST, Golang)

// so for example: when you put some request into google.com and hit search, Using HTTP, the data goes to some big data center located somwhere else(US), gets processed, and then sends data back so that the frontend can show you the search results.

// If we are using chatGPT, then HTTP protocol is something that "exposes" the machine learning model to the world. it basically gives a method for the machine learning model to communicate with your machine so  that you can send request and get a response

// ALso Does user authentication

// Mostly using web, 90 to 95 percents of the websites you visit use HTTP. Some might also use WebSockets


// ** --x -- **


// **What is a HTTP server **

// - It is some code that follows the HTTP protocols and allows communication with clients (browser, mobile apps, etc)
// - THink of it like the call app in your phone that allows you to communicate with others
// - It can be written in JAVA, or any backend lang like nodejs or any backend lang basically

// basically, it is
// 1: Some client throwning some information at the server,
// 2: Server doing something with that information,
// 3: Server responding back with the final result 
// So it works very similarly to a function is js. it takes data, processes it and returns the result

// SO HTTP server,
// takes some data "from the internet"
// processes it
// responds back with the response  

// function exist locally and  are called locally whereas sometimes the request to server is called Remote Procedure Call (RPC). Means you are calling a function on someone else's machine. That Machine might have some ML model or something that you mught not have locally  on your pc. 

// ** HTTP Protocol **

// CLIENT SIDE: 

//  THings that the clint needs to worry about: (how would you send a request)

//  you need to know these thinings:
// - Protocol: WHat protocol to use to send the data (You need to knoew wheter you want to send a HTTP requyest or a HTTPS requeest (S stands for secure))
// - Address: You need to know the Address or the url of the backend server. (also the IP and the PORT)
// - Route: you will need to know the route
// - Headers, Body, and Query parameters: you will need to send this
// - Method: whenever you are sending a request you need to send a method
// These are the things you need to send when sending a request to a server or a backend


// AN EXAMPLE PROTOCOL: "https://chat.openai.com/backend-api/conversation"

// 1) Protocol:  Here the "https" is the protocol 
// 2) URL:  Here the "chat.openai.com" is Domain name.
// 3) Route:  Here the "backend-api/conversation" is route. It is used beacause the chatgpt can do multiple things?. so the route specifies what exctly are you trying to do.

// HEADER: Header stores multiple things. eg: cookie, session etc
//  BODY: whenever you are sending reqest, you are asking it to do something. like a functon., we send some arguments. body is essentially the arguments you send. EG: when you ask chatGPT what is 2+2? you are sending this quesiton as a body. (usually sent as a JSON)
// METHOD: Specifies what kind of request are you sending. is it to put some data onto the server which done using POST or are you trying to get some data from the server which is done by using GET
// PRAC: if you want to see the requuest going out of you browser in realtime, open "chat.openai.com" > Goto inspect (Ctrl+shift+i) > Goto Networks Tab > when you ask a question, see the conversation request. > you can see it shhows a status and other details. > double click the copnversation packet thing. > it will show the url it is sending the request to, the method, the status code, the "authoorisation"will show you a cookie using which you can actually log into my session and work as me, and many details

// - Goto the Payload tab next, it wil show the body
// now this request could be sent from anywhere, any browser, mobile app anything. but the few things reamin the same that the authorisation is a big string which will get decoded in the server which will show that yes i am jeet chauhan and i am logged in. the url to which the request will go to as the requset is sent to the backedn of chatGPT. and the request will be carrying somee body

// quetion: you never sent  a header. you just asked it a quesiton so how did the header get here. 
// - whenever you 1st open the webiste the header gets generated and with every request the header gets sent with it too. You login once, you generate a token and then whenever you open it uses the present token to make sure its you so you dont have to login again and again with each access.



// SERVER SIDE: 

//  When the server has completed processing the data, it sends the response. these are the things it sends to send the response:

// - Response Header: 
// - Response Body: 
// - Status Codes: 


// EXAMPLE:
// so the above example can be used to show the response side as well:

// Response Header: ususally only used when the user first signs in
// Response Body: "2+2 is equal to 4"  (anwer to the question)
// Status code: 200 (eg: 404, 200, 500)

// QUESTION: why do you need a status code and a header, cant you just send all the data in the body itself?
// - The person who desgined the protocol made it so that there is some seperation. it is the standard protocol which has to be followed to maintain uniformity

// QUESTION: Can you always use POST to do eveything?
// - yes you can. the server can handle that but its just a good convention to use POST when you want to put some data onto the server and use GET when you want to retrive data from the server


// some jargon: 

// some intervew question: 
// Q: what happens when I go to google.com and press enter? what are the sequence of events that happens?
// - The browser will parse the URL     (this is some code written by the google developers)
// - It does a DNS lookup. ( the google.com gets converted into a IP address which the browser can hit )
// - Establishes a connection to the IP (it does a handshake.)

// Q: What is DNS resolution: 
//  URLs are like contacts in your phone
// in the end, they map to an IP
// if you ever buy a url, you will have to map it to the IP of your server.

// PRAC: ping google.com (you will see the IP address of google.com) 

// THINGS THAT HAPPEN ON YOUR SERVER ADTER A REQUEST IS RECIEVED: 
// You get the inputs (header , body, route)
// you do some logic on the input, calculate the output
// you return the output body, header, and the status code.

// COMMON METHODS YOU CAN SEND DATA TO THE BACKEND SERVER: 
// GET: when you are sending a request ot get back some data (like your chatGPT conversiation)
// POST: when you are sending a data into thes erver (when you are adding a conversation into chatGPT)
// PUT: When you are putting some data into the server like (like updating your name in chatgpt)
// DELETE: 

// the backend server can also handle other requests other than POST like GET, PUT, DELETE. it depends on how the backend was designed by the developer. (a good practice is to use POST when putting some data into the BE and both the client should send data using POST and backend should hadnle the data using POST as well.)


// STATUS CODES:
// Whenever the server sends a status code, this is the general standard convention:

// - 200: Everything is OK 
// - 404: Page or route not found 
// - 403: Authentication issues     (eg: when yo try to access chatGPT 4 when you haven't bought it, you will see 403 error status code. It's because of how logic was written )
// - 500: Internal server error     (eg: if your backend has bugs or your backend crashes)

// DT: 8 JUNE 8:15

// Q: How to create your won HTTP server: 
// O: How to expose it over the internet like chatgpt.com