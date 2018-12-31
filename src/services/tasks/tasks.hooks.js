const validateName = require('../../hooks/validate-name')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [validateName()],
    update: [validateName()],
    patch: [validateName(true)],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
