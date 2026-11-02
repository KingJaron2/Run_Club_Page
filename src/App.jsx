import React, { useState } from 'react';

const CREST_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuAnuoBZQr5LcZMTx58YIQStlLGH5Wl8tGA9WBZnEpUPeWT9nmaDaxA9CWCjMv14LvgkEtLpsx6ETulCWH3C0owtdltTmQVyrW2RwRnOSKoPBFnVXYsuAtqi1eHi-RcbwQlP58CmBgMFC29doMBTYmFeKa1Ps3nAa-NuY-AeIKmLpb5tYHMO4-C-zS4oN_HwzYTmeAE95bcEpeVXSxGC0OFGH7gqf8wsw19p3zJXHH1_YjwGcEH2glE7aA";
const EMBLEM_URL = "https://lh3.googleusercontent.com/aida/AEtjO1WVYogmAkmw84Hqh1gAZooM4lCIMm8iYFTwKY3ZbaTi2ghC1ArPb6JQfQrKeXb5Im7ZdQGLdYLk_-dZaxDuJnaPa0Fya4pOQ_ylXW_uH5TUj__TZxUOy8tTNWZsizHbjjxHXaFE0P2m3hXf4zPbok7iF9P48JE9s1e4A_wHmcOlOJYZuxUfM90jry30HtWCn7MHERO22EKxzg3tMa8kkQfIM2-nMxRLcTdBibpKIw9HWk348BzAymjCer8";
const EAST_CAMPUS_MAP_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuALbuWRFyMWX91Cx9yWDw1MbWhQ63vMpzrTWarJHkRrvgW7_xa_Gal2xm1si5pFwHUkvK2_bsyAQLeA8Nj5fQpyZiWJk-oqMisLqjBxRTgfDo5_TnIbJ8q7u1t3eDoi9m7NPRBlyIrtotExetd7QhPmJ1AN4TaLUq-0L41npU2302eGOnKip4kVcsWh8gnHKKvKOufl5B1YuVVk_tOZFoRQgVJkJaXSly853yhOzceP";
const MAIN_CAMPUS_MAP_URL = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80";

const MARCUS_PHOTO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuArbUSJMRKKKLFxevUHS5H7TYzniEWLiJI6WBMxOb68nB34VsnpYbCNJ4PIXjbzB311W0ssnY4vQm819wbbu-Wcyy_Ha8OHe0U_gWgV9PG0RtO0t2X4AJJT0bjEawygEt227g-6ezDsps8LjStovQP1sTEl1pWf0msVIJWn4LY8NRydD6oHI05FPhVNKmKLZbngJpAvrODRk_yRCZ8IvbblTRsMNenSJ3lhpuhx0ARI";
const ELENA_PHOTO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuACDVo5ocFTgAXVw43Zhhq6F6XOQoxLo3grsPGMRMtQSGmnHzCWJFTqIbDdJHJc53XrruZwXRAXRKPjXgDOnlcn3pCwTrHMuk7UxCkzJsXxfQugzqucuyHPkEXDxj5lK6s7b64UV9eAr3938zbq8cir48m4zUg-H7DXdXeeOzMVNhOQoyPr5uGNOTUIXQJOcYtBAhbVlmIKXLjbzY9XTHSeNYjwVxskrmndHplDZ3b2";

const INSTA_PHOTO_1 = "https://lh3.googleusercontent.com/aida-public/AB6AXuAWQ4ag_JmvaH6Iq9VPN75o0OwVQCaW6eCIfS_-MZr3B_e57uFkogCn5F0my-Lc-c_5ClRAw6fkzieBuwoGijoOPjzXHw_7Q_n4CFlvzPbk4DQe6TyCE3QX_rI6cKPPYu48mibW5N9-Fggd0BhQkOVqD9b3kjpk9M99QFROmpKCsW-bkOZ9A8xEp5bWiUjzBmA3OScu7grg68t594HzzwhQsxhvsTUAiqHqkiom1Ox6";
const INSTA_PHOTO_2 = "https://lh3.googleusercontent.com/aida-public/AB6AXuBuGEdczSc13FFFDkE7vvrEqqc9PiaphM36grUcTDIFhUaGyOH5NkViG4LKTipHQy-4pzK_WRuN0eBhSp_GrWRzgNbZE9Tj2M6msflAOKgnrDJJrzsYyNl9knZxjgLYGjjrgYLthd4PXHKaPreYGV5d7o4d_-6MKOEv74l2N8n0YN8XCiExYCZcIPjjq5VIfNAe4TcODhD92g8BUAI5kuelRUTPB_rVQ88e13613I0_";
const INSTA_PHOTO_3 = "https://lh3.googleusercontent.com/aida-public/AB6AXuDO6zcsyuIWUiKtE4o7Anu9ZXFh-CtEnQbW9ANYXFuqrc9fLlD0d53nUl4JFDnfJiDJTNthLDTVs6Mq7kZzUL5V9Pn9C98SrLaJsMeIQq_MNfsrZXgr5JVg71YNpKd55vFLOE3zcPXhaPHA-P2cK95Al7fEMHlo5xs1VFdb9_RN3yEJQyi3oTHOYz91mtA1GS1Ppu4gZhIw5o1P17hqpstUx7rGCQb6hCekKOnKmekb";

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recipient: 'contact@knightsrunningclub.com',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@knightsrunningclub.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Knights Running Club Inquiry from ' + formData.name);
    const body = encodeURIComponent(formData.message + '\n\nReply-To: ' + formData.email + ' (' + formData.name + ')');
    setStatus(`Dispatch ready! Opening your email client to contact ${formData.recipient}...`);
    window.location.href = `mailto:${formData.recipient}?subject=${subject}&body=${body}`;
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
              Knights Running Club
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-space-lg text-body-sm font-label-lg uppercase tracking-wider text-on-surface-variant">
            <a href="#campuses" className="hover:text-primary transition-colors">Campuses</a>
            <a href="#leadership" className="hover:text-primary transition-colors">Leadership</a>
            <a href="#community" className="hover:text-primary transition-colors">Community</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-space-sm">
            <a 
              href="https://groupme.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider shadow-[0_4px_16px_rgba(138,43,226,0.4)] hover:bg-surface-bright transition-all"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 2.22.723 4.27 1.95 5.932L3.1 21.2a.75.75 0 00.95.95l3.268-.85A9.954 9.954 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm3.75 12.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
              </svg>
              <span>Join GroupMe</span>
            </a>

            {/* Mobile Nav Toggle */}
            <button 
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-space-xs text-on-surface-variant hover:text-on-surface focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
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
                  {/* Super Badge */}
                  <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-secondary-container/40 text-on-secondary-container shadow-[0_0_24px_rgba(138,43,226,0.25)] w-fit">
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
                    <span className="font-label-md text-label-md tracking-wide">STAY ACTIVE • SPRING 2026 TRAINING SCHEDULE LIVE</span>
                  </div>

                  {/* Main Bold Headline */}
                  <div className="flex flex-col">
                    <h1 className="font-display-hero text-display-hero uppercase tracking-tight text-on-surface">
                      LACE UP. <br className="hidden sm:inline" />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">RUN TOGETHER.</span> <br />
                      KNIGHT PACE.
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-md leading-relaxed">
                      Two campuses, one pack. Whether you're chasing sub-7 minute splits or completing your very first 5K loop, your pack runs right here with the Knights.
                    </p>
                  </div>

                  {/* CTAs Hub */}
                  <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                    <a 
                      className="inline-flex items-center gap-space-sm px-space-lg py-space-md rounded-lg bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_32px_-8px_rgba(138,43,226,0.6)] hover:bg-surface-bright transition-all" 
                      href="https://groupme.com" 
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
                      href="https://strava.com" 
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
                      href="https://instagram.com" 
                      rel="noopener noreferrer" 
                      target="_blank"
                    >
                      <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      Follow @KnightsRunningClub
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
                  Choose the campus nearest to your dorm, apartment, or office. Both squads unite for joint monthly half-marathon simulations and race day cheer stations.
                </p>
              </div>

              {/* Split Campus Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
                
                {/* Campus 1: Main Campus */}
                <div className="bg-surface-container rounded-xl overflow-hidden flex flex-col shadow-xl border border-outline-variant/20">
                  {/* Card Top Bar */}
                  <div className="p-space-lg bg-surface-container-high flex items-center justify-between border-b border-outline-variant/20">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">CAMPUS 01 • MAIN CAMPUS</span>
                    </div>
                    <span className="px-space-sm py-space-xs rounded bg-primary-container/30 text-on-primary-container font-label-md text-label-md">Led by Marcus Vance</span>
                  </div>

                  {/* Schedule Badges */}
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-xs border border-outline-variant/10">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary">calendar_today</span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface">Tuesday • 6:30 PM</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Track &amp; Speed Drills (400m/800m Repeats)</div>
                        </div>
                      </div>
                      <span className="font-label-md text-label-md text-primary uppercase">North Track Bleachers</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-xs border border-outline-variant/10">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary">calendar_today</span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface">Thursday • 7:00 PM</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Downtown 5K Social Loop + Tacos</div>
                        </div>
                      </div>
                      <span className="font-label-md text-label-md text-primary uppercase">Student Rec Plaza</span>
                    </div>
                  </div>

                  {/* Interactive Map Frame */}
                  <div className="px-space-lg">
                    <div className="relative rounded-lg overflow-hidden bg-surface-container-lowest h-60 border border-outline-variant/20">
                      <div 
                        className="w-full h-full bg-cover bg-center" 
                        data-location="University Main Campus Athletics Track" 
                        style={{ backgroundImage: `url("${MAIN_CAMPUS_MAP_URL}")` }}
                      ></div>
                      {/* Floating Overlay Tags */}
                      <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded font-label-md text-label-md text-on-surface flex items-center gap-space-xs shadow">
                        <span className="material-symbols-outlined text-tertiary text-[18px]">location_on</span>
                        <span>North Track &amp; Rec Plaza</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded font-label-md text-label-md text-secondary shadow">
                        <span>Free Garage B Parking</span>
                      </div>
                    </div>
                  </div>

                  {/* Logistics Button */}
                  <div className="p-space-lg flex flex-col gap-space-sm mt-auto">
                    <div className="pt-space-md">
                      <a 
                        className="w-full py-space-sm rounded-lg bg-surface-bright hover:bg-primary-container hover:text-on-primary-container text-on-surface text-center font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-space-xs transition-colors shadow" 
                        href="https://maps.google.com" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">directions</span>
                        Get Main Campus Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Campus 2: East Campus */}
                <div className="bg-surface-container rounded-xl overflow-hidden flex flex-col shadow-xl border border-outline-variant/20">
                  {/* Card Top Bar */}
                  <div className="p-space-lg bg-surface-container-high flex items-center justify-between border-b border-outline-variant/20">
                    <div className="flex items-center gap-space-sm">
                      <span className="w-3 h-3 rounded-full bg-tertiary animate-pulse"></span>
                      <span className="font-label-lg text-label-lg uppercase tracking-wider text-on-surface">CAMPUS 02 • EAST CAMPUS</span>
                    </div>
                    <span className="px-space-sm py-space-xs rounded bg-tertiary-container/30 text-on-tertiary-container font-label-md text-label-md">Led by Elena Rodriguez</span>
                  </div>

                  {/* Schedule Badges */}
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-xs border border-outline-variant/10">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-tertiary">calendar_today</span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface">Wednesday • 6:45 PM</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Sunset River Trail Recovery (4-5 Miles)</div>
                        </div>
                      </div>
                      <span className="font-label-md text-label-md text-tertiary uppercase">Lake Park Pavilion</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-xs border border-outline-variant/10">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-tertiary">calendar_today</span>
                        <div>
                          <div className="font-headline-sm text-headline-sm text-on-surface">Saturday • 8:00 AM</div>
                          <div className="font-body-sm text-body-sm text-on-surface-variant">Long Run (6-12 Miles) + Bagel Mile Social</div>
                        </div>
                      </div>
                      <span className="font-label-md text-label-md text-tertiary uppercase">Trailhead Bench #4</span>
                    </div>
                  </div>

                  {/* Interactive Map Frame */}
                  <div className="px-space-lg">
                    <div className="relative rounded-lg overflow-hidden bg-surface-container-lowest h-60 border border-outline-variant/20">
                      <div 
                        className="w-full h-full bg-cover bg-center" 
                        data-location="East River Lake Park Pavilion and Trailhead" 
                        style={{ backgroundImage: `url("${EAST_CAMPUS_MAP_URL}")` }}
                      ></div>
                      {/* Floating Overlay Tags */}
                      <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded font-label-md text-label-md text-on-surface flex items-center gap-space-xs shadow">
                        <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                        <span>Lake Park Pavilion &amp; Trailhead</span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-space-md py-space-xs rounded font-label-md text-label-md text-tertiary shadow">
                        <span>Free Trailhead Lot</span>
                      </div>
                    </div>
                  </div>

                  {/* Logistics Button */}
                  <div className="p-space-lg flex flex-col gap-space-sm mt-auto">
                    <div className="pt-space-md">
                      <a 
                        className="w-full py-space-sm rounded-lg bg-surface-bright hover:bg-tertiary hover:text-on-tertiary text-on-surface text-center font-label-lg text-label-lg uppercase tracking-wider flex items-center justify-center gap-space-xs transition-colors shadow" 
                        href="https://maps.google.com" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">directions</span>
                        Get East Campus Directions
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
                <h2 className="font-headline-lg text-headline-lg uppercase text-on-surface tracking-tight">Meet Your Co-Presidents</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  Guiding every route, curating structured training plans, and making sure nobody finishes without high fives and community support.
                </p>
              </div>

              {/* Leaders Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                
                {/* Co-President 1: Marcus Vance */}
                <div className="bg-surface-container rounded-xl p-space-lg flex flex-col md:flex-row gap-space-lg shadow-lg border border-outline-variant/20">
                  <div className="w-full md:w-48 h-64 shrink-0 rounded-lg overflow-hidden relative border border-outline-variant/20">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Marcus Vance Co-President" 
                      src={MARCUS_PHOTO_URL} 
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <div className="font-label-md text-label-md text-primary uppercase">Main Campus Lead • Tues &amp; Thurs</div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">Marcus Vance</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Route architect and track enthusiast. Marcus designs interval progressions, threshold pyramids, and ensures every runner masters pace regulation without burning out.
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs pt-space-xs">
                      <a 
                        className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm hover:text-primary transition-colors" 
                        href="mailto:marcus@knightsrunningclub.com"
                      >
                        <span className="material-symbols-outlined text-[18px] text-primary">mail</span>
                        marcus@knightsrunningclub.com
                      </a>
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[18px]">phone</span>
                        (555) 019-2834
                      </div>
                      <a 
                        className="flex items-center gap-space-xs text-secondary font-label-md text-label-md hover:underline pt-space-xs" 
                        href="https://instagram.com" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">alternate_email</span>
                        @marcus_runs_pace
                      </a>
                    </div>
                  </div>
                </div>

                {/* Co-President 2: Elena Rodriguez */}
                <div className="bg-surface-container rounded-xl p-space-lg flex flex-col md:flex-row gap-space-lg shadow-lg border border-outline-variant/20">
                  <div className="w-full md:w-48 h-64 shrink-0 rounded-lg overflow-hidden relative border border-outline-variant/20">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Elena Rodriguez Co-President" 
                      src={ELENA_PHOTO_URL} 
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <div className="font-label-md text-label-md text-tertiary uppercase">East Campus Lead • Wed &amp; Sat</div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">Elena Rodriguez</h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                        Marathoner and community champion. Elena champions scenic trail routing, weekend distance conditioning, and spearheads post-run social connections across both campuses.
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs pt-space-xs">
                      <a 
                        className="flex items-center gap-space-xs text-on-surface font-body-sm text-body-sm hover:text-tertiary transition-colors" 
                        href="mailto:elena@knightsrunningclub.com"
                      >
                        <span className="material-symbols-outlined text-[18px] text-tertiary">mail</span>
                        elena@knightsrunningclub.com
                      </a>
                      <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[18px]">phone</span>
                        (555) 018-3722
                      </div>
                      <a 
                        className="flex items-center gap-space-xs text-tertiary-fixed font-label-md text-label-md hover:underline pt-space-xs" 
                        href="https://instagram.com" 
                        rel="noopener noreferrer" 
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[18px]">alternate_email</span>
                        @elena_knightsmiles
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
                      <span className="px-space-sm py-space-xs rounded bg-surface-bright text-on-surface font-label-md text-label-md">300+ Members</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">Official GroupMe</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">The beating heart of daily club communications. Live rain delay alerts, carpools to weekend races, shoe recommendations, and weekend bagel polls.</p>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex items-center gap-space-md mt-space-xs border border-outline-variant/10">
                      <span className="material-symbols-outlined text-[36px] text-primary">qr_code_2</span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface">Scan &amp; Instant Join</span>
                        <span className="font-body-sm text-body-sm text-outline">Open to student body &amp; alumni</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    className="w-full py-space-sm rounded-lg bg-primary text-on-primary text-center font-label-lg text-label-lg uppercase tracking-wider hover:bg-secondary-fixed transition-colors font-bold shadow" 
                    href="https://groupme.com" 
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
                      <span className="px-space-sm py-space-xs rounded bg-surface-bright text-tertiary font-label-md text-label-md">Verified Club</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">Knights Strava Club</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Track weekly group mileage, compete friendly on campus sprint segments, and download verified GPX route maps directly to Garmin or Apple Watch.</p>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs mt-space-xs border border-outline-variant/10">
                      <div className="flex justify-between items-center text-body-sm">
                        <span className="text-on-surface">Weekly Club Mileage</span>
                        <span className="text-tertiary font-label-md text-label-md">1,482.4 mi</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                        <div className="h-full bg-tertiary w-4/5 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <a 
                    className="w-full py-space-sm rounded-lg bg-tertiary-container text-on-tertiary-container text-center font-label-lg text-label-lg uppercase tracking-wider hover:bg-tertiary hover:text-on-tertiary transition-colors shadow" 
                    href="https://strava.com" 
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
                      <span className="px-space-sm py-space-xs rounded bg-surface-bright text-on-surface font-label-md text-label-md">@KnightsRunningClub</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">Instagram Showcase</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Weekly workout photo drops, runner spotlights, sprint finishes, and upcoming social event flyers curated by our creative club members.</p>
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
                    href="https://instagram.com" 
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
                      <span className="px-space-sm py-space-xs rounded bg-tertiary-container/30 text-tertiary font-label-md text-label-md">Fast Response</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface">Official Club Email</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Direct line to leadership for sponsorships, alumni relations, pace group requests, and campus-wide communications.</p>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex items-center justify-between gap-space-xs mt-space-xs border border-outline-variant/10">
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-md text-label-md text-primary uppercase">Official Dispatch</span>
                        <span className="font-body-sm text-body-sm text-on-surface truncate">contact@knightsrunningclub.com</span>
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
                    href="mailto:contact@knightsrunningclub.com"
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
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Questions about pacers, upcoming race carpools, or beginner fears? Send a note directly to Marcus and Elena.</p>
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
                          <option className="bg-surface-container-high text-on-surface py-2" value="contact@knightsrunningclub.com">Both Presidents (General Questions) — contact@knightsrunningclub.com</option>
                          <option className="bg-surface-container-high text-on-surface py-2" value="marcus@knightsrunningclub.com">Marcus Vance (Main Campus Lead) — marcus@knightsrunningclub.com</option>
                          <option className="bg-surface-container-high text-on-surface py-2" value="elena@knightsrunningclub.com">Elena Rodriguez (East Campus Lead) — elena@knightsrunningclub.com</option>
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
                <span>Main Campus &amp; East Campus Chapters</span>
              </div>
              <div className="flex items-center gap-space-xs pt-space-xs">
                <span className="material-symbols-outlined text-[18px] text-primary">alternate_email</span>
                <a className="font-body-sm text-body-sm text-on-surface hover:text-primary transition-colors" href="mailto:contact@knightsrunningclub.com">
                  contact@knightsrunningclub.com
                </a>
              </div>
            </div>

            <div className="md:col-span-6 flex flex-col gap-space-md md:items-end">
              <div className="flex flex-col gap-space-xs md:text-right">
                <span className="font-label-lg text-label-lg text-primary uppercase tracking-wider">Two-Campus Run Schedule</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <span className="text-on-surface font-label-md text-label-md">Main Campus:</span> Tuesday 6:30 PM &amp; Thursday 7:00 PM
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <span className="text-on-surface font-label-md text-label-md">East Campus:</span> Wednesday 6:45 PM &amp; Saturday 8:00 AM
                </p>
              </div>

              <div className="flex items-center gap-space-md pt-space-xs">
                <a 
                  aria-label="GroupMe" 
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-bright transition-all shadow" 
                  href="https://groupme.com" 
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
                  href="https://strava.com" 
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
                  href="https://instagram.com" 
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
