import Ember from 'ember';

export default Ember.Controller.extend({
  showModal: false,
  sideKick: '',
  myDate: new Date(),
  sideKickValid: function() {

    if(this.get('sideKick') !== 'Robin' && this.get('sideKick') !== '') {
      return false;
    }
    else {
      return true;
    }

  }.property('sideKick'),
  actions: {
    toggleModal: function () {
      this.toggleProperty('showModal');
    },

    validateSidekick() {

    }
  }
});
