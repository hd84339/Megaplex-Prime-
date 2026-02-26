import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-amber-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center gap-2">
                        <Home className="h-8 w-8 text-amber-600" />
                        <span className="text-2xl font-bold tracking-tight text-gray-900">
                            Megaplex<span className="text-amber-600">Prime</span>
                        </span>
                    </Link>
                    <div className="hidden md:flex space-x-8">
                        <a href="#overview" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">Overview</a>
                        <a href="#amenities" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">Amenities</a>
                        <a href="#faq" className="text-gray-600 hover:text-amber-600 transition-colors font-medium">FAQ</a>
                    </div>
                    <Link to="/admin" className="px-5 py-2.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200">
                        Admin Area
                    </Link>
                </div>
            </div>
        </nav>
    );
}
