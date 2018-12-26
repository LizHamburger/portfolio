$(document).ready(function () {

    //menu toggle
    $('.burger_icon').on('click', function () { // This on click function happens when the burger_icon is clicked
        $('.burger_icon').toggleClass('active'); // When the icon is clicked the function toggles an 'active' class on and off
    });
    
    // We can use this active class within the CSS to open and close the menu

});
