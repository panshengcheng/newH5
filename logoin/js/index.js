(function($) {
    'use strict';

    var $modal = $('.modal');
    var $modalBackdrop = $('.modal-backdrop');

    $(document).ready(function() {
        $modalBackdrop.on('click', function() {
            $modal.addClass('hide');
            $modalBackdrop.toggleClass('hide');
        });
    });

    $(document).on('click', '[data-modal-id]', function() {
        var $modalId = $(this).attr('data-modal-id');

        $('#' + $modalId).toggleClass('hide');
        $modalBackdrop.toggleClass('hide');
    });

})(jQuery);