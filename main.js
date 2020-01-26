$(document).ready(function()
{
   
  //alert(' Partner Finder');
  $('#form').submit(function(e){
	  //alert(e);
	  e.preventDefault();
      var latitude=$('input.lat').val();
	  var longitude=$('input.long').val();
	  console.log(latitude);
	  console.log(longitude);
	  $.ajax({
				method:'GET',
				url: 'https://vm9eocrol0.execute-api.us-east-1.amazonaws.com/dev/loc?lat='
				+latitude.toString()+'&long='+longitude.toString(),
				dataType: 'json'
			}).done(function(data){
				console.log(data);
				for(var i=0;i<data.body.length;i++){
				
				           console.log(data.body[i]);
						   //$('#result').css("display","block");
						   
						   $('.part').append("<br>"+data.body[i][0]);
						   $('.lat1').append("<br>"+data.body[i][1]);
						   $('.long1').append("<br>"+data.body[i][2]);

						   
				
				}
			});
	  
	//console.log(url);
     	 
  }); 

})