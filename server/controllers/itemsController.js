const { ItemsService } = require("../services/itemsService");
class ItemsContrtoller {
  static async getItems(_req, res) {
    const items = await ItemsService.getItems();
    return res.send(items);
  }

  static async initItems(_req, res) {
    await ItemsService.initItems();
    res.status(201).send();
  }
}

exports.ItemsContrtoller = ItemsContrtoller;
