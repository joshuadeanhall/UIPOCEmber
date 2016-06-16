import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    ok: function(modalModel) {
      this.$('.modal').modal('hide');
      this.sendAction('ok', modalModel);
    }
  },
  show: function() {
    // this.$('.modal').modal().on('hidden.bs.modal', function() {
    //   this.sendAction('close');
    // }.bind(this));
  }.on('didInsertElement')
});
