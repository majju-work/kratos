document.addEventListener('DOMContentLoaded', function() {
    
    const commentForm = document.getElementById('comment-form');

    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            // Prevent the form from actually submitting and reloading the page
            event.preventDefault(); 

            // Get data from the form
            const formData = new FormData(commentForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const website = formData.get('website');
            const comment = formData.get('comment');

            // Log the captured data to the console
            // In a real application, you would send this to a server
            console.log("--- New Comment Submitted ---");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Website:", website);
            console.log("Comment:", comment);

            // Give user feedback
            alert('Thank you for your comment! (Check the console to see the data)');

            // Optionally, clear the form
            commentForm.reset();
        });
    }

});