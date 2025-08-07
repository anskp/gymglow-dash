import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Building2,
  Trophy,
  Award,
  Bell,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';

import { Button } from '@/components/ui/button';
import { useDashboardStore } from '@/store/dashboardStore';

const navigationItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'User Management', url: '/users', icon: Users },
  { title: 'Gym Requests', url: '/gym-requests', icon: Building2 },
  { title: 'Challenges', url: '/challenges', icon: Trophy },
  { title: 'Badge Manager', url: '/badges', icon: Award },
  { title: 'Notifications', url: '/notifications', icon: Bell },
  { title: 'Analytics', url: '/analytics', icon: BarChart3 },
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const { stats } = useDashboardStore();
  const collapsed = state === 'collapsed';

  const isActive = (path: string) => currentPath === path;
  const getNavClasses = (path: string) => {
    const base = "w-full justify-start gap-3 transition-all duration-300";
    if (isActive(path)) {
      return `${base} bg-gradient-primary text-primary-foreground shadow-glow-primary border-l-4 border-primary`;
    }
    return `${base} hover:bg-muted/50 hover:shadow-glow-primary/30`;
  };

  return (
    <Sidebar className={`${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 border-r border-border/50`}>
      <SidebarHeader className="p-4 border-b border-border/50">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-primary">
            <Dumbbell className="w-6 h-6 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-bold text-lg text-glow">GymGlow</h1>
              <p className="text-sm text-muted-foreground">Admin Dashboard</p>
            </div>
          )}
        </motion.div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? 'sr-only' : ''}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavClasses(item.url)}>
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                      {!collapsed && item.url === '/gym-requests' && stats.pendingGymRequests > 0 && (
                        <span className="ml-auto bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full animate-pulse-glow">
                          {stats.pendingGymRequests}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/50">
        <Button
          variant="ghost"
          onClick={() => console.log('Logout clicked')}
          className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span>Logout</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}