import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILL_CATEGORIES, SKILL_CHART_DATA } from '../constants';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-transparent relative overflow-hidden">
       {/* Decorative bg element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-sky-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Section */}
          <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-800 h-[400px] flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_CHART_DATA}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#0ea5e9"
                  strokeWidth={3}
                  fill="#0ea5e9"
                  fillOpacity={0.2}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#020617', 
                    borderRadius: '8px', 
                    border: '1px solid #1e293b', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.5)' 
                  }}
                  itemStyle={{ color: '#e2e8f0', fontWeight: 600 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* List Section */}
          <div className="space-y-6">
            {SKILL_CATEGORIES.map((category, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-slate-800 shadow-sm hover:border-slate-700 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-sky-900/10 rounded-lg text-sky-500 group-hover:text-sky-400 transition-colors">
                    <Cpu size={20} />
                  </div>
                  <h3 className="font-bold text-slate-200">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 bg-black/60 text-slate-400 text-sm rounded-md border border-slate-800 hover:border-sky-500/30 hover:text-sky-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;