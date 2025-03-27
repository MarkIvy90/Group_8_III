document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed'); // Debugging statement

    const checkStatusButton = document.getElementById('check-status');
    if (checkStatusButton) {
        console.log('Check PC Status button found'); // Debugging statement

        checkStatusButton.addEventListener('click', function() {
            console.log('Check PC Status button clicked!'); // Test log
            const confirmation = document.getElementById('scan-confirmation');
            confirmation.style.display = 'block'; // Show the confirmation dialog

            document.getElementById('confirm-yes').onclick = function() {
                document.getElementById('status-message').textContent = 'Checking PC status...';
                
                let progress = 0; // Initialize progress
                const progressBar = document.getElementById('progress-bar');
                progressBar.style.display = 'block'; // Show the progress bar

                const interval = setInterval(function() {
                    progress += 10; // Increment progress
                    updateProgressBar(progress); // Update the progress bar
                    if (progress >= 100) {
                        clearInterval(interval); // Stop the interval when complete
                    }
                }, 300); // Update every 300ms

                setTimeout(function() {
                    progress = 100; // Ensure progress is complete
                    updateProgressBar(progress); // Final update

const problems = [
    'Overheating', 
    'Low Disk Space', 
    'Outdated Drivers', 
    'No Issues Detected', 
    'Malware Detected', 
    'Hardware Failure', 
    'Network Connectivity Issues', 
    'Insufficient RAM',
    'Corrupted System Files',
    'Power Supply Issues',
    'Graphics Card Failure',
    'Hard Drive Failure',
    'Software Conflicts',
    'Overclocking Issues',
    'BIOS Settings Misconfiguration',
    'Insufficient Cooling' // New problem
];

const solutions = [
    'Free up space', 
    'Update drivers', 
    'No action needed', 
    'Run a malware scan', 
    'Check hardware connections', 
    'Restart your router', 
    'Upgrade your RAM',
    'Replace the hard drive', // New solution
    'Check graphics card connections', // New solution
    'Clean the cooling system', // New solution
    'Run a full antivirus scan' // New solution
];

                    
                    const randomProblemIndex = Math.floor(Math.random() * problems.length);
                    const randomSolutionIndex = Math.floor(Math.random() * solutions.length);
                    
                    document.getElementById('status-message').textContent = 'Scanning complete! PC Status Checked!';
                    document.getElementById('problems-list').innerHTML = `<li>${problems[randomProblemIndex]}</li>`;
                    document.getElementById('solutions-list').innerHTML = `<li>${solutions[randomSolutionIndex]}</li>`;
                    confirmation.style.display = 'none'; // Hide the confirmation dialog
                }, 15000); // Updated to 15 seconds
            };

            document.getElementById('confirm-no').onclick = function() {
                confirmation.style.display = 'none'; // Hide the confirmation dialog
            };
        });
    } else {
        console.error('Check PC Status button not found'); // Error log if button is not found
    }
});
