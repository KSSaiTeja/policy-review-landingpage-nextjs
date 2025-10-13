"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Download, TrendingUp, Calculator, FileText, Star, AlertTriangle, CheckCircle, XCircle, BarChart3, PieChart, Eye, Phone } from "lucide-react";

interface PolicyReviewOutputProps {
  formData: unknown;
  onClose: () => void;
}

export default function PolicyReviewOutput({ onClose }: PolicyReviewOutputProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'today' | '3years' | '6years' | 'maturity'>('today');
  
  // Placeholder data - replace with actual calculations
  // TODO: Use formData prop to calculate actual values
  const naitriScore = 72;
  const policyPerformance = {
    currentValue: 850000,
    maturityValue: 1200000,
    totalPremiumPaid: 600000,
    netGain: 600000,
    annualReturn: 5.2,
    absoluteReturn: 100
  };

  // Graph data for different timeframes
  const graphData = {
    today: {
      policy: { value: 850000, return: 5.2 },
      mutualFunds: { value: 920000, return: 7.8 },
      naitriPortfolio: { value: 980000, return: 8.9 }
    },
    '3years': {
      policy: { value: 950000, return: 5.2 },
      mutualFunds: { value: 1150000, return: 8.1 },
      naitriPortfolio: { value: 1250000, return: 9.2 }
    },
    '6years': {
      policy: { value: 1050000, return: 5.2 },
      mutualFunds: { value: 1450000, return: 8.3 },
      naitriPortfolio: { value: 1650000, return: 9.5 }
    },
    maturity: {
      policy: { value: 1200000, return: 5.2 },
      mutualFunds: { value: 1800000, return: 8.5 },
      naitriPortfolio: { value: 2100000, return: 9.8 }
    }
  };

  const observations = [
    "Your policy is performing below market average",
    "Premium allocation could be optimized for better returns",
    "Consider diversifying your investment portfolio"
  ];

  // Naitri Solution Logic Framework
  const naitriLogic = {
    mutualFundValue: 1800000,
    policyValue: 1200000,
    threshold: 1.35,
    shouldSwitch: 1800000 >= (1200000 * 1.35), // 1800000 >= 1620000 = true
    recommendation: 1800000 >= (1200000 * 1.35) ? 
      "Switch to Naitri Portfolio" : 
      "Continue with existing policy"
  };

  const naitriActionPlan = {
    lumpSum: 55000,
    monthlySIP: 8000,
    maturityYear: 2035,
    naitriMaturityYear: 2035,
    maturityAmount: 1200000,
    naitriMaturityAmount: 1350000,
    annualReturn: 5.2,
    naitriAnnualReturn: 9.5,
    absoluteReturn: 45,
    naitriAbsoluteReturn: 95
  };

  const additionalGains = {
    additionalValue: naitriActionPlan.naitriMaturityAmount - naitriActionPlan.maturityAmount,
    extraAbsoluteReturn: naitriActionPlan.naitriAbsoluteReturn - naitriActionPlan.absoluteReturn,
    extraAnnualReturn: naitriActionPlan.naitriAnnualReturn - naitriActionPlan.annualReturn
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-50 border-green-200";
    if (score >= 60) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-5 w-5" />;
    if (score >= 60) return <AlertTriangle className="h-5 w-5" />;
    return <XCircle className="h-5 w-5" />;
  };

  const getTimeframeLabel = (timeframe: string) => {
    switch (timeframe) {
      case 'today': return 'Till Today';
      case '3years': return 'After 3 Years';
      case '6years': return 'After 6 Years';
      case 'maturity': return 'At Maturity';
      default: return 'Till Today';
    }
  };

  const renderGraph = () => {
    const data = graphData[selectedTimeframe];
    const maxValue = Math.max(data.policy.value, data.mutualFunds.value, data.naitriPortfolio.value);
    
    return (
      <div className="space-y-6">
        {/* Graph Bars */}
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-600 rounded"></div>
              <span className="font-semibold text-gray-800">Your Current Policy</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-48 bg-blue-200 rounded-full h-6 relative">
                <div 
                  className="bg-blue-600 h-6 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(data.policy.value / maxValue) * 100}%` }}
                ></div>
              </div>
              <div className="text-right">
                <p className="font-bold text-blue-600">₹{data.policy.value.toLocaleString()}</p>
                <p className="text-sm text-gray-600">{data.policy.return}% IRR</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border-2 border-green-200">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-600 rounded"></div>
              <span className="font-semibold text-gray-800">Mutual Funds (Average)</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-48 bg-green-200 rounded-full h-6 relative">
                <div 
                  className="bg-green-600 h-6 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(data.mutualFunds.value / maxValue) * 100}%` }}
                ></div>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">₹{data.mutualFunds.value.toLocaleString()}</p>
                <p className="text-sm text-gray-600">{data.mutualFunds.return}% IRR</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border-2 border-purple-200">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-purple-600 rounded"></div>
              <span className="font-semibold text-gray-800">Naitri Portfolio</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-48 bg-purple-200 rounded-full h-6 relative">
                <div 
                  className="bg-purple-600 h-6 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(data.naitriPortfolio.value / maxValue) * 100}%` }}
                ></div>
              </div>
              <div className="text-right">
                <p className="font-bold text-purple-600">₹{data.naitriPortfolio.value.toLocaleString()}</p>
                <p className="text-sm text-gray-600">{data.naitriPortfolio.return}% IRR</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Best Performer</p>
            <p className="text-lg font-bold text-purple-600">Naitri Portfolio</p>
            <p className="text-xs text-gray-500">+{data.naitriPortfolio.return - data.policy.return}% vs Policy</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Value Difference</p>
            <p className="text-lg font-bold text-green-600">₹{(data.naitriPortfolio.value - data.policy.value).toLocaleString()}</p>
            <p className="text-xs text-gray-500">Additional with Naitri</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-xl">
            <p className="text-sm text-gray-600 mb-1">Timeframe</p>
            <p className="text-lg font-bold text-blue-600">{getTimeframeLabel(selectedTimeframe)}</p>
            <p className="text-xs text-gray-500">Current Analysis</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-full">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Policy Review Report</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive analysis of your LIC policy performance with personalized recommendations
          </p>
        </div>

        {/* Naitri Score */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900 flex items-center justify-center space-x-3">
              <Star className="h-8 w-8 text-yellow-500" />
              <span>Naitri Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className={`inline-flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 ${getScoreColor(naitriScore)}`}>
              {getScoreIcon(naitriScore)}
              <span className="text-4xl font-bold">{naitriScore}/100</span>
            </div>
            <div className="space-y-2">
              <Progress value={naitriScore} className="h-3" />
              <p className="text-sm text-gray-600">
                {naitriScore >= 80 ? "Excellent Performance" : 
                 naitriScore >= 60 ? "Good Performance" : "Needs Improvement"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Policy Performance Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-blue-600" />
              <span>Policy Performance Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Current Value</p>
                <p className="text-2xl font-bold text-blue-600">₹{policyPerformance.currentValue.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Maturity Value</p>
                <p className="text-2xl font-bold text-green-600">₹{policyPerformance.maturityValue.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Total Premium Paid</p>
                <p className="text-2xl font-bold text-purple-600">₹{policyPerformance.totalPremiumPaid.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Net Gain</p>
                <p className="text-2xl font-bold text-orange-600">₹{policyPerformance.netGain.toLocaleString()}</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Annual Return (XIRR)</p>
                <p className="text-2xl font-bold text-gray-800">{policyPerformance.annualReturn}%</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600 mb-1">Absolute Return</p>
                <p className="text-2xl font-bold text-gray-800">{policyPerformance.absoluteReturn}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Comparison of Returns */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-green-600" />
              <span>Comparison of Returns (IRR %)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Timeframe Selection Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {(['today', '3years', '6years', 'maturity'] as const).map((timeframe) => (
                <Button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  variant={selectedTimeframe === timeframe ? "default" : "outline"}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    selectedTimeframe === timeframe
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                      : "border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {getTimeframeLabel(timeframe)}
                </Button>
              ))}
            </div>

            {/* Interactive Graph */}
            {renderGraph()}
          </CardContent>
        </Card>

        {/* Naitri Observation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
              <span>Naitri Observation</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {observations.map((observation, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700">{observation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Naitri Solution */}
        <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span>Naitri Solution</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Logic Framework Result */}
            <div className="bg-white p-6 rounded-xl border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h4 className="text-lg font-bold text-gray-900">Recommendation</h4>
              </div>
              <div className={`p-4 rounded-lg border-2 ${
                naitriLogic.shouldSwitch 
                  ? "bg-green-50 border-green-300 text-green-800" 
                  : "bg-blue-50 border-blue-300 text-blue-800"
              }`}>
                <p className="font-semibold text-lg">
                  {naitriLogic.shouldSwitch ? "✅ Switch to Naitri Portfolio" : "✅ Continue with existing policy"}
                </p>
                <p className="text-sm mt-2 opacity-80">
                  {naitriLogic.shouldSwitch 
                    ? "Your potential returns with Naitri Portfolio significantly exceed your current policy performance."
                    : "Your current policy is performing well compared to market alternatives."
                  }
                </p>
              </div>
            </div>

            {/* Suggested Naitri Action Plan */}
            <div className="bg-white p-6 rounded-xl border border-green-200">
              <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <PieChart className="h-5 w-5 text-green-600" />
                <span>Suggested Naitri Action Plan</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Lump Sum Investment</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">One-time</Badge>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">₹{naitriActionPlan.lumpSum.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 mt-1">Equivalent to your current Surrender Value</p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">Monthly SIP</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Monthly</Badge>
                  </div>
                  <p className="text-2xl font-bold text-green-600">₹{naitriActionPlan.monthlySIP.toLocaleString()}</p>
                  <p className="text-sm text-gray-600 mt-1">Equivalent to your current yearly premium, divided monthly</p>
                </div>
              </div>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-lg border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-4 font-semibold text-gray-700 border-b border-gray-200">Parameter</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 border-b border-gray-200">Existing Policy</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-700 border-b border-gray-200">Naitri Portfolio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-900">Maturity Year</td>
                      <td className="py-4 px-4 text-center text-gray-700">{naitriActionPlan.maturityYear}</td>
                      <td className="py-4 px-4 text-center text-gray-700">{naitriActionPlan.naitriMaturityYear}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-900">Maturity Amount (₹)</td>
                      <td className="py-4 px-4 text-center text-gray-700">₹{naitriActionPlan.maturityAmount.toLocaleString()}</td>
                      <td className="py-4 px-4 text-center text-green-600 font-semibold">₹{naitriActionPlan.naitriMaturityAmount.toLocaleString()}</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-900">Annual Return (XIRR)</td>
                      <td className="py-4 px-4 text-center text-gray-700">{naitriActionPlan.annualReturn}%</td>
                      <td className="py-4 px-4 text-center text-green-600 font-semibold">{naitriActionPlan.naitriAnnualReturn}%</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-gray-900">Absolute Return</td>
                      <td className="py-4 px-4 text-center text-gray-700">{naitriActionPlan.absoluteReturn}%</td>
                      <td className="py-4 px-4 text-center text-green-600 font-semibold">{naitriActionPlan.naitriAbsoluteReturn}%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Additional Gains */}
            <div className="bg-white p-6 rounded-xl border border-green-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>Additional Gain with Naitri Solution</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <p className="text-sm text-gray-600 mb-1">Additional Value (₹)</p>
                  <p className="text-2xl font-bold text-green-600">₹{additionalGains.additionalValue.toLocaleString()}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Extra Absolute Return (%)</p>
                  <p className="text-2xl font-bold text-blue-600">+{additionalGains.extraAbsoluteReturn}%</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <p className="text-sm text-gray-600 mb-1">Extra Annual Return (%)</p>
                  <p className="text-2xl font-bold text-purple-600">+{additionalGains.extraAnnualReturn}%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call-to-Action Buttons */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 text-center">
              Ready to Take Action?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-semibold flex flex-col items-center space-y-2 h-auto"
              >
                <Eye className="h-6 w-6" />
                <span className="text-sm">View Cashflow Comparison</span>
              </Button>
              
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl font-semibold flex flex-col items-center space-y-2 h-auto"
              >
                <PieChart className="h-6 w-6" />
                <span className="text-sm">Explore Naitri Portfolio</span>
              </Button>
              
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-xl font-semibold flex flex-col items-center space-y-2 h-auto"
              >
                <Download className="h-6 w-6" />
                <span className="text-sm">Download Full Report (PDF)</span>
              </Button>
              
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-xl font-semibold flex flex-col items-center space-y-2 h-auto"
              >
                <Phone className="h-6 w-6" />
                <span className="text-sm">Need Help to Switch?</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Close Button */}
        <div className="text-center">
          <Button 
            onClick={onClose} 
            variant="outline" 
            className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-xl font-semibold"
          >
            Close Report
          </Button>
        </div>
      </div>
    </div>
  );
}