
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
        this.ThePast[this.ThePast.length] = {
            Situation: Situation,
            PathTaken: Path
        };

        this.ShowNextStep(Situation, Path);
    }
}
