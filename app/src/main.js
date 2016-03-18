/**
 * Created by robson.mathias on 10-03-2016.
 */

//// Init Visual plugins
;(function(){

    $(document).ready(function(){
        /// ativa a açao de scroll para cada section
        $('#fullpage').fullpage();

        /// cria o carrosel da section de portifolio
        $('.owl-demo').owlCarousel();
    });

})();