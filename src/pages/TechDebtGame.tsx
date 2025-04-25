
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bomb, Wrench, CodeIcon, Bug, TrendingUp, Shield, Layers } from "lucide-react";

const TechDebtGame = () => {
  const { toast } = useToast();
  const [techDebt, setTechDebt] = useState(0);
  const [resources, setResources] = useState(100);
  const [features, setFeatures] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeToExplosion, setTimeToExplosion] = useState(60);
  const [bugs, setBugs] = useState(0);

  useEffect(() => {
    if (gameOver) return;

    const timer = setInterval(() => {
      if (techDebt >= 100) {
        handleGameOver();
        return;
      }

      setTimeToExplosion((prev) => {
        if (prev <= 0) {
          handleGameOver();
          return 0;
        }
        return prev - 1;
      });

      // Accumulate tech debt and generate bugs based on debt level
      setTechDebt((prev) => {
        const newDebt = Math.min(100, prev + (prev > 50 ? 2 : 1));
        if (Math.random() < newDebt / 200) { // Higher debt = more bugs
          setBugs(b => b + 1);
        }
        return newDebt;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameOver, techDebt]);

  const handleGameOver = () => {
    setGameOver(true);
    toast({
      title: "System Collapse!",
      description: `Your codebase collapsed under ${techDebt}% technical debt with ${bugs} unresolved bugs. Final Score: ${score}`,
      variant: "destructive",
    });
  };

  const addFeature = () => {
    if (resources < 20) {
      toast({
        title: "Insufficient Resources",
        description: "You need 20 developer hours to add a feature",
        variant: "destructive",
      });
      return;
    }

    setResources((prev) => prev - 20);
    setFeatures((prev) => prev + 1);
    setTechDebt((prev) => Math.min(100, prev + 15));
    setScore((prev) => prev + 100);
    
    toast({
      title: "Feature Shipped! 🚀",
      description: "Quick implementation increased technical debt...",
    });
  };

  const refactorCode = () => {
    if (resources < 30) {
      toast({
        title: "Insufficient Resources",
        description: "You need 30 developer hours to refactor the code",
        variant: "destructive",
      });
      return;
    }

    setResources((prev) => prev - 30);
    setTechDebt((prev) => Math.max(0, prev - 25));
    setBugs((prev) => Math.max(0, prev - 2)); // Refactoring fixes some bugs
    setScore((prev) => prev + 50);
    
    toast({
      title: "Code Refactored! ✨",
      description: "Your codebase is now cleaner and more maintainable",
    });
  };

  const restartGame = () => {
    setTechDebt(0);
    setResources(100);
    setFeatures(0);
    setBugs(0);
    setGameOver(false);
    setScore(0);
    setTimeToExplosion(60);
  };

  const getDebtColor = () => {
    if (techDebt < 30) return "bg-green-500";
    if (techDebt < 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="garden-container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-garden-green-dark mb-4">Tech Debt Timebomb</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Balance feature development with code maintenance! Technical debt accumulates as you rush features, 
            making your system unstable. Can you keep your codebase healthy while delivering value?
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-red-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bomb className="text-red-500" />
                System Health Monitor
              </CardTitle>
              <CardDescription className="flex items-center justify-between">
                <span>Time until system overload: {timeToExplosion}s</span>
                <span className="flex items-center gap-1">
                  <Bug className="text-red-500" /> {bugs} bugs
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Layers className="text-orange-500" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span>Technical Debt Level</span>
                      <span>{techDebt}%</span>
                    </div>
                    <Progress value={techDebt} className={`h-3 ${getDebtColor()}`} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-garden-green-dark" />
                Development Metrics
              </CardTitle>
              <CardDescription>
                Current Score: {score} points
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <Shield className="text-blue-500" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span>Developer Resources</span>
                      <span className="font-mono font-bold">{resources} hours</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <CodeIcon className="text-purple-500" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span>Features Delivered</span>
                      <span className="font-mono font-bold">{features}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          <Button
            onClick={addFeature}
            disabled={gameOver || resources < 20}
            className="gap-2 bg-purple-600 hover:bg-purple-700"
          >
            <CodeIcon />
            Ship Feature (20h)
          </Button>
          <Button
            onClick={refactorCode}
            disabled={gameOver || resources < 30}
            variant="outline"
            className="gap-2 border-green-600 text-green-700 hover:bg-green-50"
          >
            <Wrench />
            Refactor Code (30h)
          </Button>
          {gameOver && (
            <Button 
              onClick={restartGame} 
              variant="default"
              className="gap-2 bg-blue-600 hover:bg-blue-700"
            >
              Play Again
            </Button>
          )}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <h3 className="font-semibold mb-2">How Technical Debt Works:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Shipping features quickly increases technical debt</li>
            <li>High technical debt spawns more bugs over time</li>
            <li>Refactoring reduces debt and fixes some bugs</li>
            <li>If debt reaches 100% or time runs out, the system collapses</li>
            <li>Balance speed of delivery with code quality to win!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechDebtGame;
