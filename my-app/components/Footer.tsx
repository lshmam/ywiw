import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">We are a passionate team of web developers dedicated to creating exceptional digital experiences for businesses of all sizes.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-purple-400"><Facebook /></Link>
              <Link href="#" className="hover:text-purple-400"><Twitter /></Link>
              <Link href="#" className="hover:text-purple-400"><Instagram /></Link>
              <Link href="#" className="hover:text-purple-400"><Linkedin /></Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-purple-400">Home</Link></li>
              <li><Link href="#" className="hover:text-purple-400">Services</Link></li>
              <li><Link href="#" className="hover:text-purple-400">Portfolio</Link></li>
              <li><Link href="#" className="hover:text-purple-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a href="mailto:info@webdevagency.com" className="hover:text-purple-400">info@webdevagency.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" size={18} />
                <a href="tel:+1234567890" className="hover:text-purple-400">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" size={18} />
                <span>123 Web Dev Street, Digital City, 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Your Web Development Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

