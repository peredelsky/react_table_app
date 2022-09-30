const { Database } = require("../Database");

class ItemsService {
  static async getItems() {
    return await Database.getItems();
  }
  static async initItems() {
    await Database.initItems();
  }
}

exports.ItemsService = ItemsService;
