<?php

// Define the WhatsApp number
$whatsapp_number = "+573203468540";

// Define the message to send
$message = "Hola, quiero adquirir sus servicios";

// Generate the WhatsApp link
$whatsappLink = "https://wa.me/" . $whatsapp_number . "?text=" . urlencode($message);

// Escape the WhatsApp link
$escapedWhatsappLink = htmlspecialchars($whatsappLink);

?>