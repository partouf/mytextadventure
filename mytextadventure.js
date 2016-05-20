
class MyTextAdventurePlayerClass extends TextAdventPlayerClass
{
    constructor(PlayerName, ItemUtils, RoomUtils, UI) {
        super(PlayerName);
        this.ItemUtils = ItemUtils;
        this.RoomUtils = RoomUtils;
        this.UI = UI;

        this.Stats["Score"] = 0;
    }

    FollowPath(Situation, Path) {
        this.CurrentSituation = this.RoomUtils.GetRoomById(Path);

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
        if (this.CurrentSituation.UseItem !== undefined)
        {
            var NewRoomId = this.CurrentSituation.UseItem(this, ItemId, this.UI);
            this.RemoveItemFromInventory(ItemId);
            this.FollowPath(this.CurrentSituation, NewRoomId);
        }
        else
        {
            this.UI.Debug("You can't use that (" + ItemId + "), but the item disappears into thin air either way.");
            this.RemoveItemFromInventory(ItemId);
            this.UI.DescribeRoom(this, this.CurrentSituation);
        }
    }

    HasItem(ItemId) {
        var idx = this.Items.indexOf(ItemId);
        return (idx >= 0);
    }

    EarnPoints(NumberOfPoints) {
        this.Stats["Score"] += NumberOfPoints;
        this.UI.Debug("You earned " + NumberOfPoints + " points");
    }
    
    Die() {
        this.UI.Debug("You're dead, nobody will miss you, please close your browser.");
        this.Items = [];
    }
}
