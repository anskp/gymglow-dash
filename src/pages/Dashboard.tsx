import { motion } from 'framer-motion';
import { Users, Building2, Trophy, Award, Bell, UserPlus, TrendingUp } from 'lucide-react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { Leaderboard } from '@/components/dashboard/Leaderboard';
import { SignupChart } from '@/components/dashboard/SignupChart';
import { useDashboardStore } from '@/store/dashboardStore';

export default function Dashboard() {
  const { stats } = useDashboardStore();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-3xl font-bold text-glow">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome to your gym management dashboard</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Members"
          value={stats.totalMembers}
          change={12.5}
          icon={Users}
          color="primary"
          delay={0.1}
        />
        <StatsCard
          title="Total Trainers"
          value={stats.totalTrainers}
          change={8.2}
          icon={UserPlus}
          color="secondary"
          delay={0.2}
        />
        <StatsCard
          title="Active Gyms"
          value={stats.totalGyms}
          change={5.1}
          icon={Building2}
          color="accent"
          delay={0.3}
        />
        <StatsCard
          title="Active Challenges"
          value={stats.activeChallenges}
          change={15.8}
          icon={Trophy}
          color="primary"
          delay={0.4}
        />
      </div>

      {/* Additional Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Pending Gym Requests"
          value={stats.pendingGymRequests}
          icon={Building2}
          color="destructive"
          delay={0.5}
        />
        <StatsCard
          title="Badges Issued Today"
          value={stats.badgesIssuedToday}
          change={23.4}
          icon={Award}
          color="accent"
          delay={0.6}
        />
        <StatsCard
          title="Notifications Sent"
          value={stats.notificationsSentToday}
          change={18.7}
          icon={Bell}
          color="secondary"
          delay={0.7}
        />
      </div>

      {/* Charts and Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SignupChart />
        <Leaderboard />
      </div>
    </div>
  );
}