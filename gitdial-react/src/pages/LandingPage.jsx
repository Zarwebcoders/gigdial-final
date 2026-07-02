import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { 
  Paintbrush, Zap, Droplet, Component, Hammer, Brush, Tv, Bug, Scissors, 
  Truck, ArrowUp, Package, Box, Car, Send, Utensils, Calendar, Camera, 
  Flower, GlassWater, Music, Smartphone, Home as HomeIcon, Wifi, Megaphone, 
  Code, Cpu, BookOpen, Briefcase, TrendingUp, UserCheck, Languages, Award, 
  Heart, Sprout, HeartHandshake, Compass, ChefHat, Gift, Dumbbell, Grid, 
  Moon, PenTool, X, Search
} from 'lucide-react';

import logoImg from '../assets/logo.png';
import heroImg from '../assets/hero.png';
import proModelImg from '../assets/pro-model-transparent.png';
import rocketIcon from '../assets/rocket-transparent.png';
import rupeeIcon from '../assets/rupee-transparent.png';
import starmanIcon from '../assets/starman-transparent.png';
import footermanImg from '../assets/footerman-transparent.png';
import footerphoneImg from '../assets/footerphone-new.png';
import footerCityImg from '../assets/footer-city.png';
import noMiddlemanIcon from '../assets/no-middleman.png';
import Navbar from '../components/LandingNavbar/Navbar';
import noCommissionIcon from '../assets/no-commission.png';
import trustedProfessionalsIcon from '../assets/trusted-professionals.png';
import serviceCategoriesIcon from '../assets/service-categories.svg';
import searchServiceIcon from '../assets/search-service.svg';
import chooseProfessionalIcon from '../assets/choose-professional.svg';
import getWorkDoneIcon from '../assets/get-work-done.svg';
import registerProIcon from '../assets/register-pro.svg';
import activateSubscriptionIcon from '../assets/activate-subscription.svg';
import receiveLeadsIcon from '../assets/receive-leads.svg';
import plumberIcon from '../assets/plumber.png';
import painterIcon from '../assets/painter.png';
import './LandingPage.css';

const ALL_SERVICES_LIST = [
  { name: 'Painting', category: 'Home Services', iconName: 'Paintbrush' },
  { name: 'Electrical', category: 'Home Services', iconName: 'Zap' },
  { name: 'Plumbing', category: 'Home Services', iconName: 'Droplet' },
  { name: 'Furniture Assembly', category: 'Home Services', iconName: 'Component' },
  { name: 'Home Repair', category: 'Home Services', iconName: 'Hammer' },
  { name: 'Home Cleaning', category: 'Home Services', iconName: 'Brush' },
  { name: 'Appliance Repair', category: 'Home Services', iconName: 'Tv' },
  { name: 'Pest Control', category: 'Home Services', iconName: 'Bug' },
  { name: 'Carpentry', category: 'Home Services', iconName: 'Scissors' },
  { name: 'House Shifting', category: 'Logistics & Shifting', iconName: 'Truck' },
  { name: 'Heavy Lifting', category: 'Logistics & Shifting', iconName: 'ArrowUp' },
  { name: 'Local Delivery', category: 'Logistics & Shifting', iconName: 'Package' },
  { name: 'Warehouse Support', category: 'Logistics & Shifting', iconName: 'Box' },
  { name: 'Vehicle Rental', category: 'Logistics & Shifting', iconName: 'Car' },
  { name: 'Courier Service', category: 'Logistics & Shifting', iconName: 'Send' },
  { name: 'Catering Staff', category: 'Events & Entertainment', iconName: 'Utensils' },
  { name: 'Event Planning', category: 'Events & Entertainment', iconName: 'Calendar' },
  { name: 'Photography', category: 'Events & Entertainment', iconName: 'Camera' },
  { name: 'Event Decoration', category: 'Events & Entertainment', iconName: 'Flower' },
  { name: 'Bartending', category: 'Events & Entertainment', iconName: 'GlassWater' },
  { name: 'DJ & Sound', category: 'Events & Entertainment', iconName: 'Music' },
  { name: 'Device Repair', category: 'Tech & Digital', iconName: 'Smartphone' },
  { name: 'Smart Home Setup', category: 'Tech & Digital', iconName: 'HomeIcon' },
  { name: 'Network Support', category: 'Tech & Digital', iconName: 'Wifi' },
  { name: 'Digital Marketing', category: 'Tech & Digital', iconName: 'Megaphone' },
  { name: 'Web Development', category: 'Tech & Digital', iconName: 'Code' },
  { name: 'App Support', category: 'Tech & Digital', iconName: 'Cpu' },
  { name: 'Tutoring', category: 'Education & Learning', iconName: 'BookOpen' },
  { name: 'Business Consulting', category: 'Education & Learning', iconName: 'Briefcase' },
  { name: 'Stock Analysis', category: 'Education & Learning', iconName: 'TrendingUp' },
  { name: 'Career Coaching', category: 'Education & Learning', iconName: 'UserCheck' },
  { name: 'Language Training', category: 'Education & Learning', iconName: 'Languages' },
  { name: 'Skill Training', category: 'Education & Learning', iconName: 'Award' },
  { name: 'Pet Care', category: 'Personal & Lifestyle', iconName: 'Heart' },
  { name: 'Gardening', category: 'Home Services', iconName: 'Sprout' },
  { name: 'Elder Care', category: 'Personal & Lifestyle', iconName: 'HeartHandshake' },
  { name: 'DIY Workshops', category: 'Education & Learning', iconName: 'Hammer' },
  { name: 'Tour Guide', category: 'Personal & Lifestyle', iconName: 'Compass' },
  { name: 'Meal Preparation', category: 'Personal & Lifestyle', iconName: 'ChefHat' },
  { name: 'Custom Gifts', category: 'Personal & Lifestyle', iconName: 'Gift' },
  { name: 'Fitness Training', category: 'Personal & Lifestyle', iconName: 'Dumbbell' },
  { name: 'Home Organizing', category: 'Home Services', iconName: 'Grid' },
  { name: 'Astrology', category: 'Personal & Lifestyle', iconName: 'Moon' },
  { name: 'Content Writing', category: 'Personal & Lifestyle', iconName: 'PenTool' },
  { name: 'Tailoring', category: 'Home Services', iconName: 'Scissors' }
];

const iconMap = {
  Paintbrush, Zap, Droplet, Component, Hammer, Brush, Tv, Bug, Scissors,
  Truck, ArrowUp, Package, Box, Car, Send, Utensils, Calendar, Camera,
  Flower, GlassWater, Music, Smartphone, HomeIcon, Wifi, Megaphone,
  Code, Cpu, BookOpen, Briefcase, TrendingUp, UserCheck, Languages, Award,
  Heart, Sprout, HeartHandshake, Compass, ChefHat, Gift, Dumbbell, Grid,
  Moon, PenTool
};

export default function LandingPage() {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [modalSearchQuery, setModalSearchQuery] = useState('');

  // Visitor lead capture popup states
  const [isVisitorModalOpen, setIsVisitorModalOpen] = useState(false);
  const [visitorSubmitting, setVisitorSubmitting] = useState(false);
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitorName, setVisitorName] = useState('');

  useEffect(() => {
    const isVisitorCaptured = localStorage.getItem('gigdial_visitor_captured') === 'true';
    const isLoggedIn = !!user;
    
    if (!isLoggedIn && !isVisitorCaptured) {
      const timer = setTimeout(() => {
        setIsVisitorModalOpen(true);
      }, 5000); // Trigger after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [user]);

  const handleVisitorSubmit = async (e) => {
    e.preventDefault();
    setVisitorSubmitting(true);
    try {
      await axios.post('/api/visitor-leads', { name: visitorName, phone: visitorPhone });
      localStorage.setItem('gigdial_visitor_captured', 'true');
      setIsVisitorModalOpen(false);
      toast.success('Welcome to GigDial! Explore our services now.');
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || 'Failed to submit details. Please try again.');
    } finally {
      setVisitorSubmitting(false);
    }
  };

  const filteredServices = ALL_SERVICES_LIST.filter(srv => 
    srv.name.toLowerCase().includes(modalSearchQuery.toLowerCase()) ||
    srv.category.toLowerCase().includes(modalSearchQuery.toLowerCase())
  );

  const groupedServices = filteredServices.reduce((acc, srv) => {
    if (!acc[srv.category]) {
      acc[srv.category] = [];
    }
    acc[srv.category].push(srv);
    return acc;
  }, {});

  const filteredServicesGrouped = Object.entries(groupedServices);

  // Automatically redirect authenticated users to their dashboards
  useEffect(() => {
    if (user) {
      if (user.role === 'worker') navigate('/worker-dashboard', { replace: true });
      else if (user.role === 'customer') navigate('/customer-dashboard', { replace: true });
      else if (user.role === 'admin') navigate('/admin', { replace: true });
    }
  }, [user, navigate]);

  const toggleFaq = (key) => {
    setActiveFaq(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append('search', searchQuery);
    navigate(`/services?${params.toString()}`);
  };

  const handleServiceClick = (category) => {
    navigate(`/services?search=${encodeURIComponent(category)}`);
  };

  return (
    <div className="landing-page-wrapper">
      <Navbar />
      <div className="main-container">
        {/* Hero Section Container */}
        <section className="hero-section" id="home">
          <div className="hero-container">
            {/* Left Column - Content */}
            <div className="hero-left">
              <h1 className="hero-title">
                {language === 'EN' ? (
                  <>
                    Find <span className="green-highlight">Trusted</span> <br />
                    <span className="blue-highlight">Local Professionals</span> <br />
                    Near You
                  </>
                ) : (
                  t('heroTitle')
                )}
              </h1>

              <div className="hero-features">
                <span className="feature-item">{t('heroSubtitle')}</span>
              </div>

              {/* Inline Search Bar */}
              <form onSubmit={handleSearch} className="search-bar-container">
                <div className="search-input-wrapper">
                  <svg
                    className="search-input-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input
                    type="text"
                    placeholder={t('searchServices') || "What service do you need?"}
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button type="submit" className="search-button">
                  {language === 'EN' ? 'Search' : (language === 'HI' ? 'खोजें' : 'શોધો')}
                </button>
              </form>

              {/* Dual CTA Buttons */}
              <div className="hero-cta-row">
                <a href="#services" className="cta-card cta-card-orange">
                  <span className="cta-card-title">{t('findServices')}</span>
                </a>
                <Link to="/register" className="cta-card cta-card-blue">
                  <span className="cta-card-title">{t('joinAsPro')}</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hero-right">
              <div className="hero-image-wrapper">
                {/* Background blue curvy shape decoration */}
                <div className="hero-bg-shape"></div>
                
                <img
                  src={heroImg}
                  className="hero-image"
                  alt="GigDial Professionals"
                />

                {/* Floating categories card overlay */}
                <div className="floating-categories-card">
                  <div className="badge-icon-bg">
                    <svg
                      className="badge-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                    </svg>
                  </div>
                  <div className="badge-text">
                    <span className="badge-num">45+</span>
                    <span className="badge-lbl">{language === 'EN' ? 'Service Categories' : (language === 'HI' ? 'सेवा श्रेणियां' : 'સેવા શ્રેણીઓ')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Statistics Strip */}
        <section className="stats-strip-container">
          <div className="stats-strip">
            {/* Stat Item 1 - Services (network hub) */}
            <div className="stat-item" onClick={() => navigate('/services')} style={{ cursor: 'pointer' }}>
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stat-svg">
                  <circle cx="12" cy="12" r="3.5"></circle>
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-val">45+</span>
                <span className="stat-lbl">{t('services')}</span>
              </div>
            </div>

            <div className="stat-divider"></div>

            {/* Stat Item 2 - Verified Professionals (person + checkmark) */}
            <div className="stat-item" onClick={() => navigate('/workers')} style={{ cursor: 'pointer' }}>
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stat-svg">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4.5"></circle>
                  <path d="m17 10 2 2 4-4" stroke="#98FF18" strokeWidth="3"></path>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-val">1000+</span>
                <span className="stat-lbl">{t('statsProfessionals')}</span>
              </div>
            </div>

            <div className="stat-divider"></div>

            {/* Stat Item 3 - Happy Customers (multiple people) */}
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="stat-svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4.5"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-val">5000+</span>
                <span className="stat-lbl">
                  {language === 'EN' ? 'Happy Customers' : (language === 'HI' ? 'संतुष्ट ग्राहक' : 'ખુશ ગ્રાહકો')}
                </span>
              </div>
            </div>

            <div className="stat-divider"></div>

            {/* Stat Item 4 - Average Rating (golden star) */}
            <div className="stat-item">
              <div className="stat-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="currentColor" className="stat-svg star-svg">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <div className="stat-details">
                <span className="stat-val">4.7★</span>
                <span className="stat-lbl">{t('statsRating')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-section" id="services">
          <div className="services-container">
            <h2 className="services-title">
              Services Available on <span className="services-brand-gig">Gig</span><span className="services-brand-dial">Dial</span>
            </h2>
            
            <div className="services-grid">
              {/* Card 1: Plumber */}
              <div className="service-card" onClick={() => handleServiceClick('Plumber')}>
                <div className="service-icon-wrapper">
                  <img src={plumberIcon} alt="Plumber" className="service-icon-image" />
                </div>
                <span className="service-label">Plumber</span>
              </div>

              {/* Card 2: Electrician */}
              <div className="service-card" onClick={() => handleServiceClick('Electrician')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <polygon points="36,6 18,34 30,34 26,58 46,28 32,28" stroke="#0033DB" strokeWidth="3.5" strokeLinejoin="round" fill="#FFC72C" />
                  </svg>
                </div>
                <span className="service-label">Electrician</span>
              </div>

              {/* Card 3: Carpenter */}
              <div className="service-card" onClick={() => handleServiceClick('Carpenter')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <path d="M12 40h40v10H12z" stroke="#0033DB" strokeWidth="3.5" strokeLinejoin="round" fill="#D97706" />
                    <path d="M16 40c0-6 4-10 8-10h4c1 0 2 1 2 2v8" stroke="#0033DB" strokeWidth="3.5" strokeLinejoin="round" fill="#B45309" />
                    <path d="M34 26l8 14M38 26l8 14" stroke="#0033DB" strokeWidth="3" fill="none" />
                    <path d="M32 40l-6-10h8l2 10" stroke="#0033DB" strokeWidth="3.5" strokeLinejoin="round" fill="#cbd5e1" />
                  </svg>
                </div>
                <span className="service-label">Carpenter</span>
              </div>

              {/* Card 4: Painter */}
              <div className="service-card" onClick={() => handleServiceClick('Painter')}>
                <div className="service-icon-wrapper">
                  <img src={painterIcon} alt="Painter" className="service-icon-image" />
                </div>
                <span className="service-label">Painter</span>
              </div>

              {/* Card 5: AC Repair */}
              <div className="service-card" onClick={() => handleServiceClick('AC Repair')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <rect x="10" y="16" width="44" height="20" rx="3" stroke="#0033DB" strokeWidth="3.5" fill="#F8FAFC" />
                    <rect x="42" y="22" width="6" height="4" rx="1" fill="#3B82F6" />
                    <path d="M10 32h44" stroke="#0033DB" strokeWidth="3.5" />
                    <path d="M18 42c0 4-3 6-3 6M28 42c0 5-4 7-4 7M38 42c0 5-4 7-4 7M48 42c0 4-3 6-3 6" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="service-label">AC Repair</span>
              </div>

              {/* Card 6: Cleaner */}
              <div className="service-card" onClick={() => handleServiceClick('Cleaner')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <line x1="48" y1="12" x2="28" y2="34" stroke="#0033DB" strokeWidth="4" strokeLinecap="round" />
                    <path d="M25 31l6 6-4 4-6-6z" stroke="#0033DB" strokeWidth="3.5" fill="#0033DB" />
                    <path d="M23 37l-8 11a3 3 0 0 0 4 4l12-8z" stroke="#0033DB" strokeWidth="3.5" strokeLinejoin="round" fill="#FBBF24" />
                  </svg>
                </div>
                <span className="service-label">Cleaner</span>
              </div>

              {/* Card 7: Packers Movers */}
              <div className="service-card" onClick={() => handleServiceClick('Packers Movers')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <rect x="10" y="16" width="32" height="24" rx="2" stroke="#0033DB" strokeWidth="3.5" fill="#3B82F6" />
                    <path d="M42 24h6c2 0 4 2 4 4v12H42V24z" stroke="#0033DB" strokeWidth="3.5" strokeLinejoin="round" fill="#F8FAFC" />
                    <rect x="44" y="27" width="5" height="5" rx="1" fill="#0033DB" />
                    <circle cx="20" cy="46" r="6" stroke="#0033DB" strokeWidth="3.5" fill="#0033DB" />
                    <circle cx="40" cy="46" r="6" stroke="#0033DB" strokeWidth="3.5" fill="#0033DB" />
                    <path d="M4 22h3M2 28h5M5 34h2" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="service-label">Packers Movers</span>
              </div>

              {/* Card 8: Mason */}
              <div className="service-card" onClick={() => handleServiceClick('Mason')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <rect x="12" y="18" width="40" height="28" rx="2" stroke="#0033DB" strokeWidth="3.5" fill="#FB923C" />
                    <line x1="12" y1="27" x2="52" y2="27" stroke="#0033DB" strokeWidth="2.5" />
                    <line x1="12" y1="37" x2="52" y2="37" stroke="#0033DB" strokeWidth="2.5" />
                    <line x1="25" y1="18" x2="25" y2="27" stroke="#0033DB" strokeWidth="2.5" />
                    <line x1="39" y1="18" x2="39" y2="27" stroke="#0033DB" strokeWidth="2.5" />
                    <line x1="32" y1="27" x2="32" y2="37" stroke="#0033DB" strokeWidth="2.5" />
                    <line x1="20" y1="37" x2="20" y2="46" stroke="#0033DB" strokeWidth="2.5" />
                    <line x1="44" y1="37" x2="44" y2="46" stroke="#0033DB" strokeWidth="2.5" />
                  </svg>
                </div>
                <span className="service-label">Mason</span>
              </div>

              {/* Card 9: IT Services */}
              <div className="service-card" onClick={() => handleServiceClick('IT Support')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <rect x="10" y="14" width="44" height="28" rx="3" stroke="#0033DB" strokeWidth="3.5" fill="#3B82F6" />
                    <path d="M18 24l-4 4 4 4M26 24l4 4-4 4M21 34l3-12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 42h8v6h-8z" stroke="#0033DB" strokeWidth="3.5" fill="#0033DB" />
                    <path d="M22 48h20" stroke="#0033DB" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="service-label">IT Services</span>
              </div>

              {/* Card 10: Photographer */}
              <div className="service-card" onClick={() => handleServiceClick('Photographer')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <path d="M12 24h6l4-5h16l4 5h6c2.2 0 4 1.8 4 4v20c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V28c0-2.2 1.8-4 4-4z" stroke="#0033DB" strokeWidth="3.5" strokeLinejoin="round" fill="#F8FAFC" />
                    <circle cx="32" cy="37" r="11" stroke="#0033DB" strokeWidth="3.5" fill="#3B82F6" />
                    <circle cx="32" cy="37" r="5" fill="#0033DB" />
                    <circle cx="48" cy="28" r="2" fill="#98FF18" />
                  </svg>
                </div>
                <span className="service-label">Photographer</span>
              </div>

              {/* Card 11: Event Services */}
              <div className="service-card" onClick={() => handleServiceClick('Event Services')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <rect x="25" y="12" width="14" height="18" rx="7" stroke="#0033DB" strokeWidth="3.5" fill="#64748B" />
                    <line x1="25" y1="21" x2="39" y2="21" stroke="#0033DB" strokeWidth="2.5" />
                    <path d="M29 30v14c0 1.5 1 2 3 2s3-.5 3-2V30h-6z" stroke="#0033DB" strokeWidth="3.5" fill="#0033DB" />
                    <path d="M32 46c0 4-4 6-4 6" stroke="#0033DB" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="service-label">Event Services</span>
              </div>

              {/* Card 12: Tutor */}
              <div className="service-card" onClick={() => handleServiceClick('Tutor')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <rect x="22" y="12" width="26" height="34" rx="2" stroke="#0033DB" strokeWidth="3.5" fill="#EFF6FF" />
                    <rect x="16" y="18" width="26" height="34" rx="2" stroke="#0033DB" strokeWidth="3.5" fill="#FFFFFF" />
                    <line x1="22" y1="26" x2="36" y2="26" stroke="#0033DB" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="22" y1="32" x2="36" y2="32" stroke="#0033DB" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="22" y1="38" x2="30" y2="38" stroke="#0033DB" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="36" cy="38" r="3" fill="#0033DB" />
                  </svg>
                </div>
                <span className="service-label">Tutor</span>
              </div>

              {/* Card 13: Appliance Repair */}
              <div className="service-card" onClick={() => handleServiceClick('Appliance Repair')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <path d="M18 46l26-26M38 16l10 10" stroke="#0033DB" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M14 50l6-6-4-4-6 6c-1.5 1.5-1.5 4 0 5.5s4 1.5 5.5 0z" stroke="#0033DB" strokeWidth="3.5" fill="#98FF18" />
                    <path d="M44 44L20 20" stroke="#0033DB" strokeWidth="4" strokeLinecap="round" />
                    <path d="M44 44c2 2 5.5 1.5 7-0.5s1.5-5.5-0.5-7l-4-4-6.5 6.5z" stroke="#0033DB" strokeWidth="3.5" fill="#cbd5e1" />
                    <path d="M22 22l-6-6c-2.5-2.5-2.5-6.5 0-9s6.5-2.5 9 0l6 6" stroke="#0033DB" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="service-label">Appliance Repair</span>
              </div>

              {/* Card 14: Pest Control */}
              <div className="service-card" onClick={() => handleServiceClick('Pest Control')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <rect x="25" y="20" width="14" height="24" rx="7" stroke="#0033DB" strokeWidth="3.5" fill="#64748B" />
                    <circle cx="32" cy="16" r="4" stroke="#0033DB" strokeWidth="3.5" fill="#0033DB" />
                    <path d="M18 22h8M18 32h8M18 42h8M46 22h-8M46 32h-8M46 42h-8" stroke="#0033DB" strokeWidth="3.5" strokeLinecap="round" />
                    <path d="M28 12c-2-4-6-4-6-4M36 12c2-4 6-4 6-4" stroke="#0033DB" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="service-label">Pest Control</span>
              </div>

              {/* Card 15: Interior Design */}
              <div className="service-card" onClick={() => handleServiceClick('Interior Design')}>
                <div className="service-icon-wrapper">
                  <svg viewBox="0 0 64 64" className="service-icon-svg">
                    <path d="M18 36V20c0-3.3 2.7-6 6-6h16c3.3 0 6 2.7 6 6v16" stroke="#0033DB" strokeWidth="3.5" strokeLinejoin="round" fill="#EFF6FF" />
                    <rect x="14" y="32" width="36" height="12" rx="3" stroke="#0033DB" strokeWidth="3.5" fill="#3B82F6" />
                    <path d="M14 30h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4M50 30h4c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-4" stroke="#0033DB" strokeWidth="3.5" strokeLinejoin="round" fill="#FFFFFF" />
                    <path d="M18 44l-2 6M46 44l2 6" stroke="#0033DB" strokeWidth="3.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="service-label">Interior Design</span>
              </div>

              {/* Card 16: More Services */}
              <div className="service-card service-card-more" onClick={() => setIsServicesModalOpen(true)}>
                <div className="service-card-more-content">
                  <span className="more-number">+45</span>
                  <span className="more-label">More Services</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose GigDial? Section */}
        <section className="why-choose-section" id="why-choose">
          <div className="why-choose-container">
            <h2 className="why-choose-title">
              Why Choose <span className="brand-gig">Gig</span><span className="brand-dial">Dial</span>?
            </h2>
            
            <div className="why-choose-grid">
              {/* Card 1: No Middleman */}
              <div className="why-choose-card">
                <div className="why-choose-icon-wrapper">
                  <img src={noMiddlemanIcon} alt="No Middleman" className="why-choose-icon" />
                </div>
                <h3 className="why-choose-card-title">No Middleman</h3>
                <p className="why-choose-card-desc">Connect directly with professionals.</p>
              </div>

              {/* Card 2: No Commission */}
              <div className="why-choose-card">
                <div className="why-choose-icon-wrapper">
                  <img src={noCommissionIcon} alt="No Commission" className="why-choose-icon" />
                </div>
                <h3 className="why-choose-card-title">No Commission</h3>
                <p className="why-choose-card-desc">Workers keep 100% of their earnings.</p>
              </div>

              {/* Card 3: Trusted Professionals */}
              <div className="why-choose-card">
                <div className="why-choose-icon-wrapper">
                  <img src={trustedProfessionalsIcon} alt="Trusted Professionals" className="why-choose-icon" />
                </div>
                <h3 className="why-choose-card-title">Trusted Professionals</h3>
                <p className="why-choose-card-desc">Verified profiles and transparent reviews.</p>
              </div>

              {/* Card 4: 45+ Service Categories */}
              <div className="why-choose-card">
                <div className="why-choose-icon-wrapper">
                  <img src={serviceCategoriesIcon} alt="45+ Service Categories" className="why-choose-icon" />
                </div>
                <h3 className="why-choose-card-title">45+ Service Categories</h3>
                <p className="why-choose-card-desc">Find professionals for almost every need.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section" id="how-it-works">
          <div className="how-it-works-title">How It Works?</div>
          <div className="how-it-works-container">
            {/* For Customers */}
            <div className="how-it-works-group customers">
              <h3 className="group-title customers">For Customers</h3>
              <div className="group-row">
                <div className="how-card">
                  <div className="how-number">1</div>
                  <img src={searchServiceIcon} alt="Search Service" className="how-icon" />
                  <h4 className="how-title">Search Service</h4>
                  <p className="how-desc">Search for the service you need.</p>
                </div>
                <div className="how-arrow">→</div>
                <div className="how-card">
                  <div className="how-number">2</div>
                  <img src={chooseProfessionalIcon} alt="Choose Professional" className="how-icon" />
                  <h4 className="how-title">Choose Professional</h4>
                  <p className="how-desc">Compare and choose the best professional.</p>
                </div>
                <div className="how-arrow">→</div>
                <div className="how-card">
                  <div className="how-number">3</div>
                  <img src={getWorkDoneIcon} alt="Get Work Done" className="how-icon" />
                  <h4 className="how-title">Get Work Done</h4>
                  <p className="how-desc">Connect directly and get your work done.</p>
                </div>
              </div>
            </div>

            {/* For Professionals */}
            <div className="how-it-works-group professionals" id="professionals">
              <h3 className="group-title professionals">For Professionals</h3>
              <div className="group-row">
                <div className="how-card">
                  <div className="how-number">1</div>
                  <img src={registerProIcon} alt="Register" className="how-icon" />
                  <h4 className="how-title">Register</h4>
                  <p className="how-desc">Create your profile on GigDial.</p>
                </div>
                <div className="how-arrow">→</div>
                <div className="how-card">
                  <div className="how-number">2</div>
                  <img src={activateSubscriptionIcon} alt="Activate Subscription" className="how-icon" />
                  <h4 className="how-title">Activate Subscription</h4>
                  <p className="how-desc">Choose the plan and activate subscription.</p>
                </div>
                <div className="how-arrow">→</div>
                <div className="how-card">
                  <div className="how-number">3</div>
                  <img src={receiveLeadsIcon} alt="Receive Leads" className="how-icon" />
                  <h4 className="how-title">Receive Leads</h4>
                  <p className="how-desc">Get customer leads and grow your business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Growth Banner Section */}
        <section className="business-banner-section">
          <div className="business-banner-container">
            {/* Floating badges on the left side of the model */}
            <div className="banner-left-graphics">
              <div className="floating-graphic-card leads-card">
                <div className="graphic-icon-bg leads-bg">
                  <svg className="graphic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <span className="graphic-text">More Leads</span>
                <div className="speech-bubble-tail"></div>
              </div>

              <div className="floating-graphic-card business-card">
                <div className="graphic-icon-bg business-bg">
                  <svg className="graphic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <span className="graphic-text">More Business</span>
              </div>
            </div>

            {/* Model Image */}
            <div className="banner-model-wrapper">
              <img
                src={proModelImg}
                className="banner-model-image"
                alt="GigDial Freelancer Model"
              />
            </div>

            {/* Middle text content & checkmarks */}
            <div className="banner-middle-content">
              <h2 className="banner-title">
                Grow Your Business <br />
                with <span className="brand-gig">Gig</span><span className="brand-dial">Dial</span>
              </h2>
              <ul className="banner-checklist">
                <li className="banner-check-item">
                  <span className="check-circle">✓</span>
                  Get Direct Customer Leads
                </li>
                <li className="banner-check-item">
                  <span className="check-circle">✓</span>
                  No Commission Deduction
                </li>
                <li className="banner-check-item">
                  <span className="check-circle">✓</span>
                  Build Your Online Presence
                </li>
                <li className="banner-check-item">
                  <span className="check-circle">✓</span>
                  Expand Your Customer Base
                </li>
              </ul>
            </div>

            {/* Right card: Subscription pricing */}
            <div className="banner-right-card">
              <span className="pricing-title">Join GigDial for</span>
              <div className="pricing-price-row">
                <span className="pricing-currency">₹</span>
                <span className="pricing-amount">499</span>
                <span className="pricing-period">/Month</span>
              </div>
              <div className="pricing-features">
                Simple • Transparent • Affordable
              </div>
              <button onClick={() => navigate('/register/worker')} className="pricing-button">Join Now</button>
              <div className="pricing-footer">
                No Commission • 100% Yours
              </div>
            </div>
          </div>
        </section>

        {/* Why Customers Love Section */}
        <section className="why-love-section" id="customers">
          <div className="why-love-container">
            <h2 className="why-love-title">
              Why Customers Love <span className="brand-gig">Gig</span><span className="brand-dial">Dial</span>
            </h2>
            
            <div className="why-love-grid">
              {/* Card 1: Faster Response (Rocket) */}
              <div className="why-love-card">
                <div className="why-love-icon-wrapper">
                  <img src={rocketIcon} className="why-love-icon-image" alt="Faster Response Rocket" />
                </div>
                <div className="why-love-text-block">
                  <h3 className="why-love-card-title">Faster Response</h3>
                  <p className="why-love-card-desc">Get quick responses from local professionals.</p>
                </div>
              </div>

              {/* Card 2: Affordable Services (Rupee tag) */}
              <div className="why-love-card">
                <div className="why-love-icon-wrapper rupee-wrapper">
                  <div className="rupee-icon-container">
                    <img src={rupeeIcon} className="why-love-icon-image rupee-img" alt="Affordable Services" />
                    <div className="rupee-checkmark-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="badge-check-svg">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="why-love-text-block">
                  <h3 className="why-love-card-title">Affordable Services</h3>
                  <p className="why-love-card-desc">Compare and choose the best prices.</p>
                </div>
              </div>

              {/* Card 3: Local Professionals (Map pin on target) */}
              <div className="why-love-card">
                <div className="why-love-icon-wrapper">
                  {/* Custom SVG Location target */}
                  <svg className="why-love-icon-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Target rings */}
                    <ellipse cx="32" cy="46" rx="20" ry="8" stroke="#3B82F6" strokeWidth="4.5" fill="none"/>
                    <ellipse cx="32" cy="46" rx="10" ry="4" stroke="#3B82F6" strokeWidth="3" fill="none"/>
                    {/* Map Pin */}
                    <path d="M32 12C24 12 18 18 18 26C18 36 32 50 32 50C32 50 46 36 46 26C46 18 40 12 32 12Z" fill="#EF4444" stroke="#1E293B" strokeWidth="3" strokeLinejoin="round"/>
                    <circle cx="32" cy="24" r="5" fill="#FFFFFF"/>
                  </svg>
                </div>
                <div className="why-love-text-block">
                  <h3 className="why-love-card-title">Local Professionals</h3>
                  <p className="why-love-card-desc">Hire trusted professionals near your location.</p>
                </div>
              </div>

              {/* Card 4: Direct Communication (Chat bubble with dots) */}
              <div className="why-love-card">
                <div className="why-love-icon-wrapper">
                  {/* Custom SVG Chat bubble */}
                  <svg className="why-love-icon-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 28C12 17 21 10 32 10C43 10 52 17 52 28C52 39 43 46 32 46C29 46 26 45.5 24 44.5L14 49L16 40C13.5 37 12 33 12 28Z" fill="#10B981" stroke="#10B981" strokeWidth="4" strokeLinejoin="round"/>
                    <circle cx="24" cy="28" r="3.5" fill="#FFFFFF"/>
                    <circle cx="32" cy="28" r="3.5" fill="#FFFFFF"/>
                    <circle cx="40" cy="28" r="3.5" fill="#FFFFFF"/>
                  </svg>
                </div>
                <div className="why-love-text-block">
                  <h3 className="why-love-card-title">Direct Communication</h3>
                  <p className="why-love-card-desc">Talk directly with professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Pricing Section */}
        <section className="pricing-section" id="pricing">
          <div className="pricing-container">
            <h2 className="pricing-section-title">Simple Pricing</h2>
            
            <div className="pricing-card-horizontal">
              {/* Popular Badge */}
              <div className="popular-badge">Most Popular</div>
              
              <div className="pricing-card-content">
                {/* Left Side: Avatar, Title & Price */}
                <div className="pricing-left-side">
                  <div className="starman-avatar-wrapper">
                    <img src={starmanIcon} className="starman-avatar-img" alt="Professional Profile" />
                  </div>
                  <div className="plan-identity">
                    <h3 className="plan-name">GigDial Professional</h3>
                    <div className="plan-price-row">
                      <span className="plan-currency">₹</span>
                      <span className="plan-amount">499</span>
                      <span className="plan-period">/Month</span>
                    </div>
                  </div>
                </div>
                
                {/* Vertical Divider */}
                <div className="pricing-divider"></div>
                
                {/* Right Side: Features Checklist */}
                <div className="pricing-right-side">
                  <div className="features-columns">
                    <ul className="features-list">
                      <li className="feature-list-item">
                        <span className="feature-check-circle">✓</span>
                        Direct Leads
                      </li>
                      <li className="feature-list-item">
                        <span className="feature-check-circle">✓</span>
                        Profile Listing
                      </li>
                      <li className="feature-list-item">
                        <span className="feature-check-circle">✓</span>
                        Customer Contact
                      </li>
                      <li className="feature-list-item">
                        <span className="feature-check-circle">✓</span>
                        Reviews & Ratings
                      </li>
                    </ul>
                    
                    <ul className="features-list">
                      <li className="feature-list-item">
                        <span className="feature-check-circle">✓</span>
                        No Commission
                      </li>
                      <li className="feature-list-item">
                        <span className="feature-check-circle">✓</span>
                        Lead Tracking
                      </li>
                      <li className="feature-list-item">
                        <span className="feature-check-circle">✓</span>
                        Dashboard Access
                      </li>
                      <li className="feature-list-item">
                        <span className="feature-check-circle">✓</span>
                        Refund Review Available*
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Bottom Actions and Disclaimers inside the card */}
              <div className="pricing-card-footer">
                <button onClick={() => navigate('/register/worker')} className="get-started-btn">Get Started</button>
                <div className="footer-headline">Lead Nahi To Paisa Wapas*</div>
                <p className="pricing-footer-disclaimer">
                  *Refund eligibility is subject to GigDial Refund Policy and verification requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section className="faq-section" id="faq">
          <div className="faq-container">
            <h2 className="faq-section-title">Frequently Asked Questions</h2>
            
            <div className="faq-grid">
              {/* Column 1 */}
              <div className="faq-column">
                {/* FAQ 1 */}
                <div className={`faq-card ${activeFaq[0] ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                  <div className="faq-question-row">
                    <span className="faq-question-text">Q. GigDial kya hai?</span>
                    <span className="faq-arrow-icon">▼</span>
                  </div>
                  {activeFaq[0] && (
                    <div className="faq-answer-row">
                      <p className="faq-answer-text">
                        GigDial ek digital platform hai jo local service professionals aur customers ko direct connect karta hai bina kisi middleman ya commission ke.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className={`faq-card ${activeFaq[1] ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                  <div className="faq-question-row">
                    <span className="faq-question-text">Q. Lead kaise milti hai?</span>
                    <span className="faq-arrow-icon">▼</span>
                  </div>
                  {activeFaq[1] && (
                    <div className="faq-answer-row">
                      <p className="faq-answer-text">
                        Jab koi customer aapki category ki service search karta hai, toh GigDial direct customer leads aapke dashboard aur mobile number par bhejta hai.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className={`faq-card ${activeFaq[2] ? 'active' : ''}`} onClick={() => toggleFaq(2)}>
                  <div className="faq-question-row">
                    <span className="faq-question-text">Q. Subscription kaise kaam karta hai?</span>
                    <span className="faq-arrow-icon">▼</span>
                  </div>
                  {activeFaq[2] && (
                    <div className="faq-answer-row">
                      <p className="faq-answer-text">
                        GigDial par aapko monthly subscription lena hota hai (jaise ₹499/month). Iske baad aapko direct customer leads milti hain aur aapse koi commission nahi liya jata. Aap customer se direct deal kar sakte hain.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Column 2 */}
              <div className="faq-column">
                {/* FAQ 4 */}
                <div className={`faq-card ${activeFaq[3] ? 'active' : ''}`} onClick={() => toggleFaq(3)}>
                  <div className="faq-question-row">
                    <span className="faq-question-text">Q. Refund kab milega?</span>
                    <span className="faq-arrow-icon">▼</span>
                  </div>
                  {activeFaq[3] && (
                    <div className="faq-answer-row">
                      <p className="faq-answer-text">
                        Agar aapko hamare terms ke hisab se leads nahi milti hain, toh aap refund request daal sakte hain. Refund criteria details verification ke baad process kiye jaate hain.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className={`faq-card ${activeFaq[4] ? 'active' : ''}`} onClick={() => toggleFaq(4)}>
                  <div className="faq-question-row">
                    <span className="faq-question-text">Q. Customer aur worker ka direct contact hota hai?</span>
                    <span className="faq-arrow-icon">▼</span>
                  </div>
                  {activeFaq[4] && (
                    <div className="faq-answer-row">
                      <p className="faq-answer-text">
                        Haan! GigDial par customer aur worker ke beech direct contact hota hai. Aap direct customer ko call karke kaam aur rates final kar sakte hain.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Ready to Find Skilled Professionals Banner Section */}
      <div className="footer-banner-wrapper">
        <div className="footer-banner-container">
          <div className="banner-left-image">
            <img src={footerCityImg} alt="City Background" className="footer-city-img" />
            <img src={footermanImg} alt="Professional Worker" className="footerman-img" />
          </div>
          <div className="banner-content">
            <h2 className="banner-heading">Ready to Find Skilled Professionals?</h2>
            <p className="banner-subheading">Find trusted local workers in minutes.</p>
            <div className="banner-buttons">
              <a href="#services" className="btn-find-service">Find a Service</a>
              <Link to="/register" className="btn-join-gigdial">Join GigDial</Link>
            </div>
          </div>
          <div className="banner-right-image">
            <img src={footerphoneImg} alt="GigDial App Mockup" className="footerphone-img" />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="main-footer">
        <div className="footer-links-container">
          <div className="footer-columns-grid">
            {/* Column 1: Brand & Socials */}
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <img src={logoImg} alt="GigDial Logo" className="footer-logo-img" />
              </div>
              <p className="footer-desc">Connecting Local Skills with Local Needs.</p>
              <div className="social-links">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.3c-4.3 0-5.3 3.2-5.3 5.3v1.6H6v4h3v12h5v-12h3.8l.5-4z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="social-svg">
                    <path d="M23.498 6.163c-.272-.997-1.055-1.78-2.052-2.052C19.645 3.75 12 3.75 12 3.75s-7.645 0-9.446.361c-.997.272-1.78 1.055-2.052 2.052C.167 7.96.167 12 .167 12s0 4.04.361 5.837c.272.997 1.055 1.78 2.052 2.052 1.8.361 9.446.361 9.446.361s7.645 0 9.446-.361c.997-.272 1.78-1.055 2.052-2.052.361-1.797.361-5.837.361-5.837s0-4.04-.361-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="col-title">Quick Links</h4>
              <ul className="col-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><a href="#customers">For Customers</a></li>
                <li><Link to="/register">For Professionals</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
              </ul>
            </div>

            {/* Column 3: Policies */}
            <div className="footer-col">
              <h4 className="col-title">Policies</h4>
              <ul className="col-links">
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms & Conditions</Link></li>
                <li><Link to="/refund-policy">Refund Policy</Link></li>
                <li><Link to="/terms">Cancellation Policy</Link></li>
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="footer-col contact-col">
              <h4 className="col-title">Contact Us</h4>
              <p className="company-name">GigDial Private Limited</p>
              <p className="company-details">CIN: U82990GJ2025PTC179384</p>
              <p className="company-details">GSTIN: 24AAACG0880E1ZP</p>
              <div className="contact-info-list">
                <div className="contact-item">
                  <span className="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="contact-svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <div className="contact-emails">
                    <a href="mailto:support@gigdial.com" style={{color: 'inherit', textDecoration: 'none'}}>support@gigdial.com</a>
                    <a href="mailto:gigdial@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>gigdial@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="contact-svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </span>
                  <a href="tel:+919429258745" style={{color: 'inherit', textDecoration: 'none'}}>+91 94292 58745</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="contact-svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </span>
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2025 GigDial Private Limited. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {isServicesModalOpen && (
        <div className="services-modal-overlay" onClick={() => setIsServicesModalOpen(false)}>
          <div className="services-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="services-modal-header">
              <h2 className="services-modal-title">All Services Available on GigDial</h2>
              <button className="services-modal-close" onClick={() => setIsServicesModalOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="services-modal-search-wrapper">
              <Search className="services-modal-search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search services..." 
                className="services-modal-search-input"
                value={modalSearchQuery}
                onChange={(e) => setModalSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="services-modal-body">
              {filteredServicesGrouped.map(([category, items]) => (
                <div key={category} className="services-modal-category-section">
                  <h3 className="services-modal-category-title">{category}</h3>
                  <div className="services-modal-grid">
                    {items.map((srv) => {
                      const IconComponent = iconMap[srv.iconName] || Zap;
                      return (
                        <div 
                          key={srv.name} 
                          className="services-modal-card" 
                          onClick={() => {
                            setIsServicesModalOpen(false);
                            handleServiceClick(srv.name);
                          }}
                        >
                          <div className="services-modal-card-icon">
                            <IconComponent size={24} strokeWidth={2} />
                          </div>
                          <span className="services-modal-card-label">{srv.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              {filteredServicesGrouped.length === 0 && (
                <div className="services-modal-no-results">
                  No services found matching "{modalSearchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {isVisitorModalOpen && (
        <div className="visitor-modal-overlay">
          <div className="visitor-modal-content">
            <button className="visitor-modal-close" onClick={() => setIsVisitorModalOpen(false)}>
              <X size={20} />
            </button>
            <div className="visitor-modal-left">
              <div className="visitor-modal-badge">Special Welcome!</div>
              <h2 className="visitor-modal-title">Get the Best Local Pros Instantly</h2>
              <p className="visitor-modal-desc">
                Register as a visitor today and get connected with top-rated professionals in your city. Save time, pay zero commission, and get direct contacts.
              </p>
              <div className="visitor-modal-features">
                <div className="visitor-feat-item">
                  <span className="feat-check">✓</span> 1000+ Verified Experts
                </div>
                <div className="visitor-feat-item">
                  <span className="feat-check">✓</span> Zero Commission Fees
                </div>
                <div className="visitor-feat-item">
                  <span className="feat-check">✓</span> Direct WhatsApp/Call
                </div>
              </div>
            </div>
            
            <div className="visitor-modal-right">
              <h3 className="visitor-form-title">Enter Details to Continue</h3>
              <form onSubmit={handleVisitorSubmit} className="visitor-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Enter your name"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Enter 10-digit mobile"
                    pattern="[0-9]{10}"
                    value={visitorPhone}
                    onChange={(e) => setVisitorPhone(e.target.value)}
                  />
                </div>
                
                <button type="submit" className="visitor-submit-btn" disabled={visitorSubmitting}>
                  {visitorSubmitting ? 'Registering...' : 'Get Started Now'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
