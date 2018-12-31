// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {

    const name = context.data.name

    if (allowMissing && name === undefined) {
      return context
    }

    if (name === undefined || name.trim() === '') {
      throw new errors.BadRequest('Name cannot be empty')
    }

    return context;
  };
};
