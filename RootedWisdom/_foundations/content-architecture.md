# The Rooted Wisdom — Content Architecture
*Vault Structure · Frontmatter Schema · Publishing Workflow*

This document is the foundation of the site. It defines how content is organized in the Obsidian vault, what metadata each content type carries, and how that content flows through 11ty to the live site. When in doubt about where something lives or how to tag it — come back here.

---

## 01  Vault Folder Structure

The vault has two zones: publish and private. The 11ty project reads only from the `/publish` folder. Everything else — drafts, planning, source material — stays local and never touches the site.

```
rooted-wisdom-vault/
│
├── publish/                    ← 11ty reads this folder only
│   ├── library/                ← all member-facing content
│   │   ├── herbs/              ← herb monographs
│   │   ├── body/               ← body system monographs
│   │   ├── wisdom-studies/     ← devotional / seasonal / spiritual essays
│   │   ├── workshop-replays/   ← archived live workshop recordings
│   │   └── courses/            ← sequential learning journeys
│   │       └── [course-slug]/  ← one folder per course
│   │           ├── index.md    ← course overview page
│   │           ├── 01-[slug].md
│   │           ├── 02-[slug].md
│   │           └── 03-[slug].md
│   └── site/                   ← public brochure pages
│       ├── index.md            ← homepage
│       ├── about.md
│       ├── workshops/          ← upcoming workshop announcements
│       ├── retreats/
│       └── apprenticeship.md
│
├── drafts/                     ← works in progress, never published
│   ├── herbs/
│   ├── wisdom-studies/
│   └── courses/
│
├── source-material/            ← existing vault content, mined over time
│   ├── from-learning-vault/
│   └── from-teaching-vault/
│
└── planning/                   ← business thinking, not content
    ├── content-calendar.md
    ├── membership-tiers.md
    ├── tag-registry.md
    └── site-roadmap.md
```

> The `publish/library` folder is fully gated. `publish/site` is fully public. This maps directly to how Memberstack will protect routes.

---

## 02  Content Types & Frontmatter Schemas

Each content type carries a consistent set of frontmatter fields. 11ty reads these fields to build navigation, filtering, cross-references, and layouts. Consistency here is what makes the library feel coherent rather than chaotic.

All content files begin with a YAML frontmatter block between triple-dashes.

### Herb Monographs

The encyclopedia layer. Reference documents — written to return to, not consume once. The most cross-referenced content type in the library, appearing in body system pages, wisdom studies, and course materials.

**Location:** `publish/library/herbs/[herb-slug].md`  
**Access:** `herb-curios` and above

```yaml
---
title: Rose                          # common name
latin: Rosa spp.                     # botanical name
family: Rosaceae                     # plant family
content_type: herb                   # always 'herb'
access: herb-curios                  # herb-curios | foundations | apprentice
aliases: [rosehip, wild rose]        # alternate names for search
parts_used: [petals, hips, leaves]   # plant parts covered
actions: [nervine, astringent,       # herbal actions
          anti-inflammatory]
body_systems: [cardiovascular,       # links to body system monographs
               nervous, skin]
traditions: [Ayurveda, TCM,          # named traditions
             West African, European]
energetics: [cooling, moistening]    # herbal energetics
seasons: [spring, summer]            # when most relevant
tags: [rose, nervine, heart, beauty] # for filtering/search
free_preview: false                  # true overrides access for this one piece
status: published                    # draft | published | archived
date: 2025-03-01
---
```

---

### Body System Monographs

The structural layer. These documents map how the body works through a holistic and traditional lens, then cross-reference the herbs that support each system. A body system page is partly written content, partly a curated index.

**Location:** `publish/library/body-systems/[system-slug].md`  
**Access:** `herb-curios` and above

```yaml
---
title: The Respiratory System
content_type: body-system
slug: respiratory
access: herb-curios
related_herbs: [mullein, elderberry,  # links to herb monographs
                thyme, elecampane]
related_wisdom: [slug-of-essay]       # optional links to wisdom studies
seasons: [autumn, winter]
tags: [lungs, breathing, immunity, inflammation]
free_preview: false
status: published
date: 2025-04-01
---
```

---

### Wisdom Studies

The contemplative layer. Devotional essays that weave spirituality, ancestral lineage, and herbalism together. Seasonal and cyclical — some will recur annually. They do not need to be comprehensive; they need to be true.

**Location:** `publish/library/wisdom-studies/[essay-slug].md`  
**Access:** `herb-curios` and above

```yaml
---
title: Rose and the Heart's Knowing
content_type: wisdom-study
access: aprentice
season: spring                        # spring | summer | autumn | winter
cycle: annual                         # annual | one-time
themes: [heart, grief, ancestral,     # thematic tags
         beauty, opening]
related_herbs: [rose, hawthorn]
related_body_systems: [cardiovascular, nervous]
tags: [devotional, seasonal, heart, spiritual-practice]
free_preview: false
status: published
date: 2025-04-15
---
```

---

### Workshop Replays

The archival layer. Recordings of live events, preserved in the library for members who could not attend or want to return to the material. Also available as one-off access for workshop ticket buyers.

**Location:** `publish/library/workshop-replays/[event-slug].md`  
**Access:** `herb-curios` and above, or `workshop-[slug]` for individual buyers

```yaml
---
title: Spring Allergies — Herbal Support
content_type: workshop-replay
access: herb-curios
workshop_access: workshop-spring-allergies  # one-off buyers; must match Memberstack plan name
event_date: 2025-03-22
duration_minutes: 90
video_url: https://vimeo.com/[id]
handout_url: /assets/[filename].pdf   # optional
related_herbs: [nettle, goldenrod, eyebright]
related_body_systems: [respiratory, immune]
tags: [allergies, spring, replays]
status: published
date: 2025-03-29                      # date added to library
---
```

> The `workshop_access` slug must match the Memberstack plan name created for that workshop's ticket buyers. Keep a record of these in `planning/membership-tiers.md`.

---

### Courses

The journey layer. A curated sequence of lessons that builds understanding progressively. Each course lives in its own subfolder. The course index page provides the overview and syllabus — individual lesson files contain the actual content.

**Access:** `foundations` and above

#### Course Index (index.md)

**Location:** `publish/library/mini-courses/[course-slug]/index.md`

```yaml
---
title: Spring Tonics — A Course in Seasonal Renewal
content_type: course
slug: spring-tonics
access: foundations
description: A four-lesson journey through the herbs,
             traditions, and formulas of spring renewal.
lesson_count: 4
duration_total: "60–75 minutes"
related_herbs: [dandelion, nettle, cleavers, burdock]
related_body_systems: [digestive, lymphatic]
tags: [spring, detox, tonics, seasonal]
status: published
date: 2025-03-01
---
```

#### Course Lessons

**Location:** `publish/library/mini-courses/[course-slug]/[##-lesson-slug].md`

```yaml
---
title: "Lesson 2: The Bitter Herbs"
content_type: lesson
course: spring-tonics                 # must match parent course slug
lesson_number: 2
access: foundations
duration_minutes: 18
related_herbs: [dandelion, burdock, yellow dock]
tags: [bitter, digestion, liver]
status: published
date: 2025-03-01
---
```

> Lesson filenames must begin with a zero-padded number (`01-`, `02-`, etc.) so 11ty can sort them correctly for next/previous navigation. Lesson IDs for progress tracking are derived from course slug + lesson number — e.g. `spring-tonics-02`. Name files intentionally from the start; renaming them later breaks progress tracking for members already in the course.

---

### Site / Brochure Pages

Public-facing pages. No membership required. Events and workshops are their own content type so they can be queried for date-based display.

**Location:** `publish/site/[folder]/[slug].md`

```yaml
---
title: Spring Allergies Workshop
content_type: event                  # event | page | retreat
event_date: 2025-03-22
event_time: "6:00 PM PT"
format: hybrid                       # virtual | in-person | hybrid
location: "Crown & Core, Bellevue WA"
ticket_url: https://...
related_herbs: [nettle, goldenrod]
tags: [workshop, spring, allergies]
status: published                    # draft | published | past
date: 2025-02-01
---
```

---

## 03  Access Tiers

All paid members have access to the full library at their tier and above. Workshop access is a lateral grant — it opens one specific replay and nothing else.

| Tier | Monthly cost | Content access |
|---|---|---|
| `herb-curios` | $15/mo | Herb monographs, body system monographs, wisdom studies, workshop replays |
| `foundations` | $100/mo | Everything above + mini courses |
| `apprentice` | Application-based | Everything + direct mentorship |
| `workshop-[slug]` | Per event | That one workshop replay only + upgrade prompt |

**Access field values** used in frontmatter: `herb-curios` · `foundations` · `apprentice`

The `free_preview: true` flag on any individual piece of content overrides the access level for that one piece — useful for public samples of the library without changing the overall tier structure.

---

## 04  Tagging System

Tags are the connective tissue of the library. They enable filtering, discovery, and cross-referencing without needing a database. Use them consistently — a tag is only useful if it appears across multiple pieces of content.

| Category | Examples | Notes |
|---|---|---|
| Herb name | rose, nettle, mullein | Common name, lowercase. One tag per herb. |
| Body system | respiratory, cardiovascular, nervous, digestive, lymphatic, skin, immune, reproductive | Standardize these — they link to body system monographs. |
| Herbal action | nervine, adaptogen, astringent, demulcent, bitter, diaphoretic | Use established herbal terminology. |
| Season | spring, summer, autumn, winter | For seasonal content and filtering. |
| Theme | grief, heart, ancestral, opening, protection, clarity | For wisdom studies. More evocative, less clinical. |
| Format | replay, course, essay, monograph | Mirrors content_type — useful for UI filtering. |
| Tradition | Ayurveda, TCM, West African, Indigenous, European | Name traditions clearly and respectfully. |

> Keep the master tag list in `planning/tag-registry.md`. Before adding a new tag, check the registry. A messy tag system is harder to fix than a messy folder structure.

---

## 05  Publishing Workflow

Writing happens in Obsidian. The site deploys automatically when changes are pushed to GitHub. No CMS dashboard, no publish button in a third-party tool — just your vault.

**Day-to-day:**

```
1. Write in drafts/                  ← all new content starts here
2. Add frontmatter when ready        ← use Templater templates
3. Move to publish/library/[type]/   ← this is the publish action
4. Set status: published
5. Commit and push to GitHub         ← Obsidian Git handles this
6. Netlify auto-deploys              ← live within ~60 seconds
```

**Obsidian plugins to install:**

- **Obsidian Git** — auto-commits and pushes the vault to GitHub on a schedule or on demand. This is the publish trigger.
- **Templater** — creates new notes with pre-filled frontmatter. Set up one template per content type so frontmatter is never written from scratch.

> Set Obsidian Git to auto-push every 30 minutes, or use the manual push command when you want to publish immediately. The vault-to-site pipeline is: save → push → done.

**Content status lifecycle:**

```
draft      ← file lives in drafts/, not yet in publish/
published  ← file is in publish/, status: published, live on site
archived   ← file stays in publish/ but hidden from listings
             (useful for past workshops, retired content)
```

---

## 06  Cross-Referencing Conventions

Cross-references are what make the library feel like a living body of knowledge rather than a collection of isolated articles. Be generous — when an herb is mentioned in a wisdom study, link it. When a body system appears in a course, reference the monograph.

**In frontmatter:** use the `related_herbs`, `related_body_systems`, and `related_wisdom` fields. 11ty uses these to generate Related sections at the bottom of each page automatically.

**In body text:** use Obsidian wikilinks. The `eleventy-plugin-wikilinks` package converts them automatically during the site build.

```
# Obsidian wikilinks (preferred in the vault):
Rose ([[rose]]) has long been worked with for matters of the heart.

# The wikilinks plugin converts [[rose]] → /library/herbs/rose/
# Configure this in .eleventy.js during site build setup
```

---

## 07  Course Progress Tracking

Progress tracking for mini courses is member-facing only — it helps students know where they left off and what they have completed. There is no admin view of this data. It lives in the member's Memberstack profile.

**How it works:**

```
1. Member visits a lesson page
2. A 'Mark complete' button appears at the bottom
3. On click: a small JS function writes the lesson ID
   to a custom field in the member's Memberstack profile
4. On return visit: the function reads that field and
   marks the lesson complete
5. The course index page reads all lesson IDs and
   shows a progress indicator
```

> This approach requires no backend, no database, and no third-party service beyond Memberstack. It works across devices because it's tied to the member account, not the browser.

---

## 08  Full Stack at a Glance

| Tool | Role | Notes |
|---|---|---|
| Obsidian | Content authoring | The vault IS the CMS. |
| Obsidian Git | Publishing trigger | Pushes vault changes to GitHub automatically. |
| GitHub | Version control | Stores the site source. Netlify watches this repo. |
| 11ty | Static site generator | Reads the `publish/` folder, builds the site. |
| Netlify | Hosting + deployment | Free tier. Auto-deploys on every GitHub push. |
| Memberstack | Auth + gating | Handles member login, payment, and content access. |
| Hyvor Talk | Comments | Embedded on library pages. Handles reply notifications natively. |
| Buttondown / Resend | Email notifications | Sends new content emails when you publish. |
| Discord (optional) | Community chat | Lightweight async discussion. Members set own notifications. |

*Estimated monthly cost at launch: $0–$15 (Memberstack starter tier, everything else is free at small scale). Scales gracefully as membership grows.*
