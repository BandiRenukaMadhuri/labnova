
import React from 'react';

function SubmitForm() {
    return (
        <>
        <div className="container">
        <div className="left-section">
            <h1>Labnova</h1>
            <h2>There are so many reasons to choose Us</h2>

            <div className="icon">
                <img src="src/assets/tick.png" alt="icon"/>
                <div>
                    <h2>Research & Development</h2>
                    <p>We are equipped not only with a high-profile R&D team but also with NABL-accredited labs and a DSIR-approved R&D Facility that can deliver novel innovations.</p>
                </div>
            </div>
            <div className="icon">
                <img src="src/assets/tick.png" alt="icon"/>
                <div>
                    <h2>Manufacturing Capability</h2>
                    <p>We are equipped with highly trained and professional production resources blended with state-of-the-art manufacturing facilities to handle the growing demand for diagnostics and medical devices.</p>
                </div>
            </div>
        </div>

        <div className="right-section">
            <form>
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="mobile">Mobile Number</label>
                <input type="text" id="mobile" name="mobile" />

                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Comment or Message</label>
                <textarea id="comment" name="comment" rows="4" placeholder="Enter your message here..." className="form-textarea"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
    </>
    );
}

export default SubmitForm;
