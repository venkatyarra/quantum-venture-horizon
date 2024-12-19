import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface QuantumCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const QuantumCard = ({ title, description, icon, className }: QuantumCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-quantum-primary/20 hover:border-quantum-primary/40 transition-colors",
        className
      )}
    >
      <div className="w-12 h-12 mb-4 text-quantum-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-quantum-primary">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default QuantumCard;