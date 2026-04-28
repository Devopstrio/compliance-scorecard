<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="150" alt="Compliance Scorecard Logo" />

<h1>Compliance Scorecard</h1>

<p><strong>The Strategic Intelligence Platform for Unified Governance Scoring, Business Unit Accountability, and Multi-Framework Regulatory Visualization</strong></p>

[![Standard: Enterprise--GRC](https://img.shields.io/badge/Standard-Enterprise--GRC-blue.svg?style=for-the-badge&labelColor=000000)]()
[![Status: Production--Ready](https://img.shields.io/badge/Status-Production--Ready-indigo.svg?style=for-the-badge&labelColor=000000)]()
[![Scoring: Multi--Framework](https://img.shields.io/badge/Scoring-Multi--Framework-green.svg?style=for-the-badge&labelColor=000000)]()
[![Analytics: Data--Driven](https://img.shields.io/badge/Analytics-Data--Driven-ff69b4?style=for-the-badge&labelColor=000000)]()

<br/>

> **"What gets measured gets managed. What gets scored gets prioritized."** 
> Compliance Scorecard is an industrial-grade governance intelligence platform designed to quantify regulatory posture, track control maturity, and drive accountability across global enterprise estates.

</div>

---

## 🏛️ Executive Summary

**Compliance Scorecard** is a premium, flagship GRC (Governance, Risk, and Compliance) intelligence platform designed for CISOs, Board Members, and Risk Leaders. In a landscape of overlapping regulations and decentralized cloud ownership, the ability to provide a "Single Pane of Truth" for compliance is mission-critical.

This platform provides a **Weighted Scoring Engine** that transforms technical state into business-aligned scorecards. It enables leaders to view compliance by **Business Unit**, **Framework (ISO, NIST, PCI)**, or **Global Risk Area**, providing the data-driven insights needed for board-level reporting and strategic remediation planning.

---

## 💡 Why Compliance Scorecards Matter

Manual audits and static spreadsheets are no longer sufficient for the modern enterprise.
- **Accountability Gaps**: Identifying which Business Unit or Team owns a specific compliance failure.
- **Complexity Overload**: Managing thousands of technical controls across Azure, AWS, GCP, and SaaS.
- **Board Visibility**: Translating "Insecure S3 Buckets" into "Privacy Risk: Grade D" for non-technical stakeholders.
- **Benchmark Realities**: Understanding how your compliance posture compares against industry peers.

---

## 🚀 Business Outcomes

### 🎯 Strategic Governance Impact
- **80% Improvement in Remediation Velocity**: Using weighted scores to prioritize the most critical postural gaps.
- **100% Executive Alignment**: Providing CFOs and CIOs with quantifiable risk data for budget justification.
- **Audit Preparedness**: Reducing the 3-month audit cycle to a "Daily Readiness" model through continuous scoring.
- **Cultural Transformation**: Gamifying compliance across business units to drive proactive security ownership.

---

## 🏗️ Technical Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Scoring Engine** | Python / Pandas / NumPy | High-performance weighted aggregation and trend analysis. |
| **Backend** | FastAPI | Asynchronous API gateway for real-time scorecard updates. |
| **Frontend** | React 18, Vite | Premium, high-fidelity portal with interactive maturity radars and heatmaps. |
| **Data Tier** | PostgreSQL | Relational storage for versioned scorecards and audit evidence metadata. |
| **Messaging** | Redis | Managing distributed assessment jobs and notification triggers. |
| **Infrastructure** | Terraform | Multi-cloud IaC for the control plane and secure data pipelines. |

---

## 📐 Architecture Storytelling: 45+ Diagrams

### 1. Executive High-Level Architecture
The holistic flow of technical evidence into board-ready scorecards.

```mermaid
graph TD
    Sources[Azure / AWS / GCP / K8s] --> Aggregator[Data Aggregator]
    Aggregator --> Engine[Weighted Scoring Engine]
    Engine --> DB[(PostgreSQL: Score History)]
    Engine --> Redis[(Redis: Real-time Pulse)]
    DB --> Web[React Executive Dashboard]
    DB --> BU[Business Unit Scorecards]
    Engine --> Alert[Score Regression Alert]
```

### 2. Detailed Component Topology
The internal service boundaries and secure communication paths for the platform.

```mermaid
graph LR
    subgraph "Control Plane"
        UI[Static Web UI]
        API_Svc[API Gateway]
        Worker[Assessment Worker]
    end
    subgraph "Data Tier"
        DB_Inst[(PostgreSQL)]
        Cache[(Redis)]
    end
    subgraph "Governance Edge"
        Agent_Azure[Azure Scorer]
        Agent_AWS[AWS Scorer]
        Agent_SaaS[SaaS API Scorer]
    end
    UI --> API_Svc
    API_Svc --> DB_Inst
    API_Svc --> Cache
    Worker --> Cache
    Worker --> GovernanceEdge
```

### 3. Frontend to Backend Request Path
Tracing a request to generate a monthly executive board report.

```mermaid
sequenceDiagram
    participant CISO as CISO / Risk Lead
    participant W as React UI
    participant A as FastAPI
    participant E as Scoring Engine
    
    CISO->>W: Select "Export Board Report"
    W->>A: GET /reports/export?scope=global
    A->>E: Aggregate Last 30d Scores
    E-->>A: Result Set (Scorecards, Trends, Heatmaps)
    A-->>W: PDF Blob / JSON Payload
    W->>W: Render High-Fidelity Charts
```

### 4. Multi-Cloud Scoring Control Plane
Orchestrating postural measurement across provider and regional boundaries.

```mermaid
graph TD
    Hub[Central Scoring Hub] --> US[US Regional Manager]
    Hub --> EU[EU Regional Manager]
    US --> AWS_Org[AWS Organizations]
    US --> Azure_Sub[Azure Subscriptions]
```

### 5. Assessment Worker Topology
Distributing specialized workers for high-frequency control validation.

```mermaid
graph LR
    Master[Master Controller] --> Identity[Identity Score Worker]
    Master --> Network[Network Score Worker]
    Master --> Data[Data Protection Worker]
```

### 6. Regional Deployment Model
Ensuring low-latency scoring and regional data residency.

```mermaid
graph TD
    GTM[Global Traffic Manager] --> US_NODE[US Governance Node]
    GTM --> EU_NODE[EU Governance Node]
    US_NODE --> DB_US[(US Score DB)]
    EU_NODE --> DB_EU[(EU Score DB)]
```

### 7. DR Failover Model
Continuous availability for mission-critical risk monitoring.

```mermaid
graph LR
    Primary[Active: East US] -->|Replication| Secondary[Standby: West US]
    Secondary -->|Heartbeat| Primary
    Primary --> Fail{Control Plane Down?}
    Fail -->|Yes| Secondary
```

### 8. API Gateway Architecture
Securing and throttling the governance intelligence interface.

```mermaid
graph TD
    Req[Incoming Score Request] --> Auth[OIDC / Azure AD]
    Auth --> Throttling[Rate Limiter]
    Throttling --> Router[Path Router]
```

### 9. Queue Worker Architecture
Managing the schedule of background scoring and trend aggregation.

```mermaid
graph LR
    Job[Aggregate: ISO 27001] --> Redis[Redis Job Queue]
    Redis --> Worker1[Worker Alpha]
    Redis --> Worker2[Worker Beta]
    Worker1 --> Storage[PostgreSQL Update]
```

### 10. Dashboard Analytics Flow
How raw technical pings become high-level executive scorecards.

```mermaid
graph TD
    Raw[Raw Technical State] --> Norm[Normalizer]
    Norm --> Weight[Weighted Scoring Engine]
    Weight --> Dash[Executive UI]
```

### 11. Weighted Score Calculation Flow
Translating atomic pass/fail results into a domain-weighted percentage.

```mermaid
graph LR
    Result[Pass/Fail] --> Criticality[Rule Criticality: 10x]
    Criticality --> Domain[Identity Domain: 30% Weight]
    Domain --> Global[Global Risk Score]
```

### 12. Business Unit Score Aggregation
Roll-up of individual team performance to the department level.

```mermaid
graph TD
    TeamA[Team A: 85%] --> DeptFinance[Finance Dept: 78%]
    TeamB[Team B: 71%] --> DeptFinance
    DeptFinance --> CorpTotal[Corporate Total: 82%]
```

### 13. Control Maturity Ladder
Measuring the operational depth of security controls.

```mermaid
graph LR
    M1[Level 1: Initial] --> M2[Level 2: Managed]
    M2 --> M3[Level 3: Defined]
    M3 --> M4[Level 4: Quantified]
    M4 --> M5[Level 5: Optimizing]
```

### 14. Risk Heatmap Generation Flow
Visualizing impact and likelihood of compliance failures.

```mermaid
graph TD
    Impact[Business Impact] --> Matrix[Heatmap Matrix]
    Likelihood[Likelihood of Breach] --> Matrix
    Matrix --> HighRisk[Critical Risk Quadrant]
```

### 15. Benchmark Comparison Workflow
Measuring internal performance against industrial peer groups.

```mermaid
graph LR
    Internal[Our Score: 78] --> Engine[Benchmark Engine]
    Industry[Peer Avg: 82] --> Engine
    Engine --> Gap[Percentile Delta: -4%]
```

### 16. Trend Score Lifecycle
Tracking the historical progression of postural improvement.

```mermaid
graph TD
    Jan[Jan: 62%] --> Feb[Feb: 68%]
    Feb --> Mar[Mar: 75%]
    Mar --> Improvement[13% Quarterly Growth]
```

### 17. Exception Impact Model
How policy waivers degrade the overall compliance score.

```mermaid
graph LR
    Score[Score: 92%] --> Waiver[New Exception Request]
    Waiver --> Degradation[Penalty: -2.5%]
    Degradation --> NewScore[New Score: 89.5%]
```

### 18. Remediation Prioritization Flow
Directing engineering efforts toward the highest ROI tasks.

```mermaid
graph TD
    Finding[Unencrypted DB] --> ROI[Score Impact: +15%]
    Finding --> Effort[Effort: Low]
    ROI & Effort --> Rank[Priority: 1 - Fix Now]
```

### 19. Executive Scorecard Model
The high-level "Stoplight" report for the Board.

```mermaid
graph TD
    Identity[Identity: GREEN] --> Exec[Exec Scorecard]
    Network[Network: AMBER] --> Exec
    Data[Data: RED] --> Exec
```

### 20. Board Reporting Workflow
The multi-stage review process for official risk reporting.

```mermaid
graph LR
    App[System Data] --> SecMgr[Security Mgr Review]
    SecMgr --> CISO[CISO Approval]
    CISO --> Board[Board Risk Committee]
```

### 21. ISO 27001 Score Mapping
Aggregating technical controls into Annex A domains.

```mermaid
graph TD
    ISO[ISO 27001] --> A9[A.9 Access Control]
    A9 --> A942[MFA: Passed]
```

### 22. NIST CSF Maturity Model
Mapping technical state to the Identify/Protect/Detect/Respond/Recover pillars.

```mermaid
graph LR
    Protect[Protect: 82%] --> CSF[NIST CSF Maturity]
    Detect[Detect: 65%] --> CSF
```

### 23. PCI DSS Scorecard Flow
Validating readiness for the annual QSA audit.

```mermaid
graph LR
    Comp[Component 8.3] --> PCI[PCI Scorecard]
    Comp[Component 10.2] --> PCI
```

### 24. SOC 2 Readiness Score
Measuring alignment with the Trust Services Criteria.

```mermaid
graph TD
    Security[Security: 95%] --> SOC2[SOC 2 Readiness]
    Confid[Confidentiality: 88%] --> SOC2
```

### 25. CIS Benchmark Alignment
The foundation of technical configuration hardening.

```mermaid
graph LR
    Azure[CIS Azure 1.4] --> Score[Benchmark Score: 92%]
```

### 26. GDPR Governance Score Model
Measuring privacy compliance and residency validation.

```mermaid
graph TD
    Residency[Data Residency] --> GDPR[GDPR Score]
    Consent[Consent Management] --> GDPR
```

### 27. HIPAA Control Maturity
The specific metrics for healthcare data protection.

```mermaid
graph LR
    HIPAA[HIPAA Technical] --> Audit[Audit Controls: 164.312]
```

### 28. SOX Compliance Workflow
Validation of financial reporting system controls.

```mermaid
graph TD
    Access[User Access Review] --> SOX[SOX Scorecard]
```

### 29. Multi-framework Crosswalk Flow
Normalizing one technical check across multiple regulations.

```mermaid
graph LR
    MFA[MFA Check] --> ISO[ISO: A.9.4.2]
    MFA --> PCI[PCI: 8.3]
    MFA --> NIST[NIST: AC-1]
```

### 30. Continuous Assurance Model
Moving from point-in-time audits to real-time verification.

```mermaid
graph TD
    Scan[Hourly Scan] --> Validate[Policy Check]
    Validate --> Score[Score Update]
```

### 31. OIDC / SSO Auth Flow
Securing the GRC control plane.

```mermaid
sequenceDiagram
    User->>Portal: Login
    Portal->>IDP: Redirect
    IDP-->>User: Auth Grant
```

### 32. RBAC Model
Granular governance permissions.

```mermaid
graph TD
    Admin[Governance Admin] --> FullAccess
    Viewer[Business Unit Lead] --> BUScoresOnly
```

### 33. Secrets Management Flow
Securing cloud credentials and API keys.

```mermaid
graph LR
    Worker[Scanner] --> Vault[Vault]
    Vault -->|Provide| Key[ReadOnly API Key]
```

### 34. Audit Logging Architecture
Ensuring every score change and override is recorded.

```mermaid
graph TD
    Action[Override Score] --> Log[Immutable Audit Event]
```

### 35. Network Boundary Model
Isolating the risk intelligence platform.

```mermaid
graph LR
    Internet[Internet] --> WAF[WAF]
    WAF --> VNet[Private Governance VNet]
```

### 36. Metrics Pipeline
Monitoring the performance of the scoring engine.

```mermaid
graph LR
    Engine[Scoring Engine] --> Prom[Prometheus]
```

### 37. Logging Architecture
Standardized logging for the GRC stack.

```mermaid
graph TD
    App[FastAPI] --> ELK[ELK Stack]
```

### 38. Tracing Model
Distributed tracing for cross-cloud assessments.

```mermaid
sequenceDiagram
    API->>Worker: Trigger Score Recalc
    Worker->>DB: Fetch History
```

### 39. SLA Monitoring Flow
Guaranteeing the freshness of compliance data.

```mermaid
graph LR
    Probe[Health Probe] --> Dash[SLA Dashboard]
```

### 40. Release Pipeline Workflow
Automated delivery of the scorecard platform.

```mermaid
graph LR
    Git[Code Push] --> GHA[GitHub Actions]
    GHA --> EKS[EKS Deploy]
```

### 41. Monthly Governance Review
The operational cadence for leadership alignment.

```mermaid
graph LR
    Score[Current Score] --> Review[Review Meeting]
    Review --> Action[Remediation Plan]
```

### 42. BU Ownership Matrix
Mapping resources to specific department leaders.

```mermaid
graph TD
    AccountID[AWS: 12345] --> BU[BU: Finance]
```

### 43. Escalation Workflow
Responding to critical score regressions.

```mermaid
graph LR
    Drop[Score -15%] --> Pager[PagerDuty: Risk Lead]
```

### 44. Remediation Program Roadmap
Tracking the strategic multi-quarter postural improvement.

```mermaid
graph TD
    Q1[Q1: Identity] --> Q2[Q2: Network]
```

### 45. Executive KPI Review Cycle
The quarterly cadence for Board reporting.

```mermaid
graph LR
    Data[Aggregated Data] --> Board[Board Pack]
```

---

## 🔬 Scoring Methodology

### 1. Weighted Domain Scoring
We do not treat all controls equally. A failure in **Identity (MFA)** is weighted 10x higher than a failure in **Naming Conventions**. This ensures the score accurately reflects the true security risk.

### 2. Business Unit Accountability
Scores are partitioned by the organizational hierarchy. This creates internal benchmarking and ensures that high-performing teams are recognized while lagging departments are identified for additional support.

---

## 🚦 Getting Started

### 1. Prerequisites
- **Terraform** (v1.5+).
- **Docker Desktop**.
- **Python 3.11+**.

### 2. Local Setup
```bash
# Clone the repository
git clone https://github.com/Devopstrio/compliance-scorecard.git
cd compliance-scorecard

# Setup environment
cp .env.example .env

# Start services
docker-compose up --build
```
Access the GRC portal at `http://localhost:3000`.

---

## 🛡️ Governance & Security
- **Immutable Audit Trails**: Every score recalculation and exception request is logged with a cryptographic hash.
- **Data Residency**: Regional databases ensure that compliance metadata remains within the legal jurisdiction.
- **Encrypted Portfolio**: All framework definitions and BU mappings are encrypted with AES-256.

---
<sub>&copy; 2026 Devopstrio &mdash; Engineering the Future of Strategic Governance.</sub>
