export function loadContact() {
    const content = document.querySelector('#content');

    const contactContainer = document.createElement('div');

    const text = document.createElement('p');
    text.classList = 'contact-text';
    text.innerHTML = `
    Burger Haven<br>
    1234 Main Street<br>
    New York, 15203<br>
    (123) 456-7890<br><br>
    Hours of Operation<br>
    Monday - Saturday: 11:00 AM - 10:00 PM<br>
    Sunday: 12:00 PM - 8:00 PM<br><br>
    Follow us on social media for the latest updates and special offers!
`;
    contactContainer.appendChild(text);

    content.appendChild(contactContainer);
}