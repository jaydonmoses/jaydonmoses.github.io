import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface SkillsTabContentProps {
  activeTab: string;
}

const SkillsTabContent: React.FC<SkillsTabContentProps> = ({ activeTab }) => {
  const skillsData = {
    skills: {
      title: 'Technical Skills',
      categories: [
        {
          name: 'Programming Languages',
          skills: [
            { name: 'Python', level: 90, icon: 'fab fa-python', category: 'language' },
            { name: 'Java', level: 85, icon: 'fab fa-java', category: 'language' },
            { name: 'TypeScript', level: 80, icon: 'fab fa-js-square', category: 'language' },
            { name: 'JavaScript', level: 85, icon: 'fab fa-js-square', category: 'language' },
            { name: 'SQL', level: 75, icon: 'fas fa-database', category: 'language' },
            { name: 'C#', level: 70, icon: 'fas fa-code', category: 'language' }
          ]
        },
        {
          name: 'Machine Learning & Data Science',
          skills: [
            { name: 'Pandas', level: 85, icon: 'fas fa-chart-bar', category: 'ml' },
            { name: 'NumPy', level: 85, icon: 'fas fa-calculator', category: 'ml' },
            { name: 'scikit-learn', level: 80, icon: 'fas fa-brain', category: 'ml' },
            { name: 'OpenCV', level: 75, icon: 'fas fa-eye', category: 'ml' },
            { name: 'Matplotlib', level: 80, icon: 'fas fa-chart-line', category: 'ml' },
            { name: 'Plotly', level: 75, icon: 'fas fa-chart-pie', category: 'ml' },
            { name: 'BeautifulSoup', level: 80, icon: 'fas fa-spider', category: 'ml' }
          ]
        },
        {
          name: 'Web Development',
          skills: [
            { name: 'React', level: 90, icon: 'fab fa-react', category: 'web' },
            { name: 'Next.js', level: 80, icon: 'fas fa-code', category: 'web' },
            { name: 'Node.js', level: 80, icon: 'fab fa-node-js', category: 'web' },
            { name: 'FastAPI', level: 85, icon: 'fas fa-rocket', category: 'web' },
            { name: 'Spring Boot', level: 80, icon: 'fas fa-leaf', category: 'web' },
            { name: 'PostgreSQL', level: 75, icon: 'fas fa-database', category: 'web' },
            { name: 'SQLite', level: 80, icon: 'fas fa-database', category: 'web' }
          ]
        },
        {
          name: 'Developer Tools & Technologies',
          skills: [
            { name: 'Git', level: 90, icon: 'fab fa-git-alt', category: 'tools' },
            { name: 'VS Code', level: 95, icon: 'fas fa-code', category: 'tools' },
            { name: 'JetBrains', level: 85, icon: 'fas fa-code', category: 'tools' },
            { name: 'Prisma', level: 80, icon: 'fas fa-database', category: 'tools' },
            { name: 'WebSockets', level: 75, icon: 'fas fa-wifi', category: 'tools' },
            { name: 'RESTful APIs', level: 85, icon: 'fas fa-exchange-alt', category: 'tools' }
          ]
        }
      ]
    },
    certifications: {
      title: 'Certifications & Achievements',
      items: [
        {
          name: 'Python Programming Certification',
          issuer: 'Kaggle',
          date: '2024',
          description: 'Completed comprehensive Python programming certification covering data structures, algorithms, and advanced programming concepts.',
          icon: 'fab fa-python',
          verified: true
        },
        {
          name: 'Academic Excellence',
          issuer: 'Northeastern University',
          date: 'Ongoing',
          description: 'Maintaining strong academic performance in Computer Science curriculum including Data Structures & Algorithms.',
          icon: 'fas fa-graduation-cap',
          verified: true
        }
      ]
    }
  };

  if (activeTab === 'skills') {
    return (
      <div className="space-y-8">
        {skillsData.skills.categories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-xl text-[#ff6b6b] group-hover:text-[#ff5252] transition-colors duration-300">
                {category.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-4">
                    <div className="text-2xl text-[#ff6b6b] group-hover:scale-110 transition-transform duration-300">
                      <i className={skill.icon}></i>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="secondary" className="text-xs">{skill.level}%</Badge>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] h-2 rounded-full transition-all duration-500 ease-out group-hover:animate-pulse"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (activeTab === 'certifications') {
    return (
      <div className="space-y-6">
        {skillsData.certifications.items.map((cert, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="flex items-start space-x-4">
                <div className="text-3xl text-[#ff6b6b] mt-1 group-hover:scale-110 transition-transform duration-300">
                  <i className={cert.icon}></i>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                    {cert.verified && (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        <i className="fas fa-certificate mr-1"></i>
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3">
                    <Badge variant="outline" className="text-[#ff6b6b] border-[#ff6b6b] w-fit">
                      {cert.issuer}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                {cert.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return null;
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = [
    { id: 'skills', label: 'Skills', icon: 'fas fa-cogs' },
    { id: 'certifications', label: 'Certifications', icon: 'fas fa-certificate' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] bg-clip-text text-transparent">
            Skills & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, programming languages, frameworks, and professional certifications.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`flex items-center space-x-2 mx-2 ${activeTab === tab.id 
                  ? 'bg-[#ff6b6b] hover:bg-[#ff5252] text-white shadow-xl' 
                  : 'border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-white'
                } transition-all duration-300 transform hover:scale-105`}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>

          <SkillsTabContent activeTab={activeTab} />
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Quick Overview</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'Java', 'TypeScript', 'React', 'Machine Learning', 
              'FastAPI', 'PostgreSQL', 'Git', 'Spring Boot', 'Node.js'
            ].map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 border-[#ff6b6b]/30 text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-white hover:border-[#ff6b6b] transition-all duration-300 cursor-pointer transform hover:scale-105 font-medium text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;