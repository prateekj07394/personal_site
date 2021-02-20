import React from 'react';

const AboutMe = () => {
    return (
        <section className="flex n-padding justify-content-between">
                <article>
                    <p className="n-padding">
                        I am a software engineer currently working at <a target="_blank" href="https://www.walmart.com/">Walmart Global Tech India</a>.
                        I am interested in development, design and more. 
                    </p>
                    <p className="n-padding">
                        I also like to read books and write in my free time.
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