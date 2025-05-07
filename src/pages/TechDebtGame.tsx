import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Bomb, 
  Wrench, 
  CodeIcon, 
  Bug, 
  TrendingUp, 
  Shield, 
  Layers, 
  Users, 
  Timer, 
  Circle
} from "lucide-react";

// Types for our game
type Player = {
  id: string;
  name: string;
  color: string;
  resources: number;
  features: number;
  score: number;
  isReady: boolean;
  isTurn: boolean;
};

type GameState = {
  techDebt: number;
  bugs: number;
  timeRemaining: number;
  round: number;
  status: 'waiting' | 'playing' | 'gameOver';
  currentPlayerIndex: number;
  message: string;
};

// Available player colors
const PLAYER_COLORS = [
  "#9b87f5", "#F97316", "#0EA5E9", "#D946EF", 
  "#22c55e", "#f43f5e", "#8b5cf6", "#f59e0b", 
  "#10b981", "#6366f1"
];

const TechDebtGame = () => {
  const { toast } = useToast();
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [localPlayerId, setLocalPlayerId] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState>({
    techDebt: 0,
    bugs: 0,
    timeRemaining: 300, // 5 minutes
    round: 1,
    status: 'waiting',
    currentPlayerIndex: 0,
    message: "Waiting for players to join...",
  });
  const [isJoining, setIsJoining] = useState(false);

  // Check if current player has their turn
  const isCurrentPlayerTurn = () => {
    if (!localPlayerId) return false;
    const localPlayer = players.find(p => p.id === localPlayerId);
    return localPlayer?.isTurn || false;
  };

  // Get current player
  const getCurrentPlayer = () => {
    return players.find(p => p.id === localPlayerId);
  };

  // Join game
  const handleJoinGame = () => {
    if (!playerName.trim()) {
      toast({
        title: "Name Required",
        description: "Please enter your name to join the game",
        variant: "destructive",
      });
      return;
    }

    if (players.length >= 10) {
      toast({
        title: "Game Full",
        description: "This game already has the maximum of 10 players",
        variant: "destructive",
      });
      return;
    }

    setIsJoining(true);

    // In a real implementation, this would call an API
    // For now, we'll simulate adding the player locally
    setTimeout(() => {
      const newPlayerId = `player-${Date.now()}`;
      const colorIndex = players.length % PLAYER_COLORS.length;
      
      const newPlayer: Player = {
        id: newPlayerId,
        name: playerName,
        color: PLAYER_COLORS[colorIndex],
        resources: 100,
        features: 0,
        score: 0,
        isReady: false,
        isTurn: players.length === 0, // First player gets first turn
      };

      setPlayers(prev => [...prev, newPlayer]);
      setLocalPlayerId(newPlayerId);
      setIsJoining(false);

      toast({
        title: "Joined Game!",
        description: `Welcome to the Technical Debt Challenge, ${playerName}!`,
      });
    }, 1000);
  };

  // Mark player as ready
  const handleReady = () => {
    setPlayers(prev => 
      prev.map(p => 
        p.id === localPlayerId 
          ? { ...p, isReady: true } 
          : p
      )
    );

    // Check if all players are ready
    const updatedPlayers = players.map(p => 
      p.id === localPlayerId ? { ...p, isReady: true } : p
    );
    
    if (updatedPlayers.length >= 2 && updatedPlayers.every(p => p.isReady)) {
      startGame();
    } else {
      toast({
        title: "Ready!",
        description: "Waiting for other players to get ready...",
      });
    }
  };

  // Start game
  const startGame = () => {
    setGameState(prev => ({
      ...prev,
      status: 'playing',
      message: `Round 1: ${players[0].name}'s turn`,
    }));
    
    toast({
      title: "Game Started!",
      description: "Work together to manage technical debt!",
    });
  };

  // End turn and move to next player
  const endTurn = () => {
    if (gameState.status !== 'playing') return;
    
    // Find next player index
    const nextPlayerIndex = (gameState.currentPlayerIndex + 1) % players.length;
    
    // Update game state and players
    setGameState(prev => ({
      ...prev,
      currentPlayerIndex: nextPlayerIndex,
      message: `${players[nextPlayerIndex].name}'s turn`,
      techDebt: Math.min(100, prev.techDebt + 2) // Tech debt increases slightly each turn
    }));
    
    setPlayers(prev => 
      prev.map((p, i) => ({
        ...p,
        isTurn: i === nextPlayerIndex
      }))
    );
    
    // Update round if we've gone through all players
    if (nextPlayerIndex === 0) {
      setGameState(prev => ({
        ...prev,
        round: prev.round + 1,
        message: `Round ${prev.round + 1}: ${players[0].name}'s turn`,
      }));
      
      // Spawn bugs based on tech debt
      const newBugs = Math.floor(gameState.techDebt / 20); // Higher tech debt = more bugs
      if (newBugs > 0) {
        setGameState(prev => ({
          ...prev,
          bugs: prev.bugs + newBugs
        }));
        
        toast({
          title: `${newBugs} New Bug${newBugs > 1 ? 's' : ''} Appeared!`,
          description: "High technical debt is creating problems!",
          variant: "destructive",
        });
      }
    }
    
    toast({
      title: "Turn Ended",
      description: `Now it's ${players[nextPlayerIndex].name}'s turn!`,
    });
  };

  // Ship a new feature (increases tech debt but adds score)
  const shipFeature = () => {
    if (!isCurrentPlayerTurn()) return;
    
    const player = getCurrentPlayer();
    if (!player) return;
    
    if (player.resources < 20) {
      toast({
        title: "Insufficient Resources",
        description: "You need 20 dev hours to ship a feature",
        variant: "destructive",
      });
      return;
    }
    
    // Update player stats
    setPlayers(prev => 
      prev.map(p => 
        p.id === localPlayerId 
          ? { 
              ...p, 
              resources: p.resources - 20,
              features: p.features + 1,
              score: p.score + 100
            } 
          : p
      )
    );
    
    // Update game state
    setGameState(prev => ({
      ...prev,
      techDebt: Math.min(100, prev.techDebt + 15)
    }));
    
    toast({
      title: "Feature Shipped! 🚀",
      description: `${player.name} shipped a new feature but increased technical debt`,
    });
    
    // Check for tech debt explosion
    if (gameState.techDebt + 15 >= 100) {
      handleGameOver("technical debt");
      return;
    }
    
    endTurn();
  };

  // Refactor code (reduces tech debt but costs resources)
  const refactorCode = () => {
    if (!isCurrentPlayerTurn()) return;
    
    const player = getCurrentPlayer();
    if (!player) return;
    
    if (player.resources < 30) {
      toast({
        title: "Insufficient Resources",
        description: "You need 30 dev hours to refactor code",
        variant: "destructive",
      });
      return;
    }
    
    // Update player stats
    setPlayers(prev => 
      prev.map(p => 
        p.id === localPlayerId 
          ? { 
              ...p, 
              resources: p.resources - 30,
              score: p.score + 50
            } 
          : p
      )
    );
    
    // Update game state
    setGameState(prev => ({
      ...prev,
      techDebt: Math.max(0, prev.techDebt - 25),
      bugs: Math.max(0, prev.bugs - 2) // Refactoring fixes some bugs
    }));
    
    toast({
      title: "Code Refactored! ✨",
      description: `${player.name} improved the codebase quality`,
    });
    
    endTurn();
  };

  // Fix bugs (reduces bugs but costs resources)
  const fixBugs = () => {
    if (!isCurrentPlayerTurn()) return;
    
    const player = getCurrentPlayer();
    if (!player) return;
    
    if (player.resources < 15) {
      toast({
        title: "Insufficient Resources",
        description: "You need 15 dev hours to fix bugs",
        variant: "destructive",
      });
      return;
    }
    
    if (gameState.bugs === 0) {
      toast({
        title: "No Bugs to Fix",
        description: "The codebase is currently bug-free!",
      });
      return;
    }
    
    // Update player stats
    setPlayers(prev => 
      prev.map(p => 
        p.id === localPlayerId 
          ? { 
              ...p, 
              resources: p.resources - 15,
              score: p.score + 30
            } 
          : p
      )
    );
    
    // Update game state
    setGameState(prev => ({
      ...prev,
      bugs: Math.max(0, prev.bugs - 3)
    }));
    
    toast({
      title: "Bugs Fixed! 🐛",
      description: `${player.name} squashed some bugs`,
    });
    
    endTurn();
  };

  // Rest (gain more resources)
  const takeRest = () => {
    if (!isCurrentPlayerTurn()) return;
    
    const player = getCurrentPlayer();
    if (!player) return;
    
    // Update player stats
    setPlayers(prev => 
      prev.map(p => 
        p.id === localPlayerId 
          ? { ...p, resources: p.resources + 40 } 
          : p
      )
    );
    
    toast({
      title: "Team Rested! 😴",
      description: `${player.name}'s team recovered some dev hours`,
    });
    
    endTurn();
  };

  // Game Over
  const handleGameOver = (reason: string) => {
    setGameState(prev => ({
      ...prev,
      status: 'gameOver',
      message: reason === "technical debt" 
        ? "System collapsed under too much technical debt!" 
        : "Time's up! Project deadline reached."
    }));
    
    // Calculate final scores
    const finalScores = players.map(p => ({
      ...p,
      // Penalize score for bugs and tech debt
      score: p.score - (gameState.bugs * 10) - (gameState.techDebt * 5)
    }));
    
    // Sort by score
    const sortedPlayers = [...finalScores].sort((a, b) => b.score - a.score);
    setPlayers(sortedPlayers);
    
    // Show results
    toast({
      title: "Game Over!",
      description: `${sortedPlayers[0].name} leads with ${sortedPlayers[0].score} points!`,
      variant: "destructive",
    });
  };

  // Restart game
  const restartGame = () => {
    setGameState({
      techDebt: 0,
      bugs: 0,
      timeRemaining: 300,
      round: 1,
      status: 'waiting',
      currentPlayerIndex: 0,
      message: "Waiting for players to join...",
    });
    
    // Reset players but keep them in the game
    setPlayers(prev => 
      prev.map(p => ({
        ...p,
        resources: 100,
        features: 0,
        score: 0,
        isReady: false,
        isTurn: p.id === players[0]?.id // First player gets first turn
      }))
    );
    
    toast({
      title: "Game Reset",
      description: "Everyone mark yourselves as ready when you want to start a new game!",
    });
  };

  // Game timer
  useEffect(() => {
    if (gameState.status !== 'playing') return;
    
    const timer = setInterval(() => {
      setGameState(prev => {
        if (prev.timeRemaining <= 0) {
          clearInterval(timer);
          handleGameOver("time");
          return prev;
        }
        
        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1
        };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [gameState.status]);

  // Get debt color for progress bar
  const getDebtColor = () => {
    if (gameState.techDebt < 30) return "bg-green-500";
    if (gameState.techDebt < 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Format time remaining
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Get current player display
  const getCurrentTurnPlayerName = () => {
    const currentPlayer = players[gameState.currentPlayerIndex];
    return currentPlayer ? currentPlayer.name : "Unknown";
  };

  return (
    <div className="garden-container py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-garden-green-dark mb-4">Technical Debt Challenge</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A multiplayer game where 5-10 players collaborate to manage a codebase.
            Balance feature development with code maintenance to keep your system healthy!
          </p>
        </div>

        {/* Player Join Section */}
        {!localPlayerId && (
          <Card className="mb-8 border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle>Join the Game</CardTitle>
              <CardDescription>Enter your name to join this technical debt challenge</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="playerName">Your Name</Label>
                  <Input 
                    id="playerName" 
                    value={playerName} 
                    onChange={(e) => setPlayerName(e.target.value)} 
                    placeholder="Enter your name"
                    className="mt-1"
                    disabled={isJoining}
                  />
                </div>
                <div className="flex items-end">
                  <Button 
                    onClick={handleJoinGame} 
                    disabled={isJoining || !playerName.trim()}
                    className="gap-2 bg-purple-600 hover:bg-purple-700"
                  >
                    <Users />
                    Join Game
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Ready Up Section */}
        {localPlayerId && gameState.status === 'waiting' && (
          <Card className="mb-8 border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle>Players ({players.length}/10)</CardTitle>
              <CardDescription>
                {players.length < 2 
                  ? "We need at least 2 players to start" 
                  : "Mark yourself as ready when you want to begin"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {players.map(player => (
                  <div 
                    key={player.id} 
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{
                      backgroundColor: `${player.color}20`, // Transparent version of player color
                      borderLeft: `4px solid ${player.color}`
                    }}
                  >
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: player.color }}
                    ></div>
                    <span className="font-medium flex-1">{player.name}</span>
                    {player.isReady ? (
                      <span className="text-green-500 text-sm font-medium">Ready</span>
                    ) : player.id === localPlayerId ? (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleReady}
                        className="text-xs"
                      >
                        Ready Up
                      </Button>
                    ) : (
                      <span className="text-gray-400 text-sm">Not Ready</span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Game Board (When Game is Active) */}
        {localPlayerId && gameState.status === 'playing' && (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              {/* System Health Card */}
              <Card className="border-red-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bomb className="text-red-500" />
                    System Health Monitor
                  </CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span>Time remaining: {formatTime(gameState.timeRemaining)}</span>
                    <span className="flex items-center gap-1">
                      <Bug className="text-red-500" /> {gameState.bugs} bugs
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
                          <span>{gameState.techDebt}%</span>
                        </div>
                        <Progress value={gameState.techDebt} className={`h-3 ${getDebtColor()}`} />
                      </div>
                    </div>
                    
                    <div className="p-3 bg-purple-50 rounded-lg flex items-center gap-3">
                      <Timer className="text-purple-600" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">Current Turn</div>
                        <div className="flex gap-2 items-center">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: players[gameState.currentPlayerIndex]?.color || '#888' }}
                          ></div>
                          <span className="font-semibold">{getCurrentTurnPlayerName()}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm">Round</div>
                        <div className="text-lg font-bold text-center">{gameState.round}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Players Card */}
              <Card className="border-green-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="text-garden-green-dark" />
                    Team Members
                  </CardTitle>
                  <CardDescription>
                    Work together to manage technical debt
                  </CardDescription>
                </CardHeader>
                <CardContent className="max-h-[240px] overflow-y-auto">
                  <div className="space-y-2">
                    {players.map(player => (
                      <div 
                        key={player.id} 
                        className={`flex items-center gap-2 p-2 rounded-lg ${player.isTurn ? 'bg-blue-50 border border-blue-200' : ''}`}
                      >
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: player.color }}
                        ></div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span className="font-medium">{player.name}</span>
                            <span className="text-sm">Score: {player.score}</span>
                          </div>
                          <div className="flex gap-6 text-sm text-gray-500">
                            <span>{player.resources} dev hours</span>
                            <span>{player.features} features shipped</span>
                          </div>
                        </div>
                        {player.isTurn && (
                          <div className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                            Current Turn
                          </div>
                        )}
                        {player.id === localPlayerId && (
                          <div className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">
                            You
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Actions</CardTitle>
                  {isCurrentPlayerTurn() ? (
                    <CardDescription>It's your turn! Choose an action</CardDescription>
                  ) : (
                    <CardDescription>
                      Waiting for {getCurrentTurnPlayerName()} to take their turn
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    <Button
                      onClick={shipFeature}
                      disabled={!isCurrentPlayerTurn() || (getCurrentPlayer()?.resources || 0) < 20}
                      className="h-auto py-4 gap-3 flex-col items-center bg-purple-600 hover:bg-purple-700"
                    >
                      <CodeIcon className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Ship Feature</div>
                        <div className="text-xs opacity-90">Cost: 20h</div>
                      </div>
                    </Button>
                    
                    <Button
                      onClick={refactorCode}
                      disabled={!isCurrentPlayerTurn() || (getCurrentPlayer()?.resources || 0) < 30}
                      variant="outline"
                      className="h-auto py-4 gap-3 flex-col items-center border-green-600 text-green-700 hover:bg-green-50"
                    >
                      <Wrench className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Refactor Code</div>
                        <div className="text-xs opacity-90">Cost: 30h</div>
                      </div>
                    </Button>
                    
                    <Button
                      onClick={fixBugs}
                      disabled={!isCurrentPlayerTurn() || (getCurrentPlayer()?.resources || 0) < 15 || gameState.bugs === 0}
                      variant="outline"
                      className="h-auto py-4 gap-3 flex-col items-center border-red-600 text-red-700 hover:bg-red-50"
                    >
                      <Bug className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Fix Bugs</div>
                        <div className="text-xs opacity-90">Cost: 15h</div>
                      </div>
                    </Button>
                    
                    <Button
                      onClick={takeRest}
                      disabled={!isCurrentPlayerTurn()}
                      variant="outline"
                      className="h-auto py-4 gap-3 flex-col items-center border-blue-600 text-blue-700 hover:bg-blue-50"
                    >
                      <Shield className="h-6 w-6" />
                      <div>
                        <div className="font-medium">Rest Team</div>
                        <div className="text-xs opacity-90">Gain: 40h</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Game Over Section */}
        {localPlayerId && gameState.status === 'gameOver' && (
          <Card className="mb-8 border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle>Game Over!</CardTitle>
              <CardDescription>{gameState.message}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Final Scores</h3>
                <div className="space-y-2">
                  {players.map((player, index) => (
                    <div 
                      key={player.id} 
                      className={`flex items-center gap-3 p-3 rounded-lg ${index === 0 ? 'bg-yellow-50 border border-yellow-200' : ''}`}
                    >
                      <div className="text-lg font-bold">{index + 1}</div>
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: player.color }}
                      ></div>
                      <span className="font-medium flex-1">{player.name}</span>
                      <span className="font-bold">{player.score} pts</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <Button onClick={restartGame} className="gap-2">
                  Play Again
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
          <h3 className="font-semibold mb-2">How Technical Debt Works:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-medium">Technical Debt</span>: Represents shortcuts taken during development</li>
            <li><span className="font-medium">Ship Feature</span>: Quickly adds functionality but increases technical debt</li> 
            <li><span className="font-medium">Refactor Code</span>: Improves code quality and reduces technical debt</li>
            <li><span className="font-medium">Fix Bugs</span>: Resolves issues caused by high technical debt</li>
            <li><span className="font-medium">Rest Team</span>: Recover developer hours for your next actions</li>
            <li>If technical debt reaches 100%, the system collapses</li>
            <li>Each round, high technical debt spawns new bugs</li>
            <li>Work together: some players can focus on features while others maintain code quality</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechDebtGame;
