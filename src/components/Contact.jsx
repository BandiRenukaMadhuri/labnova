

import React from "react";


const Contact = () => {
    return (
        <>
            <div>
                <div className="contact">
                    <h2>Get in Touch with Labnova</h2>
                </div><br />
                <div className="container-contact-Us">
                    <div className="contact-section-Us">
                        <h1>Reach Out to Labnova</h1>
                        <p>We are here to address your queries and collaboration interests.</p>
                        <div className="contact-details-Us">
                            <h3>Address:</h3>
                            <p>
                                Plot 66, North Kamala Nagar,<br />
                                New Sashikanth Nagar,<br />
                                Medchal – Malkajgiri, Hyderabad - 500062,<br />
                                Telangana, India.
                            </p>
                            <h3>Phone:</h3>
                            <p>+91 9949551455</p>
                            <h3>Email:</h3>
                            <p>labnova.sales@gmail.com</p>
                            <div className="social-links-Us">
                                <h3>Follow us:</h3>
                                <a href="#"><img src="src/assets/facebook.png" alt="Facebook" /></a>
                                <a href="#"><img src="src/assets/twitter.png" alt="Twitter" /></a>
                                <a href="#"><img src="src/assets/instagram.jpeg" alt="Instagram" /></a>
                                <a href="#"><img src="src/assets/linkein.png" alt="LinkedIn" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="form-section-Us">
                        <h2>Submit Your Inquiry</h2>
                        <form action="#" method="POST">
                            <label for="name">Full Name *</label>
                            <input type="text" id="name" name="name" required />
                            <label for="email">Email *</label>
                            <input type="email" id="email" name="email" required />
                            <label for="message">Message *</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
                <div class="information-photo-us">
  <div class="text-content">
    <h1>Stay Informed for Healthier Lives</h1>
    <p>Subscribe to our newsletter for the latest updates, product launches, and health information.</p>
    <button class="explore-button">Explore Now</button>
  </div>
  <div class="image-content">
    <img src="src/assets/blog-3.jpeg" alt="Contact Us" />
  </div>
</div>
<div>
            </div>
            </div>
        
        </>
    );
}

export default Contact;
