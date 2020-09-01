import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const Home = () => {
    const roles = ["An engineer.","A developer.", "A fitness enthusiast.", "A bibliophile.", ];
    

    return (
        <section className="flex n-padding justify-content-between">
            <article className="col-sm-12 col-md-6">
                <div className="header">
                    <h2>Hey ! I am Prateek Jha.</h2>
                    <Typewriter
                        options={{
                            strings: roles,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <div className="n-padding">
                    <a className="btn-primary" href="https://www.linkedin.com/in/prateek-jha-547518108/" target="_blank" >Let's connect</a>
                </div>

            </article>
            <article>

            </article>
        </section>
    )

}

export default Home;