export type Language = 'en' | 'ar';
export type Theme = 'dark' | 'light';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface DemoMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
  actionTaken?: string;
  sentiment?: 'positive' | 'neutral' | 'inquisitive';
  latencyMs?: number;
}

export interface DemoScenario {
  id: string;
  title: string;
  description: string;
  initialMessages: DemoMessage[];
  suggestedPrompts: string[];
  agentRole: string;
  agentAvatar: string;
}

export interface BentoCardData {
  id: string;
  badge: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  subMetric?: string;
  type: 'reduction' | 'growth' | 'uptime' | 'multilingual';
}

export interface SecurityBadge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  standard: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice?: number;
  monthlyOriginalPrice?: number;
  monthlyDiscountBadge?: string;
  annualTotal?: number;
  annualOriginalTotal?: number;
  annualEquivalentMonthlyPrice?: number;
  annualSavingsBadge?: string;
  isCustomPrice?: boolean;
  customPriceLabel?: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  highlightColor?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
