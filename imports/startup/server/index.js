// Import server startup through a single index entry point
import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';

var client = new Twilio({
	  from: "+160223631448",
	  sid: "ACfd5e34ad10ec64d0ab97c7c43202c686",
	  token: "b8931b8dd4db63aba48be24435dfffc4"
	});

// // Send a message with an image
// client.sendMMS({
//   to: '+18646978257',
//   body: 'Hello world!',
//   mediaUrl: 'http://images.clipartpanda.com/world-clip-art-World-Clip-Art-811.jpg'
// });

// // Make a call
// client.makeCall({ to: '+18646978257' });

// // Get information about the number
// client.lookup('+18646978257');

Meteor.startup(function() {
	
	Meteor.methods({
		welcome: function (name) {
			console.log('on server, welcome called with name: ', name);
			if(name==undefined || name.length<=0) {
		      throw new Meteor.Error(404, "Please enter your name");
			}
		    return "Welcome " + name;
		},

		sendSMS: function (message) {
			try {
				console.log('on server, send sms with message: ', message);
				if(message==undefined || message.length<=0) {
			      throw new Meteor.Error(404, "Please enter your message");
				}
				// Configure the Twilio client 602) 313-0211
				var myNum = '+57968502012';

				// Send a message
				client.sendSMS({
				  from: "+114805255051 ",
				  to: "+16023631448",
				  body: message
				});
			}  catch(e) {
				throw new Meteor.Error(404, e);
			}
		},

		sendMMS: function(message) {
			try {
				console.log('on server, send ms with message: ', message);
				if(message==undefined || message.length<=0) {
			      throw new Meteor.Error(404, "Please enter your message");
				}

				// Send a message with image
				client.sendMMS({
				  from: "+114805255051 ",
				  to: "+16023631448",
				  body: message,
				  mediaUrl: 'http://images.clipartpanda.com/world-clip-art-World-Clip-Art-811.jpg'
				});
			} catch(e) {
				throw new Meteor.Error(404, e);
			}
		},

		makeCall: function() {
			try {
				// make a call
				client.makeCall({
				  from: "+114805255051",
				  to: "+16023631448",
				});
			} catch(e) {
				throw new Meteor.Error(404, e);
			}
		} 
	});
});

