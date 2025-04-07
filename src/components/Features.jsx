import React from 'react';
import { Lock, ShieldCheck, Cloud, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Lock className="w-8 h-8 text-blue-600" />,
    title: 'Secure Access',
    description: 'Only authorized users can access the smart locker with encrypted authentication.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: 'Advanced Security',
    description: 'Our lockers are protected with real-time monitoring and alerts for suspicious activities.',
  },
  {
    icon: <Cloud className="w-8 h-8 text-purple-600" />,
    title: 'Cloud Integration',
    description: 'All locker data is securely stored and accessible from the cloud, anytime.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
    title: 'Mobile Control',
    description: 'Easily manage your locker access and settings directly from your mobile phone.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
