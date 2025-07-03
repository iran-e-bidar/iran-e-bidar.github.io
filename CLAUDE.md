# Iran-e Bidar - Constitutional Democracy Platform

## Mission Statement
Iran-e Bidar is a collaborative platform for constitutional discourse and civic participation, enabling transparent, community-driven development of constitutional amendments through democratic processes.

## Platform Philosophy
- **Transparency**: All processes are open and auditable
- **Participation**: Low barrier to entry, GitHub account sufficient to start
- **Democracy**: 75% approval threshold for amendments
- **Bilingual**: Equal support for English and Persian languages
- **Quality**: Multi-stage review and refinement process

## Democratic Process Flow

### 5-Stage Amendment Process
1. **Discuss** → Open dialogue and idea development
2. **Propose** → Formal amendment drafting  
3. **Review** → Multi-stakeholder evaluation
4. **Approve (75%)** → Community voting and consensus
5. **Release** → Publication and implementation

### Process Example Path:
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

## Site Architecture

### Frontend Technology Stack
- **Jekyll**: Static site generator
- **GitHub Pages**: Hosting and deployment
- **Modern CSS**: Custom properties, grid, flexbox
- **Responsive Design**: Mobile-first approach
- **Progressive Enhancement**: Core functionality works without JavaScript

### CSS Architecture (Refactored)
```
assets/css/
├── main.css              # Entry point with imports
├── reset.css             # Modern CSS reset
├── variables.css         # Design system tokens
├── typography.css        # Type scale and text styles
├── layout.css           # Base layout and grid systems
├── rtl.css              # Persian/RTL language support
├── responsive.css       # Mobile-first responsive design
├── utilities.css        # Utility classes
└── components/
    ├── process-flow.css    # Hero process flow component
    ├── action-cards.css    # Homepage action cards
    └── stage-pages.css     # Stage explanation pages
```

### Page Structure
```
Site Root
├── en/                   # English language pages
│   ├── index.html        # Homepage
│   ├── about.html        # About page  
│   ├── discussions.html  # Discussions listing
│   ├── issues.html       # Issues listing
│   ├── projects.html     # Projects listing
│   ├── wiki.html         # Wiki listing
│   ├── pulls.html        # Pull requests listing
│   ├── releases.html     # Releases listing
│   ├── discuss-stage.html    # Process stage explanation
│   ├── propose-stage.html    # Process stage explanation
│   ├── review-stage.html     # Process stage explanation
│   ├── approval-process.html # Voting process explanation
│   └── release-stage.html    # Release process explanation
├── fa/                   # Persian language pages (mirrors en/)
├── _layouts/
│   └── default.html      # Base template
├── assets/css/           # Stylesheets (see CSS Architecture)
├── scripts/              # Testing and automation scripts
└── screenshots/          # Visual testing screenshots
```

## Testing Infrastructure

### Automated Testing Scripts
Located in `/scripts/` directory:

#### Link Testing
- **`test-links.js`**: Validates all internal navigation links
- **`test-approval-links.js`**: Specifically tests process flow clickability
- **`verify-approval-links.js`**: Verifies approval process integration
- **`test-all-stages.js`**: Comprehensive stage page testing

#### Visual Testing  
- **`test-screenshots.js`**: Captures homepage and main page screenshots
- **`test-approval-pages.js`**: Screenshots approval process pages
- **`screenshot-stage-page.js`**: Individual stage page screenshots

#### Usage Example
```bash
# Test all navigation links
node scripts/test-links.js

# Visual regression testing
node scripts/test-screenshots.js

# Comprehensive stage testing
node scripts/test-all-stages.js
```

### Screenshot Testing Process
1. **Puppeteer Automation**: Headless Chrome browser automation
2. **Multi-language Testing**: Both English and Persian pages
3. **Responsive Testing**: Desktop viewport (1200x800)
4. **Full Page Capture**: Complete page screenshots for review
5. **Manual Review**: Visual inspection for layout issues

### Quality Assurance Checklist
- ✅ All internal links functional
- ✅ Process flow fully interactive  
- ✅ RTL/Persian rendering correct
- ✅ Responsive design working
- ✅ Visual hierarchy clear
- ✅ Accessibility standards met

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

## User Experience Design

### Information Architecture
- **Progressive Disclosure**: Start simple, reveal complexity on demand
- **Two Primary Actions**: Join Discussions, Propose Changes
- **Educational Gateway**: Process flow links to detailed explanations
- **Bilingual Equity**: Equal treatment of English and Persian content

### Navigation Patterns
1. **Homepage**: Overview and primary actions
2. **Process Flow**: Interactive 5-step visual guide
3. **Stage Pages**: Detailed explanations of each process step
4. **Content Pages**: Lists of discussions, issues, projects, etc.
5. **GitHub Integration**: Seamless transition to contribution

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: All interactive elements accessible
- **Screen Readers**: ARIA labels and descriptions where needed
- **Color Contrast**: WCAG AA compliance
- **RTL Support**: Proper Persian text rendering and layout

## Development Workflow

### Local Development
```bash
# Start Jekyll server
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Run link tests
node scripts/test-links.js

# Generate screenshots
node scripts/test-screenshots.js

# Test specific functionality
node scripts/test-all-stages.js
```

### Deployment Process
1. **GitHub Pages**: Automatic deployment on push to main
2. **Jekyll Build**: Static site generation
3. **Asset Processing**: CSS compilation and optimization
4. **Testing**: Automated link and visual testing
5. **Monitoring**: Manual review of generated screenshots

### Code Organization Principles
- **Modular CSS**: Component-based architecture
- **Design System**: Consistent tokens and patterns
- **Maintainable**: Clear naming conventions and documentation
- **Scalable**: Easy to add new pages and components
- **Performance**: Minimal redundancy and optimized loading

## Visual Design System

See `/docs/visual-grammar.md` for comprehensive design documentation including:
- Color palette and usage guidelines
- Typography scale and hierarchy
- Spacing system and layout patterns
- Component library and variants
- RTL/Persian language adaptations
- Responsive design breakpoints
- Accessibility considerations

## Future Enhancements

### Planned Features
- **GitHub API Integration**: Dynamic content from GitHub
- **Translation Automation**: Google Translate API workflow
- **Search Functionality**: Site-wide content search
- **Commenting System**: Integrated discussion capabilities
- **Analytics**: Usage tracking and insights

### Technical Improvements
- **Performance**: Critical CSS inlining
- **SEO**: Enhanced meta tags and structured data
- **PWA**: Service worker and offline functionality
- **Security**: Content Security Policy headers

## Contribution Guidelines

### For Developers
1. **Follow CSS Architecture**: Use established component patterns
2. **Test Changes**: Run link and visual tests before submitting
3. **Document Updates**: Update this file for architectural changes
4. **Accessibility**: Ensure new features meet accessibility standards

### For Content
1. **Bilingual Requirement**: All content must be available in both languages
2. **Consistent Tone**: Professional, transparent, inclusive
3. **Clear Information Hierarchy**: Use established typography patterns
4. **Link Testing**: Verify all internal and external links function

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