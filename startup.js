
$(document).ready(function() {

    var UI = false;
    var CurrentPlayer = false;

    var ItemUtils = new ItemUtilsClass();
    var RoomUtils = new RoomUtilsClass(function() {
        UI = new MyTextAdventUIClass(ItemUtils, RoomUtils);

        CurrentPlayer = new MyTextAdventurePlayerClass("Ash", ItemUtils, RoomUtils, UI);

        UI.Debug(CurrentPlayer);
        UI.Info("Hello, World!");

        CurrentPlayer.ChoosePath(undefined, 0);
    });
});
