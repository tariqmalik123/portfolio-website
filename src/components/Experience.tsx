import { Briefcase, MapPin, Calendar, Heart, Stethoscope, Shield, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "Aug 2023 – Present",
      title: "Lead Full Stack Developer",
      company: "Meta IT – Evitals",
      location: "USA, Remote",
      description: "Leading healthcare platform development with focus on HIPAA compliance and scalable architecture",
      icon: <Stethoscope size={20} />,
      color: "from-blue-500 to-cyan-600",
      achievements: ["HIPAA Compliant Architecture", "Patient Monitoring Systems", "Healthcare SaaS Development"]
    },
    {
      period: "Oct 2021 – Jul 2023",
      title: "Full Stack Developer",
      company: "Cartlow",
      location: "UAE, Dubai",
      description: "Built e-commerce solutions with modern tech stack and optimized performance",
      icon: <TrendingUp size={20} />,
      color: "from-teal-500 to-emerald-600",
      achievements: ["E-commerce Platform", "Payment Integration", "Inventory Management"]
    },
    {
      period: "Jun 2021 – Oct 2022",
      title: "Full Stack Web Developer",
      company: "Source Code",
      location: "UK",
      description: "Developed custom web applications with focus on user experience and SEO",
      icon: <Briefcase size={20} />,
      color: "from-purple-500 to-indigo-600",
      achievements: ["Custom Web Apps", "SEO Optimization", "User Experience Design"]
    },
    {
      period: "Jan 2020 – May 2021",
      title: "Software Engineer & Product Developer",
      company: "MR Bio Med",
      location: "USA (Remote)",
      description: "Created healthcare management systems with advanced features and secure data handling",
      icon: <Shield size={20} />,
      color: "from-green-500 to-lime-600",
      achievements: ["Medical Asset Management", "Secure Data Systems", "Healthcare Compliance"]
    },
    {
      period: "2018 – 2020",
      title: "Full Stack Developer & Digital Strategist",
      company: "Freelance / Remote Projects",
      location: "Remote",
      description: "Delivered diverse projects including SEO optimization, digital marketing, and custom development",
      icon: <Heart size={20} />,
      color: "from-cyan-500 to-blue-600",
      achievements: ["Digital Marketing", "SEO Strategy", "Custom Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Calendar size={16} />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
            Healthcare Technology Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Over 13 years of dedicated experience in healthcare technology, building secure, 
            compliant, and patient-focused digital solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500"></div>

          {/* Experience Items */}
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative group ${
                  index % 2 === 0 ? "lg:pr-1/2 lg:pl-8" : "lg:pl-1/2 lg:pr-8"
                }`}
              >
                {/* Timeline Dot */}
                <div className={`hidden lg:block absolute top-6 ${
                  index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                }`}>
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white dark:border-gray-800 shadow-lg transform group-hover:scale-125 transition-transform duration-300`}></div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="lg:hidden absolute left-6 top-6">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} border-3 border-white dark:border-gray-800 shadow-lg`}></div>
                </div>

                {/* Content Card */}
                <div className="relative bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80 dark:border-gray-700/80 hover:border-blue-300 dark:hover:border-cyan-500 backdrop-blur-sm transform hover:-translate-y-1 ml-0 lg:ml-0">
                  
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          {exp.icon}
                        </div>
                        
                        <div>
                          {/* Period */}
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white shadow-lg mb-3`}>
                            <Calendar size={12} />
                            {exp.period}
                          </div>
                          
                          {/* Title & Company */}
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          
                          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                            <span className="font-semibold text-gray-700 dark:text-gray-200">{exp.company}</span>
                            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Connecting Line for Mobile */}
                    <div className="lg:hidden absolute -bottom-8 left-6 w-0.5 h-8 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Healthcare Technology Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              With extensive experience across healthcare platforms, e-commerce, and digital solutions, 
              I bring a unique blend of technical expertise and industry knowledge to every project.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Shield className="text-green-500" size={20} />
                <span className="font-semibold text-gray-700 dark:text-gray-200">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Stethoscope className="text-blue-500" size={20} />
                <span className="font-semibold text-gray-700 dark:text-gray-200">Healthcare Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="text-teal-500" size={20} />
                <span className="font-semibold text-gray-700 dark:text-gray-200">Growth Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;