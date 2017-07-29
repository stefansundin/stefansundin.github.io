var links = document.querySelectorAll(".expander");
for (var i=0; i < links.length; i++) {
  var a = links[i];
  a.style.display = "inline-block";
  a.addEventListener("click", function() {
    var id = this.getAttribute("expand");
    document.getElementById(id).style.display = "block";
    this.style.display = "none";
  });
  var id = a.getAttribute("expand");
  document.getElementById(id).style.display = "none";
}

var forms = document.querySelectorAll('form[action="https://www.paypal.com/cgi-bin/webscr"]');
for (var i=0; i < forms.length; i++) {
  var form = forms[i];
  form.addEventListener('submit', function(e) {
    if (parseInt(this.amount.value) < 1) {
      if (ga) {
        ga('send', 'event', 'paypal', 'click', `paypal cheapskate ${this.amount.value}`);
      }
      e.preventDefault();
      alert("The minimum donation amount is one dollar. Anything less than one dollar and you're just giving PayPal everything because of their fees.\n\nIf you can't afford one dollar, then please donate to a local charity instead.");
      return false;
    }
  });
}
