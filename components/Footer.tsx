export function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-12 text-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div>
          <h4 className="text-lg font-bold">Company</h4>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Support</h4>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Legal</h4>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-400">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-blue-400">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
