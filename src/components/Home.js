import React,{useState, useEffect} from 'react';

const Home = () => {
    const [role,setRole] = useState("An engineer");
    const roles = ["A coder", "A fitness enthusiast", "A bibliophile","An engineer"];
    let index = 0;
    useEffect(()=>{
        setInterval(() => {
            if(index == 4){
                index = 0;
            }
            const str = roles[index % 4];
            index++;
            iterateOverString(str);
        }, 2000);
    },[]);
    function iterateOverString(str){
        for(let i = 0; i < str.length ; i++){
            setRole(str.substring(0,i+1));
        }
    }
    return (
        <section className="flex n-padding justify-content-between">
            <article className="col-sm-12 col-md-6">
                <div className="header">
                    <h2>Hey ! I am Prateek Jha.</h2>
                    <h2 id="role">{role}.</h2>
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