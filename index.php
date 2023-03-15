<?php

//echo "ADNAN-GOODBYE"; die;

header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

//if( $_GET["Username"] || $_GET["From"] ) {
//      echo "Username: ". $_GET['Username'] . ".";
//      echo "From: ". $_GET['From'] . ".";

//      exit();
//}

if ($_SERVER["REQUEST_METHOD"] == "GET") {

	 //echo "ADNAN-GOODBYE-REQUEST_METHOD"; die;

	$username       = isset($_GET["Username"]) ? $_GET["Username"] : '';
    	$password       = isset($_GET["Password"]) ? $_GET["Password"] : '';
    	$from           = isset($_GET["From"]) ? $_GET["From"] : '';
	$to        	= isset($_GET["To"]) ? $_GET["To"] : '';
	$msg        	= isset($_GET["Message"]) ? $_GET["Message"] : '';

	// Initialize URL to the variable
	$url = "https://connect.jazzcmt.com/sendsms_url.html?Username=".$username."&Password=".urlencode($password)."&From=".$from."&To=".$to."&Message=".$msg;

	// echo $url; die;

	// (A) CURL INIT
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // RETURN SERVER RESPONSE
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true); // VERIFY SSL CERTIFICATE
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2); // VERIFY HOST NAME
 
	// (B) CURL FETCH
	$result = curl_exec($ch);
	if (curl_errno($ch)) { echo curl_error($ch); }
	else { 
		// echo $result."\n";
		if($result = "Message Sent Successfully!") { echo "OK"; die; }
	}
	curl_close($ch);

	// Use parse_url() function to parse the URL
	// and return an associative array which
	// contains its various components
	$url_components = parse_url($url);
 
	// Use parse_str() function to parse the
	// string passed via URL
	parse_str($url_components['query'], $params);
     
	// Display result
	echo ' SMS Sent to '.$params['To'].' Message is '.$params['Message'];

} else {
    http_response_code(200);
    echo json_encode([
        "ResponseCode" => "200",
        "ResponseDescription" => "The request method is known by the server but is not supported by the target resource."
    ]);
    die();
}


?>



