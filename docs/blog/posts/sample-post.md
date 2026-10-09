---
date: 2026-10-07
authors:
  - alfonso
categories:
  - Power BI
description: Sample post showing how articles will look on this site.
---

# Three questions to ask before you build a dashboard

!!! warning "Sample post"
    This is placeholder content so you can see the blog layout. Replace it before the site goes live.

Most dashboards that go unused were built before anyone agreed what they were for. These three questions take ten minutes and save weeks.

<!-- more -->

## 1. What decision will this change?

If nobody can name a decision, the report is a reference table. That may still be worth building, but it should be scoped as one.

## 2. Who looks at it, and how often?

A page checked every morning needs to load fast and say one thing. A page reviewed monthly can afford more depth.

## 3. What would make you distrust the number?

Ask this early. The answer tells you which reconciliation checks to build into the model.

```dax
Occupancy % =
DIVIDE ( [Occupied Units], [Total Units] )
```

Code blocks like the one above come with syntax highlighting and a copy button.
