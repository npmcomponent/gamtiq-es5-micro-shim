// Applies several ECMAScript 5 shims and composes exporting object that contains shim functions

require('enyo-functionbind');
require('gamtiq-array-indexof-shim');

module.exports = {
    "create": require('gamtiq-object-create-shim'),
    "isArray": require('gamtiq-isarray-shim'),
    "keys": require('danmilon-object.keys-shim')
};
