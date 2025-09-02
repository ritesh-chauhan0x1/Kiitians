# Deployment script for the KIIT Shutdown Notice site
# This script helps deploy the site to GitHub Pages or Netlify

# Exit on error
$ErrorActionPreference = "Stop"

# Function to display help
function Show-Help {
    Write-Host "Deployment Script for KIIT Shutdown Notice"
    Write-Host "Usage:"
    Write-Host "  .\deploy.ps1 [option]"
    Write-Host "Options:"
    Write-Host "  -h, --help     Show this help message"
    Write-Host "  -g, --github   Deploy to GitHub Pages"
    Write-Host "  -n, --netlify  Deploy to Netlify"
    Write-Host "  -v, --vercel   Deploy to Vercel"
}

# Check if no arguments provided
if ($args.Count -eq 0) {
    Show-Help
    exit
}

# Process command line arguments
$option = $args[0]

switch ($option) {
    { $_ -in "-h", "--help" } {
        Show-Help
        exit
    }
    { $_ -in "-g", "--github" } {
        Write-Host "Deploying to GitHub Pages..."
        Write-Host "1. Ensure you have Git installed and configured"
        Write-Host "2. Create a new repository on GitHub if you haven't already"
        Write-Host "3. Run these commands to deploy to GitHub Pages:"
        Write-Host "   git init"
        Write-Host "   git add ."
        Write-Host "   git commit -m 'Initial commit'"
        Write-Host "   git branch -M main"
        Write-Host "   git remote add origin https://github.com/your-username/repository-name.git"
        Write-Host "   git push -u origin main"
        Write-Host "4. Go to repository settings on GitHub and enable GitHub Pages"
    }
    { $_ -in "-n", "--netlify" } {
        Write-Host "Deploying to Netlify..."
        Write-Host "1. Ensure you have the Netlify CLI installed"
        Write-Host "   npm install netlify-cli -g"
        Write-Host "2. Run these commands to deploy to Netlify:"
        Write-Host "   netlify login"
        Write-Host "   netlify deploy"
        Write-Host "3. When ready for production, deploy with:"
        Write-Host "   netlify deploy --prod"
    }
    { $_ -in "-v", "--vercel" } {
        Write-Host "Deploying to Vercel..."
        Write-Host "1. Ensure you have the Vercel CLI installed"
        Write-Host "   npm install -g vercel"
        Write-Host "2. Run these commands to deploy to Vercel:"
        Write-Host "   vercel login"
        Write-Host "   vercel"
        Write-Host "3. When ready for production, deploy with:"
        Write-Host "   vercel --prod"
    }
    default {
        Write-Host "Invalid option: $option"
        Show-Help
        exit 1
    }
}

Write-Host "Deployment instructions displayed. Follow the steps above to complete your deployment."
