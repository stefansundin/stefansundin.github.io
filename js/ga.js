(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


var domains = ['stefansundin.github.io', 'gh-rss.herokuapp.com'];
var i = domains.indexOf(window.location.hostname);
if (i !== -1) {
  domains.splice(i, 1);
}

ga('create', 'UA-6797859-18', 'auto', {'allowLinker': true});
ga('require', 'linker');
ga('linker:autoLink', domains);
ga('send', 'pageview');


function trackLink(e) {
  var category = this.getAttribute('track');
  if (!category) {
    category = 'link';
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
