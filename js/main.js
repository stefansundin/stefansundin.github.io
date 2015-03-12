var a = document.querySelectorAll('.expander');
for (var i=0; i < a.length; i++) {
  a[i].style.display = 'block';
  a[i].addEventListener('click', function(){
    var id = this.getAttribute('expand');
    document.getElementById(id).style.display = 'block';
    this.style.display = 'none';
  });
  var id = a[i].getAttribute('expand');
  document.getElementById(id).style.display = 'none';
}
