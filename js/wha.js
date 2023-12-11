function openWhatsapp() {
    // Option 1: Open WhatsApp with pre-filled message
    var message = "Hola, estoy interesado en adquirir un servicio";
    var phoneNumber = "+573001234567"; // Replace with your phone number
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url);
  
    // Option 2: Open WhatsApp chat without pre-filled message
    // var phoneNumber = "+573001234567"; // Replace with your phone number
    // var url = "https://wa.me/" + phoneNumber;
    // window.open(url);
  }