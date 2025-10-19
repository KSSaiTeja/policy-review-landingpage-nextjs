/**
 * Premium Calculator Utility
 * Calculates total premium paid based on policy details and current date
 */

export interface PolicyDetails {
  policyStartDate: string; // Format: "YYYY-MM-DD"
  policyEndDate: string;   // Format: "YYYY-MM-DD"
  policyTerm: number;      // in years
  ppt: number;            // Premium Paying Term in years
  frequency: 'monthly' | 'quarterly' | 'half-yearly' | 'yearly';
  premiumAmount: number;   // Premium amount per frequency
}

export interface PremiumCalculationResult {
  totalPremiumPaid: number;
  lastPremiumPaidDate: string;
  premiumsPaidCount: number;
  nextPremiumDueDate: string;
  remainingPremiums: number;
}

export interface TimeframeCalculationResult {
  totalPremiumPaid: number;
  lastPremiumPaidDate: string;
  premiumsPaidCount: number;
  targetDate: string;
}

/**
 * Calculate total premium paid as of current date
 */
export function calculateTotalPremiumPaid(policyDetails: PolicyDetails): PremiumCalculationResult {
  const {
    policyStartDate,
    ppt,
    frequency,
    premiumAmount
  } = policyDetails;

  // Parse dates
  const startDate = new Date(policyStartDate);
  const currentDate = new Date();
  
  // Calculate premium paying end date
  const premiumPayingEndDate = new Date(startDate);
  premiumPayingEndDate.setFullYear(startDate.getFullYear() + ppt);

  // Determine frequency in months
  const frequencyMonths = getFrequencyInMonths(frequency);
  
  // Calculate the last premium paid date
  const lastPremiumPaidDate = calculateLastPremiumPaidDate(
    startDate,
    currentDate,
    frequency
  );

  // Calculate number of premiums paid
  const premiumsPaidCount = calculatePremiumsPaidCount(
    startDate,
    lastPremiumPaidDate,
    frequency
  );

  // Calculate total premium paid
  let totalPremiumPaid: number;
  
  // Special case: Single premium (PPT = 1)
  if (ppt === 1) {
    totalPremiumPaid = premiumAmount; // One-time premium regardless of frequency
  } else {
    totalPremiumPaid = premiumsPaidCount * premiumAmount;
  }


  // Calculate next premium due date
  const nextPremiumDueDate = calculateNextPremiumDueDate(
    lastPremiumPaidDate,
    frequencyMonths,
    premiumPayingEndDate
  );

  // Calculate remaining premiums
  const remainingPremiums = calculateRemainingPremiums(
    lastPremiumPaidDate,
    premiumPayingEndDate,
    frequencyMonths
  );

  return {
    totalPremiumPaid,
    lastPremiumPaidDate: lastPremiumPaidDate.toISOString().split('T')[0],
    premiumsPaidCount,
    nextPremiumDueDate: nextPremiumDueDate.toISOString().split('T')[0],
    remainingPremiums
  };
}

/**
 * Get frequency in months
 */
function getFrequencyInMonths(frequency: string): number {
  switch (frequency) {
    case 'monthly':
      return 1;
    case 'quarterly':
      return 3;
    case 'half-yearly':
      return 6;
    case 'yearly':
      return 12;
    default:
      return 1;
  }
}

/**
 * Calculate the last premium paid date based on policy start date and current date
 */
function calculateLastPremiumPaidDate(
  startDate: Date,
  currentDate: Date,
  frequency: string
): Date {
  // If current date is before start date, return start date
  if (currentDate < startDate) {
    return startDate;
  }

  const lastPremiumDate = new Date(startDate);
  
  if (frequency === 'yearly') {
    // For yearly, add years based on how many complete years have passed
    const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
    lastPremiumDate.setFullYear(startDate.getFullYear() + yearsDiff);
    
    // If the calculated date is after current date, go back one year
    if (lastPremiumDate > currentDate) {
      lastPremiumDate.setFullYear(lastPremiumDate.getFullYear() - 1);
    }
  } else {
    // For monthly, quarterly, half-yearly - use month-based calculation
    const frequencyMonths = getFrequencyInMonths(frequency);
    
    // Calculate months difference
    const monthsDiff = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
                       (currentDate.getMonth() - startDate.getMonth());

    // Calculate how many complete frequency periods have passed
    const completePeriods = Math.floor(monthsDiff / frequencyMonths);

    // Calculate the last premium paid date
    lastPremiumDate.setMonth(startDate.getMonth() + (completePeriods * frequencyMonths));

    // Ensure we don't go beyond current date
    if (lastPremiumDate > currentDate) {
      lastPremiumDate.setMonth(lastPremiumDate.getMonth() - frequencyMonths);
    }
  }

  return lastPremiumDate;
}

/**
 * Calculate number of premiums paid
 */
function calculatePremiumsPaidCount(
  startDate: Date,
  lastPremiumPaidDate: Date,
  frequency: string
): number {
  // If last premium date is before start date, return 0
  if (lastPremiumPaidDate < startDate) {
    return 0;
  }

  if (frequency === 'yearly') {
    // For yearly, calculate years difference
    const yearsDiff = lastPremiumPaidDate.getFullYear() - startDate.getFullYear();
    return yearsDiff + 1; // +1 to include the first premium
  } else {
    // For monthly, quarterly, half-yearly - use month-based calculation
    const frequencyMonths = getFrequencyInMonths(frequency);

    // Calculate months difference
    const monthsDiff = (lastPremiumPaidDate.getFullYear() - startDate.getFullYear()) * 12 + 
                       (lastPremiumPaidDate.getMonth() - startDate.getMonth());

    // Calculate number of premiums paid (including the first one)
    return Math.floor(monthsDiff / frequencyMonths) + 1;
  }
}

/**
 * Calculate next premium due date
 */
function calculateNextPremiumDueDate(
  lastPremiumPaidDate: Date,
  frequencyMonths: number,
  premiumPayingEndDate: Date
): Date {
  const nextDueDate = new Date(lastPremiumPaidDate);
  nextDueDate.setMonth(lastPremiumPaidDate.getMonth() + frequencyMonths);

  // If next due date is after premium paying end date, return premium paying end date
  if (nextDueDate > premiumPayingEndDate) {
    return premiumPayingEndDate;
  }

  return nextDueDate;
}

/**
 * Calculate remaining premiums
 */
function calculateRemainingPremiums(
  lastPremiumPaidDate: Date,
  premiumPayingEndDate: Date,
  frequencyMonths: number
): number {
  // If last premium date is after premium paying end date, return 0
  if (lastPremiumPaidDate >= premiumPayingEndDate) {
    return 0;
  }

  // Calculate months difference
  const monthsDiff = (premiumPayingEndDate.getFullYear() - lastPremiumPaidDate.getFullYear()) * 12 + 
                     (premiumPayingEndDate.getMonth() - lastPremiumPaidDate.getMonth());

  // Calculate remaining premiums
  return Math.ceil(monthsDiff / frequencyMonths);
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Calculate premium paid for a specific timeframe (3 years, 6 years, maturity)
 */
export function calculatePremiumForTimeframe(
  policyDetails: PolicyDetails,
  timeframe: '3years' | '6years' | 'maturity'
): TimeframeCalculationResult {
  const {
    policyStartDate,
    ppt,
    frequency,
    premiumAmount
  } = policyDetails;

  // Parse start date
  const startDate = new Date(policyStartDate);
  const currentDate = new Date();
  
  // Calculate target date based on timeframe
  let targetDate: Date;
  
  if (timeframe === 'maturity') {
    // For maturity, calculate based on PPT and frequency
    if (frequency === 'yearly') {
      // For yearly, last premium is in year (startYear + PPT - 1)
      targetDate = new Date(startDate);
      targetDate.setFullYear(startDate.getFullYear() + ppt - 1);
    } else {
      // For monthly, quarterly, half-yearly - calculate total months
      const totalMonths = ppt * 12;
      const frequencyMonths = getFrequencyInMonths(frequency);
      const totalPremiums = Math.floor(totalMonths / frequencyMonths);
      
      // Calculate the last premium date
      targetDate = new Date(startDate);
      targetDate.setMonth(startDate.getMonth() + (totalPremiums - 1) * frequencyMonths);
    }
  } else {
    // For 3 years and 6 years, add to current date
    const yearsToAdd = timeframe === '3years' ? 3 : 6;
    targetDate = new Date(currentDate);
    targetDate.setFullYear(currentDate.getFullYear() + yearsToAdd);
  }

  // Calculate last premium paid date based on frequency
  const lastPremiumPaidDate = calculateLastPremiumPaidDateForTarget(
    startDate,
    targetDate,
    frequency
  );

  // Calculate number of premiums paid
  let premiumsPaidCount: number;
  
  if (timeframe === 'maturity') {
    // For maturity, calculate exact number of premiums within PPT
    if (frequency === 'yearly') {
      premiumsPaidCount = ppt; // For yearly, exactly PPT number of premiums
    } else {
      const totalMonths = ppt * 12;
      const frequencyMonths = getFrequencyInMonths(frequency);
      premiumsPaidCount = Math.floor(totalMonths / frequencyMonths);
    }
  } else {
    premiumsPaidCount = calculatePremiumsPaidCountForTarget(
      startDate,
      lastPremiumPaidDate,
      frequency
    );
  }

  // Calculate total premium paid
  let totalPremiumPaid: number;
  
  // Special case: Single premium (PPT = 1)
  if (ppt === 1) {
    totalPremiumPaid = premiumAmount; // One-time premium regardless of frequency
  } else {
    totalPremiumPaid = premiumsPaidCount * premiumAmount;
  }

  return {
    totalPremiumPaid,
    lastPremiumPaidDate: lastPremiumPaidDate.toISOString().split('T')[0],
    premiumsPaidCount,
    targetDate: targetDate.toISOString().split('T')[0]
  };
}

/**
 * Calculate last premium paid date for a specific target date
 */
function calculateLastPremiumPaidDateForTarget(
  startDate: Date,
  targetDate: Date,
  frequency: string
): Date {
  // If target date is before start date, return start date
  if (targetDate < startDate) {
    return startDate;
  }

  const lastPremiumDate = new Date(startDate);
  
  if (frequency === 'yearly') {
    // For yearly, add years based on how many complete years have passed
    const yearsDiff = targetDate.getFullYear() - startDate.getFullYear();
    lastPremiumDate.setFullYear(startDate.getFullYear() + yearsDiff);
    
    // If the calculated date is after target date, go back one year
    if (lastPremiumDate > targetDate) {
      lastPremiumDate.setFullYear(lastPremiumDate.getFullYear() - 1);
    }
  } else {
    // For monthly, quarterly, half-yearly - use month-based calculation
    const frequencyMonths = getFrequencyInMonths(frequency);
    
    // Calculate months difference
    const monthsDiff = (targetDate.getFullYear() - startDate.getFullYear()) * 12 + 
                       (targetDate.getMonth() - startDate.getMonth());

    // Calculate how many complete frequency periods have passed
    const completePeriods = Math.floor(monthsDiff / frequencyMonths);

    // Calculate the last premium paid date
    lastPremiumDate.setMonth(startDate.getMonth() + (completePeriods * frequencyMonths));

    // Ensure we don't go beyond target date
    if (lastPremiumDate > targetDate) {
      lastPremiumDate.setMonth(lastPremiumDate.getMonth() - frequencyMonths);
    }
  }

  return lastPremiumDate;
}

/**
 * Calculate number of premiums paid for a specific target date
 */
function calculatePremiumsPaidCountForTarget(
  startDate: Date,
  lastPremiumPaidDate: Date,
  frequency: string
): number {
  // If last premium date is before start date, return 0
  if (lastPremiumPaidDate < startDate) {
    return 0;
  }

  if (frequency === 'yearly') {
    // For yearly, calculate years difference
    const yearsDiff = lastPremiumPaidDate.getFullYear() - startDate.getFullYear();
    return yearsDiff + 1; // +1 to include the first premium
  } else {
    // For monthly, quarterly, half-yearly - use month-based calculation
    const frequencyMonths = getFrequencyInMonths(frequency);

    // Calculate months difference
    const monthsDiff = (lastPremiumPaidDate.getFullYear() - startDate.getFullYear()) * 12 + 
                       (lastPremiumPaidDate.getMonth() - startDate.getMonth());

    // Calculate number of premiums paid (including the first one)
    return Math.floor(monthsDiff / frequencyMonths) + 1;
  }
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
