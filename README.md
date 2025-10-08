# calculator
Simple Go Calculator

A web-based calculator application written in Go with a modern UI featuring:
- Rounded corners on the display
- Circular outlines around number buttons
- Basic arithmetic operations (addition, subtraction, multiplication, division)
- Keyboard support
- Release notes section

## Requirements

- Go 1.20 or higher

## Installation

1. Clone the repository:
```bash
git clone https://github.com/thewrightmatt/calculator.git
cd calculator
```

2. Build the application:
```bash
go build -o calculator main.go
```

## Running the Application

Start the server:
```bash
./calculator
```

The calculator will be available at `http://localhost:8080`

## Usage

### Mouse/Touch
- Click on buttons to input numbers and operators
- Click `=` to calculate the result
- Click `C` to clear the display
- Click `←` to delete the last character

### Keyboard
- Number keys (0-9) to input numbers
- `+`, `-`, `*`, `/` for operators
- `Enter` or `=` to calculate
- `Escape` or `C` to clear
- `Backspace` to delete last character

## Project Structure

```
calculator/
├── main.go              # HTTP server and main application
├── templates/
│   └── calculator.html  # HTML template for the calculator UI
├── static/
│   ├── style.css       # Styles with rounded corners and circular buttons
│   └── script.js       # Calculator functionality
└── README.md
```
