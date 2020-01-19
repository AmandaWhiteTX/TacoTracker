//need to add create and update burger options
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/tacos/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTaco = {
      taco_name: $("#bu").val().trim(),
      devoured: 0,
      createdAt: DATETIME
    };

    // Send the POST request.
    $.ajax("/api/tacos", {
      type: "POST",
      data: newTaco
    }).then(
      function() {
        console.log("created new taco");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-taco").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/tacos/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted taco", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
