window.onload = function () { {(function(){
 console.log('banner');
 var el='<div class="v-slot v-slot-announcementPanel v-slot-favorite_false"><img class="v-icon" src="/documents/11677/157053/Logo_aea02pi1baergs4f5l8hmr0mp8" alt="" style="width: 100%;"></div>';
 if (typeof $ == 'function'){
    console.log('jquery is loaded');
    setTimeout(function(){
        $('.v-verticallayout.v-layout.v-vertical.v-widget.v-has-width').prepend(el);       
    }, 5000);
    
 }
})();} }
