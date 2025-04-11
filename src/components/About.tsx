
import { Handshake, Lightbulb, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">About Sign Language Translator</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our mission is to break down communication barriers by leveraging 
            technology to translate American Sign Language in real-time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">Real-Time Gesture Conversion</h3>
            <p className="text-gray-600">
            Instantly converts sign language gestures into text or speech for seamless communication.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">User-Friendly</h3>
            <p className="text-gray-600">
            Provides an interactive, and automated learning experience &
            Provides an affordable learning experience
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={32} className="text-gold" />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-3">Multi-Language Sign Language Translator</h3>
            <p className="text-gray-600">
            Offers structured courses in Indian, American, and British Sign Language for learners.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
