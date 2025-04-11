import React from 'react';
import { CheckCircle } from 'lucide-react';
import video from '../assets/video.mp4'


const steps = [
  {
    title: 'Step 1: Register & Login',
    description: 'Create your account and securely log in to access your smart locker dashboard.',
  },
  {
    title: 'Step 2: Book a Locker',
    description: 'Choose a nearby smart locker location and reserve a locker based on availability.',
  },
  {
    title: 'Step 3: Store Your Items',
    description: 'Scan the QR code at the locker, open it via the app, and safely store your items.',
  },
  {
    title: 'Step 4: Retrieve Anytime',
    description: 'Use your phone to unlock and retrieve your items whenever you need them.',
  },
];

const HowItWorks = () => {
  return (
    <section id='how-it-works' className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex items-start gap-4">
                <CheckCircle className="text-green-500 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          
          <div className="w-full h-100 aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={video} type='video/mp4'
              title="How SmartLocker Works"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
