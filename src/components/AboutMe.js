import React from 'react';

const AboutMe = () => {
    return (
        <section className="flex n-padding justify-content-between">
                <article>
                    

                    <p className="n-padding">
                        I am a software engineer currently working at <a target="_blank" href="https://www.tredence.com/">Tredence Analytics</a> , India as a <a  target="_blank" href="https://reactjs.org/">React</a> developer.
                        I am interested in development, design and more. 
                    </p>
                    <p className="n-padding">
                        I have recently started to write about the things I know / want to know. You will find my blogs on this site soon.
                    </p>
                     {/* <p className="n-padding">
                        You can <a href="/">read my blogs</a> or <a href="/">know more about me</a>.
                    </p>  */}
                </article>
                <article>

                </article>
            </section>
    )

}

export default AboutMe;