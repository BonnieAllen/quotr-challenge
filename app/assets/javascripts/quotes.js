var update_saying = function() {
  $.ajax("/random", {
    error: function() { alert("Something went wrong") },
    success: function(data) {
      $("#quote").text(data.text)
      $("#author").text("- " + data.author)
    }
  })
}

$(document).on("ready", function() {
  $("#button").on("click", update_saying)
})