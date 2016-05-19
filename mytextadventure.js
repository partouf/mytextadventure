
var PlayersInRooms = [];

function DescribeRoom(Player, Situation)
{
    if (Situation.Entry !== undefined)
    {
        Situation.Entry();
    }

    $("#title").html(Situation.Title);

    var $Items = $("#items");
    $Items.html("");

    var $Paths = $("#paths");
    $Paths.html("");

    var $Inventory = $("#inventory");
    $Inventory.html("");

    if (Situation.Items !== undefined)
    {
        for (var ItemIdx in Situation.Items)
        {
            var Item = GetItemById(Situation.Items[ItemIdx]);

            var $Button = $("<input type='button' />");
            $Button.attr("value", "Take " + Item.Title);
            $Button.data("itemid", Item.Id);
            $Button.off("click").click(function() {
                Player.TakeItem($(this).data("itemid"));
            });
            $Items.append($Button);
        }
    }

    if (Situation.Paths !== undefined)
    {
        console.log("Options: " + JSON.stringify(Situation.Paths));
        for (var PathIdx in Situation.Paths)
        {
            var Path = Situation.Paths[PathIdx];
            var $Button = $("<input type='button' />");
            $Button.attr("value", Path.Title);
            $Button.data("pathroomid", Path.Room);
            $Button.off("click").click(function() {
                Player.ChoosePath(Player.CurrentSituation, $(this).data("pathroomid"));
            });
            $Paths.append($Button);
        }
    }

    if (Player.Items.length > 0)
    {
        for (var ItemIdx in Player.Items)
        {
            var Item = GetItemById(Player.Items[ItemIdx]);

            var $Button = $("<input type='button' />");
            $Button.attr("value", "Use " + Item.Title);
            $Button.data("itemid", Item.Id);
            $Button.off("click").click(function() {
                //TextAdventClass.TakeItem(Player, $(this).data("itemid"));
                console.log("You can't use that");
            });
            $Inventory.append($Button);
        }
    }
}

class MyTextAdventurePlayerClass extends TextAdventPlayerClass
{
    constructor(PlayerName) {
        super(PlayerName);
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

        DescribeRoom(this, this.CurrentSituation);
    }

    RemoveItemFromEnvironment(ItemId) {
        var idx = this.CurrentSituation.Items.indexOf(ItemId);
        this.CurrentSituation.Items.splice(idx, 1);

        var ItemObj = GetItemById(ItemId);
        console.log(this.PlayerName + " just picked up " + ItemObj.Title);

        DescribeRoom(this, this.CurrentSituation);
    }
}

function NewPlayer(PlayerName)
{
    var NewPlayer = new MyTextAdventurePlayerClass(PlayerName);
    NewPlayer.CurrentSituation = MyRooms[0];

    PlayersInRooms[PlayersInRooms.length] = NewPlayer;

    return NewPlayer;
}

function GetItemById(Id)
{
    for (var ItemIdx in MyItems)
    {
        if (MyItems[ItemIdx].Id === Id)
        {
            return MyItems[ItemIdx];
        }
    }

    return undefined;
}

var CurrentPlayer = undefined;

$(document).ready(function() {
    CurrentPlayer = NewPlayer("Player1");
    console.log(CurrentPlayer);

    CurrentPlayer.ShowNextStep(CurrentPlayer.CurrentSituation, undefined);
});
