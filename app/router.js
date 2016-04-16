import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('needs', function() {
    this.route('physiological', function() {
      this.route('safety', function() {
        this.route('love-belonging', function() {
          this.route('esteem', function() {
            this.route('self_actualization');
          });
        });
      });
    });
  });
});

export default Router;
