// Generated from docs/tutorials/ — do not edit directly.
// Run the tutorial build script to regenerate.

export interface Tutorial {
  slug: string;
  title: string;
  summary: string;
  sections: string[];
  content: string;
}

export interface TutorialCategory {
  id: string;
  icon: string;
  label: string;
  color: string;
  preamble: string;
  tutorials: Tutorial[];
}

export const TUTORIALS_GETTING_STARTED: Tutorial[] = [
  {
    slug: 'create-your-storefront',
    title: 'How to create your storefront',
    summary: 'Your storefront is your digital business page on Bouul — the first thing customers see when they find you in search. Setting it up correctly is the difference between a look and a booking.',
    sections: ['What you need', 'Steps', 'Why completeness matters', 'Next steps'],
    content: `# How to create your storefront

Your storefront is your digital business page on Bouul — the first thing customers see when they find you in search. Setting it up correctly is the difference between a look and a booking.

## What you need
- Your business name
- A logo (square, at least 512x512px)
- A cover image (16:9 ratio, 1920x1080px recommended)
- A short description of what you do (2-3 sentences)
- Your phone number for booking inquiries

## Steps

1. **Sign up** as a vendor on Bouul. You'll be guided through the registration flow.
2. **Choose your business name** — this is your handle and appears in search results.
3. **Upload your logo** — this appears on your storefront card and in search. Without it, your completeness score drops.
4. **Add a cover image** — the hero image at the top of your storefront. Use a photo of your work, your team, or your workspace.
5. **Write your description** — be specific about what you do, your experience, and your service area. Customers read this before booking.
6. **Add your phone number** — some customers prefer to call before booking. Make it easy for them.
7. **Set your categories** — choose the service categories that match your business. This determines where you appear in search results.

## Why completeness matters

Bouul automatically scores your storefront out of 10. Missing fields like a logo, cover image, or description reduce your score and your discoverability. If your score drops below threshold, an assignment is created for your team to fix it.

## Next steps
- [List your first service](list-your-first-service.md)
- [Add your team](add-your-team.md)
- [Set your working hours](set-working-hours.md)
`,
  },
  {
    slug: 'list-your-first-service',
    title: 'How to list your first service',
    summary: 'Services are what customers book. Each service needs clear pricing, description, and media to convert views into bookings.',
    sections: ['What you need', 'Steps', 'What Bouul checks', 'Next steps'],
    content: `# How to list your first service

Services are what customers book. Each service needs clear pricing, description, and media to convert views into bookings.

## What you need
- Service name (e.g. "Women's Haircut & Blow-dry", "Geyser Installation", "Deep House Clean")
- Base price in ZAR
- Description with what's included
- At least one photo of the service (portfolio-style)
- Duration estimate
- Service category (which part of your business it belongs to)

## Steps

1. **Go to your catalog** from the vendor dashboard.
2. **Tap "Add service"** — you'll see a form with the fields above.
3. **Write a clear name** — customers search for specific things. "Haircut" is good. "Haircut + Blow-dry + Scalp Treatment" converts better.
4. **Set your price** — this is your base rate. You can add variants and add-ons later.
5. **Estimate the duration** — this blocks the right amount of time on your calendar.
6. **Upload photos** — services with gallery images convert significantly better than text-only listings. Bouul checks for this and flags listings missing media.
7. **Add search keywords** — these help your service appear in relevant searches. Think about what customers type when they're looking for what you do.
8. **Set add-ons or variants** (optional) — offer a basic vs premium version, or add-ons like "Extra hour" or "Travel fee".
9. **Choose the delivery method** — at your location, at the customer's home, or remote.

## What Bouul checks

After you publish, the system scores your service listing. If you're missing gallery images or search keywords, your completeness score stays below threshold and a content task is created to fix it.

## Next steps
- [Create service bundles](../vendor-operations/create-bundles.md)
- [Set your pricing & surge rates](../payments/set-pricing.md)
`,
  },
  {
    slug: 'add-your-team',
    title: 'How to add your team',
    summary: 'Your employees are the people who deliver your services. Adding them to Bouul lets you assign bookings, track availability, and manage their schedule.',
    sections: ['What you need per employee', 'Steps', 'Roles', 'What Bouul checks', 'Next steps'],
    content: `# How to add your team

Your employees are the people who deliver your services. Adding them to Bouul lets you assign bookings, track availability, and manage their schedule.

## What you need per employee
- Full name
- Role (e.g. Senior Mechanic, Nail Technician, Lead Photographer)
- Phone number
- Email address
- Their skills or specialisations

## Steps

1. **Go to Employee Management** from the vendor dashboard.
2. **Tap "Add employee"** — fill in their details.
3. **Choose their role** — this determines what they can see and do in the app.
4. **Set their capabilities** — each employee gets specific task capabilities (review assignments, update live status, respond to disputes, etc.). The system recommends a pack based on your industry.
5. **Invite them** — they'll receive an invite link to download the app and set up their profile.
6. **Set their availability** — working hours, break times, and days off.

## Roles

- **Owner** — full access to everything
- **Manager** — can assign work, respond to disputes, view metrics
- **Employee** — can accept assignments, update status, complete tasks
- **Contractor** — limited access for independent contractors

## What Bouul checks

If you have bookings but not enough employees scheduled to cover them, the system detects a coverage gap and creates an alert before it becomes a crisis.

## Next steps
- [Assign employees to bookings](../vendor-operations/assign-employees.md)
- [Track employee performance](../advanced/employee-performance-tracking.md)
`,
  },
  {
    slug: 'set-working-hours',
    title: 'How to set your working hours & availability',
    summary: 'Your working hours tell customers when they can book you. Availability status tells Bouul whether you\'re accepting new work right now.',
    sections: ['Steps', 'Availability status', 'What Bouul watches', 'Next steps'],
    content: `# How to set your working hours & availability

Your working hours tell customers when they can book you. Availability status tells Bouul whether you're accepting new work right now.

## Steps

1. **Go to your vendor settings** from the dashboard.
2. **Find "Working hours"** — you'll see a weekly grid.
3. **Set your open hours for each day** — tap a day, set the start and end time.
4. **Add breaks** — lunch breaks or midday closures. Bouul won't schedule bookings during break windows.
5. **Set your time zone** — important if you operate across provinces.
6. **Save** — your storefront now shows customers when they can book.

## Availability status

| Status | What it means |
|--------|---------------|
| Available | Open for new bookings |
| Busy | At capacity — new customers see a wait time or suggested alternative |
| Closed | Not taking bookings — shown as unavailable in search |
| Emergency only | Only accepting emergency/call-out jobs |

## What Bouul watches

If your availability status hasn't been updated recently, the system detects **stale availability** and creates a task to confirm or update it. Nothing frustrates a customer more than booking a time slot that isn't actually available.

## Next steps
- [Complete your profile for discoverability](complete-your-profile.md)
- [Manage incoming orders](../vendor-operations/manage-incoming-orders.md)
`,
  },
  {
    slug: 'complete-your-profile',
    title: 'How to complete your profile for discoverability',
    summary: 'Bouul scores your storefront out of 10 based on how complete your profile is. A higher score means better discoverability in search results.',
    sections: ['What affects your score', 'How to check your score', 'What Bouul watches', 'Tips for a strong profile', 'Next steps'],
    content: `# How to complete your profile for discoverability

Bouul scores your storefront out of 10 based on how complete your profile is. A higher score means better discoverability in search results.

## What affects your score

| Field | Weight | Why it matters |
|-------|--------|---------------|
| Logo | High | Your storefront card shows this in search results |
| Cover image | High | The hero image at the top of your storefront |
| Description | Medium | Customers read this before booking |
| Phone number | Medium | Some customers prefer to call |
| Search keywords | Medium | Helps you appear in relevant searches |
| Service listings | Low | Having at least one live service improves your score |

## How to check your score

1. Go to your **vendor dashboard**.
2. Your **completeness score** appears in the health section or as a notification.
3. If it's below 10, you'll see exactly which fields are missing.

## What Bouul watches

The \`vendor_oversight_sync\` background process scans every storefront regularly. If your score is low or you're missing critical fields, a **storefront completeness review** task is created in the ops board.

## Tips for a strong profile

- **Use a professional logo** — not a blurry phone photo
- **Write a description that sells** — what makes you different? How long have you been doing this? What areas do you cover?
- **List at least 3 services** — a storefront with one service looks inactive
- **Add keywords** — think about what customers type when searching for your trade

## Next steps
- [List your first service](list-your-first-service.md)
- [Set your working hours](set-working-hours.md)
`,
  },
];

export const TUTORIALS_VENDOR_OPERATIONS: Tutorial[] = [
  {
    slug: 'manage-incoming-orders',
    title: 'How to manage incoming orders',
    summary: 'When a customer books one of your services, an order is created. Here\'s how to review, fulfill, and track every order from start to finish.',
    sections: ['Order lifecycle', 'What you see', 'Managing an order', 'What Bouul watches', 'Next steps'],
    content: `# How to manage incoming orders

When a customer books one of your services, an order is created. Here's how to review, fulfill, and track every order from start to finish.

## Order lifecycle

\`\`\`
Booked → Pending → Assigned → In progress → Completed → Reviewed
\`\`\`

## What you see

From the **Orders page** in your vendor dashboard, you can see:

| Section | What's in it |
|---------|-------------|
| Open | New bookings that need assignment |
| Active | Assigned and in-progress orders |
| Completed | Finished orders awaiting review |
| History | All past orders |

## Managing an order

1. **Open the order** — tap it from the list to see full details: service booked, customer info, scheduled time, price, and any notes or special instructions.
2. **Assign an employee** — choose who will do the work. If you have auto-assign enabled, this happens automatically.
3. **Track progress** — the status updates as the employee works: assigned, en route, arrived, in progress, completed.
4. **Confirm completion** — once the job is done, confirm to release funds from escrow.
5. **Follow up** — the customer can leave a review after completion. Respond to build your reputation.

## What Bouul watches

- Orders not assigned within a reasonable window trigger a **dispatch assignment review** task.
- Orders that go past their scheduled time without a status update trigger an **at-risk** signal.

## Next steps
- [Assign employees to bookings](assign-employees.md)
- [Respond to customer reviews](respond-to-reviews.md)
`,
  },
  {
    slug: 'assign-employees',
    title: 'How to assign employees to bookings',
    summary: 'When a customer books a service, the order needs to be assigned to someone on your team. Bouul gives you flexible options for how this happens.',
    sections: ['Assignment modes', 'Manual assignment', 'Auto-assignment (Pro plan)', 'What Bouul watches', 'Next steps'],
    content: `# How to assign employees to bookings

When a customer books a service, the order needs to be assigned to someone on your team. Bouul gives you flexible options for how this happens.

## Assignment modes

| Mode | How it works |
|------|-------------|
| Manual | You pick who does the job from the ops board |
| Auto-assign | The system assigns based on availability, skills, and current load |
| Invite only | Employees are invited and can accept or decline |

## Manual assignment

1. Open the **dispatch task** from the ops board.
2. You'll see a list of your employees, their availability status, and current order count.
3. Tap the employee you want to assign.
4. Confirm — they receive a notification with the booking details.

## Auto-assignment (Pro plan)

When auto-assign is enabled, the system:
- Checks employee availability against the booking time
- Matches required skills to employee capabilities
- Considers current workload (an employee with 17 active orders won't get another)
- Assigns within seconds of the booking being confirmed

## What Bouul watches

- If an assignment isn't accepted within the configured window, an **unaccepted assignment alert** fires.
- If an employee has overlapping bookings, a **scheduling conflict** signal is created.
- If your preferred employee is unavailable and a substitute is auto-assigned, a **substitution notice** is created.

## Next steps
- [Navigate the employee inbox](../employee/navigate-inbox.md)
- [Set up employee performance tracking](../advanced/employee-performance-tracking.md)
`,
  },
  {
    slug: 'create-bundles',
    title: 'How to create service bundles & packages',
    summary: 'Bundles let you group multiple services into a single package with a combined price. Customers get convenience and a discount; you get a higher average order value.',
    sections: ['Why bundles work', 'Steps', 'Discount tips', 'What Bouul does', 'Next steps'],
    content: `# How to create service bundles & packages

Bundles let you group multiple services into a single package with a combined price. Customers get convenience and a discount; you get a higher average order value.

## Why bundles work

A bundle turns a single R650 service into a R3,500 full-home package. For example:
- "Geyser Replacement + Electrical CoC + Wall Waterproofing" — one booking for the whole job
- "Full Detail + Engine Shampoo + Headlight Restoration" — upsell the complete package
- "Haircut + Beard Trim + Hot Towel Shave" — premium grooming experience

## Steps

1. **Go to Bundle Management** from the vendor dashboard.
2. **Tap "Create bundle"**.
3. **Name your bundle** — e.g. "Complete Home Safety Check" or "Bridal Beauty Package".
4. **Choose the services to include** — pick from your existing service menu.
5. **Set the bundle price** — optionally show the crossed-out individual prices so customers see the saving.
6. **Add a description** — what's included? Who is this for?
7. **Set a duration** — total time for all services combined.
8. **Publish** — the bundle appears on your storefront and in search results.

## Discount tips

- **15-20% off** the combined individual price is the sweet spot for conversion
- Make the saving obvious — show the original total crossed out
- Highlight what's included so customers feel like they're getting more

## What Bouul does

Bundles are featured on your storefront and in category rows for maximum visibility. Zola AI can recommend the right bundle based on what the customer is asking for.

## Next steps
- [Set up recurring subscriptions](set-up-subscriptions.md)
- [Track your inventory](track-inventory.md)
`,
  },
  {
    slug: 'track-inventory',
    title: 'How to track your inventory',
    summary: 'Inventory management lets you link physical stock to your services. When a job is completed, used items are automatically deducted from your inventory count.',
    sections: ['What you can track', 'Steps', 'How auto-deduction works', 'What Bouul watches', 'Next steps'],
    content: `# How to track your inventory

Inventory management lets you link physical stock to your services. When a job is completed, used items are automatically deducted from your inventory count.

## What you can track

- Parts and components (valves, filters, fittings)
- Consumables (shampoo, oils, cleaning products)
- Tools and equipment
- Products for retail

## Steps

1. **Go to Inventory** from the vendor dashboard.
2. **Tap "Add item"** — enter the name, quantity, unit cost, and supplier.
3. **Link items to services** — when creating or editing a service, associate the inventory items it consumes.
4. **Set low-stock thresholds** — get notified when an item is running low.
5. **Receive stock** — when you restock, log the new quantity.

## How auto-deduction works

When an employee completes a job, the system automatically deducts the linked inventory items. No manual counting, no forgotten adjustments.

For example, a plumber completing a "Geyser Installation" would have the following auto-deducted:
- 1x geyser unit
- 1x pressure control valve
- 2x copper pipe fittings
- 1x roll of thread tape

## What Bouul watches

- **Low-stock alerts** — when inventory drops below threshold, a restock follow-up task is created
- **Inventory audit tasks** — periodic recounts are triggered if there's a discrepancy between expected and actual stock levels
- **Tool readiness** — before the first job of the day, equipment readiness is checked

## Next steps
- [Create service bundles](create-bundles.md)
- [Set up recurring subscriptions](set-up-subscriptions.md)
`,
  },
  {
    slug: 'set-up-subscriptions',
    title: 'How to set up recurring subscriptions',
    summary: 'Recurring subscriptions let you bill customers automatically on a weekly, bi-weekly, or monthly schedule. Perfect for regular services like cleaning, lawn care, grooming, or maintenance contracts.',
    sections: ['Types of subscriptions', 'Steps', 'For the customer', 'What Bouul does', 'Next steps'],
    content: `# How to set up recurring subscriptions

Recurring subscriptions let you bill customers automatically on a weekly, bi-weekly, or monthly schedule. Perfect for regular services like cleaning, lawn care, grooming, or maintenance contracts.

## Types of subscriptions

| Frequency | Best for |
|-----------|----------|
| Weekly | House cleaning, dog walking, lawn mowing |
| Bi-weekly | Grooming, window cleaning, pool maintenance |
| Monthly | Pest control, HVAC servicing, maintenance contracts |

## Steps

1. **Go to your service editor** and open the service you want to offer as a subscription.
2. **Set the behavior to "subscription"**.
3. **Choose available frequencies** — weekly, bi-weekly, monthly, or custom.
4. **Set the subscription price** — you can offer a discount vs one-off bookings.
5. **Add cancellation terms** — how much notice is required?
6. **Publish** — customers can now choose the subscription option when booking.

## For the customer

When a customer subscribes:
- They book the first session immediately
- Recurring sessions appear on their calendar
- Payment is auto-billed on the schedule you set
- They can pause, skip, or cancel within your policy terms

## What Bouul does

- Auto-billing removes the "chasing payment" problem
- Recurring revenue is predictable — you know what you'll earn each month
- Subscribers are marked so you can prioritise regular clients

## Next steps
- [Create service bundles](create-bundles.md)
- [Track your inventory](track-inventory.md)
`,
  },
  {
    slug: 'use-the-ops-board',
    title: 'How to use the ops board',
    summary: 'The ops board is your central hub for everything that needs attention — orders, disputes, content tasks, and operational checklists. It replaces spreadsheets, sticky notes, and chasing people on WhatsApp.',
    sections: ['How to get there', 'What you\'ll see', 'Common tasks', 'Next steps'],
    content: `# How to use the ops board

The ops board is your central hub for everything that needs attention — orders, disputes, content tasks, and operational checklists. It replaces spreadsheets, sticky notes, and chasing people on WhatsApp.

## How to get there

From the vendor dashboard, tap **"Ops Board"** in the navigation. The board organises everything into sections:

| Section | What's in it |
|---------|-------------|
| Needs attention | High-urgency tasks that need action now |
| At risk | Tasks approaching or past their deadline |
| Due now | Tasks due within the next 2 hours |
| Blocked | Tasks waiting on missing information |
| Coming up | Upcoming tasks that aren't urgent yet |
| Pending review | Completed work waiting for sign-off |

## What you'll see

Each task card shows:
- **Title** — what it's about (e.g. "Creative Photography Session", "Respond to dispute", "Complete open checklist")
- **Type badge** — what kind of task it is (dispatch, content, dispute, operations, metrics)
- **Urgency level** — critical, high, medium, or low
- **Due or SLA time** — when it needs to be done by
- **Signal badges** — if the task has active signals (at risk, SLA breached)

## Common tasks

| Task type | What to do |
|-----------|-----------|
| Dispatch assignment review | Confirm the assignment and assign an employee |
| Service completeness review | Add missing gallery images or keywords |
| Storefront completeness review | Upload logo, cover image, or description |
| Dispute response | Draft and submit your side of the dispute |
| Daily open checklist | Prepare the workspace before first booking |
| Unanswered inquiry | Reply to a customer who's waiting |
| Missing media | Add an image to a published post |

## Next steps
- [Respond to a storefront completeness signal](../detection/respond-storefront-signal.md)
- [Handle a dispatch alert](../detection/handle-dispatch-alert.md)
`,
  },
  {
    slug: 'respond-to-reviews',
    title: 'How to respond to customer reviews',
    summary: 'Reviews are how future customers decide whether to book with you. Responding to every review — positive or negative — builds trust and improves your reputation score.',
    sections: ['Why it matters', 'Steps', 'What Bouul watches', 'Tips', 'Next steps'],
    content: `# How to respond to customer reviews

Reviews are how future customers decide whether to book with you. Responding to every review — positive or negative — builds trust and improves your reputation score.

## Why it matters

- **Positive reviews** — replying shows you value your customers and encourages repeat business
- **Negative reviews** — a thoughtful public reply shows future customers that you take feedback seriously
- **Unreplied reviews** — signal that you don't care about customer experience

## Steps

1. **Go to Reviews** from the vendor dashboard or open the **pending review responses** task from the ops board.
2. **Read the review** — take a moment to understand what the customer experienced.
3. **Reply to positive reviews** — thank them, mention something specific about their booking, invite them back.
4. **Reply to negative reviews** — acknowledge the issue, explain what happened (without being defensive), and mention what you've done to fix it.
5. **Submit** — your reply is posted publicly on your storefront.

## What Bouul watches

If you have unreplied reviews, the system creates a **pending review responses** task. It lists every review that needs a reply so you can handle them all in one session.

## Tips

- Reply within 48 hours for best impact
- Keep replies professional and friendly
- For negative reviews, focus on the solution, not the problem
- Don't argue publicly — offer to resolve issues in private

## Next steps
- [Manage your service menu](manage-service-menu.md)
- [Maintain your reputation score](../disputes/maintain-reputation.md)
`,
  },
  {
    slug: 'manage-service-menu',
    title: 'How to manage your service menu',
    summary: 'Your service menu is the full list of services customers can book. Organising it well makes it easy for customers to find what they need and increases conversion.',
    sections: ['Organising services', 'Steps', 'Tips', 'Next steps'],
    content: `# How to manage your service menu

Your service menu is the full list of services customers can book. Organising it well makes it easy for customers to find what they need and increases conversion.

## Organising services

You can group your services into sections on your storefront:

| Section | Example |
|---------|---------|
| Emergency | "Burst pipe repair", "24/7 locksmith", "Emergency electrical" |
| Maintenance | "Regular servicing", "Annual check-ups", "Filter replacement" |
| Packages | "Full detail package", "Home safety check" |
| Seasonal | "Summer AC tune-up", "Winter heating check" |

## Steps

1. **Go to Catalog & Posts** from the vendor dashboard.
2. **Switch to the Services tab** to see all your listings.
3. **Drag to reorder** — services at the top of each section get seen first.
4. **Create sections** — group related services together. This helps customers navigate.
5. **Edit a service** — tap to update pricing, description, photos, or duration.
6. **Archive a service** — if you no longer offer something, archive it instead of deleting. History is preserved.

## Tips

- **List your most popular services first** — customers should see your best stuff immediately
- **Be specific in names** — "Women's Haircut + Blow-dry" converts better than "Hair styling"
- **Keep descriptions fresh** — outdated descriptions erode trust
- **Use the same pricing format** — consistency looks professional

## Next steps
- [Create dynamic menu sections](create-dynamic-menus.md)
- [Set cancellation & no-show policies](set-policies.md)
`,
  },
  {
    slug: 'create-dynamic-menus',
    title: 'How to create dynamic menu sections',
    summary: 'Dynamic menu sections let you group services into curated collections that appear on your storefront. They auto-hide items when inventory depletes and can be scheduled to appear at specific times.',
    sections: ['What you can create', 'Steps', 'Inventory auto-hide', 'Next steps'],
    content: `# How to create dynamic menu sections

Dynamic menu sections let you group services into curated collections that appear on your storefront. They auto-hide items when inventory depletes and can be scheduled to appear at specific times.

## What you can create

| Section type | How it works |
|-------------|-------------|
| All Day | Shown during all working hours |
| Breakfast / Lunch / Dinner | Auto-switches based on time of day |
| Seasonal | Shown during specific dates |
| Weekend | Appears Friday-Sunday only |
| Event | Shown during specific events or promotions |
| Specials | Limited-time offers |

## Steps

1. **Go to Dynamic Menu Editor** from the vendor dashboard.
2. **Tap "Create section"**.
3. **Name the section** — e.g. "Summer Specials", "Weekend Brunch Menu".
4. **Choose when it appears** — all day, specific hours, specific days, or date range.
5. **Pick the services** to include from your service menu.
6. **Set visibility** — publish immediately or schedule.
7. **Save** — the section appears on your storefront at the scheduled time.

## Inventory auto-hide

If a service in a dynamic section has linked inventory and stock runs out, the service is automatically hidden from the section until you restock. No manual updates needed.

## Next steps
- [Manage your service menu](manage-service-menu.md)
- [Track your inventory](track-inventory.md)
`,
  },
  {
    slug: 'set-policies',
    title: 'How to set cancellation & no-show policies',
    summary: 'Policies protect your time and income. Bouul lets you set clear terms for cancellations, no-shows, and late arrivals so customers know what to expect.',
    sections: ['What you can set', 'Steps', 'Recommended defaults by trade', 'What Bouul watches', 'Next steps'],
    content: `# How to set cancellation & no-show policies

Policies protect your time and income. Bouul lets you set clear terms for cancellations, no-shows, and late arrivals so customers know what to expect.

## What you can set

| Policy | What it does |
|--------|-------------|
| Cancellation window | How much notice a customer must give to cancel free of charge |
| Cancellation fee | A percentage charged if they cancel within the penalty window |
| No-show fee | Full or partial charge if the customer doesn't show |
| Late arrival grace | How long you'll wait before marking it a no-show |
| Deposit required | Percentage of the total collected upfront |

## Steps

1. **Go to Policies** from the vendor dashboard.
2. **Choose a policy type** — cancellation, no-show, or late arrival.
3. **Set your terms**:
   - *Example*: Free cancellation up to 24 hours before
   - *Example*: 50% charge for cancellation within 24 hours
   - *Example*: Full charge for no-shows
4. **Save as default** — applies to all services. You can override per service.
5. **Publish** — policies are displayed on your storefront and at checkout.

## Recommended defaults by trade

| Trade | Cancellation | No-show |
|-------|-------------|---------|
| Beauty & personal care | 24 hours | Full charge |
| Home services (emergency) | 2 hours | Full charge + call-out fee |
| Home services (scheduled) | 24 hours | Full charge |
| Healthcare | 24 hours | Full charge |
| Tutoring | 12 hours | Full charge |
| Pet services | 24 hours | Full charge |

## What Bouul watches

Your policies are displayed up-front on your storefront so there are no surprises. Escrow holds the deposit, so if a customer no-shows, you're protected without having to chase payment.

## Next steps
- [Manage your service menu](manage-service-menu.md)
- [Understand escrow protection](../payments/understand-escrow.md)
`,
  },
];

export const TUTORIALS_EMPLOYEE: Tutorial[] = [
  {
    slug: 'accept-assignment',
    title: 'How to accept your first assignment',
    summary: 'When a vendor assigns a booking to you, it appears in your employee inbox. Here\'s how to accept and start working.',
    sections: ['Steps', 'Before you head out', 'What Bouul watches', 'Next steps'],
    content: `# How to accept your first assignment

When a vendor assigns a booking to you, it appears in your employee inbox. Here's how to accept and start working.

## Steps

1. **Open the Bouul app** and go to your inbox (bottom navigation or home screen).
2. **You'll see any new assignments** with the job title, scheduled time, and customer details.
3. **Tap the assignment card** to view the full details — service description, location, customer notes, and any photo diagnostics they've attached.
4. **Tap "Accept"** to confirm you're taking the job. The vendor is notified.
5. **If you can't do it**, tap "Decline" — the vendor can reassign to someone else.

## Before you head out

- **Confirm the address** — tap the location to open it in maps.
- **Check the service details** — what exactly does the customer expect? Any add-ons or variants?
- **Review photo diagnostics** — if the customer sent photos, look at them so you arrive with the right parts or tools.

## What Bouul watches

- If you don't accept within the expected window, the vendor gets an **unaccepted assignment alert**.
- Once accepted, you should **update your live status** as you travel, arrive, and complete the job.

## Next steps
- [Update your live status during a job](update-live-status.md)
- [Navigate the employee inbox](navigate-inbox.md)
`,
  },
  {
    slug: 'update-live-status',
    title: 'How to update your live status during a job',
    summary: 'Keeping your status updated helps the vendor and customer know where you are. It also prevents at-risk signals from firing.',
    sections: ['Statuses', 'How to update', 'Why it matters', 'Next steps'],
    content: `# How to update your live status during a job

Keeping your status updated helps the vendor and customer know where you are. It also prevents at-risk signals from firing.

## Statuses

| Status | When to use it |
|--------|---------------|
| Accepted | You've confirmed the job |
| En route | You're travelling to the customer |
| Arrived | You're at the location |
| In progress | You've started the work |
| Completed | The job is done |
| Delayed | Something is holding you up |

## How to update

1. Open the **assignment detail** from your inbox.
2. Tap the **status pill** at the top — a menu of available statuses appears.
3. Select the current status.
4. If you're reporting a delay, add a brief note so the vendor knows what's happening.

## Why it matters

Bouul watches for **live status drift** — if an in-progress assignment hasn't had a status update beyond the expected window, an at-risk signal fires. The vendor gets notified, which means they either check in with you or get in front of the customer before the customer complains.

Updating your status takes 3 seconds and prevents that entire chain.

## Next steps
- [Report a delay or issue](report-delay.md)
- [Complete service workflow steps](complete-workflow-steps.md)
`,
  },
  {
    slug: 'navigate-inbox',
    title: 'How to navigate the employee inbox',
    summary: 'Your inbox is where all your assignments and tasks appear. It\'s organised into sections so you always know what needs attention first.',
    sections: ['Sections', 'What you\'ll see', 'Filtering', 'Next steps'],
    content: `# How to navigate the employee inbox

Your inbox is where all your assignments and tasks appear. It's organised into sections so you always know what needs attention first.

## Sections

| Section | What's in it |
|---------|-------------|
| Needs attention | High-urgency tasks that need action now |
| Due now | Tasks due within the next 2 hours |
| Coming up | Upcoming tasks that aren't urgent yet |
| Delegated to me | Tasks another employee assigned to you |
| Waiting | Tasks waiting on someone else before you can act |
| Pending review | Completed work waiting for vendor sign-off |

## What you'll see

Each task card shows:
- **Title** — what the job or task is
- **Type badge** — what kind of task (dispatch, content, dispute, operations, metrics)
- **Urgency** — critical, high, medium, or low
- **Time** — when it's due or scheduled
- **Signals** — if there are active at-risk or SLA breach alerts

## Filtering

- Tap a section heading to collapse or expand it
- Use the search bar to find specific tasks
- Sort by urgency, date, or type

## Next steps
- [Accept your first assignment](accept-assignment.md)
- [Update your live status during a job](update-live-status.md)
`,
  },
  {
    slug: 'report-delay',
    title: 'How to report a delay or issue',
    summary: 'When something goes wrong during a job — traffic, missing parts, customer not home — report it so the vendor and customer know what\'s happening.',
    sections: ['When to report', 'How to report', 'What happens next', 'What Bouul watches', 'Next steps'],
    content: `# How to report a delay or issue

When something goes wrong during a job — traffic, missing parts, customer not home — report it so the vendor and customer know what's happening.

## When to report

- **Traffic or route delay** — you're running late due to roads or distance
- **Missing parts or tools** — you don't have what you need to complete the job
- **Customer unreachable** — nobody answers at the location
- **Scope change** — the job is bigger than what was booked
- **Equipment failure** — your tool or vehicle broke down
- **Safety concern** — the location or situation feels unsafe

## How to report

1. **Open the assignment** from your inbox.
2. **Tap "Report issue"** — a form appears.
3. **Choose the issue type** from the list above.
4. **Add a brief description** — what happened, what you need, estimated delay.
5. **Submit** — the vendor is notified immediately.

## What happens next

- The vendor sees the report and can reassign, reschedule, or contact the customer
- For minor delays, the vendor may ask you to proceed and adjust the ETA
- For major issues, the vendor handles the customer communication

## What Bouul watches

If a delay isn't reported and the job runs late without any status update, an **at-risk** signal fires. Reporting proactively prevents that.

## Next steps
- [Update your live status](update-live-status.md)
- [Complete service workflow steps](complete-workflow-steps.md)
`,
  },
  {
    slug: 'view-schedule',
    title: 'How to view your schedule',
    summary: 'Your schedule shows all your upcoming assignments, breaks, and time-off blocks in one place.',
    sections: ['Where to find it', 'What\'s on your schedule', 'Breaks', 'Next steps'],
    content: `# How to view your schedule

Your schedule shows all your upcoming assignments, breaks, and time-off blocks in one place.

## Where to find it

Tap **Schedule** from the employee app navigation. You'll see:
- **Today** — your current day's assignments with times
- **This week** — all assignments for the current week
- **Month view** — an overview of your booked and available days

## What's on your schedule

Each assignment shows:
- **Service name** — what you're doing
- **Customer name** — who you're working for
- **Time** — scheduled start and estimated end
- **Location** — where to go
- **Status** — accepted, en route, in progress, completed

## Breaks

Your scheduled breaks (lunch, personal time) are shown so you can plan your day. If you need to adjust a break, request a schedule change.

## Next steps
- [Request a schedule change](request-schedule-change.md)
- [Report a delay or issue](report-delay.md)
`,
  },
  {
    slug: 'request-schedule-change',
    title: 'How to request a schedule change',
    summary: 'If your working hours, availability, or a specific shift needs adjusting, you can request a change from the employee app.',
    sections: ['Types of requests', 'Steps', 'What Bouul watches', 'Next steps'],
    content: `# How to request a schedule change

If your working hours, availability, or a specific shift needs adjusting, you can request a change from the employee app.

## Types of requests

| Request | What it does |
|---------|-------------|
| Day off | Mark a specific day as unavailable |
| Shift swap | Offer your shift to another employee |
| Permanent hours change | Update your recurring working hours |
| Break adjustment | Change your lunch or break window |

## Steps

1. **Go to your Schedule** from the employee app.
2. **Tap the day or time slot** you want to change.
3. **Choose the type of change** — day off, swap, or hours update.
4. **Add a reason** (optional) — helps the vendor understand the request.
5. **Submit** — the vendor reviews and approves or suggests an alternative.

## What Bouul watches

If a schedule change creates a **coverage gap** (not enough employees for the booked orders), the vendor is alerted before they approve the change. This helps them make informed decisions about time-off requests.

## Next steps
- [View your schedule](view-schedule.md)
- [Report a delay or issue](report-delay.md)
`,
  },
  {
    slug: 'complete-workflow-steps',
    title: 'How to complete service workflow steps',
    summary: 'Some services have multi-step workflows. Instead of a single "completed" status, you mark each step as you go — giving the vendor and customer visibility into progress.',
    sections: ['When workflows are used', 'Steps', 'Adding photos', 'What Bouul watches', 'Next steps'],
    content: `# How to complete service workflow steps

Some services have multi-step workflows. Instead of a single "completed" status, you mark each step as you go — giving the vendor and customer visibility into progress.

## When workflows are used

- **Multi-stage services** — e.g. "Step 1: Diagnostic → Step 2: Fitting → Step 3: Testing"
- **Quality check processes** — e.g. "Clean → Inspect → Photo documentation → Sign-off"
- **Compliance procedures** — steps that require verification before completion

## Steps

1. **Open the assignment** from your inbox.
2. **You'll see a checklist** of steps for this service.
3. **Complete each step in order** — tap the step, add any required notes or photos, and mark it done.
4. **Progress is visible** — the vendor and customer can see which step you're on.
5. **When all steps are complete**, the job is marked done.

## Adding photos

For steps that require visual proof:
- Take a photo of the completed work
- Add a brief note if needed
- The photo is attached to that step in the workflow history

## What Bouul watches

The system tracks step completion against expected duration. If a step is taking significantly longer than expected without a status update, an **at-risk** signal helps catch delays before they affect the next booking.

## Next steps
- [Update your live status](update-live-status.md)
- [Report a delay or issue](report-delay.md)
`,
  },
];

export const TUTORIALS_CONSUMER: Tutorial[] = [
  {
    slug: 'find-a-service',
    title: 'How to find a service near you',
    summary: 'Bouul\'s search uses both text matching and AI-powered similarity to find the right service, even when you don\'t know exactly what it\'s called.',
    sections: ['Search methods', 'Search tips', 'Next steps'],
    content: `# How to find a service near you

Bouul's search uses both text matching and AI-powered similarity to find the right service, even when you don't know exactly what it's called.

## Search methods

### Text search
Type what you're looking for in the search bar. The system searches:
- Service names
- Descriptions
- Keywords
- Vendor business names

Results show up in the "All" tab, or you can switch between 7 tabs: Services, Vendors, Posts, Glimpses, Reviews, Users, and a peek view.

### Voice search
Tap the microphone icon and say what you need. The system uses the same hybrid search — keyword matching plus AI embeddings.

### Semantic discovery
On the homepage, Bouul shows services related to ones you've viewed before. If you looked at "Hair Colour — Root Touch Up", you'll see "Full Highlights" and "Women's Haircut & Styling" as related options.

## Search tips

- **Be specific** — "Geyser installation Randburg" beats "plumber"
- **Use categories** — the category picker narrows results to the right trade
- **Check the map** — results include distance and location

## Next steps
- [Book a service](book-a-service.md)
- [Chat with Zola AI](chat-with-zola.md)
`,
  },
  {
    slug: 'book-a-service',
    title: 'How to book a service',
    summary: 'Once you\'ve found a service you need, booking takes just a few taps. Here\'s how it works.',
    sections: ['Steps', 'What happens next', 'Bundles', 'Next steps'],
    content: `# How to book a service

Once you've found a service you need, booking takes just a few taps. Here's how it works.

## Steps

1. **Open the service** — tap it from search results, a category row, or a storefront.
2. **Choose your options** — if the service has variants or add-ons, pick what you need.
3. **Select a date and time** — you'll see the vendor's available slots based on their working hours and existing bookings.
4. **Add special instructions** — let the vendor know anything specific (e.g. "rear entrance", "allergic to lavender", "please call before arriving").
5. **Review the price** — the total includes the service price and any add-ons. If a deposit is required, it's shown here.
6. **Confirm and pay** — your payment is processed and held in escrow. The vendor is notified immediately.

## What happens next

- The vendor assigns an employee to your booking
- You get a confirmation with the scheduled time and assigned employee's details
- You can message the vendor or assigned employee through the app
- On the day, you can track the employee's status (en route, arrived, in progress)

## Bundles

If the vendor has bundles, you can book multiple services in one go. The bundle price is shown with the discount highlighted.

## Next steps
- [Chat with Zola AI](chat-with-zola.md)
- [Manage your bookings](manage-bookings.md)
`,
  },
  {
    slug: 'chat-with-zola',
    title: 'How to chat with Zola AI',
    summary: 'Zola is Bouul\'s AI assistant that helps you find services, answer questions, and manage bookings through conversation.',
    sections: ['What Zola can do', 'Where to find Zola', 'Tips for using Zola', 'Next steps'],
    content: `# How to chat with Zola AI

Zola is Bouul's AI assistant that helps you find services, answer questions, and manage bookings through conversation.

## What Zola can do

| What you ask | What Zola does |
|-------------|----------------|
| "Find a plumber near me" | Searches for available plumbers in your area |
| "I need my hair done" | Shows relevant services and available slots |
| "What's included in this service?" | Reads the service description and answers |
| "Book a geyser installation for Thursday" | Finds available slots and guides you through booking |
| "Help me choose between these options" | Compares services and makes recommendations |
| "What's the cancellation policy?" | Tells you the vendor's policy |
| "I have a problem with my booking" | Escalates to customer support or opens a dispute |

## Where to find Zola

Zola is available in the chat tab (bottom navigation). You can type or use voice input.

## Tips for using Zola

- **Be specific** — "I need a mechanic in Soweto who works on VWs" works better than "car help"
- **Upload photos** — you can send photos of the issue (a leak, a hairstyle reference, a broken part) and Zola can use them to match you to the right service
- **Ask follow-ups** — Zola remembers the conversation context, so you can refine your request

## Next steps
- [Find a service near you](find-a-service.md)
- [Book a service](book-a-service.md)
`,
  },
  {
    slug: 'use-search-tabs',
    title: 'How to use the search tabs',
    summary: 'When you search on Bouul, results are organised into tabs so you can find exactly what you\'re looking for.',
    sections: ['The 7 tabs', 'Switching tabs', 'When to use each tab', 'Peek mode', 'Next steps'],
    content: `# How to use the search tabs

When you search on Bouul, results are organised into tabs so you can find exactly what you're looking for.

## The 7 tabs

| Tab | What you'll find |
|-----|-----------------|
| All | Combined results from every category |
| Services | Individual service listings with prices |
| Vendors | Business storefronts |
| Posts | Text posts from vendors and users |
| Glimpses | Short video content |
| Reviews | Customer reviews mentioning your search term |
| Users | People on Bouul |

## Switching tabs

After you type a search, the results appear in the **All** tab by default. Tap any other tab to narrow results. The tab bar is at the top of the search results page.

## When to use each tab

- **Need a specific service** → check the Services tab first for prices and availability
- **Looking for a particular business** → use the Vendors tab
- **Want to see what people are saying** → Reviews tab shows recent feedback
- **Browsing for inspiration** → Glimpses tab for short video content

## Peek mode

The **peek** view gives you a quick preview of a result without leaving the search page. Tap the peek card to see more, or swipe through results quickly.

## Next steps
- [Find a service near you](find-a-service.md)
- [Book a service](book-a-service.md)
`,
  },
  {
    slug: 'write-a-review',
    title: 'How to write a review after service',
    summary: 'After a booking is completed, you can leave a review. Reviews help other customers decide and give vendors valuable feedback.',
    sections: ['When to review', 'Steps', 'Tips for helpful reviews', 'What Bouul watches', 'Next steps'],
    content: `# How to write a review after service

After a booking is completed, you can leave a review. Reviews help other customers decide and give vendors valuable feedback.

## When to review

You can review a service from the moment it's marked as completed. There's a window before the review is auto-approved, so you have time to reflect on the experience.

## Steps

1. **Go to your bookings** from the profile tab.
2. **Find the completed booking** — there's a "Leave a review" button.
3. **Rate the service** — tap the star rating (1-5).
4. **Write your review** — be specific about what went well or what could be improved.
5. **Add photos** (optional) — show the completed work.
6. **Submit** — your review is posted to the vendor's storefront.

## Tips for helpful reviews

- **Be specific** — "Arrived on time, fixed the leak in 30 minutes, cleaned up after" is more helpful than "great service"
- **Be fair** — consider the price, the complexity, and the circumstances
- **Be constructive** — if something went wrong, explain what happened so the vendor can improve

## What Bouul watches

Reviews that aren't acknowledged by the vendor within a reasonable time trigger a **pending review responses** task so the vendor knows to reply.

## Next steps
- [Manage your bookings](manage-bookings.md)
- [Chat with Zola AI](chat-with-zola.md)
`,
  },
  {
    slug: 'manage-bookings',
    title: 'How to manage your bookings',
    summary: 'Your bookings page shows every service you\'ve booked — upcoming, active, completed, and cancelled.',
    sections: ['Where to find it', 'Sections', 'What you can do from each booking', 'Cancelling a booking', 'What Bouul watches', 'Next steps'],
    content: `# How to manage your bookings

Your bookings page shows every service you've booked — upcoming, active, completed, and cancelled.

## Where to find it

Tap **Bookings** from the profile tab or the bottom navigation.

## Sections

| Section | What's in it |
|---------|-------------|
| Upcoming | Future bookings that haven't started yet |
| Active | Bookings that are in progress right now |
| Completed | Finished bookings waiting for your review |
| History | All past bookings |

## What you can do from each booking

- **Upcoming** — reschedule, cancel (within policy), message the vendor, add special instructions
- **Active** — see the employee's live status (en route, arrived, in progress), contact the employee
- **Completed** — leave a review, rebook the same service, report an issue
- **Cancelled** — see refund status, rebook if needed

## Cancelling a booking

If you need to cancel:
1. Open the booking and tap "Cancel".
2. You'll see the cancellation policy and any applicable fees.
3. Confirm cancellation — if a deposit was paid, it's refunded per the vendor's policy.

## What Bouul watches

If a booking is in progress but hasn't been updated in a while, the system tracks it. If you have an issue, you can open a dispute from the booking page.

## Next steps
- [Write a review](write-a-review.md)
- [Find a service near you](find-a-service.md)
`,
  },
  {
    slug: 'use-discovery-feed',
    title: 'How to use the discovery feed',
    summary: 'The discovery feed is your homepage — it shows services, vendors, and content tailored to your interests and location.',
    sections: ['What you\'ll see', 'How it\'s personalised', 'Engagement signals', 'Next steps'],
    content: `# How to use the discovery feed

The discovery feed is your homepage — it shows services, vendors, and content tailored to your interests and location.

## What you'll see

| Content type | How it gets there |
|-------------|-------------------|
| Service rows | Services matched to your interests and past views |
| Vendor rows | Vendors near you with relevant services |
| Content posts | Posts from vendors and people you follow |
| Sponsored content | Promoted services from vendors running ads |
| Discovery rows | Services similar to ones you've viewed (semantic matching) |

## How it's personalised

- **Your interests** — the categories you browse and book most
- **Your location** — services available near you
- **Your history** — what you've viewed, booked, and followed
- **Seasonal relevance** — services that match the current season or trends

## Engagement signals

As you scroll, your interactions (taps, views, bookings) help the system learn what you like. The more you use Bouul, the more relevant your feed becomes.

## Next steps
- [Follow vendors & people](follow-vendors.md)
- [Find a service near you](find-a-service.md)
`,
  },
  {
    slug: 'follow-vendors',
    title: 'How to follow vendors & people',
    summary: 'Following a vendor or person means their content appears in your feed and you get notified when they post or offer new services.',
    sections: ['Why follow', 'How to follow', 'Your following feed', 'Next steps'],
    content: `# How to follow vendors & people

Following a vendor or person means their content appears in your feed and you get notified when they post or offer new services.

## Why follow

- **See their posts** in your discovery feed
- **Get notified** about new services, promotions, or updates
- **Book faster** — their storefront is saved in your following list
- **Support local** — following helps the system show more from vendors you like

## How to follow

1. **Open a vendor's storefront** or a person's profile.
2. **Tap the "Follow" button** near their name or header.
3. **To unfollow** — tap "Following" to toggle it off.

## Your following feed

Tap **Following** from the home or profile tab to see a feed of posts and updates from everyone you follow. The feed is sorted chronologically with the most recent first.

## Next steps
- [Use the discovery feed](use-discovery-feed.md)
- [Find a service near you](find-a-service.md)
`,
  },
];

export const TUTORIALS_CONTENT: Tutorial[] = [
  {
    slug: 'publish-text-post',
    title: 'How to publish a text post',
    summary: 'Text posts help you stay visible to customers who follow you and appear on the discovery feed. They\'re one of the main ways customers discover new vendors.',
    sections: ['Steps', 'What Bouul watches', 'Tips for good posts', 'Next steps'],
    content: `# How to publish a text post

Text posts help you stay visible to customers who follow you and appear on the discovery feed. They're one of the main ways customers discover new vendors.

## Steps

1. Go to **Catalog & Posts** from the vendor dashboard.
2. Switch to the **Posts tab**.
3. Tap **"Create post"**.
4. Write your post — share work updates, tips, promotions, or behind-the-scenes content.
5. **Add a photo or video** — posts without media perform poorly. Bouul checks for this.
6. **Add relevant hashtags** — these help your post appear in search results (e.g. #plumber #johannesburg #geyserinstallation).
7. **Publish** — your post goes to the feed and your followers see it.

## What Bouul watches

If you publish a text post without any attached image or video, the system detects **missing media** and creates a content review task. Posts without media get significantly less engagement, so this alert helps you avoid publishing content that won't perform.

## Tips for good posts

- **Show your work** — before/after photos perform best
- **Share tips** — "3 signs your geyser needs replacing" positions you as an expert
- **Promote offers** — seasonal specials, package deals, referral discounts
- **Post regularly** — stale feeds reduce discoverability

## Next steps
- [Upload a short video](upload-glimpse.md)
- [Use hashtags effectively](use-hashtags.md)
`,
  },
  {
    slug: 'upload-glimpse',
    title: 'How to upload a short video (glimpse)',
    summary: 'Glimpses are short-form video content — think of them as your business reels. They appear in the discovery feed and on your storefront.',
    sections: ['What makes a good glimpse', 'Steps', 'Tips for engagement', 'Next steps'],
    content: `# How to upload a short video (glimpse)

Glimpses are short-form video content — think of them as your business reels. They appear in the discovery feed and on your storefront.

## What makes a good glimpse

- **Show your work** — a before/after transformation, a process clip, or a finished result
- **Keep it short** — 15-60 seconds works best
- **Vertical format** — 9:16 ratio for mobile viewing
- **Add context** — a brief caption or voiceover explains what's happening
- **Tag services** — link the glimpse to relevant services so viewers can book directly

## Steps

1. **Go to your catalog** from the vendor dashboard.
2. **Switch to the Glimpses tab**.
3. **Tap "Upload"** — choose a video from your device.
4. **Add a caption** — describe what's shown.
5. **Tag services** (optional) — link to your services so viewers can book.
6. **Add hashtags** — improve discoverability.
7. **Publish** — your glimpse appears on your storefront and in the discovery feed.

## Tips for engagement

- **Show the transformation** — before/after shots are the most viewed content
- **Demonstrate expertise** — "how to check if your geyser needs replacing" positions you as the expert
- **Include your face** — glimpses with a person build trust
- **Post regularly** — fresh content keeps your storefront active in the algorithm

## Next steps
- [Use hashtags effectively](use-hashtags.md)
- [Publish a text post](publish-text-post.md)
`,
  },
  {
    slug: 'use-hashtags',
    title: 'How to use hashtags effectively',
    summary: 'Hashtags help your content appear in search results. When someone searches for a hashtagged term, your post or glimpse shows up alongside direct search results.',
    sections: ['How they work', 'Best practices', 'Examples', 'Tappable chips', 'Next steps'],
    content: `# How to use hashtags effectively

Hashtags help your content appear in search results. When someone searches for a hashtagged term, your post or glimpse shows up alongside direct search results.

## How they work

- Hashtags are extracted from post content and stored in a searchable index
- Tapping a hashtag chip navigates to a search results page for that tag
- You can add hashtags to text posts, glimpses, and reviews

## Best practices

| Do | Don't |
|----|-------|
| Use 3-5 relevant hashtags per post | Don't stuff 20 irrelevant tags |
| Include your location | Don't use generic tags alone |
| Mix broad and specific tags | Don't repeat the same tag in every post |
| Use tags people actually search for | Don't invent obscure hashtags |

## Examples

- A plumber in Fourways: \`#plumber #fourways #johannesburg #geyserrepair #emergencyplumber\`
- A nail tech in Cape Town: \`#nailtech #capetown #acrylicnails #nailart #gelx\`
- A photographer: \`#photographer #joburg #portraitphotography #headshots #southafricanphotographer\`

## Tappable chips

Hashtags appear as tappable chips on posts and glimpses in search results and on content cards. Tapping a chip takes you to a search page for that tag.

## Next steps
- [Publish a text post](publish-text-post.md)
- [Upload a short video](upload-glimpse.md)
`,
  },
  {
    slug: 'respond-to-comments',
    title: 'How to respond to post comments',
    summary: 'When someone comments on your post or glimpse, responding builds engagement and shows you\'re active. Bouul alerts you when comment activity spikes.',
    sections: ['Steps', 'What Bouul watches', 'Tips', 'Next steps'],
    content: `# How to respond to post comments

When someone comments on your post or glimpse, responding builds engagement and shows you're active. Bouul alerts you when comment activity spikes.

## Steps

1. **Open the post** from your catalog or profile.
2. **Scroll to the comments section**.
3. **Read the comment** — is it a question, feedback, or just a reaction?
4. **Type your reply** — be helpful, friendly, and professional.
5. **Post** — the commenter gets a notification of your reply.

## What Bouul watches

If a post suddenly receives far more comments than usual, the system detects a **comment burst** and creates a moderation review task. This helps you catch:
- **Viral posts** — engage while the momentum is hot
- **Spam or trolling** — moderate before it escalates
- **Negative sentiment** — respond quickly to address concerns

## Tips

- Reply within 24 hours for best engagement
- Answer questions thoroughly — other readers will see your reply
- Thank people for positive comments
- For negative comments, address the concern publicly but offer to take it private if needed

## Next steps
- [Publish a text post](publish-text-post.md)
- [Keep your listings fresh](keep-listings-fresh.md)
`,
  },
  {
    slug: 'keep-listings-fresh',
    title: 'How to keep your listings fresh',
    summary: 'Service listings that haven\'t been updated in a while lose trust with customers and drop in discoverability. Bouul tracks freshness and alerts you when a listing needs attention.',
    sections: ['What "fresh" means', 'How to refresh a listing', 'What Bouul watches', 'Suggested refresh cadence', 'Next steps'],
    content: `# How to keep your listings fresh

Service listings that haven't been updated in a while lose trust with customers and drop in discoverability. Bouul tracks freshness and alerts you when a listing needs attention.

## What "fresh" means

- **Pricing** is current — not from a year ago
- **Photos** are recent — not from a different season or location
- **Descriptions** reflect what you currently offer
- **Availability** is up to date

## How to refresh a listing

1. **Go to Catalog & Posts** from the vendor dashboard.
2. **Open the service** you want to refresh.
3. **Review each field**:
   - Is the price still accurate?
   - Are the photos still representative?
   - Does the description need updating?
   - Are add-ons or variants still current?
4. **Make updates** as needed.
5. **Save** — the listing timestamp updates and freshness is restored.

## What Bouul watches

If a service listing hasn't been reviewed or updated in a significant period, a **listing freshness** task appears in the ops board. The system recommends reviewing the listing to ensure accuracy.

## Suggested refresh cadence

| Update | How often |
|--------|----------|
| Price check | Every 3 months |
| New photos | Every 6 months |
| Description update | Annually |
| Availability hours | As needed |

## Next steps
- [Publish a text post](publish-text-post.md)
- [Manage your service menu](../vendor-operations/manage-service-menu.md)
`,
  },
];

export const TUTORIALS_DETECTION: Tutorial[] = [
  {
    slug: 'what-gets-detected',
    title: 'What Bouul detects automatically',
    summary: 'Bouul monitors your entire operation and creates assignments the moment something needs your attention. You don\'t audit — the system tells you.',
    sections: ['6 detection areas', 'Cross-cutting signals', 'Next steps'],
    content: `# What Bouul detects automatically

Bouul monitors your entire operation and creates assignments the moment something needs your attention. You don't audit — the system tells you.

## 6 detection areas

### 1. Storefront Health
| Signal | What triggers it |
|--------|-----------------|
| Completeness gaps | Missing logo, cover image, description, phone, or keywords on your storefront |
| Service listing gaps | Services with no gallery images or search keywords — invisible in search |
| Missing post media | Text post published without any attached image or video |

### 2. Dispatch & Fulfillment
| Signal | What triggers it |
|--------|-----------------|
| Unaccepted assignments | Order assigned to an employee who hasn't accepted yet |
| Scheduling conflicts | Employee has overlapping bookings at the same time |
| Substitution needed | Preferred employee unavailable, substitute auto-assigned |
| Pre-arrival confirmation | Employee hasn't confirmed readiness before arrival window |
| Missing tracking | Delivery order has no tracking number or carrier |
| Live status drift | In-progress assignment hasn't had a status update in too long |

### 3. Customer Disputes
| Signal | What triggers it |
|--------|-----------------|
| Outstanding response | Vendor hasn't responded to a dispute — critical urgency |
| Evidence gaps | Dispute case missing required photos, messages, or documentation |
| Jury deadline approaching | Jury deliberation window about to close |
| Verdict follow-up | Jury has issued a verdict — vendor needs to review |

### 4. Operations Hygiene
| Signal | What triggers it |
|--------|-----------------|
| Open/close checklists | Daily prep or end-of-day tasks not completed |
| Unanswered inquiries | Customer message hasn't been replied to within expected window |
| Unreplied reviews | Customer reviews — positive or negative — that haven't been acknowledged |
| Stale availability | Working hours or availability status not recently updated |
| Expiring policies | Insurance, licence, or registration approaching expiry |
| Equipment readiness | Tools or supplies not confirmed ready for upcoming bookings |

### 5. Performance Metrics
| Signal | What triggers it |
|--------|-----------------|
| Exception rate spike | Cancellations, disputes, or no-shows crossed a threshold |
| Slow acceptance pattern | Employees taking longer than usual to accept assignments |
| Employee delay pattern | Specific employee showing repeated lateness |
| SLA breach | A service-level agreement was missed |
| Coverage gap | Not enough employees scheduled to cover booked orders |

### 6. Content & Discovery
| Signal | What triggers it |
|--------|-----------------|
| Comment burst | Post received a sudden spike in comments |
| Publishing workflow | Content drafted but not advanced through publish pipeline |
| Listing freshness | Service listing hasn't been reviewed or updated recently |

## Cross-cutting signals

These can attach to any task:
- **At risk** — task approaching or past its due window
- **SLA breached** — deadline has already passed

## Next steps
- [Respond to a storefront completeness signal](respond-storefront-signal.md)
- [Handle a dispatch alert](handle-dispatch-alert.md)
- [Complete daily checklists](complete-daily-checklists.md)
`,
  },
  {
    slug: 'respond-storefront-signal',
    title: 'How to respond to a storefront completeness signal',
    summary: 'If your storefront is missing important fields, a completeness review task appears in your ops board. Here\'s how to close it.',
    sections: ['What the signal looks like', 'How to fix it', 'Why it matters', 'Next steps'],
    content: `# How to respond to a storefront completeness signal

If your storefront is missing important fields, a completeness review task appears in your ops board. Here's how to close it.

## What the signal looks like

You'll see a task in the ops board with:
- **Type**: Storefront gap or Profile gap
- **Score**: Your current completeness score out of 10
- **Missing fields**: Exactly what's missing (logo, cover image, description, phone, keywords)

## How to fix it

1. **Open the task** from the ops board.
2. **Review the missing fields list** — each one is listed individually.
3. **Upload or fill in the missing items**:
   - **Logo**: Square image, at least 512x512px
   - **Cover image**: 16:9 ratio, 1920x1080px recommended
   - **Description**: 2-3 sentences about your business
   - **Phone**: Your contact number for booking inquiries
   - **Search keywords**: Words customers use to find your services
4. **Mark the task as resolved** — your score updates automatically.

## Why it matters

A complete storefront converts significantly better than one with gaps. Customers decide in seconds whether to book — a missing logo or description costs you those bookings.

## Next steps
- [Handle a dispatch alert](handle-dispatch-alert.md)
- [Complete daily checklists](complete-daily-checklists.md)
`,
  },
  {
    slug: 'handle-dispatch-alert',
    title: 'How to handle a dispatch alert',
    summary: 'Dispatch alerts fire when something in the fulfillment loop needs attention — an assignment not accepted, a schedule conflict, or a substitution that needs confirmation.',
    sections: ['Types of alerts', 'Why it matters', 'Next steps'],
    content: `# How to handle a dispatch alert

Dispatch alerts fire when something in the fulfillment loop needs attention — an assignment not accepted, a schedule conflict, or a substitution that needs confirmation.

## Types of alerts

### Unaccepted assignment
1. Open the alert from the ops board — it shows which employee hasn't accepted and how long it's been pending.
2. **Send a reminder** from the task (the employee gets a push notification).
3. If they still don't respond, **reassign** to another available employee.

### Scheduling conflict
1. The alert shows the employee with overlapping bookings.
2. **Review the two bookings** — which one can move?
3. **Reassign one booking** to another employee with matching capabilities.
4. The conflict is resolved automatically once neither employee has overlapping times.

### Substitution notice
1. You'll see which employee was auto-assigned as a substitute.
2. **Review the substitute** — do they have the right skills and availability?
3. **Confirm the substitution** or choose a different employee.
4. The customer is notified of who will be arriving.

## Why it matters

Each of these signals prevents a specific failure: missed jobs from unaccepted assignments, double-booking chaos, or sending the wrong person to a job. Handling them quickly keeps your operations running smoothly.

## Next steps
- [Resolve a dispute signal](resolve-dispute-signal.md)
- [Respond to a storefront completeness signal](respond-storefront-signal.md)
`,
  },
  {
    slug: 'resolve-dispute-signal',
    title: 'How to resolve a dispute signal',
    summary: 'When a dispute signal fires, it means something in the dispute process needs your attention — an outstanding response, missing evidence, a jury deadline approaching, or a verdict that needs review.',
    sections: ['Types of dispute signals', 'Working through a signal', 'Next steps'],
    content: `# How to resolve a dispute signal

When a dispute signal fires, it means something in the dispute process needs your attention — an outstanding response, missing evidence, a jury deadline approaching, or a verdict that needs review.

## Types of dispute signals

### Outstanding response
The vendor hasn't responded to a customer's dispute yet. This is always **critical** urgency.
- **What to do**: Open the dispute, read the customer's claim, write your response, submit.
- **What happens if ignored**: The dispute escalates automatically. Unanswered disputes typically resolve in the customer's favour.

### Evidence gap
The dispute case is missing required evidence — photos, messages, or booking documentation.
- **What to do**: Gather the missing evidence (screenshots of conversations, before/after photos, proof of completion) and upload it to the case.
- **What happens**: The task blocks until evidence is added. Once complete, the case becomes reviewable.

### Jury deadline approaching
A jury has been assigned to the dispute and their deliberation window is about to close.
- **What to do**: Monitor the case. If the jury times out, the dispute resolves in the customer's favour by default.
- **What happens**: A monitoring task keeps the case visible until the verdict is in.

### Verdict follow-up
The jury has issued a verdict.
- **What to do**: Review the outcome. Accept the verdict, arrange resolution, or explore next steps.
- **What happens**: If the verdict window lapses, enforcement actions are triggered automatically.

## Working through a signal

1. **Open the signal task** from the ops board.
2. **Read the summary** — it tells you what's needed.
3. **Follow the deep-link** — the task takes you directly to the dispute or evidence form.
4. **Complete the required action**.
5. **Mark the task resolved** — the signal clears.

## Next steps
- [Respond to a customer dispute](../disputes/respond-to-dispute.md)
- [Submit evidence for a dispute case](../disputes/submit-evidence.md)
`,
  },
  {
    slug: 'review-metric-alerts',
    title: 'How to review performance metric alerts',
    summary: 'Metric alerts fire when something in your business data crosses a threshold — exceptions spiking, acceptance slowing, or SLAs being missed.',
    sections: ['Types of metric alerts', 'Reviewing alerts', 'Next steps'],
    content: `# How to review performance metric alerts

Metric alerts fire when something in your business data crosses a threshold — exceptions spiking, acceptance slowing, or SLAs being missed.

## Types of metric alerts

### Exception rate spike
A sudden increase in cancellations, disputes, or no-shows.
- **What triggers it**: The rate of exceptions on your orders crossed the configured threshold.
- **What to check**: Which services or employees are involved? Is there a common cause — a misrepresented service, a pricing issue, or an employee performance problem?
- **How to fix**: Investigate the affected orders. Update the service if it's misrepresented. Address performance issues with the employee. The spike should normalise after the fix.

### Slow acceptance pattern
Employees are taking longer than usual to accept assignments.
- **What triggers it**: Average response time for assignment acceptance has crept up.
- **What to check**: Is it all employees or specific ones? Has something changed in your notification setup? Are employees overloaded?
- **How to fix**: Review assignment distribution. Consider adjusting auto-assign settings or addressing the pattern directly with the team.

### Employee delay pattern
A specific employee has a recurring pattern of late arrivals or extended job durations.
- **What triggers it**: Statistical variance beyond normal for one employee.
- **What to check**: Is this a scheduling issue (too many jobs back-to-back), a personal issue, or a skills gap?
- **How to fix**: Adjust their schedule, provide coaching, or reassign certain job types.

### SLA breach review
A service-level agreement was missed — response time, completion window, or follow-up.
- **What triggers it**: A task or order that passed its SLA deadline.
- **What to check**: What was the SLA? Why was it missed? Was it preventable?
- **How to fix**: Close the loop with the affected customer. Adjust processes or SLAs to prevent recurrence.

### Coverage gap
Not enough employees scheduled to cover booked orders.
- **What triggers it**: Upcoming shift window has fewer employees available than orders booked.
- **What to check**: Is someone missing from the schedule? Are orders concentrated in a skills area only one employee covers?
- **How to fix**: Adjust schedules, request cover, or notify affected customers before they arrive.

## Reviewing alerts

1. **Open the alert task** from the ops board.
2. **Review the metric data** — the task shows the affected metric, threshold, and current value.
3. **Drill into the details** — follow the deep-link to the affected orders, employees, or services.
4. **Take corrective action**.
5. **Mark reviewed** — the alert is resolved and the metric resets its monitoring window.

## Next steps
- [Complete daily checklists](complete-daily-checklists.md)
- [Use the ops board](../vendor-operations/use-the-ops-board.md)
`,
  },
  {
    slug: 'complete-daily-checklists',
    title: 'How to complete daily checklists',
    summary: 'Daily checklists are recurring tasks that keep your business running smoothly. They include open-for-business prep and end-of-day close-out.',
    sections: ['Open checklist', 'Close checklist', 'Steps', 'What happens if you miss it', 'Next steps'],
    content: `# How to complete daily checklists

Daily checklists are recurring tasks that keep your business running smoothly. They include open-for-business prep and end-of-day close-out.

## Open checklist

The "Open for business" task runs before your first booking of the day. It helps you make sure everything is ready:

- **Workspace prepared** — salon station, workshop bench, or service area is clean and set up
- **Equipment checked** — tools are working, batteries charged, supplies stocked
- **Schedule reviewed** — today's bookings confirmed, employees assigned
- **Customer contacts confirmed** — any special instructions reviewed

## Close checklist

The end-of-day close-out task runs after your last booking. It helps you wrap up:

- **All jobs completed or followed up** — no open tasks left for today
- **Payments reconciled** — no discrepancies between booked and completed
- **Notes added** — any customer feedback or issues recorded
- **Tomorrow prepped** — first booking confirmed for next day

## Steps

1. **Open the checklist task** from your ops board or inbox.
2. **Go through each item** — tap items to mark them complete.
3. **Add notes** if anything needs attention.
4. **Submit** — the checklist is marked done for the day.

## What happens if you miss it

If the checklist isn't completed within the expected window, an **SLA breach signal** fires. This appears as an at-risk task in the ops board with increased urgency. The system doesn't penalise you — it just makes sure you don't forget.

## Next steps
- [Review performance metric alerts](review-metric-alerts.md)
- [Resolve a dispute signal](resolve-dispute-signal.md)
`,
  },
];

export const TUTORIALS_PAYMENTS: Tutorial[] = [
  {
    slug: 'earnings-dashboard',
    title: 'How to understand your earnings dashboard',
    summary: 'Your earnings dashboard shows you exactly what you\'ve earned, what\'s pending, and how your revenue is trending.',
    sections: ['What you\'ll see', 'Charts', 'Transaction breakdown', 'Next steps'],
    content: `# How to understand your earnings dashboard

Your earnings dashboard shows you exactly what you've earned, what's pending, and how your revenue is trending.

## What you'll see

| Metric | What it shows |
|--------|---------------|
| Total earnings | All-time revenue from completed bookings |
| Withdrawable balance | Funds available to withdraw right now |
| Pending balance | Funds in escrow waiting for job completion or release |
| This period | Earnings for the current week or month |
| Last period | Earnings for the previous period (comparison) |

## Charts

- **Revenue over time** — line chart showing daily or weekly earnings
- **By service** — which services generate the most revenue
- **By employee** — which employees are contributing most to earnings

## Transaction breakdown

Each completed order shows:
- Service name and customer
- Total price and platform fee (if applicable)
- Escrow release date
- Withdrawal status (available, pending, withdrawn)

## Next steps
- [Withdraw your payouts](withdraw-payouts.md)
- [View your transaction history](view-transactions.md)
`,
  },
  {
    slug: 'withdraw-payouts',
    title: 'How to withdraw your payouts',
    summary: 'Once funds are released from escrow and appear in your withdrawable balance, you can move them to your bank account.',
    sections: ['Steps', 'Payout timeline', 'Setting up your bank account', 'What Bouul watches', 'Next steps'],
    content: `# How to withdraw your payouts

Once funds are released from escrow and appear in your withdrawable balance, you can move them to your bank account.

## Steps

1. **Go to the Payouts page** from the vendor dashboard.
2. **Check your withdrawable balance** — this is the amount available to withdraw.
3. **Tap "Withdraw"**.
4. **Choose the amount** — you can withdraw the full balance or a partial amount.
5. **Confirm your bank details** — the account funds will be deposited to.
6. **Submit** — the withdrawal is processed.

## Payout timeline

| Stage | Typical time |
|-------|-------------|
| Job completed | Funds move from escrow to pending |
| Review period | 24-48 hours for customer review window |
| Available to withdraw | Funds appear in withdrawable balance |
| Withdrawal processed | 1-3 business days to your bank account |

## Setting up your bank account

You'll need to add your bank account details before you can withdraw:
- Bank name
- Account number
- Branch code
- Account type (cheque, savings, or current)

## What Bouul watches

Payout history is tracked on the Payouts page with a chart showing withdrawal amounts over time. You can see each payout's status and estimated arrival date.

## Next steps
- [Understand your earnings dashboard](earnings-dashboard.md)
- [View your transaction history](view-transactions.md)
`,
  },
  {
    slug: 'understand-escrow',
    title: 'How escrow protection works',
    summary: 'Every booking on Bouul is protected by escrow. Funds are held securely and released only when the job is completed and confirmed.',
    sections: ['How it works', 'What escrow protects', 'Deposit settings', 'What Bouul watches', 'Next steps'],
    content: `# How escrow protection works

Every booking on Bouul is protected by escrow. Funds are held securely and released only when the job is completed and confirmed.

## How it works

1. **Customer pays** — when they book, the full amount (or deposit) is charged immediately and held in escrow.
2. **You do the work** — the funds are secured and visible in your pending balance.
3. **Job is completed** — both parties confirm the work is done.
4. **Funds are released** — within 24-48 hours of completion, the money is available in your withdrawable balance.

## What escrow protects

| For you | For the customer |
|---------|-----------------|
| No-show protection — you get paid if the customer doesn't show | Your money is safe until the job is done right |
| No chasing payments — funds are secured before you start | Refund available if the service isn't delivered |
| Milestone releases on large projects — phased payouts as work progresses | Partial release only when each milestone is complete |
| Parts and materials covered — deposit secures your upfront costs | Deposit refundable if you cancel before work starts |

## Deposit settings

You can set required deposits as a percentage of the total price. This is especially useful for:
- Jobs that require buying materials upfront (parts-heavy work)
- High-value bookings where you want commitment
- Emergency call-outs where you want to ensure the customer is serious

## What Bouul watches

If a dispute is opened, funds remain in escrow until the dispute is resolved — either by mutual agreement or through the jury process. This protects both sides.

## Next steps
- [Understand your earnings dashboard](earnings-dashboard.md)
- [Withdraw your payouts](withdraw-payouts.md)
`,
  },
  {
    slug: 'set-pricing',
    title: 'How to set your pricing & surge rates',
    summary: 'You control what you charge. Bouul\'s pricing tools let you set base rates, add-ons, surge pricing for peak times, and discounts for off-peak periods.',
    sections: ['Pricing types', 'Setting base pricing', 'Surge pricing', 'What Bouul does', 'Next steps'],
    content: `# How to set your pricing & surge rates

You control what you charge. Bouul's pricing tools let you set base rates, add-ons, surge pricing for peak times, and discounts for off-peak periods.

## Pricing types

| Type | How it works |
|------|-------------|
| Fixed price | Set a single price for the service — customer pays exactly that |
| Tiered | Offer basic, standard, and premium versions at different prices |
| Starting from | Show a base price with add-ons that increase the total |
| Surge pricing | Automatically increase prices during peak hours or high-demand periods |
| Off-peak discount | Reduce prices during slow periods to fill gaps |

## Setting base pricing

1. **Open the service editor** from your catalog.
2. **Set your base price** in ZAR.
3. **Choose your pricing type** — fixed, starting from, or tiered.
4. **Add variants** if using tiered pricing (e.g. "Standard: R350", "Premium: R550").
5. **Save**.

## Surge pricing

For emergencies and peak times:
- Set a **surge multiplier** (e.g. 1.5x for after-hours calls)
- Define when surge applies (e.g. weekends, public holidays, after 8pm)
- The customer sees the surge price clearly at checkout

## What Bouul does

Dynamic pricing adjusts your prices based on demand, time of day, and seasonality. The system uses CPI/PPI inflation data to help keep your pricing aligned with market conditions.

## Next steps
- [Understand your earnings dashboard](earnings-dashboard.md)
- [Create service bundles](../vendor-operations/create-bundles.md)
`,
  },
  {
    slug: 'view-transactions',
    title: 'How to view your transaction history',
    summary: 'Your transaction history shows every payment, payout, refund, and fee associated with your account.',
    sections: ['Where to find it', 'What you\'ll see', 'Filtering', 'Export', 'Next steps'],
    content: `# How to view your transaction history

Your transaction history shows every payment, payout, refund, and fee associated with your account.

## Where to find it

From the vendor dashboard, go to **Payouts** or **Earnings** and tap **"Transaction history"**.

## What you'll see

| Entry | What it shows |
|-------|---------------|
| Booking payment | Customer paid for a service — held in escrow |
| Escrow release | Funds released after job completion |
| Withdrawal | Funds transferred to your bank account |
| Refund issued | Refund processed to a customer |
| Platform fee | Monthly fee or service charge |

## Filtering

- **By date** — select a date range
- **By type** — payments, payouts, refunds, fees
- **By status** — pending, completed, failed

## Export

You can export your transaction history as a CSV file for your own records or accounting. Tap the export button at the top of the transaction list.

## Next steps
- [Withdraw your payouts](withdraw-payouts.md)
- [Understand your earnings dashboard](earnings-dashboard.md)
`,
  },
];

export const TUTORIALS_DISPUTES: Tutorial[] = [
  {
    slug: 'respond-to-dispute',
    title: 'How to respond to a customer dispute',
    summary: 'When a customer opens a dispute, you have a limited window to respond. Bouul creates a critical-urgency task the moment a response is due.',
    sections: ['The dispute flow', 'How to respond', 'What happens if you don\'t respond', 'What Bouul watches', 'Next steps'],
    content: `# How to respond to a customer dispute

When a customer opens a dispute, you have a limited window to respond. Bouul creates a critical-urgency task the moment a response is due.

## The dispute flow

1. **Customer files a dispute** — they describe the issue and upload evidence.
2. **You get a critical task** — "Dispute response: [customer's issue]".
3. **You review the claim** — read what the customer said and look at their evidence.
4. **You respond** — add your side of the story, upload your own evidence (photos, messages, booking details).
5. **Resolution** — if both sides agree, the dispute closes. If not, it goes to jury.

## How to respond

1. **Open the dispute task** from the ops board — it's marked critical.
2. **Review the customer's claim** — what are they saying went wrong?
3. **Read the customer's evidence** — photos, messages, or other documentation.
4. **Write your response** — be factual and specific. What happened? What did you do?
5. **Upload your evidence** — photos of the completed work, screenshots of your communication, booking details.
6. **Submit** — your response is recorded and the dispute moves to the next stage.

## What happens if you don't respond

If you don't respond within the window, the dispute escalates automatically. An unanswered dispute typically resolves in the customer's favour.

## What Bouul watches

- **Outstanding response** — if you haven't responded, a critical task stays open until you do
- **Evidence gaps** — if your case is missing evidence, the task blocks until you add it
- **Jury deadline** — if a jury is assigned, a monitoring task keeps the case visible until the verdict

## Next steps
- [Submit evidence for a dispute case](submit-evidence.md)
- [Understand the jury process](understand-jury-process.md)
`,
  },
  {
    slug: 'submit-evidence',
    title: 'How to submit evidence for a dispute case',
    summary: 'When a dispute moves to the evidence stage, you need to provide documentation that supports your side. The quality and completeness of your evidence often determines the outcome.',
    sections: ['What counts as evidence', 'Steps', 'Tips for strong evidence', 'What Bouul watches', 'Next steps'],
    content: `# How to submit evidence for a dispute case

When a dispute moves to the evidence stage, you need to provide documentation that supports your side. The quality and completeness of your evidence often determines the outcome.

## What counts as evidence

- **Photos** — of the completed work, of the condition before you started, of materials used
- **Screenshots** — of your communication with the customer (in-app chat, WhatsApp, SMS)
- **Booking details** — service description, pricing, add-ons selected
- **Completion documentation** — signed-off proof of completion, delivery photos
- **Policy records** — your cancellation or no-show policy as shown at checkout
- **Third-party verification** — any external reports or assessments

## Steps

1. **Open the dispute evidence task** from the ops board.
2. **Review what's missing** — the task lists exactly what evidence is needed.
3. **Gather your evidence** — find the relevant photos, screenshots, and documents.
4. **Upload each piece** — there's a field for each required item.
5. **Add context** — a brief note explaining how each piece supports your case.
6. **Submit** — your evidence is added to the dispute case.

## Tips for strong evidence

- **Be organised** — label photos clearly ("completed_work.jpg", "customer_message_screenshot.png")
- **Be thorough** — more evidence is almost always better than less
- **Be timely** — upload evidence as soon as possible after the dispute opens
- **Be factual** — let the evidence speak; avoid emotional language

## What Bouul watches

If your case is missing required evidence, the task stays **blocked** until you upload it. The dispute won't advance to the next stage until the evidence gap is closed.

## Next steps
- [Respond to a customer dispute](respond-to-dispute.md)
- [Understand the jury process](understand-jury-process.md)
`,
  },
  {
    slug: 'understand-jury-process',
    title: 'How the jury process works',
    summary: 'If a dispute can\'t be resolved mutually between you and the customer, it goes to a jury. The jury reviews both sides\' evidence and issues a binding verdict.',
    sections: ['When a dispute goes to jury', 'What the jury sees', 'Jury timeline', 'What Bouul watches', 'After the verdict', 'Next steps'],
    content: `# How the jury process works

If a dispute can't be resolved mutually between you and the customer, it goes to a jury. The jury reviews both sides' evidence and issues a binding verdict.

## When a dispute goes to jury

1. Customer files a dispute.
2. You respond with your side and evidence.
3. If either party is unsatisfied with the resolution, the dispute escalates to jury.
4. A panel of trained jurors is assigned to review the case.
5. The jury deliberates and issues a verdict.

## What the jury sees

- **The service description** — exactly what was listed and booked
- **Customer's claim** — their description of what went wrong
- **Your response** — your side of the story
- **All evidence** — photos, screenshots, messages from both sides
- **Booking history** — any prior bookings between the same customer and vendor

## Jury timeline

| Stage | Typical duration |
|-------|-----------------|
| Jury assigned | Within 24 hours of escalation |
| Deliberation period | 48-72 hours |
| Verdict issued | At the end of deliberation |
| Resolution period | 48 hours to accept or appeal |

## What Bouul watches

- **Jury deadline approaching** — if the deliberation window is about to close, a monitoring task keeps you informed
- **Verdict follow-up** — when the verdict is issued, a follow-up task guides you through the next steps

## After the verdict

- **If you win** — funds in escrow are released to you
- **If the customer wins** — funds are refunded to the customer
- **Either party can accept or appeal** within the resolution period

## Next steps
- [Respond to a customer dispute](respond-to-dispute.md)
- [Submit evidence](submit-evidence.md)
`,
  },
  {
    slug: 'maintain-reputation',
    title: 'How to maintain your reputation score',
    summary: 'Your reputation is built on reviews, dispute outcomes, and customer feedback. Bouul tracks multiple signals to give customers confidence in booking with you.',
    sections: ['What affects your reputation', 'Tips for a strong reputation', 'What Bouul watches', 'Recovering from a bad review', 'Next steps'],
    content: `# How to maintain your reputation score

Your reputation is built on reviews, dispute outcomes, and customer feedback. Bouul tracks multiple signals to give customers confidence in booking with you.

## What affects your reputation

| Factor | How it impacts you |
|--------|-------------------|
| Average rating | Your star rating from customer reviews |
| Review count | More reviews = more trust |
| Response rate | How often you reply to reviews (both positive and negative) |
| Dispute outcomes | Disputes resolved in your favour vs customer's favour |
| No-show rate | How often customers don't show vs how often you mark them |
| Order completion rate | Percentage of bookings completed successfully |

## Tips for a strong reputation

- **Deliver as promised** — accuracy in service description and pricing prevents disputes
- **Respond to every review** — acknowledged reviews build more trust than silent ones
- **Reply quickly to inquiries** — fast responses convert more bookings
- **Handle issues professionally** — a calm, solution-focused approach to problems prevents escalation
- **Keep your storefront updated** — fresh listings signal an active, reliable business

## What Bouul watches

The system monitors fairness in how reputations are built. Imported reviews from external platforms are kept separately and clearly labelled — they never feed into your Bouul rating or ranking math.

- **Unreplied reviews** trigger a review-response task
- **Dispute outcomes** are factored into your standing
- **Exception rate spikes** create metric alerts that help you identify problems early

## Recovering from a bad review

- **Respond publicly** — show future customers you care about feedback
- **Fix the issue** — if the customer is willing, make it right
- **Learn and adjust** — use the feedback to improve your service or communication
- **Move on** — one bad review among many positives doesn't define you

## Next steps
- [Respond to customer reviews](../vendor-operations/respond-to-reviews.md)
- [Set cancellation & no-show policies](../vendor-operations/set-policies.md)
`,
  },
];

export const TUTORIALS_ADVANCED: Tutorial[] = [
  {
    slug: 'run-ad-campaign',
    title: 'How to run a Bouul ad campaign',
    summary: 'Bouul\'s ad system lets you promote your services to customers who are actively searching. Campaigns are managed from the Ad Suite in your vendor dashboard.',
    sections: ['Ad types', 'Creating a campaign', 'How you\'re charged', 'What Bouul watches', 'Next steps'],
    content: `# How to run a Bouul ad campaign

Bouul's ad system lets you promote your services to customers who are actively searching. Campaigns are managed from the Ad Suite in your vendor dashboard.

## Ad types

| Type | Where it appears | Best for |
|------|-----------------|----------|
| Sponsored service | Search results, category rows | Promoting a specific service |
| Sponsored storefront | Vendor search results | Building brand awareness |
| Boosted post | Discovery feed, social feed | Getting more eyes on content |

## Creating a campaign

1. **Go to Ad Suite** from the vendor dashboard.
2. **Tap "Create campaign"**.
3. **Choose what to promote** — a service, your storefront, or a post.
4. **Set your budget** — daily and total campaign budget.
5. **Choose your audience** — which categories, locations, or search terms to target.
6. **Set your schedule** — campaign start and end dates.
7. **Launch** — your ad goes live after review.

## How you're charged

Bouul uses a flat monthly fee model — you're not charged per click or per impression. Campaign costs are transparent and set when you create the campaign.

## What Bouul watches

The system tracks campaign performance and surfaces metrics in the Ad Analytics page. You can see impressions, clicks, and bookings attributed to each campaign.

## Next steps
- [Use dynamic pricing tools](use-dynamic-pricing.md)
- [Use Zola AI for your business](use-zola-business-mode.md)
`,
  },
  {
    slug: 'use-dynamic-pricing',
    title: 'How to use dynamic pricing tools',
    summary: 'Dynamic pricing automatically adjusts your service prices based on market conditions, demand, and inflation — helping you stay competitive without manually updating every listing.',
    sections: ['How it works', 'What you control', 'Enabling dynamic pricing', 'What Bouul does', 'Next steps'],
    content: `# How to use dynamic pricing tools

Dynamic pricing automatically adjusts your service prices based on market conditions, demand, and inflation — helping you stay competitive without manually updating every listing.

## How it works

Bouul's pricing engine uses:
- **CPI/PPI blended inflation** — 70% Consumer Price Index + 30% Producer Price Index to track real cost changes
- **Demand signals** — how many customers are searching for your type of service
- **Seasonal patterns** — known demand cycles for different trades
- **Time of day** — peak vs off-peak pricing

## What you control

| Setting | What it does |
|---------|-------------|
| Base price | Your starting point before adjustments |
| Max surge cap | The most you'll ever charge (protects customers) |
| Off-peak discount | How much you'll reduce during slow times |
| Manual override | Lock a price for a specific service or period |

## Enabling dynamic pricing

1. **Go to your pricing settings** from the vendor dashboard.
2. **Toggle "Dynamic pricing" on**.
3. **Set your parameters** — max increase, off-peak discount, and any services you want to exclude.
4. **Save** — prices begin adjusting based on the configured rules.

## What Bouul does

- Prices are calculated server-side when a customer views a service
- The dynamic price is shown at checkout alongside the base price
- You can see price adjustments in your earnings history
- The system respects consumer protection rules — surge pricing is always transparent

## Next steps
- [Set your pricing & surge rates](../payments/set-pricing.md)
- [Run a Bouul ad campaign](run-ad-campaign.md)
`,
  },
  {
    slug: 'employee-performance-tracking',
    title: 'How to set up employee performance tracking',
    summary: 'Performance tracking lets you monitor how your team is doing — assignment acceptance rates, completion times, review scores, and more.',
    sections: ['What\'s tracked', 'Where to find it', 'Using performance data', 'What Bouul watches', 'Next steps'],
    content: `# How to set up employee performance tracking

Performance tracking lets you monitor how your team is doing — assignment acceptance rates, completion times, review scores, and more.

## What's tracked

| Metric | What it measures |
|--------|-----------------|
| Assignment acceptance rate | How often an employee accepts assigned work |
| On-time arrival | Percentage of jobs where the employee arrived within the expected window |
| Average completion time | How long jobs take vs estimated duration |
| Customer rating | Average review score from customers |
| Review volume | Number of reviews mentioning the employee by name |
| Active order count | Current workload |
| Availability compliance | How often the employee is available during scheduled hours |

## Where to find it

From the vendor dashboard, go to **Employee Management** and tap an employee's profile. You'll see their performance metrics in the detail view.

## Using performance data

- **Identify top performers** — who consistently delivers on time and gets good reviews
- **Spot coaching opportunities** — who's struggling with punctuality or acceptance
- **Plan scheduling** — match high-skill employees to complex jobs
- **Set incentives** — reward strong performance with priority scheduling or bonuses

## What Bouul watches

- **Slow acceptance patterns** — if an employee is taking longer than usual to accept, a metrics alert surfaces the trend
- **Employee delay patterns** — recurring lateness for a specific employee triggers a signal
- **Workload balance** — the system considers active order counts when auto-assigning

## Next steps
- [Assign employees to bookings](../vendor-operations/assign-employees.md)
- [Use Zola AI for your business](use-zola-business-mode.md)
`,
  },
  {
    slug: 'integrate-payment-processor',
    title: 'How to integrate your payment processor',
    summary: 'Bouul\'s built-in payment processing handles escrow, payouts, and transaction management. For most vendors, no external integration is needed — payments work out of the box.',
    sections: ['What\'s included', 'Setting up your bank details', 'For existing payment processors', 'Custom integrations', 'Next steps'],
    content: `# How to integrate your payment processor

Bouul's built-in payment processing handles escrow, payouts, and transaction management. For most vendors, no external integration is needed — payments work out of the box.

## What's included

- **Escrow on every booking** — funds are secured before work starts
- **Card payments** — customers can pay with debit or credit cards
- **Instant EFT** — Ozow integration for direct bank transfers
- **Mobile payments** — SnapScan and similar mobile wallets
- **Payouts to your bank** — withdraw to any South African bank account

## Setting up your bank details

1. **Go to Payouts** from the vendor dashboard.
2. **Tap "Bank details"**.
3. **Enter your banking information** — bank name, account number, branch code, account type.
4. **Save** — your details are verified and stored securely.

## For existing payment processors

If you already use Yoco, Kazang, or another card machine in parallel with Bouul:
- You can continue using your existing hardware for in-person payments
- Online bookings through Bouul use Bouul's built-in processing
- Transaction history from both channels can be viewed separately

## Custom integrations

For advanced setups (e.g. volume-based pricing, custom reconciliation), contact Bouul support. Most vendors use the built-in processing — no custom integration needed.

## Next steps
- [Withdraw your payouts](../payments/withdraw-payouts.md)
- [Set your pricing & surge rates](../payments/set-pricing.md)
`,
  },
  {
    slug: 'use-zola-business-mode',
    title: 'How to use Zola AI for your business',
    summary: 'Zola isn\'t just for customers — it\'s a business tool that helps you manage operations, answer questions, and automate routine tasks.',
    sections: ['Business mode', 'Weekly briefing', 'How to access', 'What Zola can\'t do', 'Next steps'],
    content: `# How to use Zola AI for your business

Zola isn't just for customers — it's a business tool that helps you manage operations, answer questions, and automate routine tasks.

## Business mode

When you switch to business mode in the Zola chat, the AI can access your vendor data and help with:

| What you ask | What Zola does |
|-------------|----------------|
| "What's my revenue this week?" | Checks your earnings and summarises |
| "Show me open disputes" | Lists active disputes and their status |
| "Which employee has the most bookings?" | Checks assignment data and reports |
| "Summarise my weak areas this week" | Runs a SWOT analysis on your operations |
| "What's my completion rate?" | Calculates from your order history |
| "Draft a response to this dispute" | Prepares a draft response for review |

## Weekly briefing

Zola generates a weekly audit digest for your business:
- Revenue summary for the week
- New reviews and their sentiment
- Pending tasks and at-risk signals
- Performance trends (acceptance rates, completion times)
- Recommendations for improvement

## How to access

1. **Open the Zola chat** from the vendor dashboard.
2. **Type or tap** to start a conversation.
3. **Ask business-specific questions** — Zola recognises business intent and responds with your data.
4. **Review the weekly briefing** — it appears in your Zola feed automatically.

## What Zola can't do

- Zola cannot modify your storefront, services, or policies directly (it suggests, you approve)
- Zola cannot respond to disputes for you (it drafts, you submit)
- Zola cannot access data outside your own vendor account

## Next steps
- [Navigate the ops board](../vendor-operations/use-the-ops-board.md)
- [Review performance metric alerts](../detection/review-metric-alerts.md)
`,
  },
];

export const TUTORIAL_CATEGORIES: TutorialCategory[] = [
  {
    id: 'getting-started',
    icon: 'Rocket',
    label: 'Getting Started',
    color: 'emerald',
    preamble: 'Set up your Bouul presence from scratch — storefront, services, team, and profile completeness.',
    tutorials: TUTORIALS_GETTING_STARTED,
  },
  {
    id: 'vendor-operations',
    icon: 'Building2',
    label: 'Vendor Operations',
    color: 'blue',
    preamble: 'Run your business day-to-day — orders, bundles, inventory, subscriptions, policies, and reviews.',
    tutorials: TUTORIALS_VENDOR_OPERATIONS,
  },
  {
    id: 'employee',
    icon: 'Users',
    label: 'Employee Guides',
    color: 'cyan',
    preamble: 'Everything your team needs — accepting work, updating status, reporting issues, and managing schedules.',
    tutorials: TUTORIALS_EMPLOYEE,
  },
  {
    id: 'consumer',
    icon: 'Search',
    label: 'Consumer Guides',
    color: 'purple',
    preamble: 'Find, book, and manage services — from searching to reviewing, with Zola AI along the way.',
    tutorials: TUTORIALS_CONSUMER,
  },
  {
    id: 'content',
    icon: 'PenSquare',
    label: 'Content & Discovery',
    color: 'amber',
    preamble: 'Publish posts, upload glimpses, use hashtags, and keep your listings fresh and discoverable.',
    tutorials: TUTORIALS_CONTENT,
  },
  {
    id: 'detection',
    icon: 'Activity',
    label: 'Detection & Ops Board',
    color: 'green',
    preamble: 'Understand what Bouul watches automatically and how to respond when signals fire.',
    tutorials: TUTORIALS_DETECTION,
  },
  {
    id: 'payments',
    icon: 'Wallet',
    label: 'Payments & Payouts',
    color: 'rose',
    preamble: 'Track your earnings, withdraw funds, set pricing, and understand how escrow protects every booking.',
    tutorials: TUTORIALS_PAYMENTS,
  },
  {
    id: 'disputes',
    icon: 'Scale',
    label: 'Disputes & Trust',
    color: 'red',
    preamble: 'Respond to disputes, submit evidence, navigate the jury process, and maintain your reputation.',
    tutorials: TUTORIALS_DISPUTES,
  },
  {
    id: 'advanced',
    icon: 'Sparkles',
    label: 'Advanced Features',
    color: 'indigo',
    preamble: 'Ad campaigns, dynamic pricing, employee performance tracking, Zola business mode, and more.',
    tutorials: TUTORIALS_ADVANCED,
  },
];

export const TOTAL_TUTORIALS = 55;
