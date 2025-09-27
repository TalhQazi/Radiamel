import { TrendingUp, DollarSign, Globe, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MarketSection = () => {
  const marketData = [
    {
      icon: Globe,
      title: "Global Radiation Protection Market",
      value: "$12+ Billion",
      timeframe: "by 2030",
      description: "Growing demand for radiation protection across industries",
    },
    {
      icon: TrendingUp,
      title: "Oncology Supplements Market",
      value: "$9+ Billion",
      timeframe: "by 2027",
      description: "Cancer patients seeking radiation therapy support",
    },
    {
      icon: Target,
      title: "Space & Defense Contracts",
      value: "Multi-Billion",
      timeframe: "Dollar Opportunities",
      description: "Government contracts for space and defense applications",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-900/20 to-blue-800/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-cyan-400/30 text-cyan-400"
          >
            Market Opportunity
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Massive <span className="text-cyan-400">Market Potential</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Multiple billion-dollar markets with growing demand for radiation
            protection solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {marketData.map((market, index) => (
            <Card
              key={index}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-900/50 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <market.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-lg text-blue-100">
                  {market.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {market.value}
                  </div>
                  <div className="text-blue-300 text-sm">{market.timeframe}</div>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {market.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-cyan-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/brand/radiation-heat.png"
              alt="Radiation Heat"
              className="w-16 h-16 object-contain mr-4"
            />
            <h3 className="text-2xl font-semibold text-cyan-400">
              Market Drivers
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-100 mb-3">
                Growing Radiation Exposure
              </h4>
              <ul className="text-blue-200 text-sm space-y-2">
                <li>• Increasing medical imaging procedures</li>
                <li>• 5G and EMF exposure from devices</li>
                <li>• Nuclear energy expansion</li>
                <li>• Space exploration missions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-3">
                Limited Current Solutions
              </h4>
              <ul className="text-blue-200 text-sm space-y-2">
                <li>• Toxic chemical alternatives</li>
                <li>• Heavy, impractical lead shields</li>
                <li>• No natural protection options</li>
                <li>• High cost of current methods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
