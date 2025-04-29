import React from 'react';

const features=[
  {
    title:"Team Collaboration",
    description:"Work in real-time with your team—share notes, leave comments, and stay in sync effortlessly.",
    icon:"👥",
  },
  {
    title:"Cloud-Based Storage",
    description:"All your notes are securely stored in the cloud and available across all your devices.",
    icon:"☁️",
  },
  {
    title:"Cross-Platform Access",
    description:"Access your notes from desktop, tablet, or mobile, anytime and anywhere.",
    icon:"🌐",
  },
  {
    title:"Calm, Clean UI",
    description:"Enjoy a distraction-free writing experience with our minimal and smooth interface.",
    icon:"🎨",
  },
  {
    title:"Organized Note Management",
    description:"Use notebooks, tags, and folders to stay on top of everything.",
    icon:"📁",
  },
  {
    title:"Smart Search",
    description:"Quickly find what you're looking for with intelligent search functionality.",
    icon: "🔍",
  },
  {
    title:"Rich Text Editing",
    description:"Format your notes with checklists, images, code blocks, and more.",
    icon:"📝",
  },
  {
    title:"Secure & Private",
    description:"End-to-end encryption ensures your ideas stay yours, always.",
    icon:"🔒",
  },
];

export default function FeaturesPage() {
  return (
    <div className="features-container">
      <div className="features-header">
        <h2>✨ Everything You Need to Take Better Notes</h2>
        <p>
          From solo ideas to team brainstorming, our note-taking app helps you stay organized, focused, and productive.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}