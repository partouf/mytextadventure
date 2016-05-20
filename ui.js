
class MyTextAdventUIClass {
    constructor(ItemUtils) {
        this.ItemUtils = ItemUtils;

        this.$Items = $("#items");
        this.$Paths = $("#paths");
        this.$Inventory = $("#inventory");
        this.$PlayerStats = $("#playerstats");
        this.$Title = $("#title");
        this.$Description = $("#description");
        this.$ViewPort = $("#viewport");
    }

    ClearAll() {
        this.$Items.html("");
        this.$Paths.html("");
        this.$Inventory.html("");
        this.$PlayerStats.html("");
        this.$Title.html("");

        this.$ViewPort.css("background-image", "");
        this.$ViewPort.css("background-repeat", "no-repeat");
        this.$ViewPort.css("background-position", "center center");

        this.$Description.hide();
        this.$Description.html("");
    }

    DisplayItemsInRoom(Player, Situation) {
        if (Situation.Items !== undefined) {
            for (var ItemIdx in Situation.Items) {
                var Item = this.ItemUtils.GetItemById(Situation.Items[ItemIdx]);

                var $Button = $("<input type='button' />");
                $Button.attr("value", "Take " + Item.Title);
                $Button.data("itemid", Item.Id);
                $Button.off("click").click(function () {
                    Player.TakeItem($(this).data("itemid"));
                });
                this.$Items.append($Button);
            }
        }
    }

    DisplayPossiblePaths(Player, Situation) {
        var self = this;
        if (Situation.Paths !== undefined) {
            for (var PathIdx in Situation.Paths) {
                var Path = Situation.Paths[PathIdx];
                var $Button = $("<input type='button' />");
                $Button.attr("value", Path.Title);
                $Button.data("pathroomid", Path.Room);
                $Button.off("click").click(function () {
                    var RoomID = $(this).data("pathroomid");
                    self.Debug("Chose " + RoomID);

                    Player.ChoosePath(Player.CurrentSituation, $(this).data("pathroomid"));
                });
                this.$Paths.append($Button);
            }
        }
    }

    DisplayPlayerInventory(Player) {
        var self = this;
        if (Player.Items.length > 0) {
            for (var ItemIdx in Player.Items) {
                var Item = this.ItemUtils.GetItemById(Player.Items[ItemIdx]);

                var $Button = $("<input type='button' />");
                $Button.attr("value", "Use " + Item.Title);
                $Button.data("itemid", Item.Id);
                $Button.off("click").click(function () {
                    var ItemID = $(this).data("itemid");
                    self.Debug("Clicked on Use Item " + ItemID + "");

                    Player.UseItem(ItemID);
                });
                this.$Inventory.append($Button);
            }
        }
    }

    DisplayPlayerStats(Player) {
        var $PlayerName = $("<label for='playername' /><span name='playername' />");
        $PlayerName.closest("label").html("Name: ");
        $PlayerName.closest("span").html(Player.PlayerName);

        this.$PlayerStats.append($PlayerName);
    }

    Paint(Situation) {
        if (Situation.BackgroundImage !== undefined) {
            this.$ViewPort.css("background-", "url(resources/" + Situation.BackgroundImage + ".png)");
            this.$ViewPort.css("background-image", "url(resources/" + Situation.BackgroundImage + ".png)");
        }
    }

    ReadDescription(Player, Situation) {
        this.$Title.html(Situation.Title);

        if (Situation.Description !== undefined) {
            this.$Description.html(Situation.Description);
            this.$Description.slideDown();
        }
    }

    Debug(Stuff) {
        console.log(Stuff);
    }

    DescribeRoom(Player, Situation) {
        this.Debug("DescribeRoom()");

        if (Situation.Entry !== undefined) {
            Situation.Entry(Player);
        }

        this.ClearAll();

        this.Paint(Situation);
        this.DisplayPlayerStats(Player);
        this.DisplayItemsInRoom(Player, Situation);
        this.DisplayPossiblePaths(Player, Situation);
        this.DisplayPlayerInventory(Player);

        this.ReadDescription(Player, Situation);
    }
}
