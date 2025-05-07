
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { 
  Bomb, 
  Wrench, 
  Code, 
  Bug, 
  Shield, 
  Layers, 
  Timer,
  CircleCheck,
  Clock,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Settings,
  FileCode,
  CircleX,
  Users
} from "lucide-react";
import { Slider } from "@/components/ui/slider";

// Define game data types
type Feature = {
  id: string;
  name: string;
  complexity: number; // 1-10
  techDebtCost: number;
  implemented: boolean;
  bugsGenerated: number;
  icon: React.ReactNode;
};

type Sprint = {
  number: number;
  techDebtAccumulated: number;
  featuresCompleted: number;
  bugsIntroduced: number;
  bugsFixed: number;
  techDebtReduced: number;
  velocity: number; // Development velocity (affected by tech debt)
};

type GameState = {
  companyName: string;
  day: number;
  sprint: number;
  techDebt: number;
  bugs: number;
  resources: number; // Developer hours available
  velocity: number; // How fast you can implement features (affected by tech debt)
  features: Feature[];
  sprints: Sprint[];
  customerSatisfaction: number; // 0-100
  projectHealth: number; // 0-100
  status: 'intro' | 'playing' | 'gameOver';
  message: string;
  gameOverReason?: string;
};

// Sample feature list
const AVAILABLE_FEATURES: Feature[] = [
  {
    id: 'f1',
    name: 'User Authentication',
    complexity: 5,
    techDebtCost: 10,
    implemented: false,
    bugsGenerated: 2,
    icon: <Shield className="text-blue-500" />
  },
  {
    id: 'f2',
    name: 'Dashboard UI',
    complexity: 3,
    techDebtCost: 8,
    implemented: false,
    bugsGenerated: 1,
    icon: <Layers className="text-indigo-500" />
  },
  {
    id: 'f3',
    name: 'Data Export',
    complexity: 4,
    techDebtCost: 12,
    implemented: false, 
    bugsGenerated: 3,
    icon: <FileCode className="text-green-500" />
  },
  {
    id: 'f4',
    name: 'Search Functionality',
    complexity: 6,
    techDebtCost: 15,
    implemented: false,
    bugsGenerated: 2,
    icon: <Settings className="text-amber-500" />
  },
  {
    id: 'f5',
    name: 'Notification System',
    complexity: 7,
    techDebtCost: 18,
    implemented: false,
    bugsGenerated: 4,
    icon: <CircleCheck className="text-purple-500" />
  }
];

// Scenarios that randomly occur
const SCENARIOS = [
  {
    title: "New Framework Released",
    description: "A new framework has been released that could improve development speed, but requires refactoring.",
    options: [
      { 
        text: "Adopt new framework", 
        effect: { resources: -20, techDebt: -15, velocity: 15 } 
      },
      { 
        text: "Stick with current tech", 
        effect: { techDebt: 5 } 
      }
    ]
  },
  {
    title: "Customer Urgent Request",
    description: "A key customer needs an urgent feature modification. You can rush it or take time to do it properly.",
    options: [
      { 
        text: "Rush implementation", 
        effect: { customerSatisfaction: 10, techDebt: 15, bugs: 3 } 
      },
      { 
        text: "Take time to do it right", 
        effect: { customerSatisfaction: 5, resources: -10 } 
      }
    ]
  },
  {
    title: "Code Review Decision",
    description: "Your team is discussing whether to implement strict code review policies.",
    options: [
      { 
        text: "Implement strict reviews", 
        effect: { velocity: -5, techDebt: -10, bugs: -2 } 
      },
      { 
        text: "Keep current process", 
        effect: { velocity: 5, techDebt: 5, bugs: 1 } 
      }
    ]
  }
];

// Initial game state
const initialState: GameState = {
  companyName: 'TechCraft Solutions',
  day: 1,
  sprint: 1,
  techDebt: 0,
  bugs: 0,
  resources: 40,
  velocity: 100,
  features: [...AVAILABLE_FEATURES],
  sprints: [],
  customerSatisfaction: 80,
  projectHealth: 100,
  status: 'intro',
  message: "Welcome to Tech Debt Simulator! You're in charge of a software project."
};

const TechDebtGame = () => {
  const { toast } = useToast();
  const [gameState, setGameState] = useState<GameState>(initialState);
  const [showScenario, setShowScenario] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<any>(null);
  const [qualityFocus, setQualityFocus] = useState<number>(50); // Quality vs Speed slider (0-100)
  const [showTutorial, setShowTutorial] = useState(true);

  // Calculate tech debt impact on development
  const calculateVelocityImpact = () => {
    // As tech debt increases, velocity decreases
    const impact = 100 - (gameState.techDebt * 0.8);
    return Math.max(20, impact); // Minimum 20% velocity
  };

  // Start game
  const startGame = () => {
    setGameState({
      ...initialState,
      status: 'playing',
      message: "Day 1: Let's start building our software project!",
    });
    setShowTutorial(false);
    toast({
      title: "Project Started!",
      description: "Make wise decisions to balance speed and quality!",
    });
  };

  // Implement a feature
  const implementFeature = (featureId: string) => {
    const feature = gameState.features.find(f => f.id === featureId);
    if (!feature) return;
    
    // Calculate cost based on complexity and tech debt
    const resourceCost = feature.complexity * (1 + gameState.techDebt / 100);
    
    if (gameState.resources < resourceCost) {
      toast({
        title: "Insufficient Resources",
        description: "Your team doesn't have enough developer hours.",
        variant: "destructive",
      });
      return;
    }
    
    // Calculate tech debt increase - affected by quality focus
    const qualityFactor = qualityFocus / 100; // 0 to 1
    const techDebtIncrease = feature.techDebtCost * (1 - qualityFactor) * 1.5;
    const bugsGenerated = Math.floor(feature.bugsGenerated * (1 - qualityFactor) * 1.2);
    
    // Update game state
    setGameState(prev => {
      const updatedFeatures = prev.features.map(f => 
        f.id === featureId ? { ...f, implemented: true } : f
      );
      
      const newTechDebt = Math.min(100, prev.techDebt + techDebtIncrease);
      
      return {
        ...prev,
        resources: prev.resources - resourceCost,
        techDebt: newTechDebt,
        bugs: prev.bugs + bugsGenerated,
        features: updatedFeatures,
        customerSatisfaction: Math.min(100, prev.customerSatisfaction + 5),
        velocity: calculateVelocityImpact(),
        message: `Implemented ${feature.name}! ${bugsGenerated > 0 ? `Generated ${bugsGenerated} new bugs.` : ''}`,
      };
    });
    
    toast({
      title: `${feature.name} Implemented! 🚀`,
      description: `${bugsGenerated > 0 ? `Generated ${bugsGenerated} bugs. Technical debt increased.` : 'Feature added successfully!'}`,
    });
    
    // Check game over conditions
    if (gameState.techDebt + techDebtIncrease >= 100) {
      endGame("Project collapsed under technical debt!");
      return;
    }
    
    // Random chance of scenario
    if (Math.random() < 0.3) {
      triggerRandomScenario();
    }
    
    // Advance time
    advanceTime();
  };

  // Reduce tech debt (refactoring)
  const refactorCode = () => {
    const refactoringCost = 15 + (gameState.techDebt * 0.2);
    
    if (gameState.resources < refactoringCost) {
      toast({
        title: "Insufficient Resources",
        description: "Your team doesn't have enough developer hours to refactor.",
        variant: "destructive",
      });
      return;
    }
    
    // Calculate refactoring effectiveness based on current tech debt
    const debtReduction = Math.min(gameState.techDebt, 10 + (gameState.techDebt * 0.15));
    
    setGameState(prev => ({
      ...prev,
      resources: prev.resources - refactoringCost,
      techDebt: Math.max(0, prev.techDebt - debtReduction),
      velocity: calculateVelocityImpact(),
      projectHealth: Math.min(100, prev.projectHealth + 5),
      message: `Performed code refactoring! Reduced technical debt by ${debtReduction.toFixed(1)} points.`,
    }));
    
    toast({
      title: "Code Refactored! ✨",
      description: `Reduced technical debt by ${debtReduction.toFixed(1)} points. Development velocity improved.`,
    });
    
    advanceTime();
  };

  // Fix bugs
  const fixBugs = () => {
    if (gameState.bugs === 0) {
      toast({
        title: "No Bugs to Fix",
        description: "Your codebase is currently bug-free! Great job!",
      });
      return;
    }
    
    const bugFixCost = Math.min(gameState.resources, 5 * Math.min(gameState.bugs, 3));
    const bugsToFix = Math.min(gameState.bugs, Math.floor(bugFixCost / 5) + 1);
    
    if (gameState.resources < 5) {
      toast({
        title: "Insufficient Resources",
        description: "Your team needs at least 5 developer hours to fix bugs.",
        variant: "destructive",
      });
      return;
    }
    
    setGameState(prev => ({
      ...prev,
      resources: prev.resources - bugFixCost,
      bugs: prev.bugs - bugsToFix,
      customerSatisfaction: Math.min(100, prev.customerSatisfaction + 3),
      projectHealth: Math.min(100, prev.projectHealth + 3),
      message: `Fixed ${bugsToFix} bug${bugsToFix > 1 ? 's' : ''}! Customers are happier.`,
    }));
    
    toast({
      title: `${bugsToFix} Bug${bugsToFix > 1 ? 's' : ''} Fixed! 🐛`,
      description: "Your software is more stable now. Customer satisfaction improved.",
    });
    
    advanceTime();
  };

  // Add more resources (developers)
  const addResources = () => {
    setGameState(prev => ({
      ...prev,
      resources: prev.resources + 30,
      message: "Added more developer capacity to the team!",
    }));
    
    toast({
      title: "Team Expanded! 👩‍💻👨‍💻",
      description: "Added 30 more developer hours to your team.",
    });
    
    advanceTime();
  };

  // Handle scenario choice
  const handleScenarioChoice = (effectIndex: number) => {
    if (!currentScenario) return;
    
    const effect = currentScenario.options[effectIndex].effect;
    
    setGameState(prev => {
      let newState = { ...prev };
      
      if (effect.resources) newState.resources = Math.max(0, prev.resources + effect.resources);
      if (effect.techDebt) newState.techDebt = Math.min(100, Math.max(0, prev.techDebt + effect.techDebt));
      if (effect.bugs) newState.bugs = Math.max(0, prev.bugs + effect.bugs);
      if (effect.velocity) newState.velocity = Math.max(20, Math.min(100, prev.velocity + effect.velocity));
      if (effect.customerSatisfaction) newState.customerSatisfaction = Math.min(100, Math.max(0, prev.customerSatisfaction + effect.customerSatisfaction));
      
      newState.message = `Decision made: ${currentScenario.options[effectIndex].text}`;
      
      return newState;
    });
    
    setShowScenario(false);
    advanceTime();
  };

  // Trigger random scenario
  const triggerRandomScenario = () => {
    const randomIndex = Math.floor(Math.random() * SCENARIOS.length);
    setCurrentScenario(SCENARIOS[randomIndex]);
    setShowScenario(true);
  };

  // Advance time (day)
  const advanceTime = () => {
    setGameState(prev => {
      // New day
      let newDay = prev.day + 1;
      let newSprint = prev.sprint;
      let message = `Day ${newDay}`;
      let newSprints = [...prev.sprints];
      
      // End of sprint (every 10 days)
      if (newDay % 10 === 1) {
        newSprint++;
        message = `Starting Sprint ${newSprint}!`;
        
        // Record sprint stats
        const implementedFeatures = prev.features.filter(f => f.implemented).length;
        const previousSprintFeatures = newSprints.length > 0 ? 
          newSprints[newSprints.length - 1].featuresCompleted : 0;
        
        newSprints.push({
          number: newSprint - 1, // Just completed sprint
          techDebtAccumulated: prev.techDebt,
          featuresCompleted: implementedFeatures - previousSprintFeatures,
          bugsIntroduced: prev.bugs,
          bugsFixed: 0, // We'd need to track this separately for accuracy
          techDebtReduced: 0, // Same here
          velocity: prev.velocity
        });
        
        // Sprint effects
        if (prev.techDebt > 50) {
          message += " High technical debt is slowing down development.";
        }
      }
      
      // Daily effects from tech debt
      let newTechDebt = prev.techDebt;
      let newBugs = prev.bugs;
      let projectHealthChange = 0;
      
      if (prev.techDebt > 70) {
        // High tech debt can generate bugs on its own
        const randomBugs = Math.floor(Math.random() * 3);
        if (randomBugs > 0) {
          newBugs += randomBugs;
          message += ` ${randomBugs} new bug${randomBugs > 1 ? 's' : ''} appeared due to high technical debt!`;
        }
        projectHealthChange -= 2;
      }
      
      if (prev.bugs > 10) {
        projectHealthChange -= 3;
        message += " Numerous bugs are affecting project health.";
      }
      
      // Compounding tech debt (small amount daily)
      if (prev.techDebt > 0) {
        const compoundDebt = prev.techDebt * 0.02;
        newTechDebt = Math.min(100, newTechDebt + compoundDebt);
      }
      
      // Update project health
      const newProjectHealth = Math.max(0, Math.min(100, prev.projectHealth + projectHealthChange));
      
      // Check game over conditions
      if (newProjectHealth <= 0) {
        endGame("Project health reached critical level!");
        return prev;
      }
      
      if (newTechDebt >= 100) {
        endGame("Technical debt became unmanageable!");
        return prev;
      }
      
      // All features implemented - you win!
      if (prev.features.every(f => f.implemented)) {
        endGame("All features implemented successfully!", true);
        return prev;
      }
      
      return {
        ...prev,
        day: newDay,
        sprint: newSprint,
        sprints: newSprints,
        techDebt: newTechDebt,
        bugs: newBugs,
        projectHealth: newProjectHealth,
        message: message,
        velocity: calculateVelocityImpact()
      };
    });
  };

  // End game (success or failure)
  const endGame = (reason: string, success = false) => {
    setGameState(prev => ({
      ...prev,
      status: 'gameOver',
      message: success ? "Project Completed Successfully!" : "Game Over!",
      gameOverReason: reason
    }));
    
    toast({
      title: success ? "Project Success! 🎉" : "Project Failed! 😢",
      description: reason,
      variant: success ? "default" : "destructive"
    });
  };

  // Restart game
  const restartGame = () => {
    setGameState(initialState);
    setShowTutorial(true);
    toast({
      title: "New Project Started",
      description: "Let's try again with a clean slate!",
    });
  };

  // Get color for tech debt progress bar
  const getTechDebtColor = () => {
    if (gameState.techDebt < 30) return "bg-green-500";
    if (gameState.techDebt < 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Calculate percentage of implemented features
  const featureCompletionPercentage = () => {
    const implemented = gameState.features.filter(f => f.implemented).length;
    return (implemented / gameState.features.length) * 100;
  };

  // Tutorial component
  const TutorialSection = () => (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold text-garden-green-dark">Welcome to Tech Debt Simulator!</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="bg-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="text-purple-600" />
              What is Technical Debt?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-left">
            <p>Technical debt is the implied cost of additional rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer.</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>It's like taking a shortcut now but paying interest later</li>
              <li>Accumulates when code quality is sacrificed for speed</li>
              <li>Makes future changes slower and more expensive</li>
              <li>Can eventually lead to project failure if ignored</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="text-blue-600" />
              How to Play
            </CardTitle>
          </CardHeader>
          <CardContent className="text-left">
            <p>You're managing a software project! Balance development speed with code quality.</p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>Implement features to progress</li>
              <li>Reduce technical debt by refactoring</li>
              <li>Fix bugs to maintain customer satisfaction</li>
              <li>Adjust quality focus slider to balance speed vs. quality</li>
              <li>Manage resources carefully</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <Button onClick={startGame} className="mt-4 bg-garden-green-dark hover:bg-garden-green-mid text-lg px-8">
        Start Project
      </Button>
    </div>
  );

  return (
    <div className="garden-container py-8 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-garden-green-dark mb-4">Technical Debt Simulator</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the challenges of balancing feature development with code quality.
            Will you manage technical debt effectively or watch your project collapse?
          </p>
        </div>

        {/* Tutorial */}
        {showTutorial && <TutorialSection />}

        {/* Game UI */}
        {!showTutorial && gameState.status === 'playing' && (
          <div className="space-y-6">
            {/* Project Overview Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Project Stats */}
              <Card className="border-blue-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="text-blue-500" />
                    Project Status
                  </CardTitle>
                  <CardDescription className="flex justify-between">
                    <span>{gameState.companyName}</span>
                    <span>Sprint {gameState.sprint}, Day {gameState.day}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Layers className="text-orange-500" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span>Technical Debt</span>
                          <span>{gameState.techDebt.toFixed(1)}%</span>
                        </div>
                        <Progress value={gameState.techDebt} className={`h-3 ${getTechDebtColor()}`} />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Bug className="text-red-500" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span>Bugs</span>
                          <span>{gameState.bugs}</span>
                        </div>
                        <Progress 
                          value={Math.min(100, gameState.bugs * 5)} 
                          className={`h-3 ${gameState.bugs > 5 ? 'bg-red-500' : 'bg-amber-500'}`} 
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <CircleCheck className="text-green-500" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span>Feature Completion</span>
                          <span>{featureCompletionPercentage().toFixed(0)}%</span>
                        </div>
                        <Progress value={featureCompletionPercentage()} className="h-3 bg-green-500" />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Shield className="text-purple-500" />
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span>Project Health</span>
                          <span>{gameState.projectHealth}%</span>
                        </div>
                        <Progress 
                          value={gameState.projectHealth} 
                          className={`h-3 ${
                            gameState.projectHealth > 70 ? 'bg-green-500' : 
                            gameState.projectHealth > 40 ? 'bg-yellow-500' : 'bg-red-500'
                          }`} 
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Resources & Message */}
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="text-green-500" />
                    Development Resources
                  </CardTitle>
                  <CardDescription>
                    Available capacity and velocity
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-green-50 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-500">Available Resources</div>
                      <div className="text-2xl font-bold text-garden-green-dark">{gameState.resources} hours</div>
                    </div>
                    <div className="text-5xl font-bold text-garden-green-dark opacity-20">⏱️</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <ArrowRight className={`${gameState.velocity > 50 ? 'text-green-500' : 'text-amber-500'}`} />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span>Development Velocity</span>
                        <span>{gameState.velocity.toFixed(0)}%</span>
                      </div>
                      <Progress 
                        value={gameState.velocity} 
                        className={`h-3 ${
                          gameState.velocity > 70 ? 'bg-green-500' : 
                          gameState.velocity > 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`} 
                      />
                    </div>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-blue-50">
                    <div className="text-sm font-medium text-gray-500 mb-1">Message:</div>
                    <div className="text-blue-800">{gameState.message}</div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quality Focus */}
              <Card className="border-purple-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="text-purple-500" />
                    Development Focus
                  </CardTitle>
                  <CardDescription>
                    Balance between speed and quality
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <ArrowRight className="text-red-500" />
                        <span>Fast Development</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>Quality Code</span>
                        <ArrowRight className="text-green-500" />
                      </div>
                    </div>
                    <Slider 
                      defaultValue={[50]} 
                      value={[qualityFocus]}
                      onValueChange={(val) => setQualityFocus(val[0])}
                      max={100} 
                      step={5}
                      className="cursor-pointer"
                    />
                    <div className="text-center font-medium">
                      {qualityFocus < 30 && "Moving very fast but accumulating lots of tech debt"}
                      {qualityFocus >= 30 && qualityFocus < 60 && "Balanced approach"}
                      {qualityFocus >= 60 && "Prioritizing clean code over speed"}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-red-50 rounded-lg text-center">
                      <div className="text-xs text-red-500 font-medium">Speed Impact</div>
                      <div className="text-xl font-bold text-red-700">
                        {qualityFocus < 50 ? "+" : ""}
                        {Math.round((50 - qualityFocus) / 2)}%
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg text-center">
                      <div className="text-xs text-green-500 font-medium">Debt Impact</div>
                      <div className="text-xl font-bold text-green-700">
                        {qualityFocus > 50 ? "-" : "+"}
                        {Math.round(Math.abs(50 - qualityFocus) / 2)}%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features & Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Feature List */}
              <Card className="lg:col-span-2 border-amber-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="text-amber-500" />
                    Features to Implement
                  </CardTitle>
                  <CardDescription>
                    Choose features to implement for your product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {gameState.features.map(feature => (
                      <div 
                        key={feature.id} 
                        className={`flex items-center p-3 rounded-lg border ${
                          feature.implemented 
                            ? 'bg-green-50 border-green-200' 
                            : 'bg-white border-gray-200 hover:border-blue-300 transition-colors'
                        }`}
                      >
                        <div className="mr-3">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{feature.name}</div>
                          <div className="text-sm text-gray-500 flex flex-wrap gap-x-4">
                            <span>Complexity: {feature.complexity}</span>
                            <span>Tech Debt Risk: {feature.techDebtCost}</span>
                          </div>
                        </div>
                        {feature.implemented ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                            Implemented
                          </span>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-blue-300 text-blue-600 hover:bg-blue-50"
                            onClick={() => implementFeature(feature.id)}
                          >
                            Implement
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Actions */}
              <Card className="border-blue-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="text-blue-500" />
                    Actions
                  </CardTitle>
                  <CardDescription>
                    Manage your project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <Button
                      onClick={refactorCode}
                      variant="outline"
                      className="justify-start border-green-300 text-green-700 hover:bg-green-50 py-6"
                      disabled={gameState.resources < 15}
                    >
                      <Wrench className="mr-2" />
                      <div className="text-left">
                        <div className="font-medium">Refactor Code</div>
                        <div className="text-xs">Reduce tech debt. Cost: 15+ hours</div>
                      </div>
                    </Button>
                    
                    <Button
                      onClick={fixBugs}
                      variant="outline"
                      className="justify-start border-red-300 text-red-700 hover:bg-red-50 py-6"
                      disabled={gameState.bugs === 0 || gameState.resources < 5}
                    >
                      <Bug className="mr-2" />
                      <div className="text-left">
                        <div className="font-medium">Fix Bugs</div>
                        <div className="text-xs">Fix up to 3 bugs. Cost: 5+ hours</div>
                      </div>
                    </Button>
                    
                    <Button
                      onClick={addResources}
                      variant="outline"
                      className="justify-start border-blue-300 text-blue-700 hover:bg-blue-50 py-6"
                    >
                      <Users className="mr-2" />
                      <div className="text-left">
                        <div className="font-medium">Add Resources</div>
                        <div className="text-xs">Add 30 developer hours</div>
                      </div>
                    </Button>
                    
                    <Button
                      onClick={advanceTime}
                      className="justify-start py-6"
                    >
                      <Timer className="mr-2" />
                      <div className="text-left">
                        <div className="font-medium">Next Day</div>
                        <div className="text-xs">Advance to next day</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Scenario Popup */}
            {showScenario && currentScenario && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <Card className="w-full max-w-md border-purple-300 shadow-2xl animate-scale-in">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Settings className="text-purple-500" />
                      {currentScenario.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6">{currentScenario.description}</p>
                    <div className="space-y-3">
                      {currentScenario.options.map((option: any, i: number) => (
                        <Button 
                          key={i} 
                          onClick={() => handleScenarioChoice(i)}
                          className="w-full justify-start py-4"
                          variant={i === 0 ? "default" : "outline"}
                        >
                          <div className="text-left">
                            <div>{option.text}</div>
                            <div className="text-xs mt-1 opacity-80">
                              {Object.entries(option.effect).map(([key, value]: [string, any]) => (
                                <span key={key} className="mr-3">
                                  {key}: {value > 0 ? "+" : ""}{value}
                                </span>
                              ))}
                            </div>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        )}

        {/* Game Over */}
        {!showTutorial && gameState.status === 'gameOver' && (
          <Card className="border-purple-300 shadow-xl max-w-2xl mx-auto animate-scale-in">
            <CardHeader className={gameState.gameOverReason?.includes("success") ? "bg-green-50" : "bg-red-50"}>
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                {gameState.gameOverReason?.includes("success") ? (
                  <CircleCheck className="text-green-500" />
                ) : (
                  <CircleX className="text-red-500" />
                )}
                {gameState.message}
              </CardTitle>
              <CardDescription className="text-center text-base">
                {gameState.gameOverReason}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg bg-blue-50">
                    <div className="text-sm">Technical Debt</div>
                    <div className="text-2xl font-bold">{gameState.techDebt.toFixed(1)}%</div>
                  </div>
                  <div className="p-4 rounded-lg bg-amber-50">
                    <div className="text-sm">Days Passed</div>
                    <div className="text-2xl font-bold">{gameState.day}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-green-50">
                    <div className="text-sm">Features Completed</div>
                    <div className="text-2xl font-bold">
                      {gameState.features.filter(f => f.implemented).length}/{gameState.features.length}
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-red-50">
                    <div className="text-sm">Bugs Remaining</div>
                    <div className="text-2xl font-bold">{gameState.bugs}</div>
                  </div>
                </div>
                
                <div className="text-center pt-2">
                  <Button onClick={restartGame} className="px-8">
                    Start New Project
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Educational Section */}
        {!showTutorial && (
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle>Understanding Technical Debt</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h3 className="font-bold flex items-center gap-1">
                    <ArrowRight className="text-red-500 h-4 w-4" />
                    What Causes Tech Debt
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Pressure to deliver quickly</li>
                    <li>Insufficient planning</li>
                    <li>Lack of documentation</li>
                    <li>Postponed refactoring</li>
                    <li>Changing requirements</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold flex items-center gap-1">
                    <ArrowRight className="text-amber-500 h-4 w-4" />
                    Consequences of Tech Debt
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Slower development velocity</li>
                    <li>Increased bug rate</li>
                    <li>Higher maintenance costs</li>
                    <li>Difficulty adding new features</li>
                    <li>Developer frustration</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold flex items-center gap-1">
                    <ArrowRight className="text-green-500 h-4 w-4" />
                    Managing Tech Debt Effectively
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Regular refactoring sessions</li>
                    <li>Code reviews and quality standards</li>
                    <li>Technical debt tracking</li>
                    <li>Automated testing</li>
                    <li>Balancing short and long-term goals</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TechDebtGame;
