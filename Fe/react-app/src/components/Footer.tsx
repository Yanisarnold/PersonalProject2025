import '../styles/components/footer.css';

const Footer = (link: string) => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8 gotchopfooter">
      <div className={'gochop' + link}>
        <ul className="gochopfooterLink">
          <li>
            <a href="/about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Follow us on:
          <a href="https://twitter.com" className="ml-2 text-blue-400 hover:underline">
            Twitter
          </a>
          ,
          <a href="https://facebook.com" className="ml-2 text-blue-600 hover:underline">
            Facebook
          </a>
          ,
          <a href="https://instagram.com" className="ml-2 text-pink-500 hover:underline">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
