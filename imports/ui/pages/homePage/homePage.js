import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import jQuery from 'jquery';

import './homePage.html';



Template.homePage.helpers({
	result: Session.get('serverDataResponse')
});

Template.homePage.events =  {
	'click input[type=button]': function() {
		Meteor.call('sendSMS', $('input[type=text]').val(), function(err,response) {
			if(err) {
				Session.set('serverDataResponse', "Error:" + err.reason);
				return;
			}
			Session.set('serverDataResponse', response);
		});
	}
};