# ACEs Care HUB JAPAN

## Overview

ACEs Care HUB JAPAN is a comprehensive care platform designed to support individuals with ACEs (Adverse Childhood Experiences) and young carers. The platform provides a safe space for connection, dialogue, and recovery through AI-powered care systems and trauma-informed care approaches. Built as a Next.js application with a modern tech stack, it offers both individual and organizational services with varying subscription tiers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14 with App Router for server-side rendering and routing
- **Styling**: Tailwind CSS for utility-first styling with custom design tokens
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: React hooks (useState, useContext) for local state management
- **Icons**: Lucide React for consistent iconography

### Component Structure
- **Modular Design**: Components are organized in a hierarchical structure with reusable UI components in `/components/ui/`
- **Enhanced Components**: Custom components like EnhancedHeader, EnhancedAIChatbot for specialized functionality
- **Layout System**: Responsive design with mobile-first approach using Tailwind breakpoints

### AI Integration
- **Chat System**: Multiple chatbot implementations (EnhancedAIChatbot, SimpleChatbot, AIChatbot) for different use cases
- **AI API**: Custom `/api/chat` endpoint for OpenAI GPT-4o-mini integration with temperature 0.7
- **Conversation Management**: Message history and context preservation for meaningful interactions

### Content Management
- **Static Pages**: Dedicated pages for privacy policy, FAQ, donation, and legal information
- **Dynamic Content**: Component-based content rendering for services, testimonials, and features
- **Responsive Design**: Mobile-optimized layouts with progressive enhancement

### Styling System
- **Design Tokens**: CSS custom properties for consistent theming (light/dark mode support)
- **Color Palette**: Blue-to-green gradient theme with semantic color naming
- **Typography**: Inter font with carefully selected font weights and sizes
- **Animation**: CSS animations and transitions for enhanced user experience

### Development Tools
- **TypeScript**: Full type safety with strict configuration
- **ESLint**: Code quality and consistency enforcement
- **Path Mapping**: Absolute imports using `@/` prefix for cleaner imports

## External Dependencies

### Core Framework Dependencies
- **Next.js**: Full-stack React framework for production-ready applications
- **React**: Component-based UI library for interactive interfaces
- **TypeScript**: Static type checking for improved developer experience

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Accessible, unstyled UI primitives for complex components
- **Lucide React**: Feature-rich icon library with consistent design
- **class-variance-authority**: Type-safe CSS-in-JS variant management
- **clsx & tailwind-merge**: Conditional class name utilities

### AI and Chat Integration
- **Vercel AI SDK**: Streamlined AI integration for chat functionality
- **OpenAI API**: GPT-4o-mini model for conversational AI capabilities

### Form and Interaction
- **React Hook Form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Form validation resolver integration

### Development and Build Tools
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing
- **ESLint**: Code linting and quality assurance

### Additional Libraries
- **date-fns**: Modern date utility library for date manipulation
- **embla-carousel-react**: Touch-friendly carousel component
- **cmdk**: Command palette interface component
- **input-otp**: One-time password input component
- **geist**: Vercel's design system font family

### API Integration
- **Environment Variables**: Secure API key management through environment variables
- **Edge Runtime**: Optimized API routes for better performance