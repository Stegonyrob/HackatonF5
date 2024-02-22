import './Footer.css';
import {

} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <footer id="footer" className="text-white-50 text-center text-lg-start bottom-0 w-100 mt-5">
  <div className="container p-2 pb-2">
    <div className="row">
      <div className="col-auto">
        <p className="text-center p-3 mt-2">
          © 2024 Copyright TechTreaders Innovation
          <a className="text-dark" href="#">Your Website</a>
        </p>
      </div>
      <div className="col-auto ms-auto d-flex justify-content-end align-items-center">
        <a href="" className="me-4 text-reset" target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.tiktok.com" className="me-4 text-reset" target="_blank" rel="noreferrer">
          <i className="bi bi-tiktok"></i>
        </a>
        <a href="https://www.facebook.com" className="me-4 text-reset" target="_blank" rel="noreferrer">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com" className="me-4 text-reset" target="_blank" rel="noreferrer">
          <i className="bi bi-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</footer>

     
  );
}