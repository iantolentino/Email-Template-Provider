const EMAIL_CONSTANTS = { 
  // Basic salutations
  SHORT_SALUTATION: 'Dear [Name],\n\n',
  TEAM_SALUTATION: 'Dear Team,\n\n',
  DEPARTMENT_SALUTATION: 'Dear [Department] Team,\n\n',
  ALL_STAFF_SALUTATION: 'Dear All,\n\n',
  EMERGENCY_SALUTATION: 'URGENT NOTIFICATION\n\n',
   
  // Basic signatures
  SHORT_SIGNATURE: '\n\nRegards,\n[Name]', 
  POSITION_SIGNATURE: '\n\nRegards,\n[Name]\n[Position]', 
  DEPARTMENT_SIGNATURE: '\n\nRegards,\n[Name]\n[Department]',
  FULL_SIGNATURE: '\n\nRegards,\n[Name]\n[Position]\n[Department]\n[Contact Information]',
  EMERGENCY_SIGNATURE: '\n\nEmergency Contact: [Contact Details]\n[Name]\n[Position]'
};
/*
Category Structure:
1. 🔧 Hardware Management
   - Device Assessment
   - Replacements
   - Maintenance
   - Disposal
2. 💻 Software & Systems
   - Installation
   - Updates
   - Licensing
   - Access Management
3. 🌐 Network & Infrastructure
   - Connectivity
   - Security
   - Performance
   - Maintenance
4. 🎫 Support & Service Desk
   - Tickets
   - Incidents
   - Requests
   - Notifications
5. 📊 Reports & Assessments
   - Performance
   - Compliance
   - Audits
   - Reviews
6. 👥 HR & Personnel
   - Onboarding
   - Training
   - Equipment
   - Access
7. 💰 Finance & Procurement
   - Purchases
   - Approvals
   - Budgets
   - Assets
8. 📅 Project Management
   - Planning
   - Status
   - Meetings
   - Deliverables
9. 🔒 Security & Compliance
   - Incidents
   - Policies
   - Audits
   - Training
10. 🤝 Client Relations
    - Updates
    - Services
    - Support
    - Reviews

11. 🏭 Manufacturing
    - Quality Control
    - Production Planning
    - Inventory Management
    - Equipment Maintenance

12. 🏥 Healthcare
    - Patient Care
    - Medical Equipment
    - Compliance
    - Staff Scheduling

13. 🏦 Financial Services
    - Risk Assessment
    - Compliance Reports
    - Audit Trails
    - Client Management

14. 🛍️ Retail Operations
    - Inventory Updates
    - Store Management
    - Customer Service
    - Sales Reports

15. 🏗️ Construction Projects
    - Site Reports
    - Safety Compliance
    - Material Management
    - Progress Updates

16. 📚 Education Sector
    - Course Management
    - Student Services
    - Faculty Resources
    - Academic Planning

17. 🔬 Research & Laboratory
    - Experiment Reports
    - Lab Safety
    - Equipment Requests
    - Research Proposals

18. 🤖 Technology Innovation
    - Product Development
    - Testing Reports
    - Feature Requests
    - Release Notes

19. 🤼 Cross-Departmental
    - Project Collaboration
    - Resource Sharing
    - Joint Initiatives
    - Team Integration

20. 🌐 Global Operations
    - International Coordination
    - Cultural Adaptation
    - Regional Compliance
    - Market Entry

21. 🏠 Remote Work Management
    - Work Requests
    - Equipment Setup
    - Virtual Meetings
    - Technical Support
    - Workspace Compliance

22. 🤝 Customer Success
    - Customer Onboarding
    - Feedback Collection
    - Success Stories
    - Account Reviews
    - Service Updates

23. 📣 Marketing Campaigns
    - Campaign Approvals
    - Performance Reports
    - Content Planning
    - A/B Testing
    - Analytics Reviews

24. 📋 Vendor Management
    - Vendor Evaluation
    - Contract Management
    - Performance Reviews
    - Service Level Agreements
    - Issue Resolution

25. 🔒 Data Privacy & Compliance
    - Access Requests
    - Privacy Assessments
    - Compliance Reports
    - Data Breaches
    - Policy Updates

26. 🔄 Change Management
    - System Updates
    - Process Changes
    - Migration Plans
    - Release Notes
    - Impact Analysis

27. 📅 Event Management
    - Conference Planning
    - Workshop Organization
    - Training Sessions
    - Webinar Setup
    - Post-Event Reviews

28. 📊 Resource Management
    - Capacity Planning
    - Resource Allocation
    - Equipment Scheduling
    - Budget Tracking
    - Utilization Reports

29. 🌱 Sustainability
    - Green Initiatives
    - Energy Efficiency
    - Waste Reduction
    - Environmental Reports
    - Carbon Footprint

30. 🚨 Crisis Management
    - Emergency Response
    - Business Continuity
    - Incident Reports
    - Recovery Plans
    - Status Updates
*/

const customTemplates = [
  // 🏭 Manufacturing Templates
{
  id: "mfg-qc-001",
  subject: "Quality Control Alert – [Product Line]",
  category: "Manufacturing",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please be advised of a quality control issue identified in [Product Line].

Inspection Summary:
• Issue(s) Detected:
• Immediate Action Required:
• Corrective Measures Planned:

Kindly acknowledge receipt and confirm action.${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
},

 {
  id: "health-equip-001",
  subject: "Medical Equipment Maintenance Report",
  category: "Healthcare",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Maintenance update for the following equipment:

Device: [Name] | S/N: [Number] | Dept: [Location] | Certification: [Standard]

Service Performed:
• Type: [Routine/Emergency]
• Tasks: [Summary]
• Parts Replaced: [If any]
• Calibration Result: [Status]

Compliance Status:
Required Action: [If any]

${EMAIL_CONSTANTS.POSITION_SIGNATURE}
Best regards.`
},

 {
  id: "fin-compliance-001",
  subject: "Regulatory Compliance Report - [Quarter]",
  category: "Financial",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Compliance update for [Quarter], [Year]:

Overview:
• Audits: [#]
• Issues: [#]
• Resolution Rate: [%]

Key Findings:
1. [Finding 1]
2. [Finding 2]

Risk & Mitigation:
• High-Risk Areas: [List]
• Actions: [Plan]

Recommendations:
• Policy/Training/System updates as needed.

${EMAIL_CONSTANTS.POSITION_SIGNATURE}
Best regards.`
},

{
  id: "lab-experiment-001",
  subject: "Experiment Report - [Project ID]",
  category: "Research",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Summary of experiment results:

Project: [ID] | Date: [Date] | Researcher: [Name] | Lab: [Location]

Method:
Results:
Data Stored At:
Conclusion:
• Key Outcomes: [Summary]
• Next Steps: [Action]

${EMAIL_CONSTANTS.POSITION_SIGNATURE}
Best regards.`
},

 {
  id: "cross-proj-001",
  subject: "Cross-Department Project - [Project Name]",
  category: "Cross-Departmental",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Update on interdepartmental project:

Overview:
Resources & Integration Points:
Timeline:
Department Lead: [Name]

Next Meeting: [Date/Time]

${EMAIL_CONSTANTS.POSITION_SIGNATURE}
Best regards.`
},

 {
  id: "hw-assessment-001",
  subject: "Hardware Assessment Report - [Device Type]",
  category: "Hardware Management",
  body: `Dear [Stakeholder],

Device: [Type/Model/SN] | Brand: [Manufacturer] | Warranty: [Status]

Specs: CPU [ ] | RAM [ ] | Storage [ ] | Power [ ]

Status: [Summary]

Recommendations: [ ]

Compliance/Risk: [ ]

Cost: Parts [ ] | Labor [ ] | Maintenance [ ]

Next Steps: [ ]

Assessed By: [Name] | Date: [Date]`
},

 {
  id: "hw-assessment-short-001",
  subject: "Quick Hardware Assessment - [Device Type]",
  category: "Hardware Management",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Hardware status for [Device]:

Model: [ ] | Serial: [ ] | Asset: [ ]

Findings: [ ]
Priority: [ ]

Actions Required: [ ]
Timeline: [ ]

${EMAIL_CONSTANTS.SHORT_SIGNATURE}
Best regards.`
},

 {
  id: "hw-repair-short-001",
  subject: "Repair Report - [Device Type]",
  category: "Hardware Management",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Repair completed for [Device]:

Asset: [ ] | Location: [ ]

Issue: [ ]
Fix Applied: [ ]
Parts Used: [ ]

Status: [ ]
Next Steps: [ ]

${EMAIL_CONSTANTS.SHORT_SIGNATURE}
Best regards.`
},

 {
  id: "sw-install-short-001",
  subject: "Software Installation Brief",
  category: "Software",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Software installed successfully:

Software: [Name] | Version: [ ] | License: [ ]

Status: [Success/Issues]
Notes: [Instructions]

${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}
Best regards.`
},

  // 🎓 Quick Training
  {
    id: "training-short-001",
    subject: "Training Feedback Brief",
    category: "Training",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Feedback for [Training Name]:

ATTENDANCE: [Number]
RATING: [X/5]

KEY FEEDBACK:
• [Positive Point]
• [Area for Improvement]

Suggestions: [Brief Notes]${EMAIL_CONSTANTS.SHORT_SIGNATURE}

Best regards.`
  },

  // � Facility Management
  {
    id: "fac-maintenance-001",
    subject: "Facility Maintenance Request - [Location]",
    category: "Facility",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please address the following maintenance request:

Location: [Building], Floor [#], Room [Area]
Access: [Requirements]

Maintenance: [Category] | Priority: [Urgent/Normal] | Impact: [# Affected]

Issue: [Brief Description] | Duration: [Timeframe] | Safety: [Yes/No]

Schedule: [Requested Date] | During Business Hours: [Yes/No] | Coordination: [Departments]

Contact: [Name, Dept, Phone/Ext]

Regards,`
  },

  // 🏠 Remote Work Management
  {
    id: "remote-request-001",
    subject: "Remote Work Request - [Start Date]",
    category: "Remote Work",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}I would like to request remote work arrangements:

REQUEST DETAILS:
• Duration: [Temporary/Permanent]
• Start Date: [Date]
• End Date: [If Temporary]
• Work Hours: [Time Zone & Hours]

EQUIPMENT NEEDS:
• Hardware: [List Required]
• Software: [List Required]
• Network: [VPN/Special Access]

WORK PLAN:
• Daily Tasks: [Key Responsibilities]
• Communication: [Tools & Schedule]
• Team Meetings: [Regular Times]

JUSTIFICATION:
[Brief Explanation]

Manager: [Name]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "remote-setup-001",
    subject: "Remote Workspace Setup Verification",
    category: "Remote Work",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Please confirm your remote workspace setup:

WORKSPACE CHECKLIST:
• Dedicated Work Area: [Yes/No]
• Ergonomic Setup: [Yes/No]
• Adequate Lighting: [Yes/No]
• Internet Speed: [Mbps]

EQUIPMENT STATUS:
• Computer: [Model/Specs]
• Monitor: [Size/Resolution]
• Peripherals: [List]
• Software: [Installed/Needed]

NETWORK SETUP:
• Internet Provider: [Name]
• Backup Connection: [Available/None]
• VPN Tested: [Yes/No]
• Video Call Quality: [Good/Issues]

SECURITY MEASURES:
• Secure WiFi: [Yes/No]
• Password Policy: [Confirmed]
• Data Protection: [Measures]

Any issues or needs:${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "virtual-meeting-001",
    subject: "Virtual Team Meeting - [Topic]",
    category: "Remote Work",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Details for our upcoming virtual team meeting:

MEETING INFO:
• Date: [Date]
• Time: [Time with TimeZone]
• Duration: [Length]
• Platform: [Tool Name]

ACCESS DETAILS:
• Link: [Meeting URL]
• Meeting ID: [ID]
• Password: [If Required]
• Dial-in: [Numbers]

AGENDA:
1. [Topic 1] - [Duration]
2. [Topic 2] - [Duration]
3. [Topic 3] - [Duration]

PREPARATION:
• Review: [Documents]
• Prepare: [Requirements]
• Test: [Tech Check]

Notes:
- Please join 5 minutes early
- Keep microphone muted when not speaking
- Use headphones if possible${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "customer-onboarding-001",
    subject: "Welcome to [Company Name] - Getting Started",
    category: "Customer Success",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Welcome to [Company Name]! We're excited to have you on board.

NEXT STEPS:
1. Account Setup
   • Username: [Details]
   • Initial Password: [If Applicable]
   • Access Portal: [URL]

2. Implementation Timeline
   • Kickoff Call: [Date/Time]
   • Training Sessions: [Dates]
   • Go-Live Date: [Target]

3. Resources
   • Quick Start Guide: [Link]
   • Knowledge Base: [Link]
   • Support Portal: [Link]

YOUR TEAM:
• Account Manager: [Name]
• Technical Support: [Contact]
• Implementation Lead: [Name]

Please don't hesitate to reach out with any questions!${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "customer-feedback-001",
    subject: "Your Feedback Matters - [Product/Service] Review",
    category: "Customer Success",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}We value your experience with [Product/Service] and would appreciate your feedback:

QUICK REVIEW:
• Overall Satisfaction: [1-5 Stars]
• Ease of Use: [1-5 Stars]
• Value for Money: [1-5 Stars]

SPECIFIC FEEDBACK:
1. What do you like most?
   [Response]

2. What could be improved?
   [Response]

3. Additional Features Desired:
   [Suggestions]

USAGE EXPERIENCE:
• Primary Use Case: [Description]
• Time Using Product: [Duration]
• Key Benefits: [List]

Your feedback helps us improve our service!

Take our detailed survey: [Survey Link]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "success-story-001",
    subject: "Share Your Success Story with [Company Name]",
    category: "Customer Success",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}We'd love to feature your success with [Product/Service]:

SUCCESS HIGHLIGHTS:
• Challenge Solved: [Description]
• Solution Used: [Features]
• Results Achieved: [Metrics]

STORY DETAILS:
1. Background
   [Company Context]

2. Implementation
   [Process Overview]

3. Outcomes
   • Quantitative: [Numbers]
   • Qualitative: [Benefits]

PERMISSIONS:
• Case Study Use: [Yes/No]
• Quote Attribution: [Yes/No]
• Logo Usage: [Yes/No]

We'll send you a draft for review before publishing.${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "campaign-approval-001",
    subject: "Marketing Campaign Approval Request - [Campaign Name]",
    category: "Marketing",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Please review and approve the following marketing campaign:

CAMPAIGN OVERVIEW:
• Name: [Campaign Name]
• Type: [Email/Social/PPC/etc.]
• Duration: [Timeline]
• Budget: [Amount]

TARGET AUDIENCE:
• Demographics: [Details]
• Segments: [List]
• Expected Reach: [Number]

CREATIVE ASSETS:
• Landing Pages: [URLs]
• Email Templates: [Links]
• Ad Creatives: [Links]
• Social Posts: [Links]

SUCCESS METRICS:
• Primary KPI: [Metric]
• Secondary KPIs: [List]
• Benchmark Goals: [Targets]

Timeline for approval needed: [Date]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "campaign-performance-001",
    subject: "Marketing Campaign Performance Report - [Campaign Name]",
    category: "Marketing",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Here's the performance report for [Campaign Name]:

CAMPAIGN METRICS:
• Impressions: [Number]
• Engagement: [Rate]
• Conversions: [Number]
• ROI: [Percentage]

CHANNEL PERFORMANCE:
1. Email Marketing
   • Open Rate: [%]
   • Click Rate: [%]
   • Conversion: [%]

2. Social Media
   • Reach: [Number]
   • Engagement: [Rate]
   • Clicks: [Number]

3. Paid Advertising
   • Spend: [Amount]
   • CPC: [Cost]
   • CTR: [Rate]

KEY INSIGHTS:
• Top Performing: [Elements]
• Areas for Improvement: [List]
• Recommendations: [Actions]

Full report: [Link]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "content-plan-001",
    subject: "Content Calendar Review - [Month/Quarter]",
    category: "Marketing",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Please review our content plan for [Period]:

CONTENT SCHEDULE:
Week 1:
• Blog: [Topic] - [Due Date]
• Social: [Topics] - [Platforms]
• Email: [Campaign] - [Send Date]

Week 2:
• Blog: [Topic] - [Due Date]
• Social: [Topics] - [Platforms]
• Email: [Campaign] - [Send Date]

RESOURCE NEEDS:
• Writers: [Names]
• Designers: [Names]
• Reviewers: [Names]

THEMES & MESSAGING:
• Key Topics: [List]
• Target Keywords: [List]
• Call-to-Actions: [List]

Please provide feedback by: [Date]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "vendor-eval-001",
    subject: "Vendor Evaluation Report - [Vendor Name]",
    category: "Vendor Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Here's the evaluation report for [Vendor Name]:

Vendor: [Company] | Service: [Type] | Contract: [Value] | Duration: [Time]

Performance:

Quality: Rel [ /5], Resp Time [ /5], Resolution [ /5]

Terms: Cost [ /5], Payment [ /5], Flexibility [ /5]

Communication: Response [ /5], Reporting [ /5], Account Mgmt [ /5]

Compliance: Security [Status] | Insurance [Status] | Regulatory [Status]

Recommendation: [Continue / Modify / Terminate]
Action Items: [List]
• Timeline: [Dates]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "contract-renewal-001",
    subject: "Contract Renewal Review - [Vendor Name]",
    category: "Vendor Management",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Regarding the upcoming contract renewal with [Vendor Name]:

CONTRACT DETAILS:
• Current End Date: [Date]
• Renewal Deadline: [Date]
• Current Terms: [Summary]

PROPOSED CHANGES:
1. Service Level
   • Current: [Details]
   • Proposed: [Details]

2. Pricing
   • Current: [Amount]
   • Proposed: [Amount]

3. Terms
   • Duration: [Length]
   • Payment Terms: [Details]
   • Special Conditions: [List]

BUSINESS IMPACT:
• Cost Analysis: [Details]
• Service Impact: [Assessment]
• Risk Factors: [List]

Please review and approve by: [Date]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "vendor-issue-001",
    subject: "Vendor Service Issue Report - [Issue Type]",
    category: "Vendor Management",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}We need to address the following service issue:

ISSUE DETAILS:
• Type: [Category]
• Severity: [Level]
• Start Date: [Date]
• Status: [Current State]

IMPACT ASSESSMENT:
• Business Impact: [Description]
• Affected Users: [Number]
• Workarounds: [If Any]

SLA REQUIREMENTS:
• Response Time: [Target]
• Resolution Time: [Target]
• Current Status: [Progress]

REQUESTED ACTION:
1. [Immediate Action]
2. [Follow-up Steps]
3. [Prevention Plan]

Please acknowledge and provide ETA for resolution.${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "data-access-001",
    subject: "Data Access Request - [Request Type]",
    category: "Data Privacy",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please process the following data access request:

REQUEST DETAILS:
• Type: [Access/Deletion/Correction]
• Requestor: [Name]
• ID Verification: [Status]
• Deadline: [Date]

DATA SCOPE:
• Systems: [List]
• Data Types: [Categories]
• Date Range: [Period]

VERIFICATION STEPS:
1. Identity Confirmed: [Yes/No]
2. Request Validity: [Verified]
3. Legal Basis: [Justification]

ACTION REQUIRED:
• Data Extraction: [Team]
• Review Process: [Steps]
• Delivery Method: [Format]

Please acknowledge receipt and confirm timeline.${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "privacy-assessment-001",
    subject: "Privacy Impact Assessment - [Project Name]",
    category: "Data Privacy",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Results of the Privacy Impact Assessment for [Project]:

PROJECT OVERVIEW:
• Name: [Project Title]
• Scope: [Description]
• Data Types: [Categories]
• Processing Purpose: [Explanation]

RISK ASSESSMENT:
1. Data Collection
   • Necessity: [Justified/Not]
   • Minimization: [Measures]
   • Consent: [Method]

2. Data Processing
   • Security: [Controls]
   • Access: [Restrictions]
   • Retention: [Period]

RECOMMENDATIONS:

Required Actions: [List]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "compliance-report-001",
    subject: "Data Privacy Compliance Report - [Period]",
    category: "Data Privacy",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Compliance status report for [Period]:

COMPLIANCE OVERVIEW:
• Framework: [Standards]
• Audit Period: [Dates]
• Overall Status: [Rating]

KEY METRICS:
• Privacy Incidents: [Number]
• Access Requests: [Count]
• Response Time: [Average]

ASSESSMENT AREAS:
1. Policy Compliance

2. Technical Controls

3. Third-Party Risk

ACTIONS REQUIRED:
1. [Priority Action 1]
2. [Priority Action 2]
3. [Priority Action 3]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "change-request-001",
    subject: "Change Request - [System/Process] Update",
    category: "Change Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please review the following change request:

Change: [Type] | Priority: [High/Med/Low] | Impact: [Critical/Major/Minor] | Requested By: [Name]

Scope: Systems [List] | Users [# / Groups] | Depts [List] | Dependencies [List]

Timeline: Start [Date/Time] | Duration [Time] | Complete [Date] | Rollback [Window]

Plan:

Pre: [Prep / Backup / Test]

During: [Steps / Verification / Criteria]

Post: [Validation / Monitor / Sign-off]

Risk: Issues [List] | Mitigation [Steps] | Rollback [Plan]

Please review and approve by [Date].${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "system-update-001",
    subject: "System Update Notification - [System Name]",
    category: "Change Management",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Important system update scheduled for [System Name]:

Update: [System / Version] | Type: [Security / Feature / Maintenance] | Priority: [Level] | Duration: [Time]

Schedule: [Start – End, Timezone]

Impact: Interruption [Y/N] | Downtime [Duration] | Affected [Features]

Preparation: Save work [By ___] | Backup [Y/N] | Close [Apps]

Post-Update: Clear cache [Y/N] | Restart [Y/N] | New Features: [Summary]

Support: Pre [Contact] | During [Emergency Contact] | Post [Help Desk]

Status updates will be posted at [URL].${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}`
  },

  {
    id: "migration-plan-001",
    subject: "Data Migration Plan - [Project Name]",
    category: "Change Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Details for the upcoming data migration:
    
Project: Source [System/Ver] → Target [System/Ver] | Data: [Volume] | Complexity: [Level]

Timeline: Plan [Dates] | Test [Dates] | Migrate [Window] | Validate [Duration]

Scope: Types [Data] | Records [Count] | Period [Range] | Special [Cases]

Strategy:

Pre: Cleanup [Tasks] | Validate [Rules] | Backup [Method]

During: Order [Seq] | Checkpoints [Intervals] | Monitor [Tools]

Post: Verify [Process] | Sign-off [Reqs] | Support [Plan]

Contingency: Rollback [Triggers] | Recovery [Time] | Alt [Options]

Team assignments and detailed procedures attached.${EMAIL_CONSTANTS.FULL_SIGNATURE}`
  },

  {
    id: "conference-plan-001",
    subject: "Conference Planning - [Event Name]",
    category: "Event Management",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Details for the upcoming [Event Name] conference:

Event: [Theme] | Date: [Range] | Location: [Venue] | Attendance: [#]

Schedule:

Day 1: [Key Sessions / Times]

Day 2: [Key Sessions / Times]

Logistics: Reg Desk [Loc/Hrs] | Main Hall [Cap] | Rooms [List] | Tech [Reqs]

Speakers: Keynote [Name/Topic] | Featured [List] | Moderators [List]

Catering: Breakfast [Time/Menu] | Lunch [Time/Menu] | Refreshments [Time]

Tech Setup: AV [List] | Internet [Setup] | Recording [Reqs]

Action items and responsibilities attached.${EMAIL_CONSTANTS.FULL_SIGNATURE}`
  },

  {
    id: "workshop-org-001",
    subject: "Workshop Organization - [Topic]",
    category: "Event Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Workshop planning details for [Topic]:

WORKSHOP DETAILS:
• Title: [Name]
• Date: [Date]
• Time: [Duration]
• Location: [Place/Platform]
• Capacity: [Number]

AGENDA:
1. Introduction ([Time])
   • Welcome
   • Objectives
   • Ice Breaker

2. Main Sessions
   • [Topic 1] ([Time])
   • [Topic 2] ([Time])
   • [Topic 3] ([Time])

3. Activities
   • [Exercise 1]: [Description]
   • [Exercise 2]: [Description]
   • [Group Work]: [Details]

MATERIALS NEEDED:
• Handouts: [List]
• Equipment: [List]
• Software: [Requirements]
• Supplies: [List]

PARTICIPANT PREP:
• Prerequisites: [Requirements]
• Pre-reading: [Materials]
• Setup: [Instructions]

FOLLOW-UP:
• Feedback Forms: [Method]
• Certificates: [Distribution]
• Resources: [Access]

Please confirm your role and requirements.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "webinar-setup-001",
    subject: "Webinar Setup - [Topic]",
    category: "Event Management",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Setup details for upcoming webinar:

WEBINAR INFORMATION:
• Title: [Name]
• Date: [Date]
• Time: [Time] ([Time Zone])
• Platform: [Software]
• Duration: [Length]

TECHNICAL SETUP:
• Platform Link: [URL]
• Backup Link: [Alternative]
• Testing Time: [Date/Time]
• Recording: [Yes/No]

ROLES:
• Host: [Name]
• Presenters: [Names]
• Moderators: [Names]
• Technical Support: [Contact]

PRESENTATION FLOW:
1. Introduction: [Time]
2. Main Content: [Time]
3. Q&A Session: [Time]
4. Wrap-up: [Time]

ENGAGEMENT TOOLS:
• Polls: [Topics]
• Q&A: [Format]
• Chat: [Guidelines]
• Breakout Rooms: [If Needed]

PRE-EVENT CHECKLIST:
• Slides Deadline: [Date]
• Tech Check: [Date/Time]
• Dry Run: [Date/Time]
• Materials Ready: [List]

Please complete setup verification by [Date].${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "resource-allocation-001",
    subject: "Resource Allocation Plan - [Project/Department]",
    category: "Resource Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Resource allocation plan for [Period]:

RESOURCE SUMMARY:
• Department: [Name]
• Period: [Time Frame]
• Total Capacity: [Hours/Units]
• Available: [Amount]

TEAM ALLOCATION:
1. Project [Name]
   • Team Members: [List]
   • Hours/Week: [Number]
   • Skills Required: [List]
   • Duration: [Time Period]

2. Project [Name]
   • Team Members: [List]
   • Hours/Week: [Number]
   • Skills Required: [List]
   • Duration: [Time Period]

EQUIPMENT ALLOCATION:
• Hardware: [Assignments]
• Software Licenses: [Distribution]
• Shared Resources: [Schedule]

BUDGET ALLOCATION:
• Project Budgets: [Amounts]
• Operating Costs: [Estimates]
• Reserve: [Amount]

CONSTRAINTS:
• Time Conflicts: [Details]
• Resource Limits: [Specifics]
• Dependencies: [List]

Please review and approve allocations.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "capacity-plan-001",
    subject: "Capacity Planning Report - [Department]",
    category: "Resource Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Capacity planning analysis for [Period]:

CURRENT CAPACITY:
• Total FTE: [Number]
• Available Hours: [Hours]
• Utilization Rate: [Percentage]
• Peak Load: [Metric]

DEMAND FORECAST:
• Expected Growth: [Percentage]
• New Projects: [Number]
• Additional Load: [Hours]
• Peak Periods: [Dates]

RESOURCE GAPS:
1. Immediate Needs
   • Skills: [Requirements]
   • Quantity: [Number]
   • Timeline: [Dates]

2. Future Requirements
   • Skills: [Projected Needs]
   • Quantity: [Estimated]
   • Timeline: [Planning Period]

RECOMMENDATIONS:
• Hiring Needs: [Positions]
• Training Plans: [Programs]
• Resource Shifts: [Adjustments]

RISK ASSESSMENT:
• Bottlenecks: [Identification]
• Mitigation: [Strategies]
• Contingencies: [Plans]

Action plan attached for review.${EMAIL_CONSTANTS.FULL_SIGNATURE}`
  },

  {
    id: "equipment-schedule-001",
    subject: "Equipment Schedule Update - [Department]",
    category: "Resource Management",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Updated equipment schedule for [Period]:

EQUIPMENT ROSTER:
• Category: [Type]
• Total Units: [Number]
• Available: [Number]
• Under Maintenance: [Number]

CURRENT ASSIGNMENTS:
1. [Equipment Name]
   • Assigned To: [User/Project]
   • Duration: [Period]
   • Location: [Place]
   • Status: [Condition]

2. [Equipment Name]
   • Assigned To: [User/Project]
   • Duration: [Period]
   • Location: [Place]
   • Status: [Condition]

MAINTENANCE SCHEDULE:
• Upcoming: [Dates/Units]
• Duration: [Time]
• Impact: [Users/Projects]

BOOKING PROCESS:
• Request Method: [Process]
• Lead Time: [Duration]
• Priority Rules: [Guidelines]

Please confirm any schedule conflicts.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "utilization-report-001",
    subject: "Resource Utilization Report - [Period]",
    category: "Resource Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Resource utilization analysis for [Period]:

OVERALL METRICS:
• Average Utilization: [Percentage]
• Peak Usage: [Percentage]
• Idle Time: [Percentage]
• Cost Efficiency: [Ratio]

BREAKDOWN BY TYPE:
1. Human Resources
   • Team Utilization: [Percentage]
   • Overtime Hours: [Number]
   • Bench Time: [Hours]
   • Skills Usage: [Distribution]

2. Equipment
   • Usage Rate: [Percentage]
   • Downtime: [Hours]
   • Maintenance Time: [Hours]
   • Efficiency: [Rating]

3. Software Licenses
   • Active Users: [Number]
   • Usage Patterns: [Analysis]
   • Cost per User: [Amount]

OPTIMIZATION OPPORTUNITIES:
• Resource Shifts: [Recommendations]
• Process Improvements: [Suggestions]
• Cost Savings: [Estimates]

NEXT STEPS:
1. [Action Item]: [Timeline]
2. [Action Item]: [Timeline]
3. [Action Item]: [Timeline]

Detailed analysis available in attached report.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "green-initiative-001",
    subject: "Sustainability Initiative Announcement - [Initiative Name]",
    category: "Sustainability",
    body: `${EMAIL_CONSTANTS.ALL_STAFF_SALUTATION}We are excited to announce our new sustainability initiative:

INITIATIVE OVERVIEW:
• Program: [Name]
• Launch Date: [Date]
• Goals: [Objectives]
• Impact Areas: [Departments/Processes]

KEY COMPONENTS:
1. Energy Conservation
   • Target: [Reduction Goal]
   • Methods: [Strategies]
   • Timeline: [Implementation Schedule]

2. Waste Reduction
   • Current Status: [Metrics]
   • Targets: [Goals]
   • Action Steps: [Implementation]

3. Resource Efficiency
   • Focus Areas: [Resources]
   • Improvements: [Methods]
   • Expected Savings: [Estimates]

EMPLOYEE PARTICIPATION:
• Training Sessions: [Dates]
• Resources Available: [Materials]
• Support Contacts: [Names/Roles]

TRACKING & REPORTING:
• Metrics: [KPIs]
• Reporting: [Schedule]
• Recognition: [Programs]

Join us in making a positive environmental impact!${EMAIL_CONSTANTS.FULL_SIGNATURE}`
  },

  {
    id: "eco-metrics-001",
    subject: "Environmental Impact Report - [Period]",
    category: "Sustainability",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Environmental impact metrics for [Period]:

PERFORMANCE SUMMARY:
• Carbon Footprint: [Metric]
• Energy Usage: [Consumption]
• Waste Generation: [Volume]
• Water Usage: [Amount]

DETAILED METRICS:
1. Energy Consumption
   • Electricity: [kWh]
   • Gas: [Units]
   • Renewable %: [Percentage]
   • Cost: [Amount]

2. Waste Management
   • Recycling Rate: [Percentage]
   • Landfill: [Volume]
   • Composting: [Amount]
   • Hazardous: [Volume]

3. Resource Usage
   • Water: [Gallons]
   • Paper: [Reams]
   • Supplies: [Units]

IMPROVEMENT TRENDS:
• YoY Change: [Percentage]
• Cost Savings: [Amount]
• Carbon Reduction: [Metric]

RECOMMENDATIONS:
1. [Area]: [Action Steps]
2. [Area]: [Action Steps]
3. [Area]: [Action Steps]

Complete report attached.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "sustainability-update-001",
    subject: "Sustainability Program Update - [Quarter]",
    category: "Sustainability",
    body: `${EMAIL_CONSTANTS.ALL_STAFF_SALUTATION}Quarterly update on our sustainability initiatives:

ACHIEVEMENTS:
1. Energy Conservation
   • Results: [Metrics]
   • Savings: [Amount]
   • Impact: [Environmental]

2. Waste Reduction
   • Diversion Rate: [Percentage]
   • Improvements: [Changes]
   • Cost Savings: [Amount]

3. Green Initiatives
   • Programs: [List]
   • Participation: [Rate]
   • Outcomes: [Results]

UPCOMING INITIATIVES:
• Project: [Name/Description]
• Timeline: [Schedule]
• Goals: [Targets]
• Support Needed: [Resources]

RECOGNITION:
• Awards: [Achievements]
• Team Efforts: [Highlights]
• Best Practices: [Examples]

GET INVOLVED:
• Opportunities: [Programs]
• Contact: [Information]
• Resources: [Links]

Thank you for your continued support!${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "green-procurement-001",
    subject: "Sustainable Procurement Guidelines Update",
    category: "Sustainability",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Updated sustainable procurement guidelines:

POLICY UPDATES:
• Effective Date: [Date]
• Scope: [Departments]
• Requirements: [Standards]

SUPPLIER CRITERIA:
1. Environmental Standards
   • Certifications: [Requirements]
   • Practices: [Guidelines]
   • Reporting: [Methods]

2. Product Requirements
   • Materials: [Standards]
   • Packaging: [Guidelines]
   • Disposal: [Methods]

3. Service Providers
   • Practices: [Requirements]
   • Documentation: [Needs]
   • Monitoring: [Process]

EVALUATION PROCESS:
• Criteria: [Metrics]
• Scoring: [System]
• Review: [Process]

IMPLEMENTATION:
• Timeline: [Schedule]
• Training: [Resources]
• Support: [Contacts]

Please review and implement immediately.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "crisis-alert-001",
    subject: "URGENT: Crisis Situation Alert - [Incident Type]",
    category: "Crisis Management",
    body: `${EMAIL_CONSTANTS.EMERGENCY_SALUTATION}CRITICAL INCIDENT NOTIFICATION

INCIDENT DETAILS:
• Type: [Description]
• Location: [Where]
• Time: [When]
• Severity: [Level]

IMMEDIATE ACTIONS:
1. Current Status
   • Situation: [Description]
   • Actions Taken: [Steps]
   • Resources Deployed: [List]

2. Required Response
   • Actions: [Instructions]
   • Personnel: [Roles]
   • Resources: [Needs]

COMMUNICATION PROTOCOL:
• Updates: [Frequency]
• Channels: [Methods]
• Contact: [Information]

SAFETY MEASURES:
• Precautions: [Steps]
• Restrictions: [Rules]
• Support: [Resources]

NEXT UPDATE:
• Time: [When]
• Channel: [How]

Stay alert and follow protocols.${EMAIL_CONSTANTS.EMERGENCY_SIGNATURE}`
  },

  {
    id: "incident-update-001",
    subject: "Crisis Incident Update #[Number] - [Incident Type]",
    category: "Crisis Management",
    body: `${EMAIL_CONSTANTS.EMERGENCY_SALUTATION}SITUATION UPDATE #[Number]

CURRENT STATUS:
• Condition: [Status]
• Time: [Timestamp]
• Changes: [Updates]
• Risk Level: [Assessment]

ACTIONS IN PROGRESS:
1. Response Teams
   • Activities: [Actions]
   • Location: [Where]
   • Progress: [Status]

2. Support Operations
   • Services: [Available]
   • Resources: [Deployed]
   • Coverage: [Areas]

IMPACT ASSESSMENT:
• Affected Areas: [Locations]
• Personnel: [Numbers]
• Operations: [Status]
• Duration: [Estimate]

NEXT STEPS:
1. Immediate: [Actions]
2. Short-term: [Plans]
3. Recovery: [Strategy]

SUPPORT RESOURCES:
• Emergency: [Contacts]
• Information: [Sources]
• Assistance: [Services]

Next update scheduled: [Time]${EMAIL_CONSTANTS.EMERGENCY_SIGNATURE}`
  },

  {
    id: "recovery-plan-001",
    subject: "Crisis Recovery Plan - [Incident Type]",
    category: "Crisis Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Crisis recovery plan outline:

INCIDENT OVERVIEW:
• Event: [Description]
• Duration: [Time Period]
• Impact: [Assessment]
• Status: [Current]

RECOVERY PHASES:
1. Immediate Actions
   • Tasks: [List]
   • Timeline: [Schedule]
   • Resources: [Needs]
   • Owner: [Role]

2. Short-term Recovery
   • Priorities: [List]
   • Actions: [Steps]
   • Timeline: [Dates]
   • Resources: [Requirements]

3. Long-term Restoration
   • Goals: [Objectives]
   • Strategy: [Approach]
   • Timeline: [Schedule]
   • Resources: [Needs]

RESOURCE ALLOCATION:
• Personnel: [Assignments]
• Equipment: [Requirements]
• Budget: [Allocation]

MONITORING & CONTROL:
• Metrics: [KPIs]
• Reporting: [Schedule]
• Reviews: [Timeline]

Please review and provide feedback.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "post-crisis-001",
    subject: "Post-Crisis Analysis Report - [Incident Type]",
    category: "Crisis Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Post-crisis analysis and recommendations:

INCIDENT SUMMARY:
• Event: [Description]
• Timeline: [Sequence]
• Impact: [Assessment]
• Resolution: [Outcome]

RESPONSE EVALUATION:
1. Initial Response
   • Actions: [Steps]
   • Timing: [Analysis]
   • Effectiveness: [Rating]
   • Gaps: [Issues]

2. Crisis Management
   • Protocol: [Assessment]
   • Communication: [Review]
   • Resources: [Adequacy]
   • Leadership: [Evaluation]

3. Recovery Process
   • Strategy: [Review]
   • Execution: [Assessment]
   • Timeline: [Analysis]
   • Results: [Outcomes]

LESSONS LEARNED:
• Strengths: [Points]
• Weaknesses: [Areas]
• Opportunities: [Improvements]
• Threats: [Risks]

RECOMMENDATIONS:
1. [Area]: [Action Items]
2. [Area]: [Action Items]
3. [Area]: [Action Items]

Detailed report attached.${EMAIL_CONSTANTS.FULL_SIGNATURE}`
  },

  {
    id: "software-release-001",
    subject: "New Software Release Announcement - Version [X.X.X]",
    category: "Software Updates",
    body: `${EMAIL_CONSTANTS.ALL_STAFF_SALUTATION}We are pleased to announce the release of version [X.X.X]:

RELEASE HIGHLIGHTS:
• Version: [X.X.X]
• Release Date: [Date]
• Environment: [Production/Staging]
• Priority: [Critical/Major/Minor]

KEY UPDATES:
1. New Features
   • [Feature Name]: [Description]
   • [Feature Name]: [Description]
   • [Feature Name]: [Description]

2. Improvements
   • [Enhancement]: [Details]
   • [Enhancement]: [Details]
   • [Enhancement]: [Details]

3. Bug Fixes
   • [Issue]: [Resolution]
   • [Issue]: [Resolution]
   • [Issue]: [Resolution]

DEPLOYMENT INFORMATION:
• Schedule: [Timeline]
• Impact: [Service Effects]
• Duration: [Time Period]
• Rollback Plan: [Strategy]

ACTION REQUIRED:
• [Step 1]: [Instructions]
• [Step 2]: [Instructions]
• [Step 3]: [Instructions]

SUPPORT:
• Documentation: [Link]
• Contact: [Team/Person]
• Hours: [Availability]

Full release notes available at: [Link]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "system-maintenance-001",
    subject: "Scheduled System Maintenance Notice",
    category: "Software Updates",
    body: `${EMAIL_CONSTANTS.ALL_STAFF_SALUTATION}Important system maintenance notification:

MAINTENANCE DETAILS:
• Date: [Date]
• Time: [Start Time] - [End Time]
• Duration: [Hours/Minutes]
• Systems Affected: [List]

SCOPE OF WORK:
1. Primary Activities
   • [Task]: [Description]
   • [Task]: [Description]
   • [Task]: [Description]

2. Impact Assessment
   • Services Affected: [List]
   • User Impact: [Details]
   • Business Impact: [Level]

PREPARATION REQUIRED:
• Before: [Actions]
• During: [Guidelines]
• After: [Steps]

CONTINGENCY PLAN:
• Rollback Procedure: [Steps]
• Emergency Contact: [Details]
• Alternative Systems: [Options]

We apologize for any inconvenience.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "patch-update-001",
    subject: "Security Patch Update - [System Name]",
    category: "Software Updates",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Critical security patch information:

PATCH DETAILS:
• Update Type: [Security/Bug Fix]
• Version: [Number]
• Priority: [Critical/High/Medium/Low]
• Systems: [Affected Systems]

SECURITY IMPROVEMENTS:
1. Vulnerabilities Addressed
   • [CVE-ID]: [Description]
   • [CVE-ID]: [Description]
   • Impact: [Assessment]

2. Security Enhancements
   • [Feature]: [Details]
   • [Feature]: [Details]
   • [Feature]: [Details]

DEPLOYMENT SCHEDULE:
• Release: [Date/Time]
• Installation: [Process]
• Verification: [Steps]

USER ACTIONS:
1. Required Steps
   • [Action]: [Instructions]
   • [Action]: [Instructions]
   • [Action]: [Instructions]

2. Verification Process
   • [Check]: [Method]
   • [Check]: [Method]

Please implement immediately.${EMAIL_CONSTANTS.EMERGENCY_SIGNATURE}`
  },

  {
    id: "feature-preview-001",
    subject: "Beta Feature Preview - [Feature Name]",
    category: "Software Updates",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Exciting new feature preview announcement:

FEATURE OVERVIEW:
• Name: [Feature]
• Status: Beta/Preview
• Access: [Requirements]
• Timeline: [Dates]

KEY CAPABILITIES:
1. Core Functions
   • [Function]: [Description]
   • [Function]: [Description]
   • [Function]: [Description]

2. Benefits
   • [Benefit]: [Details]
   • [Benefit]: [Details]
   • [Benefit]: [Details]

PARTICIPATION DETAILS:
• Eligibility: [Criteria]
• Registration: [Process]
• Feedback: [Methods]

TESTING GUIDELINES:
1. Setup
   • [Step]: [Instructions]
   • [Step]: [Instructions]
   • [Step]: [Instructions]

2. Known Limitations
   • [Limitation]: [Details]
   • [Limitation]: [Details]

SUPPORT:
• Documentation: [Link]
• Contact: [Details]
• Office Hours: [Times]

Join us in shaping this feature!${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "post-event-001",
    subject: "Post-Event Review - [Event Name]",
    category: "Event Management",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Review summary for [Event Name]:

EVENT METRICS:
• Total Attendance: [Number]
• Engagement Rate: [Percentage]
• Satisfaction Score: [Rating]
• Technical Issues: [Count]

FEEDBACK SUMMARY:
1. Highlights
   • [Positive Point 1]
   • [Positive Point 2]
   • [Positive Point 3]

2. Areas for Improvement
   • [Area 1]: [Suggestion]
   • [Area 2]: [Suggestion]
   • [Area 3]: [Suggestion]

BUDGET REVIEW:
• Planned: [Amount]
• Actual: [Amount]
• Variance: [Difference]
• Key Expenses: [List]

FOLLOW-UP ACTIONS:
1. Immediate
   • [Action Item]: [Owner]
   • [Action Item]: [Owner]

2. Long-term
   • [Strategy]: [Timeline]
   • [Strategy]: [Timeline]

Materials and recordings available at [Link].${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "release-notes-001",
    subject: "Release Notes - Version [X.X.X]",
    category: "Change Management",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}New release details for version [X.X.X]:

RELEASE INFORMATION:
• Version: [Number]
• Release Date: [Date]
• Type: [Major/Minor/Patch]
• Environment: [Prod/Stage/Dev]

NEW FEATURES:
1. [Feature Name]
   • Description: [Details]
   • Benefits: [Improvements]
   • Usage: [Instructions]

2. [Feature Name]
   • Description: [Details]
   • Benefits: [Improvements]
   • Usage: [Instructions]

IMPROVEMENTS:
• [Enhancement 1]: [Description]
• [Enhancement 2]: [Description]
• [Enhancement 3]: [Description]

BUG FIXES:
• [Issue Fixed]: [Resolution]
• [Issue Fixed]: [Resolution]
• [Issue Fixed]: [Resolution]

KNOWN ISSUES:
• [Issue]: [Workaround]
• [Issue]: [Workaround]

TECHNICAL REQUIREMENTS:
• System Requirements: [Specs]
• Dependencies: [List]
• Browser Support: [Versions]

Documentation updates available at [URL].${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "breach-notification-001",
    subject: "Data Breach Incident Report - [Severity Level]",
    category: "Data Privacy",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Notification of a data breach incident:

INCIDENT DETAILS:
• Detection Date: [Date/Time]
• Breach Type: [Category]
• Affected Data: [Types]
• Impact Scope: [Number/Scale]

IMMEDIATE ACTIONS:
1. Containment
   • Status: [Contained/Ongoing]
   • Methods: [Actions Taken]
   • Timeline: [Updates]

2. Investigation
   • Root Cause: [Findings]
   • Vulnerabilities: [Identified]
   • Evidence: [Collected]

IMPACT ASSESSMENT:
• Data Sensitivity: [Level]
• Affected Parties: [Groups]
• Risk Level: [Rating]

NOTIFICATION REQUIREMENTS:
• Regulators: [Due Date]
• Individuals: [Timeline]
• Third Parties: [List]

Response Plan:
1. [Immediate Step]
2. [Short-term Action]
3. [Long-term Prevention]

URGENT: Respond with acknowledgment${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  {
    id: "vendor-review-001",
    subject: "Quarterly Vendor Performance Review",
    category: "Vendor Management",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Performance review for Q[X] [Year]:

SERVICE METRICS:
• Uptime: [Percentage]
• Response Times: [Average]
• Issue Resolution: [Rate]

FINANCIAL PERFORMANCE:
• Budget Adherence: [Status]
• Cost Savings: [Amount]
• Invoice Accuracy: [Rate]

RELATIONSHIP STATUS:
• Communication: [Rating]
• Innovation: [Examples]
• Partnership Value: [Assessment]

ACTION ITEMS:
1. [Improvement Area 1]
2. [Improvement Area 2]
3. [Improvement Area 3]

Next Review Date: [Date]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "ab-test-001",
    subject: "A/B Test Results - [Test Name]",
    category: "Marketing",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Results from our recent A/B test:

TEST OVERVIEW:
• Element Tested: [Component]
• Variants: A vs B
• Duration: [Time Period]
• Sample Size: [Number]

RESULTS:
Variant A:
• Conversion Rate: [%]
• Engagement: [Metrics]
• Key Metrics: [List]

Variant B:
• Conversion Rate: [%]
• Engagement: [Metrics]
• Key Metrics: [List]

STATISTICAL SIGNIFICANCE:
• Confidence Level: [%]
• Lift: [Percentage]
• P-Value: [Number]

RECOMMENDATIONS:
• Winner: [A/B]
• Implementation: [Plan]
• Next Tests: [Ideas]

Detailed report: [Link]${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "account-review-001",
    subject: "Quarterly Account Review - [Company Name]",
    category: "Customer Success",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Let's review your account performance for [Quarter/Year]:

USAGE METRICS:
• Active Users: [Number]
• Feature Adoption: [Percentage]
• Support Tickets: [Number]

KEY ACHIEVEMENTS:
1. [Achievement 1]
2. [Achievement 2]
3. [Achievement 3]

OPPORTUNITIES:
• Unused Features: [List]
• Expansion Areas: [Possibilities]
• Training Needs: [Topics]

NEXT STEPS:
1. Review Meeting: [Proposed Date/Time]
2. Action Items: [List]
3. Goals for Next Quarter: [Objectives]

Please confirm your availability for the review call.${EMAIL_CONSTANTS.POSITION_SIGNATURE}

Best regards.`
  },

  {
    id: "remote-issue-001",
    subject: "Remote Work Technical Issue Report",
    category: "Remote Work",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}I am experiencing technical issues while working remotely:

ISSUE DETAILS:
• Type: [Connection/Hardware/Software]
• Started: [Time/Date]
• Frequency: [Constant/Intermittent]
• Impact: [Work Effect]

TROUBLESHOOTING DONE:
• Steps Taken: [List Actions]
• Results: [Outcomes]
• Current Status: [State]

SYSTEM INFO:
• Device: [Details]
• Software: [Versions]
• Connection: [Speed/Type]

URGENCY:
[Impact Level]

Available for troubleshooting:${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  // 📱 Mobile Device Management
  {
    id: "mdm-001",
    subject: "Mobile Device Registration - [Device Type]",
    category: "MDM",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please register the following mobile device:

DEVICE INFORMATION:
• Type: [Smartphone/Tablet]
• Make: [Manufacturer]
• Model: [Model Name]
• IMEI: [Number]
• Phone Number: [If Applicable]

USER DETAILS:
• Name: [Employee Name]
• Department: [Department]
• Position: [Job Title]
• Employee ID: [Number]

ACCESS REQUIREMENTS:
• Email Configuration: [Yes/No]
• VPN Access: [Yes/No]
• Corporate Apps: [List Required Apps]

SECURITY SETTINGS:
• Password Policy: [Standard/Enhanced]
• Data Encryption: [Required/Optional]
• Remote Wipe: [Enabled/Disabled]

Regards,`
  },

  // 🌐 Cloud Services Management
  {
    id: "cloud-access-001",
    subject: "Cloud Service Access Request",
    category: "Cloud",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Requesting access to cloud services:

SERVICE DETAILS:
• Platform: [AWS/Azure/GCP/etc.]
• Service Type: [Compute/Storage/Database]
• Environment: [Dev/Test/Prod]

USER INFORMATION:
• Name: [Employee Name]
• Role: [Job Function]
• Project: [Project Name]
• Duration: [Access Period]

ACCESS LEVEL:
• Permission Type: [Read/Write/Admin]
• Resource Groups: [List]
• Special Privileges: [If Any]

BUSINESS JUSTIFICATION:
[Explain Need]

Cost Center: [Code]
Manager Approval: [Name]${EMAIL_CONSTANTS.FULL_SIGNATURE}

Best regards.`
  },

  // 🔬 Research & Development
  {
    id: "rd-project-001",
    subject: "R&D Project Proposal",
    category: "R&D",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Project proposal details below:

PROJECT OVERVIEW:
• Name: [Project Name]
• Category: [Technology Area]
• Duration: [Timeframe]
• Team Size: [Number]

OBJECTIVES:
1. [Primary Goal]
2. [Secondary Goals]
3. [Expected Outcomes]

RESOURCE REQUIREMENTS:
• Budget: [Estimated Cost]
• Equipment: [Required Tools]
• Software: [Required Licenses]
• Personnel: [Skills Needed]

TIMELINE:
• Start Date: [Date]
• Key Milestones: [List]
• Completion: [Target Date]

ROI PROJECTION:
• Expected Benefits: [List]
• Market Impact: [Analysis]
• Risk Assessment: [Factors]

Best regards.
${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🎮 Digital Media & Content
  {
    id: "content-req-001",
    subject: "Digital Content Request",
    category: "Media",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Content creation request details:

PROJECT DETAILS:
• Content Type: [Video/Graphics/Animation]
• Purpose: [Marketing/Training/Internal]
• Target Audience: [Specify]
• Platform: [Where Content Will Be Used]

SPECIFICATIONS:
• Format: [File Type]
• Dimensions: [Size]
• Duration: [If Video/Animation]
• Brand Guidelines: [Reference]

KEY MESSAGES:
• Primary Message: [Main Point]
• Secondary Points: [List]
• Call to Action: [Specify]

TIMELINE:
• Draft Needed: [Date]
• Final Delivery: [Date]
• Review Cycles: [Number]

Regards,`
  },

  // 🤖 Automation & Workflows
  {
    id: "auto-req-001",
    subject: "Process Automation Request",
    category: "Automation",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Request for process automation:

PROCESS DETAILS:
• Current Process: [Description]
• Frequency: [Daily/Weekly/Monthly]
• Volume: [Transactions/Period]
• Current Time Spent: [Hours]

REQUIREMENTS:
• Inputs: [Data Sources]
• Processing: [Logic/Rules]
• Outputs: [Expected Results]
• Integration: [Systems Involved]

BUSINESS IMPACT:
• Time Saving: [Estimated Hours]
• Cost Saving: [Amount]
• Quality Improvement: [Metrics]
• Risk Reduction: [Factors]

STAKEHOLDERS:
• Process Owner: [Name]
• End Users: [Groups]
• Systems Team: [Contact]

Regards,`
  },

  // 📊 Data Analytics
  {
    id: "data-req-001",
    subject: "Data Analysis Request",
    category: "Analytics",
    body: `Dear Analytics Team,

Requesting data analysis support:

ANALYSIS REQUIREMENTS:
• Data Source: [Systems/Files]
• Time Period: [Date Range]
• Metrics: [KPIs]
• Segmentation: [Categories]

OBJECTIVES:
• Primary Question: [Main Analysis Goal]
• Secondary Areas: [Additional Insights]
• Decision Support: [How Will This Be Used]

OUTPUT FORMAT:
• Report Type: [Dashboard/Report/Raw Data]
• Visualization: [Charts/Graphs Needed]
• Delivery Method: [Platform/Format]
• Update Frequency: [One-time/Recurring]

TIMELINE:
• Required By: [Date]
• Milestone Reviews: [Checkpoints]

Regards,`
  },

  // 🔐 Identity & Access Management
  {
    id: "iam-req-001",
    subject: "Access Rights Modification",
    category: "IAM",
    body: `Dear IAM Team,

Request for access rights modification:

USER DETAILS:
• Name: [Employee Name]
• ID: [Employee Number]
• Department: [Department]
• Role: [Job Title]

ACCESS CHANGES:
• Systems: [List Applications]
• Permission Level: [Read/Write/Admin]
• Duration: [Temporary/Permanent]
• Effective Date: [Start Date]

JUSTIFICATION:
• Business Need: [Explanation]
• Project: [If Applicable]
• Manager Approval: [Name]

SECURITY REQUIREMENTS:
• Data Classification: [Level]
• Compliance: [Standards]
• Training Required: [Yes/No]

Regards,`
  },

  // 🎓 Learning & Development
  {
    id: "learning-req-001",
    subject: "Training Program Request",
    category: "Learning",
    body: `Dear L&D Team,

Request for training program:

TRAINING NEEDS:
• Topic: [Subject Area]
• Level: [Basic/Intermediate/Advanced]
• Target Audience: [Roles/Departments]
• Number of Participants: [Count]

PROGRAM DETAILS:
• Format: [Online/Classroom/Hybrid]
• Duration: [Length]
• Preferred Dates: [Timeline]
• Location: [If Physical]

LEARNING OBJECTIVES:
• Primary Skills: [List]
• Secondary Skills: [List]
• Certification: [If Required]

BUDGET:
• Cost Per Person: [Amount]
• Total Budget: [Amount]
• Cost Center: [Code]

Regards,`
  },

  // �🎫 Support & Ticketing
  {
    id: "sup-001",
    subject: "IT Support Ticket Acknowledgment - #[ID]",
    category: "Support",
    body: `Dear [Name],

Ticket #[ID] has been created for your support request.

TICKET DETAILS:
Priority: [Priority Level]
Category: [Issue Category]
Assigned To: [Team/Agent]
Response Time: [Expected Time]

NEXT STEPS:
1. Case review within [Response Time]
2. Status updates via email
3. Track at [Portal URL]

Urgent matters: [Emergency Contact]

Best regards.
[Signature]
[Title]
[Department]`
  },
  {
    id: "sup-002",
    subject: "IT Support Ticket Resolution - #[ID]",
    category: "Support",
    body: `Dear [Name],

Your support ticket #[ID] has been successfully resolved.

RESOLUTION DETAILS:
Issue: [Brief Description]
Resolution: [Solution Implemented]
Resolved By: [Agent Name]
Resolved Date: [Date]

ACTION REQUIRED:
Please verify that the solution meets your requirements. If you encounter any further issues:
1. Respond to this email within 48 hours
2. Create a new ticket referencing #[ID]
3. Contact your assigned support agent directly

FEEDBACK:
Your feedback helps us improve. Please take a moment to rate our service:
[Feedback Link]

Thank you for your cooperation.

Best regards.
${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}
`
  },
  {
    id: "sup-003",
    subject: "ALERT: System Outage Notification - [Service Name]",
    category: "Support",
    body: `Dear [Department/Team],

INCIDENT ALERT: We are currently experiencing a system outage.

INCIDENT DETAILS:
Service Affected: [Service Name]
Start Time: [Timestamp]
Estimated Recovery: [ETA]
Impact Level: [Severity]
Affected Areas: [List of Affected Systems/Regions]

CURRENT STATUS:
• Issue: [Brief Description of the Problem]
• Impact: [Business Impact Description]
• Resolution: Our engineering team is actively working on restoration

WORKAROUND:
[If Available, Provide Alternative Methods/Systems]

NEXT UPDATE:
The next status update will be provided by [Time] or sooner if there are significant developments.

For critical issues during this outage, please contact:
Emergency Support: [Emergency Contact]
Incident Manager: [Name/Contact]

We appreciate your patience and understanding.

Regards,`
  },

  // � Hardware Management
  {
    id: "hw-replacement-001",
    subject: "Hardware Replacement Request - [Device Type] - [Location]",
    category: "Hardware Management",
    body: `Dear [IT Manager/Procurement Team],

This is a formal request for hardware replacement based on our recent assessment.

DEVICE DETAILS:
Type: [Device Type]
Manufacturer: [Brand]
Model: [Model Number]
Serial Number: [S/N]
Asset Tag: [Company Asset ID]
Purchase Date: [Date]
Warranty Status: [In/Out of Warranty]
Location: [Building/Floor/Department]
User: [Employee Name/ID]

CURRENT SPECIFICATIONS:
• Processor: [CPU Details]
• Memory: [RAM Details]
• Storage: [Storage Details]
• Other Components: [Relevant Specs]

ISSUE ASSESSMENT:
• Primary Issue: [Brief Description]
• Diagnostic Results: [Test Findings]
• Performance Metrics: [Relevant Data]
• Impact Level: [High/Medium/Low]

REPLACEMENT JUSTIFICATION:
1. [Technical Reason]
2. [Business Impact]
3. [Cost Implications]

REQUESTED SPECIFICATIONS:
• Recommended Model: [New Device Model]
• Estimated Cost: [Amount]
• Priority Level: [Urgent/Normal/Low]
• Required Features: [List Key Requirements]

PROCUREMENT DETAILS:
Cost Center: [Code]
Budget Category: [Category]
Preferred Vendor: [If Any]
Quotation Reference: [If Available]

TIMELINE:
• Request Date: [Current Date]
• Required By: [Target Date]
• Business Justification: [Explain Urgency if Applicable]

ADDITIONAL NOTES:
• Data Migration Required: [Yes/No]
• Special Requirements: [Any Specific Needs]
• User Downtime Plan: [Mitigation Strategy]

APPROVALS REQUIRED:
1. Department Head: [Name]
2. IT Manager: [Name]
3. Finance (if above [threshold]): [Name]

Please review and provide your approval for this replacement request.

Best regards,
[Name]
[Position]
[Department]
[Contact Information]

Attachments:
1. Assessment Report
2. Cost Analysis
3. Vendor Quotations
4. Performance Logs`

  },

  // �🔹 IT Hardware Assessments
  {
    id: "hw-001",
    subject: "Battery Health Assessment Report - [Device ID]",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please see below for the Internal Battery status of [User Name]

PC Name:  PC1234456
Model:  Lenovo

Internal Battery Details:
Serial Number:  1000000000
Product Number: 1000000000
FRU Part#: 1000000

Findings:
The built-in battery charge hold level is 123% which is below/near 30% required capacity of our laptop battery.
Please see image below for your reference.

[Insert Image]

Recommendation: For replacement, please coordinate with the procurement.

Thank you and best regards.
${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}
[Company Name]`
  },
  {
    id: "hw-002",
    subject: "Printer Assessment & Disposal Recommendation",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please find below an assessment regarding the printer at [Department Name].  

Findings:  
- Initially diagnosed with faulty power supply.  
- Replaced but failed again within three weeks.  
- Signs of end-of-life hardware condition.  

RESOLUTION:
- Replaced power supply.  
- Unit failed again and is no longer serviceable.  

Recommendation:  
- Dispose of unit as per IT asset disposal process.  
- Replace printer to ensure uninterrupted operations.  

Best regards.`
  },
  {
    id: "hw-003",
    subject: "PC Hardware Failure Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is to report a hardware failure on the following PC:
[PC Details]

Best regards.`
  },
  
  {
    id: "hw-004",
    subject: "Drive Assessment Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please see below the assessment for Drive123:

MODEL: [Insert Drive Model]
SERIAL: [Insert Serial Number]
SIZE: [Insert Drive Capacity]

IT RESOLUTION:
- Conducted comprehensive drive diagnostic tests
- Verified drive health status and SMART attributes
- Performed data integrity checks
- Tested read/write speeds and access times
- Evaluated physical condition of the drive

RECOMMENDATIONS:
- Based on the diagnostic results, [state if drive needs replacement or can continue use]
- [Add any specific maintenance tasks required]
- [Include backup recommendations if applicable]
- [Specify any performance optimization suggestions]
- [Note any warranty/support status]

Please let us know if you need any clarification or have additional questions.

Best regards,`
  },

  {
    id: "hw-005",
    subject: "Network Equipment Assessment",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please find below the assessment for the network equipment:

DEVICE TYPE: [Switch/Router/Access Point]
MODEL: [Device Model]
SERIAL: [Serial Number]
LOCATION: [Building/Floor/Department]

IT RESOLUTION:
- Performed network connectivity tests
- Checked port status and throughput
- Verified firmware version and updates
- Analyzed error logs and performance metrics
- Tested failover capabilities

RECOMMENDATIONS:
- [Specify if upgrade/replacement needed]
- [List configuration changes required]
- [Note any security concerns]
- [Suggest performance optimizations]
- [Include maintenance schedule]

Best regards,`
  },

  {
    id: "hw-006",
    subject: "Server Assessment Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

Below is the assessment report for the server:

SERVER INFO:
Model: [Server Model]
Serial: [Serial Number]
Role: [Application/Database/Web/etc.]
Location: [Data Center/Rack]

IT RESOLUTION:
- Conducted full system diagnostics
- Checked storage array status
- Verified backup systems
- Analyzed performance metrics
- Reviewed security protocols

RECOMMENDATIONS:
- [Hardware upgrade requirements]
- [Software/OS updates needed]
- [Capacity planning suggestions]
- [Backup strategy improvements]
- [Security enhancement recommendations]

Best regards,`
  },

  {
    id: "hw-007",
    subject: "UPS System Assessment",
    category: "IT",
    body: `Sir / Madam,

Good day!

Please see below the UPS system assessment results:

UNIT DETAILS:
Model: [UPS Model]
Serial: [Serial Number]
Capacity: [kVA Rating]
Location: [Installation Site]

IT RESOLUTION:
- Tested battery condition
- Checked charging system
- Verified load distribution
- Conducted runtime test
- Inspected physical connections

RECOMMENDATIONS:
- [Battery replacement timeline]
- [Load balancing suggestions]
- [Maintenance schedule updates]
- [Capacity upgrade needs]
- [Environmental improvements]

Best regards,`
  },

  {
    id: "hw-008",
    subject: "Laptop Fleet Assessment",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is a fleet assessment report for department laptops:

ASSESSMENT SCOPE:
Department: [Department Name]
Number of Units: [Count]
Models Covered: [List of Models]

IT RESOLUTION:
- Performed hardware diagnostics
- Checked battery health
- Verified OS/Software versions
- Assessed security compliance
- Reviewed warranty status

RECOMMENDATIONS:
- [Units requiring replacement]
- [Upgrade recommendations]
- [Standardization suggestions]
- [Security improvements]
- [Procurement timeline]

Best regards,`
  },

  {
    id: "hw-009",
    subject: "Data Center Cooling Assessment",
    category: "IT",
    body: `Sir / Madam,

Good day!

Below is the assessment of the data center cooling system:

SYSTEM DETAILS:
Type: [CRAC/CRAH/In-Row]
Model: [Cooling Unit Model]
Coverage: [Room/Row/Rack]
Current Load: [Percentage/BTU]

IT RESOLUTION:
- Monitored temperature distribution
- Checked airflow patterns
- Verified humidity levels
- Assessed power efficiency
- Reviewed redundancy systems

RECOMMENDATIONS:
- [Cooling optimization steps]
- [Maintenance requirements]
- [Energy efficiency improvements]
- [Capacity planning suggestions]
- [Emergency procedure updates]

Best regards`
  },

  {
    id: "hw-010",
    subject: "PC Hardware Failure Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

The device [PC/Compaq] is unable to power on.  

Troubleshooting performed:  
- Verified power cables/outlets.  
- Cleaned ports.  
- Unable to reseat RAM due to rust.  
- HDD ports corroded, testing not possible.  

Findings:  
- Severe hardware failure.  
- Motherboard and RAM slots corroded.  

Recommendation:  
- Unit is beyond repair. Replace with new system.  
- Review maintenance and backup plan.  

Best regards.`
  },
  {
    id: "hw-004",
    subject: "Laptop Keyboard Replacement Completed",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is to confirm that the laptop for [Employee Name] has undergone successful keyboard replacement.  

Details:  
- Device Name: [Device Name]  
- Service Performed: Keyboard replacement  
- Status: Fully functional and tested  

The laptop is ready for use.  

Best regards.`
  },
  {
    id: "hw-005",
    subject: "Device Component Replacement",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is to confirm the replacement of the following components on [Device ID]:  

- [Component 1]  
- [Component 2]  

Post-replacement testing confirms normal functionality.  

Best regards.`
  },

  // 🔹 Servers & Network
  {
    id: "srv-001",
    subject: "Server Performance Assessment Report - [Server ID]",
    category: "IT",
    body: `Dear [IT Manager/Stakeholder],

This report summarizes the comprehensive assessment of server [Server Name] conducted on [Date].

SERVER SPECIFICATIONS:
Hostname: [Server Name]
Role: [Primary/Backup/Development]
Location: [Data Center/Rack ID]
OS: [Operating System/Version]

PERFORMANCE METRICS:
1. CPU Utilization:
   • Average: [X]%
   • Peak: [X]%
   • Critical Threshold: [X]%

2. Memory Usage:
   • Total: [X] GB
   • Average Used: [X]%
   • Peak Used: [X]%

3. Storage Analysis:
   • Total Capacity: [X] TB
   • Used Space: [X]%
   • Growth Rate: [X]% per month

4. Network Performance:
   • Average Bandwidth: [X] Mbps
   • Peak Traffic: [X] Mbps

CRITICAL FINDINGS:
1. [Performance Issue 1]
2. [Performance Issue 2]
3. [Risk Assessment]

RECOMMENDATIONS:
1. Immediate Actions:
   • [Action Item 1]
   • [Action Item 2]

2. Short-term Improvements:
   • [Improvement 1]
   • [Improvement 2]

3. Long-term Planning:
   • [Strategic Plan 1]
   • [Strategic Plan 2]

BUDGET IMPLICATIONS:
• Estimated Costs: [Amount]
• Priority Level: [High/Medium/Low]
• ROI Analysis: [Details]

NEXT STEPS:
1. Review recommendations by [Date]
2. Approve action items
3. Schedule implementation

Please review and provide your approval for the recommended actions.

Best regards.
${EMAIL_CONSTANTS.POSITION_SIGNATURE}
[IT Infrastructure Team]
[Company Name]`
  },
  {
    id: "net-001",
    subject: "Network Switch Failure Report",
    category: "IT",
    body: `Sir / Madam,

Good day!

The switch at [Location] experienced hardware failure.  

Findings:  
- Multiple ports unresponsive.  
- Device reboots did not restore service.  

Recommendation:  
- Replace the switch immediately to prevent downtime.  

Best regards.`
  },

  // 🔹 Software & Applications
  {
    id: "sw-001",
    subject: "Application Installation Request - Approval Needed",
    category: "IT",
    body: `Sir / Madam,

Good day!

We received a request to install [Application Name] for [Employee/Department].  

Purpose: [Business Justification]  

Kindly confirm approval before proceeding.  

Best regards.`
  },
  {
    id: "sw-002",
    subject: "Application Installation Completed",
    category: "IT",
    body: `Sir / Madam,

Good day!

This is to confirm successful installation of [Application Name] on [Device/User].  
Testing confirmed the application is functional.  

Best regards.`
  },

  // 🔹 HR
  {
    id: "hr-001",
    subject: "Interview Invitation",
    category: "HR",
    body: `Dear [Candidate],

We are pleased to invite you for an interview for the [Position] role.  

Date/Time: [Insert Details]  
Location/Platform: [Insert Details]  

We look forward to meeting you.  

Best regards.`
  },
  {
    id: "hr-002",
    subject: "Job Offer",
    category: "HR",
    body: `Dear [Candidate],

Congratulations!

We are excited to extend you an offer for the [Position] role.  
Please review the attached offer letter and respond by [Deadline].  

Best regards.`
  },

  // 🔹 Finance
  {
    id: "fin-001",
    subject: "Invoice Issued",
    category: "Finance",
    body: `Sir / Madam,

Good day!

Please find attached invoice #[ID] for [Services].  
Payment is due by [Date].  

Thank you.
Best regards.`
  },
  {
    id: "fin-002",
    subject: "Payment Reminder",
    category: "Finance",
    body: `Sir / Madam,

Good day!

This is a reminder that payment for invoice #[ID] is due on [Date].  

Best regards.`
  },

  // 🔹 General Admin
  {
    id: "adm-001",
    subject: "Meeting Invitation",
    category: "Admin",
    body: `Dear Team,

You are invited to attend a meeting on [Date/Time].  
Please see attached agenda.  

Best regards.`
  },
  {
    id: "adm-002",
    subject: "Policy Update",
    category: "Admin",
    body: `Dear Team,

This is to notify you of policy updates effective [Date].  
Please review attached details.  

Best regards.`
  },

// 🔹 Password & Account
  {
    id: "acc-001",
    subject: "Password Change Request Approved",
    body: `Sir / Madam,

Good day!

Your request to change the password for account [User] has been approved and completed.  
If you did not initiate this change, please notify IT support immediately.

Best regards.`
  },
  {
    id: "acc-002",
    subject: "Temporary Password Issued",
    body: `Sir / Madam,

Good day!

A temporary password has been issued for your account [User].  
Temporary Password: [Password]

Please log in and update your password at the earliest convenience.  

Best regards.`
  },
  {
    id: "acc-003",
    subject: "Account Lockout Notification",
    body: `Sir / Madam,

Good day!

The account [User] has been locked after multiple failed login attempts.  

Recommendation: Please contact IT support to reset your credentials.

Best regards.`
  },

  // 🔹 Application & Installation
  {
    id: "app-001",
    subject: "Third-Party Software Installation Request",
    body: `Sir / Madam,

Good day!

We have received a request to install third-party application [Software Name] on [PC/User].  

Please review and confirm approval to proceed with installation.  

Thank you and best regards.`
  },
  {
    id: "app-002",
    subject: "Software Installation Denied",
    body: `Sir / Madam,

Good day!

After review, the request to install [Software Name] has been denied due to company policy restrictions.  

For approved alternatives, please consult the IT software catalog.

Best regards.`
  },
  {
    id: "app-003",
    subject: "License Renewal Required",
    body: `Sir / Madam,

Good day!

The license for [Application/Software] is due to expire on [Date].  

Recommendation: Please coordinate with procurement to renew before expiration to avoid disruption.

Best regards.`
  },

  // 🔹 Security & Compliance
  {
    id: "sec-001",
    subject: "Suspicious Activity Detected",
    body: `Sir / Madam,

Good day!

Unusual login activity was detected on your account [User].  

Details:  
- Location: [City, Country]  
- Time: [Date/Time]  

Recommendation: If this was not you, please change your password immediately and contact IT support.  

Best regards.`
  },
  {
    id: "sec-002",
    subject: "Security Patch Deployment Notice",
    body: `Dear Team,

Good day!

A new security patch will be deployed on [Date/Time].  
Please save your work as your device may reboot automatically during the update.  

Thank you for your cooperation.
Best regards.`
  },
  {
    id: "sec-003",
    subject: "Antivirus Scan Report",
    body: `Sir / Madam,

Good day!

The scheduled antivirus scan for [Device] has been completed.  

Findings: No critical threats detected.  
Minor warnings: [List]  

Recommendation: Please keep your antivirus updated and avoid unverified downloads.  

Best regards.`
  },

  // 🔹 Project & Operations
  {
    id: "ops-001",
    subject: "Change Request Approval",
    body: `Sir / Madam,

Good day!

Your change request #[ID] has been reviewed and approved.  

Implementation is scheduled for [Date/Time]. Please prepare accordingly.  

Best regards.`
  },
  {
    id: "ops-002",
    subject: "Project Deployment Completed",
    body: `Dear Team,

Good day!

The deployment for project [Project Name] has been successfully completed.  

All systems are functioning as expected. Please report any issues to IT support.  

Best regards.`
  },
  {
    id: "ops-003",
    subject: "Pending User Access Request",
    body: `Sir / Madam,

Good day!

There is a pending access request for [System/Tool] from [Employee Name].  

Please review and confirm approval to proceed.  

Thank you and best regards.`
  },

  // 🔹 Reminders & Follow-ups
  {
    id: "rem-001",
    subject: "Pending Ticket Reminder",
    body: `Sir / Madam,

Good day!

This is a reminder that your support ticket #[ID] is pending your response.  

Please provide the required details so we can proceed with resolution.  

Best regards.`
  },
  {
    id: "rem-002",
    subject: "Device Check-Up Reminder",
    body: `Dear Team,

Good day!

This is a reminder to submit your assigned device [Device ID] for routine IT check-up scheduled on [Date/Time].  

Thank you for your cooperation.
Best regards.`

  },
  {
    id: "rem-003",
    subject: "System Backup Confirmation",
    body: `Sir / Madam,

Good day!

This is to confirm that your system backup for [Device/User] was completed successfully on [Date].  

Best regards.`
  },
  {
  id: "sup-010",
  subject: "Remote Assistance Session Scheduled",
  category: "Support",
  body: `Sir / Madam,

Good day!

We have scheduled a remote assistance session for your reported issue.  
Date/Time: [Insert]  
Platform: [Zoom/Teams]  

Please ensure your device is connected to the internet during this time.

Best regards.`
},
{
  id: "sup-011",
  subject: "Ticket Closure Notification",
  category: "Support",
  body: `Sir / Madam,

Good day!

We are closing your support ticket #[ID] as resolved.  
If the issue persists, kindly reopen the case.

Best regards.`
},

// 🔹 Password & Accounts
{
  id: "acc-004",
  subject: "Multi-Factor Authentication Enrollment Required",
  category: "Account",
  body: `Sir / Madam,

Good day!

As part of our security enhancement, enrollment in Multi-Factor Authentication (MFA) is required.  
Please complete registration by [Date].  

Instructions are attached.

Best regards.`
},

// 🔹 HR & Staff
{
  id: "hr-010",
  subject: "Probation Evaluation Meeting",
  category: "HR",
  body: `Dear [Employee],

This is a reminder of your probation evaluation scheduled on [Date/Time].  
We will review your performance and provide feedback.  

Best regards.`
},
{
  id: "hr-011",
  subject: "Employee Exit Clearance",
  category: "HR",
  body: `Dear [Employee],

Please be informed that your exit clearance process will begin on [Date].  
Coordinate with HR and IT to surrender your company assets.

Best regards.`
},

// 🔹 Finance
{
  id: "fin-010",
  subject: "Reimbursement Request Denied",
  category: "Finance",
  body: `Sir / Madam,

Good day!

Your reimbursement request #[ID] could not be processed due to missing receipts.  
Kindly resubmit with the required documents.

Best regards.`
},
{
  id: "fin-011",
  subject: "Budget Utilization Report",
  category: "Finance",
  body: `Dear [Manager],

Attached is the monthly budget utilization report for your department.  
Please review and confirm accuracy.

Best regards.`
},

// 🔹 General Operations
{
  id: "ops-010",
  subject: "Disaster Recovery Drill Announcement",
  category: "Operations",
  body: `Dear Team,

A disaster recovery drill will be conducted on [Date/Time].  
All staff are required to participate and follow instructions.

Thank you for your cooperation.`
},
{
  id: "ops-011",
  subject: "Inventory Audit Notice",
  category: "Operations",
  body: `Dear Team,

An inventory audit will take place in [Location] on [Date].  
Please ensure all equipment and devices are accounted for.

Best regards.`
},
// 🔹 Procurement & Asset Management
{
  id: "proc-001",
  subject: "Procurement Request Acknowledgement",
  category: "Procurement",
  body: `Sir / Madam,

Good day!

We have received your procurement request for [Item/Service].  
Our team will review the specifications and provide feedback within [X days].

Best regards.`
},
{
  id: "proc-002",
  subject: "Asset Disposal Approval",
  category: "Procurement",
  body: `Sir / Madam,

Good day!

Your request to dispose of [Asset/Device] has been approved.  
Please coordinate with the IT and Admin departments for proper disposal documentation.

Best regards.`
},
{
  id: "proc-003",
  subject: "Delivery Confirmation",
  category: "Procurement",
  body: `Sir / Madam,

Good day!

This is to confirm that the requested item [Item Name] has been delivered to [Location/Employee].  
Kindly acknowledge receipt.

Best regards.`
},

// 🔹 Training & Knowledge
{
  id: "train-001",
  subject: "Mandatory Training Invitation",
  category: "Training",
  body: `Dear Team,

You are required to attend the mandatory training session on [Topic] scheduled for [Date/Time].  
Please confirm your attendance via the attached form.

Best regards.`
},
{
  id: "train-002",
  subject: "Training Completion Certificate",
  category: "Training",
  body: `Dear [Employee],

Congratulations on successfully completing the [Training Topic] program.  
Please find your certificate attached.

Best regards.`
},

// 🔹 Compliance & Audit
{
  id: "audit-001",
  subject: "Internal Audit Notification",
  category: "Compliance",
  body: `Dear Team,

An internal audit will be conducted on [Date/Time] at [Department/Location].  
Please prepare all necessary records and documentation for review.

Best regards.`
},
{
  id: "audit-002",
  subject: "Policy Compliance Reminder",
  category: "Compliance",
  body: `Sir / Madam,

Good day!

This is a reminder to comply with company policy on [Policy Name].  
Please review the guidelines to avoid non-compliance.

Best regards.`
},

// 🔹 Client Communication
{
  id: "cli-001",
  subject: "Client Onboarding Welcome",
  category: "Client",
  body: `Dear [Client Name],

Welcome to [Company Name].  
We are delighted to begin working with you and look forward to a successful partnership.  

Attached is your onboarding kit with all required details.

Best regards.`
},
{
  id: "cli-002",
  subject: "Service Interruption Notice",
  category: "Client",
  body: `Dear [Client Name],

Please be informed that service [Service Name] will be temporarily unavailable on [Date/Time] due to scheduled maintenance.  
We apologize for any inconvenience and appreciate your understanding.

Best regards.`
},
{
  id: "cli-003",
  subject: "Quarterly Review Invitation",
  category: "Client",
  body: `Dear [Client Name],

We would like to schedule a quarterly business review to discuss performance, feedback, and future improvements.  
Please provide your availability.

Best regards.`
},

// 🔹 Events & Announcements
{
  id: "evt-001",
  subject: "Town Hall Meeting Invitation",
  category: "Events",
  body: `Dear Team,

You are invited to attend the upcoming Town Hall Meeting on [Date/Time].  
Agenda: [List Key Points].

We look forward to your participation.

Best regards.`
},
{
  id: "evt-002",
  subject: "Company Event Announcement",
  category: "Events",
  body: `Dear Team,

We are excited to announce the upcoming [Event Name] scheduled for [Date].  
Further details will follow shortly.

Best regards.`
},

// 🔹 IT Preventive Maintenance
{
  id: "maint-001",
  subject: "Preventive Maintenance Schedule",
  category: "Maintenance",
  body: `Dear Team,

Please be informed that preventive maintenance for [System/Equipment] will take place on [Date/Time].  
Services may be intermittently unavailable during this period.

Thank you for your cooperation.`
},
{
  id: "maint-002",
  subject: "Maintenance Completion Notice",
  category: "Maintenance",
  body: `Dear Team,

The preventive maintenance for [System/Equipment] has been successfully completed.  
All systems are now operational.

Best regards.`
},

// Security: Password Expiry Warning
{
  id: "sec-pw-expiry-001",
  subject: "Password Expiry Reminder – Action Required",
  category: "Security",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}This is a reminder that your account password will expire in [X] days on [Expiry Date]. Please update your password to avoid account lockout.

STEPS TO UPDATE:
1. Go to: [Password Reset URL]
2. Follow the on-screen prompts
3. Confirm password change via email

If you need assistance, contact IT Support.${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// Security: Two-Factor Enrollment
{
  id: "sec-2fa-enroll-001",
  subject: "Action Required: Two-Factor Authentication (2FA) Enrollment",
  category: "Security",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}To improve account security, Two-Factor Authentication (2FA) will be enabled for [User Group] on [Enable Date].

ENROLLMENT STEPS:
• Device: [Phone/Authenticator App]
• Install: [Auth App Link] (if needed)
• Setup guide: [Link to KB]

Support: If you cannot enroll by the date above, please contact IT to request an exemption or assistance.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

// IAM: Privileged Access Approval
{
  id: "iam-priv-approval-001",
  subject: "Privileged Access Request – Approval Needed",
  category: "IAM",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}A request for privileged access has been submitted:

REQUEST SUMMARY:
• Requestor: [Name]
• System/Resource: [Resource]
• Level: [Admin/Root/Superuser]
• Duration: [Temporary/Permanent]
• Justification: [Business Reason]

Approvers: please review and respond by [Date]. If approved, next steps and audit logging will be applied.${EMAIL_CONSTANTS.FULL_SIGNATURE}`
},

// Incident: Root Cause Analysis (RCA) Summary
{
  id: "incident-rca-001",
  subject: "Incident #[ID] — Root Cause Analysis Summary",
  category: "Incident Management",
  body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Attached is the RCA for Incident #[ID] that occurred on [Date/Time].

SUMMARY:
• Incident: [Short Description]
• Root Cause: [Finding]
• Timeline: [Key Events]
• Resolution: [What was done]

ACTIONS & PREVENTION:
1. Immediate Fix: [Action]
2. Short-term Mitigation: [Action]
3. Long-term Prevention: [Action]

Please review and provide any additional input.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

// Change Management: Change Rollback Notification
{
  id: "change-rollback-001",
  subject: "Change Rollback Notice – [Change ID] Executed",
  category: "Change Management",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}The planned change [Change ID] initiated on [Date/Time] has been rolled back due to [Reason].

DETAILS:
• Change: [Description]
• Rollback Time: [Timestamp]
• Impact: [Services/Users Affected]
• Current Status: [Restored/Degraded]

NEXT STEPS:
• Post-mortem scheduled: [Date/Time]
• Remediation plan: [Link/Notes]

Contact [Incident Manager] for immediate questions.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

// Hardware: End-of-Life (EOL) Notification
{
  id: "eol-notice-001",
  subject: "End-of-Life Notice – [Device/Model]",
  category: "Hardware Management",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}This is notice that [Device/Model] has reached End of Life (EOL) as of [Date].

IMPACT:
• Affected Units: [Count/Locations]
• Risk: [Security/Support/Performance]

RECOMMENDATION:
• Replace by: [Target Date]
• Suggested models: [Options]
• Data migration required: [Yes/No]

Please advise if there are business constraints to the replacement schedule.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

// Assets: Asset Transfer Notification
{
  id: "asset-transfer-001",
  subject: "Asset Transfer Notification – [Asset Tag]",
  category: "Asset Management",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Please be advised that asset [Asset Tag / Serial] has been transferred:

FROM:
• Owner/Dept: [Name / Dept]
TO:
• New Owner/Dept: [Name / Dept]
Effective Date: [Date]

ACTION ITEMS:
• Update asset register
• Reassign warranties/licenses
• Verify setup at new location

Confirm when transfer completed.${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// Licensing: License Compliance Audit Request
{
  id: "license-audit-001",
  subject: "License Compliance Audit – Action Required",
  category: "Finance / Compliance",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}We are conducting a software license audit for [Product] across all departments.

REQUEST:
• Confirm installed instances: [By Date]
• User/Device list: [Provide CSV/Link]
• License keys: [If applicable]

Non-responses may result in forced deactivation to maintain compliance.${EMAIL_CONSTANTS.FULL_SIGNATURE}`
},

// Network: VPN Access Revocation
{
  id: "vpn-revoke-001",
  subject: "VPN Access Revocation – [User] (Required Action)",
  category: "Network",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}VPN access for [User] will be revoked on [Date] due to [Reason: role change/termination/inactivity].

IMPACT:
• Access to: [Systems]
• Effective: [Date/Time]

If access must be retained for business reasons, request an exception by replying with justification.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

// Onboarding: IT Onboarding Checklist (for new hires)
{
  id: "it-onboard-checklist-001",
  subject: "IT Onboarding Checklist – [New Hire Name]",
  category: "HR / IT Onboarding",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Welcome aboard! Below are the IT onboarding items completed / pending for [New Hire]:

COMPLETED:
• Account created: [Username]
• Laptop assigned: [Asset Tag]
• Email configured: [Yes/No]

PENDING:
• Access to [Systems]
• MFA enrollment
• Required trainings: [List]

Please confirm completion or notify IT of outstanding items.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

// Software: Decommission Notice
{
  id: "software-decomm-001",
  subject: "Software Decommission Notice – [Application Name]",
  category: "Software",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}We plan to decommission [Application Name] on [Decomm Date].

REASON:
• [Rationale]

IMPACT:
• Users affected: [Groups]
• Data migration plan: [Details]
• Read-only access until: [Date]

Please migrate required data and report blockers by [Cutoff Date].${EMAIL_CONSTANTS.FULL_SIGNATURE}`
},

{
   id: "charger-findings",
  subject: "Defective Charger Assessment [DATE]]",
  category: "IT",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}

Good day,
Sending to you the Laptop Charger Finding of Ms. fname Lname, please see below details.
User: fname lastname
Model: lenovo x999
PC Name: PC1234567
Model: 123123123
LC PN: 123123
FRU: 123123

Findings:
Upon inspection, the charger is either not functioning or has a loose connection. It is currently not usable and may pose a safety risk due to unstable power delivery.


Recommendation: For Replacement. Kindly arrange for a replacement at your earliest convenience. Please coordinate with the procurement.
  
Regards`
},

 // Add these to your customTemplates array:

// 🛍️ Retail Operations
{
  id: "retail-inventory-001",
  subject: "Inventory Stock Alert - [Product Name]",
  category: "Retail Operations",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Inventory alert for [Product Name]:

Current Stock: [Number]
Minimum Threshold: [Number]
Reorder Point: [Number]

Urgency: [High/Medium/Low]
Recommended Action: [Restock/Adjust Order]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

{
  id: "retail-sales-001",
  subject: "Daily Sales Report - [Date]",
  category: "Retail Operations",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Sales summary for [Date]:

Total Revenue: [Amount]
Transactions: [Number]
Average Sale: [Amount]
Top Products: [List]

Goals: [Met/Not Met]
Notes: [Key Observations]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// 🏗️ Construction Projects
{
  id: "construction-safety-001",
  subject: "Safety Inspection Report - [Site Name]",
  category: "Construction Projects",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Safety inspection completed:

Site: [Location]
Date: [Date]
Inspector: [Name]

Findings: [Number] Issues
Critical Items: [List]
Compliance: [Status]

Actions Required: [List]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

{
  id: "construction-progress-001",
  subject: "Project Progress Update - [Project Name]",
  category: "Construction Projects",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Progress update for [Project Name]:

Status: [Percentage] Complete
This Week: [Accomplishments]
Next Week: [Planned Work]
Blockers: [Issues if any]

On Schedule: [Yes/No]
Budget Status: [On Track/Over]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// 📚 Education Sector
{
  id: "education-course-001",
  subject: "Course Enrollment Update - [Course Name]",
  category: "Education Sector",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Enrollment update:

Course: [Name]
Current Enrollment: [Number]
Capacity: [Number]
Waitlist: [Number]

Status: [Open/Closed]
Action Needed: [If any]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

{
  id: "education-faculty-001",
  subject: "Faculty Meeting Agenda - [Date]",
  category: "Education Sector",
  body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Faculty meeting agenda:

Date: [Date]
Time: [Time]
Location: [Room/Virtual]

Agenda:
1. [Topic 1]
2. [Topic 2]
3. [Topic 3]

Preparation: [Materials Needed]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// 🤖 Technology Innovation
{
  id: "tech-innovation-001",
  subject: "Innovation Proposal - [Idea Name]",
  category: "Technology Innovation",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}New innovation proposal:

Idea: [Brief Description]
Problem Solved: [Explanation]
Potential Impact: [Benefits]
Resources Needed: [List]

Next Steps: [Review/Testing]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

{
  id: "tech-feature-001",
  subject: "Feature Request - [Product Name]",
  category: "Technology Innovation",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Feature request received:

Requested By: [Name/Dept]
Feature: [Description]
Use Case: [Scenario]
Priority: [High/Medium/Low]

Status: [Under Review/Approved]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// 🌐 Global Operations
{
  id: "global-coordination-001",
  subject: "International Team Sync - [Project]",
  category: "Global Operations",
  body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Global team sync:

Project: [Name]
Time: [Time with Timezones]
Agenda: [Key Topics]
Participants: [Regions/Teams]

Preparation: [Documents to Review]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

{
  id: "global-compliance-001",
  subject: "Regional Compliance Update - [Region]",
  category: "Global Operations",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Compliance update for [Region]:

Regulation: [Name/Type]
Effective Date: [Date]
Changes: [Summary]
Impact: [Areas Affected]

Action Required: [Yes/No]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

// 🔬 Quality Assurance
{
  id: "qa-testing-001",
  subject: "QA Test Results - [Product/Version]",
  category: "Quality Assurance",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}QA testing completed:

Product: [Name]
Version: [Number]
Tests Run: [Number]
Pass Rate: [Percentage]

Critical Issues: [Number]
Status: [Ready/Needs Fixes]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// 📊 Performance Management
{
  id: "performance-review-001",
  subject: "Performance Review - [Employee Name]",
  category: "HR & Personnel",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Performance review scheduled:

Employee: [Name]
Date: [Date]
Time: [Time]
Duration: [Length]

Preparation: [Documents Needed]
Focus Areas: [Topics to Discuss]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// 🔧 IT Operations
{
  id: "it-documentation-001",
  subject: "Documentation Update Required - [System]",
  category: "IT Operations",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Documentation update needed:

System: [Name]
Changes: [What's New]
Deadline: [Date]
Owner: [Responsible Person]

Impact: [Users/Affected]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// 💼 Business Development
{
  id: "bizdev-partnership-001",
  subject: "Partnership Opportunity - [Company]",
  category: "Business Development",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}New partnership opportunity:

Company: [Name]
Opportunity: [Description]
Potential Value: [Estimate]
Next Steps: [Actions]

Timeline: [Proposed Dates]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

// 🚚 Logistics & Shipping
{
  id: "logistics-shipment-001",
  subject: "Shipment Delay Notice - [Tracking #]",
  category: "Logistics",
  body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Shipment delay alert:

Tracking: [Number]
Expected: [New Date]
Reason: [Delay Cause]
Impact: [Business Effect]

Alternative: [Options if any]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// 🎯 Sales Operations
{
  id: "sales-pipeline-001",
  subject: "Pipeline Review - [Quarter]",
  category: "Sales",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Pipeline review:

Quarter: [QX Year]
Total Value: [Amount]
Deals: [Number]
Conversion Rate: [Percentage]

Focus Areas: [Priorities]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
},

// 🔄 Process Improvement
{
  id: "process-improvement-001",
  subject: "Process Optimization Suggestion",
  category: "Operations",
  body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Process improvement idea:

Current Process: [Brief Description]
Suggested Change: [Improvement]
Expected Benefit: [Efficiency/Savings]
Implementation: [Effort Required]

Impact: [Positive Effects]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
},

   // 🏗️ Architecture & Design
  {
    id: "dev-arch-001",
    subject: "Technical Design Document Review - [Feature/System]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Please review the technical design document for [Feature/System]:

DOCUMENT OVERVIEW:
• Purpose: [Brief Description]
• Scope: [Components/Modules]
• Author: [Name]
• Review Deadline: [Date]

KEY SECTIONS:
1. Architecture Diagram
2. Database Schema
3. API Specifications
4. Security Considerations
5. Performance Implications

REVIEW FOCUS:
• Scalability: [Concerns/Suggestions]
• Maintainability: [Code Quality Standards]
• Integration: [External Systems]
• Testing Strategy: [Coverage Requirements]

Please provide feedback via: [PR/Comment Tool]
Review completed by: [Date]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🔄 Code Review
  {
    id: "dev-code-review-001",
    subject: "Code Review Request - PR #[Number] - [Feature]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Code review requested for PR #[Number]:

PR DETAILS:
• Title: [PR Title]
• Branch: [Branch Name]
• Author: [Name]
• Target: [Base Branch]

CHANGES:
• Files Modified: [Number]
• Lines Added/Removed: [+X/-Y]
• Related Issues: [JIRA/Ticket Links]

SPECIFIC REVIEW REQUESTS:
1. [Architecture Concerns]
2. [Performance Impact]
3. [Security Considerations]
4. [Test Coverage]

TESTING:
• Unit Tests: [Added/Updated]
• Integration Tests: [Status]
• Manual Testing: [Scenarios Covered]

URGENCY: [High/Medium/Low]
Merge Deadline: [If Applicable]

Review URL: [PR Link]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 🐛 Bug Reports & Issues
  {
    id: "dev-bug-001",
    subject: "Bug Report - [Component] - [Short Description]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}New bug identified:

BUG SUMMARY:
• Component: [Frontend/Backend/API]
• Severity: [Critical/High/Medium/Low]
• Environment: [Production/Staging/Dev]
• Reproduction Rate: [Always/Intermittent]

STEPS TO REPRODUCE:
1. [Step 1]
2. [Step 2]
3. [Step 3]

EXPECTED BEHAVIOR:
[What should happen]

ACTUAL BEHAVIOR:
[What actually happens]

ENVIRONMENT:
• Browser/OS: [Details]
• Version: [App Version]
• User: [If Specific]

LOGS/SCREENSHOTS:
[Attachments/References]

ASSIGNED TO: [Team/Individual]
PRIORITY: [Immediate/Next Sprint/Backlog]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 📦 Deployment & Releases
  {
    id: "dev-deploy-001",
    subject: "Deployment Plan - Version [X.X.X] - [Environment]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Deployment plan for version [X.X.X]:

DEPLOYMENT DETAILS:
• Version: [X.X.X]
• Environment: [Production/Staging]
• Scheduled: [Date/Time]
• Estimated Duration: [Time]
• Rollback Strategy: [Procedure]

CHANGES INCLUDED:
1. [Feature/Bugfix 1]
2. [Feature/Bugfix 2]
3. [Feature/Bugfix 3]

PRE-DEPLOYMENT CHECKS:
• [ ] Database Migrations
• [ ] Configuration Updates
• [ ] Cache Clearance
• [ ] Backup Completion

DEPLOYMENT STEPS:
1. [Step 1 - Time]
2. [Step 2 - Time]
3. [Step 3 - Time]

POST-DEPLOYMENT VERIFICATION:
• [ ] Smoke Tests
• [ ] Monitoring Alerts
• [ ] User Feedback

ROLLBACK TRIGGERS:
• [Critical Error Count]
• [Performance Degradation]
• [User Complaints]

Contact: [On-call Engineer]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🔐 Security & Vulnerabilities
  {
    id: "dev-security-001",
    subject: "Security Vulnerability Alert - [Component] - [CVE/Severity]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Security vulnerability detected:

VULNERABILITY DETAILS:
• Component: [Library/Service]
• CVE: [CVE Identifier]
• Severity: [Critical/High/Medium/Low]
• CVSS Score: [X.X/10]

IMPACT ASSESSMENT:
• Attack Vector: [Network/Adjacent/Local]
• Attack Complexity: [High/Low]
• Privileges Required: [None/User/Admin]
• User Interaction: [Required/Not Required]

AFFECTED SYSTEMS:
• [Service/Application 1]
• [Service/Application 2]
• [Service/Application 3]

IMMEDIATE ACTIONS:
1. [Containment Step]
2. [Mitigation Step]
3. [Communication Step]

PATCH AVAILABILITY:
• Vendor Patch: [Available/Not Available]
• Workaround: [If Available]
• Timeline: [ETA for Fix]

ASSIGNED TO: [Security Team/Developer]
DUE DATE: [Remediation Deadline]${EMAIL_CONSTANTS.EMERGENCY_SIGNATURE}`
  },

  // 📊 Performance & Monitoring
  {
    id: "dev-performance-001",
    subject: "Performance Regression Report - [Service/Metric]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Performance regression detected:

PERFORMANCE DATA:
• Metric: [Response Time/Throughput/Error Rate]
• Service: [Service Name]
• Baseline: [Previous Value]
• Current: [Current Value]
• Degradation: [X%]

IMPACT ANALYSIS:
• User Experience: [High/Medium/Low]
• Business Impact: [Revenue/Customer Satisfaction]
• Scope: [All Users/Specific Segment]

ROOT CAUSE SUSPECTS:
1. [Recent Deployment]
2. [Infrastructure Change]
3. [Traffic Pattern Change]
4. [Third-party Service]

INVESTIGATION PLAN:
• [ ] Log Analysis
• [ ] Profiling
• [ ] Load Testing
• [ ] Code Review

URGENCY: [Immediate/This Sprint/Next Sprint]
ASSIGNED TO: [Performance Team]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🧪 Testing & QA
  {
    id: "dev-testing-001",
    subject: "Test Plan Review - [Feature/Release]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Test plan ready for review:

TEST PLAN OVERVIEW:
• Feature: [Feature Name]
• Release: [Version]
• Test Lead: [Name]
• Timeline: [Start-End Dates]

TEST COVERAGE:
• Unit Tests: [Number/Coverage %]
• Integration Tests: [Number/Scenarios]
• E2E Tests: [Number/User Journeys]
• Manual Tests: [Test Cases]

ENVIRONMENTS:
• Development: [Ready/Not Ready]
• Staging: [Ready/Not Ready]
• Production-like: [Available/Not Available]

SPECIFIC TEST SCENARIOS:
1. [Happy Path]
2. [Edge Cases]
3. [Error Conditions]
4. [Performance/Load]

RESOURCE REQUIREMENTS:
• Test Data: [Requirements]
• Environment Setup: [Needs]
• Tools: [Software/Hardware]

Review deadline: [Date]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 🔄 API Development
  {
    id: "dev-api-001",
    subject: "API Change Notification - [API Name] - [Version]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}API changes upcoming:

API DETAILS:
• Name: [API Name]
• Version: [Current → New]
• Change Type: [Breaking/Non-breaking]
• Release Date: [Date]

CHANGES SUMMARY:
• Added: [Endpoints/Fields]
• Modified: [Endpoints/Fields]
• Deprecated: [Endpoints/Fields]
• Removed: [Endpoints/Fields]

MIGRATION GUIDE:
• Before: [Old Implementation]
• After: [New Implementation]
• Breaking Changes: [Specific Details]

TESTING:
• Documentation: [URL]
• Sandbox: [Environment Details]
• Support: [Contact Information]

IMPACTED CLIENTS:
• [Internal Service 1]
• [External Client 1]
• [Mobile App]

ACTION REQUIRED: [By Date]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 📚 Documentation
  {
    id: "dev-docs-001",
    subject: "Documentation Update Required - [System/Feature]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Documentation update needed:

DOCUMENTATION GAP:
• System: [System Name]
• Feature: [Feature Description]
• Missing: [API Docs/User Guide/Architecture]

REASON FOR UPDATE:
• [New Feature]
• [Changed Behavior]
• [Bug Fix]
• [Process Change]

REQUIRED SECTIONS:
1. [Overview]
2. [Usage Examples]
3. [Configuration]
4. [Troubleshooting]

DEADLINE: [Date]
ASSIGNED TO: [Technical Writer/Developer]

RESOURCES:
• Source Code: [Repository Link]
• Existing Docs: [Documentation Link]
• Subject Expert: [Contact Person]

Please update by: [Date]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 🛠️ DevOps & Infrastructure
  {
    id: "dev-ops-001",
    subject: "Infrastructure Change Request - [Environment]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Infrastructure change requested:

CHANGE DETAILS:
• Environment: [Production/Staging/Dev]
• Resource: [Server/Database/Network]
• Change Type: [Scale/Modify/Add/Remove]
• Requestor: [Name/Team]

SPECIFICATIONS:
• Current: [Existing Configuration]
• Requested: [New Configuration]
• Justification: [Business/Technical Reason]

IMPACT ASSESSMENT:
• Downtime: [Yes/No/Duration]
• Risk: [High/Medium/Low]
• Rollback: [Possible/Not Possible]

APPROVALS REQUIRED:
• [ ] Infrastructure Lead
• [ ] Security Team
• [ ] Cost Management

TIMELINE:
• Requested Date: [Date]
• Maintenance Window: [If Applicable]

Change ticket: [Ticket Link]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🔍 Incident Post-Mortem
  {
    id: "dev-incident-001",
    subject: "Incident Post-Mortem - [Service] - [Date]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Post-mortem for incident on [Date]:

INCIDENT SUMMARY:
• Service: [Service Name]
• Start Time: [Timestamp]
• End Time: [Timestamp]
• Duration: [X hours/minutes]
• Impact: [Users/Affected]

TIMELINE:
• Detection: [How/When]
• Response: [Actions Taken]
• Resolution: [Fix Applied]
• Recovery: [Service Restored]

ROOT CAUSE:
• Primary: [Main Cause]
• Contributing: [Secondary Factors]

LESSONS LEARNED:
• What Went Well: [Positive Aspects]
• What Could Improve: [Improvement Areas]

ACTION ITEMS:
1. [Preventive Measure - Owner - Due Date]
2. [Detection Improvement - Owner - Due Date]
3. [Process Change - Owner - Due Date]

Follow-up meeting: [Date/Time]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 📈 Technical Debt
  {
    id: "dev-debt-001",
    subject: "Technical Debt Assessment - [System/Component]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Technical debt assessment:

SYSTEM OVERVIEW:
• Component: [System/Module]
• Age: [Time in Production]
• Criticality: [High/Medium/Low]

DEBT CATEGORIES:
1. Code Quality
   • Issues: [Number/Severity]
   • Impact: [Maintainability]

2. Architecture
   • Issues: [Coupling/Complexity]
   • Impact: [Scalability]

3. Dependencies
   • Outdated: [Libraries/Packages]
   • Security: [Vulnerabilities]

4. Documentation
   • Gaps: [Areas Missing]
   • Accuracy: [Current/Outdated]

RECOMMENDATIONS:
• Immediate: [Critical Items]
• Short-term: [Next Quarter]
• Long-term: [Roadmap]

EFFORT ESTIMATE: [Story Points/Hours]
BUSINESS IMPACT: [Justification]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🚀 Feature Launch
  {
    id: "dev-launch-001",
    subject: "Feature Launch Checklist - [Feature Name]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Feature launch checklist:

FEATURE DETAILS:
• Name: [Feature Name]
• Release: [Version]
• Launch Date: [Date]
• Owner: [Product Manager]

PRE-LAUNCH CHECKS:
• [ ] Code Review Completed
• [ ] Tests Passed
• [ ] Performance Validated
• [ ] Security Review
• [ ] UX Review
• [ ] Documentation Updated

LAUNCH PLAN:
• Time: [Launch Time]
• Method: [Blue-Green/Canary]
• Monitoring: [Dashboards/Alerts]
• Rollback: [Procedure]

COMMUNICATION:
• [ ] Internal Teams Notified
• [ ] Support Team Briefed
• [ ] Release Notes Published
• [ ] Customer Communication Ready

POST-LAUNCH:
• [ ] Monitoring Active
• [ ] Support Ready
• [ ] Feedback Collection
• [ ] Success Metrics Tracking

Launch coordinator: [Name]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🔄 Sprint Planning
  {
    id: "dev-sprint-001",
    subject: "Sprint [Number] Planning - [Start Date] to [End Date]",
    category: "Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Sprint [Number] planning details:

SPRINT GOALS:
1. [Primary Objective]
2. [Secondary Objective]
3. [Stretch Goals]

CAPACITY:
• Team Members: [List]
• Total Capacity: [Story Points/Hours]
• Time Off: [Absences]

BACKLOG ITEMS:
1. [User Story 1] - [Points] - [Assignee]
2. [User Story 2] - [Points] - [Assignee]
3. [User Story 3] - [Points] - [Assignee]

TECHNICAL TASKS:
• [Refactoring/Infrastructure]
• [Bug Fixes]
• [Debt Reduction]

DEPENDENCIES:
• [Blockers/Risks]
• [External Teams]
• [Infrastructure]

MEETINGS:
• Daily Standup: [Time]
• Review: [Date/Time]
• Retrospective: [Date/Time]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 📱 Mobile Development
  {
    id: "mobile-release-001",
    subject: "Mobile App Release - [Platform] - Version [X.X.X]",
    category: "Mobile Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}Mobile app release ready:

PLATFORM: [iOS/Android/Both]
VERSION: [X.X.X]
BUILD: [Build Number]
RELEASE DATE: [Date]

APP STORE REQUIREMENTS:
• [ ] Screenshots Updated
• [ ] Description Finalized
• [ ] Keywords Optimized
• [ ] Release Notes Ready
• [ ] Compliance Verified

TESTING COMPLETED:
• [ ] Device Compatibility
• [ ] Feature Functionality
• [ ] Performance Metrics
• [ ] Battery Impact
• [ ] Network Conditions

APPROVALS:
• [ ] Product Manager
• [ ] Legal/Compliance
• [ ] Marketing

Release coordinator: [Name]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🌐 Frontend Development
  {
    id: "frontend-ux-001",
    subject: "UX/UI Review Required - [Component/Page]",
    category: "Frontend Development",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}UX/UI review requested:

COMPONENT: [Name/Description]
URL: [Preview Link]
DESIGN REFERENCE: [Figma/Zeplin Link]

REVIEW FOCUS:
• Visual Design: [Alignment with Guidelines]
• User Experience: [Flow/Interactions]
• Accessibility: [WCAG Compliance]
• Responsiveness: [Breakpoints]

SPECIFIC QUESTIONS:
1. [Design Question 1]
2. [Design Question 2]
3. [Design Question 3]

DEADLINE: [Date]
DESIGNER: [Assigned Designer]${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 🗄️ Database Development
  {
    id: "db-migration-001",
    subject: "Database Migration Plan - [Change Description]",
    category: "Database Development",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Database migration scheduled:

MIGRATION DETAILS:
• Change: [Schema/Data/Migration]
• Database: [Name/Environment]
• Scheduled: [Date/Time]
• Estimated Duration: [Time]

CHANGES:
• Tables Modified: [List]
• Columns Added/Modified: [Details]
• Indexes Created/Dropped: [Details]
• Data Migration: [If Applicable]

ROLLBACK PLAN:
• Backup: [Strategy]
• Recovery: [Time Estimate]
• Verification: [Process]

IMPACT:
• Downtime: [Yes/No/Duration]
• Performance: [Expected Impact]
• Applications: [Affected Services]

APPROVALS:
• [ ] DBA
• [ ] Application Teams
• [ ] Infrastructure${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🤖 AI/ML Development
  {
    id: "ml-model-001",
    subject: "ML Model Deployment - [Model Name] - Version [X.X]",
    category: "AI/ML Development",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}ML model deployment ready:

MODEL DETAILS:
• Name: [Model Name]
• Version: [X.X]
• Type: [Classification/Regression/etc.]
• Training Data: [Dataset/Size]

PERFORMANCE METRICS:
• Accuracy: [X%]
• Precision: [X%]
• Recall: [X%]
• F1 Score: [X%]

DEPLOYMENT:
• Environment: [Production/Staging]
• Infrastructure: [Requirements]
• Monitoring: [Metrics/Dashboards]

VALIDATION:
• [ ] A/B Testing Setup
• [ ] Performance Baseline
• [ ] Bias/Fairness Check
• [ ] Explainability Reports

ROLLBACK: [Model Version]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // ⚖️ Legal & Contracts
  {
    id: "legal-nda-001",
    subject: "Non-Disclosure Agreement (NDA) Request - [Partner/Entity]",
    category: "Legal",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please review and sign the attached Non-Disclosure Agreement regarding [Project/Topic]:

AGREEMENT DETAILS:
• Counterparty: [Company/Name]
• Purpose: [Discussion Context]
• Term: [Duration]
• Jurisdiction: [Region]

ACTION REQUIRED:
1. Review the attached PDF.
2. Sign via [DocuSign/Adobe Sign Link].
3. Return by [Date].

If you have legal concerns, please contact the Legal Department before signing.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "legal-hold-001",
    subject: "URGENT: Legal Hold Notice - Preservation of Documents",
    category: "Legal",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}PRIVILEGED AND CONFIDENTIAL

You are hereby notified of a Legal Hold regarding [Case/Matter Name].

OBLIGATIONS:
Effective immediately, you must preserve all documents, data, and communications (emails, chats, files, notes) related to:
• [Subject 1]
• [Subject 2]
• Timeframe: [Start Date] to Present

DO NOT:
• Delete, modify, or overwrite relevant files.
• Discard physical documents.
• Auto-archive emails (disable auto-delete).

This hold remains in effect until you receive an official "Release Notice."

Please reply "Received and Understood" to this email.${EMAIL_CONSTANTS.FULL_SIGNATURE}`
  },

  // ✈️ Travel & Expenses
  {
    id: "travel-req-001",
    subject: "Travel Authorization Request - [Employee Name]",
    category: "Travel",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}I am requesting approval for the following business travel:

TRIP DETAILS:
• Purpose: [Conference/Client Meeting/Training]
• Destination: [City, Country]
• Dates: [Start Date] - [End Date]

ESTIMATED BUDGET:
• Transport (Air/Train): [Amount]
• Accommodation: [Amount]
• Per Diem/Meals: [Amount]
• Incidentals: [Amount]
• Total Request: [Total Amount]

BUSINESS JUSTIFICATION:
[Explanation of ROI or necessity of trip]

Client Chargeable: [Yes/No]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "travel-itinerary-001",
    subject: "Travel Itinerary & Confirmation - [Destination]",
    category: "Travel",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Here is your confirmed travel itinerary for [Destination]:

FLIGHTS:
• Outbound: [Airline] [Flight #] | Dep: [Time] | Arr: [Time]
• Return: [Airline] [Flight #] | Dep: [Time] | Arr: [Time]
• Reference: [PNR Code]

ACCOMMODATION:
• Hotel: [Name]
• Address: [Address]
• Check-in: [Date] | Check-out: [Date]
• Confirmation: [Number]

GROUND TRANSPORT:
• Pickup: [Details]
• Car Rental: [Agency/Ref #]

Emergency Travel Support: [Phone Number]
Insurance Policy: [Link/Number]

Safe travels!${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}`
  },

  // 🏢 Office Administration
  {
    id: "admin-visitor-001",
    subject: "Visitor Notification - [Guest Name] - [Date]",
    category: "Administration",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Please be advised of an external visitor:

VISITOR DETAILS:
• Name: [Guest Name]
• Company: [Company]
• Arrival Time: [Time]
• Host: [Employee Name]

ACCESS REQUIRED:
• Parking Spot: [Yes/No]
• WiFi Access: [Yes/No]
• Security Badge: [Visitor Pass Type]
• Conference Room: [Room Name]

Please ensure the reception desk is aware.${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  {
    id: "admin-supplies-001",
    subject: "Office Supply Order Request",
    category: "Administration",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Requesting the following office supplies for [Department]:

ITEMS:
1. [Item Name] - [Quantity] - [SKU if known]
2. [Item Name] - [Quantity] - [SKU if known]
3. [Item Name] - [Quantity] - [SKU if known]

Delivery Needed By: [Date]
Budget Code: [Code]

Regards,
[Name]`
  },

  // 💼 Sales (External)
  {
    id: "sales-intro-001",
    subject: "Introduction: [Company Name] <> [Prospect Company]",
    category: "Sales",
    body: `Dear [Prospect Name],

I hope this email finds you well.

I am writing to introduce [Company Name] and explore how we might support [Prospect Company] with [Specific Pain Point/Goal]. We specialize in [Core Competency] and have recently helped companies like [Reference 1] and [Reference 2] achieve [Result].

Would you be open to a brief 15-minute call on [Day] or [Day] to discuss your current priorities regarding [Topic]?

Best regards,
[Name]
[Title]
[Link to Calendar]`
  },

  {
    id: "sales-proposal-001",
    subject: "Proposal: [Project Name] for [Client Name]",
    category: "Sales",
    body: `Dear [Client Name],

Thank you for the opportunity to discuss your needs regarding [Project]. Based on our conversation, we have prepared the attached proposal.

HIGHLIGHTS:
• Scope: [Brief Summary]
• Timeline: [Estimated Duration]
• Investment: [Total Cost]

We are confident that this solution will help you achieve [Client Goal].

I will follow up on [Date] to answer any questions.

Best regards,
[Name]
[Title]`
  },

  // 👥 Internships & Mentorship
  {
    id: "intern-welcome-001",
    subject: "Welcome to the Internship Program - [Intern Name]",
    category: "HR/Internship",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Welcome to the team! We are excited to have you join our internship program.

PROGRAM DETAILS:
• Mentor: [Mentor Name]
• Supervisor: [Manager Name]
• Duration: [Start Date] - [End Date]

FIRST WEEK AGENDA:
• Orientation: [Date/Time]
• Team Lunch: [Date/Time]
• Project Briefing: [Date/Time]

Please review the attached "Internship Handbook" prior to your start date.

Best regards,
HR Team`
  },

  {
    id: "mentorship-request-001",
    subject: "Mentorship Program - Pairing Request",
    category: "HR/Mentorship",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}I would like to request a mentor through the company mentorship program.

GOALS:
1. [Skill to Develop]
2. [Career Path Interest]
3. [Networking Goal]

PREFERENCES:
• Department: [Preferred Dept/Cross-functional]
• Frequency: [Weekly/Monthly]

I have attached my current resume and development plan for reference.

Best regards,
[Name]`
  },

  // 🛡️ Cybersecurity Awareness
  {
    id: "sec-phishing-alert-001",
    subject: "Security Alert: Suspicious Email Campaigns Reported",
    category: "Security Awareness",
    body: `${EMAIL_CONSTANTS.ALL_STAFF_SALUTATION}We have received reports of a phishing campaign targeting our employees.

INDICATORS OF COMPROMISE:
• Subject Lines: [Example 1], [Example 2]
• Sender: External addresses mimicking [Executive Names]
• Content: Urgent requests for gift cards, wire transfers, or password resets.

ACTION REQUIRED:
1. Do NOT click links or download attachments from unknown sources.
2. Verify the sender's email address carefully.
3. Report suspicious emails using the "Report Phishing" button in your email client.

Stay vigilant.${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}`
  },

  // 🚀 Executive Strategy
  {
    id: "exec-q-goals-001",
    subject: "Q[X] Strategic Goals & Priorities",
    category: "Executive",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}As we kick off Q[X], I want to align the team on our core strategic priorities.

THEME: [Quarterly Theme]

TOP 3 OBJECTIVES (OKRs):
1. [Objective 1]
   • Key Result: [Metric]
   
2. [Objective 2]
   • Key Result: [Metric]

3. [Objective 3]
   • Key Result: [Metric]

Let's stay focused and execute with excellence. Department leads will cascade specific team targets this week.

${EMAIL_CONSTANTS.FULL_SIGNATURE}`
  },

  // 👥 HR: Recruitment & Culture
  {
    id: "hr-rejection-001",
    subject: "Update on your application for [Position]",
    category: "HR Recruitment",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Thank you for giving us the opportunity to consider you for the [Position] role.

We have reviewed your qualifications and, after careful consideration, have decided to proceed with other candidates whose experience more closely aligns with our current needs.

We will keep your resume on file for future openings. We wish you the best in your job search.

${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}`
  },

  {
    id: "hr-offer-acceptance-001",
    subject: "Acknowledgment of Offer Acceptance - [Candidate Name]",
    category: "HR Recruitment",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}We are thrilled to receive your signed offer letter!

CONFIRMATION DETAILS:
• Start Date: [Date]
• Reporting Time: [Time]
• Location: [Office Address / Remote Link]

NEXT STEPS:
Our onboarding team will send a separate email regarding:
1. Laptop and equipment shipment
2. IT account setup credentials
3. First-week schedule

We look forward to having you on the team.${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}`
  },

  {
    id: "hr-recognition-001",
    subject: "Kudos: Recognition for [Achievement/Project]",
    category: "HR Culture",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}I want to take a moment to recognize [Employee Name] for their outstanding work on [Project/Task].

CONTRIBUTION:
[Details of what they did]

IMPACT:
• [Benefit 1]
• [Benefit 2]

Thank you for your dedication and hard work!${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "hr-wellness-001",
    subject: "Employee Wellness Check-in",
    category: "HR Culture",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Just a quick check-in to see how you are managing your workload and work-life balance.

Please let me know if:
• You are facing any blockers.
• You need adjustments to your schedule.
• You need support with current deadlines.

We want to ensure you feel supported. Let's discuss during our next 1:1.${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 📈 Executive & Investor Relations
  {
    id: "exec-investor-update-001",
    subject: "Monthly Investor Update - [Month, Year]",
    category: "Executive",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Here is the executive summary for [Month]:

KEY METRICS:
• MRR/ARR: [Amount] (+/- [X]%)
• Burn Rate: [Amount]
• Cash in Bank: [Amount] (Runway: [Months])

HIGHLIGHTS:
• [Major Win 1]
• [Major Win 2]

LOWLIGHTS/CHALLENGES:
• [Challenge 1]
• [Challenge 2]

THE ASK:
We are looking for introductions to [Target Company/Industry].

Detailed deck attached.${EMAIL_CONSTANTS.FULL_SIGNATURE}`
  },

  {
    id: "exec-board-prep-001",
    subject: "Board Meeting Preparation - Materials Due",
    category: "Executive",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}The upcoming Board Meeting is scheduled for [Date].

REQUIREMENTS:
Please update your respective slides in the master deck by [Date/Time].

SECTIONS:
• Finance: [CFO Name]
• Sales: [VP Sales Name]
• Product: [CPO Name]
• HR: [CHRO Name]

Review session will be held on [Date].${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 🏢 Facilities & Administration
  {
    id: "admin-office-closure-001",
    subject: "Office Closure Notice - [Holiday/Event]",
    category: "Administration",
    body: `${EMAIL_CONSTANTS.ALL_STAFF_SALUTATION}Please be advised that the office will be closed for [Holiday/Reason].

CLOSURE DETAILS:
• Start: [Date] at [Time]
• Reopen: [Date] at [Time]

OPERATIONS:
• Physical Office: Locked/No Access
• Support Team: [On-Call/Unavailable]
• Systems: Fully Operational

Emergency Contact: [Name/Number]${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}`
  },

  {
    id: "admin-lost-found-001",
    subject: "Lost & Found: [Item Description]",
    category: "Administration",
    body: `${EMAIL_CONSTANTS.ALL_STAFF_SALUTATION}An item has been found in [Location e.g., 3rd Floor Pantry].

ITEM DETAILS:
• Type: [Description]
• Color/Brand: [Details]
• Found Date: [Date]

If this belongs to you, please claim it at the Reception Desk by [Date], otherwise it will be disposed of.${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}`
  },

  // 🚚 Logistics & Supply Chain (Detailed)
  {
    id: "logistics-customs-001",
    subject: "URGENT: Customs Clearance Documents Required - Shipment [ID]",
    category: "Logistics",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}Shipment [ID] is currently held at customs in [Port/Airport].

MISSING DOCUMENTATION:
• [ ] Commercial Invoice
• [ ] Packing List
• [ ] Certificate of Origin
• [ ] Import License

DEADLINE:
Docs must be submitted by [Date/Time] to avoid storage fees and demurrage.

Please reply with attached files immediately.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "logistics-receiving-discrepancy-001",
    subject: "Receiving Discrepancy Report - PO #[Number]",
    category: "Logistics",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}We have received shipment for PO #[Number] from [Vendor].

DISCREPANCY FOUND:
• Item: [SKU/Name]
• Ordered Qty: [Number]
• Received Qty: [Number]
• Condition: [Good/Damaged]

Evidence (Photos/BOL) attached. Please advise on credit memo or replacement.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 🔐 Physical Security & Safety
  {
    id: "phys-sec-access-001",
    subject: "Physical Access Badge Request",
    category: "Security",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Requesting building access badge for:

USER DETAILS:
• Name: [Name]
• Employee ID: [ID]
• Type: [New Issue/Replacement/Temporary]

ZONES REQUIRED:
• [ ] General Office
• [ ] Server Room (Approval attached)
• [ ] Warehouse
• [ ] Lab

Access Start Date: [Date]${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  {
    id: "sec-incident-theft-001",
    subject: "Security Incident Report: Theft/Loss of Property",
    category: "Security",
    body: `${EMAIL_CONSTANTS.DEPARTMENT_SALUTATION}Reporting a theft or loss of company property.

INCIDENT DETAILS:
• Date/Time: [Timestamp]
• Location: [Place]
• Item(s) Missing: [Description/Asset Tags]
• Last Seen: [Time]

Police Report Filed: [Yes/No - Case Number]
Surveillance Check Requested: [Yes/No]

Detailed statement attached.${EMAIL_CONSTANTS.FULL_SIGNATURE}`
  },

  // 🔄 Offboarding (Knowledge Transfer)
  {
    id: "offboard-kt-001",
    subject: "Knowledge Transfer Plan - [Leaving Employee]",
    category: "HR/Offboarding",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}As [Employee] transitions out, here is the Knowledge Transfer (KT) plan.

KT SESSIONS:
1. [Topic A] - with [Name] - [Date]
2. [Topic B] - with [Name] - [Date]

DOCUMENTATION:
• Project Files: [Link]
• Account Credentials: [Link to Secure Vault]
• Outstanding Tasks: [Link to Jira/Trello]

Sign-off required by [Manager Name] by [Date].${EMAIL_CONSTANTS.SHORT_SIGNATURE}`
  },

  // 🤝 Sales: Churn Prevention
  {
    id: "sales-risk-alert-001",
    subject: "⚠️ At-Risk Account Alert: [Client Name]",
    category: "Sales/Success",
    body: `${EMAIL_CONSTANTS.TEAM_SALUTATION}This account has been flagged as "At Risk."

RISK FACTORS:
• Usage Drop: [X]% decrease in last 30 days.
• Support Tickets: [High volume/Unresolved critical issue].
• Stakeholder Change: [Key champion left].

RENEWAL DATE: [Date]
ARR AT RISK: [Amount]

MITIGATION PLAN:
1. Executive sponsor outreach scheduled for [Date].
2. Technical review session offered.
3. Discount/incentive strategy prepared.

Feedback requested.${EMAIL_CONSTANTS.POSITION_SIGNATURE}`
  },

  // 📞 Customer Service (Specific)
  {
    id: "cs-refund-processed-001",
    subject: "Refund Confirmation - Order #[Order ID]",
    category: "Customer Service",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}We have processed your refund request for Order #[Order ID].

DETAILS:
• Refund Amount: [Amount]
• Payment Method: [Original Method]
• Reference ID: [Transaction ID]

Please allow 3-5 business days for the funds to appear in your account.

We hope to serve you again in the future.${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}`
  },

  {
    id: "cs-apology-gift-001",
    subject: "Our Apologies: Here is a Gift for You",
    category: "Customer Service",
    body: `${EMAIL_CONSTANTS.SHORT_SALUTATION}We are truly sorry for the recent experience you had with [Issue]. This falls short of our standards.

To make amends, please accept this [Discount/Gift Card] for your next order:
Code: [CODE]
Value: [Value]

We have taken steps to prevent this from happening again.${EMAIL_CONSTANTS.DEPARTMENT_SIGNATURE}`
  }
 
];

















