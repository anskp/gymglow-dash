import { motion } from 'framer-motion';
import { Search, Filter, Plus, Send, Bell, Users, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useToast } from '@/hooks/use-toast';

// Mock notifications data
const mockNotifications = [
  {
    id: '1',
    title: 'Welcome to GymGlow!',
    message: 'Start your fitness journey with our comprehensive workout plans and challenges.',
    type: 'welcome',
    audience: 'new_members',
    sentDate: '2024-01-20',
    status: 'sent',
    recipients: 45,
    engagement: 78
  },
  {
    id: '2',
    title: 'Challenge Starting Soon!',
    message: 'The 30-Day Transformation Challenge begins tomorrow. Are you ready?',
    type: 'challenge',
    audience: 'all_members',
    sentDate: '2024-01-19',
    status: 'sent',
    recipients: 12847,
    engagement: 65
  },
  {
    id: '3',
    title: 'New Gym Partner Available',
    message: 'PowerFit Gym has joined our network! Check out their facilities.',
    type: 'gym_update',
    audience: 'local_members',
    sentDate: '2024-01-18',
    status: 'sent',
    recipients: 856,
    engagement: 42
  },
  {
    id: '4',
    title: 'Maintenance Notice',
    message: 'Scheduled maintenance on Sunday 2-4 AM. App may be temporarily unavailable.',
    type: 'maintenance',
    audience: 'all_users',
    sentDate: '2024-01-17',
    status: 'sent',
    recipients: 15000,
    engagement: 23
  }
];

export default function Notifications() {
  const { toast } = useToast();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'welcome': return 'bg-primary/20 text-primary border-primary/30';
      case 'challenge': return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'gym_update': return 'bg-accent/20 text-accent border-accent/30';
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      case 'achievement': return 'bg-gradient-primary text-primary-foreground border-primary/30';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-primary/20 text-primary border-primary/30';
      case 'draft': return 'bg-muted text-muted-foreground border-muted';
      case 'scheduled': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      default: return 'bg-muted text-muted-foreground border-muted';
    }
  };

  const handleSendNotification = () => {
    toast({
      title: "Notification Sent",
      description: "Your notification has been sent to the selected audience.",
    });
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
            <h1 className="text-3xl font-bold text-glow">Notifications</h1>
            <p className="text-muted-foreground">Send and manage notifications to your community</p>
          </div>
          <Button className="bg-gradient-primary hover:shadow-glow-primary">
            <Plus className="w-4 h-4 mr-2" />
            New Notification
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
                <Send className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{mockNotifications.length}</p>
                  <p className="text-sm text-muted-foreground">Total Sent</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-secondary" />
                <div>
                  <p className="text-2xl font-bold">
                    {mockNotifications.reduce((sum, notif) => sum + notif.recipients, 0).toLocaleString()}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Recipients</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">
                    {Math.round(mockNotifications.reduce((sum, notif) => sum + notif.engagement, 0) / mockNotifications.length)}%
                  </p>
                  <p className="text-sm text-muted-foreground">Avg Engagement</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glass">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-yellow-500" />
                <div>
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-muted-foreground">Scheduled</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Create Notification Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  Create Notification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Notification title..."
                    className="bg-card/50 border-border/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your notification message..."
                    className="bg-card/50 border-border/50 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select>
                    <SelectTrigger className="bg-card/50 border-border/50">
                      <SelectValue placeholder="Select notification type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="welcome">Welcome</SelectItem>
                      <SelectItem value="challenge">Challenge</SelectItem>
                      <SelectItem value="gym_update">Gym Update</SelectItem>
                      <SelectItem value="maintenance">Maintenance</SelectItem>
                      <SelectItem value="achievement">Achievement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="audience">Audience</Label>
                  <Select>
                    <SelectTrigger className="bg-card/50 border-border/50">
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all_users">All Users</SelectItem>
                      <SelectItem value="all_members">All Members</SelectItem>
                      <SelectItem value="new_members">New Members</SelectItem>
                      <SelectItem value="trainers">Trainers</SelectItem>
                      <SelectItem value="gym_owners">Gym Owners</SelectItem>
                      <SelectItem value="local_members">Local Members</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-gradient-primary hover:shadow-glow-primary"
                    onClick={handleSendNotification}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Now
                  </Button>
                  <Button variant="outline" className="hover:bg-muted/50">
                    Save Draft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notification History */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Notification History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockNotifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{notification.title}</h3>
                        <div className="flex gap-2">
                          <Badge className={getTypeColor(notification.type)}>
                            {notification.type.replace('_', ' ')}
                          </Badge>
                          <Badge className={getStatusColor(notification.status)}>
                            {notification.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">
                        {notification.message}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Recipients:</span>
                          <span className="ml-2 font-medium">{notification.recipients.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Engagement:</span>
                          <span className="ml-2 font-medium">{notification.engagement}%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Sent:</span>
                          <span className="ml-2 font-medium">
                            {new Date(notification.sentDate).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}