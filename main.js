window.onload = function () { {(function(){
 console.log('banner');
 var el='<div class="v-slot v-slot-announcementPanel v-slot-favorite_false"><img class="v-icon" src="http://i.bylipa.cz/content/other/airjobs/banner-aj.jpg" alt="" style="width: 100%;"></div>';
 if (typeof $ == 'function'){
    console.log('jquery is loaded');
    setTimeout(function(){
        $('.v-verticallayout.v-layout.v-vertical.v-widget.v-has-width').prepend(el);       
    }, 5000);
    
 }
})();} }
