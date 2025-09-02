# Run script for local testing
# This script starts a simple HTTP server to test the site locally

$ErrorActionPreference = "Stop"

# Check if Python is installed
$pythonInstalled = $false
try {
    python --version
    $pythonInstalled = $true
} catch {
    try {
        python3 --version
        $pythonInstalled = $true
        $usePython3 = $true
    } catch {
        $pythonInstalled = $false
    }
}

# Check if Node.js is installed
$nodeInstalled = $false
try {
    node --version
    $nodeInstalled = $true
} catch {
    $nodeInstalled = $false
}

# Function to start server with Python
function Start-PythonServer {
    Write-Host "Starting local server with Python..."
    if ($usePython3) {
        python3 -m http.server 8000
    } else {
        python -m http.server 8000
    }
    Write-Host "Server running at http://localhost:8000"
}

# Function to start server with Node.js
function Start-NodeServer {
    Write-Host "Starting local server with Node.js..."
    # Create a temporary server.js file
    $serverCode = @"
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') filePath = './index.html';
    
    const extname = path.extname(filePath);
    let contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if(err.code === 'ENOENT') {
                fs.readFile('./index.html', (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf-8');
                });
            } else {
                res.writeHead(500);
                res.end('Server Error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(port);

console.log('Server running at http://localhost:${port}/');
"@
    
    $serverCode | Out-File -FilePath "temp-server.js" -Encoding utf8
    node temp-server.js
    # The temp file will be deleted when Node exits
}

# Start the server based on available tools
if ($pythonInstalled) {
    Start-PythonServer
} elseif ($nodeInstalled) {
    Start-NodeServer
} else {
    Write-Host "Error: Neither Python nor Node.js is installed. Please install one of them to run a local server."
    Write-Host "Alternatively, you can open the index.html file directly in your browser."
    exit 1
}
