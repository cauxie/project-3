// script.js

// Function to calculate creditworthiness
function calculateCreditworthiness(data) {
    let score = 0;
  
    // Check if account balance exceeds loan amount
    if (data.accountBalance > data.loanAmount) {
      score += 10;
    } else {
      score -= 10;
    }
  
    // Add points for credit history
    if (data.creditHistory >= 6) {
      score += 10;
    }
  
    // Add points for recent deposit
    if (data.lastDeposit <= 1) {
      score += 5;
    }
  
    // Add points for last loan collection
    if (data.lastLoanCollection >= 6) {
      score += 10;
    }
  
    // Add points for loan repayment period
    if (data.repaymentPeriod < 6) {
      score += 5;
    }
  
    // Add points for account type
    if (data.accountType === "current") {
      score += 10;
    } else if (data.accountType === "savings") {
      score += 5;
    }
  
    return score;
  }
  
  // Handle form submission
  document.getElementById("creditForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Collect form data
    const data = {
      annualIncome: parseFloat(document.getElementById("annualIncome").value),
      loanAmount: parseFloat(document.getElementById("loanAmount").value),
      accountBalance: parseFloat(document.getElementById("accountBalance").value),
      lastDeposit: parseInt(document.getElementById("lastDeposit").value),
      lastLoanCollection: parseInt(document.getElementById("lastLoanCollection").value),
      repaymentPeriod: parseInt(document.getElementById("repaymentPeriod").value),
      accountType: document.getElementById("accountType").value,
      creditHistory: 6 // Assume 6 months credit history for simplicity
    };
  
    // Validate input
    if (data.loanAmount > 0.45 * data.annualIncome) {
      document.getElementById("result").innerText =
        "Loan amount exceeds 45% of annual income. Loan cannot be approved.";
      return;
    }
  
    // Calculate score
    const score = calculateCreditworthiness(data);
  
   
  });  