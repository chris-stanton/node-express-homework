Assignment DetailsUncompleted:

https://github.com/LukeSchlangen/phi-node-express-take-two

Express Routing Challenge:

Recall that the server is running JavaScript, so our normal js code works! If statements, else, loops, variables, all that jazz. We're going to do a little validation of the data the user is POSTing to our server.

Instructions:
BASE MODE:
1. Take the lecture code and add some logic to our POST route on the server. Do this logic on the server!
2. Don't allow the user to add fish with a blank name field.
NOTE: You're going to have to send back a status code of 400 if there are problems. That means your client code needs to be able to handle the error case and tell the user!

HARD MODE:
1. Don't allow the user to add duplicate fish.
2. Before pushing to our array, add a property to the new fish object for the dateAdded with the current date. You'll have to look up the Date object in javascript.
3. Add the dateAdded to our DOM display for our fishies.

PRO MODE:
1. Move your new logic into a module (like in Module Madness) and export the functions needed. This keeps the code nice and organized. Have a look at the Router() object in Express.
