import Ember from 'ember';

export default Ember.Controller.extend({
  showModal: false,
  myDate: new Date(),
  actions: {
    toggleModal: function () {
      this.toggleProperty('showModal');
    }
  }
});
