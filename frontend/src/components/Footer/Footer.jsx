import './Footer.css';
import '../../bootstrap.min.css';
import '../../index.css'

const Footer = () => {
    return (
        <footer class="text-center text-lg-start footer-theme mt-auto">
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase text-white">Footer Content</h5>
                        <p class = "text-white">Some text goes here.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase text-white">Links</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="#" class="text-white">Link 1</a></li>
                            <li><a href="#" class="text-white">Link 2</a></li>
                            <li><a href="#" class="text-white">Link 3</a></li>
                            <li><a href="#" class="text-white">Link 4</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase text-white">Contact</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="#" class="text-white">Email</a></li>
                            <li><a href="#" class="text-white">Phone</a></li>
                            <li><a href="#" class="text-white">Address</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-center p-3 footer-bottom-theme text-white">
                © 2023 React Blog. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
