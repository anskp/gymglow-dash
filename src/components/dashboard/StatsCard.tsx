import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  color?: 'primary' | 'secondary' | 'accent' | 'destructive';
  delay?: number;
}

export function StatsCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  color = 'primary',
  delay = 0 
}: StatsCardProps) {
  const colorClasses = {
    primary: 'bg-gradient-primary text-primary-foreground shadow-glow-primary',
    secondary: 'bg-gradient-secondary text-secondary-foreground shadow-glow-secondary',
    accent: 'bg-gradient-accent text-accent-foreground shadow-glow-accent',
    destructive: 'bg-destructive/20 text-destructive border-destructive/30',
  };

  const iconBgClasses = {
    primary: 'bg-primary/20 text-primary',
    secondary: 'bg-secondary/20 text-secondary',
    accent: 'bg-accent/20 text-accent',
    destructive: 'bg-destructive/20 text-destructive',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className={`glass hover-glow transition-all duration-300 ${colorClasses[color]}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-90">{title}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold text-glow">
                  {typeof value === 'number' ? value.toLocaleString() : value}
                </h3>
                {change !== undefined && (
                  <span className={`text-xs font-medium ${
                    change > 0 ? 'text-green-400' : change < 0 ? 'text-red-400' : 'text-muted-foreground'
                  }`}>
                    {change > 0 ? '+' : ''}{change}%
                  </span>
                )}
              </div>
            </div>
            <div className={`p-3 rounded-lg ${iconBgClasses[color]}`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}