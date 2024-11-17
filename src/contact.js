// contact.js
export const contactFunc = function() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contactInfo = document.createElement("div");
    contactInfo.classList.add('contactInfo');
    contactInfo.innerHTML = `Contact Us`;
    content.appendChild(contactInfo);

    const phoneNum = document.createElement('div');
    phoneNum.classList.add('contact');
    phoneNum.innerHTML = `<h3>Phone Number:</h3>
            Call us... if you dare.
            +1-666-DINE-4EVR
            (If the line is busy, try again—our spirits are often in the kitchen.)`;
    contactInfo.appendChild(phoneNum);

    const eMail = document.createElement('div');
    eMail.classList.add('contact');
    eMail.innerHTML = `<h3>Email:</h3>
disturbance@graveyardfeast.com
(You might hear a faint whisper as you hit 'Send'. We don't mind—neither should you.)`;
    contactInfo.appendChild(eMail);
};