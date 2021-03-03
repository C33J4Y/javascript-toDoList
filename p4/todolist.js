$(document).ready(function(){
    
    //Hides clear button when the app first loads and list is empty
    $('#delete').hide();
    
    
    //Add function
    $('#add').click(function(){
        
        var toAdd = $("input[name=checkListItem]").val();
        
        if(toAdd.length > 0 && toAdd != " " && toAdd != "  " && toAdd != "   "){
        
        $('.list').append('<div class="entry">' + toAdd + '</div>');
        $('#delete').fadeIn('fast');
        $('input').val('');
        }else alert("Please Submit a Valid Entry");
    });
    
    //Checks off items as they are pressed
    $(document).on('click', '.entry', function() {
       
        $(this).css("color", "#cc0000");
        $(this).css("cursor","default");
        $(this).wrapInner('<strike class="clear"></strike>');
        $(this).append(" " + '<span class="glyphicon glyphicon-remove clear" aria-hidden="true"></span>');
        
        $(this).prop('disabled', true);
    });
    
    //Removes item from list
    $('#delete').click(function(){
        $('.clear').remove('.clear');
    });
    
});