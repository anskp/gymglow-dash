import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Target, Calendar, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

// Mock analytics data
const membershipGrowthData = [
  { month: 'Jan', members: 8500, trainers: 850, gyms: 65 },
  { month: 'Feb', members: 9200, trainers: 920, gyms: 68 },
  { month: 'Mar', members: 10100, trainers: 1010, gyms: 72 },
  { month: 'Apr', members: 10800, trainers: 1080, gyms: 75 },
  { month: 'May', members: 11500, trainers: 1150, gyms: 78 },
  { month: 'Jun', members: 12200, trainers: 1220, gyms: 82 },
  { month: 'Jul', members: 12847, trainers: 1245, gyms: 89 },
];

const workoutActivityData = [
  { day: 'Mon', sessions: 2400, duration: 145 },
  { day: 'Tue', sessions: 2210, duration: 138 },
  { day: 'Wed', sessions: 2290, duration: 142 },
  { day: 'Thu', sessions: 2000, duration: 135 },
  { day: 'Fri', sessions: 2181, duration: 140 },
  { day: 'Sat', sessions: 2500, duration: 155 },
  { day: 'Sun', sessions: 2100, duration: 125 },
];

const challengeParticipationData = [
  { name: 'Strength', value: 35, color: '#ff6b6b' },
  { name: 'Cardio', value: 25, color: '#4ecdc4' },
  { name: 'Transformation', value: 20, color: '#45b7d1' },
  { name: 'Wellness', value: 12, color: '#96ceb4' },
  { name: 'Social', value: 8, color: '#feca57' },
];

const revenueData = [
  { month: 'Jan', revenue: 125000, subscriptions: 8500 },
  { month: 'Feb', revenue: 138000, subscriptions: 9200 },
  { month: 'Mar', revenue: 151500, subscriptions: 10100 },
  { month: 'Apr', revenue: 162000, subscriptions: 10800 },
  { month: 'May', revenue: 172500, subscriptions: 11500 },
  { month: 'Jun', revenue: 183000, subscriptions: 12200 },
  { month: 'Jul', revenue: 192705, subscriptions: 12847 },
];

export default function Analytics() {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass p-3 rounded-lg border border-border/50">
          <p className="text-sm font-medium">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value.toLocaleString()}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
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
            <h1 className="text-3xl font-bold text-glow">Analytics & Reports</h1>
            <p className="text-muted-foreground">Comprehensive insights into your fitness ecosystem</p>
          </div>
          <div className="flex gap-2">
            <Select defaultValue="7d">
              <SelectTrigger className="w-32 bg-card/50 border-border/50">
                <SelectValue placeholder="Time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
                <SelectItem value="1y">Last year</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-gradient-primary hover:shadow-glow-primary">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </motion.div>

        {/* KPI Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">94.2%</p>
                  <p className="text-sm text-muted-foreground">Member Retention</p>
                  <p className="text-xs text-primary">+2.3% vs last month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Target className="w-8 h-8 text-secondary" />
                <div>
                  <p className="text-2xl font-bold">78.5%</p>
                  <p className="text-sm text-muted-foreground">Challenge Completion</p>
                  <p className="text-xs text-secondary">+5.7% vs last month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">$192K</p>
                  <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                  <p className="text-xs text-accent">+12.4% vs last month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">4.2</p>
                  <p className="text-sm text-muted-foreground">Avg Sessions/Week</p>
                  <p className="text-xs text-yellow-500">+0.8 vs last month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Tabs defaultValue="growth" className="space-y-4">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="growth">Growth</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="growth" className="space-y-4">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Membership Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={membershipGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="members"
                          stackId="1"
                          stroke="hsl(var(--primary))"
                          fill="hsl(var(--primary))"
                          fillOpacity={0.3}
                        />
                        <Area
                          type="monotone"
                          dataKey="trainers"
                          stackId="2"
                          stroke="hsl(var(--secondary))"
                          fill="hsl(var(--secondary))"
                          fillOpacity={0.3}
                        />
                        <Area
                          type="monotone"
                          dataKey="gyms"
                          stackId="3"
                          stroke="hsl(var(--accent))"
                          fill="hsl(var(--accent))"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Weekly Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={workoutActivityData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                        <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="sessions" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-4">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Revenue Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={revenueData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                        <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                        <YAxis stroke="hsl(var(--muted-foreground))" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="revenue"
                          stroke="hsl(var(--primary))"
                          strokeWidth={3}
                          dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-primary" />
                      Challenge Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={challengeParticipationData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {challengeParticipationData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle>Challenge Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {challengeParticipationData.map((category, index) => (
                        <div key={category.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{category.name}</span>
                            <span className="font-medium">{category.value}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              className="h-2 rounded-full"
                              style={{ backgroundColor: category.color }}
                              initial={{ width: 0 }}
                              animate={{ width: `${category.value}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}