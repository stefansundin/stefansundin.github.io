if (window.location.protocol != "file:") {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
}

var gaid = document.body.getAttribute('ga') || 'UA-6797859-18';

ga('create', gaid, 'auto');
ga('send', 'pageview');


function trackLink(e) {
  var category = this.getAttribute('track');
  if (!category) {
    if (this.href.indexOf('mailto:') == 0) {
      category = 'mailto';
    }
    else {
      category = 'link';
    }
  }
  ga('send', 'event', category, 'click', this.href);
}

var links = document.getElementsByTagName('a');
for (var i=0; i < links.length; i++) {
  links[i].addEventListener('click', trackLink);
}

function trackForm(e) {
  var category = this.getAttribute('track');
  if (!category) {
    category = 'form';
  }
  var label = this.action;
  var inputs = this.getElementsByTagName('input');
  for (var i=0; i < inputs.length; i++) {
    if (inputs[i].name && inputs[i].type != 'hidden') {
      label += ' '+inputs[i].name+'='+inputs[i].value;
    }
  }
  ga('send', 'event', category, 'click', label);
}

var forms = document.getElementsByTagName('form');
for (var i=0; i < forms.length; i++) {
  forms[i].addEventListener('submit', trackForm);
}
