import Ember from 'ember';

export default Ember.Controller.extend({
  sideKickValid: true,
  showModal: false,
  sideKick: '',
  myDate: new Date(),
  actions: {
    toggleModal: function () {
      this.toggleProperty('showModal');
    },
    validateSidekick() {
      if(this.get('sideKick') !== 'Robin') {
        this.set('sideKickValid', false);
      }
      else {
        this.set('sideKickValid', true);
      }
    }
  }
});
