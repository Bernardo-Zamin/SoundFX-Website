<script>
// Function to play sound

function playSound(soundId) {
  var audio = new Audio(soundId + '.mp3'); // Create new audio object with correct file
  audio.play(); // Play the sound
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button[data-sound="1"]').addEventListener('click', function() { playSound('sound1'); });
  document.querySelector('button[data-sound="2"]').addEventListener('click', function() { playSound('sound2'); });
  document.querySelector('button[data-sound="3"]').addEventListener('click', function() { playSound('sound3'); });
});
</script>
