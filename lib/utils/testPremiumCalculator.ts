/**
 * Test function for premium calculator
 */

import { calculateTotalPremiumPaid, type PolicyDetails } from './premiumCalculator';

export function testPremiumCalculation() {
  const policyDetails: PolicyDetails = {
    policyStartDate: '2024-01-01',
    policyEndDate: '2040-01-01',
    policyTerm: 16,
    ppt: 11,
    frequency: 'monthly',
    premiumAmount: 3000
  };

  console.log('Testing Premium Calculation:');
  console.log('Policy Start Date:', policyDetails.policyStartDate);
  console.log('PPT:', policyDetails.ppt, 'years');
  console.log('Frequency:', policyDetails.frequency);
  console.log('Premium Amount:', policyDetails.premiumAmount);
  console.log('Today\'s Date:', new Date().toISOString().split('T')[0]);
  
  const result = calculateTotalPremiumPaid(policyDetails);
  
  console.log('\nResults:');
  console.log('Total Premium Paid:', result.totalPremiumPaid);
  console.log('Premiums Paid Count:', result.premiumsPaidCount);
  console.log('Last Premium Paid Date:', result.lastPremiumPaidDate);
  console.log('Next Premium Due Date:', result.nextPremiumDueDate);
  console.log('Remaining Premiums:', result.remainingPremiums);
  
  return result;
}

// Manual calculation for verification:
// Start: Jan 1, 2024
// Today: Oct 19, 2025
// Months elapsed: 21 months and 18 days
// Last premium paid: Oct 1, 2025 (most recent 1st of month)
// Premiums paid: Jan 2024 to Oct 2025 = 22 premiums
// Total: 22 × 3000 = 66,000
