import { motion } from 'framer-motion';
import { Search, Filter, Plus, Award, Trophy, Medal, Star, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

// Mock badges data
const mockBadges = [
  {
    id: '1',
    name: 'First Workout',
    description: 'Complete your first workout session',
    icon: '🏋️',
    category: 'Beginner',
    rarity: 'Common',
    issuedToday: 45,
    totalIssued: 12847,
    requirements: 'Complete 1 workout',
    points: 10
  },
  {
    id: '2',
    name: 'Streak Master',
    description: 'Maintain a 30-day workout streak',
    icon: '🔥',
    category: 'Consistency',
    rarity: 'Rare',
    issuedToday: 12,
    totalIssued: 2456,
    requirements: '30 consecutive workout days',
    points: 100
  },
  {
    id: '3',
    name: 'Strength Champion',
    description: 'Achieve personal best in powerlifting',
    icon: '💪',
    category: 'Strength',
    rarity: 'Epic',
    issuedToday: 3,
    totalIssued: 789,
    requirements: 'Set 3 personal records',
    points: 250
  },
  {
    id: '4',
    name: 'Cardio King',
    description: 'Run 100 miles in a month',
    icon: '👑',
    category: 'Cardio',
    rarity: 'Legendary',
    issuedToday: 1,
    totalIssued: 156,
    requirements: '100 miles in 30 days',
    points: 500
  },
  {
    id: '5',
    name: 'Community Helper',
    description: 'Help 10 new members get started',
    icon: '🤝',
    category: 'Social',
    rarity: 'Rare',
    issuedToday: 8,
    totalIssued: 1234,
    requirements: 'Mentor 10 new members',
    points: 150
  },
  {
    id: '6',
    name: 'Transformation',
    description: 'Complete a full body transformation',
    icon: '⚡',
    category: 'Achievement',
    rarity: 'Mythic',
    issuedToday: 0,
    totalIssued: 42,
    requirements: 'Complete transformation program',
    points: 1000
  }
];

export default function BadgeManager() {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-muted text-muted-foreground border-muted';
      case 'Rare': return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'Epic': return 'bg-accent/20 text-accent border-accent/30';
      case 'Legendary': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'Mythic': return 'bg-gradient-accent text-accent-foreground border-accent/30';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Beginner': return 'bg-primary/20 text-primary border-primary/30';
      case 'Strength': return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'Cardio': return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'Consistency': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'Social': return 'bg-accent/20 text-accent border-accent/30';
      case 'Achievement': return 'bg-gradient-primary text-primary-foreground border-primary/30';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Strength': return Trophy;
      case 'Cardio': return Target;
      case 'Consistency': return Medal;
      case 'Social': return Star;
      case 'Achievement': return Award;
      default: return Award;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center"
        >
          <div>
            <h1 className="text-3xl font-bold text-glow">Badge Manager</h1>
            <p className="text-muted-foreground">Create and manage achievement badges for your community</p>
          </div>
          <Button className="bg-gradient-primary hover:shadow-glow-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Badge
          </Button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{mockBadges.length}</p>
                  <p className="text-sm text-muted-foreground">Total Badges</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-secondary" />
                <div>
                  <p className="text-2xl font-bold">
                    {mockBadges.reduce((sum, badge) => sum + badge.issuedToday, 0)}
                  </p>
                  <p className="text-sm text-muted-foreground">Issued Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Medal className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">
                    {mockBadges.reduce((sum, badge) => sum + badge.totalIssued, 0).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Issued</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">
                    {mockBadges.reduce((sum, badge) => sum + badge.points, 0).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Points</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search badges by name, category, or rarity..."
              className="pl-10 bg-card/50 border-border/50"
            />
          </div>
          <Button variant="outline" className="hover:bg-primary/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                All Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="space-y-4">
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="all">All Badges</TabsTrigger>
                  <TabsTrigger value="common">Common</TabsTrigger>
                  <TabsTrigger value="rare">Rare</TabsTrigger>
                  <TabsTrigger value="epic">Epic+</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockBadges.map((badge, index) => {
                      const IconComponent = getCategoryIcon(badge.category);
                      
                      return (
                        <motion.div
                          key={badge.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Card className="glass hover-glow transition-all duration-300">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4 mb-4">
                                <div className="text-4xl">{badge.icon}</div>
                                <div className="flex-1">
                                  <h3 className="font-bold text-lg mb-1">{badge.name}</h3>
                                  <p className="text-sm text-muted-foreground mb-3">
                                    {badge.description}
                                  </p>
                                  <div className="flex gap-2 mb-3">
                                    <Badge className={getRarityColor(badge.rarity)} >
                                      {badge.rarity}
                                    </Badge>
                                    <Badge className={getCategoryColor(badge.category)}>
                                      {badge.category}
                                    </Badge>
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Points:</span>
                                  <span className="font-medium text-primary">{badge.points}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Issued Today:</span>
                                  <span className="font-medium">{badge.issuedToday}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">Total Issued:</span>
                                  <span className="font-medium">{badge.totalIssued.toLocaleString()}</span>
                                </div>
                                <div className="pt-2 border-t border-border/50">
                                  <p className="text-xs text-muted-foreground">
                                    <strong>Requirements:</strong> {badge.requirements}
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-2 mt-4">
                                <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/10">
                                  Edit
                                </Button>
                                <Button variant="outline" size="sm" className="flex-1 hover:bg-secondary/10">
                                  Award
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}