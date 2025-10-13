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
  const [showCashflow, setShowCashflow] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Placeholder data - replace with actual calculations
  // TODO: Use formData prop to calculate actual values
  const naitriScore = 91;
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

  // Handler functions for CTA buttons
  const handleViewCashflow = () => {
    setShowCashflow(!showCashflow);
  };

  const handleExplorePortfolio = () => {
    setShowPortfolio(!showPortfolio);
  };

  const handleDownloadPDF = () => {
    setIsGeneratingPDF(true);
    // Simulate PDF generation
    setTimeout(() => {
      setIsGeneratingPDF(false);
      // In production, this would trigger actual PDF download
      alert('PDF Report is ready! In production, this would download a detailed PDF report.');
    }, 2000);
  };

  const handleNeedHelp = () => {
    setShowContactForm(!showContactForm);
  };

  const renderGraph = () => {
    const data = graphData[selectedTimeframe];
    const maxReturn = Math.max(data.policy.return, data.mutualFunds.return, data.naitriPortfolio.return);
    const chartHeight = 280;
    
    return (
      <div className="space-y-8">
        {/* Bar Chart */}
        <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
          {/* Y-axis labels */}
          <div className="flex items-end justify-center space-x-8 mb-4">
            {/* Your Policy Bar */}
            <div className="flex flex-col items-center group">
              <div className="relative mb-3 transition-all duration-500">
                <div className="text-center mb-2">
                  <span className="text-2xl font-bold text-blue-600">{data.policy.return}%</span>
                  <p className="text-xs text-gray-500 mt-1">IRR</p>
                </div>
                <div 
                  className="w-24 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg shadow-lg group-hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                  style={{ height: `${(data.policy.return / maxReturn) * chartHeight}px` }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
              </div>
              <div className="text-center mt-3 px-2">
                <p className="font-semibold text-gray-800 text-sm">Your Current</p>
                <p className="font-semibold text-gray-800 text-sm">Policy</p>
              </div>
            </div>

            {/* Mutual Funds Bar */}
            <div className="flex flex-col items-center group">
              <div className="relative mb-3 transition-all duration-500">
                <div className="text-center mb-2">
                  <span className="text-2xl font-bold text-green-600">{data.mutualFunds.return}%</span>
                  <p className="text-xs text-gray-500 mt-1">IRR</p>
                </div>
                <div 
                  className="w-24 bg-gradient-to-t from-green-600 to-green-400 rounded-t-lg shadow-lg group-hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                  style={{ height: `${(data.mutualFunds.return / maxReturn) * chartHeight}px` }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </div>
              </div>
              <div className="text-center mt-3 px-2">
                <p className="font-semibold text-gray-800 text-sm">Mutual Funds</p>
                <p className="font-semibold text-gray-800 text-sm">(Average)</p>
              </div>
            </div>

            {/* Naitri Portfolio Bar */}
            <div className="flex flex-col items-center group relative">
              {/* Best Performer Badge */}
              <div className="absolute -top-6 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 flex items-center space-x-1">
                <Star className="h-3 w-3" />
                <span>Best</span>
              </div>
              <div className="relative mb-3 transition-all duration-500">
                <div className="text-center mb-2">
                  <span className="text-2xl font-bold text-purple-600">{data.naitriPortfolio.return}%</span>
                  <p className="text-xs text-gray-500 mt-1">IRR</p>
                </div>
                <div 
                  className="w-24 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg shadow-lg group-hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                  style={{ height: `${(data.naitriPortfolio.return / maxReturn) * chartHeight}px` }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
                </div>
              </div>
              <div className="text-center mt-3 px-2">
                <p className="font-semibold text-gray-800 text-sm">Naitri</p>
                <p className="font-semibold text-gray-800 text-sm">Portfolio</p>
              </div>
            </div>
          </div>

          {/* X-axis line */}
          <div className="w-full h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full"></div>
          
          {/* Grid lines (subtle) */}
          <div className="absolute top-8 left-8 right-8 bottom-20 pointer-events-none">
            <div className="h-full flex flex-col justify-between">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full border-t border-gray-200 border-dashed"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-5 bg-white rounded-xl border-2 border-purple-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
              <p className="text-sm font-medium text-gray-600">Performance Gap</p>
            </div>
            <p className="text-3xl font-bold text-purple-600">+{(data.naitriPortfolio.return - data.policy.return).toFixed(1)}%</p>
            <p className="text-xs text-gray-500 mt-1">Naitri vs Your Policy</p>
          </div>
          
          <div className="text-center p-5 bg-white rounded-xl border-2 border-green-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-sm font-medium text-gray-600">Market Leader</p>
            </div>
            <p className="text-3xl font-bold text-green-600">{data.naitriPortfolio.return}%</p>
            <p className="text-xs text-gray-500 mt-1">Highest Return Rate</p>
          </div>
          
          <div className="text-center p-5 bg-white rounded-xl border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center mb-2">
              <Calculator className="h-5 w-5 text-blue-600 mr-2" />
              <p className="text-sm font-medium text-gray-600">Analysis Period</p>
            </div>
            <p className="text-2xl font-bold text-blue-600">{getTimeframeLabel(selectedTimeframe)}</p>
            <p className="text-xs text-gray-500 mt-1">Selected Timeframe</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        {/* Header - Law of Proximity & Aesthetic-Usability Effect */}
        <div className="text-center space-y-4 animate-fadeIn">
          <div className="flex items-center justify-center space-x-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Policy Review Report
            </h1>
          </div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive analysis of your LIC policy performance with personalized recommendations
          </p>
          {/* Visual separator */}
          <div className="flex items-center justify-center space-x-2 pt-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
            <div className="h-1 w-8 bg-blue-500 rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Naitri Score - Von Restorff Effect (distinctive visual) */}
        <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full translate-y-24 -translate-x-24"></div>
          </div>
          
          <CardHeader className="text-center pb-4 relative z-10">
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center space-x-3">
              <Star className="h-8 w-8 text-yellow-500 animate-pulse" />
              <span>Naitri Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6 relative z-10">
            <div className={`inline-flex items-center space-x-4 px-8 py-5 rounded-3xl border-2 shadow-lg ${getScoreColor(naitriScore)}`}>
              {getScoreIcon(naitriScore)}
              <span className="text-5xl md:text-6xl font-bold">{naitriScore}<span className="text-3xl text-gray-500">/100</span></span>
            </div>
            <div className="space-y-3">
              <Progress value={naitriScore} className="h-4 shadow-inner" />
              <p className="text-base font-medium text-gray-700">
                {naitriScore >= 80 ? "🎉 Excellent Performance" : 
                 naitriScore >= 60 ? "👍 Good Performance" : "💡 Needs Improvement"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Policy Performance Summary - Miller's Law & Law of Common Region */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
            <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 flex items-center space-x-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <span>Policy Performance Summary</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Law of Similarity - grouped by color coding */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center p-4 md:p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:scale-105 transition-transform duration-200 cursor-pointer group">
                <p className="text-xs md:text-sm text-gray-600 mb-2 font-medium">Current Value</p>
                <p className="text-xl md:text-2xl font-bold text-blue-600 group-hover:text-blue-700">₹{policyPerformance.currentValue.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 md:p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:scale-105 transition-transform duration-200 cursor-pointer group">
                <p className="text-xs md:text-sm text-gray-600 mb-2 font-medium">Maturity Value</p>
                <p className="text-xl md:text-2xl font-bold text-green-600 group-hover:text-green-700">₹{policyPerformance.maturityValue.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 md:p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:scale-105 transition-transform duration-200 cursor-pointer group">
                <p className="text-xs md:text-sm text-gray-600 mb-2 font-medium">Premium Paid</p>
                <p className="text-xl md:text-2xl font-bold text-purple-600 group-hover:text-purple-700">₹{policyPerformance.totalPremiumPaid.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 md:p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:scale-105 transition-transform duration-200 cursor-pointer group">
                <p className="text-xs md:text-sm text-gray-600 mb-2 font-medium">Net Gain</p>
                <p className="text-xl md:text-2xl font-bold text-orange-600 group-hover:text-orange-700">₹{policyPerformance.netGain.toLocaleString()}</p>
              </div>
            </div>
            
            {/* Separator with visual cue */}
            <div className="my-6 flex items-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
              <span className="px-4 text-xs text-gray-500 font-medium">Return Metrics</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-300 hover:border-gray-400 transition-all">
                <p className="text-sm text-gray-600 mb-2 font-medium">Annual Return (XIRR)</p>
                <p className="text-3xl md:text-4xl font-bold text-gray-800">{policyPerformance.annualReturn}%</p>
              </div>
              <div className="text-center p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-300 hover:border-gray-400 transition-all">
                <p className="text-sm text-gray-600 mb-2 font-medium">Absolute Return</p>
                <p className="text-3xl md:text-4xl font-bold text-gray-800">{policyPerformance.absoluteReturn}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Comparison of Returns - Hick's Law & Fitts's Law */}
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
            <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 flex items-center space-x-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span>Comparison of Returns (IRR %)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Timeframe Selection Buttons - Hick's Law (limited choices) & Fitts's Law (large touch targets) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {(['today', '3years', '6years', 'maturity'] as const).map((timeframe) => (
                <Button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  variant={selectedTimeframe === timeframe ? "default" : "outline"}
                  className={`px-6 py-4 rounded-2xl font-bold transition-all duration-300 text-sm md:text-base ${
                    selectedTimeframe === timeframe
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl scale-105 border-2 border-blue-400"
                      : "border-2 border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 hover:shadow-md bg-white"
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

        {/* Call-to-Action Buttons - Serial Position Effect & Fitts's Law */}
        <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-xl">
          <CardHeader className="text-center border-b border-gray-200 pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Ready to Take Action?
            </CardTitle>
            <p className="text-sm text-gray-600 mt-2">Choose your next step towards better returns</p>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Pareto Principle - Most important actions first (Serial Position Effect) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Primary Actions - Most important */}
              <Button 
                onClick={handleViewCashflow}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-6 md:p-8 rounded-2xl font-bold flex flex-col items-center justify-center space-y-3 h-auto shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                  <Eye className="h-8 w-8" />
                </div>
                <span className="text-base md:text-lg">View Cashflow Comparison</span>
                <span className="text-xs opacity-80">{showCashflow ? 'Hide details' : 'See detailed year-by-year breakdown'}</span>
              </Button>
              
              <Button 
                onClick={handleExplorePortfolio}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white p-6 md:p-8 rounded-2xl font-bold flex flex-col items-center justify-center space-y-3 h-auto shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                  <PieChart className="h-8 w-8" />
                </div>
                <span className="text-base md:text-lg">Explore Naitri Portfolio</span>
                <span className="text-xs opacity-80">{showPortfolio ? 'Hide details' : 'Discover our investment strategy'}</span>
              </Button>
              
              {/* Secondary Actions */}
              <Button 
                onClick={handleDownloadPDF}
                disabled={isGeneratingPDF}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-gray-400 disabled:to-gray-500 text-white p-6 md:p-8 rounded-2xl font-bold flex flex-col items-center justify-center space-y-3 h-auto shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group disabled:scale-100 disabled:cursor-not-allowed"
              >
                <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                  <Download className={`h-8 w-8 ${isGeneratingPDF ? 'animate-bounce' : ''}`} />
                </div>
                <span className="text-base md:text-lg">{isGeneratingPDF ? 'Generating...' : 'Download Full Report'}</span>
                <span className="text-xs opacity-80">{isGeneratingPDF ? 'Please wait' : 'Get PDF with detailed analysis'}</span>
              </Button>
              
              <Button 
                onClick={handleNeedHelp}
                className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white p-6 md:p-8 rounded-2xl font-bold flex flex-col items-center justify-center space-y-3 h-auto shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                  <Phone className="h-8 w-8" />
                </div>
                <span className="text-base md:text-lg">Need Help to Switch?</span>
                <span className="text-xs opacity-80">{showContactForm ? 'Hide form' : 'Connect with our experts'}</span>
              </Button>
            </div>
            
            {/* Cashflow Comparison Section - Expandable */}
            {showCashflow && (
              <div className="mt-6 p-6 bg-white rounded-2xl border-2 border-blue-200 shadow-lg animate-fadeIn">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-blue-600" />
                  <span>Year-by-Year Cashflow Comparison</span>
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-bold text-gray-700">Year</th>
                        <th className="px-4 py-3 text-right text-sm font-bold text-gray-700">Your Policy</th>
                        <th className="px-4 py-3 text-right text-sm font-bold text-gray-700">Naitri Portfolio</th>
                        <th className="px-4 py-3 text-right text-sm font-bold text-gray-700">Difference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[1, 3, 5, 10, 15, 20].map((year) => {
                        const policyValue = 600000 * (1 + 0.052) ** year;
                        const naitriValue = 600000 * (1 + 0.098) ** year;
                        const difference = naitriValue - policyValue;
                        return (
                          <tr key={year} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-sm font-medium text-gray-900">Year {year}</td>
                            <td className="px-4 py-3 text-sm text-right text-gray-700">₹{Math.round(policyValue).toLocaleString()}</td>
                            <td className="px-4 py-3 text-sm text-right text-green-600 font-semibold">₹{Math.round(naitriValue).toLocaleString()}</td>
                            <td className="px-4 py-3 text-sm text-right text-purple-600 font-semibold">+₹{Math.round(difference).toLocaleString()}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {/* Portfolio Details Section - Expandable */}
            {showPortfolio && (
              <div className="mt-6 p-6 bg-white rounded-2xl border-2 border-green-200 shadow-lg animate-fadeIn">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <PieChart className="h-6 w-6 text-green-600" />
                  <span>Naitri Portfolio Strategy</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Asset Allocation</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Equity Funds</span>
                        <span className="font-bold text-green-600">60%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-600 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Debt Funds</span>
                        <span className="font-bold text-blue-600">30%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Gold/Commodities</span>
                        <span className="font-bold text-yellow-600">10%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-yellow-600 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Key Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Diversified across 15+ mutual funds</span>
                      </li>
                      <li className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Rebalanced quarterly by experts</span>
                      </li>
                      <li className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Low expense ratio (avg 0.8%)</span>
                      </li>
                      <li className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Target return: 9-12% annually</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            {/* Contact Form Section - Expandable */}
            {showContactForm && (
              <div className="mt-6 p-6 bg-white rounded-2xl border-2 border-orange-200 shadow-lg animate-fadeIn">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Phone className="h-6 w-6 text-orange-600" />
                  <span>Get Expert Assistance</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time to Call</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none">
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-4 rounded-xl font-bold">
                      Request Callback
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Close Button - Tesler's Law (simple exit) */}
        <div className="text-center pt-4">
          <Button 
            onClick={onClose} 
            variant="outline" 
            className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 px-10 py-4 rounded-2xl font-semibold text-base shadow-sm hover:shadow transition-all"
          >
            Close Report
          </Button>
        </div>
      </div>
    </div>
  );
}