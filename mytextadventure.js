
class MyTextAdventurePlayerClass extends TextAdventPlayerClass
{
    constructor(PlayerName, ItemUtils, UI) {
        super(PlayerName);
        this.ItemUtils = ItemUtils;
        this.UI = UI;
    }

    ShowNextStep(Situation, Path) {
        if (Path === undefined)
        {
            this.CurrentSituation = Situation;
        }
        else
        {
            this.CurrentSituation = MyRooms[Path];
        }

        this.UI.DescribeRoom(this, this.CurrentSituation);
    }

    RemoveItemFromInventory(ItemId) {
        var idx = this.Items.indexOf(ItemId);
        this.Items.splice(idx, 1);
    }

    RemoveItemFromEnvironment(ItemId) {
        var idx = this.CurrentSituation.Items.indexOf(ItemId);
        this.CurrentSituation.Items.splice(idx, 1);

        var ItemObj = this.ItemUtils.GetItemById(ItemId);
        this.UI.Debug(this.PlayerName + " just picked up " + ItemObj.Title);

        this.UI.DescribeRoom(this, this.CurrentSituation);
    }
    
    UseItem(ItemId) {
        this.UI.Debug("You can't use that (" + ItemId + "), but the item disappears into thin air either way.");

        this.RemoveItemFromInventory(ItemId);

        this.UI.DescribeRoom(this, this.CurrentSituation);
    }
    
    Die() {
        this.UI.Debug("You're dead, nobody will miss you, please close your browser.");
        this.Items = [];
    }
}
