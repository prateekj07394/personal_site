import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Typewriter from 'typewriter-effect';
import './Styles/Home.css';

const Home = () => {
    const roles = ["An engineer.", "A developer.", "A fitness enthusiast.", "A bibliophile.",];


    return (
        <section className="flex n-padding justify-content-between">
            <article className="col-sm-12 col-md-6">
                <div className="intro">
                    <h2>Hey ! I am Prateek Jha.</h2>
                    <Typewriter
                        options={{
                            strings: roles,
                            autoStart: true,
                            loop: true,
                        }}
                    />
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