import React from 'react';

function About(props) {
    return (
        <div style={{marginLeft:'100px;'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50626.390839061925!2d126.93517490628044!3d37.527974714398646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1c32408f9b7%3A0x4e3761a4f356d1eb!2z7IyN7Jqp6rWQ7Jyh7IS87YSw!5e0!3m2!1sko!2skr!4v1702605062873!5m2!1sko!2skr"  style={{border:0, width:'600px', height:'450px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default About;