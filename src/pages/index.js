import React from 'react'
import Layout from '../components/layout'
import SlideShow from '../components/SlideShow'
import red from '../images/bg01.jpg'
import blue from '../images/bg02.jpg'
import green from '../images/bg03.jpg'
import berlin from '../images/brandenburg-gate.svg'
import '../css/styles.css'
class IndexPage extends React.Component {

    componentDidMount() {
        document.body.classList.add("is-preload")
        window.addEventListener('load', this.initialLoadAnimation);
    }

    componentDidUnmount() {
        window.removeEventListener('load', this.initialLoadAnimation);
    }

    initialLoadAnimation = () => {
        window.setTimeout(function () {
            document.body.classList.remove("is-preload")
        }, 100);
    }

    render() {

        return (
            <Layout>

                <header id="header">
                    <h1>Barrieren für&nbsp;
                    <i class="fa fa-wheelchair fa-1x"></i>
                        <i class="fa fa-sign-language fa-1x"></i>
                        <i class="fa fa-deaf fa-1x"></i>
                        <i class="fa fa-blind fa-1x"></i>
                        <i class="fa fa-eye-slash fa-1x"></i>
                        &nbsp;in Berlin <img src={berlin} width="100" alt="Brandenburger Tor" /></h1>
                    <p id="p01">Im Jahr 2019 werden wir eine Internetseite zum Thema <br />
                        "Barrieren für Menschen mit Behinderungen" <br />
                        in Berlin veröffentlichen.</p>
                </header>
                <br />
                <br />


                <footer id="footer">
                    <ul className="icons">
                        <li><a href="https://twitter.com/barriereberlin" title="Twitter BarriereBerlin"><span className="label"><i class="fab fa-twitter"></i></span></a></li>
                        <li><a href="mailto:webmaster@barriere.berlin?subject=barriere.berlin%20Homepage" title="Email"><span className="label"><i class="far fa-envelope"></i></span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; 2018</li><li><a href="http://barriere.berlin" title="barriere.berlin">barriere.berlin</a></li>
                        <li>
                            <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
                        </li>
                    </ul>
                    <p id="p01">
                        MADE WITH <font color="red">♥</font> IN BERLIN
                    </p>
                </footer>
                <SlideShow
                    slideInterval={3000}
                    autoplay
                    slides={[red, blue, green]}
                />
            </Layout>
        )
    }
}

export default IndexPage

