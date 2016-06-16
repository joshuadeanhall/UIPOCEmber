import Ember from 'ember';

export default Ember.Controller.extend({
  showModal: false,
  actions: {
    toggleModal: function () {
      this.toggleProperty('showModal');
    }
  }
});
