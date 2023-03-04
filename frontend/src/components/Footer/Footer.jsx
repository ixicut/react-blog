import './Footer.css';
import '../../bootstrap.min.css';

const Footer = () => {
    return (
        <footer class="text-center text-lg-start footer-theme">
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Footer Content</h5>
                        <p>Some text goes here.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Links</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="#" class="text-dark">Link 1</a></li>
                            <li><a href="#" class="text-dark">Link 2</a></li>
                            <li><a href="#" class="text-dark">Link 3</a></li>
                            <li><a href="#" class="text-dark">Link 4</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Contact</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="#" class="text-dark">Email</a></li>
                            <li><a href="#" class="text-dark">Phone</a></li>
                            <li><a href="#" class="text-dark">Address</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2023 React Blog. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
