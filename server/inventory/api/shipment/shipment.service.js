const debug = require('debug');
const rp = require('request-promise-native');

const { INVENTORY_URL } = require('../../../../config/environment');

const log = debug('inventory/index.js');

exports.create = (payload) => {
  log('createshipment()', payload);
  if (!payload) {
    return Promise.reject({
      code: 400,
      message: 'Pass payload{}  argument to createShipment method',
    });
  }
  return rp({
    method: 'POST',
    uri: `${INVENTORY_URL}/api/shipments`,
    body: payload,
    json: true,
  });
};
