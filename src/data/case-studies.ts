import type { EvidencePlaceholderType } from '../components/EvidencePlaceholder';

export type CaseStudyStatus =
  | 'Implemented & Tested'
  | 'In Development'
  | 'Prototype'
  | 'Architecture / Design Exercise'
  | 'Planned Extension';

export interface CaseStudyEvidence {
  type: EvidencePlaceholderType;
  title: string;
  image: string | null;
  alt: string;
  description: string;
  suggestedPath: string;
}

export interface CaseStudySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  emphasis?: 'built' | 'production';
}

export interface FlagshipCaseStudy {
  id: string;
  title: string;
  category: string;
  status: CaseStudyStatus;
  statusNote: string;
  overview: string;
  technologies: string[];
  workflow?: string[];
  sections: CaseStudySection[];
  evidence: CaseStudyEvidence[];
  githubUrl?: string;
}

export const flagshipCaseStudies: FlagshipCaseStudy[] = [
  {
    id: 'enterprise-soc-siem-incident-response-lab',
    title: 'Enterprise SOC, SIEM & Incident Response Lab',
    category: 'Security Operations',
    status: 'Implemented & Tested',
    statusNote:
      'Implemented as a virtualized lab and exercised with controlled detection and investigation scenarios. No events are presented as production incidents.',
    overview:
      'A Windows and Linux security-operations lab for collecting telemetry, reviewing alerts, correlating activity, and practicing a structured incident-response process.',
    technologies: [
      'Proxmox',
      'Wazuh',
      'Microsoft Sentinel',
      'KQL',
      'Splunk',
      'Sysmon',
      'Suricata',
      'Wireshark',
      'Nmap',
      'Python',
      'Windows',
      'Linux',
      'MITRE ATT&CK',
    ],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The lab provides a controlled environment for learning how endpoint, authentication, file-integrity, and network telemetry can support triage and investigation across Windows and Linux systems.',
        ],
      },
      {
        heading: 'Objective',
        paragraphs: [
          'Build a repeatable workflow for centralized monitoring, threat detection, alert validation, investigation, containment planning, remediation review, and lessons learned.',
        ],
      },
      {
        heading: 'Environment',
        bullets: [
          'Proxmox-hosted Windows and Linux systems',
          'Wazuh for endpoint and file-integrity monitoring',
          'Microsoft Sentinel and KQL for SIEM investigation practice',
          'Splunk for log-search and analysis exercises',
          'Sysmon and Suricata for endpoint and network telemetry',
          'Wireshark and Nmap for traffic analysis and controlled scanning',
        ],
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'Virtualized endpoints generate host, authentication, and network events that are brought into centralized monitoring and SIEM workflows. The evidence gallery reserves space for the exact architecture and data-flow diagram rather than implying an undocumented production topology.',
        ],
      },
      {
        heading: 'What I Built',
        emphasis: 'built',
        bullets: [
          'A virtualized Windows/Linux monitoring environment for security-operations exercises',
          'Detection scenarios for failed authentication, account lockouts, privileged-group changes, network scanning, SSH activity, and file-integrity events',
          'A structured incident workflow covering validation, correlation, investigation, containment, remediation, and lessons learned',
          'Investigation practice using SIEM queries, endpoint telemetry, network evidence, and MITRE ATT&CK mapping',
          'Python-based automation output where scripts were used to support repeatable lab tasks',
        ],
      },
      {
        heading: 'Security or Technical Decisions',
        bullets: [
          'Kept the scenarios controlled and repeatable so alerts could be reviewed without presenting simulated events as real incidents',
          'Used more than one telemetry source to practice correlation rather than treating a single alert as conclusive',
          'Mapped behavior to MITRE ATT&CK where the observed technique was supported by the scenario',
          'Separated validation and investigation from containment and remediation decisions',
        ],
      },
      {
        heading: 'Scenario / Testing',
        paragraphs: [
          'Testing covered controlled authentication failures, lockouts, account or privileged-group changes, Nmap activity, SSH activity, and file-integrity changes. The case study does not assign invented timestamps, hosts, users, or alert volumes to those exercises.',
        ],
      },
      {
        heading: 'Investigation / Analysis',
        bullets: [
          'Validate whether the alert matches the generated scenario',
          'Correlate identity, host, and network context where available',
          'Review the activity sequence and affected system',
          'Document containment or remediation actions appropriate to the lab scenario',
          'Capture lessons learned and opportunities to refine telemetry or queries',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'The project produced a repeatable SOC practice environment and a defensible investigation process. It demonstrates workflow and technical breadth without claiming production detection rates, response times, or operational coverage.',
        ],
      },
      {
        heading: 'What I Learned',
        bullets: [
          'Alert context matters more than alert volume alone',
          'Endpoint, identity, and network evidence become more useful when reviewed together',
          'A documented incident process makes investigation decisions easier to explain and revisit',
        ],
      },
      {
        heading: 'How I Would Productionize It',
        emphasis: 'production',
        paragraphs: [
          'These are planned production controls, not components claimed as deployed in this lab.',
        ],
        bullets: [
          'Define log-retention, access-control, backup, and recovery requirements',
          'Separate administrative roles and enforce reviewed least-privilege access',
          'Connect validated alerts to ticketing and incident-ownership workflows',
          'Add documented detection validation, change control, and tuning procedures',
          'Design resilient collection and monitoring paths for critical telemetry',
        ],
      },
      {
        heading: 'What I Would Improve Next',
        bullets: [
          'Consolidate verified screenshots and query outputs into a consistent evidence set',
          'Expand scenario documentation with prerequisites, expected telemetry, and cleanup steps',
          'Create repeatable validation checks for detection changes',
        ],
      },
    ],
    evidence: [
      {
        type: 'architecture',
        title: 'SOC Architecture Diagram',
        image: null,
        alt: 'SOC lab architecture diagram showing Windows and Linux telemetry paths',
        description: 'Add the verified lab topology and telemetry-flow diagram.',
        suggestedPath: '/images/case-studies/soc/soc-architecture.png',
      },
      {
        type: 'dashboard',
        title: 'SIEM Dashboard Screenshot',
        image: null,
        alt: 'SIEM dashboard from the SOC lab',
        description: 'Add a sanitized Wazuh, Sentinel, or Splunk dashboard screenshot.',
        suggestedPath: '/images/case-studies/soc/siem-dashboard.png',
      },
      {
        type: 'code-output',
        title: 'KQL / Log Investigation',
        image: null,
        alt: 'KQL query or log investigation output from a controlled scenario',
        description: 'Add a query and result view with sensitive lab identifiers removed.',
        suggestedPath: '/images/case-studies/soc/kql-log-investigation.png',
      },
      {
        type: 'workflow',
        title: 'Incident Timeline',
        image: null,
        alt: 'Incident timeline assembled from a controlled lab scenario',
        description: 'Add a documented event sequence without invented incident data.',
        suggestedPath: '/images/case-studies/soc/incident-timeline.png',
      },
      {
        type: 'report',
        title: 'MITRE ATT&CK Mapping',
        image: null,
        alt: 'MITRE ATT&CK mapping for a tested SOC lab scenario',
        description: 'Add the verified technique mapping used during scenario analysis.',
        suggestedPath: '/images/case-studies/soc/mitre-attack-mapping.png',
      },
      {
        type: 'code-output',
        title: 'Python Automation Output',
        image: null,
        alt: 'Output from a Python script used in the SOC lab',
        description: 'Add output only for automation that was actually implemented and run.',
        suggestedPath: '/images/case-studies/soc/python-automation-output.png',
      },
    ],
  },
  {
    id: 'risk-based-vulnerability-management-nist-grc-lab',
    title: 'Risk-Based Vulnerability Management & NIST GRC Lab',
    category: 'Vulnerability Management / GRC',
    status: 'Implemented & Tested',
    statusNote:
      'The supplied workflow includes assessment, remediation tracking, and verification scanning in a lab. No vulnerability totals or remediation-rate claims are included.',
    overview:
      'A lab workflow connecting technical vulnerability assessment with risk prioritization, remediation tracking, verification, residual-risk documentation, and NIST CSF 2.0 governance mapping.',
    technologies: ['Greenbone/OpenVAS', 'Nmap', 'CVE', 'CVSS', 'Windows', 'Linux', 'Docker', 'NIST CSF 2.0'],
    workflow: ['Detection', 'Validation', 'Risk Prioritization', 'Remediation', 'Verification', 'Residual Risk', 'Governance Documentation'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The project treats scanner output as the start of a vulnerability-management process rather than the final answer. Findings move through validation, risk review, remediation, verification, and governance documentation.',
        ],
      },
      {
        heading: 'Objective',
        paragraphs: [
          'Practice a defensible risk-based workflow that connects CVE and CVSS information to remediation decisions, verification evidence, residual risk, and audit-ready records.',
        ],
      },
      {
        heading: 'Environment',
        bullets: [
          'Greenbone/OpenVAS vulnerability scanning',
          'Nmap discovery and validation support',
          'Windows and Linux lab targets',
          'Docker-based services where applicable to the lab',
          'Vulnerability and risk registers for documentation',
          'NIST CSF 2.0 mapping for governance context',
        ],
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'The case study follows an evidence path from scanner output and validation notes into prioritized remediation records, verification scans, residual-risk decisions, NIST CSF mapping, and an executive summary.',
        ],
      },
      {
        heading: 'What I Built',
        emphasis: 'built',
        bullets: [
          'A repeatable assessment and validation workflow using Greenbone/OpenVAS and Nmap',
          'Vulnerability-register and risk-register structures for tracking findings and decisions',
          'Risk-based prioritization using CVE/CVSS context without treating a score as the only decision input',
          'Remediation tracking followed by verification scans',
          'Residual-risk and NIST CSF 2.0 documentation for governance and audit-readiness practice',
        ],
      },
      {
        heading: 'Security or Technical Decisions',
        bullets: [
          'Validate scanner findings before assigning remediation priority',
          'Keep technical severity, remediation status, and residual-risk decisions distinguishable',
          'Use verification evidence rather than marking work complete from a ticket update alone',
          'Preserve an audit trail linking findings, remediation activity, verification, and governance mapping',
        ],
      },
      {
        heading: 'Scenario / Testing',
        paragraphs: [
          'The lab workflow uses initial assessments, validation, documented remediation activity, and follow-up verification scans. Exact vulnerability counts and severity distributions are intentionally omitted until verified evidence is available.',
        ],
      },
      {
        heading: 'Investigation / Analysis',
        paragraphs: [
          'Analysis centers on determining whether a finding is valid, understanding its CVE/CVSS context, assigning a defensible priority, recording the remediation decision, and documenting any residual risk after verification.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'The result is a complete lab-based vulnerability-management workflow and supporting documentation structure. The case study demonstrates process discipline without claiming a specific reduction in vulnerabilities or risk.',
        ],
      },
      {
        heading: 'What I Learned',
        bullets: [
          'A scanner finding still requires validation and context',
          'Verification is a distinct stage from remediation activity',
          'Residual risk and governance records make technical decisions easier to review',
        ],
      },
      {
        heading: 'How I Would Productionize It',
        emphasis: 'production',
        paragraphs: ['These are planned extensions rather than deployed capabilities.'],
        bullets: [
          'Define asset ownership, scan authorization, remediation service levels, and exception workflows',
          'Use authenticated scanning where approved and protect scanner credentials',
          'Connect validated findings to ticketing, ownership, and change-management records',
          'Schedule recurring assessments and executive reporting with documented review criteria',
        ],
      },
      {
        heading: 'What I Would Improve Next',
        bullets: [
          'Add sanitized evidence for each workflow stage',
          'Formalize the risk-rating rubric and exception-review process',
          'Create a reusable executive-summary template tied to the underlying registers',
        ],
      },
    ],
    evidence: [
      {
        type: 'dashboard',
        title: 'OpenVAS/Greenbone Scan',
        image: null,
        alt: 'Sanitized Greenbone OpenVAS scan results from the vulnerability lab',
        description: 'Add a verified and sanitized assessment view.',
        suggestedPath: '/images/case-studies/vulnerability/openvas-greenbone-scan.png',
      },
      {
        type: 'report',
        title: 'Vulnerability Register',
        image: null,
        alt: 'Vulnerability register used to track validated findings',
        description: 'Add the register structure with sensitive target data removed.',
        suggestedPath: '/images/case-studies/vulnerability/vulnerability-register.png',
      },
      {
        type: 'report',
        title: 'Risk Register',
        image: null,
        alt: 'Risk register linking vulnerability findings to treatment decisions',
        description: 'Add the verified risk and treatment record format.',
        suggestedPath: '/images/case-studies/vulnerability/risk-register.png',
      },
      {
        type: 'before-after',
        title: 'Before Remediation',
        image: null,
        alt: 'Validated vulnerability evidence before remediation',
        description: 'Add verified pre-remediation evidence without exposing sensitive details.',
        suggestedPath: '/images/case-studies/vulnerability/before-remediation.png',
      },
      {
        type: 'before-after',
        title: 'After Verification Scan',
        image: null,
        alt: 'Verification scan evidence after remediation activity',
        description: 'Add the follow-up evidence used to review remediation status.',
        suggestedPath: '/images/case-studies/vulnerability/after-verification-scan.png',
      },
      {
        type: 'report',
        title: 'NIST CSF Mapping',
        image: null,
        alt: 'NIST CSF 2.0 mapping for the vulnerability-management workflow',
        description: 'Add the documented control and governance mapping.',
        suggestedPath: '/images/case-studies/vulnerability/nist-csf-mapping.png',
      },
      {
        type: 'report',
        title: 'Executive Summary',
        image: null,
        alt: 'Executive summary of vulnerability-management findings and residual risk',
        description: 'Add a sanitized summary that does not invent counts or outcomes.',
        suggestedPath: '/images/case-studies/vulnerability/executive-summary.png',
      },
    ],
  },
  {
    id: 'hybrid-iam-aws-cloud-security-zero-trust-lab',
    title: 'Hybrid IAM, AWS Cloud Security & Zero Trust Access Lab',
    category: 'Identity & Cloud Security',
    status: 'In Development',
    statusNote:
      'Identity controls and workflows are being developed and documented. Python and PowerShell automation concepts were explored; full end-to-end automation is not claimed.',
    overview:
      'A hybrid identity-security lab focused on RBAC, least privilege, MFA, lifecycle workflows, access review, audit activity, and Zero Trust access principles.',
    technologies: ['AWS IAM', 'Amazon Cognito', 'AWS CloudTrail', 'Wazuh', 'RBAC', 'MFA', 'Terraform', 'Python', 'PowerShell'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The project explores how identity lifecycle, authorization, authentication assurance, access review, and monitoring fit together across AWS and lab-based identity scenarios.',
        ],
      },
      {
        heading: 'Objective',
        paragraphs: [
          'Develop and document repeatable least-privilege access patterns, joiner/mover/leaver workflows, review procedures, and identity-event monitoring without presenting exploratory automation as complete.',
        ],
      },
      {
        heading: 'Environment',
        bullets: [
          'AWS IAM for users, roles, policies, and access control',
          'Amazon Cognito for application identity concepts',
          'AWS CloudTrail for AWS activity evidence',
          'Wazuh for identity-related lab alerts',
          'Terraform for repeatable configuration patterns',
          'Python and PowerShell for explored automation concepts and workflows',
        ],
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'The architecture separates identity sources, roles and permissions, authentication controls, audit events, and monitoring. A verified diagram will replace the placeholder when the current implementation is consolidated.',
        ],
      },
      {
        heading: 'What I Built',
        emphasis: 'built',
        bullets: [
          'RBAC and least-privilege access patterns for hybrid identity scenarios',
          'MFA and access-review procedures',
          'Joiner, mover, and leaver workflow documentation',
          'CloudTrail activity-review and Wazuh identity-event exercises',
          'Terraform configuration patterns supporting repeatable identity setup',
          'Python and PowerShell automation concepts/workflows explored without claiming full automation',
        ],
      },
      {
        heading: 'Security or Technical Decisions',
        bullets: [
          'Prefer role-based access and scoped permissions over broad individual grants',
          'Use MFA as one layer within a broader access-decision process',
          'Treat lifecycle changes and access reviews as auditable security events',
          'Keep identity configuration, activity logging, and alerting distinct but connected',
        ],
      },
      {
        heading: 'Scenario / Testing',
        paragraphs: [
          'Current exercises cover joiner/mover/leaver changes, access review, CloudTrail activity, and Wazuh identity events. The project remains in development while implementation evidence and repeatable validation steps are consolidated.',
        ],
      },
      {
        heading: 'Investigation / Analysis',
        bullets: [
          'Compare assigned access with the documented role requirement',
          'Review lifecycle changes for stale or excessive permissions',
          'Use CloudTrail and Wazuh evidence to understand identity-related activity',
          'Document unresolved access questions rather than assuming they are remediated',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'The project currently provides a documented identity-control and monitoring framework with implementation exercises in progress. It does not claim enterprise deployment or fully automated provisioning.',
        ],
      },
      {
        heading: 'What I Learned',
        bullets: [
          'Least privilege depends on clear roles and recurring review, not policy syntax alone',
          'Lifecycle workflows must account for access removal as carefully as onboarding',
          'Audit events are most useful when they can be tied back to an expected access decision',
        ],
      },
      {
        heading: 'How I Would Productionize It',
        emphasis: 'production',
        paragraphs: ['These are planned extensions and are not presented as deployed.'],
        bullets: [
          'Integrate an authoritative identity source and approval workflow',
          'Use short-lived access, centralized federation, and reviewed break-glass procedures',
          'Add policy testing, drift detection, secrets handling, and controlled Terraform delivery',
          'Connect access reviews and lifecycle changes to ticketing and evidence retention',
        ],
      },
      {
        heading: 'What I Would Improve Next',
        bullets: [
          'Finish repeatable test cases for each lifecycle stage',
          'Capture sanitized CloudTrail and Wazuh evidence',
          'Clearly identify which steps are manual, scripted, or Terraform-managed',
        ],
      },
    ],
    evidence: [
      {
        type: 'architecture',
        title: 'IAM Architecture',
        image: null,
        alt: 'Hybrid IAM and Zero Trust lab architecture',
        description: 'Add the verified identity, access, logging, and monitoring diagram.',
        suggestedPath: '/images/case-studies/iam-zero-trust/iam-architecture.png',
      },
      {
        type: 'workflow',
        title: 'Joiner/Mover/Leaver Workflow',
        image: null,
        alt: 'Joiner mover leaver access lifecycle workflow',
        description: 'Add the documented lifecycle flow and approval points.',
        suggestedPath: '/images/case-studies/iam-zero-trust/joiner-mover-leaver-workflow.png',
      },
      {
        type: 'report',
        title: 'Access Review',
        image: null,
        alt: 'Sanitized access review record from the IAM lab',
        description: 'Add a review artifact with identities and account details removed.',
        suggestedPath: '/images/case-studies/iam-zero-trust/access-review.png',
      },
      {
        type: 'screenshot',
        title: 'CloudTrail Event',
        image: null,
        alt: 'Sanitized AWS CloudTrail identity event',
        description: 'Add a verified CloudTrail event used in an identity exercise.',
        suggestedPath: '/images/case-studies/iam-zero-trust/cloudtrail-event.png',
      },
      {
        type: 'dashboard',
        title: 'Wazuh Identity Alert',
        image: null,
        alt: 'Wazuh identity-related alert from the lab',
        description: 'Add a verified and sanitized Wazuh identity-event view.',
        suggestedPath: '/images/case-studies/iam-zero-trust/wazuh-identity-alert.png',
      },
      {
        type: 'code-output',
        title: 'Terraform Configuration',
        image: null,
        alt: 'Terraform identity configuration used in the lab',
        description: 'Add only configuration that was implemented or tested.',
        suggestedPath: '/images/case-studies/iam-zero-trust/terraform-configuration.png',
      },
    ],
  },
  {
    id: 'secure-enterprise-network-aws-vpc-lab',
    title: 'Secure Enterprise Network & AWS VPC Lab',
    category: 'Network & Cloud Security',
    status: 'In Development',
    statusNote:
      'Core segmentation and cloud-networking patterns are being developed in an enterprise-style lab. This is not presented as a production corporate environment.',
    overview:
      'An enterprise-style lab connecting Proxmox network segmentation, pfSense policy, monitoring, troubleshooting, and AWS VPC design.',
    technologies: ['Proxmox', 'pfSense', 'NAT', 'DNS', 'DHCP', 'Wazuh', 'Suricata', 'Wireshark', 'AWS VPC', 'Security Groups', 'NACLs', 'Terraform'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The lab models how management, server, workstation, security, and testing zones can be separated while still supporting required services, monitoring, and controlled troubleshooting.',
        ],
      },
      {
        heading: 'Objective',
        paragraphs: [
          'Practice segmentation, least-privilege connectivity, firewall policy, network monitoring, troubleshooting, and cloud-network design in an enterprise-style lab.',
        ],
      },
      {
        heading: 'Environment',
        bullets: [
          'Proxmox virtualization and virtual networking',
          'Management, server, workstation, security, and testing zones',
          'pfSense firewall, NAT, DNS, and DHCP',
          'Wazuh and Suricata monitoring',
          'Wireshark packet analysis and connectivity testing',
          'AWS VPC public/private subnets, security groups, NACLs, and Terraform',
        ],
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'The local architecture separates systems by function and routes permitted traffic through pfSense policy. The cloud design applies similar separation through public/private subnet boundaries, route design, security groups, and NACLs.',
        ],
      },
      {
        heading: 'What I Built',
        emphasis: 'built',
        bullets: [
          'A segmented Proxmox lab organized into management, server, workstation, security, and testing zones',
          'pfSense firewall-policy, NAT, DNS, and DHCP configurations',
          'Wazuh and Suricata monitoring paths for the lab environment',
          'AWS VPC public/private subnet designs using security groups and NACLs',
          'Terraform configuration patterns for cloud-network resources',
        ],
      },
      {
        heading: 'Security or Technical Decisions',
        bullets: [
          'Separate systems by purpose to reduce unnecessary lateral connectivity',
          'Document permitted flows so firewall policy can be reviewed and tested',
          'Use security groups and NACLs as distinct cloud controls rather than interchangeable labels',
          'Keep monitoring and troubleshooting visibility available across the segmented design',
        ],
      },
      {
        heading: 'Scenario / Testing',
        paragraphs: [
          'Testing focuses on expected and blocked connectivity, DNS/DHCP behavior, NAT paths, firewall-rule review, packet capture, Suricata visibility, and AWS subnet/control behavior. The project remains in development while the evidence set is consolidated.',
        ],
      },
      {
        heading: 'Investigation / Analysis',
        bullets: [
          'Confirm addressing, route, and name-resolution assumptions',
          'Review pfSense policy and logs for the attempted flow',
          'Use packet capture or Suricata evidence to locate the failing network stage',
          'Compare cloud route tables, security groups, and NACL behavior when troubleshooting AWS connectivity',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'The project provides an evolving enterprise-style lab for practicing segmented connectivity and cloud networking. It does not claim production uptime, enterprise scale, or deployed corporate controls.',
        ],
      },
      {
        heading: 'What I Learned',
        bullets: [
          'Segmentation is only useful when required flows are documented and testable',
          'Firewall troubleshooting depends on understanding addressing, routing, policy, and observed traffic together',
          'Cloud and local controls share principles but differ in how state and rule evaluation are applied',
        ],
      },
      {
        heading: 'How I Would Productionize It',
        emphasis: 'production',
        paragraphs: ['These controls describe a future production design, not the current lab.'],
        bullets: [
          'Establish reviewed network standards, change control, configuration backup, and recovery procedures',
          'Add resilient routing, firewall availability, centralized logging, and monitored administrative access',
          'Use controlled Terraform delivery with state protection, review, and drift detection',
          'Validate rules periodically and document ownership for each permitted flow',
        ],
      },
      {
        heading: 'What I Would Improve Next',
        bullets: [
          'Publish a sanitized architecture with explicit trust boundaries',
          'Create repeatable connectivity and firewall-policy test cases',
          'Document the local-to-cloud comparison without implying a live hybrid production connection',
        ],
      },
    ],
    evidence: [
      {
        type: 'architecture',
        title: 'Network Architecture Diagram',
        image: null,
        alt: 'Enterprise-style Proxmox network lab architecture',
        description: 'Add the verified local network topology and trust boundaries.',
        suggestedPath: '/images/case-studies/network-vpc/network-architecture.png',
      },
      {
        type: 'architecture',
        title: 'VLAN / Security Zones',
        image: null,
        alt: 'Management server workstation security and testing zones',
        description: 'Add the sanitized segmentation and zone layout.',
        suggestedPath: '/images/case-studies/network-vpc/vlan-security-zones.png',
      },
      {
        type: 'screenshot',
        title: 'pfSense Firewall Rules',
        image: null,
        alt: 'Sanitized pfSense firewall policy used in the network lab',
        description: 'Add verified rule evidence with sensitive addressing removed.',
        suggestedPath: '/images/case-studies/network-vpc/pfsense-firewall-rules.png',
      },
      {
        type: 'code-output',
        title: 'Connectivity Test',
        image: null,
        alt: 'Connectivity test output from the segmented network lab',
        description: 'Add an allow or deny test with its expected outcome documented.',
        suggestedPath: '/images/case-studies/network-vpc/connectivity-test.png',
      },
      {
        type: 'dashboard',
        title: 'Wireshark / Suricata',
        image: null,
        alt: 'Wireshark packet capture or Suricata event from the network lab',
        description: 'Add verified traffic evidence used during monitoring or troubleshooting.',
        suggestedPath: '/images/case-studies/network-vpc/wireshark-suricata.png',
      },
      {
        type: 'architecture',
        title: 'AWS VPC Diagram',
        image: null,
        alt: 'AWS VPC public and private subnet architecture',
        description: 'Add the verified AWS VPC design and control boundaries.',
        suggestedPath: '/images/case-studies/network-vpc/aws-vpc-diagram.png',
      },
    ],
  },
  {
    id: 'hybrid-cloud-infrastructure-security-home-lab',
    title: 'Hybrid Cloud Infrastructure & Security Home Lab',
    category: 'Infrastructure Foundation',
    status: 'In Development',
    statusNote:
      'The environment is built and continuously developed as a learning platform. Individual capabilities are documented conservatively as evidence is added.',
    overview:
      'The Proxmox-based Windows/Linux platform that supports the SOC, vulnerability-management, IAM, network, remote-access, and incident-response projects.',
    technologies: ['Proxmox VE', 'Windows', 'Linux', 'Docker', 'pfSense', 'Tailscale', 'Wazuh', 'Suricata', 'TCP/IP'],
    githubUrl: 'https://github.com/Eskinder185/Hybrid-Cloud-Security-Lab',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The home lab is the shared infrastructure foundation for the four flagship security projects. It provides reusable Windows, Linux, network, container, monitoring, and remote-access components for controlled technical exercises.',
        ],
      },
      {
        heading: 'Objective',
        paragraphs: [
          'Build an environment where infrastructure administration can progress into network security, monitoring, vulnerability management, IAM, and incident-response practice without representing the lab as a production enterprise deployment.',
        ],
      },
      {
        heading: 'Environment',
        bullets: [
          'Proxmox VE virtualization platform',
          'Windows and Linux virtual systems',
          'Docker-based services and supporting workloads',
          'pfSense networking and firewall controls',
          'Tailscale remote-access connectivity',
          'Wazuh and Suricata security monitoring',
        ],
      },
      {
        heading: 'Architecture',
        paragraphs: [
          'Proxmox hosts the core Windows, Linux, and container workloads. pfSense provides the network-control layer, Tailscale supports remote-access scenarios, and Wazuh/Suricata provide security visibility for exercises built on top of the platform.',
        ],
      },
      {
        heading: 'What I Built',
        emphasis: 'built',
        bullets: [
          'A reusable Proxmox-based Windows and Linux virtualization environment',
          'Docker workloads supporting infrastructure and security exercises',
          'pfSense networking and controlled connectivity between lab systems',
          'Tailscale remote-access scenarios',
          'Wazuh and Suricata monitoring foundations',
          'A platform for vulnerability, identity, networking, and incident-response exercises',
        ],
      },
      {
        heading: 'Security or Technical Decisions',
        bullets: [
          'Keep reusable infrastructure separate from the scenarios that run on top of it',
          'Use virtualization snapshots and documented configurations to support repeatable exercises',
          'Build monitoring into the environment as capabilities become available',
          'Treat remote access, firewall policy, and administrative access as security decisions',
        ],
      },
      {
        heading: 'Scenario / Testing',
        paragraphs: [
          'The platform supports system-administration, connectivity, container, monitoring, security-testing, vulnerability-management, IAM, and incident-response exercises. Individual project pages describe those scenarios without assigning unsupported performance or availability results to the lab.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'The result is an evolving technical platform that connects foundational virtualization and system administration to increasingly advanced infrastructure-security projects.',
        ],
      },
      {
        heading: 'What I Learned',
        bullets: [
          'Reliable security practice depends on understanding the underlying systems and networks',
          'Reusable lab components reduce setup friction for later exercises',
          'Documentation and evidence are as important as configuration when explaining technical work',
        ],
      },
      {
        heading: 'How I Would Productionize It',
        emphasis: 'production',
        paragraphs: ['These are future production considerations, not current lab claims.'],
        bullets: [
          'Design resilient compute, storage, networking, power, backup, and recovery layers',
          'Centralize identity, secrets, logging, patching, and configuration management',
          'Add monitored administrative access and formal change control',
          'Define recovery objectives only after requirements and testing evidence exist',
        ],
      },
      {
        heading: 'What I Would Improve Next',
        bullets: [
          'Publish the architecture and trust-boundary diagram',
          'Create an inventory showing which services support each flagship project',
          'Add documented build, backup, restore, and scenario-reset procedures',
        ],
      },
    ],
    evidence: [
      {
        type: 'architecture',
        title: 'Home Lab Architecture',
        image: null,
        alt: 'Proxmox home lab architecture supporting the flagship security projects',
        description: 'Add the primary verified architecture and project dependency diagram.',
        suggestedPath: '/images/case-studies/home-lab/home-lab-architecture.png',
      },
      {
        type: 'dashboard',
        title: 'Proxmox Systems View',
        image: null,
        alt: 'Sanitized Proxmox systems and workload view',
        description: 'Add a sanitized view of the lab systems and workloads.',
        suggestedPath: '/images/case-studies/home-lab/proxmox-systems-view.png',
      },
      {
        type: 'screenshot',
        title: 'pfSense / Tailscale Connectivity',
        image: null,
        alt: 'Sanitized pfSense or Tailscale connectivity evidence',
        description: 'Add verified connectivity evidence with addressing removed.',
        suggestedPath: '/images/case-studies/home-lab/pfsense-tailscale-connectivity.png',
      },
      {
        type: 'dashboard',
        title: 'Wazuh / Suricata Monitoring',
        image: null,
        alt: 'Wazuh or Suricata monitoring view from the home lab',
        description: 'Add a verified monitoring view from the shared lab platform.',
        suggestedPath: '/images/case-studies/home-lab/wazuh-suricata-monitoring.png',
      },
    ],
  },
  {
    id: 'ecaa-digital-platform',
    title: 'ECAA Digital Platform — Bilingual Community Website Redesign',
    category: 'Software & Community Technology',
    status: 'In Development',
    statusNote:
      'The redesign and implementation direction are in development. No public user metrics, production URL, or completed stakeholder-validation results were supplied.',
    overview:
      'A bilingual community-website redesign focused on clearer information architecture, responsive frontend implementation, accessible content presentation, migration, and editor-friendly CMS workflows.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Decap CMS', 'JSON', 'Git', 'GitHub', 'GitHub Pages'],
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'The ECAA platform applies software and product-design skills to a community-centered bilingual website. The work is presented as frontend and CMS integration rather than full-stack development.',
        ],
      },
      {
        heading: 'Problem',
        paragraphs: [
          'The redesign addresses the need for clearer navigation, maintainable content, responsive presentation, accessible interaction, and an information structure that can support English and Amharic content.',
        ],
      },
      {
        heading: 'Content Audit',
        paragraphs: [
          'The content-audit work focuses on identifying existing material, reviewing organization and duplication, separating migration needs from new content needs, and planning how bilingual content should be represented. No unsupported page or content counts are included.',
        ],
      },
      {
        heading: 'Information Architecture',
        paragraphs: [
          'The information architecture organizes community content around understandable destinations and predictable navigation. A future diagram will document the final hierarchy and bilingual relationships once verified.',
        ],
      },
      {
        heading: 'Design / Responsive UI',
        bullets: [
          'Responsive layouts for desktop and mobile views',
          'Consistent visual hierarchy and reusable interface patterns',
          'Bilingual content presentation considered in component and layout decisions',
          'Community-centered UI/UX rather than a generic portfolio treatment',
        ],
      },
      {
        heading: 'Implementation / What I Built',
        emphasis: 'built',
        bullets: [
          'React and Vite frontend structure',
          'Tailwind CSS responsive interface implementation',
          'React Router navigation patterns',
          'JSON-backed content organization where appropriate',
          'Git and GitHub workflow for source control',
          'Decap CMS integration direction for editor-managed content',
        ],
      },
      {
        heading: 'CMS Architecture',
        paragraphs: [
          'Decap CMS is used to separate routine content editing from component development. Content structures, media handling, editor access, preview behavior, and deployment workflow should be validated before the CMS is described as production-ready.',
        ],
      },
      {
        heading: 'Accessibility',
        paragraphs: [
          'Accessibility is treated as an implementation requirement covering semantic structure, keyboard use, readable contrast, focus visibility, image alternatives, responsive text, and language-aware content. Formal audit results are not claimed without evidence.',
        ],
      },
      {
        heading: 'Deployment',
        paragraphs: [
          'The deployment path uses Git, GitHub, and GitHub Pages. A verified production URL and deployment evidence have not been supplied, so this case study does not present the platform as a completed production launch.',
        ],
      },
      {
        heading: 'Outcome / Current Status',
        paragraphs: [
          'The current outcome is a structured bilingual redesign and frontend/CMS implementation in development. No user counts, engagement improvements, accessibility score, or conversion metrics are asserted.',
        ],
      },
      {
        heading: 'Lessons Learned',
        bullets: [
          'Content structure and migration planning shape frontend implementation decisions',
          'Bilingual interfaces require deliberate space, hierarchy, and editorial considerations',
          'A community platform must balance ease of editing with consistency and accessibility',
        ],
      },
      {
        heading: 'How I Would Productionize It',
        emphasis: 'production',
        paragraphs: ['These are planned launch and operating controls, not completed claims.'],
        bullets: [
          'Validate requirements, bilingual content, and navigation with community stakeholders',
          'Complete accessibility, performance, browser, and device review with documented results',
          'Harden CMS authentication, publishing permissions, media handling, and recovery procedures',
          'Add privacy-conscious analytics only after consent and governance decisions',
          'Document content ownership, publishing review, backup, and rollback processes',
        ],
      },
      {
        heading: 'What I Would Improve Next',
        bullets: [
          'Capture verified original/redesign comparisons and responsive screenshots',
          'Document the final information architecture and CMS content model',
          'Complete stakeholder and accessibility validation before describing outcomes',
        ],
      },
    ],
    evidence: [
      {
        type: 'before-after',
        title: 'Original Website',
        image: null,
        alt: 'Original ECAA website before the redesign',
        description: 'Add a permission-cleared screenshot of the original website.',
        suggestedPath: '/images/case-studies/ecaa/original-website.png',
      },
      {
        type: 'before-after',
        title: 'Redesigned Website',
        image: null,
        alt: 'Redesigned ECAA community website',
        description: 'Add a verified view of the redesigned experience.',
        suggestedPath: '/images/case-studies/ecaa/redesigned-website.png',
      },
      {
        type: 'screenshot',
        title: 'Desktop View',
        image: null,
        alt: 'Desktop layout of the redesigned ECAA website',
        description: 'Add a verified desktop screenshot.',
        suggestedPath: '/images/case-studies/ecaa/desktop-view.png',
      },
      {
        type: 'screenshot',
        title: 'Mobile View',
        image: null,
        alt: 'Mobile layout of the redesigned ECAA website',
        description: 'Add a verified mobile screenshot.',
        suggestedPath: '/images/case-studies/ecaa/mobile-view.png',
      },
      {
        type: 'architecture',
        title: 'Information Architecture',
        image: null,
        alt: 'Information architecture for the bilingual ECAA website',
        description: 'Add the final verified content and navigation hierarchy.',
        suggestedPath: '/images/case-studies/ecaa/information-architecture.png',
      },
      {
        type: 'dashboard',
        title: 'CMS Editing Interface',
        image: null,
        alt: 'Decap CMS editing interface for ECAA content',
        description: 'Add a sanitized editor view after the CMS workflow is verified.',
        suggestedPath: '/images/case-studies/ecaa/cms-editing-interface.png',
      },
      {
        type: 'screenshot',
        title: 'English / Amharic Example',
        image: null,
        alt: 'English and Amharic content example from the ECAA redesign',
        description: 'Add a verified bilingual content example.',
        suggestedPath: '/images/case-studies/ecaa/english-amharic-example.png',
      },
    ],
  },
];
