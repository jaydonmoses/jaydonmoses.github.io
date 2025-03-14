document.addEventListener('DOMContentLoaded', function() {
    // --- Profile Picture ---
    const profilePictureDiv = document.querySelector('.profile-picture');
    const profileImage = document.createElement('img');
    profileImage.src = 'profile-picture.jpg'; // Replace with your image path
    profileImage.alt = 'Jaydon Moses Profile Picture';
    profilePictureDiv.appendChild(profileImage);

    // --- Contact Form Handling ---
    const contactButton = document.getElementById('contact-button');
    const contactForm = document.getElementById('contact-form');
    const emailForm = document.getElementById('email-form');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close');

    contactButton.addEventListener('click', function() {
        contactForm.scrollIntoView({
            behavior: 'smooth'
        });
    });

    emailForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Simulate sending an email (replace with actual backend integration later)
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const body = document.getElementById('body').value;

        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Body:', body);

        // Show modal confirmation
        modalText.textContent = 'Email sent successfully!';
        modal.style.display = "block";

        emailForm.reset(); // Clear the form
    });

    // --- Modal Close ---
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // --- Project Input ---
    const projectTextarea = document.getElementById('project-textarea');
    const addProjectButton = document.getElementById('add-project');
    const projectList = document.querySelector('.project-list');

    addProjectButton.addEventListener('click', function() {
        const projectText = projectTextarea.value.trim();
        if (projectText !== '') {
            const projectDiv = document.createElement('div');
            projectDiv.textContent = projectText;
            projectList.appendChild(projectDiv);
            projectTextarea.value = ''; // Clear the textarea
        }
    });

    // --- Resume Input ---
    const resumeTextarea = document.getElementById('resume-textarea');
    const addResumeButton = document.getElementById('add-resume');
    const resumeContent = document.querySelector('.resume-content');

    addResumeButton.addEventListener('click', function() {
        const resumeText = resumeTextarea.value.trim();
        if (resumeText !== '') {
            const resumeDiv = document.createElement('div');
            resumeDiv.textContent = resumeText;
            resumeContent.appendChild(resumeDiv);
            resumeTextarea.value = ''; // Clear the textarea
        }
    });
});