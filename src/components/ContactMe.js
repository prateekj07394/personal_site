import React from 'react';
import './contactMe.css';

const ContactMe = () => {
    return (
        <section className="flex n-padding justify-content-between">
                <article>
                    <div className="header">
                        <h2 className="find_me">Where to find me?</h2>
                    </div>
                    <div className="list_contact n-padding">
                        <ul>
                            <li>LinkedIn : <a href="https://www.linkedin.com/in/prateek-jha-547518108/" target="_blank"> @prateek-jha</a></li>
                            <li>Github : <a href="https://github.com/prateekj07394" target="_blank">@prateekj07394</a> </li>
                            <li>E-mail : <a href="mailto:prateek_07@hotmail.com">@prateek_07</a></li>
                        </ul>
                    </div>
                </article>
                <article>

                </article>
            </section>
    )

}

export default ContactMe;