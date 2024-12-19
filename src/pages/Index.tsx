import { motion } from 'framer-motion';
import { Cpu, Database, Globe, Brain } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import QuantumCard from '@/components/QuantumCard';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-quantum-dark text-white">
      <Navbar />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-quantum-primary to-quantum-accent bg-clip-text text-transparent">
            The Future of Quantum Technology
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Exploring the revolutionary world of quantum computing and its applications
          </p>
        </motion.div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-quantum-primary">
            Quantum Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <QuantumCard
              title="Quantum Computing"
              description="Revolutionizing computational power with quantum bits and superposition"
              icon={<Cpu className="w-full h-full" />}
            />
            <QuantumCard
              title="Quantum Networks"
              description="Secure communication through quantum entanglement"
              icon={<Globe className="w-full h-full" />}
            />
            <QuantumCard
              title="Quantum AI"
              description="Enhanced machine learning through quantum algorithms"
              icon={<Brain className="w-full h-full" />}
            />
            <QuantumCard
              title="Quantum Database"
              description="Next-generation data storage and processing"
              icon={<Database className="w-full h-full" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;