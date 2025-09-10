import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, Zap, Clock, MapPin } from "lucide-react";
import quantumHero from "@/assets/quantum-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background particle-bg">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${quantumHero})` }}
        >
          <div className="absolute inset-0 bg-background/70" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/40 hover:bg-primary/30">
            Registration Open Now
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-quantum">
            Cluj Quantum Day
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Embark on your Quantum Computing journey. Compute the impossible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-quantum text-lg px-8 py-6">
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-quantum-outline text-lg px-8 py-6"
              onClick={() => document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Details
            </Button>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event-details" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-quantum-glow">Event Details</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-quantum">
              <CardHeader className="text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">When</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold mb-2">March 15-17, 2024</p>
                <p className="text-muted-foreground">48 Hours of Innovation</p>
              </CardContent>
            </Card>
            
            <Card className="card-quantum">
              <CardHeader className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-accent">Where</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold mb-2">Quantum Labs</p>
                <p className="text-muted-foreground">San Francisco, CA</p>
                <p className="text-sm text-muted-foreground mt-2">+ Virtual Participation</p>
              </CardContent>
            </Card>
            
            <Card className="card-quantum">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-quantum-purple mx-auto mb-4" />
                <CardTitle className="text-quantum-purple">Who</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold mb-2">500+ Hackers</p>
                <p className="text-muted-foreground">Students & Professionals</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-quantum-glow">Event Schedule</h2>
            <p className="text-xl text-muted-foreground">Full day of quantum computing exploration</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-6 card-quantum rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20">
                <span className="text-primary font-bold text-xl">09:00</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Registration</h3>
                <p className="text-muted-foreground">Welcome and check-in for all participants</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 card-quantum rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                <span className="text-accent font-bold text-xl">09:45</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Opening Ceremony</h3>
                <p className="text-muted-foreground">Kickoff presentation and event overview</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 card-quantum rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-quantum-purple/30 to-quantum-purple/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-quantum-purple/20">
                <span className="text-quantum-purple font-bold text-xl">10:30</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Workshops & Speaking Sessions</h3>
                <p className="text-muted-foreground">Deep dive into quantum computing concepts and technologies</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 card-quantum rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-secondary/20">
                <span className="text-secondary font-bold text-xl">13:00</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lunch Break</h3>
                <p className="text-muted-foreground">Networking and refreshments</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 card-quantum rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/20">
                <span className="text-primary font-bold text-xl">13:45</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Practical Activities (Mini Hackathon)</h3>
                <p className="text-muted-foreground">Hands-on quantum computing projects and challenges</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 card-quantum rounded-lg">
              <div className="w-24 h-24 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                <span className="text-accent font-bold text-xl">18:00</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Closing Remarks & Awards Ceremony</h3>
                <p className="text-muted-foreground">Project presentations and recognition</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-quantum">
            Ready to Shape the Quantum Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of innovators in the ultimate quantum computing challenge
          </p>
          <Button size="lg" className="btn-quantum text-xl px-12 py-8">
            Register Now - Free Entry
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Limited spots available • Registration closes March 10th
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            Organized by Quantum Labs • Sponsored by Leading Tech Companies
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            For questions, contact: hackathon@quantumlabs.io
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;