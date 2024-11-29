export const sellingHerobanner = {
    src:'/sell-home.webp',
 
title: "Streamline Your Services, Build Client Trust",
description: "This page showcases your expertise and services in a clear, professional way. By detailing what you offer, you save time answering common client questions and establish trust by demonstrating your knowledge and commitment to their needs.",
    buttonText:'Get your own service page',
    destination:'/contact'
}

export const meetingExperienceCard = {
    title: "Step 1: The Initial Meeting",
    src: "/initial-meeting.webp", // Path to the image for the initial meeting
    alt: "Initial Meeting with Client",
    description: "The first step in the home-selling process is an introductory meeting with your client. This is where you understand their goals, timeline, and budget. It’s an opportunity to align expectations and build rapport, ensuring a smooth transaction ahead.",
    aspects: [
      "Understand client goals and objectives",
      "Discuss timeline and budget expectations",
      "Provide an overview of the home-selling process",
      "Answer any initial questions from the client",
      "Collect necessary documentation, including ID and proof of ownership"
    ],
    link: "", // No link for this card
    reverse: false, // Default layout for the card
    aspectHeader: "What Happens During the Initial Meeting"
  };

  export const preApprovalSteps = [
    {
      name: "Step 1", // Step number
      price: "Submit Loan Application", // The title of the step
      description: "The first step in securing a loan is to fill out a loan application, providing your financial information and personal details.",
      aspects: [
        "Provide personal information (name, address, etc.)",
        "Submit financial details (income, assets, liabilities)",
        "Consent for a credit check",
        "Complete any additional lender-specific forms"
      ]
    },
    {
      name: "Step 2", // Step number
      price: "Provide Documentation", // The title of the step
      description: "Next, you will need to provide documentation that supports your loan application, including proof of income and employment.",
      aspects: [
        "Proof of income (pay stubs, tax returns, etc.)",
        "Employment verification",
        "Bank statements",
        "Additional documents as requested by the lender"
      ]
    },
    {
      name: "Step 3", // Step number
      price: "Loan Review and Approval", // The title of the step
      description: "Once the lender reviews your application and documentation, they will determine if you qualify for pre-approval and provide you with a loan decision.",
      aspects: [
        "Lender reviews all submitted information",
        "Assessment of your credit score and financial stability",
        "Loan approval or pre-approval decision",
        "Receive terms and interest rate for your loan"
      ]
    }
  ];
  
  