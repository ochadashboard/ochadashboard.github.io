$(document).ready(function(){
	$(function() {
	        $('#countryfundselector').change(function(){
	            $('.fundingcountry').hide();
	            $('#' + $(this).val()).show();
	        });
	    });
});