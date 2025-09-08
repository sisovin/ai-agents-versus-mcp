# AI Agents Versus MCP

**AI Agents Versus MCP** is a modern platform designed to compare, explore, and benchmark AI agent architectures against the emerging Model Context Protocol (MCP) standard. Built using TypeScript, React, Tailwind CSS, and ShadCN UI, this project provides UX/UI, authentication, and admin tooling to showcase the next generation of agent-based AI systems.

---

## 🚀 Overview

Building a UI/UX for an AI agent means creating software that interacts with its environment, gathers data, and uses that data to achieve goals. AI agents can autonomously decide on actions, personalize experiences using memory, and perceive/process information from varied sources.

**Key Characteristics of AI Agents:**
- **Autonomous Actions:** Operate independently or with a human in the loop.
- **Memory & Personalization:** Store preferences/knowledge, use LLMs for processing.
- **Environmental Awareness:** Sense and interpret context for smart decisions.

### Model Context Protocol (MCP)

MCP is an open standard (introduced by Anthropic) enabling AI models (e.g., Claude) to connect with databases, APIs, file systems, and tools—without custom code per integration.

**MCP Architecture:**
- **Host:** AI application (e.g., Claude)
- **MCP Client:** Embedded protocol handler inside the AI model
- **MCP Server:** Middleware for connecting models to tools & external systems

---

## 🧑‍💻 Features

### 🌟 Public Home Page
- Engaging hero section with branding & call-to-action
- Feature cards: Explains AI agents, MCP protocol, and their comparison
- Statistics section and CTA for deeper engagement
- Responsive, dark mode, modern UI

### 🛠️ Header & Footer
- **Header:** Logo, branding, navigation menu (Compare, Research, Blog, About), authentication buttons, theme switcher, sticky & mobile-friendly
- **Footer:** Brand info, social links, comprehensive navigation, resources, company/legal links, tech credits

### 🔒 Authentication
- **Sign In:** Email/password, social login (GitHub/Google), remember me, password toggle, validation, loading states
- **Sign Up:** Name fields, email/password, confirmation, ToS/privacy policy, social registration, validation, loading states

### 🛡️ Admin Dashboard
- **Overview:** Stats, activity feed, quick actions
- **Users:** Management table, actions (view/edit/delete), status indicators, add user
- **Content:** Blog, research, comparison management
- **Settings:** General & security controls
- Responsive, dark mode, interactive tabs, mock data for demo

---

## 🏗️ Tech Stack

- **Framework:** React, Next.js
- **Language:** TypeScript
- **UI:** ShadCN UI, Tailwind CSS
- **Auth:** Social and email/password (extensible)
- **Design:** Responsive layout, dark/light themes, accessibility

---

## 📁 Project Structure

```
/
├── app/               # Next.js app directory
│   ├── page.tsx       # Public home page
│   ├── signin/        # Sign In page
│   ├── signup/        # Sign Up page
│   ├── admin/         # Admin Dashboard
│   └── components/    # Shared UI components
├── public/            # Static assets, logo
├── styles/            # Tailwind, global styles
├── README.md
└── ...
```

---

## 🔗 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/sisovin/ai-agents-versus-mcp.git
   cd ai-agents-versus-mcp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Visit the app**
   - Home: `/`
   - Sign In: `/signin`
   - Sign Up: `/signup`
   - Admin: `/admin`

---

## 📝 Documentation & Resources

- [What are AI agents?](#)
- [Understanding MCP](#)
- [Benchmarks & Use Cases](#)
- [Research Papers](#)
- [API Reference](#)
- [Blog](#)

---

## 🌐 Community & Support

- [GitHub Issues](https://github.com/sisovin/ai-agents-versus-mcp/issues)
- [Contact](mailto:your@email.com)
- [Follow us on Twitter](#)
- [Join our Discord](#)

---

## 🏢 Company & Legal

- About | Team | Careers | Press Kit | Contact
- Privacy Policy | Terms of Service | Cookie Policy

---

## ⚡ Tech Credits

Built with [React](https://react.dev/), [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://ui.shadcn.com/)

---

## 🤝 Contributing

PRs and issues are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

[MIT](LICENSE)

---

**AI Agents Versus MCP**: Compare. Explore. Build the future of agent-based AI.
