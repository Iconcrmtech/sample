import { Router } from 'meteor/iron:router';
import { Meteor } from 'meteor/meteor';

import '../../ui/layouts/layout.js';
import '../../ui/pages/homePage/homePage.js';
import '../../ui/pages/nextt Page/nextPage.js';
import '../../ui/components/404/404.html';

Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: 'loadingTemplate',
  notFoundTemplate: "notFoundTemplate",
  trackPageView: true,
  onBeforeAction: function () {
    this.next();
  }
});

Router.route('/', {
  template: 'homePage',
  name: 'home',
  onRun: function () {
    this.next();
  }
});

Router.route('/nextPage', {
  template: 'nextPage',
  name: 'next',
  onRun: function () {
    this.next();
  }
});