var a = document.getElementsByTagName("a");
for (var i=0; i < a.length; i++) {
  if (a[i].href != "") continue;
  a[i].textContent = a[i].textContent.replace(/[A-Z]{2}/g, function(c) {
    return (c[0]+"@"+c[1]).toLowerCase();
  }).replace(/[A-Z]/g, function(c) {
    return "."+c.toLowerCase();
  });
  a[i].href = "mailto:"+a[i].textContent;
}
