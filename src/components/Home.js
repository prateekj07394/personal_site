import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import './Styles/Home.css';

const Home = () => {
    const roles = ["An engineer.", "A developer.", "A fitness enthusiast.", "A bibliophile.",];


    return (
        <section className="flex n-padding justify-content-between">
            <article className="col-sm-12 col-md-8">
                <div className="intro">
                    <div>
                        <h2>Hello world! I am Prateek</h2>
                    </div>
                    <Typewriter
                        options={{
                            strings: roles,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <div>I am a software developer at Walmart Global Tech. I like to design and build web applications
                    Breezing my way through life one push up at a time
                    I write sometimes too
                </div>
                </div>

                <a href="https://www.linkedin.com/in/prateek-jha-547518108/" target="_blank" >
                    <Button color="primary" >Let's connect</Button>
                </a>

            </article>
            <article>

            </article>
        </section>
    )

}

export default Home;