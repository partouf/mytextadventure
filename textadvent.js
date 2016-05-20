
class TextAdventPlayerClass {
    constructor(PlayerName) {
        this.PlayerName = PlayerName;
        this.ThePast = [];
        this.QuestList = [];
        this.Items = [];
        this.Stats = [];
        this.CurrentSituation = undefined;
    }

    TakeItem(Item) {
        this.Items[this.Items.length] = Item;

        this.RemoveItemFromEnvironment(Item);
    }

    ChoosePath(Situation, Path) {
        this.FollowPath(Situation, Path);

        this.ThePast[this.ThePast.length] = {
            Situation: Situation,
            PathTaken: Path
        };
    }

    HasBeenOnPath(Path)
    {
        for (var PastPathIdx in this.ThePast) {
            if (this.ThePast[PastPathIdx].PathTaken === Path)
                return true;
        }

        return false;
    }
}
