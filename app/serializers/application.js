import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  init: function() {
    var ret = this._super.apply(this, arguments);
    console.log(this.warnMessageForUndefinedType());
    return ret;
  }
});
