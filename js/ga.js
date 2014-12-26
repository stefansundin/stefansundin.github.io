(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-6797859-18', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');


function trackLink(e) {
  ga('send', 'event', 'button', 'click', this.href);
}

var links = document.querySelectorAll('[track]');
for (var i=0; i < links.length; i++) {
  links[i].addEventListener('click', trackLink);
}
