$(document).ready(function(){

    var $searchTrigger = $('[data-ic-class="search-trigger"]'),
        $searchInput = $('[data-ic-class="search-input"]'),
        $searchClear = $('[data-ic-class="search-clear"]');

    $searchTrigger.click(function(){

        var $this = $('[data-ic-class="search-trigger"]');
        $this.addClass('active');
        $searchInput.focus();

    });

    $searchInput.blur(function(){

        if($searchInput.val().length > 0){

            return false;

        } else {

            $searchTrigger.removeClass('active');

        }

    });

    $searchClear.click(function(){
        $searchInput.val('');
    });

    $searchInput.focus(function(){
        $searchTrigger.addClass('active');
    });

});