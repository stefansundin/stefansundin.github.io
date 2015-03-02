if (window.location.protocol == "http:" && !/\.dev$/.test(window.location.hostname)) {
  window.location = "https:" + window.location.href.substring(5);
}
