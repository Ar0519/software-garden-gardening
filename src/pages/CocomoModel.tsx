
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LightbulbIcon, HelpCircle, Info, MousePointerClick } from "lucide-react";

const CocomoModel = () => {
  return (
    <div className="min-h-screen bg-garden-green-light/20 py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-garden-green-dark mb-2">
          The COCOMO Model
        </h1>
        <p className="text-gray-600 mb-8">
          Constructive Cost Model (COCOMO) is an algorithmic software cost estimation model
          developed by Barry Boehm to estimate effort, cost, and schedule for software projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-garden-green-mid/10 pb-2">
              <CardTitle className="text-xl font-medium text-garden-green-dark">Basic COCOMO</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600">
                A static, single-valued model that computes software development effort as a function of program size expressed in estimated KLOC.
              </p>
              <div className="mt-3 p-3 bg-garden-green-light/10 rounded-md">
                <p className="font-mono text-sm">E = a × (KLOC)<sup>b</sup></p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-garden-green-mid/10 pb-2">
              <CardTitle className="text-xl font-medium text-garden-green-dark">Intermediate COCOMO</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600">
                Adds accuracy by using a set of 15 cost drivers that account for various aspects of the software development process.
              </p>
              <div className="mt-3 p-3 bg-garden-green-light/10 rounded-md">
                <p className="font-mono text-sm">E = a × (KLOC)<sup>b</sup> × EAF</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-garden-green-mid/10 pb-2">
              <CardTitle className="text-xl font-medium text-garden-green-dark">Detailed COCOMO</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-gray-600">
                Incorporates the impact of project phases on cost drivers and calculates efforts for each phase separately.
              </p>
              <div className="mt-3 p-3 bg-garden-green-light/10 rounded-md">
                <p className="font-mono text-sm">E<sub>phase</sub> = E<sub>total</sub> × Phase%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-garden-green-dark mb-4">
            COCOMO Parameters Explained
          </h2>
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-md">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-4 py-3 hover:bg-garden-green-light/5">
                Software Project Types
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="font-bold min-w-[120px]">Organic:</div>
                    <div>Small teams with good experience working with less rigid requirements</div>
                  </div>
                  <div className="flex items-start">
                    <div className="font-bold min-w-[120px]">Semi-detached:</div>
                    <div>Medium-sized teams with mixed experience working with a mix of rigid and less rigid requirements</div>
                  </div>
                  <div className="flex items-start">
                    <div className="font-bold min-w-[120px]">Embedded:</div>
                    <div>Developed within tight constraints with a combination of hardware, software, and operational constraints</div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="px-4 py-3 hover:bg-garden-green-light/5">
                Basic COCOMO Coefficients
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-garden-green-light/20">
                      <th className="p-2 text-left">Software Project</th>
                      <th className="p-2 text-left">a</th>
                      <th className="p-2 text-left">b</th>
                      <th className="p-2 text-left">c</th>
                      <th className="p-2 text-left">d</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border-t">Organic</td>
                      <td className="p-2 border-t">2.4</td>
                      <td className="p-2 border-t">1.05</td>
                      <td className="p-2 border-t">2.5</td>
                      <td className="p-2 border-t">0.38</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t">Semi-detached</td>
                      <td className="p-2 border-t">3.0</td>
                      <td className="p-2 border-t">1.12</td>
                      <td className="p-2 border-t">2.5</td>
                      <td className="p-2 border-t">0.35</td>
                    </tr>
                    <tr>
                      <td className="p-2 border-t">Embedded</td>
                      <td className="p-2 border-t">3.6</td>
                      <td className="p-2 border-t">1.20</td>
                      <td className="p-2 border-t">2.5</td>
                      <td className="p-2 border-t">0.32</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-3 text-sm text-gray-600">
                  <span className="font-semibold">Where:</span> E = a × (KLOC)<sup>b</sup> and D = c × (E)<sup>d</sup>
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  E is effort in person-months, D is development time in months, and KLOC is thousands of lines of code.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="px-4 py-3 hover:bg-garden-green-light/5">
                Cost Drivers (Intermediate COCOMO)
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Product Attributes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Required software reliability</li>
                      <li>Size of application database</li>
                      <li>Complexity of the product</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Hardware Attributes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Run-time performance constraints</li>
                      <li>Memory constraints</li>
                      <li>Virtual machine environment volatility</li>
                      <li>Required turnabout time</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personnel Attributes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Analyst capability</li>
                      <li>Software engineer capability</li>
                      <li>Applications experience</li>
                      <li>Virtual machine experience</li>
                      <li>Programming language experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Project Attributes:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Use of software tools</li>
                      <li>Application of software engineering methods</li>
                      <li>Required development schedule</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-garden-green-dark mb-4 flex items-center gap-2">
            <span>Practice Problems</span>
            <HelpCircle size={20} className="text-garden-green-dark" />
          </h2>
          <div className="space-y-6">
            {/* Problem 1 */}
            <Card className="bg-white shadow-md">
              <CardHeader className="bg-garden-green-light/20 pb-3">
                <CardTitle className="text-lg font-medium">Problem 1: Basic COCOMO Calculation</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-4">
                  For an organic type project with estimated 20,000 lines of code (20 KLOC), 
                  calculate the effort in person-months and development time in months.
                </p>

                <Collapsible className="w-full">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm" className="border-garden-green-mid text-garden-green-dark">
                            <LightbulbIcon size={16} className="mr-1" /> Hint
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="bg-garden-green-light/30 p-3 w-[300px]">
                          <p>Use the Basic COCOMO formula: E = a × (KLOC)<sup>b</sup> where a=2.4, b=1.05</p>
                          <p className="mt-2">For development time: D = c × E<sup>d</sup> where c=2.5, d=0.38</p>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-garden-green-dark">
                        <MousePointerClick size={16} className="mr-1" /> Reveal Solution
                      </Button>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="mt-4 p-3 bg-garden-green-mid/10 rounded-md">
                    <div className="space-y-2">
                      <p><strong>Step 1:</strong> Identify the coefficients for organic type - a=2.4, b=1.05, c=2.5, d=0.38</p>
                      <p><strong>Step 2:</strong> Calculate effort: E = 2.4 × (20)<sup>1.05</sup> = 2.4 × 22.52 = 54.05 person-months</p>
                      <p><strong>Step 3:</strong> Calculate development time: D = 2.5 × (54.05)<sup>0.38</sup> = 2.5 × 5.31 = 13.28 months</p>
                      <p className="font-semibold mt-1">Therefore, the effort is approximately 54 person-months and development time is about 13.3 months.</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Problem 2 */}
            <Card className="bg-white shadow-md">
              <CardHeader className="bg-garden-green-light/20 pb-3">
                <CardTitle className="text-lg font-medium">Problem 2: Comparing Project Types</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-4">
                  A software project is estimated at 15 KLOC. Compare the effort and duration 
                  required if this project is developed as organic, semi-detached, and embedded.
                </p>

                <Collapsible className="w-full">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" size="sm" className="border-garden-green-mid text-garden-green-dark">
                            <LightbulbIcon size={16} className="mr-1" /> Hint
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="bg-garden-green-light/30 p-3 w-[300px]">
                          <p>Apply the Basic COCOMO formula for each project type using their respective coefficients.</p>
                          <p className="mt-2">Remember to use the correct a, b, c, and d values for each project type.</p>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-garden-green-dark">
                        <MousePointerClick size={16} className="mr-1" /> Reveal Solution
                      </Button>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="mt-4 p-3 bg-garden-green-mid/10 rounded-md">
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold">Organic:</p>
                        <p>E = 2.4 × (15)<sup>1.05</sup> = 2.4 × 16.54 = 39.69 person-months</p>
                        <p>D = 2.5 × (39.69)<sup>0.38</sup> = 2.5 × 4.84 = 12.10 months</p>
                      </div>

                      <div>
                        <p className="font-semibold">Semi-detached:</p>
                        <p>E = 3.0 × (15)<sup>1.12</sup> = 3.0 × 19.95 = 59.85 person-months</p>
                        <p>D = 2.5 × (59.85)<sup>0.35</sup> = 2.5 × 4.33 = 10.83 months</p>
                      </div>

                      <div>
                        <p className="font-semibold">Embedded:</p>
                        <p>E = 3.6 × (15)<sup>1.20</sup> = 3.6 × 25.63 = 92.26 person-months</p>
                        <p>D = 2.5 × (92.26)<sup>0.32</sup> = 2.5 × 3.86 = 9.66 months</p>
                      </div>

                      <p className="font-semibold mt-1">
                        Comparison: Embedded projects require the most effort (92 person-months) but with the shortest duration (9.7 months), 
                        meaning more people working in parallel. Organic projects require the least effort (40 person-months) but take longer (12.1 months).
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Problem 3 */}
            <Card className="bg-white shadow-md">
              <CardHeader className="bg-garden-green-light/20 pb-3">
                <CardTitle className="text-lg font-medium">Problem 3: Intermediate COCOMO</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="mb-4">
                  A semi-detached project of 30 KLOC has an Effort Adjustment Factor (EAF) of 1.15 due to its 
                  cost drivers. Calculate the effort and development time.
                </p>

                <Collapsible className="w-full">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button variant="outline" size="sm" className="border-garden-green-mid text-garden-green-dark">
                            <Info size={16} className="mr-1" /> Formula Reference
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80 bg-white p-3 shadow-lg">
                          <p className="font-mono text-sm mb-2">E = a × (KLOC)<sup>b</sup> × EAF</p>
                          <p className="font-mono text-sm">D = c × (E)<sup>d</sup></p>
                          <p className="text-xs mt-2">For semi-detached: a=3.0, b=1.12, c=2.5, d=0.35</p>
                        </HoverCardContent>
                      </HoverCard>
                    </div>

                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-garden-green-dark">
                        <MousePointerClick size={16} className="mr-1" /> Reveal Solution
                      </Button>
                    </CollapsibleTrigger>
                  </div>

                  <CollapsibleContent className="mt-4 p-3 bg-garden-green-mid/10 rounded-md">
                    <div className="space-y-2">
                      <p><strong>Step 1:</strong> Identify the coefficients for semi-detached: a=3.0, b=1.12, c=2.5, d=0.35</p>
                      <p><strong>Step 2:</strong> Calculate nominal effort: 3.0 × (30)<sup>1.12</sup> = 3.0 × 47.55 = 142.66 person-months</p>
                      <p><strong>Step 3:</strong> Apply EAF: 142.66 × 1.15 = 164.06 person-months</p>
                      <p><strong>Step 4:</strong> Calculate development time: D = 2.5 × (164.06)<sup>0.35</sup> = 2.5 × 6.19 = 15.48 months</p>
                      <p className="font-semibold mt-1">The adjusted effort is approximately 164 person-months with a development time of about 15.5 months.</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-garden-green-dark mb-4">
            Summary & Application
          </h2>
          <Card className="bg-white shadow-md p-6">
            <p className="mb-3">
              The COCOMO model provides a structured approach to estimating software project costs and schedules.
              Understanding these calculations helps in:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Creating more realistic project plans and budgets</li>
              <li>Evaluating the impact of different development approaches</li>
              <li>Analyzing tradeoffs between effort, duration, and cost</li>
              <li>Justifying resource allocation decisions</li>
            </ul>
            <p>
              When applying COCOMO in real-world scenarios, remember that it provides estimates, not exact values.
              Regular recalibration based on actual project data helps improve future estimates.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CocomoModel;
