Actual Path Taken:
  1. Discussion: Philosophy debate (2 months)
  2. Issue #156: Specific proposal created
  3. Project: Amendment tracking started
  4. Wiki: Research documented
  5. Pull Request: Text changes proposed
  6. Community stuck at 67% approval (need 75%)
  7. Back to Discussion: Refining proposal
  8. Modified Issue #156: Updated proposal
  9. New Pull Request: Revised text
  10. Release v2.5: Success!

  Alternative paths that could have happened:
  - Expert could have initiated via Issue first
  - Could have been urgent if government censorship crisis
  - Could have failed and been archived
  - Could have split into multiple smaller amendments

 Project-Issue Relationships

  1. One Project → Multiple Issues

  Most common for constitutional work
  Project: "Article 19 Digital Rights Amendment"
  ├── Issue #156: Add digital assembly rights
  ├── Issue #157: Define "digital platform" legally
  ├── Issue #158: Address enforcement mechanisms
  └── Issue #159: International law compatibility

  2. One Issue → Multiple Projects

  Complex issues affecting multiple areas
  Issue #200: "Women's rights need constitutional protection"
  ├── Project: "Gender Equality Amendment"
  ├── Project: "Economic Rights Update"
  └── Project: "Education Access Reform"

  3. Project Without Issues

  High-level planning
  Project: "Constitutional Review 2025"
  ├── Direct tasks (not issues)
  ├── Milestones
  └── General coordination

  4. Issues Without Projects

  Simple, standalone problems
  Issue #300: "Typo in Article 15 Farsi translation"
  Status: Simple fix, no project needed

  For Constitutional Work, I'd Recommend:

  Thematic Projects

  Project: "Digital Rights Package"
  ├── Issue: Article 19 (Assembly)
  ├── Issue: Article 22 (Privacy)
  ├── Issue: Article 24 (Communication)
  └── Issue: Article 26 (Information access)

  Process Projects

  Project: "Community Engagement Workflow"
  ├── Issue: Improve voting system
  ├── Issue: Better expert review process
  └── Issue: Translation coordination

  Think of Projects as organizing containers that can hold Issues, but don't have to.

  Would you like me to show you how to structure projects for your constitutional platform?

## Discussions Integration Plan

**GitHub Action Workflow**:
- Trigger: Discussion events + hourly schedule + manual
- Fetch discussions via GitHub API
- Use Google Translate API for bilingual support
- Generate `_data/discussions.yml` with both `en` and `fa` versions
- Auto-commit triggers GitHub Pages rebuild

**Site Structure**:
- `/en/discussions/` shows English versions (translated if needed)
- `/fa/discussions/` shows Persian versions (translated if needed)
- Original language indicated with badge

**Translation**: Google Translate API key stored in GitHub secrets, translations cached to avoid re-processing unchanged content.

> what elements a project contain?

⏺ GitHub Project Elements (New Projects Beta)

  Core Structure

  Project: "Article 19 Digital Rights Amendment"
  ├── Views (different ways to see the data)
  ├── Items (Issues, Pull Requests, Draft items)
  ├── Fields (custom properties)
  └── Workflows (automation rules)

  ---
  1. Views

  Different perspectives on the same data

  📋 Table View:
  | Title | Status | Priority | Assignee | Due Date |
  |-------|--------|----------|----------|----------|
  | Issue #156 | In Progress | High | @legal_expert | Mar 15 |

  📊 Board View (Kanban):
  [Backlog] → [In Review] → [Community Vote] → [Done]

  📈 Roadmap View:
  Timeline showing when amendments will be completed

  📋 List View:
  Simple list with filtering options

  ---
  2. Items

  What goes into a project

  Issues

  Issue #156: "Add digital assembly to Article 19"
  - Description, comments, labels
  - Automatically synced with repository

  Pull Requests

  PR #67: "Article 19 amendment implementation"
  - Code changes, reviews, status
  - Automatically synced

  Draft Items

  Draft: "Research international digital assembly laws"
  - Project-only tasks (not repository issues)
  - Quick notes and todos

  ---
  3. Custom Fields

  Add metadata to track what matters

  Built-in Fields

  - Status: Todo, In Progress, Done (customizable)
  - Assignees: Who's working on it
  - Labels: From connected repositories
  - Milestone: Repository milestones
  - Repository: Which repo it belongs to

  Custom Fields You Can Add

  Constitutional Priority: High/Medium/Low
  Article Number: 1, 2, 3... 194
  Amendment Type: Addition, Modification, Removal
  Community Support: 0-100%
  Expert Review Status: Pending, Approved, Rejected
  Language: Farsi, English, Both
  Legal Complexity: Simple, Moderate, Complex
  Target Release: v2.5, v2.6, v3.0

  ---
  4. Workflows (Automation)

  Rules that update fields automatically

  Example Workflows

  When: Item is added to project
  Then: Set status to "Backlog"

  When: Issue gets 100+ community reactions
  Then: Set "Community Support" to "High"

  When: Pull Request is merged
  Then: Set status to "Done", move to "Completed" column

  When: Expert adds "approved" label
  Then: Set "Expert Review Status" to "Approved"

  ---
  5. Project Settings

  General:
  ├── Name: "Article 19 Digital Rights Amendment"
  ├── Description: "Tracking digital assembly rights work"
  ├── README: Detailed project explanation
  └── Visibility: Public/Private

  Access:
  ├── Admin: Constitutional committee members
  ├── Write: Community moderators
  └── Read: All community members

  Templates:
  └── Save as template for future amendments

  ---
  Real Constitutional Example

  Project: "Economic Justice Amendment Package"

  Views:
  ├── 📋 Overview (Table): All items with status
  ├── 📊 By Article (Board): Grouped by constitutional article
  ├── 📈 Timeline (Roadmap): When each amendment goes live
  └── 🎯 Priority (List): Filtered by community urgency

  Items:
  ├── Issue #201: "Article 43 - Right to work needs update"
  ├── Issue #202: "Article 44 - Economic planning modernization"
  ├── PR #89: "Implement Article 43 job guarantee language"
  └── Draft: "Research Nordic economic rights models"

  Custom Fields:
  ├── Article Number: 43, 44, 45
  ├── Community Support: 87%, 92%, 45%
  ├── Expert Status: Approved, Under Review, Rejected
  ├── Amendment Type: Major, Minor, Technical
  └── Target Date: Jun 2025, Aug 2025, Dec 2025

  Workflows:
  ├── Auto-label items by article number
  ├── Move to "Community Vote" when 75%+ support
  ├── Notify experts when items need review
  └── Archive completed amendments