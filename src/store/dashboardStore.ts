import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'trainer' | 'gym' | 'multi-gym-member';
  avatar?: string;
  joinDate: string;
  status: 'active' | 'inactive' | 'pending';
}

interface Gym {
  id: string;
  name: string;
  location: string;
  status: 'approved' | 'pending' | 'rejected';
  members: number;
  trainers: number;
  requestDate: string;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'completed' | 'upcoming';
  participants: number;
  prize: string;
  endDate: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  issuedToday: number;
  totalIssued: number;
}

interface DashboardStats {
  totalMembers: number;
  totalTrainers: number;
  totalGyms: number;
  activeChallenges: number;
  pendingGymRequests: number;
  badgesIssuedToday: number;
  notificationsSentToday: number;
  dailySignups: Array<{ date: string; count: number }>;
}

interface DashboardStore {
  stats: DashboardStats;
  users: User[];
  gyms: Gym[];
  challenges: Challenge[];
  badges: Badge[];
  leaderboard: Array<{ rank: number; name: string; points: number; avatar?: string }>;
  sidebarCollapsed: boolean;
  currentUser: User | null;
  
  // Actions
  setSidebarCollapsed: (collapsed: boolean) => void;
  setCurrentUser: (user: User) => void;
  updateStats: (stats: Partial<DashboardStats>) => void;
  addUser: (user: User) => void;
  updateUser: (id: string, updates: Partial<User>) => void;
  approveGym: (id: string) => void;
  rejectGym: (id: string) => void;
}

// Mock data
const mockStats: DashboardStats = {
  totalMembers: 12847,
  totalTrainers: 1245,
  totalGyms: 89,
  activeChallenges: 23,
  pendingGymRequests: 12,
  badgesIssuedToday: 156,
  notificationsSentToday: 2847,
  dailySignups: [
    { date: '2024-01-01', count: 45 },
    { date: '2024-01-02', count: 52 },
    { date: '2024-01-03', count: 38 },
    { date: '2024-01-04', count: 67 },
    { date: '2024-01-05', count: 89 },
    { date: '2024-01-06', count: 76 },
    { date: '2024-01-07', count: 94 },
  ],
};

const mockLeaderboard = [
  { rank: 1, name: 'Alex Thunder', points: 2850, avatar: '🏆' },
  { rank: 2, name: 'Sarah Lightning', points: 2720, avatar: '⚡' },
  { rank: 3, name: 'Mike Steel', points: 2680, avatar: '💪' },
  { rank: 4, name: 'Emma Force', points: 2540, avatar: '🔥' },
  { rank: 5, name: 'John Power', points: 2490, avatar: '💥' },
];

const mockCurrentUser: User = {
  id: '1',
  name: 'Admin User',
  email: 'admin@gymglow.com',
  role: 'admin',
  avatar: '👨‍💼',
  joinDate: '2023-01-01',
  status: 'active',
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  stats: mockStats,
  users: [],
  gyms: [],
  challenges: [],
  badges: [],
  leaderboard: mockLeaderboard,
  sidebarCollapsed: false,
  currentUser: mockCurrentUser,

  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  setCurrentUser: (user) => set({ currentUser: user }),
  updateStats: (newStats) => set((state) => ({ 
    stats: { ...state.stats, ...newStats } 
  })),
  addUser: (user) => set((state) => ({ 
    users: [...state.users, user] 
  })),
  updateUser: (id, updates) => set((state) => ({
    users: state.users.map(user => 
      user.id === id ? { ...user, ...updates } : user
    )
  })),
  approveGym: (id) => set((state) => ({
    gyms: state.gyms.map(gym => 
      gym.id === id ? { ...gym, status: 'approved' as const } : gym
    )
  })),
  rejectGym: (id) => set((state) => ({
    gyms: state.gyms.map(gym => 
      gym.id === id ? { ...gym, status: 'rejected' as const } : gym
    )
  })),
}));