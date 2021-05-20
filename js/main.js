document.querySelectorAll(".javascript").forEach(function(el) {
  el.classList.remove("javascript");
});

document.querySelectorAll(".expander").forEach(function(a) {
  a.style.display = "inline-block";
  a.addEventListener("click", function() {
    const id = this.getAttribute("expand");
    document.getElementById(id).style.display = "block";
    this.style.display = "none";
  });
  const id = a.getAttribute("expand");
  document.getElementById(id).style.display = "none";
});

document.querySelectorAll('form[action="https://www.paypal.com/cgi-bin/webscr"]').forEach(function(form) {
  form.addEventListener("submit", function(e) {
    if (parseInt(this.amount.value) < 1) {
      e.preventDefault();
      alert("The minimum donation amount is one dollar. Anything less than one dollar and you're just giving PayPal everything because of their fees.\n\nIf you can't afford one dollar, then please donate to a local charity instead.");
      return false;
    }
  });
});

document.querySelectorAll("a[fubar]").forEach(function(a) {
  if (a.href != "") {
    return;
  }
  a.textContent = a.textContent.replace(/[A-Z]{2}/, function(c) {
    return (c[0] + "@" + c[1]).toLowerCase();
  }).replace(/[A-Z]/g, function(c) {
    return "." + c.toLowerCase();
  });
  a.href = "mailto:" + a.textContent;
});
