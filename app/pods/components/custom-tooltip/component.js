import Ember from 'ember';

export default Ember.Component.extend({
  tagName:'span',
  actions: {
    ok: function(modalModel) {
      this.$('.modal').modal('hide');
      this.sendAction('ok', modalModel);
    }
  },

  show: function() {

    var self = this;
      self.$('[data-toggle="tooltip"]').tooltip({trigger: 'focus',
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>'
      });
  }.on('didInsertElement')
});
