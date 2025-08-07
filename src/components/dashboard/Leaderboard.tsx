import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useDashboardStore } from '@/store/dashboardStore';

export function Leaderboard() {
  const { leaderboard } = useDashboardStore();

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-orange-400" />;
      default:
        return <span className="font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankColors = (rank: number) => {
    switch (rank) {
      case 1:
        return 'border-l-yellow-400 bg-yellow-400/5';
      case 2:
        return 'border-l-gray-400 bg-gray-400/5';
      case 3:
        return 'border-l-orange-400 bg-orange-400/5';
      default:
        return 'border-l-primary/30 bg-primary/5';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Challenge Leaderboard
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {leaderboard.map((user, index) => (
            <motion.div
              key={user.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-lg border-l-4 transition-all duration-300 hover:scale-105 ${getRankColors(user.rank)}`}
            >
              <div className="flex items-center justify-center w-8">
                {getRankIcon(user.rank)}
              </div>
              
              <Avatar className="w-10 h-10 border-2 border-primary/30">
                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                  {user.avatar}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{user.name}</p>
                <p className="text-sm text-muted-foreground">
                  {user.points.toLocaleString()} points
                </p>
              </div>
              
              {user.rank <= 3 && (
                <div className="animate-float">
                  {user.rank === 1 && <span className="text-yellow-400">👑</span>}
                  {user.rank === 2 && <span className="text-gray-400">🥈</span>}
                  {user.rank === 3 && <span className="text-orange-400">🥉</span>}
                </div>
              )}
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}