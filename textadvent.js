
var TextAdventPlayerInstance = function()
{
    return {
        PlayerName: "",
        ThePast: [],
        QuestList: [],
        Items: [],
        Stats: [],
        CurrentSituation: undefined
    }
};

var TextAdventClass =
{
    ShowNextStep: undefined,
    RemoveItemFromEnvironment: undefined,
    TakeItem: function(Player, Item) {
        Player.Items[Player.Items.length] = Item;

        this.RemoveItemFromEnvironment(Player, Item);
    },
    ChoosePath: function(Player, Situation, Path) {
        Player.ThePast[Player.ThePast.length] = {
            Situation: Situation,
            PathTaken: Path
        };

        this.ShowNextStep(Player, Situation, Path);
    }
};
