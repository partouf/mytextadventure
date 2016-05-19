
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
                TextAdventClass.TakeItem(Player, $(this).data("itemid"));
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
                TextAdventClass.ChoosePath(Player, Player.CurrentSituation, $(this).data("pathroomid"));
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

function InitializeEngine()
{
    TextAdventClass.ShowNextStep = function(Player, Situation, Path) {
        if (Path === undefined)
        {
            Player.CurrentSituation = Situation;
        }
        else
        {
            Player.CurrentSituation = MyRooms[Path];
        }

        DescribeRoom(Player, Player.CurrentSituation);
    };

    TextAdventClass.RemoveItemFromEnvironment = function(Player, ItemId) {
        var idx = Player.CurrentSituation.Items.indexOf(ItemId);
        Player.CurrentSituation.Items.splice(idx, 1);

        var ItemObj = GetItemById(ItemId);
        console.log(Player.PlayerName + " just picked up " + ItemObj.Title);

        DescribeRoom(Player, Player.CurrentSituation);
    };
}

function NewPlayer(PlayerName)
{
    var NewPlayer = TextAdventPlayerInstance();
    NewPlayer.PlayerName = PlayerName;
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
    InitializeEngine();

    CurrentPlayer = NewPlayer("Player1");

    TextAdventClass.ShowNextStep(CurrentPlayer, CurrentPlayer.CurrentSituation, undefined);
});
