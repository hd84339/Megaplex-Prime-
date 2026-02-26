import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getContent, updateContent } from '../services/api';
import {
    LogOut, LayoutDashboard, Settings,
    CheckCircle, Plus, Trash2, Save,
    Image as ImageIcon, HelpCircle, HardHat, Info
} from 'lucide-react';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [toast, setToast] = useState('');
    const [activeTab, setActiveTab] = useState('hero');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getContent();
                setContent(data);
            } catch (error) {
                console.error("Error fetching content", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('adminAuth');
        navigate('/admin');
    };

    const handleChange = (section, field, value) => {
        setContent(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handleArrayChange = (section, index, field, value) => {
        setContent(prev => {
            const newArray = [...prev[section]];
            newArray[index] = { ...newArray[index], [field]: value };
            return { ...prev, [section]: newArray };
        });
    };

    const removeArrayItem = (section, index) => {
        setContent(prev => {
            const newArray = prev[section].filter((_, i) => i !== index);
            return { ...prev, [section]: newArray };
        });
    };

    const addArrayItem = (section, defaultItem) => {
        setContent(prev => ({
            ...prev,
            [section]: [...(prev[section] || []), defaultItem]
        }));
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await updateContent(content);
            setToast('Changes saved successfully!');
            setTimeout(() => setToast(''), 3000);
        } catch (error) {
            console.error("Failed to save", error);
            setToast('Error saving changes');
            setTimeout(() => setToast(''), 3000);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
            </div>
        );
    }

    const tabs = [
        { id: 'hero', label: 'Hero Section', icon: ImageIcon },
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'amenities', label: 'Amenities', icon: Settings },
        { id: 'about', label: 'About Us', icon: Info },
        { id: 'construction', label: 'Construction', icon: HardHat },
        { id: 'faqs', label: 'FAQ', icon: HelpCircle },
    ];

    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Toast Notification */}
            {toast && (
                <div className="fixed top-4 right-4 z-50 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-5">
                    <CheckCircle className="h-5 w-5 text-amber-500" />
                    <span className="font-medium">{toast}</span>
                </div>
            )}

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-10 hidden md:flex flex-col">
                <div className="h-20 flex items-center px-6 border-b border-gray-100">
                    <span className="text-xl font-bold text-gray-900">Admin<span className="text-amber-600">Panel</span></span>
                </div>
                <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
                    {tabs.map(tab => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id
                                    ? 'bg-amber-50 text-amber-700'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <Icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-amber-600' : 'text-gray-400'}`} />
                                {tab.label}
                            </button>
                        )
                    })}
                </nav>
                <div className="p-4 border-t border-gray-100">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                    >
                        <LogOut className="h-5 w-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 flex flex-col h-screen">
                <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
                    <h1 className="text-2xl font-bold text-gray-900 capitalize flex items-center gap-2">
                        {tabs.find(t => t.id === activeTab)?.label}
                    </h1>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => window.open('/', '_blank')}
                            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            View Site
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all shadow-md active:scale-95 disabled:opacity-70 cursor-pointer"
                        >
                            {saving ? <div className="animate-spin rounded-full h-4 w-4 border-2 border-amber-500 border-t-transparent" /> : <Save className="h-4 w-4 text-amber-500" />}
                            {saving ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </header>

                <div className="flex-1 overflow-auto p-8">
                    <div className="max-w-4xl mx-auto">
                        {/* HERO SECTION */}
                        {activeTab === 'hero' && (
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Main Title</label>
                                    <input
                                        type="text"
                                        value={content?.hero?.title || ''}
                                        onChange={(e) => handleChange('hero', 'title', e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subtitle</label>
                                    <textarea
                                        rows={3}
                                        value={content?.hero?.subtitle || ''}
                                        onChange={(e) => handleChange('hero', 'subtitle', e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none resize-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Background Image URL</label>
                                    <input
                                        type="text"
                                        value={content?.hero?.imageUrl || ''}
                                        onChange={(e) => handleChange('hero', 'imageUrl', e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                            </div>
                        )}

                        {/* OVERVIEW SECTION */}
                        {activeTab === 'overview' && (
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Project Description</label>
                                    <textarea
                                        rows={6}
                                        value={content?.overview?.description || ''}
                                        onChange={(e) => handleChange('overview', 'description', e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none resize-y"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Side Image URL</label>
                                    <input
                                        type="text"
                                        value={content?.overview?.imageUrl || ''}
                                        onChange={(e) => handleChange('overview', 'imageUrl', e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                            </div>
                        )}

                        {/* ABOUT SECTION */}
                        {activeTab === 'about' && (
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">About Us Description</label>
                                    <textarea
                                        rows={6}
                                        value={content?.about?.description || ''}
                                        onChange={(e) => handleChange('about', 'description', e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none resize-y"
                                    />
                                </div>
                            </div>
                        )}

                        {/* CONSTRUCTION SECTION */}
                        {activeTab === 'construction' && (
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Construction Status</label>
                                    <input
                                        type="text"
                                        value={content?.construction?.status || ''}
                                        onChange={(e) => handleChange('construction', 'status', e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all outline-none"
                                    />
                                </div>
                            </div>
                        )}

                        {/* AMENITIES SECTION */}
                        {activeTab === 'amenities' && (
                            <div className="space-y-6">
                                {(content?.amenities || []).map((item, index) => (
                                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-6 relative group">
                                        <button
                                            onClick={() => removeArrayItem('amenities', index)}
                                            className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Title</label>
                                                <input
                                                    type="text"
                                                    value={item.title || ''}
                                                    onChange={(e) => handleArrayChange('amenities', index, 'title', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Description</label>
                                                <textarea
                                                    rows={2}
                                                    value={item.description || ''}
                                                    onChange={(e) => handleArrayChange('amenities', index, 'description', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none resize-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    onClick={() => addArrayItem('amenities', { title: 'New Amenity', description: 'Description here' })}
                                    className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-500 font-medium hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Plus className="h-5 w-5" />
                                    Add Amenity
                                </button>
                            </div>
                        )}

                        {/* FAQS SECTION */}
                        {activeTab === 'faqs' && (
                            <div className="space-y-6">
                                {(content?.faqs || []).map((faq, index) => (
                                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative group">
                                        <button
                                            onClick={() => removeArrayItem('faqs', index)}
                                            className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
                                        >
                                            <Trash2 className="h-5 w-5" />
                                        </button>
                                        <div className="space-y-4 pr-8">
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Question</label>
                                                <input
                                                    type="text"
                                                    value={faq.question || ''}
                                                    onChange={(e) => handleArrayChange('faqs', index, 'question', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none font-medium"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">Answer</label>
                                                <textarea
                                                    rows={3}
                                                    value={faq.answer || ''}
                                                    onChange={(e) => handleArrayChange('faqs', index, 'answer', e.target.value)}
                                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none resize-y"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    onClick={() => addArrayItem('faqs', { question: 'New Question?', answer: 'Answer here' })}
                                    className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-500 font-medium hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <Plus className="h-5 w-5" />
                                    Add FAQ
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </main>
        </div>
    );
}
