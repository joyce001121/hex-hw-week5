"use strict";

$(document).ready(function () {
  console.log('Hello Bootstrap4');
  $("#input-reply").hide();
  $("#click-reply").click(function () {
    $("#input-reply").show();
    $("#chatter-reply").hide();
    $("#chatter-fotter").hide();
  });
  $("#cancel-reply").click(function () {
    $("#input-reply").hide();
    $("#chatter-reply").show();
    $("#chatter-fotter").show();
  });
});
//# sourceMappingURL=all.js.map
