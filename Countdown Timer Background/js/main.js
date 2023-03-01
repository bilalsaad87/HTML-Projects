document.addEventListener('DOMContentLoaded', () => {

  var endDate = new Date("2023-02-28 11:13:00");
  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // var flipdown = new FlipDown(endDate.getTime() / 1000)
  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');

    
});

$( document ).ready(function() {
  // Hide Days 
  $('.rotor-group:eq(0)').hide();
});