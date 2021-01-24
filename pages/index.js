import { useState } from 'react';
import Head from 'next/head'

const divStyle = {
    backgroundColor: '#020023',
  };

function Contador(){
    const [contador, setContador] = useState(1);

    function addContador(){
        setContador(contador + 1);
    }

    return (<div>
                <h1>{contador}</h1>
                <button onClick={addContador}>Adicionar</button>
            </div>
            
    )
}

function Home() {
    return (

<div className="container">
    <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <div className="top-image">
            <img width="421" height="154" src="https://onomadedigital.com.br/wp-content/uploads/2021/01/logo-nmd-branco.png" class="attachment-large size-large" alt="" loading="lazy" srcSet="https://onomadedigital.com.br/wp-content/uploads/2021/01/logo-nmd-branco.png 421w, https://onomadedigital.com.br/wp-content/uploads/2021/01/logo-nmd-branco-300x110.png 300w" sizes="(max-width: 421px) 100vw, 421px"/>
        </div>
        
        <h1 className="title">
            CONQUISTE A TÃO SONHADA LIBERDADE, CRIANDO FONTES  QUE TRABALHARÃO PARA VOCÊ ENQUANTO VIAJA O MUNDO OU SIMPLESMENTE CURTE A SUA FAMÍLIA EM CASA!
        </h1>

        <div className="elementor-element elementor-element-18804cc elementor-aspect-ratio-169 elementor-widget elementor-widget-video" data-id="18804cc" data-element_type="widget" data-settings="{&quot;aspect_ratio&quot;:&quot;169&quot;}" data-widget_type="video.default">
            <div className="elementor-widget-container">
                <div className="elementor-wrapper elementor-fit-aspect-ratio elementor-open-inline">
			        <iframe className="elementor-video-iframe" allowfullscreen="" title="Player de Vídeo youtube" src="https://www.youtube.com/embed/KWRe_kBN8-g?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0&amp;enablejsapi=1&amp;autoplay=1" data-origwidth="" data-origheight="" style={{width: "714px"}} id="lt-yt-iframe"></iframe>				
                </div>
            </div>
        </div>
        
        <p className="description">
            Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
            <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
            >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
            >
            <h3>Deploy &rarr;</h3>
            <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
            </a>
        </div>
    </main>

    <footer>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
    </footer>

    <style jsx>{`
    .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;    
        background-color: #020023;
    }

    main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
        max-width: 900px;
        min-height: 400px;
    }

    top-image {
        margin: 30px 0px 0px 0px;
        padding: 0px 0px 10px 0px;
    }

    parent-parent-video-iframe {
        margin-bottom: 18px;
    }

    parent-video-iframe {
        margin: 0% 10% 0% 10%;
        border-style: solid;
        border-color: #0BDBEE;
        border-radius: 20px 20px 20px 20px;
    }

    video-iframe {
        width: 714px;
    }

    footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    footer img {
        margin-left: 0.5rem;
    }

    footer a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .title a {
        color: #0070f3;
        text-decoration: none;
    }

    .title a:hover,
    .title a:focus,
    .title a:active {
        text-decoration: underline;
    }

    .title {
        color: #FFFFFF;
        font-family: "Montserrat", Sans-serif;
        font-size: 19px;
        font-weight: 600;
        line-height: 1.4em;
        letter-spacing: -0.3px;
        margin: 0px 20px 0px 20px;
        padding: 0px 0px 0px 0px;
    }

    .title,
    .description {
        text-align: center;
    }

    .description {
        line-height: 1.5;
        font-size: 1.5rem;
    }

    code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
        DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    }

    .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
    }

    .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
    }

    .card:hover,
    .card:focus,
    .card:active {
        color: #0070f3;
        border-color: #0070f3;
    }

    .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }

    .logo {
        height: 1em;
    }

    @media (max-width: 600px) {
        .grid {
        width: 100%;
        flex-direction: column;
        }
    }
    `}</style>

    <style jsx global>{`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
    }

    * {
        box-sizing: border-box;
    }
    `}</style>
</div>
    )
}


export default Home