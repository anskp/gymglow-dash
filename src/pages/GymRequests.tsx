import { motion } from 'framer-motion';
import { Search, Filter, Check, X, MoreHorizontal, Building2, MapPin, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useToast } from '@/hooks/use-toast';

// Mock gym requests data
const mockGymRequests = [
  { 
    id: '1', 
    name: 'PowerFit Gym', 
    location: 'New York, NY', 
    owner: 'John Smith',
    email: 'john@powerfit.com',
    members: 150, 
    trainers: 8, 
    status: 'pending', 
    requestDate: '2024-01-20',
    description: 'Modern fitness facility with state-of-the-art equipment'
  },
  { 
    id: '2', 
    name: 'Elite Fitness Center', 
    location: 'Los Angeles, CA', 
    owner: 'Sarah Connor',
    email: 'sarah@elitefitness.com',
    members: 200, 
    trainers: 12, 
    status: 'pending', 
    requestDate: '2024-01-18',
    description: 'Premium fitness center with personal training focus'
  },
  { 
    id: '3', 
    name: 'Iron Temple', 
    location: 'Chicago, IL', 
    owner: 'Mike Johnson',
    email: 'mike@irontemple.com',
    members: 300, 
    trainers: 15, 
    status: 'pending', 
    requestDate: '2024-01-22',
    description: 'Hardcore bodybuilding and powerlifting gym'
  },
];

export default function GymRequests() {
  const { toast } = useToast();

  const handleApprove = (gymName: string) => {
    toast({
      title: "Gym Approved",
      description: `${gymName} has been successfully approved and added to the network.`,
    });
  };

  const handleReject = (gymName: string) => {
    toast({
      title: "Gym Rejected",
      description: `${gymName} request has been rejected.`,
      variant: "destructive",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-primary/20 text-primary border-primary/30';
      case 'rejected': return 'bg-destructive/20 text-destructive border-destructive/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30';
      default: return 'bg-muted text-muted-foreground border-muted';
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
            <h1 className="text-3xl font-bold text-glow">Gym Approval Requests</h1>
            <p className="text-muted-foreground">Review and approve new gym applications</p>
          </div>
          <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30 text-lg px-4 py-2">
            {mockGymRequests.length} Pending
          </Badge>
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
              placeholder="Search gyms by name, location, or owner..."
              className="pl-10 bg-card/50 border-border/50"
            />
          </div>
          <Button variant="outline" className="hover:bg-primary/10">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </motion.div>

        {/* Gym Requests Cards */}
        <div className="grid gap-6">
          {mockGymRequests.map((gym, index) => (
            <motion.div
              key={gym.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="glass hover-glow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{gym.name}</CardTitle>
                        <p className="text-muted-foreground">Owned by {gym.owner}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(gym.status)}>
                      {gym.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{gym.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">{gym.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="text-sm">{gym.members} Members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-sm">{gym.trainers} Trainers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{new Date(gym.requestDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <Button 
                      className="bg-gradient-primary hover:shadow-glow-primary"
                      onClick={() => handleApprove(gym.name)}
                    >
                      <Check className="w-4 h-4 mr-2" />
                      Approve
                    </Button>
                    <Button 
                      variant="destructive" 
                      className="hover:shadow-glow-secondary"
                      onClick={() => handleReject(gym.name)}
                    >
                      <X className="w-4 h-4 mr-2" />
                      Reject
                    </Button>
                    <Button variant="outline" className="hover:bg-muted/50">
                      View Details
                    </Button>
                    <div className="ml-auto">
                      <p className="text-sm text-muted-foreground">
                        Contact: {gym.email}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}