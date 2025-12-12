import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Всего публикаций', value: '12,847', change: '+12.5%', icon: 'FileText', color: 'text-primary' },
    { label: 'Конкурентов', value: '23', change: '+3', icon: 'Users', color: 'text-secondary' },
    { label: 'Идей сгенерировано', value: '156', change: '+28%', icon: 'Lightbulb', color: 'text-accent' },
    { label: 'Средний охват', value: '45.2K', change: '+8.3%', icon: 'TrendingUp', color: 'text-magenta' },
  ];

  const trendingTopics = [
    { topic: 'AI в маркетинге', posts: 342, growth: 145, trend: 'up' },
    { topic: 'Соцсети 2025', posts: 289, growth: 98, trend: 'up' },
    { topic: 'Email стратегии', posts: 234, growth: 67, trend: 'up' },
    { topic: 'Видео контент', posts: 198, growth: -12, trend: 'down' },
    { topic: 'SEO оптимизация', posts: 176, growth: 43, trend: 'up' },
  ];

  const competitors = [
    { name: 'Competitor A', avatar: 'CA', posts: 234, engagement: 8.2, status: 'active' },
    { name: 'Competitor B', avatar: 'CB', posts: 189, engagement: 6.5, status: 'active' },
    { name: 'Competitor C', avatar: 'CC', posts: 156, engagement: 9.1, status: 'monitoring' },
    { name: 'Competitor D', avatar: 'CD', posts: 142, engagement: 5.8, status: 'monitoring' },
  ];

  const contentIdeas = [
    { title: 'Как AI меняет контент-маркетинг', source: 'Competitor A', score: 95, tags: ['AI', 'Маркетинг'] },
    { title: 'Тренды соцсетей в 2025 году', source: 'Competitor B', score: 89, tags: ['Соцсети', 'Тренды'] },
    { title: 'Email маркетинг: новые подходы', source: 'Industry Analysis', score: 87, tags: ['Email', 'Стратегия'] },
    { title: 'Видео контент для B2B', source: 'Competitor C', score: 82, tags: ['Видео', 'B2B'] },
  ];

  const recentReports = [
    { name: 'Недельный отчет', date: '10 дек 2024', type: 'weekly', status: 'ready' },
    { name: 'Анализ конкурентов', date: '08 дек 2024', type: 'competitors', status: 'ready' },
    { name: 'Тренды месяца', date: '01 дек 2024', type: 'trends', status: 'ready' },
  ];

  const engagementData = [
    { date: 'Пн', views: 2400, engagement: 1398, shares: 800 },
    { date: 'Вт', views: 1398, engagement: 2210, shares: 967 },
    { date: 'Ср', views: 9800, engagement: 2290, shares: 1400 },
    { date: 'Чт', views: 3908, engagement: 2000, shares: 1200 },
    { date: 'Пт', views: 4800, engagement: 2181, shares: 1500 },
    { date: 'Сб', views: 3800, engagement: 2500, shares: 1100 },
    { date: 'Вс', views: 4300, engagement: 2100, shares: 1300 },
  ];

  const contentTypeData = [
    { name: 'Статьи', value: 342, color: '#8B5CF6' },
    { name: 'Видео', value: 289, color: '#0EA5E9' },
    { name: 'Инфографика', value: 198, color: '#F97316' },
    { name: 'Подкасты', value: 118, color: '#D946EF' },
  ];

  const competitorComparisonData = [
    { month: 'Янв', you: 4000, compA: 2400, compB: 3200 },
    { month: 'Фев', you: 3000, compA: 1398, compB: 2800 },
    { month: 'Мар', you: 5000, compA: 9800, compB: 3900 },
    { month: 'Апр', you: 4780, compA: 3908, compB: 4200 },
    { month: 'Май', you: 5890, compA: 4800, compB: 4700 },
    { month: 'Июн', you: 6390, compA: 3800, compB: 5100 },
  ];

  const performanceData = [
    { time: '00:00', value: 120 },
    { time: '04:00', value: 80 },
    { time: '08:00', value: 340 },
    { time: '12:00', value: 520 },
    { time: '16:00', value: 680 },
    { time: '20:00', value: 450 },
    { time: '23:59', value: 290 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-blue-50/30">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="TrendingUp" className="text-white" size={24} />
              </div>
              <h1 className="text-xl font-bold text-sidebar-foreground">TrendScope</h1>
            </div>

            <nav className="space-y-2">
              {[
                { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
                { id: 'analysis', label: 'Анализ', icon: 'BarChart3' },
                { id: 'ideas', label: 'Идеи', icon: 'Lightbulb' },
                { id: 'competitors', label: 'Конкуренты', icon: 'Users' },
                { id: 'reports', label: 'Отчеты', icon: 'FileText' },
                { id: 'help', label: 'Помощь', icon: 'HelpCircle' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-sidebar-accent text-sidebar-primary font-medium'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/50'
                  }`}
                >
                  <Icon name={item.icon} size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  {activeTab === 'dashboard' && 'Обзор платформы'}
                  {activeTab === 'analysis' && 'Аналитика контента'}
                  {activeTab === 'ideas' && 'Генератор идей'}
                  {activeTab === 'competitors' && 'Мониторинг конкурентов'}
                  {activeTab === 'reports' && 'Отчеты и экспорт'}
                  {activeTab === 'help' && 'Помощь и поддержка'}
                </h2>
                <p className="text-muted-foreground">
                  Анализируем контент конкурентов в реальном времени
                </p>
              </div>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Icon name="Plus" size={18} className="mr-2" />
                Добавить конкурента
              </Button>
            </div>
          </header>

          {activeTab === 'dashboard' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        idx === 0 ? 'from-primary/20 to-primary/10' :
                        idx === 1 ? 'from-secondary/20 to-secondary/10' :
                        idx === 2 ? 'from-accent/20 to-accent/10' :
                        'from-magenta/20 to-magenta/10'
                      } flex items-center justify-center`}>
                        <Icon name={stat.icon} className={stat.color} size={24} />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {stat.change}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Трендовые темы</h3>
                    <Button variant="ghost" size="sm">
                      <Icon name="RefreshCw" size={16} />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {trendingTopics.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3 flex-1">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                            idx % 2 === 0 ? 'from-primary to-secondary' : 'from-accent to-magenta'
                          } flex items-center justify-center text-white text-sm font-bold`}>
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{item.topic}</p>
                            <p className="text-xs text-muted-foreground">{item.posts} публикаций</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-medium ${
                            item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {item.growth > 0 ? '+' : ''}{item.growth}%
                          </span>
                          <Icon 
                            name={item.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                            size={16}
                            className={item.trend === 'up' ? 'text-green-600' : 'text-red-600'}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Активность конкурентов</h3>
                    <Button variant="ghost" size="sm">
                      <Icon name="Filter" size={16} />
                    </Button>
                  </div>
                  <div className="space-y-4">
                    {competitors.map((comp, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                            {comp.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium text-foreground">{comp.name}</p>
                            <Badge variant={comp.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                              {comp.status === 'active' ? 'Активен' : 'Мониторинг'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{comp.posts} постов</span>
                            <span>•</span>
                            <span>{comp.engagement}% вовлеченность</span>
                          </div>
                          <Progress value={comp.engagement * 10} className="h-1 mt-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'ideas' && (
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      AI-генератор контент-идей
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Анализируем успешный контент конкурентов и генерируем уникальные идеи для вашего бренда
                    </p>
                    <Button className="bg-gradient-to-r from-primary to-secondary">
                      <Icon name="Zap" size={16} className="mr-2" />
                      Сгенерировать новые идеи
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {contentIdeas.map((idea, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-xl transition-all hover:border-primary/30 border-2">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                          idx % 3 === 0 ? 'from-primary to-secondary' :
                          idx % 3 === 1 ? 'from-accent to-magenta' :
                          'from-secondary to-primary'
                        } flex items-center justify-center text-white font-bold`}>
                          {idea.score}
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Оценка потенциала</p>
                          <p className="text-xs font-medium text-foreground">Высокий</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Icon name="Bookmark" size={16} />
                      </Button>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">{idea.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {idea.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Источник: {idea.source}</span>
                      <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                        Подробнее
                        <Icon name="ArrowRight" size={14} className="ml-1" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analysis' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Eye" className="text-primary" size={24} />
                    <h4 className="font-semibold text-foreground">Просмотры</h4>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">2.4M</p>
                  <p className="text-sm text-green-600">+18% за неделю</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Heart" className="text-magenta" size={24} />
                    <h4 className="font-semibold text-foreground">Вовлеченность</h4>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">8.2%</p>
                  <p className="text-sm text-green-600">+2.3% за неделю</p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon name="Share2" className="text-secondary" size={24} />
                    <h4 className="font-semibold text-foreground">Репосты</h4>
                  </div>
                  <p className="text-3xl font-bold text-foreground mb-2">14.5K</p>
                  <p className="text-sm text-green-600">+12% за неделю</p>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Вовлеченность за неделю</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={engagementData}>
                      <defs>
                        <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
                      <XAxis dataKey="date" stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      <Area
                        type="monotone"
                        dataKey="views"
                        stroke="#8B5CF6"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorViews)"
                        name="Просмотры"
                      />
                      <Area
                        type="monotone"
                        dataKey="engagement"
                        stroke="#0EA5E9"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorEngagement)"
                        name="Вовлечённость"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Активность по часам</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
                      <XAxis dataKey="time" stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#F97316"
                        strokeWidth={3}
                        dot={{ fill: '#F97316', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Активность"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Сравнение с конкурентами</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={competitorComparisonData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.3} />
                      <XAxis dataKey="month" stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <YAxis stroke="#6b7280" style={{ fontSize: '12px' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '12px' }} />
                      <Bar dataKey="you" fill="#8B5CF6" radius={[8, 8, 0, 0]} name="Вы" />
                      <Bar dataKey="compA" fill="#0EA5E9" radius={[8, 8, 0, 0]} name="Competitor A" />
                      <Bar dataKey="compB" fill="#D946EF" radius={[8, 8, 0, 0]} name="Competitor B" />
                    </BarChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Типы контента</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={contentTypeData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {contentTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#fff',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'competitors' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {competitors.map((comp, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-xl transition-all border-2 hover:border-primary/30">
                    <div className="flex items-start justify-between mb-4">
                      <Avatar className="h-16 w-16 border-4 border-primary/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold text-xl">
                          {comp.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <Badge variant={comp.status === 'active' ? 'default' : 'secondary'}>
                        {comp.status === 'active' ? 'Активен' : 'Мониторинг'}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-4">{comp.name}</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Публикаций</span>
                        <span className="font-semibold text-foreground">{comp.posts}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Вовлеченность</span>
                        <span className="font-semibold text-foreground">{comp.engagement}%</span>
                      </div>
                      <Progress value={comp.engagement * 10} className="h-2" />
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Открыть профиль
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Экспорт отчетов</h3>
                    <p className="text-sm text-muted-foreground">
                      Создавайте и экспортируйте детальные отчеты в различных форматах
                    </p>
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Download" size={16} className="mr-2" />
                    Создать отчет
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentReports.map((report, idx) => (
                    <Card key={idx} className="p-4 border-2 hover:border-primary/30 transition-all hover:shadow-lg">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                          idx % 3 === 0 ? 'from-primary/20 to-secondary/20' :
                          idx % 3 === 1 ? 'from-accent/20 to-magenta/20' :
                          'from-secondary/20 to-primary/20'
                        } flex items-center justify-center`}>
                          <Icon name="FileText" className="text-primary" size={20} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{report.name}</h4>
                          <p className="text-xs text-muted-foreground mb-3">{report.date}</p>
                          <Badge variant="secondary" className="text-xs">
                            Готов
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'help' && (
            <div className="space-y-6 animate-fade-in">
              <Card className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon name="HelpCircle" className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Нужна помощь?</h3>
                <p className="text-muted-foreground mb-6">
                  Мы готовы помочь вам эффективно использовать платформу
                </p>
                <div className="flex gap-3 justify-center">
                  <Button className="bg-gradient-to-r from-primary to-secondary">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Открыть чат
                  </Button>
                  <Button variant="outline">
                    <Icon name="Book" size={16} className="mr-2" />
                    Документация
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;