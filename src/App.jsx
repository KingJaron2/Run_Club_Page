import React, { useState } from 'react';

const CREST_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuAnuoBZQr5LcZMTx58YIQStlLGH5Wl8tGA9WBZnEpUPeWT9nmaDaxA9CWCjMv14LvgkEtLpsx6ETulCWH3C0owtdltTmQVyrW2RwRnOSKoPBFnVXYsuAtqi1eHi-RcbwQlP58CmBgMFC29doMBTYmFeKa1Ps3nAa-NuY-AeIKmLpb5tYHMO4-C-zS4oN_HwzYTmeAE95bcEpeVXSxGC0OFGH7gqf8wsw19p3zJXHH1_YjwGcEH2glE7aA";
const EMBLEM_URL = CREST_URL;
const EASTMAN_CAMPUS_MAP_URL = "/aviationhall.png";
const COCHRAN_CAMPUS_MAP_URL = "/wellness.png";

// President photos
const LOGAN_PHOTO_URL = "/logan.png";
const ANDRE_PHOTO_URL = "/andre.png";

// Instagram Photos
const INSTA_PHOTO_1 = "/instaphoto1.png";
const INSTA_PHOTO_2 = "/instaphoto2.png";
const INSTA_PHOTO_3 = "/instaphoto3.png";

// Social & Community Links
const GROUPME_URL = "https://groupme.com/join_group/118524853/CwVVhVnN";
const STRAVA_URL = "https://www.strava.com/clubs/knightsrunclub";
const INSTAGRAM_URL = "https://www.instagram.com/knights_runningclub/"

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recipient: 'mgaknightsrunclub@gmail.com',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mgaknightsrunclub@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Knights Running Club Inquiry from ' + formData.name);
    const body = encodeURIComponent(formData.message + '\n\nReply-To: ' + formData.email + ' (' + formData.name + ')');
    setStatus(`Dispatch ready! Opening your email client to contact ${formData.recipient}...`);
    window.location.href = `mailto:${formData.recipient}?subject=${subject}&body=${body}`;
  
  // Reset all fields back to blank
  setFormData({
    name: '',
    email: '',
    recipient: 'mgaknightsrunclub@gmail.com',
    message: ''
  });

  // Clears "Dispatch read!" after 5 seconds
  setTimeout(() =>
  setStatus(''), 5000);
  
  };
  

  return (
    <div className="bg-background font-body-md text-body-md text-on-surface antialiased min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.35)] border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-space-sm group">
            <img 
              alt="Knights Running Club Emblem" 
              className="w-10 h-10 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform" 
              src={EMBLEM_URL} 
            />
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase group-hover:text-primary transition-colors">
              Knights Run Club
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-space-lg text-body-sm font-label-lg uppercase tracking-wider text-on-surface-variant">
            <a href="#campuses" className="hover:text-primary transition-colors">Campuses</a>
            <a href="#leadership" className="hover:text-primary transition-colors">Leadership</a>
            <a href="#community" className="hover:text-primary transition-colors">Community</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

        </div>

        {/* Mobile Nav Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-margin-mobile py-space-md bg-surface-container-high border-b border-outline-variant flex flex-col gap-space-sm shadow-2xl">
            <a 
              href="#campuses" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-space-xs text-body-md font-label-lg uppercase tracking-wider text-on-surface hover:text-primary border-b border-outline-variant/30"
            >
              Campuses &amp; Schedules
            </a>
            <a 
              href="#leadership" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-space-xs text-body-md font-label-lg uppercase tracking-wider text-on-surface hover:text-primary border-b border-outline-variant/30"
            >
              Executive Leadership
            </a>
            <a 
              href="#community" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-space-xs text-body-md font-label-lg uppercase tracking-wider text-on-surface hover:text-primary border-b border-outline-variant/30"
            >
              Digital Clubhouse
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-space-xs text-body-md font-label-lg uppercase tracking-wider text-on-surface hover:text-primary"
            >
              Contact Presidents
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="w-full pt-20 bg-background relative min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          
          {/* Hero Section */}
          <section className="relative w-full overflow-hidden bg-surface-container-lowest pt-space-xl pb-space-2xl">
            {/* Ambient atmospheric glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-tertiary-container/15 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                
                {/* Text & Action Column */}
                <div className="lg:col-span-8 flex flex-col gap-space-lg">

                  {/* Main Bold Headline */}
                  <div className="flex flex-col">
                    <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero uppercase tracking-tight text-on-surface leading-[1.15]">
                      <span className="block">STEEL YOUR STRIDE.</span>
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        RUN WITH PRIDE.
                      </span>
                      <span className="block">SIDE BY SIDE.</span>
                    </h1>
                    <p className="font-body-md sm:font-body-lg text-body-md sm:text-body-lg text-on-surface-variant max-w-2xl mt-space-md leading-relaxed">
                      Two campuses, one club. Whether you're a first time runner or a veteran, we are welcoming of every single person.
                    </p>
                  </div>

                  {/* CTAs Hub */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <a 
                      className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_32px_-8px_rgba(138,43,226,0.6)] hover:bg-surface-bright transition-all" 
                      href={GROUPME_URL} 
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 2.22.723 4.27 1.95 5.932L3.1 21.2a.75.75 0 00.95.95l3.268-.85A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.75 12.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
                      </svg>
                      Join Our GroupMe
                    </a>

                    <a 
                      className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-lg bg-tertiary-container text-on-tertiary-container font-label-lg text-label-lg uppercase tracking-wider hover:bg-tertiary hover:text-on-tertiary shadow-[0_8px_24px_rgba(0,113,97,0.35)] transition-all" 
                      href={STRAVA_URL}
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.925 15.688h4.17" />
                      </svg>
                      Join Strava Club
                    </a>

                    <a 
                      className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-bright font-label-lg text-label-lg uppercase tracking-wider transition-all" 
                      href={INSTAGRAM_URL}
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Follow @knights_runningclub
                    </a>
                  </div>
                </div>

                {/* Official Club Emblem / Visual Column */}
                <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-container/30 to-tertiary/15 blur-2xl animate-pulse pointer-events-none"></div>
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <img 
                        alt="Knights Running Club Official Crest" 
                        className="w-full h-full object-contain rounded-full drop-shadow-[0_16px_40px_rgba(138,43,226,0.65)] hover:scale-105 transition-transform duration-500" 
                        src={CREST_URL} 
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Dual-Campus Run Schedules & Spots */}
          <section className="w-full py-space-2xl bg-surface-container-lowest" id="campuses">
            <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
              {/* Section Header */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md text-primary tracking-widest uppercase">Weekly Locations &amp; Logistics</span>
                <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">Two Campuses. Four Weekly Runs.</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  Choose either campus near you or whichever one fits your schedule.
                </p>
              </div>

              {/* Split Campus Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                
                {/* Campus 1: Cochran Campus */}
                <div className="bg-surface-container rounded-xl overflow-hidden flex flex-col shadow-xl border border-outline-variant/20">
                  {/* Card Top Bar */}
                  <div className="p-space-lg bg-surface-container-high flex items-center justify-between border-b border-outline-variant/20">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">Cochran Campus</span>
                    </div>
                    <span className="px-space-sm py-space-xs rounded bg-primary-container/30 text-on-primary-container font-label-md text-label-md">Led by Logan Camp</span>
                  </div>

                  {/* Schedule Badges */}
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-xs border border-outline-variant/10">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary">calendar_today</span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface">Tuesday • 6:00 PM</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">1.5 mile run</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-xs border border-outline-variant/10">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary">calendar_today</span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface">Saturday • 6:00 PM</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">4 mile run</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Map Frame */}
                  <div className="px-space-lg">
                    <div className="relative rounded-lg overflow-hidden bg-surface-container-lowest h-60 border border-outline-variant/20">
                      <div 
                        className="w-full h-full bg-cover bg-center" 
                        data-location="Wellness Center Cochran Campus" 
                        style={{ backgroundImage: `url("${COCHRAN_CAMPUS_MAP_URL}")` }}
                      ></div>
                      {/* Floating Overlay Tags */}
                      <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded font-label-md text-label-md text-on-surface flex items-center gap-space-xs shadow">
                        <span className="material-symbols-outlined text-tertiary text-[18px]">location_on</span>
                        <span>Outside Wellness Center</span>
                      </div>
                    </div>
                  </div>

                  {/* Logistics Button */}
                  <div className="p-space-lg flex flex-col gap-space-sm mt-auto">
                    <div className="pt-space-md">
                      <a 
                        className="w-full py-space-sm rounded-lg bg-surface-bright hover:bg-primary-container hover:text-on-primary-container text-on-surface text-center font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-space-xs transition-colors shadow" 
                        href="https://www.google.com/maps/place/Wellness+Center/@32.3811498,-83.3437812,17z/data=!3m1!4b1!4m6!3m5!1s0x88f16f0f78489f65:0xdfa2f354d1cda311!8m2!3d32.3811453!4d-83.3412009!16s%2Fg%2F11hfylcvrx?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">directions</span>
                        Get Cochran Campus Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Campus 2: Eastman Campus */}
                <div className="bg-surface-container rounded-xl overflow-hidden flex flex-col shadow-xl border border-outline-variant/20">
                  {/* Card Top Bar */}
                  <div className="p-space-lg bg-surface-container-high flex items-center justify-between border-b border-outline-variant/20">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-3 h-3 rounded-full bg-tertiary animate-pulse"></span>
                      <span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">Eastman Campus</span>
                    </div>
                    <span className="px-space-sm py-space-xs rounded bg-tertiary-container/30 text-on-tertiary-container font-label-md text-label-md">Led by Andre Byrd</span>
                  </div>

                  {/* Schedule Badges */}
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-xs border border-outline-variant/10">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-tertiary">calendar_today</span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface">Tuesday • 5:00 PM</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">5k run</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-xs border border-outline-variant/10">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-tertiary">calendar_today</span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface">Thursday • 5:00 PM</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">1 mile run</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Map Frame */}
                  <div className="px-space-lg">
                    <div className="relative rounded-lg overflow-hidden bg-surface-container-lowest h-60 border border-outline-variant/20">
                      <div 
                        className="w-full h-full bg-cover bg-center" 
                        data-location="Aviation Hall Lobby Eastman Campus" 
                        style={{ backgroundImage: `url("${EASTMAN_CAMPUS_MAP_URL}")` }}
                      ></div>
                      {/* Floating Overlay Tags */}
                      <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded font-label-md text-label-md text-on-surface flex items-center gap-space-xs shadow">
                        <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                        <span>Aviation Hall Lobby</span>
                      </div>
                    </div>
                  </div>

                  {/* Logistics Button */}
                  <div className="p-space-lg flex flex-col gap-space-sm mt-auto">
                    <div className="pt-space-md">
                      <a 
                        className="w-full py-space-sm rounded-lg bg-surface-bright hover:bg-tertiary hover:text-on-tertiary text-on-surface text-center font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-space-xs transition-colors shadow" 
                        href="https://www.google.com/maps/place/Aviation+Hall/@32.2122718,-83.1290388,17z/data=!4m6!3m5!1s0x88f109aa48ccf7c9:0x59b26aaa325f23bb!8m2!3d32.2122718!4d-83.1264639!16s%2Fg%2F1hm1_hb69?entry=ttu&g_ep=EgoyMDI2MTAyOC4wIKXMDSoASAFQAw%3D%3D" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">directions</span>
                        Get Eastman Campus Directions
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>


          {/* Leadership & Co-Presidents Directory */}
          <section className="w-full py-space-2xl bg-surface-container-lowest" id="leadership">
            <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
              {/* Section Header */}
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md text-primary tracking-widest uppercase">Executive Leadership</span>
                <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">Meet Your Presidents</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  Leading each run, charting each route, pacing each other without a doubt. 
                </p>
              </div>

              {/* Leaders Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                
                {/* Co-President 1: Logan Camp */}
                <div className="bg-surface-container rounded-xl p-space-lg flex flex-col md:flex-row gap-space-lg shadow-lg border border-outline-variant/20">
                  <div className="w-full md:w-48 h-64 shrink-0 rounded-lg overflow-hidden relative border border-outline-variant/20">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Logan Camp Cochran President" 
                      src={LOGAN_PHOTO_URL} 
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <div className="font-label-md text-label-md text-primary uppercase">Cochran Campus Lead • Tues &amp; Sat</div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">Logan Camp</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        5 years of varsity cross country and long distance track, multiple state championships, and a drive to help others reach their running goals.
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs pt-space-xs">
                      <a 
                        className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm hover:text-primary transition-colors" 
                        href="mailto:logan.camp@mga.edu"
                      >
                        <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
                        logan.camp@mga.edu
                      </a>
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[18px]">phone</span>
                        (478) 308-0768
                      </div>
                      <a 
                        className="flex items-center gap-space-xs text-secondary font-label-md text-label-md hover:underline pt-space-xs" 
                        href="https://www.instagram.com/logancamp2/" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">alternate_email</span>
                        @logancamp2
                      </a>
                    </div>
                  </div>
                </div>

                {/* Co-President 2: Andre Byrd */}
                <div className="bg-surface-container rounded-xl p-space-lg flex flex-col md:flex-row gap-space-lg shadow-lg border border-outline-variant/20">
                  <div className="w-full md:w-48 h-64 shrink-0 rounded-lg overflow-hidden relative border border-outline-variant/20">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Andre Byrd President" 
                      src={ANDRE_PHOTO_URL} 
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <div className="font-label-md text-label-md text-tertiary uppercase">Eastman Campus Lead • Tues &amp; Thurs</div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">Andre Byrd</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        I am an RA for the school, I ran cross country while in high school, and I've been the president for the Eastman Campus run club for 2 semesters now.
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs pt-space-xs">
                      <a 
                        className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm hover:text-tertiary transition-colors" 
                        href="mailto:andre.byrd@mga.edu"
                      >
                        <span className="material-symbols-outlined text-[18px] text-tertiary">mail</span>
                        andre.byrd@mga.edu
                      </a>
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[18px]">phone</span>
                        (706) 308-6812
                      </div>
                      <a 
                        className="flex items-center gap-space-xs text-tertiary-fixed font-label-md text-label-md hover:underline pt-space-xs" 
                        href="https://instagram.com/byrdandre2k6"
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">alternate_email</span>
                        @byrdandre2k6
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Community Hub: GroupMe, Strava & Instagram */}
          <section className="w-full py-space-2xl bg-surface" id="community">
            <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-md text-label-md text-primary tracking-widest uppercase">Digital Clubhouse</span>
                  <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">Stay Connected 24/7</h2>
                </div>
              </div>

              {/* 4 Community Cards */}
              <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
                
                {/* GroupMe */}
                <div className="bg-surface-container rounded-xl p-space-xl flex flex-col justify-between gap-space-lg shadow-lg border border-outline-variant/20">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[28px]">forum</span>
                      </div>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">Official GroupMe</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Easy way for you to talk with fellow runners and stay updated on club activities.</p>
                  </div>
                  <a 
                    className="w-full py-space-sm rounded-lg bg-primary text-on-primary text-center font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-fixed transition-colors font-bold shadow" 
                    href={GROUPME_URL}
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    Open GroupMe Channel
                  </a>
                </div>

                {/* Strava */}
                <div className="bg-surface-container rounded-xl p-space-xl flex flex-col justify-between gap-space-lg shadow-lg border border-outline-variant/20">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[28px]">monitoring</span>
                      </div>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">Knights Strava Club</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Track weekly group mileage and compete friendly on campus sprint segments.</p>
                  </div>
                  <a 
                    className="w-full py-space-sm rounded-lg bg-tertiary-container text-on-tertiary-container text-center font-label-lg text-label-lg uppercase tracking-wider hover:bg-tertiary hover:text-on-tertiary transition-colors shadow" 
                    href={STRAVA_URL} 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    Connect on Strava
                  </a>
                </div>

                {/* Instagram */}
                <div className="bg-surface-container rounded-xl p-space-xl flex flex-col justify-between gap-space-lg shadow-lg border border-outline-variant/20">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[28px]">photo_camera</span>
                      </div>
                      <span className="px-space-sm py-space-xs rounded bg-surface-bright text-on-surface font-label-md text-label-md">@knights_runningclub</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">Instagram Showcase</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Weekly run photos, monthly poster posts, and special event announcements.</p>
                    <div className="grid grid-cols-3 gap-space-xs mt-space-xs rounded-lg overflow-hidden">
                      <div 
                        className="h-20 bg-cover bg-center rounded" 
                        style={{ backgroundImage: `url("${INSTA_PHOTO_1}")` }}
                      ></div>
                      <div 
                        className="h-20 bg-cover bg-center rounded" 
                        style={{ backgroundImage: `url("${INSTA_PHOTO_2}")` }}
                      ></div>
                      <div 
                        className="h-20 bg-cover bg-center rounded" 
                        style={{ backgroundImage: `url("${INSTA_PHOTO_3}")` }}
                      ></div>
                    </div>
                  </div>
                  <a 
                    className="w-full py-space-sm rounded-lg bg-surface-bright text-on-surface text-center font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-colors shadow" 
                    href={INSTAGRAM_URL} 
                    rel="noopener noreferrer" 
                    target="_blank"
                  >
                    Follow on Instagram
                  </a>
                </div>

                {/* Official Email */}
                <div className="bg-surface-container rounded-xl p-space-xl flex flex-col justify-between gap-space-lg shadow-lg border border-outline-variant/20">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-lg bg-primary-container/30 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-[28px]">mark_email_unread</span>
                      </div>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">Official Club Email</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Direct line to campus presidents about club matters, inquiries, and fun ideas.</p>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between gap-space-xs mt-space-xs border border-outline-variant/10">
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-primary uppercase">Official Dispatch</span>
                        <span className="font-body-sm text-body-sm text-on-surface truncate">mgaknightsrunclub@gmail.com</span>
                      </div>
                      <button 
                        className="p-space-xs rounded bg-surface-bright text-on-surface hover:bg-surface-container-high transition-colors shrink-0" 
                        onClick={handleCopyEmail}
                        title="Copy email address" 
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {copied ? 'done' : 'content_copy'}
                        </span>
                      </button>
                    </div>
                  </div>
                  <a 
                    className="w-full py-space-sm rounded-lg bg-primary-container text-on-primary-container text-center font-label-lg text-label-lg uppercase tracking-wider hover:bg-surface-bright transition-all shadow-[0_4px_16px_rgba(138,43,226,0.4)]" 
                    href="mailto:mgaknightsrunclub@gmail.com"
                  >
                    Email Us
                  </a>
                </div>

              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="w-full py-space-2xl bg-surface" id="contact">
            <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
              <div className="bg-surface-container-low rounded-xl p-space-xl shadow-lg border border-outline-variant/20">
                <div className="max-w-2xl mx-auto flex flex-col gap-space-lg">
                  <div className="text-center flex flex-col gap-space-xs">
                    <span className="font-label-md text-label-md text-primary tracking-widest uppercase">Get In Touch</span>
                    <h3 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">Drop the Presidents a Note</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Questions about events going on, meeting times or place, or ideas about an event to do for the club</p>
                  </div>

                  <form className="flex flex-col gap-space-md" id="contact-presidents-form" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="sender-name">Your Full Name</label>
                        <input 
                          className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-outline-variant" 
                          id="sender-name" 
                          placeholder="Alex Morgan" 
                          required 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="flex flex-col gap-space-xs">
                        <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="sender-email">Email Address</label>
                        <input 
                          className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md border border-outline-variant" 
                          id="sender-email" 
                          placeholder="alex@campus.edu" 
                          required 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-md text-label-md uppercase text-on-surface-variant flex items-center justify-between" htmlFor="recipient-select">
                        <span>Direct Message To</span>
                        <span className="font-body-sm text-body-sm text-outline capitalize font-normal">Select squad leader</span>
                      </label>
                      <div className="relative w-full">
                        <select 
                          className="w-full appearance-none bg-surface-container-high text-on-surface border border-outline-variant rounded-lg px-space-md py-space-sm pr-10 focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md cursor-pointer transition-colors shadow-sm relative z-10" 
                          id="recipient-select"
                          value={formData.recipient}
                          onChange={(e) => setFormData({...formData, recipient: e.target.value})}
                        >
                          <option className="bg-surface-container-high text-on-surface py-2" value="mgaknightsrunclub@gmail.com">Both Presidents (General Questions) — mgaknightsrunclub@gmail.com</option>
                          <option className="bg-surface-container-high text-on-surface py-2" value="logan.camp@mga.edu">Logan Camp (Cochran Campus Lead) — logan.camp@mga.edu</option>
                          <option className="bg-surface-container-high text-on-surface py-2" value="andre.byrd@mga.edu">Andre Byrd (Eastman Campus Lead) — andre.byrd@mga.edu</option>
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant flex items-center justify-center z-10">
                          <span className="material-symbols-outlined text-[20px]">expand_more</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-md text-label-md uppercase text-on-surface-variant" htmlFor="message-text">Your Message</label>
                      <textarea 
                        className="px-space-md py-space-sm rounded-lg bg-surface-container-high text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md resize-none border border-outline-variant" 
                        id="message-text" 
                        placeholder="Hey team! I usually run an 11:30 pace and wanted to double check if Thursday's 5K is suitable for me..." 
                        required 
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button 
                      className="w-full py-space-md rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider hover:bg-surface-bright transition-all shadow-[0_4px_16px_rgba(138,43,226,0.4)] flex items-center justify-center gap-space-xs" 
                      type="submit"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>Email Selected President</span>
                    </button>

                    {status && (
                      <div className="text-center p-space-sm rounded bg-tertiary-container/30 text-on-tertiary-container font-body-sm text-body-sm" id="contact-status">
                        {status}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest py-space-2xl border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-6 flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <img 
                  alt="Knights Running Club Emblem" 
                  className="w-8 h-8 rounded-full object-cover" 
                  src={EMBLEM_URL} 
                />
                <span className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-wide">
                  Knights Running Club
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Urban distance running &amp; inclusive campus community established in 2024. All paces welcome.
              </p>
              <div className="flex items-center gap-space-sm text-body-sm text-outline pt-space-xs">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <span>Cochran Campus &amp; Eastman Campus Chapters</span>
              </div>
              <div className="flex items-center gap-space-xs pt-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary">alternate_email</span>
                <a className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors" href="mailto:mgaknightsrunclub@gmail.com">
                  mgaknightsrunclub@gmail.com
                </a>
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col gap-space-md md:items-end">
              <div className="flex flex-col gap-space-xs md:text-right">
                <span className="font-label-lg text-label-lg text-primary uppercase tracking-wider">Two-Campus Run Schedule</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <span className="text-on-surface font-label-md text-label-md">Cochran Campus:</span> Tuesday 6:00 PM &amp; Saturday 6:00 PM
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <span className="text-on-surface font-label-md text-label-md">Eastman Campus:</span> Tuesday 5:00 PM &amp; Thursday 5:00 PM
                </p>
              </div>

              <div className="flex items-center gap-space-md pt-space-xs">
                <a 
                  aria-label="GroupMe" 
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-bright transition-all shadow" 
                  href={GROUPME_URL} 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 2.22.723 4.27 1.95 5.932L3.1 21.2a.75.75 0 00.95.95l3.268-.85A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.75 12.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
                  </svg>
                </a>
                <a 
                  aria-label="Strava" 
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-tertiary hover:bg-surface-bright transition-all shadow" 
                  href={STRAVA_URL} 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.925 15.688h4.17" />
                  </svg>
                </a>
                <a 
                  aria-label="Instagram" 
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-secondary hover:bg-surface-bright transition-all shadow" 
                  href={INSTAGRAM_URL} 
                  rel="noopener noreferrer" 
                  target="_blank"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
