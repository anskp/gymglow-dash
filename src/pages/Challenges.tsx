import { motion } from 'framer-motion';
import { Search, Filter, Plus, Trophy, Users, Calendar, Target, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

// Mock challenges data
const mockChallenges = [
  {
    id: '1',
    title: '30-Day Transformation',
    description: 'Complete fitness transformation challenge with nutrition and workout tracking',
    participants: 1247,
    maxParticipants: 2000,
    status: 'active',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    prize: '$5000 + Premium Membership',
    category: 'Transformation',
    difficulty: 'Intermediate'
  },
  {
    id: '2',
    title: 'Million Steps Challenge',
    description: 'Collective challenge to reach 1 million steps as a community',
    participants: 856,
    maxParticipants: 1000,
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    prize: 'Community Celebration Event',
    category: 'Cardio',
    difficulty: 'Beginner'
  },
  {
    id: '3',
    title: 'Strength Beast Mode',
    description: 'Push your limits with heavy lifting and strength training',
    participants: 234,
    maxParticipants: 500,
    status: 'upcoming',
    startDate: '2024-02-01',
    endDate: '2024-02-28',
    prize: 'Strength Equipment Bundle',
    category: 'Strength',
    difficulty: 'Advanced'
  },
  {
    id: '4',
    title: 'Mindful Fitness',
    description: 'Combine meditation, yoga, and mindful movement',
    participants: 445,
    maxParticipants: 600,
    status: 'completed',
    startDate: '2023-12-01',
    endDate: '2023-12-31',
    prize: 'Wellness Retreat Weekend',
    category: 'Wellness',
    difficulty: 'Beginner'
  },
];

export default function Challenges() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-primary/20 text-primary border-primary/30';
      case 'completed': return 'bg-muted text-muted-foreground border-muted';
      case 'upcoming': return 'bg-secondary/20 text-secondary border-secondary/30';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-primary/20 text-primary border-primary/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'Advanced': return 'bg-destructive/20 text-destructive border-destructive/30';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Strength': return Target;
      case 'Cardio': return Users;
      case 'Transformation': return Trophy;
      case 'Wellness': return Gift;
      default: return Trophy;
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
            <h1 className="text-3xl font-bold text-glow">Challenges</h1>
            <p className="text-muted-foreground">Create and manage fitness challenges for your community</p>
          </div>
          <Button className="bg-gradient-primary hover:shadow-glow-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Challenge
          </Button>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex gap-4"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search challenges by title, category, or description..."
              className="pl-10 bg-card/50 border-border/50"
            />
          </div>
          <Button variant="outline" className="hover:bg-primary/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </motion.div>

        {/* Challenges Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                All Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="space-y-4">
                <TabsList className="bg-muted/50">
                  <TabsTrigger value="all">All Challenges</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="space-y-4">
                  {mockChallenges.map((challenge, index) => {
                    const IconComponent = getCategoryIcon(challenge.category);
                    const participationPercentage = (challenge.participants / challenge.maxParticipants) * 100;
                    
                    return (
                      <motion.div
                        key={challenge.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card className="glass hover-glow border-l-4 border-l-primary/50">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold">{challenge.title}</h3>
                                  <p className="text-muted-foreground">{challenge.description}</p>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Badge className={getStatusColor(challenge.status)}>
                                  {challenge.status}
                                </Badge>
                                <Badge className={getDifficultyColor(challenge.difficulty)}>
                                  {challenge.difficulty}
                                </Badge>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4 text-primary" />
                                  <span className="text-sm font-medium">Participants</span>
                                </div>
                                <div className="space-y-1">
                                  <div className="flex justify-between text-sm">
                                    <span>{challenge.participants.toLocaleString()}</span>
                                    <span className="text-muted-foreground">
                                      / {challenge.maxParticipants.toLocaleString()}
                                    </span>
                                  </div>
                                  <Progress value={participationPercentage} className="h-2" />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4 text-secondary" />
                                  <span className="text-sm font-medium">Duration</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  <p>{new Date(challenge.startDate).toLocaleDateString()}</p>
                                  <p>to {new Date(challenge.endDate).toLocaleDateString()}</p>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Gift className="w-4 h-4 text-accent" />
                                  <span className="text-sm font-medium">Prize</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{challenge.prize}</p>
                              </div>

                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Target className="w-4 h-4 text-yellow-500" />
                                  <span className="text-sm font-medium">Category</span>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {challenge.category}
                                </Badge>
                              </div>
                            </div>

                            <div className="flex gap-3 pt-4 border-t border-border/50">
                              <Button variant="outline" size="sm" className="hover:bg-primary/10">
                                View Details
                              </Button>
                              <Button variant="outline" size="sm" className="hover:bg-secondary/10">
                                Edit Challenge
                              </Button>
                              <Button variant="outline" size="sm" className="hover:bg-accent/10">
                                View Participants
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}