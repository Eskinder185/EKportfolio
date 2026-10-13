import type { Study } from '../components/pages/CaseStudiesPage';

export const networkCaseStudies: Readonly<Study[]> = [
  {
    id: 'netshield',
    title: 'NetShield — Enterprise Network Engineering & Zero-Trust Infrastructure',
    subtitle: 'An enterprise-style network engineering lab using Proxmox, virtual routing and switching, OPNsense, and network monitoring tools.',
    category: 'Networking / Infrastructure',
    duration: 'In progress — design and virtual network foundation',
    team: 'Lab designer and engineer',
    client: 'Personal infrastructure lab',
    image: '',
    technologies: ['Proxmox', 'OPNsense', 'FRRouting', 'VLANs', 'Wireshark', 'Python', 'Ansible'],
    challenge: 'Build an isolated environment for practicing network design, segmentation, routing, troubleshooting and operational documentation on existing home-lab hardware.',
    impact: [
      'Established the design and virtual network foundation for a dedicated networking lab.',
      'Defined a roadmap for segmentation, routing protocols, firewall testing and repeatable troubleshooting exercises.'
    ],
    scope: 'Proposed management, server, client and security-lab subnets; OPNsense routing, NAT and firewall policies; staged static routing, OSPF and BGP exercises; monitoring and configuration automation.',
    product: 'An in-progress Proxmox networking lab with a proposed segmented topology. VLAN trunking, routing protocols, switching features and high-availability exercises are planned demonstrations, rather than completed results.',
    diagram: 'Proposed topology: existing Xfinity LAN → OPNsense virtual firewall → management (10.10.10.0/24), servers (10.10.20.0/24), clients (10.10.30.0/24), security lab (10.10.40.0/24). Reconcile the existing vmbr1 address before enabling the design.',
    decisions: [
      'Use the existing Proxmox isolated bridge as a starting point for the virtual network.',
      'Introduce FRRouting or suitable network emulation for routing-protocol exercises.',
      'Scope physical switching exercises to the actual NETGEAR switch capabilities.'
    ],
    security: [
      'Separate management access from client and security-lab traffic.',
      'Develop and test explicit firewall rules within the isolated lab.'
    ],
    results: [
      'Current stage: design and virtual network foundation.',
      'Next: implement routing and segmentation, then collect routing tables, packet captures and firewall test results.'
    ],
    keyFeatures: [
      'Departmental and management IPv4 subnet design',
      'Planned VLAN segmentation, inter-VLAN routing, DHCP and DNS',
      'Planned OSPF convergence and BGP peering exercises',
      'Firewall policies, NAT, monitoring and troubleshooting scenarios'
    ],
    technicalHighlights: [
      'The isolated vmbr1 bridge is a foundation; it does not establish VLAN trunking or routing-protocol implementation.',
      'Planned evidence: topology, addressing table, routing tables, OSPF neighbors, BGP sessions, VLAN configuration and captured packets.',
      'Automation roadmap: Python, Ansible and configuration backups.'
    ]
  },
  {
    id: 'aegissoc',
    title: 'AegisSOC — Network Security Monitoring & Incident Response',
    subtitle: 'A distributed security monitoring lab on repurposed hardware, using Wazuh to collect and analyze endpoint events.',
    category: 'Security Monitoring / Incident Response',
    duration: 'In progress — working Wazuh infrastructure',
    team: 'Lab designer and engineer',
    client: 'Personal security operations lab',
    image: '',
    technologies: ['Wazuh', 'Linux', 'Windows', 'Sysmon', 'Python', 'Wireshark', 'Suricata (planned)'],
    challenge: 'Bring endpoint events into a central monitoring workflow and develop a practical process for investigating suspicious activity across the lab network.',
    impact: [
      'Working Wazuh infrastructure provides the foundation for centralized endpoint monitoring.',
      'The next stage adds network visibility and develops alert-triage and incident-documentation workflows.'
    ],
    scope: 'Endpoint event collection, centralized logging, endpoint health, retention planning and investigation workflows. Suricata and network traffic analysis are the next integration stage.',
    product: 'An in-progress distributed Wazuh monitoring platform on repurposed hardware, with a roadmap to correlate endpoint activity with network security findings.',
    diagram: 'Current foundation: Windows/Linux endpoints → Wazuh event collection and analysis. Next stage: validated traffic capture → Suricata and Wireshark analysis → correlated investigation and incident notes.',
    decisions: [
      'Reuse available hardware for the monitoring infrastructure.',
      'Build on working Wazuh infrastructure before adding network-detection integrations.',
      'Keep network engineering in NetShield and monitoring and investigation in AegisSOC.'
    ],
    security: [
      'Limit monitoring and traffic capture to the owned lab environment.',
      'Sanitize logs and packet captures before including them in public case-study evidence.'
    ],
    results: [
      'Current stage: working Wazuh infrastructure.',
      'Next: integrate Suricata and network traffic analysis, then document alert triage and incident workflows.'
    ],
    keyFeatures: [
      'Centralized endpoint event collection with Wazuh',
      'Endpoint health, logging and retention workflows',
      'Planned network intrusion monitoring and packet investigation',
      'Planned correlation, alert triage and incident documentation'
    ],
    technicalHighlights: [
      'Distributed monitoring built around repurposed hardware.',
      'Windows and Linux event sources, with Sysmon and Python in the technology roadmap.',
      'Suricata integration follows validation of a suitable network traffic capture path.'
    ]
  }
];
