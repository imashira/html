document.addEventListener('DOMContentLoaded', function () {
  const triggerWord = document.getElementById('prank');

  if (triggerWord) {
    triggerWord.addEventListener('mouseenter', function () {
      document.body.classList.add('bila');
    });
  }
});
