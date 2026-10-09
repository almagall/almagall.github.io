---
title: Schedule forecasting model
hide:
  - navigation
description: A machine learning model that forecasts construction schedule outcomes and reports P50, P80, and P90 ranges in Power BI.
---

# Schedule forecasting model

!!! abstract "At a glance"
    **Context**: M.S. Data Science capstone project  
    **Problem**: Forecasting cost and timeline outcomes for construction projects  
    **Deliverable**: A trained model and a Power BI front end for exploring forecasts  
    **Role**: Sole author, from problem framing through deployment design

## Challenge

Construction schedules are planned to a single date, but real projects finish across a range. A planner needs to know how likely a date is, not just what the plan says.

## Approach

- **Data.** The model was trained on more than 50 completed project schedules exported from Primavera P6.
- **Model.** Gradient-boosted trees (XGBoost), chosen because they handle mixed project features well and their behaviour can be explained.
- **Ranges, not single numbers.** Results are reported as P50, P80, and P90: the outcome you would expect half the time, four times in five, and nine times in ten. This is the standard a project controls team can defend.
- **Getting it in front of people.** Rather than calling the model live, forecasts are scored in advance across a grid of scenarios, stored in a Microsoft Fabric lakehouse, and explored in Power BI with slicers.

## Architecture

<div class="flow" markdown>
<span>Completed P6 schedules</span>
<span>Feature preparation</span>
<span>XGBoost model</span>
<span>Pre-scored scenario grid</span>
<span>Fabric lakehouse</span>
<span>Power BI report with slicers</span>
</div>

## Why this matters for client work

The same pattern applies outside construction: wherever a team plans to a single number and has history to learn from, a model can put an honest range around it and a report can make that range usable.

## Tech stack

- Python and XGBoost
- Microsoft Fabric (lakehouse)
- Power BI

<div class="grid cards" style="margin-top: 3rem" markdown>

-   :material-calendar-check:{ .lg .middle } Not sure what you need yet? That is what the call is for.

    ---

    Book a free 30-minute intro call. Tell me what you are trying to answer with your data, and I will tell you honestly whether I can help and what it would take.

    [Book a free intro call :material-arrow-top-right:](https://cal.com/alfonso-magallon/intro-call){ .md-button .md-button--primary }

</div>
