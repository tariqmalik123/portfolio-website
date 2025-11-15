import { useEffect, useState } from "react";
import { Code, Palette, TrendingUp, Rocket, Target, Zap } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { 
      name: "Laravel", 
      level: 95, 
      color: "from-red-500 to-pink-600",
      icon: <Code size={16} />,
      category: "Backend"
    },
    { 
      name: "React.js", 
      level: 92, 
      color: "from-blue-500 to-cyan-600",
      icon: <Code size={16} />,
      category: "Frontend"
    },
    { 
      name: "Node.js", 
      level: 85, 
      color: "from-green-500 to-emerald-600",
      icon: <Code size={16} />,
      category: "Backend"
    },
    { 
      name: "Python", 
      level: 80, 
      color: "from-yellow-500 to-amber-600",
      icon: <Code size={16} />,
      category: "Backend"
    },
    { 
      name: "Next.js", 
      level: 88, 
      color: "from-gray-700 to-gray-900",
      icon: <Rocket size={16} />,
      category: "Frontend"
    },
    { 
      name: "SEO & Local SEO", 
      level: 90, 
      color: "from-purple-500 to-indigo-600",
      icon: <TrendingUp size={16} />,
      category: "Marketing"
    },
    { 
      name: "Digital Marketing", 
      level: 87, 
      color: "from-orange-500 to-red-500",
      icon: <Target size={16} />,
      category: "Marketing"
    },
    { 
      name: "Figma", 
      level: 93, 
      color: "from-pink-500 to-rose-600",
      icon: <Palette size={16} />,
      category: "Design"
    },
    { 
      name: "Adobe Photoshop", 
      level: 85, 
      color: "from-blue-600 to-indigo-700",
      icon: <Palette size={16} />,
      category: "Design"
    },
    { 
      name: "AI Tools & Automation", 
      level: 78, 
      color: "from-teal-500 to-green-600",
      icon: <Zap size={16} />,
      category: "Emerging Tech"
    },
    { 
      name: "Healthcare ERP Systems", 
      level: 89, 
      color: "from-indigo-500 to-purple-600",
      icon: <Target size={16} />,
      category: "Specialized"
    },
    { 
      name: "Appointment & Billing Platforms", 
      level: 91, 
      color: "from-cyan-500 to-blue-600",
      icon: <TrendingUp size={16} />,
      category: "Specialized"
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Design", "Marketing", "Specialized", "Emerging Tech"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) observer.observe(skillsSection);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "50+", label: "Technologies Mastered", color: "from-blue-500 to-cyan-600" },
    { number: "13+", label: "Years Experience", color: "from-purple-500 to-indigo-600" },
    { number: "100+", label: "Projects Delivered", color: "from-green-500 to-emerald-600" }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Zap size={16} />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set refined through years of hands-on development 
            and successful project delivery across diverse industries
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 border-transparent transform -translate-y-1"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600 backdrop-blur-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80 dark:border-gray-700/80 hover:border-blue-300 dark:hover:border-blue-600 backdrop-blur-sm"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color} text-white shadow-lg`}>
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-lg text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out transform origin-left`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.05}s`
                    }}
                  ></div>
                </div>
                
                {/* Animated Dots */}
                <div className="flex justify-between mt-2">
                  {[0, 25, 50, 75, 100].map((point) => (
                    <div
                      key={point}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        isVisible && skill.level >= point 
                          ? `bg-gradient-to-r ${skill.color} shadow-lg` 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      style={{ transitionDelay: `${index * 0.05 + point * 0.01}s` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Category Badge */}
              <div className="mt-4 flex justify-between items-center">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium">
                  {skill.category}
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : skill.level >= 70 ? "Proficient" : "Intermediate"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80 dark:border-gray-700/80 hover:border-blue-300 dark:hover:border-blue-600 backdrop-blur-sm transform hover:-translate-y-2">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}>
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-white">
                    {stat.label}
                  </div>
                  <div className="w-12 h-1 bg-gradient-to-r from-gray-400 to-gray-300 dark:from-gray-600 dark:to-gray-500 mx-auto mt-4 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-gray-800/80 dark:to-gray-700/80 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-200/50 dark:border-gray-600/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Ready to Leverage These Skills?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how my expertise can drive your next project to success
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;