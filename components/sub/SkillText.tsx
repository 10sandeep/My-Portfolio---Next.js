"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { CodeBracketIcon, LightBulbIcon, ClockIcon } from '@heroicons/react/24/outline';

const SkillText = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center relative py-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-16 w-80 h-80 bg-gradient-to-l from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Intro box */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        className="Welcome-box py-[10px] px-[15px] border border-[#7042f88b] opacity-[0.9] bg-[#0F0F1A]/40 backdrop-blur-sm rounded-2xl flex items-center mb-6 shadow-[0_0_15px_rgba(112,66,248,0.25)]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-6 w-6" />
        <h1 className="Welcome-text text-[15px]">Think bigger with Next.js 13</h1>
      </motion.div>

      {/* Main text content */}
      <div className="relative z-10">
        <motion.h2
          variants={slideInFromLeft(0.5)}
          className="text-[42px] leading-tight text-white font-bold mt-[10px] text-center mb-[25px] bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
        >
          {`Creating Tomorrow's Apps`}
          <br />
          with Today's Technology
        </motion.h2>

        <motion.p
          variants={slideInFromRight(0.5)}
          className="text-[22px] text-gray-300 mb-12 mt-[10px] text-center max-w-3xl mx-auto leading-relaxed"
        >
          Elevate your digital presence with cutting-edge solutions that transform ideas into reality.
        </motion.p>
      </div>

      {/* Skills Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-row justify-center gap-12 max-w-6xl w-full px-4 overflow-x-auto"
      >
        {/* Card 1 */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center p-6 bg-[#0F0F1A]/40 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group w-80"
        >
          <CodeBracketIcon className="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
          <h3 className="mt-4 text-xl font-medium text-white">Modern Development</h3>
          <p className="mt-2 text-gray-400 text-center">Using Next.js, React and TypeScript</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center p-6 bg-[#0F0F1A]/40 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group w-80"
        >
          <LightBulbIcon className="h-12 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
          <h3 className="mt-4 text-xl font-medium text-white">Innovative Solutions</h3>
          <p className="mt-2 text-gray-400 text-center">Turning complex problems into elegant solutions</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center p-6 bg-[#0F0F1A]/40 backdrop-blur-sm rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group w-80"
        >
          <ClockIcon className="h-12 w-12 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" />
          <h3 className="mt-4 text-xl font-medium text-white">Efficient Workflow</h3>
          <p className="mt-2 text-gray-400 text-center">Never miss a task, deadline or idea</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillText;
