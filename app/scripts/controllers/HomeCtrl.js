 (function() {
    /**
    * @function HomeCtrl
    * @desc
    * @returns
    */
    function HomeCtrl(Room, Message, $uibModal) {
        this.rooms = Room.all;


        /**
        * @function openModal
        * @desc open modal click handler
        * @returns
        */
        this.openModal = function () {
            $uibModal.open({
            animation: true,
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal',
            });
        };

        /**
        * @function activeRoom
        * @desc active room click handler
        * @returns
        */
        this.activeRoom = function(rooms) {
            console.log(rooms);
            this.currentRoom = rooms;
            console.log("activeRoom is being hit");
        }

        this.filteredMessages = function(rooms) {
            this.messages = Message.sort(this.activeRoom.$id);
        }
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', HomeCtrl]);
})();
