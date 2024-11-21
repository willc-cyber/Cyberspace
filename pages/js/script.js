document.addEventListener('DOMContentLoaded', function() {
    const floatingBubble = document.getElementById('floating-bubble');
    const closeBubbleButton = document.getElementById('close-bubble');
    const reopenBubbleButton = document.getElementById('reopen-bubble');

    // Close the bubble and show the reopen button
    closeBubbleButton.addEventListener('click', function() {
        floatingBubble.style.display = 'none';
        reopenBubbleButton.style.display = 'block';
    });

    // Reopen the bubble and hide the reopen button
    reopenBubbleButton.addEventListener('click', function() {
        floatingBubble.style.display = 'block';
        reopenBubbleButton.style.display = 'none';
    });
});