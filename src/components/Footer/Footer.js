import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer-socials">
                <ul>
                    <li>
                        {" "}
                        <a href="www.facebook.com">
                            <img src="/images/fb.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        {" "}
                        <a href="www.twitter.com">
                            <img src="/images/tw.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="www.instagram.com">
                            <img src="/images/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section className="footer-logo">
                <img src="/images/logo.png" alt="Organo Logo" />
            </section>
            <section className="footer-info">
                <p>Desenvolvido por Rafael Maia</p>
            </section>
        </footer>
    );
};
