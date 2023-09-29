function calculateNetSalary(grossPay) {
    // Define PAYE rates
    const payeRates = [
      { range: [0, 24000], rate: 0.1 },
      { range: [24001, 32333], rate: 0.25 },
      { range: [32334, 500000], rate: 0.3 },
      { range: [500001, 800000], rate: 0.325 },
      { range: [800001, Infinity], rate: 0.35 },
    ];
  
    // Calculate PAYE (tax)
    let paye = 0;
    for (const rate of payeRates) {
      if (grossPay > rate.range[0]) {
        const taxableAmount = Math.min(grossPay, rate.range[1]) - rate.range[0];
        paye += taxableAmount * rate.rate;
      }
    }
  
    // Define NHIF rates
    const nhifRates = [
      { range: [0, 5999], deduction: 150 },
      { range: [6000, 7999], deduction: 300 },
      { range: [8000, 11999], deduction: 400 },
      { range: [12000, 14999], deduction: 500 },
      { range: [15000, 19999], deduction: 600 },
      { range: [20000, 24999], deduction: 750 },
      { range: [25000, 29999], deduction: 850 },
      { range: [30000, 34999], deduction: 900 },
      { range: [35000, 39999], deduction: 950 },
      { range: [40000, 44999], deduction: 1000 },
      { range: [45000, 49999], deduction: 1100 },
      { range: [50000, 59999], deduction: 1200 },
      { range: [60000, 69999], deduction: 1300 },
      { range: [70000, 79999], deduction: 1400 },
      { range: [80000, 89999], deduction: 1500 },
      { range: [90000, 99999], deduction: 1600 },
      { range: [100000, Infinity], deduction: 1700 },
    ];
  
    // Calculate NHIF deductions
    let nhifDeduction = 0;
    for (const rate of nhifRates) {
      if (grossPay >= rate.range[0]) {
        nhifDeduction = rate.deduction;
      }
    }
  
    // Calculate NSSF contribution (6% of pensionable pay)
    const nssfContribution = Math.min(grossPay, 18000) * 0.06;
  
    // Calculate net salary
    const netSalary = grossPay - (paye + nhifDeduction + nssfContribution);
  
    return {
      grossPay,
      paye,
      nhifDeduction,
      nssfContribution,
      netSalary,
    };
  }
  
  
  const grossPay = 90000; // Replace with the individual's gross pay
  const salaryDetails = calculateNetSalary(grossPay);
  console.log("Gross Pay:", salaryDetails.grossPay);
  console.log("PAYE (Tax):", salaryDetails.paye);
  console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
  console.log("NSSF Contribution:", salaryDetails.nssfContribution);
  console.log("Net Salary:", salaryDetails.netSalary);
  