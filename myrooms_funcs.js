
var MyRooms_functions = [
    {
        RoomId: 1,
        Entry: function(Player) {
            if (this.Items.length == 0)
                this.Description = "There's no bed here. Not even a TV. There's an white spot on the floor where once was a Remote control."
        }
    },
    {
        RoomId: 2,
        Entry: function (Player) {
            if (!Player.HasBeenOnPath(1))
                this.Description += " (oh, spoiler... oops)";

            Player.Die();
        }
    },
    {
        RoomId: 3,
        Entry: function(Player) {
        }
    },
    {
        RoomId: 5,
        Entry: function(Player) {
            if (Player.HasItem(4)) {
                this.Description = "An angry bartender looks at you and immediately shouts: 'HEY YOU, GIVE ME THAT REMOTE!'";
                this.Paths = [{Room: 2, Title: "Run out as fast as you can"}];
            } else {
                this.Description = "A bartender looks grumpy and distracted, but seems ready to take your order nonetheless.";
                this.Paths = [{Room: 5.1, Title: "Order a beer"}];
            }
        },
        UseItem: function(Player, ItemId, UI) {
            if (ItemId == 4) {
                UI.Info("Well done.");
                Player.EarnPoints(1);

                return 5
            } else {
                UI.Info("So yeah, you shouldn't have done that.");

                return 2;
            }
        }
    }
];
