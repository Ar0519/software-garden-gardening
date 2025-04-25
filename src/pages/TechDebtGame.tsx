
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bomb, Wrench, CodeIcon, GaugeIcon } from "lucide-react";

const TechDebtGame = () => {
  const { toast } = useToast();
  const [techDebt, setTechDebt] = useState(0);
  const [resources, setResources] = useState(100);
  const [features, setFeatures] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [timeToExplosion, setTimeToExplosion] = useState(60);

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

      // Accumulate tech debt over time
      setTechDebt((prev) => Math.min(100, prev + (prev > 50 ? 2 : 1)));
    }, 1000);

    return () => clearInterval(timer);
  }, [gameOver, techDebt]);

  const handleGameOver = () => {
    setGameOver(true);
    toast({
      title: "Game Over!",
      description: `Final Score: ${score} (Features: ${features})`,
      variant: "destructive",
    });
  };

  const addFeature = () => {
    if (resources < 20) {
      toast({
        title: "Not enough resources",
        description: "You need 20 resources to add a feature",
        variant: "destructive",
      });
      return;
    }

    setResources((prev) => prev - 20);
    setFeatures((prev) => prev + 1);
    setTechDebt((prev) => Math.min(100, prev + 15));
    setScore((prev) => prev + 100);
    
    toast({
      title: "New Feature Added!",
      description: "Tech debt increased but you gained points",
    });
  };

  const refactorCode = () => {
    if (resources < 30) {
      toast({
        title: "Not enough resources",
        description: "You need 30 resources to refactor",
        variant: "destructive",
      });
      return;
    }

    setResources((prev) => prev - 30);
    setTechDebt((prev) => Math.max(0, prev - 25));
    setScore((prev) => prev + 50);
    
    toast({
      title: "Code Refactored!",
      description: "Tech debt decreased",
      variant: "default",
    });
  };

  const restartGame = () => {
    setTechDebt(0);
    setResources(100);
    setFeatures(0);
    setGameOver(false);
    setScore(0);
    setTimeToExplosion(60);
  };

  return (
    <div className="garden-container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-garden-green-dark mb-4">Tech Debt Timebomb</h1>
          <p className="text-lg text-gray-600">
            Balance adding features with managing technical debt before the system explodes!
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bomb className="text-red-500" />
                Tech Debt Bomb
              </CardTitle>
              <CardDescription>
                Time until explosion: {timeToExplosion}s
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <GaugeIcon className="text-red-500" />
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span>Tech Debt Level</span>
                      <span>{techDebt}%</span>
                    </div>
                    <Progress value={techDebt} className="bg-red-100" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CodeIcon className="text-garden-green-dark" />
                Game Stats
              </CardTitle>
              <CardDescription>
                Current Score: {score}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Resources</span>
                  <span className="font-mono">{resources}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Features Built</span>
                  <span className="font-mono">{features}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          <Button
            onClick={addFeature}
            disabled={gameOver || resources < 20}
            className="gap-2"
          >
            <CodeIcon />
            Add Feature (20)
          </Button>
          <Button
            onClick={refactorCode}
            disabled={gameOver || resources < 30}
            variant="outline"
            className="gap-2"
          >
            <Wrench />
            Refactor Code (30)
          </Button>
          {gameOver && (
            <Button onClick={restartGame} variant="default">
              Play Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechDebtGame;
