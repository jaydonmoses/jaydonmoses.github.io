import React, { useState } from 'react';

interface TabContentProps {
  activeTab: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  const content = {
    education: {
      title: 'Education',
      items: [
        {
          title: 'Bachelor of Science in Computer Science',
          institution: 'Northeastern University',
          period: 'Expected May 2028',
          location: 'Boston, MA',
          details: 'Relevant Coursework: Data Structures & Algorithms, Object Oriented Design, Foundations of Data Science'
        }
      ]
    },
    experience: {
      title: 'Experience',
      items: [
        {
          title: 'Knack Tutor',
          institution: 'Knack Tutoring',
          period: 'Jan 2026 – Present',
          location: 'Boston, MA',
          details: 'Tutoring 5+ students weekly in Discrete Structures and Foundations of Data Science, maintaining a positive rating. Simplified complex mathematical concepts through digestible examples and visual aids.'
        },
        {
          title: 'Machine Learning Developer',
          institution: 'Northeastern AI Club',
          period: 'Oct 2025 – Present',
          location: 'Boston, MA',
          details: 'Implementing Python-based data cleaning and pipelines, reducing dataset preparation time by 20%. Assisting in training and evaluating ML models with 10% accuracy improvement.'
        }
      ]
    },
    activities: {
      title: 'Activities & Leadership',
      items: [
        {
          title: 'Residential Assistant',
          institution: 'Northeastern University Housing',
          period: 'Oct 2025 – Present',
          location: 'Boston, MA',
          details: 'Supporting residential community development and student welfare in university housing'
        },
        {
          title: 'Brother',
          institution: 'Phi Gamma Delta',
          period: 'Oct 2025 – Present',
          location: 'Boston, MA',
          details: 'Active member of international fraternity focused on brotherhood, scholarship, and service'
        },
        {
          title: 'Member',
          institution: 'NUAI Club',
          period: 'Oct 2025 – Present',
          location: 'Boston, MA',
          details: 'Participating in Northeastern University Artificial Intelligence club activities and projects'
        }
      ]
    }
  };

  const currentContent = content[activeTab as keyof typeof content];

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6 text-[#ff6b6b]">{currentContent.title}</h3>
      <div className="space-y-6">
        {currentContent.items.map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-[#ff6b6b] font-medium">{item.institution}</p>
              </div>
              <div className="text-right mt-2 md:mt-0">
                <p className="text-gray-600 dark:text-gray-400">{item.period}</p>
                {item.location && (
                  <p className="text-gray-500 dark:text-gray-500">{item.location}</p>
                )}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
    { id: 'activities', label: 'Activities', icon: 'fas fa-users' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science student at Northeastern University with a focus on machine learning and full-stack development. 
            I love solving complex problems and creating innovative solutions that make a real impact.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 mx-2 mb-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#ff6b6b] text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default About;