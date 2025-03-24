document.getElementById('action1').addEventListener('click', function() {
    alert('User Settings clicked!');
});

document.getElementById('action2').addEventListener('click', function() {
    alert('Settings clicked!');
});

document.getElementById('action3').addEventListener('click', function() {
    alert('User clicked!');
});

document.getElementById('check-status').disabled = false; // Enable button by default

document.getElementById('check-status').addEventListener('click', function() {

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

            progress = 100; // Ensure progress is complete
            updateProgressBar(progress); // Final update

        const problems = [
            'Scanning...', // Simulate scanning

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
            'BIOS Settings Misconfiguration'

            ];
            const solutions = [
                'Clean the fans', 
                'Free up space', 
                'Update drivers', 
                'No action needed', 
                'Run a malware scan', 
                'Check hardware connections', 
                'Restart your router', 
                'Upgrade your RAM'
            ];
            
            const randomProblemIndex = Math.floor(Math.random() * problems.length);
            const randomSolutionIndex = Math.floor(Math.random() * solutions.length);
            
            document.getElementById('status-message').textContent = 'Scanning complete! PC Status Checked!';

            document.getElementById('problems-list').innerHTML = `<li>${problems[randomProblemIndex]}</li>`;
            document.getElementById('solutions-list').innerHTML = `<li>${solutions[randomSolutionIndex]}</li>`;
            confirmation.style.display = 'none'; // Hide the confirmation dialog
        }, 2000);
    };

    document.getElementById('confirm-no').onclick = function() {
        document.getElementById('check-status').disabled = false; // Re-enable button if no is clicked

        confirmation.style.display = 'none'; // Hide the confirmation dialog
    };
});
