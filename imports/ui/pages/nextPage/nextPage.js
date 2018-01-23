import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './nextPage.html';

Template.nextPage.helpers({
	users: [
		{ name: 'John', number: "+16023631448", msg: 'hello first sentence'},
		{ name: 'John2', number: "+16023631448", msg: 'hello second sentence'},
		{ name: 'John3', number: "+16023631448", msg: 'hello third sentence'},
	]
})

Template.nextPage.events =  {
	// 'click input[type=button]': function() {
	// 	Meteor.call('sendSMS', $('input[type=text]').val(), function(err,response) {
	// 		if(err) {
	// 			Session.set('serverDataResponse', "Error:" + err.reason);
	// 			return;
	// 		}
	// 		Session.set('serverDataResponse', response);
	// 	});
	// }
};
