function loginin() {
var usertext = document.getElementsByTagName("input")[0].getAttribute("id");
document.getElementById(usertext).value = "forthewin!"; //hardcoded for testing
document.getElementsByClassName('icon-wrapper')[1].click();
}

loginin();
