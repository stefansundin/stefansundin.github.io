if (window.location.protocol == "http:" && /\.github\.io$/.test(window.location.hostname)) {
  window.location = "https:" + window.location.href.substring(5);
}
