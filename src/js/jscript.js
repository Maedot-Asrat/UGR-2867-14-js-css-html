function revealMessage(){
    document.getElementById("button__message").style.display='flex';
    // alert("Your message is succesfully sent to Maedot. You will contacted within 5 business days.");
  }
  
  function redirectToEmail(event) {
    event.preventDefault(); 
  
  var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var message = document.getElementById("message").value;
  
   
    var subject = encodeURIComponent("I want to Contact Maedot");
    var body = encodeURIComponent("Name: " + name + "\nEmail: " + email +"\nPhone:" + phone + "\nMessage: " + message);
    var mailtoURL = "mailto:asratmaedot@gmail.com?subject=" + subject + "&body=" + body;
  
   
    window.location.href = mailtoURL;
  }
  
  function Contact(event) {
    event.preventDefault(); 
    var redirectButton = document.getElementById("redirectButton");
  
      redirectButton.addEventListener('click', function() {
        window.location.href = 'contact.html';
      });
  }
  