import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    
    this.store.push({
      data: {
        id: 1,
        type: 'post',
        attributes: {
          name: 'post 1'
        }
      }
    });
    this.store.serializerFor('application');
    return this.store.peekRecord('post', 1);
  }
});
