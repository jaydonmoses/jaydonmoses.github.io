import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import FloatingBubbles from './FloatingBubbles';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Computer Science Student';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <FloatingBubbles />
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fadeInUp">
          {/* Profile Image */}
          <div className="w-56 h-56 mx-auto mb-8 rounded-full overflow-hidden relative group">
            <img
              src="/Images for Website/profile.jpg"
              alt="Jaydon Moses"
              className="w-full h-full object-cover border-4 border-[#ff6b6b] shadow-2xl group-hover:scale-110 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZmY2YjZiIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0OCIgZm9udC1mYW1pbHk9IkludGVyIj5KTTwvdGV4dD4KPC9zdmc+';
              }}
            />
            <div className="absolute -top-2 -right-2">
              <Badge className="bg-[#ff6b6b] animate-pulse">
                <i className="fas fa-circle text-green-400 mr-1 text-xs"></i>
                Available
              </Badge>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff6b6b]/20 to-purple-500/20 animate-pulse group-hover:animate-none"></div>
          </div>

          {/* Role Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-4 py-2 text-sm">
              <i className="fas fa-code mr-2"></i>
              Computer Scientist
            </Badge>
            <Badge variant="outline" className="border-[#ff6b6b] text-[#ff6b6b] px-4 py-2 text-sm">
              <i className="fas fa-graduation-cap mr-2"></i>
              NU Student
            </Badge>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] bg-clip-text text-transparent">
            Jaydon Moses
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-12">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
          
          {/* Bio */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Computer Science student at Northeastern University, passionate about machine learning, full-stack development, and creating innovative solutions. 
            Currently working as a tutor and ML developer while building impactful projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
            >
              <i className="fas fa-envelope mr-2"></i>
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full"
            >
              <a
                href="/RESUME_JAYDON_MOSES.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-pdf mr-2"></i>
                View Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://github.com/jaydonmoses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-[#ff6b6b] transform hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/jaydonmoses"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-[#ff6b6b] transform hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:moses.ja@northeastern.edu"
              className="text-2xl text-gray-600 hover:text-[#ff6b6b] transform hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
          <i className="fas fa-chevron-down text-2xl text-gray-400 hover:text-[#ff6b6b] transition-colors duration-300"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;