<?php
$to = "rajiv@asmcastings.in";
$name = $_REQUEST['name'] ;
$phone = $_REQUEST['phone'] ;
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;
$subject = "Message from: $name";
$headers = "rajiv@asmcastings.in";
$body = "From: $name \n\n Email: $email \n\n Phone: $phone \n\n message: $message \n\n";
$sent = mail($to, $subject, $body, $headers) ;
if($sent)
{echo "<script language=javascript>window.location = 'index.html';</script>";}
else
{echo "<script language=javascript>window.location = 'index.html';</script>";}

 $retval = mail ($to,$subject,$message,$header);
 if( $retval == true ) {
            echo "Message sent successfully...";
    }else {
        echo "Message could not be sent...";
         }

?>