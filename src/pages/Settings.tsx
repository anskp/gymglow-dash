import { motion } from 'framer-motion';
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Database, Globe, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useToast } from '@/hooks/use-toast';

export default function Settings() {
  const { toast } = useToast();

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your settings have been updated successfully.",
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
        >
          <h1 className="text-3xl font-bold text-glow">Settings</h1>
          <p className="text-muted-foreground">Manage your dashboard and platform settings</p>
        </motion.div>

        {/* Settings Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="platform">Platform</TabsTrigger>
            </TabsList>

            {/* Profile Settings */}
            <TabsContent value="profile">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Profile Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        defaultValue="Admin"
                        className="bg-card/50 border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        defaultValue="User"
                        className="bg-card/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="admin@gymglow.com"
                      className="bg-card/50 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      className="bg-card/50 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="utc-5">
                      <SelectTrigger className="bg-card/50 border-border/50">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
                        <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                        <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                        <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="bg-gradient-primary hover:shadow-glow-primary" onClick={handleSaveSettings}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notification Settings */}
            <TabsContent value="notifications">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5 text-primary" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive email notifications for important updates
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Separator className="bg-border/50" />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive push notifications on your device
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Separator className="bg-border/50" />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>New Gym Requests</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when new gyms request approval
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Separator className="bg-border/50" />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Challenge Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive updates about challenge activities
                        </p>
                      </div>
                      <Switch />
                    </div>

                    <Separator className="bg-border/50" />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Weekly Reports</Label>
                        <p className="text-sm text-muted-foreground">
                          Get weekly analytics and performance reports
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <Button className="bg-gradient-primary hover:shadow-glow-primary" onClick={handleSaveSettings}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Preferences
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Security Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input
                        id="currentPassword"
                        type="password"
                        className="bg-card/50 border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input
                        id="newPassword"
                        type="password"
                        className="bg-card/50 border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        className="bg-card/50 border-border/50"
                      />
                    </div>
                  </div>

                  <Separator className="bg-border/50" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Login Alerts</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified when someone logs into your account
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <Button className="bg-gradient-primary hover:shadow-glow-primary" onClick={handleSaveSettings}>
                    <Save className="w-4 h-4 mr-2" />
                    Update Security
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Appearance Settings */}
            <TabsContent value="appearance">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-primary" />
                    Appearance Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <Select defaultValue="dark">
                        <SelectTrigger className="bg-card/50 border-border/50">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dark">Dark (Current)</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="auto">Auto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Primary Color</Label>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary border-2 border-primary-foreground cursor-pointer" />
                        <div className="w-8 h-8 rounded-full bg-secondary border-2 border-border cursor-pointer" />
                        <div className="w-8 h-8 rounded-full bg-accent border-2 border-border cursor-pointer" />
                        <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-border cursor-pointer" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Animations</Label>
                        <p className="text-sm text-muted-foreground">
                          Enable smooth animations and transitions
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Compact Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Use a more compact layout to fit more content
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>

                  <Button className="bg-gradient-primary hover:shadow-glow-primary" onClick={handleSaveSettings}>
                    <Save className="w-4 h-4 mr-2" />
                    Apply Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Platform Settings */}
            <TabsContent value="platform">
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Platform Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="platformName">Platform Name</Label>
                      <Input
                        id="platformName"
                        defaultValue="GymGlow"
                        className="bg-card/50 border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="supportEmail">Support Email</Label>
                      <Input
                        id="supportEmail"
                        type="email"
                        defaultValue="support@gymglow.com"
                        className="bg-card/50 border-border/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Enable maintenance mode to prevent user access
                        </p>
                        <Switch />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="autoApproval">Auto-approve Gyms</Label>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Automatically approve new gym applications
                        </p>
                        <Switch />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dataRetention">Data Retention Period</Label>
                      <Select defaultValue="90d">
                        <SelectTrigger className="bg-card/50 border-border/50">
                          <SelectValue placeholder="Select retention period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30d">30 days</SelectItem>
                          <SelectItem value="90d">90 days</SelectItem>
                          <SelectItem value="1y">1 year</SelectItem>
                          <SelectItem value="3y">3 years</SelectItem>
                          <SelectItem value="forever">Forever</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button className="bg-gradient-primary hover:shadow-glow-primary" onClick={handleSaveSettings}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Configuration
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}