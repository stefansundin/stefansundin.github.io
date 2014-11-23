if (window.location.protocol == "http:") {
  window.location = "https:" + window.location.href.substring(5);
}
