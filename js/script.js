jQuery(document).ready(function(){
    var calcInch;
    var calcCenti;
    $('input[type=radio][name=convert]').click(function(){
        var related_class=$(this).val();
        $('.'+related_class).prop('disabled',false);
        
        $('input[type=radio][name=convert]').not(':checked').each(function(){
            var other_class=$(this).val();
            $('.'+other_class).prop('disabled',true);
            });
        });   
    $('#converter').on('submit', function(evt){
        evt.preventDefault();
        axios.get('http://statenweb.mockable.io/conversions/').then(function(result){
            calcCenti = result.data['centimetersInInch'];
            calcInch = result.data['inchesInCm'];

           var inch = $('#inch').val();       
           if ($('input[id=ic]:checked').length > 0) {
               var inch = $('#inch').val(); 
               var result = inch * calcCenti;
               $('#centi').val(result);
               
           }
           else if($('input[id=ci]:checked').length > 0){
               var centi = $('#centi').val();
               var result = centi * calcInch;
               $('#inch').val(result);           
            } 
        }); 
    });
});