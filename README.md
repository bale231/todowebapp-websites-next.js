# Tasky — Landing Page

Landing page for the [Tasky](https://github.com/bale231/todowebapp-frontend-reactts) todo web app, built with **Next.js 16** and **Tailwind CSS 4**.

---

## Running locally

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables (see below)
cp .env.local.example .env.local

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## EmailJS setup (Contact page)

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages directly to your inbox — **no backend required**.

### Steps

1. **Create a free account** at [emailjs.com](https://www.emailjs.com/)

2. **Add an Email Service**
   - Go to **Email Services** → **Add New Service**
   - Choose Gmail (or another provider) and connect your account
   - Copy the **Service ID**

3. **Create an Email Template**
   - Go to **Email Templates** → **Create New Template**
   - Use these template variables in your template body:

   ```
   From: {{name}} <{{email}}>
   Subject: {{subject}}

   {{message}}
   ```

   - Copy the **Template ID**

4. **Get your Public Key**
   - Go to **Account** → **General** → copy your **Public Key**

5. **Add credentials to `.env.local`**

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxx
   ```

6. Restart the dev server — the contact form is ready.

---

## Project structure

```
app/
  page.tsx              # Main landing page
  contacts/page.tsx     # Contact form (EmailJS)
  privacy-policy/       # Privacy Policy
  layout.tsx            # Root layout (Navbar + Footer)
  globals.css           # Global styles + glassmorphism utilities
components/
  Navbar.tsx
  Footer.tsx
```

---

## Built by

[Bale231](https://github.com/bale231)
