# Wright Compliance Website

## Site Overview

The Wright Compliance website is a professional platform designed for Belinda Wright's financial compliance consulting business. The site includes both public-facing content and a membership area with protected training videos and resources.

## Site Map

\`\`\`
Wright Compliance Website
│
├── Public Pages
│   ├── Home (/)
│   ├── About (/about)
│   ├── Services (/services)
│   ├── ePolicy Store (/epolicy-store)
│   ├── Contact (/contact)
│   └── Membership (/membership)
│
├── Authentication
│   ├── Login (/membership/login)
│   ├── Sign Up (/membership/signup)
│   └── Forgot Password (/membership/forgot-password)
│
└── Member-Only Area (Protected)
    ├── Dashboard (/membership/dashboard)
    ├── Video Player (/membership/dashboard/watch)
    ├── Progress Tracking (/membership/dashboard/progress)
    ├── Billing Management (/membership/dashboard/billing)
    └── Activity History (/membership/dashboard/activity)
\`\`\`

## Page Descriptions

### Public Pages

These pages are accessible to all visitors without requiring authentication:

#### Home (/)
- Main landing page with hero section, services overview, and call-to-action
- Introduces visitors to Wright Compliance and its services
- Features testimonials and key benefits

#### About (/about)
- Information about Belinda Wright and the company history
- Team profiles and company mission
- Expertise and qualifications

#### Services (/services)
- Detailed information about compliance consulting services
- Interactive tabs for different service categories
- Pricing information and service comparisons

#### ePolicy Store (/epolicy-store)
- Digital marketplace for compliance templates, policies, and guides
- Filterable product catalog with pricing
- Product details and preview options

#### Contact (/contact)
- Contact form for inquiries
- Office location and contact information
- Business hours and response time expectations

#### Membership (/membership)
- Overview of membership benefits and features
- Membership plan comparison
- Preview of training video content
- Call-to-action for signing up

### Authentication Pages

These pages handle user authentication for the membership area:

#### Login (/membership/login)
- Email and password login form
- "Remember me" option
- Password recovery link
- Redirect to dashboard upon successful login

#### Sign Up (/membership/signup)
- Registration form for new members
- Plan selection
- Terms of service acceptance
- Email verification process

#### Forgot Password (/membership/forgot-password)
- Password reset request form
- Email verification
- New password creation

### Member-Only Area (Protected)

These pages are only accessible to authenticated members:

#### Dashboard (/membership/dashboard)
- Member homepage with personalized content
- Progress tracking for courses
- Continue watching section
- Video library with search and filtering
- Membership status and account information

#### Video Player (/membership/dashboard/watch)
- Video playback interface
- Progress tracking
- Course content navigation
- Downloadable resources
- Discussion forum for each video
- Related video recommendations

#### Progress Tracking (/membership/dashboard/progress)
- Detailed view of course completion status
- Learning path visualization
- Achievement badges and certificates
- Course history

#### Billing Management (/membership/dashboard/billing)
- Subscription plan details
- Payment method management
- Billing history
- Plan upgrade/downgrade options
- Cancellation process

#### Activity History (/membership/dashboard/activity)
- Log of member activities
- Recently watched videos
- Downloaded resources
- Forum participation
- Completion certificates

## Membership Tiers

The website offers three membership tiers with different levels of access:

### Basic ($49/month)
- Access to core training videos
- Monthly regulatory updates
- Basic compliance templates
- Email support

### Professional ($99/month)
- Full access to all training videos
- Weekly regulatory updates
- Advanced compliance templates
- Priority email support
- Monthly Q&A sessions

### Enterprise ($299/month)
- Unlimited access for up to 10 team members
- Custom training modules
- Real-time regulatory alerts
- Dedicated account manager
- Quarterly compliance reviews

## Technical Implementation

The website is built using:
- Next.js (App Router) for the frontend and API routes
- Authentication system for secure member access
- Responsive design for all device sizes
- Blue-themed UI matching Belinda Wright's branding
- Video streaming capabilities
- Discussion forums for member engagement
- Progress tracking for course completion

## Development Notes

- All member-only pages are protected by authentication middleware
- User sessions are managed securely with HTTP-only cookies
- Video content is served through a content delivery network for optimal performance
- User data and progress are stored in a secure database
- Regular backups ensure data integrity
