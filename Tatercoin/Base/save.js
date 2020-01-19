function save(data) {

	var request;
	var username = "hello ";
	var password = "world ";
	

	// Abort any pending request
	if (request) {
		request.abort();
	}

	// Fire off the request to /form.php
	request = $.ajax({
		url : "RequestTest.php",
		type : "post",
		data : {
			username : username,
			password : password,
			requestType : "Save",
			data:data
		}
	});

	// Callback handler that will be called on success
	request.done(function(response, textStatus, jqXHR) {
		// Log a message to the console
		console.log(response);
		
	});

	// Callback handler that will be called on failure
	request.fail(function(jqXHR, textStatus, errorThrown) {
		// Log the error to the console
		console.error("The following error occurred: " + textStatus,
				errorThrown);
	});

	// Callback handler that will be called regardless
	// if the request failed or succeeded
	request.always(function() {
		// Reenable the inputs
		$inputs.prop("disabled", false);
	});

}