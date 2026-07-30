# Employee Zola — Complete Functionality Reference

> **Audience:** Marketing suite teams who need to understand every capability employee Zola has.
> For the Bouul marketplace's vendor employees. Examples are concrete — an employee talking to Zola on the job.

---

## Overview

Employee Zola has **15 tools** across **5 capability pillars**, plus a hard-coded constitutional persona that enforces guardrails at the prompt layer (not just the data layer). Everything is scoped to the employee's own data only — Zola cannot see other workers' assignments, pay, or performance.

---

## Pillar 0+1: Identity & Situational Awareness (Foundation)

Zola knows who the employee is, who they work for, and what's on their plate right now — without the employee having to explain it. This context is injected into every conversation automatically (no tool call needed).

| Slice | What Zola knows | Example |
|---|---|---|
| Identity | Your name, role, service qualifications, task capabilities | *"You are Lihle, Lead Photographer at Clay Creations."* |
| Employer | Business name, city, categories, description | *"Clay Creations (Johannesburg) — verified photography studio."* |
| Next job | Upcoming service name, scheduled time, status, instructions | *"Your next job: Wedding Photography at 2026-08-01 10:00 (confirmed). Bring second body and 85mm lens."* |
| Open invites | Number of job invites awaiting response | *"You have 3 open invites to respond to."* |
| Today's shift | Shift start, end, and block type | *"Today's shift: 09:00 to 17:00 (regular)."* |

**RPC:** `rpc_emp_get_snapshot(p_employee_id)` — fetches all the above in one call.
**Guard:** `_emp_assert_self(p_employee_id)` — every RPC first verifies the caller is that employee.

> **Example:** An employee opens Zola without typing anything. Zola already knows their name, employer, next job, and shift. "Good morning Lihle — you're at Clay Creations. Your next job is at 10am at Hyde Park. I see you have 2 open invites. Need anything?"

---

## Pillar 2: Job Execution Support (3 tools)

Read-only tools that explain *this specific job* — what the customer wants, the policies that apply, and the SOP checklist.

### `get_job_detail`
| Field | Value |
|---|---|
| **Tool name** | `get_job_detail` |
| **RPC** | `rpc_emp_get_job_detail` |
| **Event kind** | `job_detail_shown` |
| **Args** | `order_id` (required — the specific job's UUID) |
| **Guard** | `_emp_assert_active_assignment` — only works for jobs assigned to this employee |

**Employee says:** *"What was the booking for this afternoon?"*
**Zola calls:** `get_job_detail(order_id: "...")`
**Zola says:** *"The 2pm booking is a 1-hour Portrait Session at Sandton City. Client: Thandi M. Special instructions: 'Client wants golden-hour lighting, bring reflector.' Job status: confirmed."*

### `get_job_policies`
| Field | Value |
|---|---|
| **Tool name** | `get_job_policies` |
| **RPC** | `rpc_emp_get_job_policies` |
| **Event kind** | `job_policies_shown` |
| **Args** | `order_id` (required) |
| **Guard** | `_emp_assert_active_assignment` |

**Employee says:** *"What's our policy on cancellations for this shoot?"*
**Zola calls:** `get_job_policies(order_id: "...")`
**Zola says:** *"For this job: cancellation notice is 24 hours. Late arrival grace period is 10 minutes. No-show after 20 minutes without contact. Ask your manager about anything unset."*

### `surface_job_sop`
| Field | Value |
|---|---|
| **Tool name** | `surface_job_sop` |
| **RPC** | `rpc_emp_get_job_sop` |
| **Event kind** | `job_sop_shown` |
| **Args** | `order_id` (required) |
| **Guard** | `_emp_assert_active_assignment` |

**Employee says:** *"Walk me through the checklist for the shoot."*
**Zola calls:** `surface_job_sop(order_id: "...")`
**Zola says:** *"Here's your SOP checklist for Portrait Sessions: 1) Set up backdrop + softbox. 2) White balance check. 3) Client consultation (5 min). 4) Shooting (45 min). 5) Review selects with client. 6) Pack down. Need details on any step?"*

### Customer PII rule
Zola shows the **customer's first name + address only** — never the phone number. Coordinate via in-app chat. This is gated to the active-assignment window; outside an active job, Zola doesn't share customer info at all.

---

## Pillar 3: Report & Unblock (5 tools)

The employee reports status changes or problems. **Two tiers:** low-tier (immediate, reversible) and high-tier (hand-off to app, no commit from Zola).

### Low-tier: `report_delay`
| Field | Value |
|---|---|
| **Tool name** | `report_delay` |
| **RPC** | `rpc_emp_report_delay` (fans out to vendor + dispatcher) |
| **Event kind** | `employee_delay_reported` |
| **Args** | `order_id`, `reason`, `estimated_delay_minutes` |

**Employee says:** *"Traffic's bad, I'll be 20 minutes late for the 10am."*
**Zola calls:** `report_delay(order_id: "...", reason: "traffic on M1", estimated_delay_minutes: 20)`
**Zola says:** *"Done — your vendor and dispatcher have been notified of the 20-min delay. I'll let you know if anything changes."*

### Low-tier: `request_dispatch_help`
| Field | Value |
|---|---|
| **Tool name** | `request_dispatch_help` |
| **RPC** | `rpc_emp_request_dispatch_help` |
| **Event kind** | `dispatch_help_requested` |
| **Args** | `order_id`, `issue` (free text describing the problem) |

**Employee says:** *"I can't make it to the Hyde Park shoot — can dispatch cover me?"*
**Zola calls:** `request_dispatch_help(order_id: "...", issue: "Can't make the booked slot — need coverage")`
**Zola says:** *"Help requested — dispatch has been notified. Someone will follow up. Your next job is marked as needing attention."*

### Low-tier: `acknowledge_nudge`
| Field | Value |
|---|---|
| **Tool name** | `acknowledge_nudge` |
| **RPC** | Internal (stages via `rpc_zb_stage_auto_action`) |
| **Event kind** | `nudge_acknowledged` |
| **Args** | `nudge_id` |

**Employee says:** *"Got it, I'll head out now."*
**Zola calls:** `acknowledge_nudge(nudge_id: "...")`
**Zola says:** *"Marked as acknowledged. Your vendor sees you're on it. Safe drive!"*

### High-tier: `mark_en_route` / `mark_arrived`
| Field | Value |
|---|---|
| **Tool name** | `mark_en_route`, `mark_arrived` |
| **RPC** | `rpc_emp_mark_status` |
| **Event kind** | `employee_en_route`, `employee_arrived` |
| **Args** | `order_id` |

### High-tier: `mark_job_complete`
| Field | Value |
|---|---|
| **Tool name** | `mark_job_complete` |
| **RPC** | `rpc_emp_mark_job_complete` |
| **Event kind** | `job_completion_handoff` |
| **Args** | `order_id` |
| **Note** | Zola does NOT claim completion — it hands off to the app for photo-proof. |

**Employee says:** *"Done with the shoot."*
**Zola says:** *"Great work! I can't file completion from here — you'll need photo proof. Tap the button below to open the completion screen in the app."* (shows a hand-off CTA, not auto-complete)

### High-tier: `open_dispute`
| Field | Value |
|---|---|
| **Tool name** | `open_dispute` |
| **RPC** | `rpc_emp_open_dispute` |
| **Event kind** | `dispute_handoff` |
| **Args** | `order_id`, `reason` |

**Employee says:** *"The client is refusing to pay — claims the edit style isn't what they wanted."*
**Zola says:** *"I understand. I can't file the dispute from here — that needs the full dispute form. Tap below to open it in the app and I'll prefill the job details."* (hand-off CTA to dispute screen)

### Clock-in / attendance
Deliberately deferred from Pillar 3 — will be a future increment if needed.

---

## Pillar 4: Personal Growth (1 tool)

The employee can see their own performance metrics — absolutely no peer comparison.

### `get_my_performance`
| Field | Value |
|---|---|
| **Tool name** | `get_my_performance` |
| **RPC** | `rpc_emp_get_my_performance` |
| **Event kind** | `employee_performance_shown` |
| **Args** | `window: "7d" | "30d" | "90d"` (default 30d) |
| **Guard** | `_emp_assert_self` — own numbers only. No Pro gate. |

**Returns:** completion rate, on-time rate, average rating, review count, average time per stage. No team average, no ranking, no percentile.

**Employee says:** *"How am I doing this month?"*
**Zola calls:** `get_my_performance(window: "30d")`
**Zola says:** *"Here's your 30-day performance: Completion 95% · On-time 88% · Rating 4.7★ (22 reviews). You're averaging 35 min per shoot stage. Your on-time rate dipped a bit from last month — want to talk about anything getting in the way?"*

**Comparative wall:** Zola will never say *"you're the fastest"*, *"you're above average"*, *"Sarah has higher ratings"*, or *"your team average is X"*. It only has and only discusses the employee's own numbers.

**Insufficient data (< 3 jobs):** *"Not enough data yet — keep going and check back."*

---

## Pillar 5: HR / Self-Service (4 tools)

Everyday HR questions — pay, workplace policies, and time-off/shift-swap requests. Reads existing schema tables only, no new tables created.

### `get_my_earnings`
| Field | Value |
|---|---|
| **Tool name** | `get_my_earnings` |
| **RPC** | `rpc_emp_get_my_earnings(p_employee_id, p_limit)` |
| **Event kind** | `employee_earnings_shown` |
| **Args** | `limit?: number` (default 6, max 24) |
| **Guard** | `_emp_assert_self` — own rows only. Never another worker's amount or name. |

**Returns:** `{ currency, rows: [{ period_label, amount, status, paid_at }] }` — ordered newest first. `currency` from employer's settings (default ZAR).

**Employee says:** *"How much did I get paid last month?"*
**Zola calls:** `get_my_earnings(limit: 3)`
**Zola says:** *"Latest: Jul 2026 · ZAR 8,500 · paid on 25 Jul. Jun 2026 · ZAR 8,200 · paid. May 2026 · ZAR 8,000 · pending."*

**Empty ledger:** *"There are no payroll records on your account yet."*

**Facts-only rule:** Zola will never say *"is that fair?"*, *"you should ask for a raise"*, *"that seems low compared to..."*, or *"market rate for your role is..."*. If asked, Zola says: *"I can only show what's recorded. If you have concerns about your pay, please speak to your manager or HR."*

**Comparative-comp wall:** The returned JSON is live-grep-checked for any `team`, `rank`, `average`, `total`, or `employee_name` field belonging to another worker. **Zero coworker data can leak.**

### `get_hr_policies`
| Field | Value |
|---|---|
| **Tool name** | `get_hr_policies` |
| **RPC** | `rpc_emp_get_my_policies(p_employee_id)` |
| **Event kind** | `employee_hr_policies_shown` |
| **Args** | None |
| **Guard** | `_emp_assert_self` — reads own vendor's policies + own breaks |

**Returns:** overtime, tipping, late arrival, no-show, emergency/after-hours policies (each as JSON or null), overtime threshold hours, and employee's break schedule.

**Employee says:** *"What's our overtime policy?"*
**Zola calls:** `get_hr_policies()`
**Zola says:** *"Your policies on file: overtime (paid at 1.5x after 45 hrs/week), late arrival (10 min grace period). Tipping, no-show and emergency after-hours are not set — ask your manager."*

**If nothing is set:** *"No HR policies are set yet — ask your manager."*

**No-vendor error:** *"I couldn't find your employer link."*

### `request_time_off`
| Field | Value |
|---|---|
| **Tool name** | `request_time_off` |
| **RPC** | `rpc_emp_submit_schedule_request` |
| **Event kind** | `employee_schedule_request_submitted` |
| **Args** | `reason` (required — composed by the model with structured prefix) |

Zola composes the `reason` as a human-readable line with a bracketed prefix so the vendor dashboard can parse the type at a glance:

| Request type | Composed reason |
|---|---|
| Time off | `[Time off: 2026-08-14] family wedding` |
| Shift swap | `[Shift swap: 2026-08-08 -> 2026-08-09] clinic appointment` |

This creates a **`pending`** row in `employee_schedule_change_requests`. The vendor must approve — Zola cannot approve, deny, or guarantee anything.

**Employee says:** *"I need next Friday off."*
**Zola asks:** *"What's the date and reason?"*
**Employee:** *"14 August — family wedding."*
**Zola calls:** `request_time_off(reason: "[Time off: 2026-08-14] family wedding")`
**Zola says:** *"Submitted! It's pending your manager's approval. You can check the status or cancel it anytime while it's still pending."*

**Empty reason:** Zola will ask for details rather than submitting a blank request.

### `my_requests`
| Field | Value |
|---|---|
| **Tool name** | `my_requests` |
| **RPC** | `rpc_emp_list_schedule_requests` / `rpc_emp_cancel_schedule_request` |
| **Event kind** | `employee_schedule_requests_listed` / `employee_schedule_request_cancelled` |
| **Args** | `cancel_request_id?` (optional — if present, cancels that specific request) |

**Employee (list):** *"What's the status of my requests?"*
**Zola calls:** `my_requests()`
**Zola says:** *"1 request on file: [Time off: 2026-08-14] family wedding — pending."*

**Employee (cancel):** *"Cancel the time-off request for the 14th."*
**Zola calls:** `my_requests(cancel_request_id: "abc-123")`
**Zola says:** *"Cancelled. The request is no longer pending your manager's review."*

**Not cancellable:** Zola will say *"That request can't be cancelled — it may have already been reviewed. Contact your manager."* — only own+still-pending requests can be cancelled.

**No requests:** *"You have no requests on file."*

---

## Guardrails Summary

The persona rules in `EMPLOYEE_PERSONA` enforce these constitutional constraints:

| Rule | Applies to | What Zola cannot do |
|---|---|---|
| **Own data only** | All pillars | See another employee's assignments, pay, performance, or requests |
| **No peer comparison** | Pillar 4 (performance) | Compare to coworkers, team averages, rankings, or percentiles |
| **Facts-only pay** | Pillar 5 (earnings) | Judge fairness, coach negotiation, cite market rates, compare workers |
| **Pending-only requests** | Pillar 5 (time-off) | Approve, deny, or guarantee an outcome — vendor decides |
| **No auto-completion** | Pillar 3 (completion) | Claim a job is done (needs photo-proof in app) |
| **No auto-dispute** | Pillar 3 (disputes) | File a dispute (needs full form in app) |
| **Hand-off tier** | Pillar 3 (completion/dispute) | Commit consequential actions — Zola hands off to the app |
| **Customer PII limited** | Pillar 2 (job detail) | Show phone number — first name + address only, and only on active jobs |
| **No invention** | Pillar 5 (policies) | Fabricate an unset policy — says "ask your manager" |

---

## Tool Inventory (15 tools)

| # | Tool | Pillar | Kind | Read/Write |
|---|---|---|---|---|
| 1 | `report_delay` | 3 | `employee_delay_reported` | Write (immediate fan-out) |
| 2 | `request_dispatch_help` | 3 | `dispatch_help_requested` | Write (notification) |
| 3 | `acknowledge_nudge` | 3 | `nudge_acknowledged` | Write (ack) |
| 4 | `surface_job_sop` | 2 | `job_sop_shown` | Read |
| 5 | `get_job_detail` | 2 | `job_detail_shown` | Read |
| 6 | `get_job_policies` | 2 | `job_policies_shown` | Read |
| 7 | `mark_en_route` | 3 | `employee_en_route` | Write (hand-off) |
| 8 | `mark_arrived` | 3 | `employee_arrived` | Write (hand-off) |
| 9 | `mark_job_complete` | 3 | `job_completion_handoff` | Write (hand-off, no commit) |
| 10 | `open_dispute` | 3 | `dispute_handoff` | Write (hand-off, no commit) |
| 11 | `get_my_performance` | 4 | `employee_performance_shown` | Read |
| 12 | `get_my_earnings` | 5 | `employee_earnings_shown` | Read |
| 13 | `get_hr_policies` | 5 | `employee_hr_policies_shown` | Read |
| 14 | `request_time_off` | 5 | `employee_schedule_request_submitted` | Write (pending only) |
| 15 | `my_requests` | 5 | `employee_schedule_requests_listed` / `employee_schedule_request_cancelled` | Read + Write (cancel only) |

All 15 tools are available on both `inform` and `act` turns (unlike business tools, where commit tools are withheld on `inform`).

---

## Tech Stack

| Layer | Technology |
|---|---|
| Edge function | Deno/TypeScript (`supabase/functions/ai-agent`) |
| RPCs | PostgreSQL plpgsql SECURITY DEFINER |
| Auth guard | `_emp_assert_self(p_employee_id)` — verifies `vendor_employees.id = p_employee_id AND user_id = auth.uid()` |
| Grant pattern | `REVOKE EXECUTE FROM anon, PUBLIC; GRANT EXECUTE TO authenticated, service_role;` |
| Context injection | Pre-fetched `rpc_emp_get_snapshot` on every turn |
| Turn modes | `chat` (no tools), `inform` (read-only), `act` (full tool access) |
