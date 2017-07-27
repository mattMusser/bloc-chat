(function() {
    /**
    * @function Message
    * @desc Message factory that defines all Message-ralated API queries.
    * @returns messages associated with the active chat room.
    */
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);


        /**
        * @function Message.getByRoomId
        * @desc Filters messages by room id.
        * @returns the messages associated with the room id.
        */
        /*Message.sort = function (roomId) {
            console.log(ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI"));
            return $firebaseArray(ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI"));
        };*/

        Message.getByRoomId = function(roomId) {
            var messageFilter = ref.orderByChild('roomId').equalTo("KpVG2DM4QotTEvyjpwI");
            console.log($firebaseArray(messageFilter));
            return $firebaseArray(messageFilter);
            console.log($firebaseArray(messageFilter));
        };


        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
