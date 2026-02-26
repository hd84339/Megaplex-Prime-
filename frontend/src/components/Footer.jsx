import { Home } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 pt-20 pb-10 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Home className="h-8 w-8 text-amber-500" />
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Megaplex<span className="text-amber-500">Prime</span>
                            </span>
                        </div>
                        <p className="max-w-md text-gray-400 leading-relaxed">
                            Elevating the standard of luxury living. We build more than just homes; we build communities that inspire and endure.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#overview" className="hover:text-amber-500 transition-colors">Overview</a></li>
                            <li><a href="#amenities" className="hover:text-amber-500 transition-colors">Amenities</a></li>
                            <li><a href="#faq" className="hover:text-amber-500 transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
                        <ul className="space-y-4">
                            <li>1-800-MEGAPLEX</li>
                            <li>info@megaplexprime.com</li>
                            <li>123 Luxury Avenue, Prime District</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} MegaplexPrime. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
