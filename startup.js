
$(document).ready(function() {

    var UI = false;
    var CurrentPlayer = false;

    var RoomUtils = false;
    var ItemUtils = false;

    ItemUtils = new ItemUtilsClass(function() {
        RoomUtils = new RoomUtilsClass(function() {
            UI = new MyTextAdventUIClass(ItemUtils, RoomUtils);

            CurrentPlayer = new MyTextAdventurePlayerClass("Ash", ItemUtils, RoomUtils, UI);

            UI.Debug(CurrentPlayer);
            UI.Info("Hello, World!");

            CurrentPlayer.ChoosePath(undefined, 0);
        });
    });
});
