# KIIT Site Shutdown Notice

A simple static webpage displaying a shutdown notice for the KIIT website as per administration request.

## Description

This project consists of a static webpage that informs visitors about the shutdown of the KIIT website due to administrative requests. It includes a notice, contact information (Instagram), and a teaser for upcoming projects.

## Features

- Responsive design for all device sizes
- Animated message display with typing effect
- Social media contact links (Instagram and GitHub)
- Modern UI with gradient background
- Animated upcoming features list

### Planned Features
- Student In and Out Tracking System
- CGPA Calculator and Visualization
- Student Photo Management
- Enhanced Privacy Controls
- End-to-End Encrypted Data Storage
- GDPR Compliant User Profiles

## Files Structure

```
kiitians_backend/
├── index.html        # Main HTML document
├── styles.css        # CSS stylesheet
├── script.js         # JavaScript for animations and interactions
├── README.md         # Documentation
├── CNAME             # Custom domain configuration for GitHub Pages
└── .nojekyll         # Disables Jekyll processing on GitHub Pages
```

## Deployment Instructions

### Local Deployment

1. Clone the repository or download the files
2. Open `index.html` in any modern web browser

### GitHub Pages Deployment

1. Create a new GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select the branch to deploy (usually `main`)
5. The site will be published at `https://<username>.github.io/<repository-name>/`

### Custom Domain Deployment

1. Update the `CNAME` file with your domain
2. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IP addresses
   - OR add a CNAME record pointing to `<username>.github.io`

### Netlify Deployment

1. Sign up for Netlify
2. Connect your GitHub repository or drag and drop the project folder
3. Configure build settings (not required for static sites)
4. Deploy

## Customization

- Update the Instagram username in `script.js`
- Update the GitHub username in `script.js`
- Modify colors and styling in `styles.css`
- Edit messages in `index.html`

## Contact

For any questions, contact on:
- Instagram: [@riteshchauhan_15](https://instagram.com/riteshchauhan_15)
- GitHub: [ritesh-chauhan0x1](https://github.com/ritesh-chauhan0x1)
