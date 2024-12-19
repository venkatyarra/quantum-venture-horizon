import { motion } from 'framer-motion';
import { Tool, Users, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';

interface Tool {
  id: number;
  name: string;
  description: string;
  owner: string;
  status: 'available' | 'borrowed';
  borrowedBy?: string;
  dueDate?: string;
}

const tools: Tool[] = [
  {
    id: 1,
    name: "Power Drill",
    description: "Cordless 20V MAX Power Drill",
    owner: "John Doe",
    status: "available"
  },
  {
    id: 2,
    name: "Circular Saw",
    description: "7-1/4 inch Circular Saw with laser guide",
    owner: "Jane Smith",
    status: "borrowed",
    borrowedBy: "Mike Wilson",
    dueDate: "2024-03-25"
  },
  {
    id: 3,
    name: "Garden Tools Set",
    description: "Complete garden maintenance kit",
    owner: "Alice Brown",
    status: "available"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            Community Tool Share
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Share tools with your community, save money, and help the environment
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Add Your Tools
          </Button>
        </motion.div>
      </section>

      {/* Tools Grid */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Available Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        tool.status === 'available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {tool.status}
                      </span>
                    </div>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>Owner: {tool.owner}</span>
                      </div>
                      {tool.borrowedBy && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Tool className="w-4 h-4" />
                          <span>Borrowed by: {tool.borrowedBy}</span>
                        </div>
                      )}
                      {tool.dueDate && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {tool.dueDate}</span>
                        </div>
                      )}
                      <Button 
                        className="w-full mt-4"
                        variant={tool.status === 'available' ? 'default' : 'secondary'}
                        disabled={tool.status !== 'available'}
                      >
                        {tool.status === 'available' ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Borrow Tool
                          </>
                        ) : 'Currently Borrowed'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;