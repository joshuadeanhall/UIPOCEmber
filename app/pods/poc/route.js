import Ember from 'ember';

export default Ember.Route.extend({
  isShowingModal: false,
  model: function() {
    var model = {
      records: [{
        dateStart: '01/01/2016',
        dateEnd: '',
        description: 'Simple Ceasar sniffed his sifter',
        actions: [{
          description: 'View Request Details'
        }]
      },{
        dateStart: '06/12/15',
        dateEnd: '06/15/15',
        description: 'Seized his knees',
        actions: [{
          description: 'Cancel Request'
        },{
          description: 'View/Edit Request'
        }]
      },{
        dateStart: '04/27/2015',
        dateEnd: '',
        description: 'And sneezed',
        actions: [{
          description: 'View Request Details'
        }]
      }
      ]
    };
    
    return model;
  },
  actions: {
    // toggleModal: function () {
    //   this.toggleProperty('isShowingModal');
    //   //this.send('openModal', 'simple-modal');
    // }
  }
});
