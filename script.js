
const admissionForm = document.getElementById("admission-form");
const confirmationMessage = document.getElementById("confirmation-message");

if (admissionForm) {
    admissionForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const studentName = document.getElementById("student-name").value.trim();

        confirmationMessage.textContent =
            `Thank you, ${studentName}! Your admission enquiry has been received in this demo. Our team will contact you soon.`;

        confirmationMessage.style.display = "block";

        admissionForm.reset();
    });
}
